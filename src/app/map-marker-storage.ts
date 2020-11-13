import { EventEmitter, Injectable } from '@angular/core';
import { KVStorageProvider } from './kv-storage/ik-storage-provider';
import { MapMarker } from './map-marker';
import StaticMapMarkers from '../assets/data/map-markers.json';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MapMarkerStorage {
  public markers: MapMarker[] = [];
  public addedEvent: EventEmitter<MapMarker> = new EventEmitter<MapMarker>();
  public removedEvent: EventEmitter<MapMarker> = new EventEmitter<MapMarker>();
  public storageKey: string = 'mapMarkersStorage';

  constructor(
    private _storageProvider: KVStorageProvider
  ) {}
  public async load() {
    this.markers.length = 0;
    let loadedMarkers: MapMarker[] = await this._storageProvider.load<MapMarker[]>(this.storageKey, null).toPromise();
    if (loadedMarkers === null) {
      console.log('could not load map markers');
      if (environment.production) {
        loadedMarkers = StaticMapMarkers as MapMarker[];
      } else {
        return;
      }
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
