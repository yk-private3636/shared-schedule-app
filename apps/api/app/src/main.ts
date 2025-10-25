import '@/instrumentation';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalGuards(new GqlAuthGuard());
  await app.listen(process.env.APP_PORT ?? 8080);
}

bootstrap(); // eslint-disable-line @typescript-eslint/no-floating-promises
