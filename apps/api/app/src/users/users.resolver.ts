import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './types/graphql/user';
import { Inject } from '@nestjs/common';
import { type IIdpService } from '@/authz/interfaces/idp.service.interface';
import { TYPES } from '@/authz/constants/di-token';
import { UserDTOFactory } from './factories/user-dto.factory';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    @Inject(TYPES.IdpService)
    private readonly idpService: IIdpService,
    private readonly usersService: UsersService,
  ) {}

  @Mutation(() => User)
  async saveUser(@Context() ctx: { req: Request }): Promise<User> {
    try {
      const accessToken = (ctx.req.headers['authorization'] as string).replace(
        'Bearer ',
        '',
      );

      const idpUserProfile = await this.idpService.getUserProfile(accessToken);

      const saveUserDTO =
        UserDTOFactory.toSaveDtoFromIdpProfile(idpUserProfile);
      const userDTO = await this.usersService.save(saveUserDTO);

      return {
        id: userDTO.getId(),
        email: userDTO.getEmail(),
        familyName: userDTO.getFamilyName(),
        givenName: userDTO.getGivenName(),
      };
    } catch (err: unknown) {
      console.error('Error in saveUser resolver:', err);
      throw err;
    }
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOne(id);
  }
}
