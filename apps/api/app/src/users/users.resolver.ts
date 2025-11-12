import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './types/graphql/user';
import { Inject } from '@nestjs/common';
import { type IIdpService } from '@/authz/interfaces/idp.service.interface';
import { TYPES } from '@/authz/constants/di-token';
import { CreateUserDTOFactory } from './factories/create-user-dto.factory';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    @Inject(TYPES.IdpService)
    private readonly idpService: IIdpService,
    private readonly usersService: UsersService
  ) {}

  @Mutation(() => User)
  async createUser(@Context() ctx): Promise<User> {
    try {
      const req: Request = ctx.req;

      const accessToken = req.headers['authorization']?.replace('Bearer ', '') as string;

      const idpUserProfile = await this.idpService.getUserProfile(accessToken);

      const createUserDTO = CreateUserDTOFactory.fromIdpProfile(idpUserProfile);

      const userDTO = await this.usersService.create(createUserDTO);

      return {
        id: userDTO.getId(),
        email: userDTO.getEmail(),
        familyName: userDTO.getFamilyName(),
        givenName: userDTO.getGivenName()
      };

    } catch (err: unknown) {
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
