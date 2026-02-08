/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CategoryDetailGql = {
  __typename?: 'CategoryDetailGQL';
  id: Scalars['String']['output'];
  kind: RelationshipCategoryKind;
  name: Scalars['String']['output'];
  status: RelationshipCategoryStatus;
  userId: Scalars['String']['output'];
};

export type CategoryGql = {
  __typename?: 'CategoryGQL';
  details: Array<CategoryDetailGql>;
  isCustomized: Scalars['Boolean']['output'];
};

export type CreateCategoriesInput = {
  categories: Array<SyncCategoryGql>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategories: CategoryGql;
  saveUser: UserGql;
};


export type MutationCreateCategoriesArgs = {
  createCategoriesInput: CreateCategoriesInput;
};

export type Query = {
  __typename?: 'Query';
  categories: CategoryGql;
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

export type CreateCategoriesMutationVariables = Exact<{
  createCategoriesInput: CreateCategoriesInput;
}>;


export type CreateCategoriesMutation = { __typename?: 'Mutation', createCategories: { __typename?: 'CategoryGQL', details: Array<{ __typename?: 'CategoryDetailGQL', id: string, name: string, kind: RelationshipCategoryKind, status: RelationshipCategoryStatus }> } };

export type SaveUserMutationVariables = Exact<{ [key: string]: never; }>;


export type SaveUserMutation = { __typename?: 'Mutation', saveUser: { __typename?: 'UserGQL', id: string, email: string, givenName: string, familyName: string, status: UserStatus } };

export type GetSchedulesPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSchedulesPageQuery = { __typename?: 'Query', categories: { __typename?: 'CategoryGQL', isCustomized: boolean, details: Array<{ __typename?: 'CategoryDetailGQL', id: string, name: string, kind: RelationshipCategoryKind, status: RelationshipCategoryStatus }> } };


export const CreateCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createCategories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createCategoriesInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCategoriesInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCategories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createCategoriesInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createCategoriesInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]} as unknown as DocumentNode<CreateCategoriesMutation, CreateCategoriesMutationVariables>;
export const SaveUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SaveUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"saveUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"givenName"}},{"kind":"Field","name":{"kind":"Name","value":"familyName"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<SaveUserMutation, SaveUserMutationVariables>;
export const GetSchedulesPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSchedulesPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isCustomized"}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]} as unknown as DocumentNode<GetSchedulesPageQuery, GetSchedulesPageQueryVariables>;