import { EventEmitter, Injectable } from '@angular/core';
import * as _ from 'lodash';
import { MapMarkerType } from '../map-marker-type.enum';

@Injectable({
  providedIn: 'root'
})
export class MapMarkerFilterController {

  public eventFilterSelected: EventEmitter<MapMarkerType[]> = new EventEmitter<MapMarkerType[]>();

  private _last: MapMarkerType[] = [];

  public emit(types: MapMarkerType[]): void {
    this._last = types;
    this.eventFilterSelected.emit(types);
  }

  public update(): void {
    this.emit(this._last);
  }

  public getFilter(): MapMarkerType[] {
    return this._last;
  }

  public ensureEnabled(type: MapMarkerType): void {
    if (!_.some(this._last, t => t === type)) {
      this._last.push(type);
      this.update();
    }
  }

}
