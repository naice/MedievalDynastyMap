import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageProvider {

  public store<T>(key: string, data: T): void {
    window.localStorage.setItem(key, JSON.stringify(data));
  }

  public load<T>(key: string, defaultValue?: T): T {
    let rval: T = defaultValue;
    try {
      const raw = window.localStorage.getItem(key);
      if (raw !== null) {
        rval = JSON.parse(window.localStorage.getItem(key));
      }
    } catch (error) {
      console.log(error);
    }
    return rval;
  }
}
