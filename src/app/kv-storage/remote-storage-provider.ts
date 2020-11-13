import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { KVStorageProvider } from './ik-storage-provider';

@Injectable({ providedIn: 'root' })
export class RemoteStorageProvider extends KVStorageProvider {

  private baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    super();
    this.baseUrl = 'http://localhost:50120/';
  }

  store<T>(key: string, data: T): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl + key, JSON.stringify(data, null, 4));
  }
  load<T>(key: string, defaultValue?: T): Observable<T> {
    const promise = new Promise<T>(async (resolve) => {
      let result: T = null;
      try { result = await this.http.get<T>(this.baseUrl + key).toPromise(); }
      catch (error) {
        console.log('RemoteStorageProvider.load', error)
        result = defaultValue;
      }
      resolve(result);
    });

    return from(promise);
  }
}
