import type { ReaderClient, WriterClient } from "../types/database-client";

export interface IDatabaseClientService {
  writer<T>(fn: (tx: WriterClient) => Promise<T>): Promise<T>;
  reader<T>(fn: (tx: ReaderClient) => Promise<T>): Promise<T>;
}
