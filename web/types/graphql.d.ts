import { Prisma } from "@prisma/client"
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: number;
  Date: string;
  DateTime: string;
  JSON: Prisma.JsonValue;
  JSONObject: Prisma.JsonObject;
  Time: string;
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

export type EditReportingPeriodByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type EditReportingPeriodById = { __typename?: 'Query', reportingPeriod?: { __typename?: 'ReportingPeriod', id: number, name?: string | null } | null };

export type UpdateReportingPeriodMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateReportingPeriodInput;
}>;


export type UpdateReportingPeriodMutation = { __typename?: 'Mutation', updateReportingPeriod: { __typename?: 'ReportingPeriod', id: number, name?: string | null } };

export type CreateReportingPeriodMutationVariables = Exact<{
  input: CreateReportingPeriodInput;
}>;


export type CreateReportingPeriodMutation = { __typename?: 'Mutation', createReportingPeriod: { __typename?: 'ReportingPeriod', id: number } };

export type DeleteReportingPeriodMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteReportingPeriodMutation = { __typename?: 'Mutation', deleteReportingPeriod: { __typename?: 'ReportingPeriod', id: number } };

export type FindReportingPeriodByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FindReportingPeriodById = { __typename?: 'Query', reportingPeriod?: { __typename?: 'ReportingPeriod', id: number, name?: string | null } | null };

export type FindReportingPeriodsVariables = Exact<{ [key: string]: never; }>;


export type FindReportingPeriods = { __typename?: 'Query', reportingPeriods: Array<{ __typename?: 'ReportingPeriod', id: number, name?: string | null }> };

export type EditUploadByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type EditUploadById = { __typename?: 'Query', upload?: { __typename?: 'Upload', id: number, createdAt: string, updatedAt: string, name: string, validatedAt?: string | null, userId: number } | null };

export type UpdateUploadMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateUploadInput;
}>;


export type UpdateUploadMutation = { __typename?: 'Mutation', updateUpload: { __typename?: 'Upload', id: number, createdAt: string, updatedAt: string, name: string, validatedAt?: string | null, userId: number } };

export type CreateUploadMutationVariables = Exact<{
  input: CreateUploadInput;
}>;


export type CreateUploadMutation = { __typename?: 'Mutation', createUpload: { __typename?: 'Upload', id: number } };

export type DeleteUploadMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteUploadMutation = { __typename?: 'Mutation', deleteUpload: { __typename?: 'Upload', id: number } };

export type FindUploadByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FindUploadById = { __typename?: 'Query', upload?: { __typename?: 'Upload', id: number, createdAt: string, updatedAt: string, name: string, validatedAt?: string | null, userId: number } | null };

export type FindUploadsVariables = Exact<{ [key: string]: never; }>;


export type FindUploads = { __typename?: 'Query', uploads: Array<{ __typename?: 'Upload', id: number, createdAt: string, updatedAt: string, name: string, validatedAt?: string | null, userId: number }> };

export type UploadsQueryVariables = Exact<{ [key: string]: never; }>;


export type UploadsQuery = { __typename?: 'Query', uploads: Array<{ __typename?: 'Upload', id: number, name: string, validatedAt?: string | null }> };

export type EditUserByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type EditUserById = { __typename?: 'Query', user?: { __typename?: 'User', id: number, email: string, name?: string | null } | null };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: number, email: string, name?: string | null } };

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: number } };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: { __typename?: 'User', id: number } };

export type FindUserByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FindUserById = { __typename?: 'Query', user?: { __typename?: 'User', id: number, email: string, name?: string | null } | null };

export type FindUsersVariables = Exact<{ [key: string]: never; }>;


export type FindUsers = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: number, email: string, name?: string | null }> };
