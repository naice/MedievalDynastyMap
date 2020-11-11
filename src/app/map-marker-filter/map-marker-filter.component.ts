import { Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocalStorageProvider } from '../kv-storage/local-storage-provider';
import { MapMarkerType, MapMarkerTypeResource } from '../map-marker-type.enum';
import { MapMarkerFilterController } from './map-marker-filter.controller';

@Component({
  selector: 'app-map-marker-filter',
  templateUrl: './map-marker-filter.component.html',
  styleUrls: ['./map-marker-filter.component.scss']
})
export class MapMarkerFilterComponent extends MapMarkerTypeResource implements OnInit, OnDestroy {
  @Input()
  public selectedMapMarkerTypes: MapMarkerType[];
  public mapMarkerTypes: MapMarkerType[] = Object.keys(MapMarkerType).map(k=> MapMarkerType[k]);
  public storageKey: string = 'selectedMapMarkerTypes';

  constructor(
    private _storageProvider: LocalStorageProvider,
    private _mapMarkerFilterController: MapMarkerFilterController
  ) { super(); }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.selectedMapMarkerTypes = this._storageProvider.load(this.storageKey, Object.keys(MapMarkerType).map(k=> MapMarkerType[k]));
    this.mapMarkerFilterChanged();
  }

  mapMarkerFilterChanged(): void {
    this._mapMarkerFilterController.emit(this.selectedMapMarkerTypes);
    this._storageProvider.store(this.storageKey, this.selectedMapMarkerTypes);
  }
}
