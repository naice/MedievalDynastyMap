import { Component, Input, OnInit } from '@angular/core';
import { MapMarker, MapMarkerOrigin } from './map-marker';
import { MapMarkerStorage } from './map-marker-storage';
import { MapMarkerType, MapMarkerTypeResource } from './map-marker-type.enum';

@Component({
  selector: 'app-map-marker',
  templateUrl: './map-marker.component.html',
  styleUrls: ['./map-marker.component.scss']
})
export class MapMarkerComponent extends MapMarkerTypeResource implements OnInit {

  width: number = 264;
  height: number = 264;
  markerImageUrl: string;

  constructor(
    public mapMarker: MapMarker,
    private _mapMarkerStorage: MapMarkerStorage
  ) {
    super();
    this.markerImageUrl = this.getImageSrc(mapMarker.type);
  }

  ngOnInit(): void {

  }

  onDelete(): void {
    this._mapMarkerStorage.remove(this.mapMarker.id);
  }

}
