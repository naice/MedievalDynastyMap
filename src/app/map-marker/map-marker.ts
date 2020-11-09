import { Injector } from '@angular/core';
import { MapMarkerType } from './map-marker-type.enum';

export class MapMarkerOrigin {
  x:number;
  y:number;
}
export class MapMarker {
  id: string;
  origin: MapMarkerOrigin;
  type: MapMarkerType;
}