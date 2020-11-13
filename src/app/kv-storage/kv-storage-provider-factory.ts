import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { KVStorageProvider } from './ik-storage-provider';
import { LocalStorageProvider } from './local-storage-provider';
import { RemoteStorageProvider } from './remote-storage-provider';

export const KVStorageProviderFactory = (httpClient: HttpClient): KVStorageProvider => {
  if (environment.production) {
    return new LocalStorageProvider();
  }

  return new RemoteStorageProvider(httpClient);
}
