
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Feri
 * 
 */
export type Feri = $Result.DefaultSelection<Prisma.$FeriPayload>
/**
 * Model FeriRun
 * 
 */
export type FeriRun = $Result.DefaultSelection<Prisma.$FeriRunPayload>
/**
 * Model FeriOutbox
 * 
 */
export type FeriOutbox = $Result.DefaultSelection<Prisma.$FeriOutboxPayload>
/**
 * Model Trigger
 * 
 */
export type Trigger = $Result.DefaultSelection<Prisma.$TriggerPayload>
/**
 * Model Action
 * 
 */
export type Action = $Result.DefaultSelection<Prisma.$ActionPayload>
/**
 * Model AvailableActions
 * 
 */
export type AvailableActions = $Result.DefaultSelection<Prisma.$AvailableActionsPayload>
/**
 * Model AvailableTrigger
 * 
 */
export type AvailableTrigger = $Result.DefaultSelection<Prisma.$AvailableTriggerPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feri`: Exposes CRUD operations for the **Feri** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feris
    * const feris = await prisma.feri.findMany()
    * ```
    */
  get feri(): Prisma.FeriDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feriRun`: Exposes CRUD operations for the **FeriRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeriRuns
    * const feriRuns = await prisma.feriRun.findMany()
    * ```
    */
  get feriRun(): Prisma.FeriRunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feriOutbox`: Exposes CRUD operations for the **FeriOutbox** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeriOutboxes
    * const feriOutboxes = await prisma.feriOutbox.findMany()
    * ```
    */
  get feriOutbox(): Prisma.FeriOutboxDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trigger`: Exposes CRUD operations for the **Trigger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Triggers
    * const triggers = await prisma.trigger.findMany()
    * ```
    */
  get trigger(): Prisma.TriggerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.action`: Exposes CRUD operations for the **Action** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actions
    * const actions = await prisma.action.findMany()
    * ```
    */
  get action(): Prisma.ActionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availableActions`: Exposes CRUD operations for the **AvailableActions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailableActions
    * const availableActions = await prisma.availableActions.findMany()
    * ```
    */
  get availableActions(): Prisma.AvailableActionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availableTrigger`: Exposes CRUD operations for the **AvailableTrigger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailableTriggers
    * const availableTriggers = await prisma.availableTrigger.findMany()
    * ```
    */
  get availableTrigger(): Prisma.AvailableTriggerDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Feri: 'Feri',
    FeriRun: 'FeriRun',
    FeriOutbox: 'FeriOutbox',
    Trigger: 'Trigger',
    Action: 'Action',
    AvailableActions: 'AvailableActions',
    AvailableTrigger: 'AvailableTrigger'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "feri" | "feriRun" | "feriOutbox" | "trigger" | "action" | "availableActions" | "availableTrigger"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Feri: {
        payload: Prisma.$FeriPayload<ExtArgs>
        fields: Prisma.FeriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeriFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeriFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriPayload>
          }
          findFirst: {
            args: Prisma.FeriFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeriFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriPayload>
          }
          findMany: {
            args: Prisma.FeriFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriPayload>[]
          }
          create: {
            args: Prisma.FeriCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriPayload>
          }
          createMany: {
            args: Prisma.FeriCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeriCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriPayload>[]
          }
          delete: {
            args: Prisma.FeriDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriPayload>
          }
          update: {
            args: Prisma.FeriUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriPayload>
          }
          deleteMany: {
            args: Prisma.FeriDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeriUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeriUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriPayload>[]
          }
          upsert: {
            args: Prisma.FeriUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriPayload>
          }
          aggregate: {
            args: Prisma.FeriAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeri>
          }
          groupBy: {
            args: Prisma.FeriGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeriGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeriCountArgs<ExtArgs>
            result: $Utils.Optional<FeriCountAggregateOutputType> | number
          }
        }
      }
      FeriRun: {
        payload: Prisma.$FeriRunPayload<ExtArgs>
        fields: Prisma.FeriRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeriRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeriRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriRunPayload>
          }
          findFirst: {
            args: Prisma.FeriRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeriRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriRunPayload>
          }
          findMany: {
            args: Prisma.FeriRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriRunPayload>[]
          }
          create: {
            args: Prisma.FeriRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriRunPayload>
          }
          createMany: {
            args: Prisma.FeriRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeriRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriRunPayload>[]
          }
          delete: {
            args: Prisma.FeriRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriRunPayload>
          }
          update: {
            args: Prisma.FeriRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriRunPayload>
          }
          deleteMany: {
            args: Prisma.FeriRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeriRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeriRunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriRunPayload>[]
          }
          upsert: {
            args: Prisma.FeriRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriRunPayload>
          }
          aggregate: {
            args: Prisma.FeriRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeriRun>
          }
          groupBy: {
            args: Prisma.FeriRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeriRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeriRunCountArgs<ExtArgs>
            result: $Utils.Optional<FeriRunCountAggregateOutputType> | number
          }
        }
      }
      FeriOutbox: {
        payload: Prisma.$FeriOutboxPayload<ExtArgs>
        fields: Prisma.FeriOutboxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeriOutboxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriOutboxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeriOutboxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriOutboxPayload>
          }
          findFirst: {
            args: Prisma.FeriOutboxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriOutboxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeriOutboxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriOutboxPayload>
          }
          findMany: {
            args: Prisma.FeriOutboxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriOutboxPayload>[]
          }
          create: {
            args: Prisma.FeriOutboxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriOutboxPayload>
          }
          createMany: {
            args: Prisma.FeriOutboxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeriOutboxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriOutboxPayload>[]
          }
          delete: {
            args: Prisma.FeriOutboxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriOutboxPayload>
          }
          update: {
            args: Prisma.FeriOutboxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriOutboxPayload>
          }
          deleteMany: {
            args: Prisma.FeriOutboxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeriOutboxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeriOutboxUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriOutboxPayload>[]
          }
          upsert: {
            args: Prisma.FeriOutboxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeriOutboxPayload>
          }
          aggregate: {
            args: Prisma.FeriOutboxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeriOutbox>
          }
          groupBy: {
            args: Prisma.FeriOutboxGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeriOutboxGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeriOutboxCountArgs<ExtArgs>
            result: $Utils.Optional<FeriOutboxCountAggregateOutputType> | number
          }
        }
      }
      Trigger: {
        payload: Prisma.$TriggerPayload<ExtArgs>
        fields: Prisma.TriggerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TriggerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TriggerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          findFirst: {
            args: Prisma.TriggerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TriggerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          findMany: {
            args: Prisma.TriggerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          create: {
            args: Prisma.TriggerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          createMany: {
            args: Prisma.TriggerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TriggerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          delete: {
            args: Prisma.TriggerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          update: {
            args: Prisma.TriggerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          deleteMany: {
            args: Prisma.TriggerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TriggerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TriggerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          upsert: {
            args: Prisma.TriggerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          aggregate: {
            args: Prisma.TriggerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrigger>
          }
          groupBy: {
            args: Prisma.TriggerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TriggerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TriggerCountArgs<ExtArgs>
            result: $Utils.Optional<TriggerCountAggregateOutputType> | number
          }
        }
      }
      Action: {
        payload: Prisma.$ActionPayload<ExtArgs>
        fields: Prisma.ActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          findFirst: {
            args: Prisma.ActionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          findMany: {
            args: Prisma.ActionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          create: {
            args: Prisma.ActionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          createMany: {
            args: Prisma.ActionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          delete: {
            args: Prisma.ActionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          update: {
            args: Prisma.ActionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          deleteMany: {
            args: Prisma.ActionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          upsert: {
            args: Prisma.ActionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          aggregate: {
            args: Prisma.ActionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAction>
          }
          groupBy: {
            args: Prisma.ActionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActionCountArgs<ExtArgs>
            result: $Utils.Optional<ActionCountAggregateOutputType> | number
          }
        }
      }
      AvailableActions: {
        payload: Prisma.$AvailableActionsPayload<ExtArgs>
        fields: Prisma.AvailableActionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailableActionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailableActionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>
          }
          findFirst: {
            args: Prisma.AvailableActionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailableActionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>
          }
          findMany: {
            args: Prisma.AvailableActionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>[]
          }
          create: {
            args: Prisma.AvailableActionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>
          }
          createMany: {
            args: Prisma.AvailableActionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailableActionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>[]
          }
          delete: {
            args: Prisma.AvailableActionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>
          }
          update: {
            args: Prisma.AvailableActionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>
          }
          deleteMany: {
            args: Prisma.AvailableActionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailableActionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailableActionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>[]
          }
          upsert: {
            args: Prisma.AvailableActionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableActionsPayload>
          }
          aggregate: {
            args: Prisma.AvailableActionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailableActions>
          }
          groupBy: {
            args: Prisma.AvailableActionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailableActionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailableActionsCountArgs<ExtArgs>
            result: $Utils.Optional<AvailableActionsCountAggregateOutputType> | number
          }
        }
      }
      AvailableTrigger: {
        payload: Prisma.$AvailableTriggerPayload<ExtArgs>
        fields: Prisma.AvailableTriggerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailableTriggerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailableTriggerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>
          }
          findFirst: {
            args: Prisma.AvailableTriggerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailableTriggerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>
          }
          findMany: {
            args: Prisma.AvailableTriggerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>[]
          }
          create: {
            args: Prisma.AvailableTriggerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>
          }
          createMany: {
            args: Prisma.AvailableTriggerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailableTriggerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>[]
          }
          delete: {
            args: Prisma.AvailableTriggerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>
          }
          update: {
            args: Prisma.AvailableTriggerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>
          }
          deleteMany: {
            args: Prisma.AvailableTriggerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailableTriggerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailableTriggerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>[]
          }
          upsert: {
            args: Prisma.AvailableTriggerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableTriggerPayload>
          }
          aggregate: {
            args: Prisma.AvailableTriggerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailableTrigger>
          }
          groupBy: {
            args: Prisma.AvailableTriggerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailableTriggerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailableTriggerCountArgs<ExtArgs>
            result: $Utils.Optional<AvailableTriggerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    feri?: FeriOmit
    feriRun?: FeriRunOmit
    feriOutbox?: FeriOutboxOmit
    trigger?: TriggerOmit
    action?: ActionOmit
    availableActions?: AvailableActionsOmit
    availableTrigger?: AvailableTriggerOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FeriCountOutputType
   */

  export type FeriCountOutputType = {
    action: number
    FeriRuns: number
  }

  export type FeriCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | FeriCountOutputTypeCountActionArgs
    FeriRuns?: boolean | FeriCountOutputTypeCountFeriRunsArgs
  }

  // Custom InputTypes
  /**
   * FeriCountOutputType without action
   */
  export type FeriCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeriCountOutputType
     */
    select?: FeriCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FeriCountOutputType without action
   */
  export type FeriCountOutputTypeCountActionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
  }

  /**
   * FeriCountOutputType without action
   */
  export type FeriCountOutputTypeCountFeriRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeriRunWhereInput
  }


  /**
   * Count Type FeriRunCountOutputType
   */

  export type FeriRunCountOutputType = {
    feriOutbox: number
  }

  export type FeriRunCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feriOutbox?: boolean | FeriRunCountOutputTypeCountFeriOutboxArgs
  }

  // Custom InputTypes
  /**
   * FeriRunCountOutputType without action
   */
  export type FeriRunCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeriRunCountOutputType
     */
    select?: FeriRunCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FeriRunCountOutputType without action
   */
  export type FeriRunCountOutputTypeCountFeriOutboxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeriOutboxWhereInput
  }


  /**
   * Count Type AvailableActionsCountOutputType
   */

  export type AvailableActionsCountOutputType = {
    Action: number
  }

  export type AvailableActionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Action?: boolean | AvailableActionsCountOutputTypeCountActionArgs
  }

  // Custom InputTypes
  /**
   * AvailableActionsCountOutputType without action
   */
  export type AvailableActionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActionsCountOutputType
     */
    select?: AvailableActionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvailableActionsCountOutputType without action
   */
  export type AvailableActionsCountOutputTypeCountActionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
  }


  /**
   * Count Type AvailableTriggerCountOutputType
   */

  export type AvailableTriggerCountOutputType = {
    Trigger: number
  }

  export type AvailableTriggerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Trigger?: boolean | AvailableTriggerCountOutputTypeCountTriggerArgs
  }

  // Custom InputTypes
  /**
   * AvailableTriggerCountOutputType without action
   */
  export type AvailableTriggerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTriggerCountOutputType
     */
    select?: AvailableTriggerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvailableTriggerCountOutputType without action
   */
  export type AvailableTriggerCountOutputTypeCountTriggerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    updatedAt?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    updatedAt?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string | null
    password: string
    updatedAt: Date
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "updatedAt" | "createdAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
      password: string
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Feri
   */

  export type AggregateFeri = {
    _count: FeriCountAggregateOutputType | null
    _min: FeriMinAggregateOutputType | null
    _max: FeriMaxAggregateOutputType | null
  }

  export type FeriMinAggregateOutputType = {
    id: string | null
    triggerId: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type FeriMaxAggregateOutputType = {
    id: string | null
    triggerId: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type FeriCountAggregateOutputType = {
    id: number
    triggerId: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type FeriMinAggregateInputType = {
    id?: true
    triggerId?: true
    updatedAt?: true
    createdAt?: true
  }

  export type FeriMaxAggregateInputType = {
    id?: true
    triggerId?: true
    updatedAt?: true
    createdAt?: true
  }

  export type FeriCountAggregateInputType = {
    id?: true
    triggerId?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type FeriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feri to aggregate.
     */
    where?: FeriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feris to fetch.
     */
    orderBy?: FeriOrderByWithRelationInput | FeriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feris
    **/
    _count?: true | FeriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeriMaxAggregateInputType
  }

  export type GetFeriAggregateType<T extends FeriAggregateArgs> = {
        [P in keyof T & keyof AggregateFeri]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeri[P]>
      : GetScalarType<T[P], AggregateFeri[P]>
  }




  export type FeriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeriWhereInput
    orderBy?: FeriOrderByWithAggregationInput | FeriOrderByWithAggregationInput[]
    by: FeriScalarFieldEnum[] | FeriScalarFieldEnum
    having?: FeriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeriCountAggregateInputType | true
    _min?: FeriMinAggregateInputType
    _max?: FeriMaxAggregateInputType
  }

  export type FeriGroupByOutputType = {
    id: string
    triggerId: string
    updatedAt: Date
    createdAt: Date
    _count: FeriCountAggregateOutputType | null
    _min: FeriMinAggregateOutputType | null
    _max: FeriMaxAggregateOutputType | null
  }

  type GetFeriGroupByPayload<T extends FeriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeriGroupByOutputType[P]>
            : GetScalarType<T[P], FeriGroupByOutputType[P]>
        }
      >
    >


  export type FeriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggerId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    trigger?: boolean | Feri$triggerArgs<ExtArgs>
    action?: boolean | Feri$actionArgs<ExtArgs>
    FeriRuns?: boolean | Feri$FeriRunsArgs<ExtArgs>
    _count?: boolean | FeriCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feri"]>

  export type FeriSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggerId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["feri"]>

  export type FeriSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggerId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["feri"]>

  export type FeriSelectScalar = {
    id?: boolean
    triggerId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type FeriOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "triggerId" | "updatedAt" | "createdAt", ExtArgs["result"]["feri"]>
  export type FeriInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trigger?: boolean | Feri$triggerArgs<ExtArgs>
    action?: boolean | Feri$actionArgs<ExtArgs>
    FeriRuns?: boolean | Feri$FeriRunsArgs<ExtArgs>
    _count?: boolean | FeriCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FeriIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FeriIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FeriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feri"
    objects: {
      trigger: Prisma.$TriggerPayload<ExtArgs> | null
      action: Prisma.$ActionPayload<ExtArgs>[]
      FeriRuns: Prisma.$FeriRunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      triggerId: string
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["feri"]>
    composites: {}
  }

  type FeriGetPayload<S extends boolean | null | undefined | FeriDefaultArgs> = $Result.GetResult<Prisma.$FeriPayload, S>

  type FeriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeriFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeriCountAggregateInputType | true
    }

  export interface FeriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feri'], meta: { name: 'Feri' } }
    /**
     * Find zero or one Feri that matches the filter.
     * @param {FeriFindUniqueArgs} args - Arguments to find a Feri
     * @example
     * // Get one Feri
     * const feri = await prisma.feri.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeriFindUniqueArgs>(args: SelectSubset<T, FeriFindUniqueArgs<ExtArgs>>): Prisma__FeriClient<$Result.GetResult<Prisma.$FeriPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feri that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeriFindUniqueOrThrowArgs} args - Arguments to find a Feri
     * @example
     * // Get one Feri
     * const feri = await prisma.feri.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeriFindUniqueOrThrowArgs>(args: SelectSubset<T, FeriFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeriClient<$Result.GetResult<Prisma.$FeriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feri that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriFindFirstArgs} args - Arguments to find a Feri
     * @example
     * // Get one Feri
     * const feri = await prisma.feri.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeriFindFirstArgs>(args?: SelectSubset<T, FeriFindFirstArgs<ExtArgs>>): Prisma__FeriClient<$Result.GetResult<Prisma.$FeriPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feri that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriFindFirstOrThrowArgs} args - Arguments to find a Feri
     * @example
     * // Get one Feri
     * const feri = await prisma.feri.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeriFindFirstOrThrowArgs>(args?: SelectSubset<T, FeriFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeriClient<$Result.GetResult<Prisma.$FeriPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feris
     * const feris = await prisma.feri.findMany()
     * 
     * // Get first 10 Feris
     * const feris = await prisma.feri.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feriWithIdOnly = await prisma.feri.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeriFindManyArgs>(args?: SelectSubset<T, FeriFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feri.
     * @param {FeriCreateArgs} args - Arguments to create a Feri.
     * @example
     * // Create one Feri
     * const Feri = await prisma.feri.create({
     *   data: {
     *     // ... data to create a Feri
     *   }
     * })
     * 
     */
    create<T extends FeriCreateArgs>(args: SelectSubset<T, FeriCreateArgs<ExtArgs>>): Prisma__FeriClient<$Result.GetResult<Prisma.$FeriPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feris.
     * @param {FeriCreateManyArgs} args - Arguments to create many Feris.
     * @example
     * // Create many Feris
     * const feri = await prisma.feri.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeriCreateManyArgs>(args?: SelectSubset<T, FeriCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feris and returns the data saved in the database.
     * @param {FeriCreateManyAndReturnArgs} args - Arguments to create many Feris.
     * @example
     * // Create many Feris
     * const feri = await prisma.feri.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feris and only return the `id`
     * const feriWithIdOnly = await prisma.feri.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeriCreateManyAndReturnArgs>(args?: SelectSubset<T, FeriCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeriPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feri.
     * @param {FeriDeleteArgs} args - Arguments to delete one Feri.
     * @example
     * // Delete one Feri
     * const Feri = await prisma.feri.delete({
     *   where: {
     *     // ... filter to delete one Feri
     *   }
     * })
     * 
     */
    delete<T extends FeriDeleteArgs>(args: SelectSubset<T, FeriDeleteArgs<ExtArgs>>): Prisma__FeriClient<$Result.GetResult<Prisma.$FeriPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feri.
     * @param {FeriUpdateArgs} args - Arguments to update one Feri.
     * @example
     * // Update one Feri
     * const feri = await prisma.feri.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeriUpdateArgs>(args: SelectSubset<T, FeriUpdateArgs<ExtArgs>>): Prisma__FeriClient<$Result.GetResult<Prisma.$FeriPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feris.
     * @param {FeriDeleteManyArgs} args - Arguments to filter Feris to delete.
     * @example
     * // Delete a few Feris
     * const { count } = await prisma.feri.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeriDeleteManyArgs>(args?: SelectSubset<T, FeriDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feris
     * const feri = await prisma.feri.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeriUpdateManyArgs>(args: SelectSubset<T, FeriUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feris and returns the data updated in the database.
     * @param {FeriUpdateManyAndReturnArgs} args - Arguments to update many Feris.
     * @example
     * // Update many Feris
     * const feri = await prisma.feri.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feris and only return the `id`
     * const feriWithIdOnly = await prisma.feri.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeriUpdateManyAndReturnArgs>(args: SelectSubset<T, FeriUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeriPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feri.
     * @param {FeriUpsertArgs} args - Arguments to update or create a Feri.
     * @example
     * // Update or create a Feri
     * const feri = await prisma.feri.upsert({
     *   create: {
     *     // ... data to create a Feri
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feri we want to update
     *   }
     * })
     */
    upsert<T extends FeriUpsertArgs>(args: SelectSubset<T, FeriUpsertArgs<ExtArgs>>): Prisma__FeriClient<$Result.GetResult<Prisma.$FeriPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriCountArgs} args - Arguments to filter Feris to count.
     * @example
     * // Count the number of Feris
     * const count = await prisma.feri.count({
     *   where: {
     *     // ... the filter for the Feris we want to count
     *   }
     * })
    **/
    count<T extends FeriCountArgs>(
      args?: Subset<T, FeriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feri.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeriAggregateArgs>(args: Subset<T, FeriAggregateArgs>): Prisma.PrismaPromise<GetFeriAggregateType<T>>

    /**
     * Group by Feri.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeriGroupByArgs['orderBy'] }
        : { orderBy?: FeriGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feri model
   */
  readonly fields: FeriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feri.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trigger<T extends Feri$triggerArgs<ExtArgs> = {}>(args?: Subset<T, Feri$triggerArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    action<T extends Feri$actionArgs<ExtArgs> = {}>(args?: Subset<T, Feri$actionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    FeriRuns<T extends Feri$FeriRunsArgs<ExtArgs> = {}>(args?: Subset<T, Feri$FeriRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeriRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Feri model
   */ 
  interface FeriFieldRefs {
    readonly id: FieldRef<"Feri", 'String'>
    readonly triggerId: FieldRef<"Feri", 'String'>
    readonly updatedAt: FieldRef<"Feri", 'DateTime'>
    readonly createdAt: FieldRef<"Feri", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Feri findUnique
   */
  export type FeriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feri
     */
    select?: FeriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feri
     */
    omit?: FeriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriInclude<ExtArgs> | null
    /**
     * Filter, which Feri to fetch.
     */
    where: FeriWhereUniqueInput
  }

  /**
   * Feri findUniqueOrThrow
   */
  export type FeriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feri
     */
    select?: FeriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feri
     */
    omit?: FeriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriInclude<ExtArgs> | null
    /**
     * Filter, which Feri to fetch.
     */
    where: FeriWhereUniqueInput
  }

  /**
   * Feri findFirst
   */
  export type FeriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feri
     */
    select?: FeriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feri
     */
    omit?: FeriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriInclude<ExtArgs> | null
    /**
     * Filter, which Feri to fetch.
     */
    where?: FeriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feris to fetch.
     */
    orderBy?: FeriOrderByWithRelationInput | FeriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feris.
     */
    cursor?: FeriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feris.
     */
    distinct?: FeriScalarFieldEnum | FeriScalarFieldEnum[]
  }

  /**
   * Feri findFirstOrThrow
   */
  export type FeriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feri
     */
    select?: FeriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feri
     */
    omit?: FeriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriInclude<ExtArgs> | null
    /**
     * Filter, which Feri to fetch.
     */
    where?: FeriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feris to fetch.
     */
    orderBy?: FeriOrderByWithRelationInput | FeriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feris.
     */
    cursor?: FeriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feris.
     */
    distinct?: FeriScalarFieldEnum | FeriScalarFieldEnum[]
  }

  /**
   * Feri findMany
   */
  export type FeriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feri
     */
    select?: FeriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feri
     */
    omit?: FeriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriInclude<ExtArgs> | null
    /**
     * Filter, which Feris to fetch.
     */
    where?: FeriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feris to fetch.
     */
    orderBy?: FeriOrderByWithRelationInput | FeriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feris.
     */
    cursor?: FeriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feris.
     */
    skip?: number
    distinct?: FeriScalarFieldEnum | FeriScalarFieldEnum[]
  }

  /**
   * Feri create
   */
  export type FeriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feri
     */
    select?: FeriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feri
     */
    omit?: FeriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriInclude<ExtArgs> | null
    /**
     * The data needed to create a Feri.
     */
    data: XOR<FeriCreateInput, FeriUncheckedCreateInput>
  }

  /**
   * Feri createMany
   */
  export type FeriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feris.
     */
    data: FeriCreateManyInput | FeriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feri createManyAndReturn
   */
  export type FeriCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feri
     */
    select?: FeriSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feri
     */
    omit?: FeriOmit<ExtArgs> | null
    /**
     * The data used to create many Feris.
     */
    data: FeriCreateManyInput | FeriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feri update
   */
  export type FeriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feri
     */
    select?: FeriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feri
     */
    omit?: FeriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriInclude<ExtArgs> | null
    /**
     * The data needed to update a Feri.
     */
    data: XOR<FeriUpdateInput, FeriUncheckedUpdateInput>
    /**
     * Choose, which Feri to update.
     */
    where: FeriWhereUniqueInput
  }

  /**
   * Feri updateMany
   */
  export type FeriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feris.
     */
    data: XOR<FeriUpdateManyMutationInput, FeriUncheckedUpdateManyInput>
    /**
     * Filter which Feris to update
     */
    where?: FeriWhereInput
    /**
     * Limit how many Feris to update.
     */
    limit?: number
  }

  /**
   * Feri updateManyAndReturn
   */
  export type FeriUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feri
     */
    select?: FeriSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feri
     */
    omit?: FeriOmit<ExtArgs> | null
    /**
     * The data used to update Feris.
     */
    data: XOR<FeriUpdateManyMutationInput, FeriUncheckedUpdateManyInput>
    /**
     * Filter which Feris to update
     */
    where?: FeriWhereInput
    /**
     * Limit how many Feris to update.
     */
    limit?: number
  }

  /**
   * Feri upsert
   */
  export type FeriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feri
     */
    select?: FeriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feri
     */
    omit?: FeriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriInclude<ExtArgs> | null
    /**
     * The filter to search for the Feri to update in case it exists.
     */
    where: FeriWhereUniqueInput
    /**
     * In case the Feri found by the `where` argument doesn't exist, create a new Feri with this data.
     */
    create: XOR<FeriCreateInput, FeriUncheckedCreateInput>
    /**
     * In case the Feri was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeriUpdateInput, FeriUncheckedUpdateInput>
  }

  /**
   * Feri delete
   */
  export type FeriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feri
     */
    select?: FeriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feri
     */
    omit?: FeriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriInclude<ExtArgs> | null
    /**
     * Filter which Feri to delete.
     */
    where: FeriWhereUniqueInput
  }

  /**
   * Feri deleteMany
   */
  export type FeriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feris to delete
     */
    where?: FeriWhereInput
    /**
     * Limit how many Feris to delete.
     */
    limit?: number
  }

  /**
   * Feri.trigger
   */
  export type Feri$triggerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    where?: TriggerWhereInput
  }

  /**
   * Feri.action
   */
  export type Feri$actionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    cursor?: ActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Feri.FeriRuns
   */
  export type Feri$FeriRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeriRun
     */
    select?: FeriRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeriRun
     */
    omit?: FeriRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriRunInclude<ExtArgs> | null
    where?: FeriRunWhereInput
    orderBy?: FeriRunOrderByWithRelationInput | FeriRunOrderByWithRelationInput[]
    cursor?: FeriRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeriRunScalarFieldEnum | FeriRunScalarFieldEnum[]
  }

  /**
   * Feri without action
   */
  export type FeriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feri
     */
    select?: FeriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feri
     */
    omit?: FeriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriInclude<ExtArgs> | null
  }


  /**
   * Model FeriRun
   */

  export type AggregateFeriRun = {
    _count: FeriRunCountAggregateOutputType | null
    _min: FeriRunMinAggregateOutputType | null
    _max: FeriRunMaxAggregateOutputType | null
  }

  export type FeriRunMinAggregateOutputType = {
    id: string | null
    feriId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type FeriRunMaxAggregateOutputType = {
    id: string | null
    feriId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type FeriRunCountAggregateOutputType = {
    id: number
    feriId: number
    status: number
    metadata: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type FeriRunMinAggregateInputType = {
    id?: true
    feriId?: true
    status?: true
    createdAt?: true
  }

  export type FeriRunMaxAggregateInputType = {
    id?: true
    feriId?: true
    status?: true
    createdAt?: true
  }

  export type FeriRunCountAggregateInputType = {
    id?: true
    feriId?: true
    status?: true
    metadata?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type FeriRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeriRun to aggregate.
     */
    where?: FeriRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeriRuns to fetch.
     */
    orderBy?: FeriRunOrderByWithRelationInput | FeriRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeriRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeriRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeriRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeriRuns
    **/
    _count?: true | FeriRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeriRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeriRunMaxAggregateInputType
  }

  export type GetFeriRunAggregateType<T extends FeriRunAggregateArgs> = {
        [P in keyof T & keyof AggregateFeriRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeriRun[P]>
      : GetScalarType<T[P], AggregateFeriRun[P]>
  }




  export type FeriRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeriRunWhereInput
    orderBy?: FeriRunOrderByWithAggregationInput | FeriRunOrderByWithAggregationInput[]
    by: FeriRunScalarFieldEnum[] | FeriRunScalarFieldEnum
    having?: FeriRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeriRunCountAggregateInputType | true
    _min?: FeriRunMinAggregateInputType
    _max?: FeriRunMaxAggregateInputType
  }

  export type FeriRunGroupByOutputType = {
    id: string
    feriId: string
    status: string
    metadata: JsonValue
    updatedAt: Date[]
    createdAt: Date
    _count: FeriRunCountAggregateOutputType | null
    _min: FeriRunMinAggregateOutputType | null
    _max: FeriRunMaxAggregateOutputType | null
  }

  type GetFeriRunGroupByPayload<T extends FeriRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeriRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeriRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeriRunGroupByOutputType[P]>
            : GetScalarType<T[P], FeriRunGroupByOutputType[P]>
        }
      >
    >


  export type FeriRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    feriId?: boolean
    status?: boolean
    metadata?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    feri?: boolean | FeriRun$feriArgs<ExtArgs>
    feriOutbox?: boolean | FeriRun$feriOutboxArgs<ExtArgs>
    _count?: boolean | FeriRunCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feriRun"]>

  export type FeriRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    feriId?: boolean
    status?: boolean
    metadata?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    feri?: boolean | FeriRun$feriArgs<ExtArgs>
  }, ExtArgs["result"]["feriRun"]>

  export type FeriRunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    feriId?: boolean
    status?: boolean
    metadata?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    feri?: boolean | FeriRun$feriArgs<ExtArgs>
  }, ExtArgs["result"]["feriRun"]>

  export type FeriRunSelectScalar = {
    id?: boolean
    feriId?: boolean
    status?: boolean
    metadata?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type FeriRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "feriId" | "status" | "metadata" | "updatedAt" | "createdAt", ExtArgs["result"]["feriRun"]>
  export type FeriRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feri?: boolean | FeriRun$feriArgs<ExtArgs>
    feriOutbox?: boolean | FeriRun$feriOutboxArgs<ExtArgs>
    _count?: boolean | FeriRunCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FeriRunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feri?: boolean | FeriRun$feriArgs<ExtArgs>
  }
  export type FeriRunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feri?: boolean | FeriRun$feriArgs<ExtArgs>
  }

  export type $FeriRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeriRun"
    objects: {
      feri: Prisma.$FeriPayload<ExtArgs> | null
      feriOutbox: Prisma.$FeriOutboxPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      feriId: string
      status: string
      metadata: Prisma.JsonValue
      updatedAt: Date[]
      createdAt: Date
    }, ExtArgs["result"]["feriRun"]>
    composites: {}
  }

  type FeriRunGetPayload<S extends boolean | null | undefined | FeriRunDefaultArgs> = $Result.GetResult<Prisma.$FeriRunPayload, S>

  type FeriRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeriRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeriRunCountAggregateInputType | true
    }

  export interface FeriRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeriRun'], meta: { name: 'FeriRun' } }
    /**
     * Find zero or one FeriRun that matches the filter.
     * @param {FeriRunFindUniqueArgs} args - Arguments to find a FeriRun
     * @example
     * // Get one FeriRun
     * const feriRun = await prisma.feriRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeriRunFindUniqueArgs>(args: SelectSubset<T, FeriRunFindUniqueArgs<ExtArgs>>): Prisma__FeriRunClient<$Result.GetResult<Prisma.$FeriRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeriRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeriRunFindUniqueOrThrowArgs} args - Arguments to find a FeriRun
     * @example
     * // Get one FeriRun
     * const feriRun = await prisma.feriRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeriRunFindUniqueOrThrowArgs>(args: SelectSubset<T, FeriRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeriRunClient<$Result.GetResult<Prisma.$FeriRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeriRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriRunFindFirstArgs} args - Arguments to find a FeriRun
     * @example
     * // Get one FeriRun
     * const feriRun = await prisma.feriRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeriRunFindFirstArgs>(args?: SelectSubset<T, FeriRunFindFirstArgs<ExtArgs>>): Prisma__FeriRunClient<$Result.GetResult<Prisma.$FeriRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeriRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriRunFindFirstOrThrowArgs} args - Arguments to find a FeriRun
     * @example
     * // Get one FeriRun
     * const feriRun = await prisma.feriRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeriRunFindFirstOrThrowArgs>(args?: SelectSubset<T, FeriRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeriRunClient<$Result.GetResult<Prisma.$FeriRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeriRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeriRuns
     * const feriRuns = await prisma.feriRun.findMany()
     * 
     * // Get first 10 FeriRuns
     * const feriRuns = await prisma.feriRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feriRunWithIdOnly = await prisma.feriRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeriRunFindManyArgs>(args?: SelectSubset<T, FeriRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeriRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeriRun.
     * @param {FeriRunCreateArgs} args - Arguments to create a FeriRun.
     * @example
     * // Create one FeriRun
     * const FeriRun = await prisma.feriRun.create({
     *   data: {
     *     // ... data to create a FeriRun
     *   }
     * })
     * 
     */
    create<T extends FeriRunCreateArgs>(args: SelectSubset<T, FeriRunCreateArgs<ExtArgs>>): Prisma__FeriRunClient<$Result.GetResult<Prisma.$FeriRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeriRuns.
     * @param {FeriRunCreateManyArgs} args - Arguments to create many FeriRuns.
     * @example
     * // Create many FeriRuns
     * const feriRun = await prisma.feriRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeriRunCreateManyArgs>(args?: SelectSubset<T, FeriRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeriRuns and returns the data saved in the database.
     * @param {FeriRunCreateManyAndReturnArgs} args - Arguments to create many FeriRuns.
     * @example
     * // Create many FeriRuns
     * const feriRun = await prisma.feriRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeriRuns and only return the `id`
     * const feriRunWithIdOnly = await prisma.feriRun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeriRunCreateManyAndReturnArgs>(args?: SelectSubset<T, FeriRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeriRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FeriRun.
     * @param {FeriRunDeleteArgs} args - Arguments to delete one FeriRun.
     * @example
     * // Delete one FeriRun
     * const FeriRun = await prisma.feriRun.delete({
     *   where: {
     *     // ... filter to delete one FeriRun
     *   }
     * })
     * 
     */
    delete<T extends FeriRunDeleteArgs>(args: SelectSubset<T, FeriRunDeleteArgs<ExtArgs>>): Prisma__FeriRunClient<$Result.GetResult<Prisma.$FeriRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeriRun.
     * @param {FeriRunUpdateArgs} args - Arguments to update one FeriRun.
     * @example
     * // Update one FeriRun
     * const feriRun = await prisma.feriRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeriRunUpdateArgs>(args: SelectSubset<T, FeriRunUpdateArgs<ExtArgs>>): Prisma__FeriRunClient<$Result.GetResult<Prisma.$FeriRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeriRuns.
     * @param {FeriRunDeleteManyArgs} args - Arguments to filter FeriRuns to delete.
     * @example
     * // Delete a few FeriRuns
     * const { count } = await prisma.feriRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeriRunDeleteManyArgs>(args?: SelectSubset<T, FeriRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeriRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeriRuns
     * const feriRun = await prisma.feriRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeriRunUpdateManyArgs>(args: SelectSubset<T, FeriRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeriRuns and returns the data updated in the database.
     * @param {FeriRunUpdateManyAndReturnArgs} args - Arguments to update many FeriRuns.
     * @example
     * // Update many FeriRuns
     * const feriRun = await prisma.feriRun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FeriRuns and only return the `id`
     * const feriRunWithIdOnly = await prisma.feriRun.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeriRunUpdateManyAndReturnArgs>(args: SelectSubset<T, FeriRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeriRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FeriRun.
     * @param {FeriRunUpsertArgs} args - Arguments to update or create a FeriRun.
     * @example
     * // Update or create a FeriRun
     * const feriRun = await prisma.feriRun.upsert({
     *   create: {
     *     // ... data to create a FeriRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeriRun we want to update
     *   }
     * })
     */
    upsert<T extends FeriRunUpsertArgs>(args: SelectSubset<T, FeriRunUpsertArgs<ExtArgs>>): Prisma__FeriRunClient<$Result.GetResult<Prisma.$FeriRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeriRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriRunCountArgs} args - Arguments to filter FeriRuns to count.
     * @example
     * // Count the number of FeriRuns
     * const count = await prisma.feriRun.count({
     *   where: {
     *     // ... the filter for the FeriRuns we want to count
     *   }
     * })
    **/
    count<T extends FeriRunCountArgs>(
      args?: Subset<T, FeriRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeriRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeriRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeriRunAggregateArgs>(args: Subset<T, FeriRunAggregateArgs>): Prisma.PrismaPromise<GetFeriRunAggregateType<T>>

    /**
     * Group by FeriRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriRunGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeriRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeriRunGroupByArgs['orderBy'] }
        : { orderBy?: FeriRunGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeriRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeriRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeriRun model
   */
  readonly fields: FeriRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeriRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeriRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    feri<T extends FeriRun$feriArgs<ExtArgs> = {}>(args?: Subset<T, FeriRun$feriArgs<ExtArgs>>): Prisma__FeriClient<$Result.GetResult<Prisma.$FeriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    feriOutbox<T extends FeriRun$feriOutboxArgs<ExtArgs> = {}>(args?: Subset<T, FeriRun$feriOutboxArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeriOutboxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FeriRun model
   */ 
  interface FeriRunFieldRefs {
    readonly id: FieldRef<"FeriRun", 'String'>
    readonly feriId: FieldRef<"FeriRun", 'String'>
    readonly status: FieldRef<"FeriRun", 'String'>
    readonly metadata: FieldRef<"FeriRun", 'Json'>
    readonly updatedAt: FieldRef<"FeriRun", 'DateTime[]'>
    readonly createdAt: FieldRef<"FeriRun", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FeriRun findUnique
   */
  export type FeriRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeriRun
     */
    select?: FeriRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeriRun
     */
    omit?: FeriRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriRunInclude<ExtArgs> | null
    /**
     * Filter, which FeriRun to fetch.
     */
    where: FeriRunWhereUniqueInput
  }

  /**
   * FeriRun findUniqueOrThrow
   */
  export type FeriRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeriRun
     */
    select?: FeriRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeriRun
     */
    omit?: FeriRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriRunInclude<ExtArgs> | null
    /**
     * Filter, which FeriRun to fetch.
     */
    where: FeriRunWhereUniqueInput
  }

  /**
   * FeriRun findFirst
   */
  export type FeriRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeriRun
     */
    select?: FeriRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeriRun
     */
    omit?: FeriRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriRunInclude<ExtArgs> | null
    /**
     * Filter, which FeriRun to fetch.
     */
    where?: FeriRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeriRuns to fetch.
     */
    orderBy?: FeriRunOrderByWithRelationInput | FeriRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeriRuns.
     */
    cursor?: FeriRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeriRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeriRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeriRuns.
     */
    distinct?: FeriRunScalarFieldEnum | FeriRunScalarFieldEnum[]
  }

  /**
   * FeriRun findFirstOrThrow
   */
  export type FeriRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeriRun
     */
    select?: FeriRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeriRun
     */
    omit?: FeriRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriRunInclude<ExtArgs> | null
    /**
     * Filter, which FeriRun to fetch.
     */
    where?: FeriRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeriRuns to fetch.
     */
    orderBy?: FeriRunOrderByWithRelationInput | FeriRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeriRuns.
     */
    cursor?: FeriRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeriRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeriRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeriRuns.
     */
    distinct?: FeriRunScalarFieldEnum | FeriRunScalarFieldEnum[]
  }

  /**
   * FeriRun findMany
   */
  export type FeriRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeriRun
     */
    select?: FeriRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeriRun
     */
    omit?: FeriRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriRunInclude<ExtArgs> | null
    /**
     * Filter, which FeriRuns to fetch.
     */
    where?: FeriRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeriRuns to fetch.
     */
    orderBy?: FeriRunOrderByWithRelationInput | FeriRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeriRuns.
     */
    cursor?: FeriRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeriRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeriRuns.
     */
    skip?: number
    distinct?: FeriRunScalarFieldEnum | FeriRunScalarFieldEnum[]
  }

  /**
   * FeriRun create
   */
  export type FeriRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeriRun
     */
    select?: FeriRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeriRun
     */
    omit?: FeriRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriRunInclude<ExtArgs> | null
    /**
     * The data needed to create a FeriRun.
     */
    data: XOR<FeriRunCreateInput, FeriRunUncheckedCreateInput>
  }

  /**
   * FeriRun createMany
   */
  export type FeriRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeriRuns.
     */
    data: FeriRunCreateManyInput | FeriRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeriRun createManyAndReturn
   */
  export type FeriRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeriRun
     */
    select?: FeriRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeriRun
     */
    omit?: FeriRunOmit<ExtArgs> | null
    /**
     * The data used to create many FeriRuns.
     */
    data: FeriRunCreateManyInput | FeriRunCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriRunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeriRun update
   */
  export type FeriRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeriRun
     */
    select?: FeriRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeriRun
     */
    omit?: FeriRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriRunInclude<ExtArgs> | null
    /**
     * The data needed to update a FeriRun.
     */
    data: XOR<FeriRunUpdateInput, FeriRunUncheckedUpdateInput>
    /**
     * Choose, which FeriRun to update.
     */
    where: FeriRunWhereUniqueInput
  }

  /**
   * FeriRun updateMany
   */
  export type FeriRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeriRuns.
     */
    data: XOR<FeriRunUpdateManyMutationInput, FeriRunUncheckedUpdateManyInput>
    /**
     * Filter which FeriRuns to update
     */
    where?: FeriRunWhereInput
    /**
     * Limit how many FeriRuns to update.
     */
    limit?: number
  }

  /**
   * FeriRun updateManyAndReturn
   */
  export type FeriRunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeriRun
     */
    select?: FeriRunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeriRun
     */
    omit?: FeriRunOmit<ExtArgs> | null
    /**
     * The data used to update FeriRuns.
     */
    data: XOR<FeriRunUpdateManyMutationInput, FeriRunUncheckedUpdateManyInput>
    /**
     * Filter which FeriRuns to update
     */
    where?: FeriRunWhereInput
    /**
     * Limit how many FeriRuns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriRunIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeriRun upsert
   */
  export type FeriRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeriRun
     */
    select?: FeriRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeriRun
     */
    omit?: FeriRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriRunInclude<ExtArgs> | null
    /**
     * The filter to search for the FeriRun to update in case it exists.
     */
    where: FeriRunWhereUniqueInput
    /**
     * In case the FeriRun found by the `where` argument doesn't exist, create a new FeriRun with this data.
     */
    create: XOR<FeriRunCreateInput, FeriRunUncheckedCreateInput>
    /**
     * In case the FeriRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeriRunUpdateInput, FeriRunUncheckedUpdateInput>
  }

  /**
   * FeriRun delete
   */
  export type FeriRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeriRun
     */
    select?: FeriRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeriRun
     */
    omit?: FeriRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriRunInclude<ExtArgs> | null
    /**
     * Filter which FeriRun to delete.
     */
    where: FeriRunWhereUniqueInput
  }

  /**
   * FeriRun deleteMany
   */
  export type FeriRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeriRuns to delete
     */
    where?: FeriRunWhereInput
    /**
     * Limit how many FeriRuns to delete.
     */
    limit?: number
  }

  /**
   * FeriRun.feri
   */
  export type FeriRun$feriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feri
     */
    select?: FeriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feri
     */
    omit?: FeriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriInclude<ExtArgs> | null
    where?: FeriWhereInput
  }

  /**
   * FeriRun.feriOutbox
   */
  export type FeriRun$feriOutboxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeriOutbox
     */
    select?: FeriOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeriOutbox
     */
    omit?: FeriOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriOutboxInclude<ExtArgs> | null
    where?: FeriOutboxWhereInput
    orderBy?: FeriOutboxOrderByWithRelationInput | FeriOutboxOrderByWithRelationInput[]
    cursor?: FeriOutboxWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeriOutboxScalarFieldEnum | FeriOutboxScalarFieldEnum[]
  }

  /**
   * FeriRun without action
   */
  export type FeriRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeriRun
     */
    select?: FeriRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeriRun
     */
    omit?: FeriRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriRunInclude<ExtArgs> | null
  }


  /**
   * Model FeriOutbox
   */

  export type AggregateFeriOutbox = {
    _count: FeriOutboxCountAggregateOutputType | null
    _min: FeriOutboxMinAggregateOutputType | null
    _max: FeriOutboxMaxAggregateOutputType | null
  }

  export type FeriOutboxMinAggregateOutputType = {
    id: string | null
    feriRunId: string | null
    status: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type FeriOutboxMaxAggregateOutputType = {
    id: string | null
    feriRunId: string | null
    status: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type FeriOutboxCountAggregateOutputType = {
    id: number
    metadata: number
    feriRunId: number
    status: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type FeriOutboxMinAggregateInputType = {
    id?: true
    feriRunId?: true
    status?: true
    updatedAt?: true
    createdAt?: true
  }

  export type FeriOutboxMaxAggregateInputType = {
    id?: true
    feriRunId?: true
    status?: true
    updatedAt?: true
    createdAt?: true
  }

  export type FeriOutboxCountAggregateInputType = {
    id?: true
    metadata?: true
    feriRunId?: true
    status?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type FeriOutboxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeriOutbox to aggregate.
     */
    where?: FeriOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeriOutboxes to fetch.
     */
    orderBy?: FeriOutboxOrderByWithRelationInput | FeriOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeriOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeriOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeriOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeriOutboxes
    **/
    _count?: true | FeriOutboxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeriOutboxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeriOutboxMaxAggregateInputType
  }

  export type GetFeriOutboxAggregateType<T extends FeriOutboxAggregateArgs> = {
        [P in keyof T & keyof AggregateFeriOutbox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeriOutbox[P]>
      : GetScalarType<T[P], AggregateFeriOutbox[P]>
  }




  export type FeriOutboxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeriOutboxWhereInput
    orderBy?: FeriOutboxOrderByWithAggregationInput | FeriOutboxOrderByWithAggregationInput[]
    by: FeriOutboxScalarFieldEnum[] | FeriOutboxScalarFieldEnum
    having?: FeriOutboxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeriOutboxCountAggregateInputType | true
    _min?: FeriOutboxMinAggregateInputType
    _max?: FeriOutboxMaxAggregateInputType
  }

  export type FeriOutboxGroupByOutputType = {
    id: string
    metadata: JsonValue
    feriRunId: string
    status: string
    updatedAt: Date
    createdAt: Date
    _count: FeriOutboxCountAggregateOutputType | null
    _min: FeriOutboxMinAggregateOutputType | null
    _max: FeriOutboxMaxAggregateOutputType | null
  }

  type GetFeriOutboxGroupByPayload<T extends FeriOutboxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeriOutboxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeriOutboxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeriOutboxGroupByOutputType[P]>
            : GetScalarType<T[P], FeriOutboxGroupByOutputType[P]>
        }
      >
    >


  export type FeriOutboxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metadata?: boolean
    feriRunId?: boolean
    status?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    FeriRun?: boolean | FeriRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feriOutbox"]>

  export type FeriOutboxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metadata?: boolean
    feriRunId?: boolean
    status?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    FeriRun?: boolean | FeriRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feriOutbox"]>

  export type FeriOutboxSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metadata?: boolean
    feriRunId?: boolean
    status?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    FeriRun?: boolean | FeriRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feriOutbox"]>

  export type FeriOutboxSelectScalar = {
    id?: boolean
    metadata?: boolean
    feriRunId?: boolean
    status?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type FeriOutboxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "metadata" | "feriRunId" | "status" | "updatedAt" | "createdAt", ExtArgs["result"]["feriOutbox"]>
  export type FeriOutboxInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FeriRun?: boolean | FeriRunDefaultArgs<ExtArgs>
  }
  export type FeriOutboxIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FeriRun?: boolean | FeriRunDefaultArgs<ExtArgs>
  }
  export type FeriOutboxIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FeriRun?: boolean | FeriRunDefaultArgs<ExtArgs>
  }

  export type $FeriOutboxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeriOutbox"
    objects: {
      FeriRun: Prisma.$FeriRunPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      metadata: Prisma.JsonValue
      feriRunId: string
      status: string
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["feriOutbox"]>
    composites: {}
  }

  type FeriOutboxGetPayload<S extends boolean | null | undefined | FeriOutboxDefaultArgs> = $Result.GetResult<Prisma.$FeriOutboxPayload, S>

  type FeriOutboxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeriOutboxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeriOutboxCountAggregateInputType | true
    }

  export interface FeriOutboxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeriOutbox'], meta: { name: 'FeriOutbox' } }
    /**
     * Find zero or one FeriOutbox that matches the filter.
     * @param {FeriOutboxFindUniqueArgs} args - Arguments to find a FeriOutbox
     * @example
     * // Get one FeriOutbox
     * const feriOutbox = await prisma.feriOutbox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeriOutboxFindUniqueArgs>(args: SelectSubset<T, FeriOutboxFindUniqueArgs<ExtArgs>>): Prisma__FeriOutboxClient<$Result.GetResult<Prisma.$FeriOutboxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeriOutbox that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeriOutboxFindUniqueOrThrowArgs} args - Arguments to find a FeriOutbox
     * @example
     * // Get one FeriOutbox
     * const feriOutbox = await prisma.feriOutbox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeriOutboxFindUniqueOrThrowArgs>(args: SelectSubset<T, FeriOutboxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeriOutboxClient<$Result.GetResult<Prisma.$FeriOutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeriOutbox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriOutboxFindFirstArgs} args - Arguments to find a FeriOutbox
     * @example
     * // Get one FeriOutbox
     * const feriOutbox = await prisma.feriOutbox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeriOutboxFindFirstArgs>(args?: SelectSubset<T, FeriOutboxFindFirstArgs<ExtArgs>>): Prisma__FeriOutboxClient<$Result.GetResult<Prisma.$FeriOutboxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeriOutbox that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriOutboxFindFirstOrThrowArgs} args - Arguments to find a FeriOutbox
     * @example
     * // Get one FeriOutbox
     * const feriOutbox = await prisma.feriOutbox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeriOutboxFindFirstOrThrowArgs>(args?: SelectSubset<T, FeriOutboxFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeriOutboxClient<$Result.GetResult<Prisma.$FeriOutboxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeriOutboxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriOutboxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeriOutboxes
     * const feriOutboxes = await prisma.feriOutbox.findMany()
     * 
     * // Get first 10 FeriOutboxes
     * const feriOutboxes = await prisma.feriOutbox.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feriOutboxWithIdOnly = await prisma.feriOutbox.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeriOutboxFindManyArgs>(args?: SelectSubset<T, FeriOutboxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeriOutboxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeriOutbox.
     * @param {FeriOutboxCreateArgs} args - Arguments to create a FeriOutbox.
     * @example
     * // Create one FeriOutbox
     * const FeriOutbox = await prisma.feriOutbox.create({
     *   data: {
     *     // ... data to create a FeriOutbox
     *   }
     * })
     * 
     */
    create<T extends FeriOutboxCreateArgs>(args: SelectSubset<T, FeriOutboxCreateArgs<ExtArgs>>): Prisma__FeriOutboxClient<$Result.GetResult<Prisma.$FeriOutboxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeriOutboxes.
     * @param {FeriOutboxCreateManyArgs} args - Arguments to create many FeriOutboxes.
     * @example
     * // Create many FeriOutboxes
     * const feriOutbox = await prisma.feriOutbox.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeriOutboxCreateManyArgs>(args?: SelectSubset<T, FeriOutboxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeriOutboxes and returns the data saved in the database.
     * @param {FeriOutboxCreateManyAndReturnArgs} args - Arguments to create many FeriOutboxes.
     * @example
     * // Create many FeriOutboxes
     * const feriOutbox = await prisma.feriOutbox.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeriOutboxes and only return the `id`
     * const feriOutboxWithIdOnly = await prisma.feriOutbox.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeriOutboxCreateManyAndReturnArgs>(args?: SelectSubset<T, FeriOutboxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeriOutboxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FeriOutbox.
     * @param {FeriOutboxDeleteArgs} args - Arguments to delete one FeriOutbox.
     * @example
     * // Delete one FeriOutbox
     * const FeriOutbox = await prisma.feriOutbox.delete({
     *   where: {
     *     // ... filter to delete one FeriOutbox
     *   }
     * })
     * 
     */
    delete<T extends FeriOutboxDeleteArgs>(args: SelectSubset<T, FeriOutboxDeleteArgs<ExtArgs>>): Prisma__FeriOutboxClient<$Result.GetResult<Prisma.$FeriOutboxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeriOutbox.
     * @param {FeriOutboxUpdateArgs} args - Arguments to update one FeriOutbox.
     * @example
     * // Update one FeriOutbox
     * const feriOutbox = await prisma.feriOutbox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeriOutboxUpdateArgs>(args: SelectSubset<T, FeriOutboxUpdateArgs<ExtArgs>>): Prisma__FeriOutboxClient<$Result.GetResult<Prisma.$FeriOutboxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeriOutboxes.
     * @param {FeriOutboxDeleteManyArgs} args - Arguments to filter FeriOutboxes to delete.
     * @example
     * // Delete a few FeriOutboxes
     * const { count } = await prisma.feriOutbox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeriOutboxDeleteManyArgs>(args?: SelectSubset<T, FeriOutboxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeriOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriOutboxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeriOutboxes
     * const feriOutbox = await prisma.feriOutbox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeriOutboxUpdateManyArgs>(args: SelectSubset<T, FeriOutboxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeriOutboxes and returns the data updated in the database.
     * @param {FeriOutboxUpdateManyAndReturnArgs} args - Arguments to update many FeriOutboxes.
     * @example
     * // Update many FeriOutboxes
     * const feriOutbox = await prisma.feriOutbox.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FeriOutboxes and only return the `id`
     * const feriOutboxWithIdOnly = await prisma.feriOutbox.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeriOutboxUpdateManyAndReturnArgs>(args: SelectSubset<T, FeriOutboxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeriOutboxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FeriOutbox.
     * @param {FeriOutboxUpsertArgs} args - Arguments to update or create a FeriOutbox.
     * @example
     * // Update or create a FeriOutbox
     * const feriOutbox = await prisma.feriOutbox.upsert({
     *   create: {
     *     // ... data to create a FeriOutbox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeriOutbox we want to update
     *   }
     * })
     */
    upsert<T extends FeriOutboxUpsertArgs>(args: SelectSubset<T, FeriOutboxUpsertArgs<ExtArgs>>): Prisma__FeriOutboxClient<$Result.GetResult<Prisma.$FeriOutboxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeriOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriOutboxCountArgs} args - Arguments to filter FeriOutboxes to count.
     * @example
     * // Count the number of FeriOutboxes
     * const count = await prisma.feriOutbox.count({
     *   where: {
     *     // ... the filter for the FeriOutboxes we want to count
     *   }
     * })
    **/
    count<T extends FeriOutboxCountArgs>(
      args?: Subset<T, FeriOutboxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeriOutboxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeriOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriOutboxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeriOutboxAggregateArgs>(args: Subset<T, FeriOutboxAggregateArgs>): Prisma.PrismaPromise<GetFeriOutboxAggregateType<T>>

    /**
     * Group by FeriOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeriOutboxGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeriOutboxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeriOutboxGroupByArgs['orderBy'] }
        : { orderBy?: FeriOutboxGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeriOutboxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeriOutboxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeriOutbox model
   */
  readonly fields: FeriOutboxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeriOutbox.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeriOutboxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    FeriRun<T extends FeriRunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FeriRunDefaultArgs<ExtArgs>>): Prisma__FeriRunClient<$Result.GetResult<Prisma.$FeriRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FeriOutbox model
   */ 
  interface FeriOutboxFieldRefs {
    readonly id: FieldRef<"FeriOutbox", 'String'>
    readonly metadata: FieldRef<"FeriOutbox", 'Json'>
    readonly feriRunId: FieldRef<"FeriOutbox", 'String'>
    readonly status: FieldRef<"FeriOutbox", 'String'>
    readonly updatedAt: FieldRef<"FeriOutbox", 'DateTime'>
    readonly createdAt: FieldRef<"FeriOutbox", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FeriOutbox findUnique
   */
  export type FeriOutboxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeriOutbox
     */
    select?: FeriOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeriOutbox
     */
    omit?: FeriOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriOutboxInclude<ExtArgs> | null
    /**
     * Filter, which FeriOutbox to fetch.
     */
    where: FeriOutboxWhereUniqueInput
  }

  /**
   * FeriOutbox findUniqueOrThrow
   */
  export type FeriOutboxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeriOutbox
     */
    select?: FeriOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeriOutbox
     */
    omit?: FeriOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriOutboxInclude<ExtArgs> | null
    /**
     * Filter, which FeriOutbox to fetch.
     */
    where: FeriOutboxWhereUniqueInput
  }

  /**
   * FeriOutbox findFirst
   */
  export type FeriOutboxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeriOutbox
     */
    select?: FeriOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeriOutbox
     */
    omit?: FeriOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriOutboxInclude<ExtArgs> | null
    /**
     * Filter, which FeriOutbox to fetch.
     */
    where?: FeriOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeriOutboxes to fetch.
     */
    orderBy?: FeriOutboxOrderByWithRelationInput | FeriOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeriOutboxes.
     */
    cursor?: FeriOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeriOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeriOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeriOutboxes.
     */
    distinct?: FeriOutboxScalarFieldEnum | FeriOutboxScalarFieldEnum[]
  }

  /**
   * FeriOutbox findFirstOrThrow
   */
  export type FeriOutboxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeriOutbox
     */
    select?: FeriOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeriOutbox
     */
    omit?: FeriOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriOutboxInclude<ExtArgs> | null
    /**
     * Filter, which FeriOutbox to fetch.
     */
    where?: FeriOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeriOutboxes to fetch.
     */
    orderBy?: FeriOutboxOrderByWithRelationInput | FeriOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeriOutboxes.
     */
    cursor?: FeriOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeriOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeriOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeriOutboxes.
     */
    distinct?: FeriOutboxScalarFieldEnum | FeriOutboxScalarFieldEnum[]
  }

  /**
   * FeriOutbox findMany
   */
  export type FeriOutboxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeriOutbox
     */
    select?: FeriOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeriOutbox
     */
    omit?: FeriOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriOutboxInclude<ExtArgs> | null
    /**
     * Filter, which FeriOutboxes to fetch.
     */
    where?: FeriOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeriOutboxes to fetch.
     */
    orderBy?: FeriOutboxOrderByWithRelationInput | FeriOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeriOutboxes.
     */
    cursor?: FeriOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeriOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeriOutboxes.
     */
    skip?: number
    distinct?: FeriOutboxScalarFieldEnum | FeriOutboxScalarFieldEnum[]
  }

  /**
   * FeriOutbox create
   */
  export type FeriOutboxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeriOutbox
     */
    select?: FeriOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeriOutbox
     */
    omit?: FeriOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriOutboxInclude<ExtArgs> | null
    /**
     * The data needed to create a FeriOutbox.
     */
    data: XOR<FeriOutboxCreateInput, FeriOutboxUncheckedCreateInput>
  }

  /**
   * FeriOutbox createMany
   */
  export type FeriOutboxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeriOutboxes.
     */
    data: FeriOutboxCreateManyInput | FeriOutboxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeriOutbox createManyAndReturn
   */
  export type FeriOutboxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeriOutbox
     */
    select?: FeriOutboxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeriOutbox
     */
    omit?: FeriOutboxOmit<ExtArgs> | null
    /**
     * The data used to create many FeriOutboxes.
     */
    data: FeriOutboxCreateManyInput | FeriOutboxCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriOutboxIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeriOutbox update
   */
  export type FeriOutboxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeriOutbox
     */
    select?: FeriOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeriOutbox
     */
    omit?: FeriOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriOutboxInclude<ExtArgs> | null
    /**
     * The data needed to update a FeriOutbox.
     */
    data: XOR<FeriOutboxUpdateInput, FeriOutboxUncheckedUpdateInput>
    /**
     * Choose, which FeriOutbox to update.
     */
    where: FeriOutboxWhereUniqueInput
  }

  /**
   * FeriOutbox updateMany
   */
  export type FeriOutboxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeriOutboxes.
     */
    data: XOR<FeriOutboxUpdateManyMutationInput, FeriOutboxUncheckedUpdateManyInput>
    /**
     * Filter which FeriOutboxes to update
     */
    where?: FeriOutboxWhereInput
    /**
     * Limit how many FeriOutboxes to update.
     */
    limit?: number
  }

  /**
   * FeriOutbox updateManyAndReturn
   */
  export type FeriOutboxUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeriOutbox
     */
    select?: FeriOutboxSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeriOutbox
     */
    omit?: FeriOutboxOmit<ExtArgs> | null
    /**
     * The data used to update FeriOutboxes.
     */
    data: XOR<FeriOutboxUpdateManyMutationInput, FeriOutboxUncheckedUpdateManyInput>
    /**
     * Filter which FeriOutboxes to update
     */
    where?: FeriOutboxWhereInput
    /**
     * Limit how many FeriOutboxes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriOutboxIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeriOutbox upsert
   */
  export type FeriOutboxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeriOutbox
     */
    select?: FeriOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeriOutbox
     */
    omit?: FeriOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriOutboxInclude<ExtArgs> | null
    /**
     * The filter to search for the FeriOutbox to update in case it exists.
     */
    where: FeriOutboxWhereUniqueInput
    /**
     * In case the FeriOutbox found by the `where` argument doesn't exist, create a new FeriOutbox with this data.
     */
    create: XOR<FeriOutboxCreateInput, FeriOutboxUncheckedCreateInput>
    /**
     * In case the FeriOutbox was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeriOutboxUpdateInput, FeriOutboxUncheckedUpdateInput>
  }

  /**
   * FeriOutbox delete
   */
  export type FeriOutboxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeriOutbox
     */
    select?: FeriOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeriOutbox
     */
    omit?: FeriOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriOutboxInclude<ExtArgs> | null
    /**
     * Filter which FeriOutbox to delete.
     */
    where: FeriOutboxWhereUniqueInput
  }

  /**
   * FeriOutbox deleteMany
   */
  export type FeriOutboxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeriOutboxes to delete
     */
    where?: FeriOutboxWhereInput
    /**
     * Limit how many FeriOutboxes to delete.
     */
    limit?: number
  }

  /**
   * FeriOutbox without action
   */
  export type FeriOutboxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeriOutbox
     */
    select?: FeriOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeriOutbox
     */
    omit?: FeriOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeriOutboxInclude<ExtArgs> | null
  }


  /**
   * Model Trigger
   */

  export type AggregateTrigger = {
    _count: TriggerCountAggregateOutputType | null
    _min: TriggerMinAggregateOutputType | null
    _max: TriggerMaxAggregateOutputType | null
  }

  export type TriggerMinAggregateOutputType = {
    id: string | null
    triggerId: string | null
    feriId: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type TriggerMaxAggregateOutputType = {
    id: string | null
    triggerId: string | null
    feriId: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type TriggerCountAggregateOutputType = {
    id: number
    triggerId: number
    feriId: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type TriggerMinAggregateInputType = {
    id?: true
    triggerId?: true
    feriId?: true
    updatedAt?: true
    createdAt?: true
  }

  export type TriggerMaxAggregateInputType = {
    id?: true
    triggerId?: true
    feriId?: true
    updatedAt?: true
    createdAt?: true
  }

  export type TriggerCountAggregateInputType = {
    id?: true
    triggerId?: true
    feriId?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type TriggerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trigger to aggregate.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Triggers
    **/
    _count?: true | TriggerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriggerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriggerMaxAggregateInputType
  }

  export type GetTriggerAggregateType<T extends TriggerAggregateArgs> = {
        [P in keyof T & keyof AggregateTrigger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrigger[P]>
      : GetScalarType<T[P], AggregateTrigger[P]>
  }




  export type TriggerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerWhereInput
    orderBy?: TriggerOrderByWithAggregationInput | TriggerOrderByWithAggregationInput[]
    by: TriggerScalarFieldEnum[] | TriggerScalarFieldEnum
    having?: TriggerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriggerCountAggregateInputType | true
    _min?: TriggerMinAggregateInputType
    _max?: TriggerMaxAggregateInputType
  }

  export type TriggerGroupByOutputType = {
    id: string
    triggerId: string
    feriId: string
    updatedAt: Date
    createdAt: Date
    _count: TriggerCountAggregateOutputType | null
    _min: TriggerMinAggregateOutputType | null
    _max: TriggerMaxAggregateOutputType | null
  }

  type GetTriggerGroupByPayload<T extends TriggerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TriggerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriggerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriggerGroupByOutputType[P]>
            : GetScalarType<T[P], TriggerGroupByOutputType[P]>
        }
      >
    >


  export type TriggerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggerId?: boolean
    feriId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    type?: boolean | AvailableTriggerDefaultArgs<ExtArgs>
    feri?: boolean | FeriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggerId?: boolean
    feriId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    type?: boolean | AvailableTriggerDefaultArgs<ExtArgs>
    feri?: boolean | FeriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggerId?: boolean
    feriId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    type?: boolean | AvailableTriggerDefaultArgs<ExtArgs>
    feri?: boolean | FeriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectScalar = {
    id?: boolean
    triggerId?: boolean
    feriId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type TriggerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "triggerId" | "feriId" | "updatedAt" | "createdAt", ExtArgs["result"]["trigger"]>
  export type TriggerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AvailableTriggerDefaultArgs<ExtArgs>
    feri?: boolean | FeriDefaultArgs<ExtArgs>
  }
  export type TriggerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AvailableTriggerDefaultArgs<ExtArgs>
    feri?: boolean | FeriDefaultArgs<ExtArgs>
  }
  export type TriggerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AvailableTriggerDefaultArgs<ExtArgs>
    feri?: boolean | FeriDefaultArgs<ExtArgs>
  }

  export type $TriggerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trigger"
    objects: {
      type: Prisma.$AvailableTriggerPayload<ExtArgs>
      feri: Prisma.$FeriPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      triggerId: string
      feriId: string
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["trigger"]>
    composites: {}
  }

  type TriggerGetPayload<S extends boolean | null | undefined | TriggerDefaultArgs> = $Result.GetResult<Prisma.$TriggerPayload, S>

  type TriggerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TriggerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TriggerCountAggregateInputType | true
    }

  export interface TriggerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trigger'], meta: { name: 'Trigger' } }
    /**
     * Find zero or one Trigger that matches the filter.
     * @param {TriggerFindUniqueArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TriggerFindUniqueArgs>(args: SelectSubset<T, TriggerFindUniqueArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trigger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TriggerFindUniqueOrThrowArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TriggerFindUniqueOrThrowArgs>(args: SelectSubset<T, TriggerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trigger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindFirstArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TriggerFindFirstArgs>(args?: SelectSubset<T, TriggerFindFirstArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trigger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindFirstOrThrowArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TriggerFindFirstOrThrowArgs>(args?: SelectSubset<T, TriggerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Triggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Triggers
     * const triggers = await prisma.trigger.findMany()
     * 
     * // Get first 10 Triggers
     * const triggers = await prisma.trigger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triggerWithIdOnly = await prisma.trigger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TriggerFindManyArgs>(args?: SelectSubset<T, TriggerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trigger.
     * @param {TriggerCreateArgs} args - Arguments to create a Trigger.
     * @example
     * // Create one Trigger
     * const Trigger = await prisma.trigger.create({
     *   data: {
     *     // ... data to create a Trigger
     *   }
     * })
     * 
     */
    create<T extends TriggerCreateArgs>(args: SelectSubset<T, TriggerCreateArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Triggers.
     * @param {TriggerCreateManyArgs} args - Arguments to create many Triggers.
     * @example
     * // Create many Triggers
     * const trigger = await prisma.trigger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TriggerCreateManyArgs>(args?: SelectSubset<T, TriggerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Triggers and returns the data saved in the database.
     * @param {TriggerCreateManyAndReturnArgs} args - Arguments to create many Triggers.
     * @example
     * // Create many Triggers
     * const trigger = await prisma.trigger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Triggers and only return the `id`
     * const triggerWithIdOnly = await prisma.trigger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TriggerCreateManyAndReturnArgs>(args?: SelectSubset<T, TriggerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trigger.
     * @param {TriggerDeleteArgs} args - Arguments to delete one Trigger.
     * @example
     * // Delete one Trigger
     * const Trigger = await prisma.trigger.delete({
     *   where: {
     *     // ... filter to delete one Trigger
     *   }
     * })
     * 
     */
    delete<T extends TriggerDeleteArgs>(args: SelectSubset<T, TriggerDeleteArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trigger.
     * @param {TriggerUpdateArgs} args - Arguments to update one Trigger.
     * @example
     * // Update one Trigger
     * const trigger = await prisma.trigger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TriggerUpdateArgs>(args: SelectSubset<T, TriggerUpdateArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Triggers.
     * @param {TriggerDeleteManyArgs} args - Arguments to filter Triggers to delete.
     * @example
     * // Delete a few Triggers
     * const { count } = await prisma.trigger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TriggerDeleteManyArgs>(args?: SelectSubset<T, TriggerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Triggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Triggers
     * const trigger = await prisma.trigger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TriggerUpdateManyArgs>(args: SelectSubset<T, TriggerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Triggers and returns the data updated in the database.
     * @param {TriggerUpdateManyAndReturnArgs} args - Arguments to update many Triggers.
     * @example
     * // Update many Triggers
     * const trigger = await prisma.trigger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Triggers and only return the `id`
     * const triggerWithIdOnly = await prisma.trigger.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TriggerUpdateManyAndReturnArgs>(args: SelectSubset<T, TriggerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trigger.
     * @param {TriggerUpsertArgs} args - Arguments to update or create a Trigger.
     * @example
     * // Update or create a Trigger
     * const trigger = await prisma.trigger.upsert({
     *   create: {
     *     // ... data to create a Trigger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trigger we want to update
     *   }
     * })
     */
    upsert<T extends TriggerUpsertArgs>(args: SelectSubset<T, TriggerUpsertArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Triggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerCountArgs} args - Arguments to filter Triggers to count.
     * @example
     * // Count the number of Triggers
     * const count = await prisma.trigger.count({
     *   where: {
     *     // ... the filter for the Triggers we want to count
     *   }
     * })
    **/
    count<T extends TriggerCountArgs>(
      args?: Subset<T, TriggerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriggerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TriggerAggregateArgs>(args: Subset<T, TriggerAggregateArgs>): Prisma.PrismaPromise<GetTriggerAggregateType<T>>

    /**
     * Group by Trigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TriggerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriggerGroupByArgs['orderBy'] }
        : { orderBy?: TriggerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TriggerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriggerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trigger model
   */
  readonly fields: TriggerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trigger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TriggerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    type<T extends AvailableTriggerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvailableTriggerDefaultArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    feri<T extends FeriDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FeriDefaultArgs<ExtArgs>>): Prisma__FeriClient<$Result.GetResult<Prisma.$FeriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trigger model
   */ 
  interface TriggerFieldRefs {
    readonly id: FieldRef<"Trigger", 'String'>
    readonly triggerId: FieldRef<"Trigger", 'String'>
    readonly feriId: FieldRef<"Trigger", 'String'>
    readonly updatedAt: FieldRef<"Trigger", 'DateTime'>
    readonly createdAt: FieldRef<"Trigger", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Trigger findUnique
   */
  export type TriggerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger findUniqueOrThrow
   */
  export type TriggerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger findFirst
   */
  export type TriggerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Triggers.
     */
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger findFirstOrThrow
   */
  export type TriggerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Triggers.
     */
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger findMany
   */
  export type TriggerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Triggers to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger create
   */
  export type TriggerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The data needed to create a Trigger.
     */
    data: XOR<TriggerCreateInput, TriggerUncheckedCreateInput>
  }

  /**
   * Trigger createMany
   */
  export type TriggerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Triggers.
     */
    data: TriggerCreateManyInput | TriggerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trigger createManyAndReturn
   */
  export type TriggerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * The data used to create many Triggers.
     */
    data: TriggerCreateManyInput | TriggerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trigger update
   */
  export type TriggerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The data needed to update a Trigger.
     */
    data: XOR<TriggerUpdateInput, TriggerUncheckedUpdateInput>
    /**
     * Choose, which Trigger to update.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger updateMany
   */
  export type TriggerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Triggers.
     */
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyInput>
    /**
     * Filter which Triggers to update
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to update.
     */
    limit?: number
  }

  /**
   * Trigger updateManyAndReturn
   */
  export type TriggerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * The data used to update Triggers.
     */
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyInput>
    /**
     * Filter which Triggers to update
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trigger upsert
   */
  export type TriggerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The filter to search for the Trigger to update in case it exists.
     */
    where: TriggerWhereUniqueInput
    /**
     * In case the Trigger found by the `where` argument doesn't exist, create a new Trigger with this data.
     */
    create: XOR<TriggerCreateInput, TriggerUncheckedCreateInput>
    /**
     * In case the Trigger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriggerUpdateInput, TriggerUncheckedUpdateInput>
  }

  /**
   * Trigger delete
   */
  export type TriggerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter which Trigger to delete.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger deleteMany
   */
  export type TriggerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Triggers to delete
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to delete.
     */
    limit?: number
  }

  /**
   * Trigger without action
   */
  export type TriggerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
  }


  /**
   * Model Action
   */

  export type AggregateAction = {
    _count: ActionCountAggregateOutputType | null
    _min: ActionMinAggregateOutputType | null
    _max: ActionMaxAggregateOutputType | null
  }

  export type ActionMinAggregateOutputType = {
    id: string | null
    actionId: string | null
    feriId: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type ActionMaxAggregateOutputType = {
    id: string | null
    actionId: string | null
    feriId: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type ActionCountAggregateOutputType = {
    id: number
    actionId: number
    feriId: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type ActionMinAggregateInputType = {
    id?: true
    actionId?: true
    feriId?: true
    updatedAt?: true
    createdAt?: true
  }

  export type ActionMaxAggregateInputType = {
    id?: true
    actionId?: true
    feriId?: true
    updatedAt?: true
    createdAt?: true
  }

  export type ActionCountAggregateInputType = {
    id?: true
    actionId?: true
    feriId?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type ActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Action to aggregate.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Actions
    **/
    _count?: true | ActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActionMaxAggregateInputType
  }

  export type GetActionAggregateType<T extends ActionAggregateArgs> = {
        [P in keyof T & keyof AggregateAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAction[P]>
      : GetScalarType<T[P], AggregateAction[P]>
  }




  export type ActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithAggregationInput | ActionOrderByWithAggregationInput[]
    by: ActionScalarFieldEnum[] | ActionScalarFieldEnum
    having?: ActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActionCountAggregateInputType | true
    _min?: ActionMinAggregateInputType
    _max?: ActionMaxAggregateInputType
  }

  export type ActionGroupByOutputType = {
    id: string
    actionId: string
    feriId: string
    updatedAt: Date
    createdAt: Date
    _count: ActionCountAggregateOutputType | null
    _min: ActionMinAggregateOutputType | null
    _max: ActionMaxAggregateOutputType | null
  }

  type GetActionGroupByPayload<T extends ActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionGroupByOutputType[P]>
            : GetScalarType<T[P], ActionGroupByOutputType[P]>
        }
      >
    >


  export type ActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionId?: boolean
    feriId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    type?: boolean | AvailableActionsDefaultArgs<ExtArgs>
    feri?: boolean | FeriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionId?: boolean
    feriId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    type?: boolean | AvailableActionsDefaultArgs<ExtArgs>
    feri?: boolean | FeriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionId?: boolean
    feriId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    type?: boolean | AvailableActionsDefaultArgs<ExtArgs>
    feri?: boolean | FeriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectScalar = {
    id?: boolean
    actionId?: boolean
    feriId?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type ActionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "actionId" | "feriId" | "updatedAt" | "createdAt", ExtArgs["result"]["action"]>
  export type ActionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AvailableActionsDefaultArgs<ExtArgs>
    feri?: boolean | FeriDefaultArgs<ExtArgs>
  }
  export type ActionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AvailableActionsDefaultArgs<ExtArgs>
    feri?: boolean | FeriDefaultArgs<ExtArgs>
  }
  export type ActionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AvailableActionsDefaultArgs<ExtArgs>
    feri?: boolean | FeriDefaultArgs<ExtArgs>
  }

  export type $ActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Action"
    objects: {
      type: Prisma.$AvailableActionsPayload<ExtArgs>
      feri: Prisma.$FeriPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      actionId: string
      feriId: string
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["action"]>
    composites: {}
  }

  type ActionGetPayload<S extends boolean | null | undefined | ActionDefaultArgs> = $Result.GetResult<Prisma.$ActionPayload, S>

  type ActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActionCountAggregateInputType | true
    }

  export interface ActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Action'], meta: { name: 'Action' } }
    /**
     * Find zero or one Action that matches the filter.
     * @param {ActionFindUniqueArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActionFindUniqueArgs>(args: SelectSubset<T, ActionFindUniqueArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Action that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActionFindUniqueOrThrowArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActionFindUniqueOrThrowArgs>(args: SelectSubset<T, ActionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Action that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindFirstArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActionFindFirstArgs>(args?: SelectSubset<T, ActionFindFirstArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Action that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindFirstOrThrowArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActionFindFirstOrThrowArgs>(args?: SelectSubset<T, ActionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actions
     * const actions = await prisma.action.findMany()
     * 
     * // Get first 10 Actions
     * const actions = await prisma.action.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actionWithIdOnly = await prisma.action.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActionFindManyArgs>(args?: SelectSubset<T, ActionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Action.
     * @param {ActionCreateArgs} args - Arguments to create a Action.
     * @example
     * // Create one Action
     * const Action = await prisma.action.create({
     *   data: {
     *     // ... data to create a Action
     *   }
     * })
     * 
     */
    create<T extends ActionCreateArgs>(args: SelectSubset<T, ActionCreateArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actions.
     * @param {ActionCreateManyArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const action = await prisma.action.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActionCreateManyArgs>(args?: SelectSubset<T, ActionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Actions and returns the data saved in the database.
     * @param {ActionCreateManyAndReturnArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const action = await prisma.action.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Actions and only return the `id`
     * const actionWithIdOnly = await prisma.action.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActionCreateManyAndReturnArgs>(args?: SelectSubset<T, ActionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Action.
     * @param {ActionDeleteArgs} args - Arguments to delete one Action.
     * @example
     * // Delete one Action
     * const Action = await prisma.action.delete({
     *   where: {
     *     // ... filter to delete one Action
     *   }
     * })
     * 
     */
    delete<T extends ActionDeleteArgs>(args: SelectSubset<T, ActionDeleteArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Action.
     * @param {ActionUpdateArgs} args - Arguments to update one Action.
     * @example
     * // Update one Action
     * const action = await prisma.action.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActionUpdateArgs>(args: SelectSubset<T, ActionUpdateArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actions.
     * @param {ActionDeleteManyArgs} args - Arguments to filter Actions to delete.
     * @example
     * // Delete a few Actions
     * const { count } = await prisma.action.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActionDeleteManyArgs>(args?: SelectSubset<T, ActionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actions
     * const action = await prisma.action.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActionUpdateManyArgs>(args: SelectSubset<T, ActionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actions and returns the data updated in the database.
     * @param {ActionUpdateManyAndReturnArgs} args - Arguments to update many Actions.
     * @example
     * // Update many Actions
     * const action = await prisma.action.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Actions and only return the `id`
     * const actionWithIdOnly = await prisma.action.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActionUpdateManyAndReturnArgs>(args: SelectSubset<T, ActionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Action.
     * @param {ActionUpsertArgs} args - Arguments to update or create a Action.
     * @example
     * // Update or create a Action
     * const action = await prisma.action.upsert({
     *   create: {
     *     // ... data to create a Action
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Action we want to update
     *   }
     * })
     */
    upsert<T extends ActionUpsertArgs>(args: SelectSubset<T, ActionUpsertArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionCountArgs} args - Arguments to filter Actions to count.
     * @example
     * // Count the number of Actions
     * const count = await prisma.action.count({
     *   where: {
     *     // ... the filter for the Actions we want to count
     *   }
     * })
    **/
    count<T extends ActionCountArgs>(
      args?: Subset<T, ActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActionAggregateArgs>(args: Subset<T, ActionAggregateArgs>): Prisma.PrismaPromise<GetActionAggregateType<T>>

    /**
     * Group by Action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActionGroupByArgs['orderBy'] }
        : { orderBy?: ActionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Action model
   */
  readonly fields: ActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Action.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    type<T extends AvailableActionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvailableActionsDefaultArgs<ExtArgs>>): Prisma__AvailableActionsClient<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    feri<T extends FeriDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FeriDefaultArgs<ExtArgs>>): Prisma__FeriClient<$Result.GetResult<Prisma.$FeriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Action model
   */ 
  interface ActionFieldRefs {
    readonly id: FieldRef<"Action", 'String'>
    readonly actionId: FieldRef<"Action", 'String'>
    readonly feriId: FieldRef<"Action", 'String'>
    readonly updatedAt: FieldRef<"Action", 'DateTime'>
    readonly createdAt: FieldRef<"Action", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Action findUnique
   */
  export type ActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action findUniqueOrThrow
   */
  export type ActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action findFirst
   */
  export type ActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actions.
     */
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action findFirstOrThrow
   */
  export type ActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actions.
     */
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action findMany
   */
  export type ActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Actions to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action create
   */
  export type ActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The data needed to create a Action.
     */
    data: XOR<ActionCreateInput, ActionUncheckedCreateInput>
  }

  /**
   * Action createMany
   */
  export type ActionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Actions.
     */
    data: ActionCreateManyInput | ActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Action createManyAndReturn
   */
  export type ActionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * The data used to create many Actions.
     */
    data: ActionCreateManyInput | ActionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Action update
   */
  export type ActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The data needed to update a Action.
     */
    data: XOR<ActionUpdateInput, ActionUncheckedUpdateInput>
    /**
     * Choose, which Action to update.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action updateMany
   */
  export type ActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Actions.
     */
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyInput>
    /**
     * Filter which Actions to update
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to update.
     */
    limit?: number
  }

  /**
   * Action updateManyAndReturn
   */
  export type ActionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * The data used to update Actions.
     */
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyInput>
    /**
     * Filter which Actions to update
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Action upsert
   */
  export type ActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The filter to search for the Action to update in case it exists.
     */
    where: ActionWhereUniqueInput
    /**
     * In case the Action found by the `where` argument doesn't exist, create a new Action with this data.
     */
    create: XOR<ActionCreateInput, ActionUncheckedCreateInput>
    /**
     * In case the Action was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActionUpdateInput, ActionUncheckedUpdateInput>
  }

  /**
   * Action delete
   */
  export type ActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter which Action to delete.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action deleteMany
   */
  export type ActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actions to delete
     */
    where?: ActionWhereInput
    /**
     * Limit how many Actions to delete.
     */
    limit?: number
  }

  /**
   * Action without action
   */
  export type ActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
  }


  /**
   * Model AvailableActions
   */

  export type AggregateAvailableActions = {
    _count: AvailableActionsCountAggregateOutputType | null
    _min: AvailableActionsMinAggregateOutputType | null
    _max: AvailableActionsMaxAggregateOutputType | null
  }

  export type AvailableActionsMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AvailableActionsMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AvailableActionsCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type AvailableActionsMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type AvailableActionsMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type AvailableActionsCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type AvailableActionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableActions to aggregate.
     */
    where?: AvailableActionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableActions to fetch.
     */
    orderBy?: AvailableActionsOrderByWithRelationInput | AvailableActionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailableActionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailableActions
    **/
    _count?: true | AvailableActionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailableActionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailableActionsMaxAggregateInputType
  }

  export type GetAvailableActionsAggregateType<T extends AvailableActionsAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailableActions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailableActions[P]>
      : GetScalarType<T[P], AggregateAvailableActions[P]>
  }




  export type AvailableActionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailableActionsWhereInput
    orderBy?: AvailableActionsOrderByWithAggregationInput | AvailableActionsOrderByWithAggregationInput[]
    by: AvailableActionsScalarFieldEnum[] | AvailableActionsScalarFieldEnum
    having?: AvailableActionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailableActionsCountAggregateInputType | true
    _min?: AvailableActionsMinAggregateInputType
    _max?: AvailableActionsMaxAggregateInputType
  }

  export type AvailableActionsGroupByOutputType = {
    id: string
    name: string
    _count: AvailableActionsCountAggregateOutputType | null
    _min: AvailableActionsMinAggregateOutputType | null
    _max: AvailableActionsMaxAggregateOutputType | null
  }

  type GetAvailableActionsGroupByPayload<T extends AvailableActionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailableActionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailableActionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailableActionsGroupByOutputType[P]>
            : GetScalarType<T[P], AvailableActionsGroupByOutputType[P]>
        }
      >
    >


  export type AvailableActionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    Action?: boolean | AvailableActions$ActionArgs<ExtArgs>
    _count?: boolean | AvailableActionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availableActions"]>

  export type AvailableActionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["availableActions"]>

  export type AvailableActionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["availableActions"]>

  export type AvailableActionsSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type AvailableActionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["availableActions"]>
  export type AvailableActionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Action?: boolean | AvailableActions$ActionArgs<ExtArgs>
    _count?: boolean | AvailableActionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AvailableActionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AvailableActionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AvailableActionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailableActions"
    objects: {
      Action: Prisma.$ActionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["availableActions"]>
    composites: {}
  }

  type AvailableActionsGetPayload<S extends boolean | null | undefined | AvailableActionsDefaultArgs> = $Result.GetResult<Prisma.$AvailableActionsPayload, S>

  type AvailableActionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailableActionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailableActionsCountAggregateInputType | true
    }

  export interface AvailableActionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailableActions'], meta: { name: 'AvailableActions' } }
    /**
     * Find zero or one AvailableActions that matches the filter.
     * @param {AvailableActionsFindUniqueArgs} args - Arguments to find a AvailableActions
     * @example
     * // Get one AvailableActions
     * const availableActions = await prisma.availableActions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailableActionsFindUniqueArgs>(args: SelectSubset<T, AvailableActionsFindUniqueArgs<ExtArgs>>): Prisma__AvailableActionsClient<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AvailableActions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailableActionsFindUniqueOrThrowArgs} args - Arguments to find a AvailableActions
     * @example
     * // Get one AvailableActions
     * const availableActions = await prisma.availableActions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailableActionsFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailableActionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailableActionsClient<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionsFindFirstArgs} args - Arguments to find a AvailableActions
     * @example
     * // Get one AvailableActions
     * const availableActions = await prisma.availableActions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailableActionsFindFirstArgs>(args?: SelectSubset<T, AvailableActionsFindFirstArgs<ExtArgs>>): Prisma__AvailableActionsClient<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableActions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionsFindFirstOrThrowArgs} args - Arguments to find a AvailableActions
     * @example
     * // Get one AvailableActions
     * const availableActions = await prisma.availableActions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailableActionsFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailableActionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailableActionsClient<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AvailableActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailableActions
     * const availableActions = await prisma.availableActions.findMany()
     * 
     * // Get first 10 AvailableActions
     * const availableActions = await prisma.availableActions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availableActionsWithIdOnly = await prisma.availableActions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailableActionsFindManyArgs>(args?: SelectSubset<T, AvailableActionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AvailableActions.
     * @param {AvailableActionsCreateArgs} args - Arguments to create a AvailableActions.
     * @example
     * // Create one AvailableActions
     * const AvailableActions = await prisma.availableActions.create({
     *   data: {
     *     // ... data to create a AvailableActions
     *   }
     * })
     * 
     */
    create<T extends AvailableActionsCreateArgs>(args: SelectSubset<T, AvailableActionsCreateArgs<ExtArgs>>): Prisma__AvailableActionsClient<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AvailableActions.
     * @param {AvailableActionsCreateManyArgs} args - Arguments to create many AvailableActions.
     * @example
     * // Create many AvailableActions
     * const availableActions = await prisma.availableActions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailableActionsCreateManyArgs>(args?: SelectSubset<T, AvailableActionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvailableActions and returns the data saved in the database.
     * @param {AvailableActionsCreateManyAndReturnArgs} args - Arguments to create many AvailableActions.
     * @example
     * // Create many AvailableActions
     * const availableActions = await prisma.availableActions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvailableActions and only return the `id`
     * const availableActionsWithIdOnly = await prisma.availableActions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailableActionsCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailableActionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AvailableActions.
     * @param {AvailableActionsDeleteArgs} args - Arguments to delete one AvailableActions.
     * @example
     * // Delete one AvailableActions
     * const AvailableActions = await prisma.availableActions.delete({
     *   where: {
     *     // ... filter to delete one AvailableActions
     *   }
     * })
     * 
     */
    delete<T extends AvailableActionsDeleteArgs>(args: SelectSubset<T, AvailableActionsDeleteArgs<ExtArgs>>): Prisma__AvailableActionsClient<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AvailableActions.
     * @param {AvailableActionsUpdateArgs} args - Arguments to update one AvailableActions.
     * @example
     * // Update one AvailableActions
     * const availableActions = await prisma.availableActions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailableActionsUpdateArgs>(args: SelectSubset<T, AvailableActionsUpdateArgs<ExtArgs>>): Prisma__AvailableActionsClient<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AvailableActions.
     * @param {AvailableActionsDeleteManyArgs} args - Arguments to filter AvailableActions to delete.
     * @example
     * // Delete a few AvailableActions
     * const { count } = await prisma.availableActions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailableActionsDeleteManyArgs>(args?: SelectSubset<T, AvailableActionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailableActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailableActions
     * const availableActions = await prisma.availableActions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailableActionsUpdateManyArgs>(args: SelectSubset<T, AvailableActionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailableActions and returns the data updated in the database.
     * @param {AvailableActionsUpdateManyAndReturnArgs} args - Arguments to update many AvailableActions.
     * @example
     * // Update many AvailableActions
     * const availableActions = await prisma.availableActions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AvailableActions and only return the `id`
     * const availableActionsWithIdOnly = await prisma.availableActions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvailableActionsUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailableActionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AvailableActions.
     * @param {AvailableActionsUpsertArgs} args - Arguments to update or create a AvailableActions.
     * @example
     * // Update or create a AvailableActions
     * const availableActions = await prisma.availableActions.upsert({
     *   create: {
     *     // ... data to create a AvailableActions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailableActions we want to update
     *   }
     * })
     */
    upsert<T extends AvailableActionsUpsertArgs>(args: SelectSubset<T, AvailableActionsUpsertArgs<ExtArgs>>): Prisma__AvailableActionsClient<$Result.GetResult<Prisma.$AvailableActionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AvailableActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionsCountArgs} args - Arguments to filter AvailableActions to count.
     * @example
     * // Count the number of AvailableActions
     * const count = await prisma.availableActions.count({
     *   where: {
     *     // ... the filter for the AvailableActions we want to count
     *   }
     * })
    **/
    count<T extends AvailableActionsCountArgs>(
      args?: Subset<T, AvailableActionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailableActionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailableActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvailableActionsAggregateArgs>(args: Subset<T, AvailableActionsAggregateArgs>): Prisma.PrismaPromise<GetAvailableActionsAggregateType<T>>

    /**
     * Group by AvailableActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableActionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvailableActionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailableActionsGroupByArgs['orderBy'] }
        : { orderBy?: AvailableActionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvailableActionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailableActionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailableActions model
   */
  readonly fields: AvailableActionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailableActions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailableActionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Action<T extends AvailableActions$ActionArgs<ExtArgs> = {}>(args?: Subset<T, AvailableActions$ActionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AvailableActions model
   */ 
  interface AvailableActionsFieldRefs {
    readonly id: FieldRef<"AvailableActions", 'String'>
    readonly name: FieldRef<"AvailableActions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AvailableActions findUnique
   */
  export type AvailableActionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null
    /**
     * Filter, which AvailableActions to fetch.
     */
    where: AvailableActionsWhereUniqueInput
  }

  /**
   * AvailableActions findUniqueOrThrow
   */
  export type AvailableActionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null
    /**
     * Filter, which AvailableActions to fetch.
     */
    where: AvailableActionsWhereUniqueInput
  }

  /**
   * AvailableActions findFirst
   */
  export type AvailableActionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null
    /**
     * Filter, which AvailableActions to fetch.
     */
    where?: AvailableActionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableActions to fetch.
     */
    orderBy?: AvailableActionsOrderByWithRelationInput | AvailableActionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableActions.
     */
    cursor?: AvailableActionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableActions.
     */
    distinct?: AvailableActionsScalarFieldEnum | AvailableActionsScalarFieldEnum[]
  }

  /**
   * AvailableActions findFirstOrThrow
   */
  export type AvailableActionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null
    /**
     * Filter, which AvailableActions to fetch.
     */
    where?: AvailableActionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableActions to fetch.
     */
    orderBy?: AvailableActionsOrderByWithRelationInput | AvailableActionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableActions.
     */
    cursor?: AvailableActionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableActions.
     */
    distinct?: AvailableActionsScalarFieldEnum | AvailableActionsScalarFieldEnum[]
  }

  /**
   * AvailableActions findMany
   */
  export type AvailableActionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null
    /**
     * Filter, which AvailableActions to fetch.
     */
    where?: AvailableActionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableActions to fetch.
     */
    orderBy?: AvailableActionsOrderByWithRelationInput | AvailableActionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailableActions.
     */
    cursor?: AvailableActionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableActions.
     */
    skip?: number
    distinct?: AvailableActionsScalarFieldEnum | AvailableActionsScalarFieldEnum[]
  }

  /**
   * AvailableActions create
   */
  export type AvailableActionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null
    /**
     * The data needed to create a AvailableActions.
     */
    data: XOR<AvailableActionsCreateInput, AvailableActionsUncheckedCreateInput>
  }

  /**
   * AvailableActions createMany
   */
  export type AvailableActionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailableActions.
     */
    data: AvailableActionsCreateManyInput | AvailableActionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableActions createManyAndReturn
   */
  export type AvailableActionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * The data used to create many AvailableActions.
     */
    data: AvailableActionsCreateManyInput | AvailableActionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableActions update
   */
  export type AvailableActionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null
    /**
     * The data needed to update a AvailableActions.
     */
    data: XOR<AvailableActionsUpdateInput, AvailableActionsUncheckedUpdateInput>
    /**
     * Choose, which AvailableActions to update.
     */
    where: AvailableActionsWhereUniqueInput
  }

  /**
   * AvailableActions updateMany
   */
  export type AvailableActionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailableActions.
     */
    data: XOR<AvailableActionsUpdateManyMutationInput, AvailableActionsUncheckedUpdateManyInput>
    /**
     * Filter which AvailableActions to update
     */
    where?: AvailableActionsWhereInput
    /**
     * Limit how many AvailableActions to update.
     */
    limit?: number
  }

  /**
   * AvailableActions updateManyAndReturn
   */
  export type AvailableActionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * The data used to update AvailableActions.
     */
    data: XOR<AvailableActionsUpdateManyMutationInput, AvailableActionsUncheckedUpdateManyInput>
    /**
     * Filter which AvailableActions to update
     */
    where?: AvailableActionsWhereInput
    /**
     * Limit how many AvailableActions to update.
     */
    limit?: number
  }

  /**
   * AvailableActions upsert
   */
  export type AvailableActionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null
    /**
     * The filter to search for the AvailableActions to update in case it exists.
     */
    where: AvailableActionsWhereUniqueInput
    /**
     * In case the AvailableActions found by the `where` argument doesn't exist, create a new AvailableActions with this data.
     */
    create: XOR<AvailableActionsCreateInput, AvailableActionsUncheckedCreateInput>
    /**
     * In case the AvailableActions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailableActionsUpdateInput, AvailableActionsUncheckedUpdateInput>
  }

  /**
   * AvailableActions delete
   */
  export type AvailableActionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null
    /**
     * Filter which AvailableActions to delete.
     */
    where: AvailableActionsWhereUniqueInput
  }

  /**
   * AvailableActions deleteMany
   */
  export type AvailableActionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableActions to delete
     */
    where?: AvailableActionsWhereInput
    /**
     * Limit how many AvailableActions to delete.
     */
    limit?: number
  }

  /**
   * AvailableActions.Action
   */
  export type AvailableActions$ActionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Action
     */
    omit?: ActionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    cursor?: ActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * AvailableActions without action
   */
  export type AvailableActionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableActions
     */
    select?: AvailableActionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableActions
     */
    omit?: AvailableActionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableActionsInclude<ExtArgs> | null
  }


  /**
   * Model AvailableTrigger
   */

  export type AggregateAvailableTrigger = {
    _count: AvailableTriggerCountAggregateOutputType | null
    _min: AvailableTriggerMinAggregateOutputType | null
    _max: AvailableTriggerMaxAggregateOutputType | null
  }

  export type AvailableTriggerMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AvailableTriggerMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AvailableTriggerCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type AvailableTriggerMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type AvailableTriggerMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type AvailableTriggerCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type AvailableTriggerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableTrigger to aggregate.
     */
    where?: AvailableTriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTriggers to fetch.
     */
    orderBy?: AvailableTriggerOrderByWithRelationInput | AvailableTriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailableTriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTriggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailableTriggers
    **/
    _count?: true | AvailableTriggerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailableTriggerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailableTriggerMaxAggregateInputType
  }

  export type GetAvailableTriggerAggregateType<T extends AvailableTriggerAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailableTrigger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailableTrigger[P]>
      : GetScalarType<T[P], AggregateAvailableTrigger[P]>
  }




  export type AvailableTriggerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailableTriggerWhereInput
    orderBy?: AvailableTriggerOrderByWithAggregationInput | AvailableTriggerOrderByWithAggregationInput[]
    by: AvailableTriggerScalarFieldEnum[] | AvailableTriggerScalarFieldEnum
    having?: AvailableTriggerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailableTriggerCountAggregateInputType | true
    _min?: AvailableTriggerMinAggregateInputType
    _max?: AvailableTriggerMaxAggregateInputType
  }

  export type AvailableTriggerGroupByOutputType = {
    id: string
    name: string
    _count: AvailableTriggerCountAggregateOutputType | null
    _min: AvailableTriggerMinAggregateOutputType | null
    _max: AvailableTriggerMaxAggregateOutputType | null
  }

  type GetAvailableTriggerGroupByPayload<T extends AvailableTriggerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailableTriggerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailableTriggerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailableTriggerGroupByOutputType[P]>
            : GetScalarType<T[P], AvailableTriggerGroupByOutputType[P]>
        }
      >
    >


  export type AvailableTriggerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    Trigger?: boolean | AvailableTrigger$TriggerArgs<ExtArgs>
    _count?: boolean | AvailableTriggerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availableTrigger"]>

  export type AvailableTriggerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["availableTrigger"]>

  export type AvailableTriggerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["availableTrigger"]>

  export type AvailableTriggerSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type AvailableTriggerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["availableTrigger"]>
  export type AvailableTriggerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Trigger?: boolean | AvailableTrigger$TriggerArgs<ExtArgs>
    _count?: boolean | AvailableTriggerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AvailableTriggerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AvailableTriggerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AvailableTriggerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailableTrigger"
    objects: {
      Trigger: Prisma.$TriggerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["availableTrigger"]>
    composites: {}
  }

  type AvailableTriggerGetPayload<S extends boolean | null | undefined | AvailableTriggerDefaultArgs> = $Result.GetResult<Prisma.$AvailableTriggerPayload, S>

  type AvailableTriggerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailableTriggerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailableTriggerCountAggregateInputType | true
    }

  export interface AvailableTriggerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailableTrigger'], meta: { name: 'AvailableTrigger' } }
    /**
     * Find zero or one AvailableTrigger that matches the filter.
     * @param {AvailableTriggerFindUniqueArgs} args - Arguments to find a AvailableTrigger
     * @example
     * // Get one AvailableTrigger
     * const availableTrigger = await prisma.availableTrigger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailableTriggerFindUniqueArgs>(args: SelectSubset<T, AvailableTriggerFindUniqueArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AvailableTrigger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailableTriggerFindUniqueOrThrowArgs} args - Arguments to find a AvailableTrigger
     * @example
     * // Get one AvailableTrigger
     * const availableTrigger = await prisma.availableTrigger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailableTriggerFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailableTriggerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableTrigger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerFindFirstArgs} args - Arguments to find a AvailableTrigger
     * @example
     * // Get one AvailableTrigger
     * const availableTrigger = await prisma.availableTrigger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailableTriggerFindFirstArgs>(args?: SelectSubset<T, AvailableTriggerFindFirstArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableTrigger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerFindFirstOrThrowArgs} args - Arguments to find a AvailableTrigger
     * @example
     * // Get one AvailableTrigger
     * const availableTrigger = await prisma.availableTrigger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailableTriggerFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailableTriggerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AvailableTriggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailableTriggers
     * const availableTriggers = await prisma.availableTrigger.findMany()
     * 
     * // Get first 10 AvailableTriggers
     * const availableTriggers = await prisma.availableTrigger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availableTriggerWithIdOnly = await prisma.availableTrigger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailableTriggerFindManyArgs>(args?: SelectSubset<T, AvailableTriggerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AvailableTrigger.
     * @param {AvailableTriggerCreateArgs} args - Arguments to create a AvailableTrigger.
     * @example
     * // Create one AvailableTrigger
     * const AvailableTrigger = await prisma.availableTrigger.create({
     *   data: {
     *     // ... data to create a AvailableTrigger
     *   }
     * })
     * 
     */
    create<T extends AvailableTriggerCreateArgs>(args: SelectSubset<T, AvailableTriggerCreateArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AvailableTriggers.
     * @param {AvailableTriggerCreateManyArgs} args - Arguments to create many AvailableTriggers.
     * @example
     * // Create many AvailableTriggers
     * const availableTrigger = await prisma.availableTrigger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailableTriggerCreateManyArgs>(args?: SelectSubset<T, AvailableTriggerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvailableTriggers and returns the data saved in the database.
     * @param {AvailableTriggerCreateManyAndReturnArgs} args - Arguments to create many AvailableTriggers.
     * @example
     * // Create many AvailableTriggers
     * const availableTrigger = await prisma.availableTrigger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvailableTriggers and only return the `id`
     * const availableTriggerWithIdOnly = await prisma.availableTrigger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailableTriggerCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailableTriggerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AvailableTrigger.
     * @param {AvailableTriggerDeleteArgs} args - Arguments to delete one AvailableTrigger.
     * @example
     * // Delete one AvailableTrigger
     * const AvailableTrigger = await prisma.availableTrigger.delete({
     *   where: {
     *     // ... filter to delete one AvailableTrigger
     *   }
     * })
     * 
     */
    delete<T extends AvailableTriggerDeleteArgs>(args: SelectSubset<T, AvailableTriggerDeleteArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AvailableTrigger.
     * @param {AvailableTriggerUpdateArgs} args - Arguments to update one AvailableTrigger.
     * @example
     * // Update one AvailableTrigger
     * const availableTrigger = await prisma.availableTrigger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailableTriggerUpdateArgs>(args: SelectSubset<T, AvailableTriggerUpdateArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AvailableTriggers.
     * @param {AvailableTriggerDeleteManyArgs} args - Arguments to filter AvailableTriggers to delete.
     * @example
     * // Delete a few AvailableTriggers
     * const { count } = await prisma.availableTrigger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailableTriggerDeleteManyArgs>(args?: SelectSubset<T, AvailableTriggerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailableTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailableTriggers
     * const availableTrigger = await prisma.availableTrigger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailableTriggerUpdateManyArgs>(args: SelectSubset<T, AvailableTriggerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailableTriggers and returns the data updated in the database.
     * @param {AvailableTriggerUpdateManyAndReturnArgs} args - Arguments to update many AvailableTriggers.
     * @example
     * // Update many AvailableTriggers
     * const availableTrigger = await prisma.availableTrigger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AvailableTriggers and only return the `id`
     * const availableTriggerWithIdOnly = await prisma.availableTrigger.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvailableTriggerUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailableTriggerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AvailableTrigger.
     * @param {AvailableTriggerUpsertArgs} args - Arguments to update or create a AvailableTrigger.
     * @example
     * // Update or create a AvailableTrigger
     * const availableTrigger = await prisma.availableTrigger.upsert({
     *   create: {
     *     // ... data to create a AvailableTrigger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailableTrigger we want to update
     *   }
     * })
     */
    upsert<T extends AvailableTriggerUpsertArgs>(args: SelectSubset<T, AvailableTriggerUpsertArgs<ExtArgs>>): Prisma__AvailableTriggerClient<$Result.GetResult<Prisma.$AvailableTriggerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AvailableTriggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerCountArgs} args - Arguments to filter AvailableTriggers to count.
     * @example
     * // Count the number of AvailableTriggers
     * const count = await prisma.availableTrigger.count({
     *   where: {
     *     // ... the filter for the AvailableTriggers we want to count
     *   }
     * })
    **/
    count<T extends AvailableTriggerCountArgs>(
      args?: Subset<T, AvailableTriggerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailableTriggerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailableTrigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvailableTriggerAggregateArgs>(args: Subset<T, AvailableTriggerAggregateArgs>): Prisma.PrismaPromise<GetAvailableTriggerAggregateType<T>>

    /**
     * Group by AvailableTrigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableTriggerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvailableTriggerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailableTriggerGroupByArgs['orderBy'] }
        : { orderBy?: AvailableTriggerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvailableTriggerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailableTriggerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailableTrigger model
   */
  readonly fields: AvailableTriggerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailableTrigger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailableTriggerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Trigger<T extends AvailableTrigger$TriggerArgs<ExtArgs> = {}>(args?: Subset<T, AvailableTrigger$TriggerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AvailableTrigger model
   */ 
  interface AvailableTriggerFieldRefs {
    readonly id: FieldRef<"AvailableTrigger", 'String'>
    readonly name: FieldRef<"AvailableTrigger", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AvailableTrigger findUnique
   */
  export type AvailableTriggerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTrigger to fetch.
     */
    where: AvailableTriggerWhereUniqueInput
  }

  /**
   * AvailableTrigger findUniqueOrThrow
   */
  export type AvailableTriggerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTrigger to fetch.
     */
    where: AvailableTriggerWhereUniqueInput
  }

  /**
   * AvailableTrigger findFirst
   */
  export type AvailableTriggerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTrigger to fetch.
     */
    where?: AvailableTriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTriggers to fetch.
     */
    orderBy?: AvailableTriggerOrderByWithRelationInput | AvailableTriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableTriggers.
     */
    cursor?: AvailableTriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTriggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableTriggers.
     */
    distinct?: AvailableTriggerScalarFieldEnum | AvailableTriggerScalarFieldEnum[]
  }

  /**
   * AvailableTrigger findFirstOrThrow
   */
  export type AvailableTriggerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTrigger to fetch.
     */
    where?: AvailableTriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTriggers to fetch.
     */
    orderBy?: AvailableTriggerOrderByWithRelationInput | AvailableTriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableTriggers.
     */
    cursor?: AvailableTriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTriggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableTriggers.
     */
    distinct?: AvailableTriggerScalarFieldEnum | AvailableTriggerScalarFieldEnum[]
  }

  /**
   * AvailableTrigger findMany
   */
  export type AvailableTriggerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * Filter, which AvailableTriggers to fetch.
     */
    where?: AvailableTriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableTriggers to fetch.
     */
    orderBy?: AvailableTriggerOrderByWithRelationInput | AvailableTriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailableTriggers.
     */
    cursor?: AvailableTriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableTriggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableTriggers.
     */
    skip?: number
    distinct?: AvailableTriggerScalarFieldEnum | AvailableTriggerScalarFieldEnum[]
  }

  /**
   * AvailableTrigger create
   */
  export type AvailableTriggerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * The data needed to create a AvailableTrigger.
     */
    data: XOR<AvailableTriggerCreateInput, AvailableTriggerUncheckedCreateInput>
  }

  /**
   * AvailableTrigger createMany
   */
  export type AvailableTriggerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailableTriggers.
     */
    data: AvailableTriggerCreateManyInput | AvailableTriggerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableTrigger createManyAndReturn
   */
  export type AvailableTriggerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * The data used to create many AvailableTriggers.
     */
    data: AvailableTriggerCreateManyInput | AvailableTriggerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableTrigger update
   */
  export type AvailableTriggerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * The data needed to update a AvailableTrigger.
     */
    data: XOR<AvailableTriggerUpdateInput, AvailableTriggerUncheckedUpdateInput>
    /**
     * Choose, which AvailableTrigger to update.
     */
    where: AvailableTriggerWhereUniqueInput
  }

  /**
   * AvailableTrigger updateMany
   */
  export type AvailableTriggerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailableTriggers.
     */
    data: XOR<AvailableTriggerUpdateManyMutationInput, AvailableTriggerUncheckedUpdateManyInput>
    /**
     * Filter which AvailableTriggers to update
     */
    where?: AvailableTriggerWhereInput
    /**
     * Limit how many AvailableTriggers to update.
     */
    limit?: number
  }

  /**
   * AvailableTrigger updateManyAndReturn
   */
  export type AvailableTriggerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * The data used to update AvailableTriggers.
     */
    data: XOR<AvailableTriggerUpdateManyMutationInput, AvailableTriggerUncheckedUpdateManyInput>
    /**
     * Filter which AvailableTriggers to update
     */
    where?: AvailableTriggerWhereInput
    /**
     * Limit how many AvailableTriggers to update.
     */
    limit?: number
  }

  /**
   * AvailableTrigger upsert
   */
  export type AvailableTriggerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * The filter to search for the AvailableTrigger to update in case it exists.
     */
    where: AvailableTriggerWhereUniqueInput
    /**
     * In case the AvailableTrigger found by the `where` argument doesn't exist, create a new AvailableTrigger with this data.
     */
    create: XOR<AvailableTriggerCreateInput, AvailableTriggerUncheckedCreateInput>
    /**
     * In case the AvailableTrigger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailableTriggerUpdateInput, AvailableTriggerUncheckedUpdateInput>
  }

  /**
   * AvailableTrigger delete
   */
  export type AvailableTriggerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
    /**
     * Filter which AvailableTrigger to delete.
     */
    where: AvailableTriggerWhereUniqueInput
  }

  /**
   * AvailableTrigger deleteMany
   */
  export type AvailableTriggerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableTriggers to delete
     */
    where?: AvailableTriggerWhereInput
    /**
     * Limit how many AvailableTriggers to delete.
     */
    limit?: number
  }

  /**
   * AvailableTrigger.Trigger
   */
  export type AvailableTrigger$TriggerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    where?: TriggerWhereInput
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    cursor?: TriggerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * AvailableTrigger without action
   */
  export type AvailableTriggerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableTrigger
     */
    select?: AvailableTriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableTrigger
     */
    omit?: AvailableTriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableTriggerInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FeriScalarFieldEnum: {
    id: 'id',
    triggerId: 'triggerId',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type FeriScalarFieldEnum = (typeof FeriScalarFieldEnum)[keyof typeof FeriScalarFieldEnum]


  export const FeriRunScalarFieldEnum: {
    id: 'id',
    feriId: 'feriId',
    status: 'status',
    metadata: 'metadata',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type FeriRunScalarFieldEnum = (typeof FeriRunScalarFieldEnum)[keyof typeof FeriRunScalarFieldEnum]


  export const FeriOutboxScalarFieldEnum: {
    id: 'id',
    metadata: 'metadata',
    feriRunId: 'feriRunId',
    status: 'status',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type FeriOutboxScalarFieldEnum = (typeof FeriOutboxScalarFieldEnum)[keyof typeof FeriOutboxScalarFieldEnum]


  export const TriggerScalarFieldEnum: {
    id: 'id',
    triggerId: 'triggerId',
    feriId: 'feriId',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type TriggerScalarFieldEnum = (typeof TriggerScalarFieldEnum)[keyof typeof TriggerScalarFieldEnum]


  export const ActionScalarFieldEnum: {
    id: 'id',
    actionId: 'actionId',
    feriId: 'feriId',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type ActionScalarFieldEnum = (typeof ActionScalarFieldEnum)[keyof typeof ActionScalarFieldEnum]


  export const AvailableActionsScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type AvailableActionsScalarFieldEnum = (typeof AvailableActionsScalarFieldEnum)[keyof typeof AvailableActionsScalarFieldEnum]


  export const AvailableTriggerScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type AvailableTriggerScalarFieldEnum = (typeof AvailableTriggerScalarFieldEnum)[keyof typeof AvailableTriggerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FeriWhereInput = {
    AND?: FeriWhereInput | FeriWhereInput[]
    OR?: FeriWhereInput[]
    NOT?: FeriWhereInput | FeriWhereInput[]
    id?: StringFilter<"Feri"> | string
    triggerId?: StringFilter<"Feri"> | string
    updatedAt?: DateTimeFilter<"Feri"> | Date | string
    createdAt?: DateTimeFilter<"Feri"> | Date | string
    trigger?: XOR<TriggerNullableScalarRelationFilter, TriggerWhereInput> | null
    action?: ActionListRelationFilter
    FeriRuns?: FeriRunListRelationFilter
  }

  export type FeriOrderByWithRelationInput = {
    id?: SortOrder
    triggerId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    trigger?: TriggerOrderByWithRelationInput
    action?: ActionOrderByRelationAggregateInput
    FeriRuns?: FeriRunOrderByRelationAggregateInput
  }

  export type FeriWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeriWhereInput | FeriWhereInput[]
    OR?: FeriWhereInput[]
    NOT?: FeriWhereInput | FeriWhereInput[]
    triggerId?: StringFilter<"Feri"> | string
    updatedAt?: DateTimeFilter<"Feri"> | Date | string
    createdAt?: DateTimeFilter<"Feri"> | Date | string
    trigger?: XOR<TriggerNullableScalarRelationFilter, TriggerWhereInput> | null
    action?: ActionListRelationFilter
    FeriRuns?: FeriRunListRelationFilter
  }, "id">

  export type FeriOrderByWithAggregationInput = {
    id?: SortOrder
    triggerId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: FeriCountOrderByAggregateInput
    _max?: FeriMaxOrderByAggregateInput
    _min?: FeriMinOrderByAggregateInput
  }

  export type FeriScalarWhereWithAggregatesInput = {
    AND?: FeriScalarWhereWithAggregatesInput | FeriScalarWhereWithAggregatesInput[]
    OR?: FeriScalarWhereWithAggregatesInput[]
    NOT?: FeriScalarWhereWithAggregatesInput | FeriScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Feri"> | string
    triggerId?: StringWithAggregatesFilter<"Feri"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Feri"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Feri"> | Date | string
  }

  export type FeriRunWhereInput = {
    AND?: FeriRunWhereInput | FeriRunWhereInput[]
    OR?: FeriRunWhereInput[]
    NOT?: FeriRunWhereInput | FeriRunWhereInput[]
    id?: StringFilter<"FeriRun"> | string
    feriId?: StringFilter<"FeriRun"> | string
    status?: StringFilter<"FeriRun"> | string
    metadata?: JsonFilter<"FeriRun">
    updatedAt?: DateTimeNullableListFilter<"FeriRun">
    createdAt?: DateTimeFilter<"FeriRun"> | Date | string
    feri?: XOR<FeriNullableScalarRelationFilter, FeriWhereInput> | null
    feriOutbox?: FeriOutboxListRelationFilter
  }

  export type FeriRunOrderByWithRelationInput = {
    id?: SortOrder
    feriId?: SortOrder
    status?: SortOrder
    metadata?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    feri?: FeriOrderByWithRelationInput
    feriOutbox?: FeriOutboxOrderByRelationAggregateInput
  }

  export type FeriRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeriRunWhereInput | FeriRunWhereInput[]
    OR?: FeriRunWhereInput[]
    NOT?: FeriRunWhereInput | FeriRunWhereInput[]
    feriId?: StringFilter<"FeriRun"> | string
    status?: StringFilter<"FeriRun"> | string
    metadata?: JsonFilter<"FeriRun">
    updatedAt?: DateTimeNullableListFilter<"FeriRun">
    createdAt?: DateTimeFilter<"FeriRun"> | Date | string
    feri?: XOR<FeriNullableScalarRelationFilter, FeriWhereInput> | null
    feriOutbox?: FeriOutboxListRelationFilter
  }, "id">

  export type FeriRunOrderByWithAggregationInput = {
    id?: SortOrder
    feriId?: SortOrder
    status?: SortOrder
    metadata?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: FeriRunCountOrderByAggregateInput
    _max?: FeriRunMaxOrderByAggregateInput
    _min?: FeriRunMinOrderByAggregateInput
  }

  export type FeriRunScalarWhereWithAggregatesInput = {
    AND?: FeriRunScalarWhereWithAggregatesInput | FeriRunScalarWhereWithAggregatesInput[]
    OR?: FeriRunScalarWhereWithAggregatesInput[]
    NOT?: FeriRunScalarWhereWithAggregatesInput | FeriRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FeriRun"> | string
    feriId?: StringWithAggregatesFilter<"FeriRun"> | string
    status?: StringWithAggregatesFilter<"FeriRun"> | string
    metadata?: JsonWithAggregatesFilter<"FeriRun">
    updatedAt?: DateTimeNullableListFilter<"FeriRun">
    createdAt?: DateTimeWithAggregatesFilter<"FeriRun"> | Date | string
  }

  export type FeriOutboxWhereInput = {
    AND?: FeriOutboxWhereInput | FeriOutboxWhereInput[]
    OR?: FeriOutboxWhereInput[]
    NOT?: FeriOutboxWhereInput | FeriOutboxWhereInput[]
    id?: StringFilter<"FeriOutbox"> | string
    metadata?: JsonFilter<"FeriOutbox">
    feriRunId?: StringFilter<"FeriOutbox"> | string
    status?: StringFilter<"FeriOutbox"> | string
    updatedAt?: DateTimeFilter<"FeriOutbox"> | Date | string
    createdAt?: DateTimeFilter<"FeriOutbox"> | Date | string
    FeriRun?: XOR<FeriRunScalarRelationFilter, FeriRunWhereInput>
  }

  export type FeriOutboxOrderByWithRelationInput = {
    id?: SortOrder
    metadata?: SortOrder
    feriRunId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    FeriRun?: FeriRunOrderByWithRelationInput
  }

  export type FeriOutboxWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeriOutboxWhereInput | FeriOutboxWhereInput[]
    OR?: FeriOutboxWhereInput[]
    NOT?: FeriOutboxWhereInput | FeriOutboxWhereInput[]
    metadata?: JsonFilter<"FeriOutbox">
    feriRunId?: StringFilter<"FeriOutbox"> | string
    status?: StringFilter<"FeriOutbox"> | string
    updatedAt?: DateTimeFilter<"FeriOutbox"> | Date | string
    createdAt?: DateTimeFilter<"FeriOutbox"> | Date | string
    FeriRun?: XOR<FeriRunScalarRelationFilter, FeriRunWhereInput>
  }, "id">

  export type FeriOutboxOrderByWithAggregationInput = {
    id?: SortOrder
    metadata?: SortOrder
    feriRunId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: FeriOutboxCountOrderByAggregateInput
    _max?: FeriOutboxMaxOrderByAggregateInput
    _min?: FeriOutboxMinOrderByAggregateInput
  }

  export type FeriOutboxScalarWhereWithAggregatesInput = {
    AND?: FeriOutboxScalarWhereWithAggregatesInput | FeriOutboxScalarWhereWithAggregatesInput[]
    OR?: FeriOutboxScalarWhereWithAggregatesInput[]
    NOT?: FeriOutboxScalarWhereWithAggregatesInput | FeriOutboxScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FeriOutbox"> | string
    metadata?: JsonWithAggregatesFilter<"FeriOutbox">
    feriRunId?: StringWithAggregatesFilter<"FeriOutbox"> | string
    status?: StringWithAggregatesFilter<"FeriOutbox"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"FeriOutbox"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"FeriOutbox"> | Date | string
  }

  export type TriggerWhereInput = {
    AND?: TriggerWhereInput | TriggerWhereInput[]
    OR?: TriggerWhereInput[]
    NOT?: TriggerWhereInput | TriggerWhereInput[]
    id?: StringFilter<"Trigger"> | string
    triggerId?: StringFilter<"Trigger"> | string
    feriId?: StringFilter<"Trigger"> | string
    updatedAt?: DateTimeFilter<"Trigger"> | Date | string
    createdAt?: DateTimeFilter<"Trigger"> | Date | string
    type?: XOR<AvailableTriggerScalarRelationFilter, AvailableTriggerWhereInput>
    feri?: XOR<FeriScalarRelationFilter, FeriWhereInput>
  }

  export type TriggerOrderByWithRelationInput = {
    id?: SortOrder
    triggerId?: SortOrder
    feriId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    type?: AvailableTriggerOrderByWithRelationInput
    feri?: FeriOrderByWithRelationInput
  }

  export type TriggerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    feriId?: string
    AND?: TriggerWhereInput | TriggerWhereInput[]
    OR?: TriggerWhereInput[]
    NOT?: TriggerWhereInput | TriggerWhereInput[]
    triggerId?: StringFilter<"Trigger"> | string
    updatedAt?: DateTimeFilter<"Trigger"> | Date | string
    createdAt?: DateTimeFilter<"Trigger"> | Date | string
    type?: XOR<AvailableTriggerScalarRelationFilter, AvailableTriggerWhereInput>
    feri?: XOR<FeriScalarRelationFilter, FeriWhereInput>
  }, "id" | "feriId">

  export type TriggerOrderByWithAggregationInput = {
    id?: SortOrder
    triggerId?: SortOrder
    feriId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: TriggerCountOrderByAggregateInput
    _max?: TriggerMaxOrderByAggregateInput
    _min?: TriggerMinOrderByAggregateInput
  }

  export type TriggerScalarWhereWithAggregatesInput = {
    AND?: TriggerScalarWhereWithAggregatesInput | TriggerScalarWhereWithAggregatesInput[]
    OR?: TriggerScalarWhereWithAggregatesInput[]
    NOT?: TriggerScalarWhereWithAggregatesInput | TriggerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trigger"> | string
    triggerId?: StringWithAggregatesFilter<"Trigger"> | string
    feriId?: StringWithAggregatesFilter<"Trigger"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Trigger"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Trigger"> | Date | string
  }

  export type ActionWhereInput = {
    AND?: ActionWhereInput | ActionWhereInput[]
    OR?: ActionWhereInput[]
    NOT?: ActionWhereInput | ActionWhereInput[]
    id?: StringFilter<"Action"> | string
    actionId?: StringFilter<"Action"> | string
    feriId?: StringFilter<"Action"> | string
    updatedAt?: DateTimeFilter<"Action"> | Date | string
    createdAt?: DateTimeFilter<"Action"> | Date | string
    type?: XOR<AvailableActionsScalarRelationFilter, AvailableActionsWhereInput>
    feri?: XOR<FeriScalarRelationFilter, FeriWhereInput>
  }

  export type ActionOrderByWithRelationInput = {
    id?: SortOrder
    actionId?: SortOrder
    feriId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    type?: AvailableActionsOrderByWithRelationInput
    feri?: FeriOrderByWithRelationInput
  }

  export type ActionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActionWhereInput | ActionWhereInput[]
    OR?: ActionWhereInput[]
    NOT?: ActionWhereInput | ActionWhereInput[]
    actionId?: StringFilter<"Action"> | string
    feriId?: StringFilter<"Action"> | string
    updatedAt?: DateTimeFilter<"Action"> | Date | string
    createdAt?: DateTimeFilter<"Action"> | Date | string
    type?: XOR<AvailableActionsScalarRelationFilter, AvailableActionsWhereInput>
    feri?: XOR<FeriScalarRelationFilter, FeriWhereInput>
  }, "id">

  export type ActionOrderByWithAggregationInput = {
    id?: SortOrder
    actionId?: SortOrder
    feriId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: ActionCountOrderByAggregateInput
    _max?: ActionMaxOrderByAggregateInput
    _min?: ActionMinOrderByAggregateInput
  }

  export type ActionScalarWhereWithAggregatesInput = {
    AND?: ActionScalarWhereWithAggregatesInput | ActionScalarWhereWithAggregatesInput[]
    OR?: ActionScalarWhereWithAggregatesInput[]
    NOT?: ActionScalarWhereWithAggregatesInput | ActionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Action"> | string
    actionId?: StringWithAggregatesFilter<"Action"> | string
    feriId?: StringWithAggregatesFilter<"Action"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Action"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Action"> | Date | string
  }

  export type AvailableActionsWhereInput = {
    AND?: AvailableActionsWhereInput | AvailableActionsWhereInput[]
    OR?: AvailableActionsWhereInput[]
    NOT?: AvailableActionsWhereInput | AvailableActionsWhereInput[]
    id?: StringFilter<"AvailableActions"> | string
    name?: StringFilter<"AvailableActions"> | string
    Action?: ActionListRelationFilter
  }

  export type AvailableActionsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Action?: ActionOrderByRelationAggregateInput
  }

  export type AvailableActionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvailableActionsWhereInput | AvailableActionsWhereInput[]
    OR?: AvailableActionsWhereInput[]
    NOT?: AvailableActionsWhereInput | AvailableActionsWhereInput[]
    name?: StringFilter<"AvailableActions"> | string
    Action?: ActionListRelationFilter
  }, "id">

  export type AvailableActionsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: AvailableActionsCountOrderByAggregateInput
    _max?: AvailableActionsMaxOrderByAggregateInput
    _min?: AvailableActionsMinOrderByAggregateInput
  }

  export type AvailableActionsScalarWhereWithAggregatesInput = {
    AND?: AvailableActionsScalarWhereWithAggregatesInput | AvailableActionsScalarWhereWithAggregatesInput[]
    OR?: AvailableActionsScalarWhereWithAggregatesInput[]
    NOT?: AvailableActionsScalarWhereWithAggregatesInput | AvailableActionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AvailableActions"> | string
    name?: StringWithAggregatesFilter<"AvailableActions"> | string
  }

  export type AvailableTriggerWhereInput = {
    AND?: AvailableTriggerWhereInput | AvailableTriggerWhereInput[]
    OR?: AvailableTriggerWhereInput[]
    NOT?: AvailableTriggerWhereInput | AvailableTriggerWhereInput[]
    id?: StringFilter<"AvailableTrigger"> | string
    name?: StringFilter<"AvailableTrigger"> | string
    Trigger?: TriggerListRelationFilter
  }

  export type AvailableTriggerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Trigger?: TriggerOrderByRelationAggregateInput
  }

  export type AvailableTriggerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvailableTriggerWhereInput | AvailableTriggerWhereInput[]
    OR?: AvailableTriggerWhereInput[]
    NOT?: AvailableTriggerWhereInput | AvailableTriggerWhereInput[]
    name?: StringFilter<"AvailableTrigger"> | string
    Trigger?: TriggerListRelationFilter
  }, "id">

  export type AvailableTriggerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: AvailableTriggerCountOrderByAggregateInput
    _max?: AvailableTriggerMaxOrderByAggregateInput
    _min?: AvailableTriggerMinOrderByAggregateInput
  }

  export type AvailableTriggerScalarWhereWithAggregatesInput = {
    AND?: AvailableTriggerScalarWhereWithAggregatesInput | AvailableTriggerScalarWhereWithAggregatesInput[]
    OR?: AvailableTriggerScalarWhereWithAggregatesInput[]
    NOT?: AvailableTriggerScalarWhereWithAggregatesInput | AvailableTriggerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AvailableTrigger"> | string
    name?: StringWithAggregatesFilter<"AvailableTrigger"> | string
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    password: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeriCreateInput = {
    id?: string
    triggerId: string
    updatedAt?: Date | string
    createdAt?: Date | string
    trigger?: TriggerCreateNestedOneWithoutFeriInput
    action?: ActionCreateNestedManyWithoutFeriInput
    FeriRuns?: FeriRunCreateNestedManyWithoutFeriInput
  }

  export type FeriUncheckedCreateInput = {
    id?: string
    triggerId: string
    updatedAt?: Date | string
    createdAt?: Date | string
    trigger?: TriggerUncheckedCreateNestedOneWithoutFeriInput
    action?: ActionUncheckedCreateNestedManyWithoutFeriInput
    FeriRuns?: FeriRunUncheckedCreateNestedManyWithoutFeriInput
  }

  export type FeriUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trigger?: TriggerUpdateOneWithoutFeriNestedInput
    action?: ActionUpdateManyWithoutFeriNestedInput
    FeriRuns?: FeriRunUpdateManyWithoutFeriNestedInput
  }

  export type FeriUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trigger?: TriggerUncheckedUpdateOneWithoutFeriNestedInput
    action?: ActionUncheckedUpdateManyWithoutFeriNestedInput
    FeriRuns?: FeriRunUncheckedUpdateManyWithoutFeriNestedInput
  }

  export type FeriCreateManyInput = {
    id?: string
    triggerId: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type FeriUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeriUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeriRunCreateInput = {
    id?: string
    status: string
    metadata: JsonNullValueInput | InputJsonValue
    updatedAt?: FeriRunCreateupdatedAtInput | Date[] | string[]
    createdAt?: Date | string
    feri?: FeriCreateNestedOneWithoutFeriRunsInput
    feriOutbox?: FeriOutboxCreateNestedManyWithoutFeriRunInput
  }

  export type FeriRunUncheckedCreateInput = {
    id?: string
    feriId: string
    status: string
    metadata: JsonNullValueInput | InputJsonValue
    updatedAt?: FeriRunCreateupdatedAtInput | Date[] | string[]
    createdAt?: Date | string
    feriOutbox?: FeriOutboxUncheckedCreateNestedManyWithoutFeriRunInput
  }

  export type FeriRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    updatedAt?: FeriRunUpdateupdatedAtInput | Date[] | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feri?: FeriUpdateOneWithoutFeriRunsNestedInput
    feriOutbox?: FeriOutboxUpdateManyWithoutFeriRunNestedInput
  }

  export type FeriRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    feriId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    updatedAt?: FeriRunUpdateupdatedAtInput | Date[] | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feriOutbox?: FeriOutboxUncheckedUpdateManyWithoutFeriRunNestedInput
  }

  export type FeriRunCreateManyInput = {
    id?: string
    feriId: string
    status: string
    metadata: JsonNullValueInput | InputJsonValue
    updatedAt?: FeriRunCreateupdatedAtInput | Date[] | string[]
    createdAt?: Date | string
  }

  export type FeriRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    updatedAt?: FeriRunUpdateupdatedAtInput | Date[] | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeriRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    feriId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    updatedAt?: FeriRunUpdateupdatedAtInput | Date[] | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeriOutboxCreateInput = {
    id?: string
    metadata: JsonNullValueInput | InputJsonValue
    status: string
    updatedAt?: Date | string
    createdAt?: Date | string
    FeriRun: FeriRunCreateNestedOneWithoutFeriOutboxInput
  }

  export type FeriOutboxUncheckedCreateInput = {
    id?: string
    metadata: JsonNullValueInput | InputJsonValue
    feriRunId: string
    status: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type FeriOutboxUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FeriRun?: FeriRunUpdateOneRequiredWithoutFeriOutboxNestedInput
  }

  export type FeriOutboxUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    feriRunId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeriOutboxCreateManyInput = {
    id?: string
    metadata: JsonNullValueInput | InputJsonValue
    feriRunId: string
    status: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type FeriOutboxUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeriOutboxUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    feriRunId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriggerCreateInput = {
    id?: string
    updatedAt?: Date | string
    createdAt?: Date | string
    type: AvailableTriggerCreateNestedOneWithoutTriggerInput
    feri: FeriCreateNestedOneWithoutTriggerInput
  }

  export type TriggerUncheckedCreateInput = {
    id?: string
    triggerId: string
    feriId: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type TriggerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: AvailableTriggerUpdateOneRequiredWithoutTriggerNestedInput
    feri?: FeriUpdateOneRequiredWithoutTriggerNestedInput
  }

  export type TriggerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    feriId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriggerCreateManyInput = {
    id?: string
    triggerId: string
    feriId: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type TriggerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriggerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    feriId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActionCreateInput = {
    id?: string
    updatedAt?: Date | string
    createdAt?: Date | string
    type: AvailableActionsCreateNestedOneWithoutActionInput
    feri: FeriCreateNestedOneWithoutActionInput
  }

  export type ActionUncheckedCreateInput = {
    id?: string
    actionId: string
    feriId: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ActionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: AvailableActionsUpdateOneRequiredWithoutActionNestedInput
    feri?: FeriUpdateOneRequiredWithoutActionNestedInput
  }

  export type ActionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
    feriId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActionCreateManyInput = {
    id?: string
    actionId: string
    feriId: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ActionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
    feriId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailableActionsCreateInput = {
    id?: string
    name: string
    Action?: ActionCreateNestedManyWithoutTypeInput
  }

  export type AvailableActionsUncheckedCreateInput = {
    id?: string
    name: string
    Action?: ActionUncheckedCreateNestedManyWithoutTypeInput
  }

  export type AvailableActionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Action?: ActionUpdateManyWithoutTypeNestedInput
  }

  export type AvailableActionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Action?: ActionUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type AvailableActionsCreateManyInput = {
    id?: string
    name: string
  }

  export type AvailableActionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableActionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableTriggerCreateInput = {
    id?: string
    name: string
    Trigger?: TriggerCreateNestedManyWithoutTypeInput
  }

  export type AvailableTriggerUncheckedCreateInput = {
    id?: string
    name: string
    Trigger?: TriggerUncheckedCreateNestedManyWithoutTypeInput
  }

  export type AvailableTriggerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Trigger?: TriggerUpdateManyWithoutTypeNestedInput
  }

  export type AvailableTriggerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Trigger?: TriggerUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type AvailableTriggerCreateManyInput = {
    id?: string
    name: string
  }

  export type AvailableTriggerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableTriggerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TriggerNullableScalarRelationFilter = {
    is?: TriggerWhereInput | null
    isNot?: TriggerWhereInput | null
  }

  export type ActionListRelationFilter = {
    every?: ActionWhereInput
    some?: ActionWhereInput
    none?: ActionWhereInput
  }

  export type FeriRunListRelationFilter = {
    every?: FeriRunWhereInput
    some?: FeriRunWhereInput
    none?: FeriRunWhereInput
  }

  export type ActionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeriRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeriCountOrderByAggregateInput = {
    id?: SortOrder
    triggerId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type FeriMaxOrderByAggregateInput = {
    id?: SortOrder
    triggerId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type FeriMinOrderByAggregateInput = {
    id?: SortOrder
    triggerId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeNullableListFilter<$PrismaModel = never> = {
    equals?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    has?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    hasEvery?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    hasSome?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FeriNullableScalarRelationFilter = {
    is?: FeriWhereInput | null
    isNot?: FeriWhereInput | null
  }

  export type FeriOutboxListRelationFilter = {
    every?: FeriOutboxWhereInput
    some?: FeriOutboxWhereInput
    none?: FeriOutboxWhereInput
  }

  export type FeriOutboxOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeriRunCountOrderByAggregateInput = {
    id?: SortOrder
    feriId?: SortOrder
    status?: SortOrder
    metadata?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type FeriRunMaxOrderByAggregateInput = {
    id?: SortOrder
    feriId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type FeriRunMinOrderByAggregateInput = {
    id?: SortOrder
    feriId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type FeriRunScalarRelationFilter = {
    is?: FeriRunWhereInput
    isNot?: FeriRunWhereInput
  }

  export type FeriOutboxCountOrderByAggregateInput = {
    id?: SortOrder
    metadata?: SortOrder
    feriRunId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type FeriOutboxMaxOrderByAggregateInput = {
    id?: SortOrder
    feriRunId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type FeriOutboxMinOrderByAggregateInput = {
    id?: SortOrder
    feriRunId?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AvailableTriggerScalarRelationFilter = {
    is?: AvailableTriggerWhereInput
    isNot?: AvailableTriggerWhereInput
  }

  export type FeriScalarRelationFilter = {
    is?: FeriWhereInput
    isNot?: FeriWhereInput
  }

  export type TriggerCountOrderByAggregateInput = {
    id?: SortOrder
    triggerId?: SortOrder
    feriId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TriggerMaxOrderByAggregateInput = {
    id?: SortOrder
    triggerId?: SortOrder
    feriId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TriggerMinOrderByAggregateInput = {
    id?: SortOrder
    triggerId?: SortOrder
    feriId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AvailableActionsScalarRelationFilter = {
    is?: AvailableActionsWhereInput
    isNot?: AvailableActionsWhereInput
  }

  export type ActionCountOrderByAggregateInput = {
    id?: SortOrder
    actionId?: SortOrder
    feriId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ActionMaxOrderByAggregateInput = {
    id?: SortOrder
    actionId?: SortOrder
    feriId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ActionMinOrderByAggregateInput = {
    id?: SortOrder
    actionId?: SortOrder
    feriId?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AvailableActionsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableActionsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableActionsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TriggerListRelationFilter = {
    every?: TriggerWhereInput
    some?: TriggerWhereInput
    none?: TriggerWhereInput
  }

  export type TriggerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvailableTriggerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableTriggerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AvailableTriggerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TriggerCreateNestedOneWithoutFeriInput = {
    create?: XOR<TriggerCreateWithoutFeriInput, TriggerUncheckedCreateWithoutFeriInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutFeriInput
    connect?: TriggerWhereUniqueInput
  }

  export type ActionCreateNestedManyWithoutFeriInput = {
    create?: XOR<ActionCreateWithoutFeriInput, ActionUncheckedCreateWithoutFeriInput> | ActionCreateWithoutFeriInput[] | ActionUncheckedCreateWithoutFeriInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutFeriInput | ActionCreateOrConnectWithoutFeriInput[]
    createMany?: ActionCreateManyFeriInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type FeriRunCreateNestedManyWithoutFeriInput = {
    create?: XOR<FeriRunCreateWithoutFeriInput, FeriRunUncheckedCreateWithoutFeriInput> | FeriRunCreateWithoutFeriInput[] | FeriRunUncheckedCreateWithoutFeriInput[]
    connectOrCreate?: FeriRunCreateOrConnectWithoutFeriInput | FeriRunCreateOrConnectWithoutFeriInput[]
    createMany?: FeriRunCreateManyFeriInputEnvelope
    connect?: FeriRunWhereUniqueInput | FeriRunWhereUniqueInput[]
  }

  export type TriggerUncheckedCreateNestedOneWithoutFeriInput = {
    create?: XOR<TriggerCreateWithoutFeriInput, TriggerUncheckedCreateWithoutFeriInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutFeriInput
    connect?: TriggerWhereUniqueInput
  }

  export type ActionUncheckedCreateNestedManyWithoutFeriInput = {
    create?: XOR<ActionCreateWithoutFeriInput, ActionUncheckedCreateWithoutFeriInput> | ActionCreateWithoutFeriInput[] | ActionUncheckedCreateWithoutFeriInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutFeriInput | ActionCreateOrConnectWithoutFeriInput[]
    createMany?: ActionCreateManyFeriInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type FeriRunUncheckedCreateNestedManyWithoutFeriInput = {
    create?: XOR<FeriRunCreateWithoutFeriInput, FeriRunUncheckedCreateWithoutFeriInput> | FeriRunCreateWithoutFeriInput[] | FeriRunUncheckedCreateWithoutFeriInput[]
    connectOrCreate?: FeriRunCreateOrConnectWithoutFeriInput | FeriRunCreateOrConnectWithoutFeriInput[]
    createMany?: FeriRunCreateManyFeriInputEnvelope
    connect?: FeriRunWhereUniqueInput | FeriRunWhereUniqueInput[]
  }

  export type TriggerUpdateOneWithoutFeriNestedInput = {
    create?: XOR<TriggerCreateWithoutFeriInput, TriggerUncheckedCreateWithoutFeriInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutFeriInput
    upsert?: TriggerUpsertWithoutFeriInput
    disconnect?: TriggerWhereInput | boolean
    delete?: TriggerWhereInput | boolean
    connect?: TriggerWhereUniqueInput
    update?: XOR<XOR<TriggerUpdateToOneWithWhereWithoutFeriInput, TriggerUpdateWithoutFeriInput>, TriggerUncheckedUpdateWithoutFeriInput>
  }

  export type ActionUpdateManyWithoutFeriNestedInput = {
    create?: XOR<ActionCreateWithoutFeriInput, ActionUncheckedCreateWithoutFeriInput> | ActionCreateWithoutFeriInput[] | ActionUncheckedCreateWithoutFeriInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutFeriInput | ActionCreateOrConnectWithoutFeriInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutFeriInput | ActionUpsertWithWhereUniqueWithoutFeriInput[]
    createMany?: ActionCreateManyFeriInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutFeriInput | ActionUpdateWithWhereUniqueWithoutFeriInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutFeriInput | ActionUpdateManyWithWhereWithoutFeriInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type FeriRunUpdateManyWithoutFeriNestedInput = {
    create?: XOR<FeriRunCreateWithoutFeriInput, FeriRunUncheckedCreateWithoutFeriInput> | FeriRunCreateWithoutFeriInput[] | FeriRunUncheckedCreateWithoutFeriInput[]
    connectOrCreate?: FeriRunCreateOrConnectWithoutFeriInput | FeriRunCreateOrConnectWithoutFeriInput[]
    upsert?: FeriRunUpsertWithWhereUniqueWithoutFeriInput | FeriRunUpsertWithWhereUniqueWithoutFeriInput[]
    createMany?: FeriRunCreateManyFeriInputEnvelope
    set?: FeriRunWhereUniqueInput | FeriRunWhereUniqueInput[]
    disconnect?: FeriRunWhereUniqueInput | FeriRunWhereUniqueInput[]
    delete?: FeriRunWhereUniqueInput | FeriRunWhereUniqueInput[]
    connect?: FeriRunWhereUniqueInput | FeriRunWhereUniqueInput[]
    update?: FeriRunUpdateWithWhereUniqueWithoutFeriInput | FeriRunUpdateWithWhereUniqueWithoutFeriInput[]
    updateMany?: FeriRunUpdateManyWithWhereWithoutFeriInput | FeriRunUpdateManyWithWhereWithoutFeriInput[]
    deleteMany?: FeriRunScalarWhereInput | FeriRunScalarWhereInput[]
  }

  export type TriggerUncheckedUpdateOneWithoutFeriNestedInput = {
    create?: XOR<TriggerCreateWithoutFeriInput, TriggerUncheckedCreateWithoutFeriInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutFeriInput
    upsert?: TriggerUpsertWithoutFeriInput
    disconnect?: TriggerWhereInput | boolean
    delete?: TriggerWhereInput | boolean
    connect?: TriggerWhereUniqueInput
    update?: XOR<XOR<TriggerUpdateToOneWithWhereWithoutFeriInput, TriggerUpdateWithoutFeriInput>, TriggerUncheckedUpdateWithoutFeriInput>
  }

  export type ActionUncheckedUpdateManyWithoutFeriNestedInput = {
    create?: XOR<ActionCreateWithoutFeriInput, ActionUncheckedCreateWithoutFeriInput> | ActionCreateWithoutFeriInput[] | ActionUncheckedCreateWithoutFeriInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutFeriInput | ActionCreateOrConnectWithoutFeriInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutFeriInput | ActionUpsertWithWhereUniqueWithoutFeriInput[]
    createMany?: ActionCreateManyFeriInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutFeriInput | ActionUpdateWithWhereUniqueWithoutFeriInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutFeriInput | ActionUpdateManyWithWhereWithoutFeriInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type FeriRunUncheckedUpdateManyWithoutFeriNestedInput = {
    create?: XOR<FeriRunCreateWithoutFeriInput, FeriRunUncheckedCreateWithoutFeriInput> | FeriRunCreateWithoutFeriInput[] | FeriRunUncheckedCreateWithoutFeriInput[]
    connectOrCreate?: FeriRunCreateOrConnectWithoutFeriInput | FeriRunCreateOrConnectWithoutFeriInput[]
    upsert?: FeriRunUpsertWithWhereUniqueWithoutFeriInput | FeriRunUpsertWithWhereUniqueWithoutFeriInput[]
    createMany?: FeriRunCreateManyFeriInputEnvelope
    set?: FeriRunWhereUniqueInput | FeriRunWhereUniqueInput[]
    disconnect?: FeriRunWhereUniqueInput | FeriRunWhereUniqueInput[]
    delete?: FeriRunWhereUniqueInput | FeriRunWhereUniqueInput[]
    connect?: FeriRunWhereUniqueInput | FeriRunWhereUniqueInput[]
    update?: FeriRunUpdateWithWhereUniqueWithoutFeriInput | FeriRunUpdateWithWhereUniqueWithoutFeriInput[]
    updateMany?: FeriRunUpdateManyWithWhereWithoutFeriInput | FeriRunUpdateManyWithWhereWithoutFeriInput[]
    deleteMany?: FeriRunScalarWhereInput | FeriRunScalarWhereInput[]
  }

  export type FeriRunCreateupdatedAtInput = {
    set: Date[] | string[]
  }

  export type FeriCreateNestedOneWithoutFeriRunsInput = {
    create?: XOR<FeriCreateWithoutFeriRunsInput, FeriUncheckedCreateWithoutFeriRunsInput>
    connectOrCreate?: FeriCreateOrConnectWithoutFeriRunsInput
    connect?: FeriWhereUniqueInput
  }

  export type FeriOutboxCreateNestedManyWithoutFeriRunInput = {
    create?: XOR<FeriOutboxCreateWithoutFeriRunInput, FeriOutboxUncheckedCreateWithoutFeriRunInput> | FeriOutboxCreateWithoutFeriRunInput[] | FeriOutboxUncheckedCreateWithoutFeriRunInput[]
    connectOrCreate?: FeriOutboxCreateOrConnectWithoutFeriRunInput | FeriOutboxCreateOrConnectWithoutFeriRunInput[]
    createMany?: FeriOutboxCreateManyFeriRunInputEnvelope
    connect?: FeriOutboxWhereUniqueInput | FeriOutboxWhereUniqueInput[]
  }

  export type FeriOutboxUncheckedCreateNestedManyWithoutFeriRunInput = {
    create?: XOR<FeriOutboxCreateWithoutFeriRunInput, FeriOutboxUncheckedCreateWithoutFeriRunInput> | FeriOutboxCreateWithoutFeriRunInput[] | FeriOutboxUncheckedCreateWithoutFeriRunInput[]
    connectOrCreate?: FeriOutboxCreateOrConnectWithoutFeriRunInput | FeriOutboxCreateOrConnectWithoutFeriRunInput[]
    createMany?: FeriOutboxCreateManyFeriRunInputEnvelope
    connect?: FeriOutboxWhereUniqueInput | FeriOutboxWhereUniqueInput[]
  }

  export type FeriRunUpdateupdatedAtInput = {
    set?: Date[] | string[]
    push?: Date | string | Date[] | string[]
  }

  export type FeriUpdateOneWithoutFeriRunsNestedInput = {
    create?: XOR<FeriCreateWithoutFeriRunsInput, FeriUncheckedCreateWithoutFeriRunsInput>
    connectOrCreate?: FeriCreateOrConnectWithoutFeriRunsInput
    upsert?: FeriUpsertWithoutFeriRunsInput
    disconnect?: FeriWhereInput | boolean
    delete?: FeriWhereInput | boolean
    connect?: FeriWhereUniqueInput
    update?: XOR<XOR<FeriUpdateToOneWithWhereWithoutFeriRunsInput, FeriUpdateWithoutFeriRunsInput>, FeriUncheckedUpdateWithoutFeriRunsInput>
  }

  export type FeriOutboxUpdateManyWithoutFeriRunNestedInput = {
    create?: XOR<FeriOutboxCreateWithoutFeriRunInput, FeriOutboxUncheckedCreateWithoutFeriRunInput> | FeriOutboxCreateWithoutFeriRunInput[] | FeriOutboxUncheckedCreateWithoutFeriRunInput[]
    connectOrCreate?: FeriOutboxCreateOrConnectWithoutFeriRunInput | FeriOutboxCreateOrConnectWithoutFeriRunInput[]
    upsert?: FeriOutboxUpsertWithWhereUniqueWithoutFeriRunInput | FeriOutboxUpsertWithWhereUniqueWithoutFeriRunInput[]
    createMany?: FeriOutboxCreateManyFeriRunInputEnvelope
    set?: FeriOutboxWhereUniqueInput | FeriOutboxWhereUniqueInput[]
    disconnect?: FeriOutboxWhereUniqueInput | FeriOutboxWhereUniqueInput[]
    delete?: FeriOutboxWhereUniqueInput | FeriOutboxWhereUniqueInput[]
    connect?: FeriOutboxWhereUniqueInput | FeriOutboxWhereUniqueInput[]
    update?: FeriOutboxUpdateWithWhereUniqueWithoutFeriRunInput | FeriOutboxUpdateWithWhereUniqueWithoutFeriRunInput[]
    updateMany?: FeriOutboxUpdateManyWithWhereWithoutFeriRunInput | FeriOutboxUpdateManyWithWhereWithoutFeriRunInput[]
    deleteMany?: FeriOutboxScalarWhereInput | FeriOutboxScalarWhereInput[]
  }

  export type FeriOutboxUncheckedUpdateManyWithoutFeriRunNestedInput = {
    create?: XOR<FeriOutboxCreateWithoutFeriRunInput, FeriOutboxUncheckedCreateWithoutFeriRunInput> | FeriOutboxCreateWithoutFeriRunInput[] | FeriOutboxUncheckedCreateWithoutFeriRunInput[]
    connectOrCreate?: FeriOutboxCreateOrConnectWithoutFeriRunInput | FeriOutboxCreateOrConnectWithoutFeriRunInput[]
    upsert?: FeriOutboxUpsertWithWhereUniqueWithoutFeriRunInput | FeriOutboxUpsertWithWhereUniqueWithoutFeriRunInput[]
    createMany?: FeriOutboxCreateManyFeriRunInputEnvelope
    set?: FeriOutboxWhereUniqueInput | FeriOutboxWhereUniqueInput[]
    disconnect?: FeriOutboxWhereUniqueInput | FeriOutboxWhereUniqueInput[]
    delete?: FeriOutboxWhereUniqueInput | FeriOutboxWhereUniqueInput[]
    connect?: FeriOutboxWhereUniqueInput | FeriOutboxWhereUniqueInput[]
    update?: FeriOutboxUpdateWithWhereUniqueWithoutFeriRunInput | FeriOutboxUpdateWithWhereUniqueWithoutFeriRunInput[]
    updateMany?: FeriOutboxUpdateManyWithWhereWithoutFeriRunInput | FeriOutboxUpdateManyWithWhereWithoutFeriRunInput[]
    deleteMany?: FeriOutboxScalarWhereInput | FeriOutboxScalarWhereInput[]
  }

  export type FeriRunCreateNestedOneWithoutFeriOutboxInput = {
    create?: XOR<FeriRunCreateWithoutFeriOutboxInput, FeriRunUncheckedCreateWithoutFeriOutboxInput>
    connectOrCreate?: FeriRunCreateOrConnectWithoutFeriOutboxInput
    connect?: FeriRunWhereUniqueInput
  }

  export type FeriRunUpdateOneRequiredWithoutFeriOutboxNestedInput = {
    create?: XOR<FeriRunCreateWithoutFeriOutboxInput, FeriRunUncheckedCreateWithoutFeriOutboxInput>
    connectOrCreate?: FeriRunCreateOrConnectWithoutFeriOutboxInput
    upsert?: FeriRunUpsertWithoutFeriOutboxInput
    connect?: FeriRunWhereUniqueInput
    update?: XOR<XOR<FeriRunUpdateToOneWithWhereWithoutFeriOutboxInput, FeriRunUpdateWithoutFeriOutboxInput>, FeriRunUncheckedUpdateWithoutFeriOutboxInput>
  }

  export type AvailableTriggerCreateNestedOneWithoutTriggerInput = {
    create?: XOR<AvailableTriggerCreateWithoutTriggerInput, AvailableTriggerUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: AvailableTriggerCreateOrConnectWithoutTriggerInput
    connect?: AvailableTriggerWhereUniqueInput
  }

  export type FeriCreateNestedOneWithoutTriggerInput = {
    create?: XOR<FeriCreateWithoutTriggerInput, FeriUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: FeriCreateOrConnectWithoutTriggerInput
    connect?: FeriWhereUniqueInput
  }

  export type AvailableTriggerUpdateOneRequiredWithoutTriggerNestedInput = {
    create?: XOR<AvailableTriggerCreateWithoutTriggerInput, AvailableTriggerUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: AvailableTriggerCreateOrConnectWithoutTriggerInput
    upsert?: AvailableTriggerUpsertWithoutTriggerInput
    connect?: AvailableTriggerWhereUniqueInput
    update?: XOR<XOR<AvailableTriggerUpdateToOneWithWhereWithoutTriggerInput, AvailableTriggerUpdateWithoutTriggerInput>, AvailableTriggerUncheckedUpdateWithoutTriggerInput>
  }

  export type FeriUpdateOneRequiredWithoutTriggerNestedInput = {
    create?: XOR<FeriCreateWithoutTriggerInput, FeriUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: FeriCreateOrConnectWithoutTriggerInput
    upsert?: FeriUpsertWithoutTriggerInput
    connect?: FeriWhereUniqueInput
    update?: XOR<XOR<FeriUpdateToOneWithWhereWithoutTriggerInput, FeriUpdateWithoutTriggerInput>, FeriUncheckedUpdateWithoutTriggerInput>
  }

  export type AvailableActionsCreateNestedOneWithoutActionInput = {
    create?: XOR<AvailableActionsCreateWithoutActionInput, AvailableActionsUncheckedCreateWithoutActionInput>
    connectOrCreate?: AvailableActionsCreateOrConnectWithoutActionInput
    connect?: AvailableActionsWhereUniqueInput
  }

  export type FeriCreateNestedOneWithoutActionInput = {
    create?: XOR<FeriCreateWithoutActionInput, FeriUncheckedCreateWithoutActionInput>
    connectOrCreate?: FeriCreateOrConnectWithoutActionInput
    connect?: FeriWhereUniqueInput
  }

  export type AvailableActionsUpdateOneRequiredWithoutActionNestedInput = {
    create?: XOR<AvailableActionsCreateWithoutActionInput, AvailableActionsUncheckedCreateWithoutActionInput>
    connectOrCreate?: AvailableActionsCreateOrConnectWithoutActionInput
    upsert?: AvailableActionsUpsertWithoutActionInput
    connect?: AvailableActionsWhereUniqueInput
    update?: XOR<XOR<AvailableActionsUpdateToOneWithWhereWithoutActionInput, AvailableActionsUpdateWithoutActionInput>, AvailableActionsUncheckedUpdateWithoutActionInput>
  }

  export type FeriUpdateOneRequiredWithoutActionNestedInput = {
    create?: XOR<FeriCreateWithoutActionInput, FeriUncheckedCreateWithoutActionInput>
    connectOrCreate?: FeriCreateOrConnectWithoutActionInput
    upsert?: FeriUpsertWithoutActionInput
    connect?: FeriWhereUniqueInput
    update?: XOR<XOR<FeriUpdateToOneWithWhereWithoutActionInput, FeriUpdateWithoutActionInput>, FeriUncheckedUpdateWithoutActionInput>
  }

  export type ActionCreateNestedManyWithoutTypeInput = {
    create?: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput> | ActionCreateWithoutTypeInput[] | ActionUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutTypeInput | ActionCreateOrConnectWithoutTypeInput[]
    createMany?: ActionCreateManyTypeInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type ActionUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput> | ActionCreateWithoutTypeInput[] | ActionUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutTypeInput | ActionCreateOrConnectWithoutTypeInput[]
    createMany?: ActionCreateManyTypeInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type ActionUpdateManyWithoutTypeNestedInput = {
    create?: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput> | ActionCreateWithoutTypeInput[] | ActionUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutTypeInput | ActionCreateOrConnectWithoutTypeInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutTypeInput | ActionUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: ActionCreateManyTypeInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutTypeInput | ActionUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutTypeInput | ActionUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type ActionUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput> | ActionCreateWithoutTypeInput[] | ActionUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutTypeInput | ActionCreateOrConnectWithoutTypeInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutTypeInput | ActionUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: ActionCreateManyTypeInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutTypeInput | ActionUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutTypeInput | ActionUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type TriggerCreateNestedManyWithoutTypeInput = {
    create?: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput> | TriggerCreateWithoutTypeInput[] | TriggerUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutTypeInput | TriggerCreateOrConnectWithoutTypeInput[]
    createMany?: TriggerCreateManyTypeInputEnvelope
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
  }

  export type TriggerUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput> | TriggerCreateWithoutTypeInput[] | TriggerUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutTypeInput | TriggerCreateOrConnectWithoutTypeInput[]
    createMany?: TriggerCreateManyTypeInputEnvelope
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
  }

  export type TriggerUpdateManyWithoutTypeNestedInput = {
    create?: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput> | TriggerCreateWithoutTypeInput[] | TriggerUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutTypeInput | TriggerCreateOrConnectWithoutTypeInput[]
    upsert?: TriggerUpsertWithWhereUniqueWithoutTypeInput | TriggerUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: TriggerCreateManyTypeInputEnvelope
    set?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    disconnect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    delete?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    update?: TriggerUpdateWithWhereUniqueWithoutTypeInput | TriggerUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: TriggerUpdateManyWithWhereWithoutTypeInput | TriggerUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
  }

  export type TriggerUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput> | TriggerCreateWithoutTypeInput[] | TriggerUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutTypeInput | TriggerCreateOrConnectWithoutTypeInput[]
    upsert?: TriggerUpsertWithWhereUniqueWithoutTypeInput | TriggerUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: TriggerCreateManyTypeInputEnvelope
    set?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    disconnect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    delete?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    update?: TriggerUpdateWithWhereUniqueWithoutTypeInput | TriggerUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: TriggerUpdateManyWithWhereWithoutTypeInput | TriggerUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TriggerCreateWithoutFeriInput = {
    id?: string
    updatedAt?: Date | string
    createdAt?: Date | string
    type: AvailableTriggerCreateNestedOneWithoutTriggerInput
  }

  export type TriggerUncheckedCreateWithoutFeriInput = {
    id?: string
    triggerId: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type TriggerCreateOrConnectWithoutFeriInput = {
    where: TriggerWhereUniqueInput
    create: XOR<TriggerCreateWithoutFeriInput, TriggerUncheckedCreateWithoutFeriInput>
  }

  export type ActionCreateWithoutFeriInput = {
    id?: string
    updatedAt?: Date | string
    createdAt?: Date | string
    type: AvailableActionsCreateNestedOneWithoutActionInput
  }

  export type ActionUncheckedCreateWithoutFeriInput = {
    id?: string
    actionId: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ActionCreateOrConnectWithoutFeriInput = {
    where: ActionWhereUniqueInput
    create: XOR<ActionCreateWithoutFeriInput, ActionUncheckedCreateWithoutFeriInput>
  }

  export type ActionCreateManyFeriInputEnvelope = {
    data: ActionCreateManyFeriInput | ActionCreateManyFeriInput[]
    skipDuplicates?: boolean
  }

  export type FeriRunCreateWithoutFeriInput = {
    id?: string
    status: string
    metadata: JsonNullValueInput | InputJsonValue
    updatedAt?: FeriRunCreateupdatedAtInput | Date[] | string[]
    createdAt?: Date | string
    feriOutbox?: FeriOutboxCreateNestedManyWithoutFeriRunInput
  }

  export type FeriRunUncheckedCreateWithoutFeriInput = {
    id?: string
    status: string
    metadata: JsonNullValueInput | InputJsonValue
    updatedAt?: FeriRunCreateupdatedAtInput | Date[] | string[]
    createdAt?: Date | string
    feriOutbox?: FeriOutboxUncheckedCreateNestedManyWithoutFeriRunInput
  }

  export type FeriRunCreateOrConnectWithoutFeriInput = {
    where: FeriRunWhereUniqueInput
    create: XOR<FeriRunCreateWithoutFeriInput, FeriRunUncheckedCreateWithoutFeriInput>
  }

  export type FeriRunCreateManyFeriInputEnvelope = {
    data: FeriRunCreateManyFeriInput | FeriRunCreateManyFeriInput[]
    skipDuplicates?: boolean
  }

  export type TriggerUpsertWithoutFeriInput = {
    update: XOR<TriggerUpdateWithoutFeriInput, TriggerUncheckedUpdateWithoutFeriInput>
    create: XOR<TriggerCreateWithoutFeriInput, TriggerUncheckedCreateWithoutFeriInput>
    where?: TriggerWhereInput
  }

  export type TriggerUpdateToOneWithWhereWithoutFeriInput = {
    where?: TriggerWhereInput
    data: XOR<TriggerUpdateWithoutFeriInput, TriggerUncheckedUpdateWithoutFeriInput>
  }

  export type TriggerUpdateWithoutFeriInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: AvailableTriggerUpdateOneRequiredWithoutTriggerNestedInput
  }

  export type TriggerUncheckedUpdateWithoutFeriInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActionUpsertWithWhereUniqueWithoutFeriInput = {
    where: ActionWhereUniqueInput
    update: XOR<ActionUpdateWithoutFeriInput, ActionUncheckedUpdateWithoutFeriInput>
    create: XOR<ActionCreateWithoutFeriInput, ActionUncheckedCreateWithoutFeriInput>
  }

  export type ActionUpdateWithWhereUniqueWithoutFeriInput = {
    where: ActionWhereUniqueInput
    data: XOR<ActionUpdateWithoutFeriInput, ActionUncheckedUpdateWithoutFeriInput>
  }

  export type ActionUpdateManyWithWhereWithoutFeriInput = {
    where: ActionScalarWhereInput
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyWithoutFeriInput>
  }

  export type ActionScalarWhereInput = {
    AND?: ActionScalarWhereInput | ActionScalarWhereInput[]
    OR?: ActionScalarWhereInput[]
    NOT?: ActionScalarWhereInput | ActionScalarWhereInput[]
    id?: StringFilter<"Action"> | string
    actionId?: StringFilter<"Action"> | string
    feriId?: StringFilter<"Action"> | string
    updatedAt?: DateTimeFilter<"Action"> | Date | string
    createdAt?: DateTimeFilter<"Action"> | Date | string
  }

  export type FeriRunUpsertWithWhereUniqueWithoutFeriInput = {
    where: FeriRunWhereUniqueInput
    update: XOR<FeriRunUpdateWithoutFeriInput, FeriRunUncheckedUpdateWithoutFeriInput>
    create: XOR<FeriRunCreateWithoutFeriInput, FeriRunUncheckedCreateWithoutFeriInput>
  }

  export type FeriRunUpdateWithWhereUniqueWithoutFeriInput = {
    where: FeriRunWhereUniqueInput
    data: XOR<FeriRunUpdateWithoutFeriInput, FeriRunUncheckedUpdateWithoutFeriInput>
  }

  export type FeriRunUpdateManyWithWhereWithoutFeriInput = {
    where: FeriRunScalarWhereInput
    data: XOR<FeriRunUpdateManyMutationInput, FeriRunUncheckedUpdateManyWithoutFeriInput>
  }

  export type FeriRunScalarWhereInput = {
    AND?: FeriRunScalarWhereInput | FeriRunScalarWhereInput[]
    OR?: FeriRunScalarWhereInput[]
    NOT?: FeriRunScalarWhereInput | FeriRunScalarWhereInput[]
    id?: StringFilter<"FeriRun"> | string
    feriId?: StringFilter<"FeriRun"> | string
    status?: StringFilter<"FeriRun"> | string
    metadata?: JsonFilter<"FeriRun">
    updatedAt?: DateTimeNullableListFilter<"FeriRun">
    createdAt?: DateTimeFilter<"FeriRun"> | Date | string
  }

  export type FeriCreateWithoutFeriRunsInput = {
    id?: string
    triggerId: string
    updatedAt?: Date | string
    createdAt?: Date | string
    trigger?: TriggerCreateNestedOneWithoutFeriInput
    action?: ActionCreateNestedManyWithoutFeriInput
  }

  export type FeriUncheckedCreateWithoutFeriRunsInput = {
    id?: string
    triggerId: string
    updatedAt?: Date | string
    createdAt?: Date | string
    trigger?: TriggerUncheckedCreateNestedOneWithoutFeriInput
    action?: ActionUncheckedCreateNestedManyWithoutFeriInput
  }

  export type FeriCreateOrConnectWithoutFeriRunsInput = {
    where: FeriWhereUniqueInput
    create: XOR<FeriCreateWithoutFeriRunsInput, FeriUncheckedCreateWithoutFeriRunsInput>
  }

  export type FeriOutboxCreateWithoutFeriRunInput = {
    id?: string
    metadata: JsonNullValueInput | InputJsonValue
    status: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type FeriOutboxUncheckedCreateWithoutFeriRunInput = {
    id?: string
    metadata: JsonNullValueInput | InputJsonValue
    status: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type FeriOutboxCreateOrConnectWithoutFeriRunInput = {
    where: FeriOutboxWhereUniqueInput
    create: XOR<FeriOutboxCreateWithoutFeriRunInput, FeriOutboxUncheckedCreateWithoutFeriRunInput>
  }

  export type FeriOutboxCreateManyFeriRunInputEnvelope = {
    data: FeriOutboxCreateManyFeriRunInput | FeriOutboxCreateManyFeriRunInput[]
    skipDuplicates?: boolean
  }

  export type FeriUpsertWithoutFeriRunsInput = {
    update: XOR<FeriUpdateWithoutFeriRunsInput, FeriUncheckedUpdateWithoutFeriRunsInput>
    create: XOR<FeriCreateWithoutFeriRunsInput, FeriUncheckedCreateWithoutFeriRunsInput>
    where?: FeriWhereInput
  }

  export type FeriUpdateToOneWithWhereWithoutFeriRunsInput = {
    where?: FeriWhereInput
    data: XOR<FeriUpdateWithoutFeriRunsInput, FeriUncheckedUpdateWithoutFeriRunsInput>
  }

  export type FeriUpdateWithoutFeriRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trigger?: TriggerUpdateOneWithoutFeriNestedInput
    action?: ActionUpdateManyWithoutFeriNestedInput
  }

  export type FeriUncheckedUpdateWithoutFeriRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trigger?: TriggerUncheckedUpdateOneWithoutFeriNestedInput
    action?: ActionUncheckedUpdateManyWithoutFeriNestedInput
  }

  export type FeriOutboxUpsertWithWhereUniqueWithoutFeriRunInput = {
    where: FeriOutboxWhereUniqueInput
    update: XOR<FeriOutboxUpdateWithoutFeriRunInput, FeriOutboxUncheckedUpdateWithoutFeriRunInput>
    create: XOR<FeriOutboxCreateWithoutFeriRunInput, FeriOutboxUncheckedCreateWithoutFeriRunInput>
  }

  export type FeriOutboxUpdateWithWhereUniqueWithoutFeriRunInput = {
    where: FeriOutboxWhereUniqueInput
    data: XOR<FeriOutboxUpdateWithoutFeriRunInput, FeriOutboxUncheckedUpdateWithoutFeriRunInput>
  }

  export type FeriOutboxUpdateManyWithWhereWithoutFeriRunInput = {
    where: FeriOutboxScalarWhereInput
    data: XOR<FeriOutboxUpdateManyMutationInput, FeriOutboxUncheckedUpdateManyWithoutFeriRunInput>
  }

  export type FeriOutboxScalarWhereInput = {
    AND?: FeriOutboxScalarWhereInput | FeriOutboxScalarWhereInput[]
    OR?: FeriOutboxScalarWhereInput[]
    NOT?: FeriOutboxScalarWhereInput | FeriOutboxScalarWhereInput[]
    id?: StringFilter<"FeriOutbox"> | string
    metadata?: JsonFilter<"FeriOutbox">
    feriRunId?: StringFilter<"FeriOutbox"> | string
    status?: StringFilter<"FeriOutbox"> | string
    updatedAt?: DateTimeFilter<"FeriOutbox"> | Date | string
    createdAt?: DateTimeFilter<"FeriOutbox"> | Date | string
  }

  export type FeriRunCreateWithoutFeriOutboxInput = {
    id?: string
    status: string
    metadata: JsonNullValueInput | InputJsonValue
    updatedAt?: FeriRunCreateupdatedAtInput | Date[] | string[]
    createdAt?: Date | string
    feri?: FeriCreateNestedOneWithoutFeriRunsInput
  }

  export type FeriRunUncheckedCreateWithoutFeriOutboxInput = {
    id?: string
    feriId: string
    status: string
    metadata: JsonNullValueInput | InputJsonValue
    updatedAt?: FeriRunCreateupdatedAtInput | Date[] | string[]
    createdAt?: Date | string
  }

  export type FeriRunCreateOrConnectWithoutFeriOutboxInput = {
    where: FeriRunWhereUniqueInput
    create: XOR<FeriRunCreateWithoutFeriOutboxInput, FeriRunUncheckedCreateWithoutFeriOutboxInput>
  }

  export type FeriRunUpsertWithoutFeriOutboxInput = {
    update: XOR<FeriRunUpdateWithoutFeriOutboxInput, FeriRunUncheckedUpdateWithoutFeriOutboxInput>
    create: XOR<FeriRunCreateWithoutFeriOutboxInput, FeriRunUncheckedCreateWithoutFeriOutboxInput>
    where?: FeriRunWhereInput
  }

  export type FeriRunUpdateToOneWithWhereWithoutFeriOutboxInput = {
    where?: FeriRunWhereInput
    data: XOR<FeriRunUpdateWithoutFeriOutboxInput, FeriRunUncheckedUpdateWithoutFeriOutboxInput>
  }

  export type FeriRunUpdateWithoutFeriOutboxInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    updatedAt?: FeriRunUpdateupdatedAtInput | Date[] | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feri?: FeriUpdateOneWithoutFeriRunsNestedInput
  }

  export type FeriRunUncheckedUpdateWithoutFeriOutboxInput = {
    id?: StringFieldUpdateOperationsInput | string
    feriId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    updatedAt?: FeriRunUpdateupdatedAtInput | Date[] | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailableTriggerCreateWithoutTriggerInput = {
    id?: string
    name: string
  }

  export type AvailableTriggerUncheckedCreateWithoutTriggerInput = {
    id?: string
    name: string
  }

  export type AvailableTriggerCreateOrConnectWithoutTriggerInput = {
    where: AvailableTriggerWhereUniqueInput
    create: XOR<AvailableTriggerCreateWithoutTriggerInput, AvailableTriggerUncheckedCreateWithoutTriggerInput>
  }

  export type FeriCreateWithoutTriggerInput = {
    id?: string
    triggerId: string
    updatedAt?: Date | string
    createdAt?: Date | string
    action?: ActionCreateNestedManyWithoutFeriInput
    FeriRuns?: FeriRunCreateNestedManyWithoutFeriInput
  }

  export type FeriUncheckedCreateWithoutTriggerInput = {
    id?: string
    triggerId: string
    updatedAt?: Date | string
    createdAt?: Date | string
    action?: ActionUncheckedCreateNestedManyWithoutFeriInput
    FeriRuns?: FeriRunUncheckedCreateNestedManyWithoutFeriInput
  }

  export type FeriCreateOrConnectWithoutTriggerInput = {
    where: FeriWhereUniqueInput
    create: XOR<FeriCreateWithoutTriggerInput, FeriUncheckedCreateWithoutTriggerInput>
  }

  export type AvailableTriggerUpsertWithoutTriggerInput = {
    update: XOR<AvailableTriggerUpdateWithoutTriggerInput, AvailableTriggerUncheckedUpdateWithoutTriggerInput>
    create: XOR<AvailableTriggerCreateWithoutTriggerInput, AvailableTriggerUncheckedCreateWithoutTriggerInput>
    where?: AvailableTriggerWhereInput
  }

  export type AvailableTriggerUpdateToOneWithWhereWithoutTriggerInput = {
    where?: AvailableTriggerWhereInput
    data: XOR<AvailableTriggerUpdateWithoutTriggerInput, AvailableTriggerUncheckedUpdateWithoutTriggerInput>
  }

  export type AvailableTriggerUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableTriggerUncheckedUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FeriUpsertWithoutTriggerInput = {
    update: XOR<FeriUpdateWithoutTriggerInput, FeriUncheckedUpdateWithoutTriggerInput>
    create: XOR<FeriCreateWithoutTriggerInput, FeriUncheckedCreateWithoutTriggerInput>
    where?: FeriWhereInput
  }

  export type FeriUpdateToOneWithWhereWithoutTriggerInput = {
    where?: FeriWhereInput
    data: XOR<FeriUpdateWithoutTriggerInput, FeriUncheckedUpdateWithoutTriggerInput>
  }

  export type FeriUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: ActionUpdateManyWithoutFeriNestedInput
    FeriRuns?: FeriRunUpdateManyWithoutFeriNestedInput
  }

  export type FeriUncheckedUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: ActionUncheckedUpdateManyWithoutFeriNestedInput
    FeriRuns?: FeriRunUncheckedUpdateManyWithoutFeriNestedInput
  }

  export type AvailableActionsCreateWithoutActionInput = {
    id?: string
    name: string
  }

  export type AvailableActionsUncheckedCreateWithoutActionInput = {
    id?: string
    name: string
  }

  export type AvailableActionsCreateOrConnectWithoutActionInput = {
    where: AvailableActionsWhereUniqueInput
    create: XOR<AvailableActionsCreateWithoutActionInput, AvailableActionsUncheckedCreateWithoutActionInput>
  }

  export type FeriCreateWithoutActionInput = {
    id?: string
    triggerId: string
    updatedAt?: Date | string
    createdAt?: Date | string
    trigger?: TriggerCreateNestedOneWithoutFeriInput
    FeriRuns?: FeriRunCreateNestedManyWithoutFeriInput
  }

  export type FeriUncheckedCreateWithoutActionInput = {
    id?: string
    triggerId: string
    updatedAt?: Date | string
    createdAt?: Date | string
    trigger?: TriggerUncheckedCreateNestedOneWithoutFeriInput
    FeriRuns?: FeriRunUncheckedCreateNestedManyWithoutFeriInput
  }

  export type FeriCreateOrConnectWithoutActionInput = {
    where: FeriWhereUniqueInput
    create: XOR<FeriCreateWithoutActionInput, FeriUncheckedCreateWithoutActionInput>
  }

  export type AvailableActionsUpsertWithoutActionInput = {
    update: XOR<AvailableActionsUpdateWithoutActionInput, AvailableActionsUncheckedUpdateWithoutActionInput>
    create: XOR<AvailableActionsCreateWithoutActionInput, AvailableActionsUncheckedCreateWithoutActionInput>
    where?: AvailableActionsWhereInput
  }

  export type AvailableActionsUpdateToOneWithWhereWithoutActionInput = {
    where?: AvailableActionsWhereInput
    data: XOR<AvailableActionsUpdateWithoutActionInput, AvailableActionsUncheckedUpdateWithoutActionInput>
  }

  export type AvailableActionsUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AvailableActionsUncheckedUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FeriUpsertWithoutActionInput = {
    update: XOR<FeriUpdateWithoutActionInput, FeriUncheckedUpdateWithoutActionInput>
    create: XOR<FeriCreateWithoutActionInput, FeriUncheckedCreateWithoutActionInput>
    where?: FeriWhereInput
  }

  export type FeriUpdateToOneWithWhereWithoutActionInput = {
    where?: FeriWhereInput
    data: XOR<FeriUpdateWithoutActionInput, FeriUncheckedUpdateWithoutActionInput>
  }

  export type FeriUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trigger?: TriggerUpdateOneWithoutFeriNestedInput
    FeriRuns?: FeriRunUpdateManyWithoutFeriNestedInput
  }

  export type FeriUncheckedUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trigger?: TriggerUncheckedUpdateOneWithoutFeriNestedInput
    FeriRuns?: FeriRunUncheckedUpdateManyWithoutFeriNestedInput
  }

  export type ActionCreateWithoutTypeInput = {
    id?: string
    updatedAt?: Date | string
    createdAt?: Date | string
    feri: FeriCreateNestedOneWithoutActionInput
  }

  export type ActionUncheckedCreateWithoutTypeInput = {
    id?: string
    feriId: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ActionCreateOrConnectWithoutTypeInput = {
    where: ActionWhereUniqueInput
    create: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput>
  }

  export type ActionCreateManyTypeInputEnvelope = {
    data: ActionCreateManyTypeInput | ActionCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type ActionUpsertWithWhereUniqueWithoutTypeInput = {
    where: ActionWhereUniqueInput
    update: XOR<ActionUpdateWithoutTypeInput, ActionUncheckedUpdateWithoutTypeInput>
    create: XOR<ActionCreateWithoutTypeInput, ActionUncheckedCreateWithoutTypeInput>
  }

  export type ActionUpdateWithWhereUniqueWithoutTypeInput = {
    where: ActionWhereUniqueInput
    data: XOR<ActionUpdateWithoutTypeInput, ActionUncheckedUpdateWithoutTypeInput>
  }

  export type ActionUpdateManyWithWhereWithoutTypeInput = {
    where: ActionScalarWhereInput
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyWithoutTypeInput>
  }

  export type TriggerCreateWithoutTypeInput = {
    id?: string
    updatedAt?: Date | string
    createdAt?: Date | string
    feri: FeriCreateNestedOneWithoutTriggerInput
  }

  export type TriggerUncheckedCreateWithoutTypeInput = {
    id?: string
    feriId: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type TriggerCreateOrConnectWithoutTypeInput = {
    where: TriggerWhereUniqueInput
    create: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput>
  }

  export type TriggerCreateManyTypeInputEnvelope = {
    data: TriggerCreateManyTypeInput | TriggerCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type TriggerUpsertWithWhereUniqueWithoutTypeInput = {
    where: TriggerWhereUniqueInput
    update: XOR<TriggerUpdateWithoutTypeInput, TriggerUncheckedUpdateWithoutTypeInput>
    create: XOR<TriggerCreateWithoutTypeInput, TriggerUncheckedCreateWithoutTypeInput>
  }

  export type TriggerUpdateWithWhereUniqueWithoutTypeInput = {
    where: TriggerWhereUniqueInput
    data: XOR<TriggerUpdateWithoutTypeInput, TriggerUncheckedUpdateWithoutTypeInput>
  }

  export type TriggerUpdateManyWithWhereWithoutTypeInput = {
    where: TriggerScalarWhereInput
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyWithoutTypeInput>
  }

  export type TriggerScalarWhereInput = {
    AND?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
    OR?: TriggerScalarWhereInput[]
    NOT?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
    id?: StringFilter<"Trigger"> | string
    triggerId?: StringFilter<"Trigger"> | string
    feriId?: StringFilter<"Trigger"> | string
    updatedAt?: DateTimeFilter<"Trigger"> | Date | string
    createdAt?: DateTimeFilter<"Trigger"> | Date | string
  }

  export type ActionCreateManyFeriInput = {
    id?: string
    actionId: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type FeriRunCreateManyFeriInput = {
    id?: string
    status: string
    metadata: JsonNullValueInput | InputJsonValue
    updatedAt?: FeriRunCreateupdatedAtInput | Date[] | string[]
    createdAt?: Date | string
  }

  export type ActionUpdateWithoutFeriInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: AvailableActionsUpdateOneRequiredWithoutActionNestedInput
  }

  export type ActionUncheckedUpdateWithoutFeriInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActionUncheckedUpdateManyWithoutFeriInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeriRunUpdateWithoutFeriInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    updatedAt?: FeriRunUpdateupdatedAtInput | Date[] | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feriOutbox?: FeriOutboxUpdateManyWithoutFeriRunNestedInput
  }

  export type FeriRunUncheckedUpdateWithoutFeriInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    updatedAt?: FeriRunUpdateupdatedAtInput | Date[] | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feriOutbox?: FeriOutboxUncheckedUpdateManyWithoutFeriRunNestedInput
  }

  export type FeriRunUncheckedUpdateManyWithoutFeriInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    updatedAt?: FeriRunUpdateupdatedAtInput | Date[] | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeriOutboxCreateManyFeriRunInput = {
    id?: string
    metadata: JsonNullValueInput | InputJsonValue
    status: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type FeriOutboxUpdateWithoutFeriRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeriOutboxUncheckedUpdateWithoutFeriRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeriOutboxUncheckedUpdateManyWithoutFeriRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActionCreateManyTypeInput = {
    id?: string
    feriId: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ActionUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feri?: FeriUpdateOneRequiredWithoutActionNestedInput
  }

  export type ActionUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    feriId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActionUncheckedUpdateManyWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    feriId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriggerCreateManyTypeInput = {
    id?: string
    feriId: string
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type TriggerUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feri?: FeriUpdateOneRequiredWithoutTriggerNestedInput
  }

  export type TriggerUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    feriId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriggerUncheckedUpdateManyWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    feriId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}