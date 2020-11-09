
export interface IKVStorageProvider {
  store<T>(key: string, data: T): void;
  load<T>(key: string, defaultValue?: T): T;
}
