import { Inject } from "@nestjs/common";
import { Args, Context, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { TYPES } from "@/authz/constants/di-token";
import type { IIdpService } from "@/authz/interfaces/idp.service";
import { UserDTOFactory } from "./factories/user.dto.factory";
import { UserGQL } from "./types/gql";
import { UsersService } from "./users.service";

@Resolver(() => UserGQL)
export class UsersResolver {
  constructor(
    @Inject(TYPES.IdpService)
    private readonly idpService: IIdpService,
    private readonly usersService: UsersService,
  ) {}

  @Mutation(() => UserGQL)
  async saveUser(@Context() ctx: { req: Request }): Promise<UserGQL> {
    try {
      const accessToken = (
        (ctx.req.headers["authorization"] ?? "") as string
      ).replace("Bearer ", "");

      const idpUserProfile =
        await this.idpService.fetchUserProfile(accessToken);

      const saveUserDTO =
        UserDTOFactory.toSaveDtoFromIdpProfile(idpUserProfile);

      const userDTO = await this.usersService.save(saveUserDTO);

      return {
        id: userDTO.getId(),
        email: userDTO.getEmail(),
        familyName: userDTO.getFamilyName(),
        givenName: userDTO.getGivenName(),
        status: userDTO.getStatus(),
      };
    } catch (err: unknown) {
      console.error("Error in saveUser resolver:", err);
      throw err;
    }
  }

  @Query(() => [UserGQL], { name: "users" })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => UserGQL, { name: "user" })
  findOne(@Args("id", { type: () => Int }) id: number) {
    return this.usersService.findOne(id);
  }
}
