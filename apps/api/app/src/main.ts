import "@/instrumentation";

import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { GraphQLFilterError } from "./shared/filters/gql.filter";

async function bootstrap() {
  /** appインスタンス生成 */
  const app = await NestFactory.create(AppModule);

  /** appインスタンス設定 */
  app.enableCors({ origin: process.env.CLIENT_ORIGIN });

  /** シャットダウンフック有効化 */
  app.enableShutdownHooks();

  /** グローバルフィルター設定 */
  app.useGlobalFilters(new GraphQLFilterError());

  /** listening */
  await app.listen(process.env.APP_PORT ?? 8080);
}

bootstrap(); // eslint-disable-line @typescript-eslint/no-floating-promises
