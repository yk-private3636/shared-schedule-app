import { Resolver, Query, Mutation, Args, Int, Context, GqlExecutionContext } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './types/graphql/user';
import { Inject } from '@nestjs/common';
import { type IIdpService } from '@/authz/interfaces/idp.service.interface';
import { Auth0UserProfile } from '@/authz/types/auth0.type';
import { TYPES } from '@/authz/constants/di-token';
import { CreateUserDTO } from './dto/create.user.dto';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    @Inject(TYPES.Auth0Service) private readonly idpService: IIdpService<Auth0UserProfile>,
    private readonly usersService: UsersService
  ) {}

  @Mutation(() => User)
  async createUser(@Context() ctx): Promise<User> {
    try {
      const req: Request = ctx.req;

      const accessToken: string = req.headers['authorization']?.replace('Bearer ', '');

      const idpUser = await this.idpService.getUserInfo(accessToken);

      const createDTO = new CreateUserDTO(
        idpUser.sub,
        idpUser.email,
        idpUser.family_name,
        idpUser.given_name
      );

      const userDTO = await this.usersService.create(createDTO);

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
