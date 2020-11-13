import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageProvider } from './local-storage-provider';
import { RemoteStorageProvider } from './remote-storage-provider';

export abstract class KVStorageProvider {
  abstract store<T>(key: string, data: T): Observable<boolean>;
  abstract load<T>(key: string, defaultValue?: T): Observable<T>;
}
