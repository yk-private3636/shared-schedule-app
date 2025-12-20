import { PrismaClient } from '@prisma/client';
import { IDatabaseClientService } from '../interfaces/database-client.service.interface';
import { WriterClient, ReaderClient } from '../types/database-client.type';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaClientService implements IDatabaseClientService {
  private writeClient: PrismaClient | null = null;
  private readClient: PrismaClient | null = null;

  public async writer<T = void>(
    fn: (tx: WriterClient) => Promise<T>,
  ): Promise<T> {
    const client = this.getWriteClient();
    return client.$transaction(fn);
  }

  public async reader<T = void>(
    fn: (tx: ReaderClient) => Promise<T>,
  ): Promise<T> {
    const client = this.getReadClient();
    return fn(client);
  }

  private getWriteClient(): PrismaClient {
    if (this.writeClient === null) {
      this.writeClient = new PrismaClient({
        datasourceUrl: process.env.DATABASE_WRITER_URL,
      });
    }

    return this.writeClient;
  }

  private getReadClient(): PrismaClient {
    if (this.readClient === null) {
      this.readClient = new PrismaClient({
        datasourceUrl: process.env.DATABASE_READER_URL,
      });
    }

    return this.readClient;
  }
}
