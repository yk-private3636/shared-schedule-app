import { WriterClient, ReaderClient } from '../types/database-client.type';

export interface IDatabaseClientService {
  writer<T>(fn: (tx: WriterClient) => Promise<T>): Promise<T>;
  reader<T>(fn: (tx: ReaderClient) => Promise<T>): Promise<T>;
}
