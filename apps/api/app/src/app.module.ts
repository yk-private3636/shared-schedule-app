import { Module } from '@nestjs/common';
import { HealthController } from '@/healthz/health.controller';
import { AuthzModule } from './authz/authz.module';

@Module({
  imports: [AuthzModule],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
