import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { IKVStorageProvider } from "../kv-storage/ikv-storage-provider";
import { MapMarkerType, MapMarkerTypeResource } from '../map-marker/map-marker-type.enum';

@Component({
  selector: 'app-map-marker-filter',
  templateUrl: './map-marker-filter.component.html',
  styleUrls: ['./map-marker-filter.component.scss']
})
export class MapMarkerFilterComponent extends MapMarkerTypeResource implements OnInit {
  @Input()
  public selectedMapMarkerTypes: MapMarkerType[];
  @Output()
  public selectedMapMarkerTypesChange: EventEmitter<MapMarkerType[]> = new EventEmitter<MapMarkerType[]>();
  public mapMarkerTypes: MapMarkerType[] = Object.keys(MapMarkerType).map(k=> k as MapMarkerType);

  public storageKey: string = 'selectedMapMarkerTypes';

  constructor(
    @Inject('IKVStorageProvider')
    private _storageProvider: IKVStorageProvider
  ) { super(); }

  ngOnInit(): void {
    this.selectedMapMarkerTypes = this._storageProvider.load(this.storageKey, Object.keys(MapMarkerType).map(k=> k as MapMarkerType));
    this.selectedMapMarkerTypesChange.emit(this.selectedMapMarkerTypes);
  }

  mapMarkerFilterChanged(): void {
    this.selectedMapMarkerTypesChange.emit(this.selectedMapMarkerTypes);
    this._storageProvider.store(this.storageKey, this.selectedMapMarkerTypes);
  }
}
