import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Subject, Subscription } from 'rxjs';
import { MapMarkerFilterController } from '../map-marker-filter/map-marker-filter.controller';
import { MapMarker } from './map-marker';
import { MapMarkerStorage } from './map-marker-storage';
import { MapMarkerType, MapMarkerTypeResource } from './map-marker-type.enum';

@Component({
  selector: 'app-map-marker',
  templateUrl: './map-marker.component.html',
  styleUrls: ['./map-marker.component.scss']
})
export class MapMarkerComponent extends MapMarkerTypeResource implements OnInit, OnDestroy {

  width: number = 264;
  height: number = 264;
  visible: boolean = true;

  private _subscription: Subscription;

  constructor(
    public mapMarker: MapMarker,
    private _mapMarkerStorage: MapMarkerStorage,
    private _mapMarkerFilterController: MapMarkerFilterController
  ) {
    super();
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
      this._subscription = null;
    }
  }

  ngOnInit(): void {
    this._subscription = this._mapMarkerFilterController.eventFilterSelected.subscribe((types: MapMarkerType[]) => this.applyFilter(types));
    this.applyFilter(this._mapMarkerFilterController.getFilter());
  }

  applyFilter(types: MapMarkerType[]) {
    const vis = _.some(types, marker => this.mapMarker.type === marker);
    if (this.visible !== vis) {
      this.visible = vis;
    }
  }

  onDelete(): void {
    this._mapMarkerStorage.remove(this.mapMarker.id);
  }

}
