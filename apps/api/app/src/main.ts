import '@/instrumentation';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  /** appインスタンス生成 */
  const app = await NestFactory.create(AppModule);

  /** appインスタンス設定 */
  app.enableCors({ origin: process.env.CLIENT_ORIGIN });

  /** listening */
  await app.listen(process.env.APP_PORT ?? 8080);
}

bootstrap(); // eslint-disable-line @typescript-eslint/no-floating-promises
