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
  payload?: MapMarkerPayloadCity | MapMarkerPayloadPerson;
}
export class MapMarkerPayloadPerson {
  name: string;
  sellingItemIds: string[];
}
export enum ItemType {
  Weapon = "Weapon",
  Food = "Food",
  Misc = "Misc",
  Cloth = "Cloth",
  Tool = "Tool",
  Seed = "Seed",
  Resource = "Resource",
  Animal = "Animal",
}
export class Item {
  id: string;
  name: string;
  type: ItemType;
  icon: string;
}
export class MapMarkerPayloadCity {
  name: string;
  persons: MapMarkerPayloadPerson[];
}
