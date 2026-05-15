export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  BigFloat: { input: unknown; output: unknown };
  BigInt: { input: unknown; output: unknown };
  Cursor: { input: unknown; output: unknown };
  Date: { input: unknown; output: unknown };
  Datetime: { input: string; output: string };
  JSON: { input: Record<string, unknown>; output: Record<string, unknown> };
  Opaque: { input: unknown; output: unknown };
  Time: { input: unknown; output: unknown };
  UUID: { input: string; output: string };
}

/** Boolean expression comparing fields on type "BigFloat" */
export interface BigFloatFilter {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Scalars['BigFloat']['input'][]>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
}

/** Boolean expression comparing fields on type "BigFloatList" */
export interface BigFloatListFilter {
  containedBy?: InputMaybe<Scalars['BigFloat']['input'][]>;
  contains?: InputMaybe<Scalars['BigFloat']['input'][]>;
  eq?: InputMaybe<Scalars['BigFloat']['input'][]>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Scalars['BigFloat']['input'][]>;
}

/** Boolean expression comparing fields on type "BigInt" */
export interface BigIntFilter {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Scalars['BigInt']['input'][]>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
}

/** Boolean expression comparing fields on type "BigIntList" */
export interface BigIntListFilter {
  containedBy?: InputMaybe<Scalars['BigInt']['input'][]>;
  contains?: InputMaybe<Scalars['BigInt']['input'][]>;
  eq?: InputMaybe<Scalars['BigInt']['input'][]>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Scalars['BigInt']['input'][]>;
}

/** Boolean expression comparing fields on type "Boolean" */
export interface BooleanFilter {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
}

/** Boolean expression comparing fields on type "BooleanList" */
export interface BooleanListFilter {
  containedBy?: InputMaybe<Scalars['Boolean']['input'][]>;
  contains?: InputMaybe<Scalars['Boolean']['input'][]>;
  eq?: InputMaybe<Scalars['Boolean']['input'][]>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Scalars['Boolean']['input'][]>;
}

/** Boolean expression comparing fields on type "Date" */
export interface DateFilter {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Scalars['Date']['input'][]>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
}

/** Boolean expression comparing fields on type "DateList" */
export interface DateListFilter {
  containedBy?: InputMaybe<Scalars['Date']['input'][]>;
  contains?: InputMaybe<Scalars['Date']['input'][]>;
  eq?: InputMaybe<Scalars['Date']['input'][]>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Scalars['Date']['input'][]>;
}

/** Boolean expression comparing fields on type "Datetime" */
export interface DatetimeFilter {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Scalars['Datetime']['input'][]>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
}

/** Boolean expression comparing fields on type "DatetimeList" */
export interface DatetimeListFilter {
  containedBy?: InputMaybe<Scalars['Datetime']['input'][]>;
  contains?: InputMaybe<Scalars['Datetime']['input'][]>;
  eq?: InputMaybe<Scalars['Datetime']['input'][]>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Scalars['Datetime']['input'][]>;
}

export type FilterIs = 'NOT_NULL' | 'NULL';

/** Boolean expression comparing fields on type "Float" */
export interface FloatFilter {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Scalars['Float']['input'][]>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
}

/** Boolean expression comparing fields on type "FloatList" */
export interface FloatListFilter {
  containedBy?: InputMaybe<Scalars['Float']['input'][]>;
  contains?: InputMaybe<Scalars['Float']['input'][]>;
  eq?: InputMaybe<Scalars['Float']['input'][]>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Scalars['Float']['input'][]>;
}

/** Boolean expression comparing fields on type "ID" */
export interface IdFilter {
  eq?: InputMaybe<Scalars['ID']['input']>;
}

/** Boolean expression comparing fields on type "Int" */
export interface IntFilter {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Scalars['Int']['input'][]>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
}

/** Boolean expression comparing fields on type "IntList" */
export interface IntListFilter {
  containedBy?: InputMaybe<Scalars['Int']['input'][]>;
  contains?: InputMaybe<Scalars['Int']['input'][]>;
  eq?: InputMaybe<Scalars['Int']['input'][]>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Scalars['Int']['input'][]>;
}

/** The root type for creating and mutating data */
export interface Mutation {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `Users` collection */
  deleteFromUsersCollection: UsersDeleteResponse;
  /** Adds one or more `Users` records to the collection */
  insertIntoUsersCollection?: Maybe<UsersInsertResponse>;
  /** Updates zero or more records in the `Users` collection */
  updateUsersCollection: UsersUpdateResponse;
}

/** The root type for creating and mutating data */
export interface MutationDeleteFromUsersCollectionArgs {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<UsersFilter>;
}

/** The root type for creating and mutating data */
export interface MutationInsertIntoUsersCollectionArgs {
  objects: UsersInsertInput[];
}

/** The root type for creating and mutating data */
export interface MutationUpdateUsersCollectionArgs {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<UsersFilter>;
  set: UsersUpdateInput;
}

export interface Node {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
}

/** Boolean expression comparing fields on type "Opaque" */
export interface OpaqueFilter {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
}

/** Defines a per-field sorting order */
export type OrderByDirection =
  /** Ascending order, nulls first */
  | 'AscNullsFirst'
  /** Ascending order, nulls last */
  | 'AscNullsLast'
  /** Descending order, nulls first */
  | 'DescNullsFirst'
  /** Descending order, nulls last */
  | 'DescNullsLast';

export interface PageInfo {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
}

/** The root type for querying data */
export interface Query {
  __typename?: 'Query';
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  showLimit?: Maybe<Scalars['Float']['output']>;
  usersById?: Maybe<Users>;
  /** A pagable collection of type `Users` */
  usersCollection?: Maybe<UsersConnection>;
  usersSearch?: Maybe<Users>;
}

/** The root type for querying data */
export interface QueryNodeArgs {
  nodeId: Scalars['ID']['input'];
}

/** The root type for querying data */
export interface QueryUsersByIdArgs {
  userId: Scalars['UUID']['input'];
}

/** The root type for querying data */
export interface QueryUsersCollectionArgs {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<UsersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UsersOrderBy[]>;
}

/** The root type for querying data */
export interface QueryUsersSearchArgs {
  searchTerm: Scalars['String']['input'];
}

/** Boolean expression comparing fields on type "String" */
export interface StringFilter {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Scalars['String']['input'][]>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
}

/** Boolean expression comparing fields on type "StringList" */
export interface StringListFilter {
  containedBy?: InputMaybe<Scalars['String']['input'][]>;
  contains?: InputMaybe<Scalars['String']['input'][]>;
  eq?: InputMaybe<Scalars['String']['input'][]>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Scalars['String']['input'][]>;
}

/** Boolean expression comparing fields on type "Time" */
export interface TimeFilter {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Scalars['Time']['input'][]>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
}

/** Boolean expression comparing fields on type "TimeList" */
export interface TimeListFilter {
  containedBy?: InputMaybe<Scalars['Time']['input'][]>;
  contains?: InputMaybe<Scalars['Time']['input'][]>;
  eq?: InputMaybe<Scalars['Time']['input'][]>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Scalars['Time']['input'][]>;
}

/** Boolean expression comparing fields on type "UUID" */
export interface UuidFilter {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Scalars['UUID']['input'][]>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
}

/** Boolean expression comparing fields on type "UUIDList" */
export interface UuidListFilter {
  containedBy?: InputMaybe<Scalars['UUID']['input'][]>;
  contains?: InputMaybe<Scalars['UUID']['input'][]>;
  eq?: InputMaybe<Scalars['UUID']['input'][]>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Scalars['UUID']['input'][]>;
}

export type Users = Node & {
  __typename?: 'Users';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Datetime']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  roles: Maybe<Scalars['String']['output']>[];
  updatedAt: Scalars['Datetime']['output'];
};

export interface UsersConnection {
  __typename?: 'UsersConnection';
  edges: UsersEdge[];
  pageInfo: PageInfo;
}

export interface UsersDeleteResponse {
  __typename?: 'UsersDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Users[];
}

export interface UsersEdge {
  __typename?: 'UsersEdge';
  cursor: Scalars['String']['output'];
  node: Users;
}

export interface UsersFilter {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<UsersFilter[]>;
  avatarUrl?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DatetimeFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  lastName?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<UsersFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<UsersFilter[]>;
  roles?: InputMaybe<StringListFilter>;
  updatedAt?: InputMaybe<DatetimeFilter>;
}

export interface UsersInsertInput {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
}

export interface UsersInsertResponse {
  __typename?: 'UsersInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Users[];
}

export interface UsersOrderBy {
  avatarUrl?: InputMaybe<OrderByDirection>;
  createdAt?: InputMaybe<OrderByDirection>;
  firstName?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  lastName?: InputMaybe<OrderByDirection>;
  updatedAt?: InputMaybe<OrderByDirection>;
}

export interface UsersUpdateInput {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<InputMaybe<Scalars['String']['input']>[]>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
}

export interface UsersUpdateResponse {
  __typename?: 'UsersUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Users[];
}
