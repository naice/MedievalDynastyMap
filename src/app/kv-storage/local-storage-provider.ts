import { IKVStorageProvider } from './ikv-storage-provider';


export class LocalStorageProvider implements IKVStorageProvider {

  store<T>(key: string, data: T): void {
    window.localStorage.setItem(key, JSON.stringify(data));
  }

  load<T>(key: string, defaultValue?: T): T {
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
