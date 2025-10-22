import { Public } from '@/authz/authz.module';
import { Controller, Get } from '@nestjs/common';

@Controller('/api/v1/health')
export class HealthController {
  constructor() {}

  @Public()
  @Get()
  check() {
    return {
      text: 'health check ok',
    };
  }
}
