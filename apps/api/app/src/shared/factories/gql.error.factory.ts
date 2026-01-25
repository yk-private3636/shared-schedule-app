import { GraphQLError } from "graphql";
import { DomainError } from "../errors/DomainError";
import {
  UnauthorizedException,
  ForbiddenException,
  NotFoundException,
  BadRequestException,
  ConflictException,
} from "@nestjs/common";

export class GqlErrorFactory {
  static fromError(err: Error): GraphQLError {
    if (err instanceof DomainError) {
      return new GraphQLError(err.message, {
        extensions: { code: err.getCode() },
      });
    }

    if (err instanceof UnauthorizedException) {
      return new GraphQLError(err.message, {
        extensions: { code: "UNAUTHENTICATED" },
      });
    }

    if (err instanceof ForbiddenException) {
      return new GraphQLError(err.message, {
        extensions: { code: "FORBIDDEN" },
      });
    }

    if (err instanceof NotFoundException) {
      return new GraphQLError(err.message, {
        extensions: { code: "NOT_FOUND" },
      });
    }

    if (err instanceof BadRequestException) {
      return new GraphQLError(err.message, {
        extensions: { code: "BAD_REQUEST" },
      });
    }

    if (err instanceof ConflictException) {
      return new GraphQLError(err.message, {
        extensions: { code: "CONFLICT" },
      });
    }

    return new GraphQLError("Internal server error", {
      extensions: { code: "INTERNAL_SERVER_ERROR" },
    });
  }
}
