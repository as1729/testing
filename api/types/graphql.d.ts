import { Prisma } from "@prisma/client"
import { MergePrismaWithSdlTypes, MakeRelationsOptional } from '@redwoodjs/api'
import { User as PrismaUser, Upload as PrismaUpload, ReportingPeriod as PrismaReportingPeriod } from '@prisma/client'
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { RedwoodGraphQLContext } from '@redwoodjs/graphql-server/dist/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ResolverFn<TResult, TParent, TContext, TArgs> = (
      args?: TArgs,
      obj?: { root: TParent; context: TContext; info: GraphQLResolveInfo }
    ) => TResult | Promise<TResult>
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
export type OptArgsResolverFn<TResult, TParent = {}, TContext = {}, TArgs = {}> = (
      args?: TArgs,
      obj?: { root: TParent; context: TContext; info: GraphQLResolveInfo }
    ) => TResult | Promise<TResult>

    export type RequiredResolverFn<TResult, TParent = {}, TContext = {}, TArgs = {}> = (
      args: TArgs,
      obj: { root: TParent; context: TContext; info: GraphQLResolveInfo }
    ) => TResult | Promise<TResult>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: number;
  Date: Date | string;
  DateTime: Date | string;
  JSON: Prisma.JsonValue;
  JSONObject: Prisma.JsonObject;
  Time: Date | string;
};

export type CreateReportingPeriodInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type CreateUploadInput = {
  name: Scalars['String'];
  userId: Scalars['Int'];
  validatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CreateUserInput = {
  email: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createReportingPeriod: ReportingPeriod;
  createUpload: Upload;
  createUser: User;
  deleteReportingPeriod: ReportingPeriod;
  deleteUpload: Upload;
  deleteUser: User;
  updateReportingPeriod: ReportingPeriod;
  updateUpload: Upload;
  updateUser: User;
};


export type MutationcreateReportingPeriodArgs = {
  input: CreateReportingPeriodInput;
};


export type MutationcreateUploadArgs = {
  input: CreateUploadInput;
};


export type MutationcreateUserArgs = {
  input: CreateUserInput;
};


export type MutationdeleteReportingPeriodArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteUploadArgs = {
  id: Scalars['Int'];
};


export type MutationdeleteUserArgs = {
  id: Scalars['Int'];
};


export type MutationupdateReportingPeriodArgs = {
  id: Scalars['Int'];
  input: UpdateReportingPeriodInput;
};


export type MutationupdateUploadArgs = {
  id: Scalars['Int'];
  input: UpdateUploadInput;
};


export type MutationupdateUserArgs = {
  id: Scalars['Int'];
  input: UpdateUserInput;
};

/** About the Redwood queries. */
export type Query = {
  __typename?: 'Query';
  /** Fetches the Redwood root schema. */
  redwood?: Maybe<Redwood>;
  reportingPeriod?: Maybe<ReportingPeriod>;
  reportingPeriods: Array<ReportingPeriod>;
  upload?: Maybe<Upload>;
  uploads: Array<Upload>;
  user?: Maybe<User>;
  users: Array<User>;
};


/** About the Redwood queries. */
export type QueryreportingPeriodArgs = {
  id: Scalars['Int'];
};


/** About the Redwood queries. */
export type QueryuploadArgs = {
  id: Scalars['Int'];
};


/** About the Redwood queries. */
export type QueryuserArgs = {
  id: Scalars['Int'];
};

/**
 * The RedwoodJS Root Schema
 *
 * Defines details about RedwoodJS such as the current user and version information.
 */
export type Redwood = {
  __typename?: 'Redwood';
  /** The current user. */
  currentUser?: Maybe<Scalars['JSON']>;
  /** The version of Prisma. */
  prismaVersion?: Maybe<Scalars['String']>;
  /** The version of Redwood. */
  version?: Maybe<Scalars['String']>;
};

export type ReportingPeriod = {
  __typename?: 'ReportingPeriod';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
};

export type UpdateReportingPeriodInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateUploadInput = {
  name?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Int']>;
  validatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Upload = {
  __typename?: 'Upload';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
  validatedAt?: Maybe<Scalars['DateTime']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  uploads: Array<Maybe<Upload>>;
};

type MaybeOrArrayOfMaybe<T> = T | Maybe<T> | Maybe<T>[];
type AllMappedModels = MaybeOrArrayOfMaybe<ReportingPeriod | Upload | User>


export type ResolverTypeWrapper<T> = Promise<T> | T;

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>;

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

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateReportingPeriodInput: CreateReportingPeriodInput;
  CreateUploadInput: CreateUploadInput;
  CreateUserInput: CreateUserInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Redwood: ResolverTypeWrapper<Redwood>;
  ReportingPeriod: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaReportingPeriod, MakeRelationsOptional<ReportingPeriod, AllMappedModels>, AllMappedModels>>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  UpdateReportingPeriodInput: UpdateReportingPeriodInput;
  UpdateUploadInput: UpdateUploadInput;
  UpdateUserInput: UpdateUserInput;
  Upload: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaUpload, MakeRelationsOptional<Upload, AllMappedModels>, AllMappedModels>>;
  User: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaUser, MakeRelationsOptional<User, AllMappedModels>, AllMappedModels>>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BigInt: Scalars['BigInt'];
  Boolean: Scalars['Boolean'];
  CreateReportingPeriodInput: CreateReportingPeriodInput;
  CreateUploadInput: CreateUploadInput;
  CreateUserInput: CreateUserInput;
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  JSONObject: Scalars['JSONObject'];
  Mutation: {};
  Query: {};
  Redwood: Redwood;
  ReportingPeriod: MergePrismaWithSdlTypes<PrismaReportingPeriod, MakeRelationsOptional<ReportingPeriod, AllMappedModels>, AllMappedModels>;
  String: Scalars['String'];
  Time: Scalars['Time'];
  UpdateReportingPeriodInput: UpdateReportingPeriodInput;
  UpdateUploadInput: UpdateUploadInput;
  UpdateUserInput: UpdateUserInput;
  Upload: MergePrismaWithSdlTypes<PrismaUpload, MakeRelationsOptional<Upload, AllMappedModels>, AllMappedModels>;
  User: MergePrismaWithSdlTypes<PrismaUser, MakeRelationsOptional<User, AllMappedModels>, AllMappedModels>;
};

export type requireAuthDirectiveArgs = {
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type requireAuthDirectiveResolver<Result, Parent, ContextType = RedwoodGraphQLContext, Args = requireAuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type skipAuthDirectiveArgs = { };

export type skipAuthDirectiveResolver<Result, Parent, ContextType = RedwoodGraphQLContext, Args = skipAuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JSONObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type MutationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createReportingPeriod: Resolver<ResolversTypes['ReportingPeriod'], ParentType, ContextType, RequireFields<MutationcreateReportingPeriodArgs, 'input'>>;
  createUpload: Resolver<ResolversTypes['Upload'], ParentType, ContextType, RequireFields<MutationcreateUploadArgs, 'input'>>;
  createUser: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationcreateUserArgs, 'input'>>;
  deleteReportingPeriod: Resolver<ResolversTypes['ReportingPeriod'], ParentType, ContextType, RequireFields<MutationdeleteReportingPeriodArgs, 'id'>>;
  deleteUpload: Resolver<ResolversTypes['Upload'], ParentType, ContextType, RequireFields<MutationdeleteUploadArgs, 'id'>>;
  deleteUser: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationdeleteUserArgs, 'id'>>;
  updateReportingPeriod: Resolver<ResolversTypes['ReportingPeriod'], ParentType, ContextType, RequireFields<MutationupdateReportingPeriodArgs, 'id' | 'input'>>;
  updateUpload: Resolver<ResolversTypes['Upload'], ParentType, ContextType, RequireFields<MutationupdateUploadArgs, 'id' | 'input'>>;
  updateUser: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationupdateUserArgs, 'id' | 'input'>>;
};

export type MutationRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createReportingPeriod?: RequiredResolverFn<ResolversTypes['ReportingPeriod'], ParentType, ContextType, RequireFields<MutationcreateReportingPeriodArgs, 'input'>>;
  createUpload?: RequiredResolverFn<ResolversTypes['Upload'], ParentType, ContextType, RequireFields<MutationcreateUploadArgs, 'input'>>;
  createUser?: RequiredResolverFn<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationcreateUserArgs, 'input'>>;
  deleteReportingPeriod?: RequiredResolverFn<ResolversTypes['ReportingPeriod'], ParentType, ContextType, RequireFields<MutationdeleteReportingPeriodArgs, 'id'>>;
  deleteUpload?: RequiredResolverFn<ResolversTypes['Upload'], ParentType, ContextType, RequireFields<MutationdeleteUploadArgs, 'id'>>;
  deleteUser?: RequiredResolverFn<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationdeleteUserArgs, 'id'>>;
  updateReportingPeriod?: RequiredResolverFn<ResolversTypes['ReportingPeriod'], ParentType, ContextType, RequireFields<MutationupdateReportingPeriodArgs, 'id' | 'input'>>;
  updateUpload?: RequiredResolverFn<ResolversTypes['Upload'], ParentType, ContextType, RequireFields<MutationupdateUploadArgs, 'id' | 'input'>>;
  updateUser?: RequiredResolverFn<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationupdateUserArgs, 'id' | 'input'>>;
};

export type QueryResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  redwood: OptArgsResolverFn<Maybe<ResolversTypes['Redwood']>, ParentType, ContextType>;
  reportingPeriod: Resolver<Maybe<ResolversTypes['ReportingPeriod']>, ParentType, ContextType, RequireFields<QueryreportingPeriodArgs, 'id'>>;
  reportingPeriods: OptArgsResolverFn<Array<ResolversTypes['ReportingPeriod']>, ParentType, ContextType>;
  upload: Resolver<Maybe<ResolversTypes['Upload']>, ParentType, ContextType, RequireFields<QueryuploadArgs, 'id'>>;
  uploads: OptArgsResolverFn<Array<ResolversTypes['Upload']>, ParentType, ContextType>;
  user: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'id'>>;
  users: OptArgsResolverFn<Array<ResolversTypes['User']>, ParentType, ContextType>;
};

export type QueryRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  redwood?: RequiredResolverFn<Maybe<ResolversTypes['Redwood']>, ParentType, ContextType>;
  reportingPeriod?: RequiredResolverFn<Maybe<ResolversTypes['ReportingPeriod']>, ParentType, ContextType, RequireFields<QueryreportingPeriodArgs, 'id'>>;
  reportingPeriods?: RequiredResolverFn<Array<ResolversTypes['ReportingPeriod']>, ParentType, ContextType>;
  upload?: RequiredResolverFn<Maybe<ResolversTypes['Upload']>, ParentType, ContextType, RequireFields<QueryuploadArgs, 'id'>>;
  uploads?: RequiredResolverFn<Array<ResolversTypes['Upload']>, ParentType, ContextType>;
  user?: RequiredResolverFn<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'id'>>;
  users?: RequiredResolverFn<Array<ResolversTypes['User']>, ParentType, ContextType>;
};

export type RedwoodResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Redwood'] = ResolversParentTypes['Redwood']> = {
  currentUser: OptArgsResolverFn<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  prismaVersion: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RedwoodRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Redwood'] = ResolversParentTypes['Redwood']> = {
  currentUser?: RequiredResolverFn<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  prismaVersion?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReportingPeriodResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['ReportingPeriod'] = ResolversParentTypes['ReportingPeriod']> = {
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  name: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReportingPeriodRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['ReportingPeriod'] = ResolversParentTypes['ReportingPeriod']> = {
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  name?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type UploadResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Upload'] = ResolversParentTypes['Upload']> = {
  createdAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  name: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt: OptArgsResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  user: OptArgsResolverFn<ResolversTypes['User'], ParentType, ContextType>;
  userId: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  validatedAt: OptArgsResolverFn<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Upload'] = ResolversParentTypes['Upload']> = {
  createdAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  name?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: RequiredResolverFn<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: RequiredResolverFn<ResolversTypes['User'], ParentType, ContextType>;
  userId?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  validatedAt?: RequiredResolverFn<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  name: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uploads: OptArgsResolverFn<Array<Maybe<ResolversTypes['Upload']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  name?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uploads?: RequiredResolverFn<Array<Maybe<ResolversTypes['Upload']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = RedwoodGraphQLContext> = {
  BigInt: GraphQLScalarType;
  Date: GraphQLScalarType;
  DateTime: GraphQLScalarType;
  JSON: GraphQLScalarType;
  JSONObject: GraphQLScalarType;
  Mutation: MutationResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  Redwood: RedwoodResolvers<ContextType>;
  ReportingPeriod: ReportingPeriodResolvers<ContextType>;
  Time: GraphQLScalarType;
  Upload: UploadResolvers<ContextType>;
  User: UserResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = RedwoodGraphQLContext> = {
  requireAuth: requireAuthDirectiveResolver<any, any, ContextType>;
  skipAuth: skipAuthDirectiveResolver<any, any, ContextType>;
};
