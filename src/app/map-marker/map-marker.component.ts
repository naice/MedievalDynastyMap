import { Component, OnDestroy, OnInit } from '@angular/core';
import { MapMarkerFilterController } from '../map-marker-filter/map-marker-filter.controller';
import { MapMarker } from '../map-marker';
import { MapMarkerStorage } from '../map-marker-storage';
import { MapMarkerBaseComponent } from '../map-marker-base-component';
import { MapMarkerEditorController } from '../map-marker-editor/map-marker-editor.controller';

@Component({
  selector: 'app-map-marker',
  templateUrl: './map-marker.component.html',
  styleUrls: ['./map-marker.component.scss']
})
export class MapMarkerComponent extends MapMarkerBaseComponent implements OnInit, OnDestroy {

  constructor(
    mapMarker: MapMarker,
    mapMarkerStorage: MapMarkerStorage,
    mapMarkerFilterController: MapMarkerFilterController,
    mapMarkerEditorController: MapMarkerEditorController,
  ) {
    super(mapMarker, mapMarkerStorage, mapMarkerFilterController, mapMarkerEditorController);
    super.width = 264;
    super.height = 264;
  }
  ngOnDestroy(): void {
    super.OnDestroy();
  }
  ngOnInit(): void {
    super.OnInit();
  }

}
