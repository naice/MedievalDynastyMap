import * as _ from 'lodash';
import { Subscription } from 'rxjs';
import { MapMarkerFilterController } from './map-marker-filter/map-marker-filter.controller';
import { MapMarker } from './map-marker';
import { MapMarkerStorage } from './map-marker-storage';
import { MapMarkerType, MapMarkerTypeResource } from './map-marker-type.enum';
import { MapMarkerEditorController } from './map-marker-editor/map-marker-editor.controller';
import { environment } from 'src/environments/environment';

export abstract class MapMarkerBaseComponent extends MapMarkerTypeResource {

  width: number = 264;
  height: number = 264;
  visible: boolean = true;
  isEditMode: boolean = false;

  protected _subscriptions: Array<Subscription> = [];

  constructor(
    public mapMarker: MapMarker,
    protected _mapMarkerStorage: MapMarkerStorage,
    protected _mapMarkerFilterController: MapMarkerFilterController,
    private _mapMarkerEditorController: MapMarkerEditorController,
  ) {
    super();
  }

  OnDestroy(): void {
    this._subscriptions.forEach(sub => sub.unsubscribe());
  }

  OnInit(): void {
    this._subscriptions.push(
      this._mapMarkerFilterController.eventFilterSelected.subscribe((types: MapMarkerType[]) => this.applyFilter(types)));
    this._subscriptions.push(
      this._mapMarkerEditorController.eventOnChangeEditMode.subscribe((isEditMode: boolean) => this.applyEditMode(isEditMode)));
    this.applyEditMode(this._mapMarkerEditorController.isEditMode);
    this.applyFilter(this._mapMarkerFilterController.getFilter());
  }

  applyEditMode(isEditMode: boolean) {
    if (environment.production && this.mapMarker.type == MapMarkerType.CITY) {
      // users should not be able to delete / edit cities for now.
      return;
    }
    this.isEditMode = isEditMode;
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
