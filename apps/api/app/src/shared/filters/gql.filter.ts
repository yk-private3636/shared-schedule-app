import { ArgumentsHost, Catch, Logger } from "@nestjs/common";
import { GqlExceptionFilter } from "@nestjs/graphql";
import { GqlErrorFactory } from "../factories/gql.error.factory";

@Catch()
export class GraphQLFilterError implements GqlExceptionFilter {
  catch(exception: Error, _host: ArgumentsHost) {
    Logger.error(exception);
    return GqlErrorFactory.fromError(exception);
  }
}
