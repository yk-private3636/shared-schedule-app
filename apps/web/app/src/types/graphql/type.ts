import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CategoryGql = {
  __typename?: 'CategoryGQL';
  id: Scalars['String']['output'];
  kind: RelationshipCategoryKind;
  name: Scalars['String']['output'];
  status: RelationshipCategoryStatus;
  userId: Scalars['String']['output'];
};

export type CreateCategoriesInput = {
  categories: Array<SyncCategoryGql>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategories: Array<CategoryGql>;
  saveUser: UserGql;
};


export type MutationCreateCategoriesArgs = {
  createCategoriesInput: CreateCategoriesInput;
};

export type Query = {
  __typename?: 'Query';
  categories: Array<CategoryGql>;
  isCategoryCustomized: Scalars['Boolean']['output'];
};

/** The kind of a category. */
export enum RelationshipCategoryKind {
  Custom = 'CUSTOM',
  Default = 'DEFAULT'
}

/** The status of a category. */
export enum RelationshipCategoryStatus {
  Active = 'ACTIVE',
  Archived = 'ARCHIVED',
  Inactive = 'INACTIVE'
}

export type SyncCategoryGql = {
  id: Scalars['String']['input'];
  kind: RelationshipCategoryKind;
  name: Scalars['String']['input'];
  status: RelationshipCategoryStatus;
};

export type UserGql = {
  __typename?: 'UserGQL';
  email: Scalars['String']['output'];
  familyName: Scalars['String']['output'];
  givenName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  status: UserStatus;
};

/** The status of a user. */
export enum UserStatus {
  Active = 'ACTIVE',
  Banned = 'BANNED',
  Suspended = 'SUSPENDED',
  Withdrawn = 'WITHDRAWN'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = Record<PropertyKey, never>, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;





/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CategoryGQL: ResolverTypeWrapper<CategoryGql>;
  CreateCategoriesInput: CreateCategoriesInput;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  RelationshipCategoryKind: RelationshipCategoryKind;
  RelationshipCategoryStatus: RelationshipCategoryStatus;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  SyncCategoryGQL: SyncCategoryGql;
  UserGQL: ResolverTypeWrapper<UserGql>;
  UserStatus: UserStatus;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  CategoryGQL: CategoryGql;
  CreateCategoriesInput: CreateCategoriesInput;
  Mutation: Record<PropertyKey, never>;
  Query: Record<PropertyKey, never>;
  String: Scalars['String']['output'];
  SyncCategoryGQL: SyncCategoryGql;
  UserGQL: UserGql;
};

export type CategoryGqlResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryGQL'] = ResolversParentTypes['CategoryGQL']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['RelationshipCategoryKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['RelationshipCategoryStatus'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createCategories?: Resolver<Array<ResolversTypes['CategoryGQL']>, ParentType, ContextType, RequireFields<MutationCreateCategoriesArgs, 'createCategoriesInput'>>;
  saveUser?: Resolver<ResolversTypes['UserGQL'], ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  categories?: Resolver<Array<ResolversTypes['CategoryGQL']>, ParentType, ContextType>;
  isCategoryCustomized?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type UserGqlResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserGQL'] = ResolversParentTypes['UserGQL']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  familyName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  givenName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['UserStatus'], ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  CategoryGQL?: CategoryGqlResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UserGQL?: UserGqlResolvers<ContextType>;
};

