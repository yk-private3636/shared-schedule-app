import { Injectable, OnApplicationShutdown } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import type { IDatabaseClientService } from "../interfaces/database-client.service";
import type { ReaderClient, WriterClient } from "../types/database-client";

@Injectable()
export class PrismaClientService
  implements IDatabaseClientService, OnApplicationShutdown
{
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

  public async onApplicationShutdown(): Promise<void> {
    if (this.writeClient !== null) {
      await this.writeClient.$disconnect();
      this.writeClient = null;
    }

    if (this.readClient !== null) {
      await this.readClient.$disconnect();
      this.readClient = null;
    }
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
