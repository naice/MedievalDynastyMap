import { Component, OnDestroy, OnInit } from '@angular/core';
import { MapMarkerFilterController } from '../map-marker-filter/map-marker-filter.controller';
import { MapMarker } from '../map-marker';
import { MapMarkerStorage } from '../map-marker-storage';
import { MapMarkerBaseComponent } from '../map-marker-base-component';

@Component({
  selector: 'app-map-marker',
  templateUrl: './map-marker.component.html',
  styleUrls: ['./map-marker.component.scss']
})
export class MapMarkerComponent extends MapMarkerBaseComponent implements OnInit, OnDestroy {

  constructor(
    mapMarker: MapMarker,
    mapMarkerStorage: MapMarkerStorage,
    mapMarkerFilterController: MapMarkerFilterController
  ) {
    super(mapMarker, mapMarkerStorage, mapMarkerFilterController);
  }
  ngOnDestroy(): void {
    super.OnDestroy();
  }
  ngOnInit(): void {
    super.OnInit();
  }

}
