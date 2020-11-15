import * as _ from 'lodash';
import { Component, Injector, Input, OnInit, StaticProvider } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { PanZoomConfig, PanZoomAPI, PanZoomConfigOptions } from 'ngx-panzoom';
import { Subscription } from 'rxjs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { MapMarker, MapMarkerOrigin } from './map-marker';
import { MapMarkerStorage } from './map-marker-storage';
import { MapMarkerType, MapMarkerTypeResource } from './map-marker-type.enum';
import { MapMarkerComponent } from './map-marker/map-marker.component';
import { MapMarkerFilterController } from './map-marker-filter/map-marker-filter.controller';
import { MapMarkerCityComponent } from './map-marker-city/map-marker-city.component';
import { MapApiProvider } from './map-api-provider';
import { MapMarkerEditorController } from './map-marker-editor/map-marker-editor.controller';
import { City, CityData } from './static-data';

export interface MapMarkerContainer {
  mapMarker: MapMarker;
  injector: Injector;
  component: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'MedievalDynastyMap';
  panZoomConfigOptions: PanZoomConfigOptions = {
    zoomLevels: 12,
    neutralZoomLevel: 5,
    scalePerZoomLevel: 1.5,
    freeMouseWheel: false,
    invertMouseWheel: true,
    zoomButtonIncrement: 0.4,
    dynamicContentDimensions: true,
    zoomOnDoubleClick: false,
    initialZoomToFit: {x: 3870, y: 2946.7, width: window.innerWidth * 1.8, height: window.innerHeight * 1.8 }
  };
  panZoomConfig: PanZoomConfig = new PanZoomConfig(this.panZoomConfigOptions);
  mapMarkers: Array<MapMarkerContainer> = [];
  apiSubscription: Subscription;
  isEditorOpen: boolean = false;

  private _markerStorageAddedSubscription: Subscription;
  private _markerStorageRemovedSubscription: Subscription;

  constructor(
    private injector: Injector,
    private _mapMarkerStorage: MapMarkerStorage,
    private _mapMarkerFilterController: MapMarkerFilterController,
    private _mapApiProvider: MapApiProvider,
    private _mapMarkerEditorController: MapMarkerEditorController,
    private _cityData: CityData,
  ) {
    this._markerStorageAddedSubscription = _mapMarkerStorage.addedEvent.subscribe((marker: MapMarker) => this.addMapMarker(marker));
    this._markerStorageRemovedSubscription = _mapMarkerStorage.removedEvent.subscribe((marker: MapMarker) => this.removeMapMarker(marker));
  }

  ngOnInit(): void {
    this.apiSubscription = this.panZoomConfig.api.subscribe(
      (api: PanZoomAPI) => {
        this._mapApiProvider.setApi(api);
    });

    this._mapMarkerStorage.load();
  }

  center(): void {
    this._mapApiProvider.centerContent();
  }

  onDoubleClick(event: MouseEvent): void {
    const origin: MapMarkerOrigin = { x: event.offsetX, y: event.offsetY };
    this._mapMarkerEditorController.eventOnCreateMapMarker.emit(origin);
  }

  getComponentTypeByMapMarkerType(type: MapMarkerType): any {
    switch (type) {
      case MapMarkerType.CITY:
        return MapMarkerCityComponent;

      default:
        return MapMarkerComponent;
    }
  }

  addMapMarker(mapMarker: MapMarker): void {
    this.mapMarkers.push(
      this.createMapMarkerContainer(mapMarker));
  }

  removeMapMarker(mapMarker: MapMarker): void {
    const i = this.mapMarkers.findIndex(container => container.mapMarker.id == mapMarker.id);
    this.mapMarkers.splice(i, 1);
  }

  removeAllMapMarker(): void {
    this.mapMarkers = [];
  }

  createMapMarkerContainer(mapMarker: MapMarker): MapMarkerContainer {
    const providers: StaticProvider[] = [
      { provide: MapMarker, useValue: mapMarker }
    ];
    let component: any = MapMarkerComponent;
    switch (mapMarker.type) {
      case MapMarkerType.CITY:
        component = MapMarkerCityComponent;
        console.log(mapMarker.payloadId);
        providers.push({ provide: City, useValue: this._cityData.cities.find(city => city.id == mapMarker.payloadId) });
        break;
      default: break;
    }
    let markerContainer: MapMarkerContainer = {
      component,
      mapMarker,
      injector: Injector.create({
        providers,
        parent:this.injector
      })
    };

    return markerContainer;
  }

  getMapMarkers(markerContainers: MapMarkerContainer[]): MapMarker[] {
    const markers = [];
    for (const marker of markerContainers) {
      markers.push(marker.mapMarker);
    }
    return markers;
  }

  getCities(): Array<MapMarker> {
    return this.mapMarkers
      .filter(container => container.mapMarker.type == MapMarkerType.CITY)
      .map(container => container.mapMarker);
  }
}
