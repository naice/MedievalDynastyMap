import { EventEmitter, Injectable } from '@angular/core';
import { KVStorageProvider } from './kv-storage/ik-storage-provider';
import { MapMarker } from './map-marker';
import StaticMapMarkers from '../assets/data/map-markers.json';
import { environment } from 'src/environments/environment';
import { MapMarkerType } from './map-marker-type.enum';

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

  public async load(forceResetDefault: boolean = false): Promise<void> {
    // clear all
    this.markers.length = 0;
    // load from storage
    let loadedMarkers: MapMarker[] = await this._storageProvider.load<MapMarker[]>(this.storageKey, null).toPromise();

    // try load from static map markers
    if (forceResetDefault || loadedMarkers === null) {
      if (environment.production) {
        loadedMarkers = StaticMapMarkers as MapMarker[];
      } else {
        console.log('could not load map markers');
        return;
      }
    }

    for (const marker of loadedMarkers) {
      this.addInternal(marker);
    }
  }

  public store(): Promise<boolean> {
    return this._storageProvider.store(this.storageKey, this.markers).toPromise();
  }

  private addInternal(marker: MapMarker) {
    this.markers.push(marker);
    this.addedEvent.emit(marker);
  }

  public add(marker: MapMarker) {
    this.addInternal(marker);
    this.store();
  }

  public async removeAll(): Promise<boolean> {
    while (this.markers.length > 0) {
      await this.remove(this.markers[0].id, false);
    }
    return await this.store();
  }

  public async removeCustomMarkers(): Promise<boolean> {
    const dontDeleteMarkerTypes = [
      MapMarkerType.CITY,
    ]
    for (let index = this.markers.length-1; index >= 0; index--) {
      const marker = this.markers[index];
      if(dontDeleteMarkerTypes.some(type => type === marker.type)) {
        continue;
      }
      await this.remove(marker.id, false);
    }
    return await this.store();
  }

  public async remove(id: string, store: boolean = true): Promise<boolean> {
    const i = this.markers.findIndex(marker => marker.id === id);
    if (i === -1) {
      return false;
    }
    const marker = this.markers[i];
    this.markers.splice(i, 1);
    this.removedEvent.emit(marker);
    if (store) {
      return await this.store();
    }
    return true;
  }

  public async resetAll(): Promise<void> {
    await this.load(true);
    await this.store();
  }
}
