import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Subscription } from 'rxjs';
import { MapMarker, MapMarkerOrigin } from '../map-marker';
import { MapMarkerFilterController } from '../map-marker-filter/map-marker-filter.controller';
import { MapMarkerStorage } from '../map-marker-storage';
import { MapMarkerType, MapMarkerTypeResource } from '../map-marker-type.enum';
import { MapMarkerEditorController } from './map-marker-editor.controller';

export interface MapMarkerTypeOption {
  displayText: string;
  type: MapMarkerType;
}

@Component({
  selector: 'app-map-marker-editor',
  templateUrl: './map-marker-editor.component.html',
  styleUrls: ['./map-marker-editor.component.scss']
})
export class MapMarkerEditorComponent extends MapMarkerTypeResource implements OnInit, OnDestroy {

  @Input()
  public selectedMapMarkerTypes: MapMarkerType[] = [ MapMarkerType.BEAR ];
  public mapMarkerTypes: MapMarkerType[] = Object.keys(MapMarkerType).map(k=> MapMarkerType[k]).filter(type => type != MapMarkerType.CITY);

  @Input()
  public get isEditorEnabled(): boolean {
    return this._isEditorEnabled;
  }
  public set isEditorEnabled(value: boolean) {
    if (value === this._isEditorEnabled) {
      return;
    }
    this._isEditorEnabled = value;
    this._mapMarkerEditorController.eventOnChangeEditMode.emit(value);
  }

  private _subs: Subscription[] = [];
  private _isEditorEnabled: boolean;

  constructor(
    private _mapMarkerEditorController: MapMarkerEditorController,
    private _mapMarkerStorage: MapMarkerStorage,
    private _mapMarkerFilterController: MapMarkerFilterController,
  ) {
    super();

  }
  ngOnDestroy(): void {
    this._subs.forEach(sub => sub.unsubscribe());
  }

  ngOnInit(): void {
    this._subs.push(this._mapMarkerEditorController.eventOnCreateMapMarker.subscribe((origin: MapMarkerOrigin) => this.onCreateMapMarker(origin)));
  }

  onCreateMapMarker(origin: MapMarkerOrigin) {
    const type = this.selectedMapMarkerTypes[0];
    const id = UUID.UUID();
    const mapMarker: MapMarker = { id, origin, type };
    /*
    if (type == MapMarkerType.CITY) {
      mapMarker.payload = {
        name: 'Sambor',
        persons: [
          {
            name: 'dummy person 1',
            sellingItemIds: ['T_Icon_Apple.png', 'T_Icon_Crossbow.png'],
          },
          {
            name: 'dummy person 2',
            sellingItemIds: ['T_Icon_Apple.png', 'T_Icon_Crossbow.png'],
          },
        ]
      };
    }
    */
    this._mapMarkerFilterController.ensureEnabled(type);
    this._mapMarkerStorage.add(mapMarker);
  }
}
