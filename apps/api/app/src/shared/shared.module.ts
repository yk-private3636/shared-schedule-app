import { Module } from "@nestjs/common";
import { PrismaClientService } from "@/shared/services/database-client.service";
import { TYPES } from "./constants/di";

@Module({
  exports: [
    {
      provide: TYPES.DatabaseClientService,
      useClass: PrismaClientService,
    },
  ],
  providers: [
    {
      provide: TYPES.DatabaseClientService,
      useClass: PrismaClientService,
    },
  ],
})
export class SharedModule {}
