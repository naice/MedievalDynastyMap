import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MapMarkerType, MapMarkerTypeResource } from '../map-marker-type.enum';

export interface MapMarkerTypeOption {
  displayText: string;
  type: MapMarkerType;
}

@Component({
  selector: 'app-map-marker-editor',
  templateUrl: './map-marker-editor.component.html',
  styleUrls: ['./map-marker-editor.component.scss']
})
export class MapMarkerEditorComponent extends MapMarkerTypeResource implements OnInit {

  public mapMarkerTypes: MapMarkerType[] = Object.keys(MapMarkerType).map(k=> MapMarkerType[k]);
  @Input()
  selectMapMarkerTypeOptions = MapMarkerType;

  private _selectedMapMarkerType: MapMarkerType = MapMarkerType.BEAR;
  @Input()
  public get selectedMapMarkerType(): MapMarkerType {
    return this._selectedMapMarkerType;
  }
  public set selectedMapMarkerType(value: MapMarkerType) {
    if (value === this._selectedMapMarkerType) {
      return;
    }
    this._selectedMapMarkerType = value;
    this.selectedMapMarkerTypeChange.emit(value);
  }
  @Output()
  selectedMapMarkerTypeChange: EventEmitter<MapMarkerType> = new EventEmitter<MapMarkerType>();

  constructor() { super(); }

  ngOnInit(): void {
  }

}
