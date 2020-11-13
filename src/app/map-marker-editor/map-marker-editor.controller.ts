import { EventEmitter, Injectable } from '@angular/core';
import { MapMarkerOrigin } from '../map-marker';

@Injectable({ providedIn: 'root' })
export class MapMarkerEditorController {
  public eventOnCreateMapMarker: EventEmitter<MapMarkerOrigin> = new EventEmitter<MapMarkerOrigin>();
  public eventOnChangeEditMode: EventEmitter<boolean> = new EventEmitter<boolean>();

  public isEditMode: boolean = false;

  constructor() {
    this.eventOnChangeEditMode.subscribe((isEditMode: boolean) => this.isEditMode = isEditMode);
  }
}
