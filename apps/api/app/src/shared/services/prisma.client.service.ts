import { PrismaClient } from "@prisma/client";
import { IDatabaseClientService } from "../interfaces/database.client.service.interface";
import { PrismaTx } from "../types/prisma.type";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaClientService implements IDatabaseClientService {

    private writeClient: PrismaClient | null = null;
    private readClient: PrismaClient | null = null;

    public getWriteClient(): PrismaClient {
        if (this.writeClient === null) {
            this.writeClient = new PrismaClient({
                datasourceUrl: process.env.DATABASE_WRITER_URL
            });
        }

        return this.writeClient;
    }

    public getReadClient(): PrismaClient {
        if (this.readClient === null) {
            this.readClient = new PrismaClient({
                datasourceUrl: process.env.DATABASE_READER_URL
            });
        }

        return this.readClient;
    }

    public async transaction<T = void>(fn: (tx: PrismaTx) => Promise<T>): Promise<T> {
        const client = this.getWriteClient();
        return client.$transaction(fn);
    }
}