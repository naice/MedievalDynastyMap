import { Component, OnInit } from '@angular/core';
import { MapMarker, MapMarkerPayloadCity } from '../map-marker';
import { MapMarkerBaseComponent } from '../map-marker-base-component';
import { MapMarkerEditorController } from '../map-marker-editor/map-marker-editor.controller';
import { MapMarkerFilterController } from '../map-marker-filter/map-marker-filter.controller';
import { MapMarkerStorage } from '../map-marker-storage';

@Component({
  selector: 'app-map-marker-city',
  templateUrl: './map-marker-city.component.html',
  styleUrls: ['./map-marker-city.component.scss']
})
export class MapMarkerCityComponent extends MapMarkerBaseComponent {

  public city: MapMarkerPayloadCity;

  constructor(
    mapMarker: MapMarker,
    mapMarkerStorage: MapMarkerStorage,
    mapMarkerFilterController: MapMarkerFilterController,
    mapMarkerEditorController: MapMarkerEditorController,
  ) {
    super(mapMarker, mapMarkerStorage, mapMarkerFilterController, mapMarkerEditorController);
    this.city = mapMarker.payload as MapMarkerPayloadCity;
    super.width = 512;
    super.height = 91;
  }
  ngOnDestroy(): void {
    super.OnDestroy();
  }
  ngOnInit(): void {
    super.OnInit();
  }
}
