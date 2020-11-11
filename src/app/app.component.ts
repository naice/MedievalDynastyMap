import * as _ from 'lodash';
import { Component, Injector, Input, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { PanZoomConfig, PanZoomAPI, PanZoomConfigOptions } from 'ngx-panzoom';
import { Subscription } from 'rxjs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { MapMarker, MapMarkerOrigin } from './map-marker';
import { MapMarkerStorage } from './map-marker-storage';
import { MapMarkerType, MapMarkerTypeResource } from './map-marker-type.enum';
import { MapMarkerComponent } from './map-marker/map-marker.component';
import { MapMarkerFilterController } from './map-marker-filter/map-marker-filter.controller';

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
    invertMouseWheel: false,
    zoomButtonIncrement: 0.4,
    dynamicContentDimensions: true,
    zoomOnDoubleClick: false,
  };
  panZoomConfig: PanZoomConfig = new PanZoomConfig(this.panZoomConfigOptions);
  isEditMode: boolean = true;
  mapMarkers: MapMarkerContainer[] = [];
  panZoomAPI: PanZoomAPI;
  apiSubscription: Subscription;
  editMapMarkerType: MapMarkerType = MapMarkerType.BEAR;

  private _markerStorageAddedSubscription: Subscription;
  private _markerStorageRemovedSubscription: Subscription;

  constructor(
    private injector: Injector,
    private _mapMarkerStorage: MapMarkerStorage,
    private _mapMarkerFilterController: MapMarkerFilterController,
  ) {
    this._markerStorageAddedSubscription = _mapMarkerStorage.addedEvent.subscribe((marker: MapMarker) => this.addMapMarker(marker));
    this._markerStorageRemovedSubscription = _mapMarkerStorage.removedEvent.subscribe((marker: MapMarker) => this.removeMapMarker(marker));
  }

  ngOnInit(): void {
    this.apiSubscription = this.panZoomConfig.api.subscribe(
      (api: PanZoomAPI) => {
        this.panZoomAPI = api;
    });

    this._mapMarkerStorage.load();
  }

  center(): void {
    this.panZoomAPI.centerContent();
  }

  onDoubleClick(event: MouseEvent): void {
    const origin: MapMarkerOrigin = { x: event.offsetX, y: event.offsetY };
    const type = this.editMapMarkerType;
    const id = UUID.UUID();
    const mapMarker: MapMarker = { id, origin, type };
    this._mapMarkerFilterController.ensureEnabled(type);
    this._mapMarkerStorage.add(mapMarker);
  }

  addMapMarker(mapMarker: MapMarker): void {
    const component = MapMarkerComponent;
    this.mapMarkers.push(this.createMapMarkerContainer(mapMarker, component));
  }
  removeMapMarker(mapMarker: MapMarker): void {
    const i = this.mapMarkers.findIndex(container => container.mapMarker.id == mapMarker.id);
    this.mapMarkers.splice(i, 1);
  }
  removeAllMapMarker(): void {
    this.mapMarkers = [];
  }

  createMapMarkerContainer(mapMarker: MapMarker, component: any): MapMarkerContainer {
    let markerContainer: MapMarkerContainer = {
      component,
      mapMarker,
      injector: Injector.create({
        providers:[
          { provide: MapMarker, useValue: mapMarker },
        ],
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
}
