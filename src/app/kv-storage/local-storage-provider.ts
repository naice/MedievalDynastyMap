import { Injectable } from '@angular/core';
import { EMPTY, from, Observable } from 'rxjs';
import { KVStorageProvider } from './ik-storage-provider';

@Injectable({ providedIn: 'root' })
export class LocalStorageProvider extends KVStorageProvider {

  public store<T>(key: string, data: T): Observable<boolean> {
    window.localStorage.setItem(key, JSON.stringify(data));
    return from([true]);
  }

  public load<T>(key: string, defaultValue?: T): Observable<T> {
    let rval: T = defaultValue;
    try {
      const raw = window.localStorage.getItem(key);
      if (raw !== null) {
        rval = JSON.parse(window.localStorage.getItem(key));
      }
    } catch (error) {
      console.log(error);
    }
    return from([rval]);
  }
}
