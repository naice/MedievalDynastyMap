import { EventEmitter, Inject, Injectable } from '@angular/core';
import { RemoteStorageProvider } from './kv-storage/remote-storage-provider';
import { MapMarker } from './map-marker';

@Injectable({
  providedIn: 'root',
})
export class MapMarkerStorage {
  public markers: MapMarker[] = [];
  public addedEvent: EventEmitter<MapMarker> = new EventEmitter<MapMarker>();
  public removedEvent: EventEmitter<MapMarker> = new EventEmitter<MapMarker>();
  public storageKey: string = 'mapMarkersStorage';

  constructor(
    private _storageProvider: RemoteStorageProvider
  ) {}
  public async load() {
    this.markers.length = 0;
    const loadedMarkers: MapMarker[] = await this._storageProvider.load<MapMarker[]>(this.storageKey, null).toPromise();
    if (loadedMarkers === null) {
      console.log('could not load map markers');
      return;
    }

    for (const marker of loadedMarkers) {
      this.addInternal(marker);
    }
  }

  public store() {
    this._storageProvider.store(this.storageKey, this.markers).toPromise();
  }

  private addInternal(marker: MapMarker) {
    this.markers.push(marker);
    this.addedEvent.emit(marker);
  }

  public add(marker: MapMarker) {
    this.addInternal(marker);
    this.store();
  }

  public removeAll() {
    for (const marker of this.markers) {
      this.remove(marker.id);
    }
  }

  public remove(id: string) {
    const i = this.markers.findIndex(marker => marker.id === id);
    if (i === -1) {
      return;
    }
    const marker = this.markers[i];
    this.markers.splice(i, 1);
    this.removedEvent.emit(marker);
    this.store();
  }
}
