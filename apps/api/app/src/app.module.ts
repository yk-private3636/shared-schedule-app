import { ApolloDriver, type ApolloDriverConfig } from "@nestjs/apollo";
import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { HealthController } from "@/healthz/health.controller";
import { AuthzModule } from "./authz/authz.module";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      include: [],
      autoSchemaFile: "../../shared/graphql/schema.gql",
      graphiql: false,
    }),
    HttpModule,
    AuthzModule,
    UsersModule,
  ],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
