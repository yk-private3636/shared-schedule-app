import { Controller, Get } from '@nestjs/common';

@Controller('/api/v1/health')
export class HealthController {
  constructor() {}

  @Get()
  check() {
    return {
      text: 'health check ok',
    };
  }
}
