import { type ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard } from "@nestjs/passport";
import { IS_PUBLIC_KEY } from "./authz.module";

@Injectable()
export class GqlAuthGuard extends AuthGuard("jwt") {
  constructor(private reflector: Reflector) {
    super();
  }

  /** GraphQLリクエストコンテキストを返却するためのオーバーライド(getRequest) */
  /** https://docs.nestjs.com/graphql/other-features#execution-context */
  /** https://docs.nestjs.com/security/authentication#implementing-the-authentication-guard */
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext<{ req: Request }>();
    return req;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    // @Publicデコレーターがついていれば、guard処理対象外
    if (isPublic) {
      return true;
    }

    await super.canActivate(context);

    return true;
  }
}
