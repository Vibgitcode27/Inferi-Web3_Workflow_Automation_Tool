
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
 * Model Cascade
 * 
 */
export type Cascade = $Result.DefaultSelection<Prisma.$CascadePayload>
/**
 * Model CascadeRun
 * 
 */
export type CascadeRun = $Result.DefaultSelection<Prisma.$CascadeRunPayload>
/**
 * Model CascadeOutbox
 * 
 */
export type CascadeOutbox = $Result.DefaultSelection<Prisma.$CascadeOutboxPayload>
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
   * `prisma.cascade`: Exposes CRUD operations for the **Cascade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cascades
    * const cascades = await prisma.cascade.findMany()
    * ```
    */
  get cascade(): Prisma.CascadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cascadeRun`: Exposes CRUD operations for the **CascadeRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CascadeRuns
    * const cascadeRuns = await prisma.cascadeRun.findMany()
    * ```
    */
  get cascadeRun(): Prisma.CascadeRunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cascadeOutbox`: Exposes CRUD operations for the **CascadeOutbox** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CascadeOutboxes
    * const cascadeOutboxes = await prisma.cascadeOutbox.findMany()
    * ```
    */
  get cascadeOutbox(): Prisma.CascadeOutboxDelegate<ExtArgs, ClientOptions>;

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
    Cascade: 'Cascade',
    CascadeRun: 'CascadeRun',
    CascadeOutbox: 'CascadeOutbox',
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
      modelProps: "user" | "cascade" | "cascadeRun" | "cascadeOutbox" | "trigger" | "action" | "availableActions" | "availableTrigger"
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
      Cascade: {
        payload: Prisma.$CascadePayload<ExtArgs>
        fields: Prisma.CascadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CascadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CascadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CascadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CascadePayload>
          }
          findFirst: {
            args: Prisma.CascadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CascadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CascadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CascadePayload>
          }
          findMany: {
            args: Prisma.CascadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CascadePayload>[]
          }
          create: {
            args: Prisma.CascadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CascadePayload>
          }
          createMany: {
            args: Prisma.CascadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CascadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CascadePayload>[]
          }
          delete: {
            args: Prisma.CascadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CascadePayload>
          }
          update: {
            args: Prisma.CascadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CascadePayload>
          }
          deleteMany: {
            args: Prisma.CascadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CascadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CascadeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CascadePayload>[]
          }
          upsert: {
            args: Prisma.CascadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CascadePayload>
          }
          aggregate: {
            args: Prisma.CascadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCascade>
          }
          groupBy: {
            args: Prisma.CascadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CascadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CascadeCountArgs<ExtArgs>
            result: $Utils.Optional<CascadeCountAggregateOutputType> | number
          }
        }
      }
      CascadeRun: {
        payload: Prisma.$CascadeRunPayload<ExtArgs>
        fields: Prisma.CascadeRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CascadeRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CascadeRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CascadeRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CascadeRunPayload>
          }
          findFirst: {
            args: Prisma.CascadeRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CascadeRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CascadeRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CascadeRunPayload>
          }
          findMany: {
            args: Prisma.CascadeRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CascadeRunPayload>[]
          }
          create: {
            args: Prisma.CascadeRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CascadeRunPayload>
          }
          createMany: {
            args: Prisma.CascadeRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CascadeRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CascadeRunPayload>[]
          }
          delete: {
            args: Prisma.CascadeRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CascadeRunPayload>
          }
          update: {
            args: Prisma.CascadeRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CascadeRunPayload>
          }
          deleteMany: {
            args: Prisma.CascadeRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CascadeRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CascadeRunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CascadeRunPayload>[]
          }
          upsert: {
            args: Prisma.CascadeRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CascadeRunPayload>
          }
          aggregate: {
            args: Prisma.CascadeRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCascadeRun>
          }
          groupBy: {
            args: Prisma.CascadeRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<CascadeRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.CascadeRunCountArgs<ExtArgs>
            result: $Utils.Optional<CascadeRunCountAggregateOutputType> | number
          }
        }
      }
      CascadeOutbox: {
        payload: Prisma.$CascadeOutboxPayload<ExtArgs>
        fields: Prisma.CascadeOutboxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CascadeOutboxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CascadeOutboxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CascadeOutboxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CascadeOutboxPayload>
          }
          findFirst: {
            args: Prisma.CascadeOutboxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CascadeOutboxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CascadeOutboxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CascadeOutboxPayload>
          }
          findMany: {
            args: Prisma.CascadeOutboxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CascadeOutboxPayload>[]
          }
          create: {
            args: Prisma.CascadeOutboxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CascadeOutboxPayload>
          }
          createMany: {
            args: Prisma.CascadeOutboxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CascadeOutboxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CascadeOutboxPayload>[]
          }
          delete: {
            args: Prisma.CascadeOutboxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CascadeOutboxPayload>
          }
          update: {
            args: Prisma.CascadeOutboxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CascadeOutboxPayload>
          }
          deleteMany: {
            args: Prisma.CascadeOutboxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CascadeOutboxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CascadeOutboxUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CascadeOutboxPayload>[]
          }
          upsert: {
            args: Prisma.CascadeOutboxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CascadeOutboxPayload>
          }
          aggregate: {
            args: Prisma.CascadeOutboxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCascadeOutbox>
          }
          groupBy: {
            args: Prisma.CascadeOutboxGroupByArgs<ExtArgs>
            result: $Utils.Optional<CascadeOutboxGroupByOutputType>[]
          }
          count: {
            args: Prisma.CascadeOutboxCountArgs<ExtArgs>
            result: $Utils.Optional<CascadeOutboxCountAggregateOutputType> | number
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
    cascade?: CascadeOmit
    cascadeRun?: CascadeRunOmit
    cascadeOutbox?: CascadeOutboxOmit
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
   * Count Type CascadeCountOutputType
   */

  export type CascadeCountOutputType = {
    action: number
    CascadeRuns: number
  }

  export type CascadeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | CascadeCountOutputTypeCountActionArgs
    CascadeRuns?: boolean | CascadeCountOutputTypeCountCascadeRunsArgs
  }

  // Custom InputTypes
  /**
   * CascadeCountOutputType without action
   */
  export type CascadeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CascadeCountOutputType
     */
    select?: CascadeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CascadeCountOutputType without action
   */
  export type CascadeCountOutputTypeCountActionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
  }

  /**
   * CascadeCountOutputType without action
   */
  export type CascadeCountOutputTypeCountCascadeRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CascadeRunWhereInput
  }


  /**
   * Count Type CascadeRunCountOutputType
   */

  export type CascadeRunCountOutputType = {
    cascadeOutbox: number
  }

  export type CascadeRunCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cascadeOutbox?: boolean | CascadeRunCountOutputTypeCountCascadeOutboxArgs
  }

  // Custom InputTypes
  /**
   * CascadeRunCountOutputType without action
   */
  export type CascadeRunCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CascadeRunCountOutputType
     */
    select?: CascadeRunCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CascadeRunCountOutputType without action
   */
  export type CascadeRunCountOutputTypeCountCascadeOutboxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CascadeOutboxWhereInput
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
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
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
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
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
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
      password: string
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
   * Model Cascade
   */

  export type AggregateCascade = {
    _count: CascadeCountAggregateOutputType | null
    _min: CascadeMinAggregateOutputType | null
    _max: CascadeMaxAggregateOutputType | null
  }

  export type CascadeMinAggregateOutputType = {
    id: string | null
    triggerId: string | null
  }

  export type CascadeMaxAggregateOutputType = {
    id: string | null
    triggerId: string | null
  }

  export type CascadeCountAggregateOutputType = {
    id: number
    triggerId: number
    _all: number
  }


  export type CascadeMinAggregateInputType = {
    id?: true
    triggerId?: true
  }

  export type CascadeMaxAggregateInputType = {
    id?: true
    triggerId?: true
  }

  export type CascadeCountAggregateInputType = {
    id?: true
    triggerId?: true
    _all?: true
  }

  export type CascadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cascade to aggregate.
     */
    where?: CascadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cascades to fetch.
     */
    orderBy?: CascadeOrderByWithRelationInput | CascadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CascadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cascades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cascades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cascades
    **/
    _count?: true | CascadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CascadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CascadeMaxAggregateInputType
  }

  export type GetCascadeAggregateType<T extends CascadeAggregateArgs> = {
        [P in keyof T & keyof AggregateCascade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCascade[P]>
      : GetScalarType<T[P], AggregateCascade[P]>
  }




  export type CascadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CascadeWhereInput
    orderBy?: CascadeOrderByWithAggregationInput | CascadeOrderByWithAggregationInput[]
    by: CascadeScalarFieldEnum[] | CascadeScalarFieldEnum
    having?: CascadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CascadeCountAggregateInputType | true
    _min?: CascadeMinAggregateInputType
    _max?: CascadeMaxAggregateInputType
  }

  export type CascadeGroupByOutputType = {
    id: string
    triggerId: string
    _count: CascadeCountAggregateOutputType | null
    _min: CascadeMinAggregateOutputType | null
    _max: CascadeMaxAggregateOutputType | null
  }

  type GetCascadeGroupByPayload<T extends CascadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CascadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CascadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CascadeGroupByOutputType[P]>
            : GetScalarType<T[P], CascadeGroupByOutputType[P]>
        }
      >
    >


  export type CascadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggerId?: boolean
    trigger?: boolean | Cascade$triggerArgs<ExtArgs>
    action?: boolean | Cascade$actionArgs<ExtArgs>
    CascadeRuns?: boolean | Cascade$CascadeRunsArgs<ExtArgs>
    _count?: boolean | CascadeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cascade"]>

  export type CascadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggerId?: boolean
  }, ExtArgs["result"]["cascade"]>

  export type CascadeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggerId?: boolean
  }, ExtArgs["result"]["cascade"]>

  export type CascadeSelectScalar = {
    id?: boolean
    triggerId?: boolean
  }

  export type CascadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "triggerId", ExtArgs["result"]["cascade"]>
  export type CascadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trigger?: boolean | Cascade$triggerArgs<ExtArgs>
    action?: boolean | Cascade$actionArgs<ExtArgs>
    CascadeRuns?: boolean | Cascade$CascadeRunsArgs<ExtArgs>
    _count?: boolean | CascadeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CascadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CascadeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CascadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cascade"
    objects: {
      trigger: Prisma.$TriggerPayload<ExtArgs> | null
      action: Prisma.$ActionPayload<ExtArgs>[]
      CascadeRuns: Prisma.$CascadeRunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      triggerId: string
    }, ExtArgs["result"]["cascade"]>
    composites: {}
  }

  type CascadeGetPayload<S extends boolean | null | undefined | CascadeDefaultArgs> = $Result.GetResult<Prisma.$CascadePayload, S>

  type CascadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CascadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CascadeCountAggregateInputType | true
    }

  export interface CascadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cascade'], meta: { name: 'Cascade' } }
    /**
     * Find zero or one Cascade that matches the filter.
     * @param {CascadeFindUniqueArgs} args - Arguments to find a Cascade
     * @example
     * // Get one Cascade
     * const cascade = await prisma.cascade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CascadeFindUniqueArgs>(args: SelectSubset<T, CascadeFindUniqueArgs<ExtArgs>>): Prisma__CascadeClient<$Result.GetResult<Prisma.$CascadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cascade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CascadeFindUniqueOrThrowArgs} args - Arguments to find a Cascade
     * @example
     * // Get one Cascade
     * const cascade = await prisma.cascade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CascadeFindUniqueOrThrowArgs>(args: SelectSubset<T, CascadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CascadeClient<$Result.GetResult<Prisma.$CascadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cascade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CascadeFindFirstArgs} args - Arguments to find a Cascade
     * @example
     * // Get one Cascade
     * const cascade = await prisma.cascade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CascadeFindFirstArgs>(args?: SelectSubset<T, CascadeFindFirstArgs<ExtArgs>>): Prisma__CascadeClient<$Result.GetResult<Prisma.$CascadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cascade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CascadeFindFirstOrThrowArgs} args - Arguments to find a Cascade
     * @example
     * // Get one Cascade
     * const cascade = await prisma.cascade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CascadeFindFirstOrThrowArgs>(args?: SelectSubset<T, CascadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CascadeClient<$Result.GetResult<Prisma.$CascadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cascades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CascadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cascades
     * const cascades = await prisma.cascade.findMany()
     * 
     * // Get first 10 Cascades
     * const cascades = await prisma.cascade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cascadeWithIdOnly = await prisma.cascade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CascadeFindManyArgs>(args?: SelectSubset<T, CascadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CascadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cascade.
     * @param {CascadeCreateArgs} args - Arguments to create a Cascade.
     * @example
     * // Create one Cascade
     * const Cascade = await prisma.cascade.create({
     *   data: {
     *     // ... data to create a Cascade
     *   }
     * })
     * 
     */
    create<T extends CascadeCreateArgs>(args: SelectSubset<T, CascadeCreateArgs<ExtArgs>>): Prisma__CascadeClient<$Result.GetResult<Prisma.$CascadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cascades.
     * @param {CascadeCreateManyArgs} args - Arguments to create many Cascades.
     * @example
     * // Create many Cascades
     * const cascade = await prisma.cascade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CascadeCreateManyArgs>(args?: SelectSubset<T, CascadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cascades and returns the data saved in the database.
     * @param {CascadeCreateManyAndReturnArgs} args - Arguments to create many Cascades.
     * @example
     * // Create many Cascades
     * const cascade = await prisma.cascade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cascades and only return the `id`
     * const cascadeWithIdOnly = await prisma.cascade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CascadeCreateManyAndReturnArgs>(args?: SelectSubset<T, CascadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CascadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cascade.
     * @param {CascadeDeleteArgs} args - Arguments to delete one Cascade.
     * @example
     * // Delete one Cascade
     * const Cascade = await prisma.cascade.delete({
     *   where: {
     *     // ... filter to delete one Cascade
     *   }
     * })
     * 
     */
    delete<T extends CascadeDeleteArgs>(args: SelectSubset<T, CascadeDeleteArgs<ExtArgs>>): Prisma__CascadeClient<$Result.GetResult<Prisma.$CascadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cascade.
     * @param {CascadeUpdateArgs} args - Arguments to update one Cascade.
     * @example
     * // Update one Cascade
     * const cascade = await prisma.cascade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CascadeUpdateArgs>(args: SelectSubset<T, CascadeUpdateArgs<ExtArgs>>): Prisma__CascadeClient<$Result.GetResult<Prisma.$CascadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cascades.
     * @param {CascadeDeleteManyArgs} args - Arguments to filter Cascades to delete.
     * @example
     * // Delete a few Cascades
     * const { count } = await prisma.cascade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CascadeDeleteManyArgs>(args?: SelectSubset<T, CascadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cascades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CascadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cascades
     * const cascade = await prisma.cascade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CascadeUpdateManyArgs>(args: SelectSubset<T, CascadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cascades and returns the data updated in the database.
     * @param {CascadeUpdateManyAndReturnArgs} args - Arguments to update many Cascades.
     * @example
     * // Update many Cascades
     * const cascade = await prisma.cascade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cascades and only return the `id`
     * const cascadeWithIdOnly = await prisma.cascade.updateManyAndReturn({
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
    updateManyAndReturn<T extends CascadeUpdateManyAndReturnArgs>(args: SelectSubset<T, CascadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CascadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cascade.
     * @param {CascadeUpsertArgs} args - Arguments to update or create a Cascade.
     * @example
     * // Update or create a Cascade
     * const cascade = await prisma.cascade.upsert({
     *   create: {
     *     // ... data to create a Cascade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cascade we want to update
     *   }
     * })
     */
    upsert<T extends CascadeUpsertArgs>(args: SelectSubset<T, CascadeUpsertArgs<ExtArgs>>): Prisma__CascadeClient<$Result.GetResult<Prisma.$CascadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cascades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CascadeCountArgs} args - Arguments to filter Cascades to count.
     * @example
     * // Count the number of Cascades
     * const count = await prisma.cascade.count({
     *   where: {
     *     // ... the filter for the Cascades we want to count
     *   }
     * })
    **/
    count<T extends CascadeCountArgs>(
      args?: Subset<T, CascadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CascadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cascade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CascadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CascadeAggregateArgs>(args: Subset<T, CascadeAggregateArgs>): Prisma.PrismaPromise<GetCascadeAggregateType<T>>

    /**
     * Group by Cascade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CascadeGroupByArgs} args - Group by arguments.
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
      T extends CascadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CascadeGroupByArgs['orderBy'] }
        : { orderBy?: CascadeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CascadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCascadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cascade model
   */
  readonly fields: CascadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cascade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CascadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trigger<T extends Cascade$triggerArgs<ExtArgs> = {}>(args?: Subset<T, Cascade$triggerArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    action<T extends Cascade$actionArgs<ExtArgs> = {}>(args?: Subset<T, Cascade$actionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CascadeRuns<T extends Cascade$CascadeRunsArgs<ExtArgs> = {}>(args?: Subset<T, Cascade$CascadeRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CascadeRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cascade model
   */ 
  interface CascadeFieldRefs {
    readonly id: FieldRef<"Cascade", 'String'>
    readonly triggerId: FieldRef<"Cascade", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cascade findUnique
   */
  export type CascadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cascade
     */
    select?: CascadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cascade
     */
    omit?: CascadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeInclude<ExtArgs> | null
    /**
     * Filter, which Cascade to fetch.
     */
    where: CascadeWhereUniqueInput
  }

  /**
   * Cascade findUniqueOrThrow
   */
  export type CascadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cascade
     */
    select?: CascadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cascade
     */
    omit?: CascadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeInclude<ExtArgs> | null
    /**
     * Filter, which Cascade to fetch.
     */
    where: CascadeWhereUniqueInput
  }

  /**
   * Cascade findFirst
   */
  export type CascadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cascade
     */
    select?: CascadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cascade
     */
    omit?: CascadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeInclude<ExtArgs> | null
    /**
     * Filter, which Cascade to fetch.
     */
    where?: CascadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cascades to fetch.
     */
    orderBy?: CascadeOrderByWithRelationInput | CascadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cascades.
     */
    cursor?: CascadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cascades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cascades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cascades.
     */
    distinct?: CascadeScalarFieldEnum | CascadeScalarFieldEnum[]
  }

  /**
   * Cascade findFirstOrThrow
   */
  export type CascadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cascade
     */
    select?: CascadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cascade
     */
    omit?: CascadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeInclude<ExtArgs> | null
    /**
     * Filter, which Cascade to fetch.
     */
    where?: CascadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cascades to fetch.
     */
    orderBy?: CascadeOrderByWithRelationInput | CascadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cascades.
     */
    cursor?: CascadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cascades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cascades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cascades.
     */
    distinct?: CascadeScalarFieldEnum | CascadeScalarFieldEnum[]
  }

  /**
   * Cascade findMany
   */
  export type CascadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cascade
     */
    select?: CascadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cascade
     */
    omit?: CascadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeInclude<ExtArgs> | null
    /**
     * Filter, which Cascades to fetch.
     */
    where?: CascadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cascades to fetch.
     */
    orderBy?: CascadeOrderByWithRelationInput | CascadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cascades.
     */
    cursor?: CascadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cascades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cascades.
     */
    skip?: number
    distinct?: CascadeScalarFieldEnum | CascadeScalarFieldEnum[]
  }

  /**
   * Cascade create
   */
  export type CascadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cascade
     */
    select?: CascadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cascade
     */
    omit?: CascadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeInclude<ExtArgs> | null
    /**
     * The data needed to create a Cascade.
     */
    data: XOR<CascadeCreateInput, CascadeUncheckedCreateInput>
  }

  /**
   * Cascade createMany
   */
  export type CascadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cascades.
     */
    data: CascadeCreateManyInput | CascadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cascade createManyAndReturn
   */
  export type CascadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cascade
     */
    select?: CascadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cascade
     */
    omit?: CascadeOmit<ExtArgs> | null
    /**
     * The data used to create many Cascades.
     */
    data: CascadeCreateManyInput | CascadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cascade update
   */
  export type CascadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cascade
     */
    select?: CascadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cascade
     */
    omit?: CascadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeInclude<ExtArgs> | null
    /**
     * The data needed to update a Cascade.
     */
    data: XOR<CascadeUpdateInput, CascadeUncheckedUpdateInput>
    /**
     * Choose, which Cascade to update.
     */
    where: CascadeWhereUniqueInput
  }

  /**
   * Cascade updateMany
   */
  export type CascadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cascades.
     */
    data: XOR<CascadeUpdateManyMutationInput, CascadeUncheckedUpdateManyInput>
    /**
     * Filter which Cascades to update
     */
    where?: CascadeWhereInput
    /**
     * Limit how many Cascades to update.
     */
    limit?: number
  }

  /**
   * Cascade updateManyAndReturn
   */
  export type CascadeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cascade
     */
    select?: CascadeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cascade
     */
    omit?: CascadeOmit<ExtArgs> | null
    /**
     * The data used to update Cascades.
     */
    data: XOR<CascadeUpdateManyMutationInput, CascadeUncheckedUpdateManyInput>
    /**
     * Filter which Cascades to update
     */
    where?: CascadeWhereInput
    /**
     * Limit how many Cascades to update.
     */
    limit?: number
  }

  /**
   * Cascade upsert
   */
  export type CascadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cascade
     */
    select?: CascadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cascade
     */
    omit?: CascadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeInclude<ExtArgs> | null
    /**
     * The filter to search for the Cascade to update in case it exists.
     */
    where: CascadeWhereUniqueInput
    /**
     * In case the Cascade found by the `where` argument doesn't exist, create a new Cascade with this data.
     */
    create: XOR<CascadeCreateInput, CascadeUncheckedCreateInput>
    /**
     * In case the Cascade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CascadeUpdateInput, CascadeUncheckedUpdateInput>
  }

  /**
   * Cascade delete
   */
  export type CascadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cascade
     */
    select?: CascadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cascade
     */
    omit?: CascadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeInclude<ExtArgs> | null
    /**
     * Filter which Cascade to delete.
     */
    where: CascadeWhereUniqueInput
  }

  /**
   * Cascade deleteMany
   */
  export type CascadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cascades to delete
     */
    where?: CascadeWhereInput
    /**
     * Limit how many Cascades to delete.
     */
    limit?: number
  }

  /**
   * Cascade.trigger
   */
  export type Cascade$triggerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Cascade.action
   */
  export type Cascade$actionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Cascade.CascadeRuns
   */
  export type Cascade$CascadeRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CascadeRun
     */
    select?: CascadeRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CascadeRun
     */
    omit?: CascadeRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeRunInclude<ExtArgs> | null
    where?: CascadeRunWhereInput
    orderBy?: CascadeRunOrderByWithRelationInput | CascadeRunOrderByWithRelationInput[]
    cursor?: CascadeRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CascadeRunScalarFieldEnum | CascadeRunScalarFieldEnum[]
  }

  /**
   * Cascade without action
   */
  export type CascadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cascade
     */
    select?: CascadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cascade
     */
    omit?: CascadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeInclude<ExtArgs> | null
  }


  /**
   * Model CascadeRun
   */

  export type AggregateCascadeRun = {
    _count: CascadeRunCountAggregateOutputType | null
    _min: CascadeRunMinAggregateOutputType | null
    _max: CascadeRunMaxAggregateOutputType | null
  }

  export type CascadeRunMinAggregateOutputType = {
    id: string | null
    cascadeId: string | null
    status: string | null
  }

  export type CascadeRunMaxAggregateOutputType = {
    id: string | null
    cascadeId: string | null
    status: string | null
  }

  export type CascadeRunCountAggregateOutputType = {
    id: number
    cascadeId: number
    status: number
    metadata: number
    _all: number
  }


  export type CascadeRunMinAggregateInputType = {
    id?: true
    cascadeId?: true
    status?: true
  }

  export type CascadeRunMaxAggregateInputType = {
    id?: true
    cascadeId?: true
    status?: true
  }

  export type CascadeRunCountAggregateInputType = {
    id?: true
    cascadeId?: true
    status?: true
    metadata?: true
    _all?: true
  }

  export type CascadeRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CascadeRun to aggregate.
     */
    where?: CascadeRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CascadeRuns to fetch.
     */
    orderBy?: CascadeRunOrderByWithRelationInput | CascadeRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CascadeRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CascadeRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CascadeRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CascadeRuns
    **/
    _count?: true | CascadeRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CascadeRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CascadeRunMaxAggregateInputType
  }

  export type GetCascadeRunAggregateType<T extends CascadeRunAggregateArgs> = {
        [P in keyof T & keyof AggregateCascadeRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCascadeRun[P]>
      : GetScalarType<T[P], AggregateCascadeRun[P]>
  }




  export type CascadeRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CascadeRunWhereInput
    orderBy?: CascadeRunOrderByWithAggregationInput | CascadeRunOrderByWithAggregationInput[]
    by: CascadeRunScalarFieldEnum[] | CascadeRunScalarFieldEnum
    having?: CascadeRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CascadeRunCountAggregateInputType | true
    _min?: CascadeRunMinAggregateInputType
    _max?: CascadeRunMaxAggregateInputType
  }

  export type CascadeRunGroupByOutputType = {
    id: string
    cascadeId: string
    status: string
    metadata: JsonValue
    _count: CascadeRunCountAggregateOutputType | null
    _min: CascadeRunMinAggregateOutputType | null
    _max: CascadeRunMaxAggregateOutputType | null
  }

  type GetCascadeRunGroupByPayload<T extends CascadeRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CascadeRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CascadeRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CascadeRunGroupByOutputType[P]>
            : GetScalarType<T[P], CascadeRunGroupByOutputType[P]>
        }
      >
    >


  export type CascadeRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cascadeId?: boolean
    status?: boolean
    metadata?: boolean
    cascade?: boolean | CascadeRun$cascadeArgs<ExtArgs>
    cascadeOutbox?: boolean | CascadeRun$cascadeOutboxArgs<ExtArgs>
    _count?: boolean | CascadeRunCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cascadeRun"]>

  export type CascadeRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cascadeId?: boolean
    status?: boolean
    metadata?: boolean
    cascade?: boolean | CascadeRun$cascadeArgs<ExtArgs>
  }, ExtArgs["result"]["cascadeRun"]>

  export type CascadeRunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cascadeId?: boolean
    status?: boolean
    metadata?: boolean
    cascade?: boolean | CascadeRun$cascadeArgs<ExtArgs>
  }, ExtArgs["result"]["cascadeRun"]>

  export type CascadeRunSelectScalar = {
    id?: boolean
    cascadeId?: boolean
    status?: boolean
    metadata?: boolean
  }

  export type CascadeRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cascadeId" | "status" | "metadata", ExtArgs["result"]["cascadeRun"]>
  export type CascadeRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cascade?: boolean | CascadeRun$cascadeArgs<ExtArgs>
    cascadeOutbox?: boolean | CascadeRun$cascadeOutboxArgs<ExtArgs>
    _count?: boolean | CascadeRunCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CascadeRunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cascade?: boolean | CascadeRun$cascadeArgs<ExtArgs>
  }
  export type CascadeRunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cascade?: boolean | CascadeRun$cascadeArgs<ExtArgs>
  }

  export type $CascadeRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CascadeRun"
    objects: {
      cascade: Prisma.$CascadePayload<ExtArgs> | null
      cascadeOutbox: Prisma.$CascadeOutboxPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cascadeId: string
      status: string
      metadata: Prisma.JsonValue
    }, ExtArgs["result"]["cascadeRun"]>
    composites: {}
  }

  type CascadeRunGetPayload<S extends boolean | null | undefined | CascadeRunDefaultArgs> = $Result.GetResult<Prisma.$CascadeRunPayload, S>

  type CascadeRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CascadeRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CascadeRunCountAggregateInputType | true
    }

  export interface CascadeRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CascadeRun'], meta: { name: 'CascadeRun' } }
    /**
     * Find zero or one CascadeRun that matches the filter.
     * @param {CascadeRunFindUniqueArgs} args - Arguments to find a CascadeRun
     * @example
     * // Get one CascadeRun
     * const cascadeRun = await prisma.cascadeRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CascadeRunFindUniqueArgs>(args: SelectSubset<T, CascadeRunFindUniqueArgs<ExtArgs>>): Prisma__CascadeRunClient<$Result.GetResult<Prisma.$CascadeRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CascadeRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CascadeRunFindUniqueOrThrowArgs} args - Arguments to find a CascadeRun
     * @example
     * // Get one CascadeRun
     * const cascadeRun = await prisma.cascadeRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CascadeRunFindUniqueOrThrowArgs>(args: SelectSubset<T, CascadeRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CascadeRunClient<$Result.GetResult<Prisma.$CascadeRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CascadeRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CascadeRunFindFirstArgs} args - Arguments to find a CascadeRun
     * @example
     * // Get one CascadeRun
     * const cascadeRun = await prisma.cascadeRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CascadeRunFindFirstArgs>(args?: SelectSubset<T, CascadeRunFindFirstArgs<ExtArgs>>): Prisma__CascadeRunClient<$Result.GetResult<Prisma.$CascadeRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CascadeRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CascadeRunFindFirstOrThrowArgs} args - Arguments to find a CascadeRun
     * @example
     * // Get one CascadeRun
     * const cascadeRun = await prisma.cascadeRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CascadeRunFindFirstOrThrowArgs>(args?: SelectSubset<T, CascadeRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__CascadeRunClient<$Result.GetResult<Prisma.$CascadeRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CascadeRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CascadeRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CascadeRuns
     * const cascadeRuns = await prisma.cascadeRun.findMany()
     * 
     * // Get first 10 CascadeRuns
     * const cascadeRuns = await prisma.cascadeRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cascadeRunWithIdOnly = await prisma.cascadeRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CascadeRunFindManyArgs>(args?: SelectSubset<T, CascadeRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CascadeRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CascadeRun.
     * @param {CascadeRunCreateArgs} args - Arguments to create a CascadeRun.
     * @example
     * // Create one CascadeRun
     * const CascadeRun = await prisma.cascadeRun.create({
     *   data: {
     *     // ... data to create a CascadeRun
     *   }
     * })
     * 
     */
    create<T extends CascadeRunCreateArgs>(args: SelectSubset<T, CascadeRunCreateArgs<ExtArgs>>): Prisma__CascadeRunClient<$Result.GetResult<Prisma.$CascadeRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CascadeRuns.
     * @param {CascadeRunCreateManyArgs} args - Arguments to create many CascadeRuns.
     * @example
     * // Create many CascadeRuns
     * const cascadeRun = await prisma.cascadeRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CascadeRunCreateManyArgs>(args?: SelectSubset<T, CascadeRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CascadeRuns and returns the data saved in the database.
     * @param {CascadeRunCreateManyAndReturnArgs} args - Arguments to create many CascadeRuns.
     * @example
     * // Create many CascadeRuns
     * const cascadeRun = await prisma.cascadeRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CascadeRuns and only return the `id`
     * const cascadeRunWithIdOnly = await prisma.cascadeRun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CascadeRunCreateManyAndReturnArgs>(args?: SelectSubset<T, CascadeRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CascadeRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CascadeRun.
     * @param {CascadeRunDeleteArgs} args - Arguments to delete one CascadeRun.
     * @example
     * // Delete one CascadeRun
     * const CascadeRun = await prisma.cascadeRun.delete({
     *   where: {
     *     // ... filter to delete one CascadeRun
     *   }
     * })
     * 
     */
    delete<T extends CascadeRunDeleteArgs>(args: SelectSubset<T, CascadeRunDeleteArgs<ExtArgs>>): Prisma__CascadeRunClient<$Result.GetResult<Prisma.$CascadeRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CascadeRun.
     * @param {CascadeRunUpdateArgs} args - Arguments to update one CascadeRun.
     * @example
     * // Update one CascadeRun
     * const cascadeRun = await prisma.cascadeRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CascadeRunUpdateArgs>(args: SelectSubset<T, CascadeRunUpdateArgs<ExtArgs>>): Prisma__CascadeRunClient<$Result.GetResult<Prisma.$CascadeRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CascadeRuns.
     * @param {CascadeRunDeleteManyArgs} args - Arguments to filter CascadeRuns to delete.
     * @example
     * // Delete a few CascadeRuns
     * const { count } = await prisma.cascadeRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CascadeRunDeleteManyArgs>(args?: SelectSubset<T, CascadeRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CascadeRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CascadeRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CascadeRuns
     * const cascadeRun = await prisma.cascadeRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CascadeRunUpdateManyArgs>(args: SelectSubset<T, CascadeRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CascadeRuns and returns the data updated in the database.
     * @param {CascadeRunUpdateManyAndReturnArgs} args - Arguments to update many CascadeRuns.
     * @example
     * // Update many CascadeRuns
     * const cascadeRun = await prisma.cascadeRun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CascadeRuns and only return the `id`
     * const cascadeRunWithIdOnly = await prisma.cascadeRun.updateManyAndReturn({
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
    updateManyAndReturn<T extends CascadeRunUpdateManyAndReturnArgs>(args: SelectSubset<T, CascadeRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CascadeRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CascadeRun.
     * @param {CascadeRunUpsertArgs} args - Arguments to update or create a CascadeRun.
     * @example
     * // Update or create a CascadeRun
     * const cascadeRun = await prisma.cascadeRun.upsert({
     *   create: {
     *     // ... data to create a CascadeRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CascadeRun we want to update
     *   }
     * })
     */
    upsert<T extends CascadeRunUpsertArgs>(args: SelectSubset<T, CascadeRunUpsertArgs<ExtArgs>>): Prisma__CascadeRunClient<$Result.GetResult<Prisma.$CascadeRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CascadeRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CascadeRunCountArgs} args - Arguments to filter CascadeRuns to count.
     * @example
     * // Count the number of CascadeRuns
     * const count = await prisma.cascadeRun.count({
     *   where: {
     *     // ... the filter for the CascadeRuns we want to count
     *   }
     * })
    **/
    count<T extends CascadeRunCountArgs>(
      args?: Subset<T, CascadeRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CascadeRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CascadeRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CascadeRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CascadeRunAggregateArgs>(args: Subset<T, CascadeRunAggregateArgs>): Prisma.PrismaPromise<GetCascadeRunAggregateType<T>>

    /**
     * Group by CascadeRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CascadeRunGroupByArgs} args - Group by arguments.
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
      T extends CascadeRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CascadeRunGroupByArgs['orderBy'] }
        : { orderBy?: CascadeRunGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CascadeRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCascadeRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CascadeRun model
   */
  readonly fields: CascadeRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CascadeRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CascadeRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cascade<T extends CascadeRun$cascadeArgs<ExtArgs> = {}>(args?: Subset<T, CascadeRun$cascadeArgs<ExtArgs>>): Prisma__CascadeClient<$Result.GetResult<Prisma.$CascadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    cascadeOutbox<T extends CascadeRun$cascadeOutboxArgs<ExtArgs> = {}>(args?: Subset<T, CascadeRun$cascadeOutboxArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CascadeOutboxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CascadeRun model
   */ 
  interface CascadeRunFieldRefs {
    readonly id: FieldRef<"CascadeRun", 'String'>
    readonly cascadeId: FieldRef<"CascadeRun", 'String'>
    readonly status: FieldRef<"CascadeRun", 'String'>
    readonly metadata: FieldRef<"CascadeRun", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * CascadeRun findUnique
   */
  export type CascadeRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CascadeRun
     */
    select?: CascadeRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CascadeRun
     */
    omit?: CascadeRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeRunInclude<ExtArgs> | null
    /**
     * Filter, which CascadeRun to fetch.
     */
    where: CascadeRunWhereUniqueInput
  }

  /**
   * CascadeRun findUniqueOrThrow
   */
  export type CascadeRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CascadeRun
     */
    select?: CascadeRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CascadeRun
     */
    omit?: CascadeRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeRunInclude<ExtArgs> | null
    /**
     * Filter, which CascadeRun to fetch.
     */
    where: CascadeRunWhereUniqueInput
  }

  /**
   * CascadeRun findFirst
   */
  export type CascadeRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CascadeRun
     */
    select?: CascadeRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CascadeRun
     */
    omit?: CascadeRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeRunInclude<ExtArgs> | null
    /**
     * Filter, which CascadeRun to fetch.
     */
    where?: CascadeRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CascadeRuns to fetch.
     */
    orderBy?: CascadeRunOrderByWithRelationInput | CascadeRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CascadeRuns.
     */
    cursor?: CascadeRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CascadeRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CascadeRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CascadeRuns.
     */
    distinct?: CascadeRunScalarFieldEnum | CascadeRunScalarFieldEnum[]
  }

  /**
   * CascadeRun findFirstOrThrow
   */
  export type CascadeRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CascadeRun
     */
    select?: CascadeRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CascadeRun
     */
    omit?: CascadeRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeRunInclude<ExtArgs> | null
    /**
     * Filter, which CascadeRun to fetch.
     */
    where?: CascadeRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CascadeRuns to fetch.
     */
    orderBy?: CascadeRunOrderByWithRelationInput | CascadeRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CascadeRuns.
     */
    cursor?: CascadeRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CascadeRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CascadeRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CascadeRuns.
     */
    distinct?: CascadeRunScalarFieldEnum | CascadeRunScalarFieldEnum[]
  }

  /**
   * CascadeRun findMany
   */
  export type CascadeRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CascadeRun
     */
    select?: CascadeRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CascadeRun
     */
    omit?: CascadeRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeRunInclude<ExtArgs> | null
    /**
     * Filter, which CascadeRuns to fetch.
     */
    where?: CascadeRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CascadeRuns to fetch.
     */
    orderBy?: CascadeRunOrderByWithRelationInput | CascadeRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CascadeRuns.
     */
    cursor?: CascadeRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CascadeRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CascadeRuns.
     */
    skip?: number
    distinct?: CascadeRunScalarFieldEnum | CascadeRunScalarFieldEnum[]
  }

  /**
   * CascadeRun create
   */
  export type CascadeRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CascadeRun
     */
    select?: CascadeRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CascadeRun
     */
    omit?: CascadeRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeRunInclude<ExtArgs> | null
    /**
     * The data needed to create a CascadeRun.
     */
    data: XOR<CascadeRunCreateInput, CascadeRunUncheckedCreateInput>
  }

  /**
   * CascadeRun createMany
   */
  export type CascadeRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CascadeRuns.
     */
    data: CascadeRunCreateManyInput | CascadeRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CascadeRun createManyAndReturn
   */
  export type CascadeRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CascadeRun
     */
    select?: CascadeRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CascadeRun
     */
    omit?: CascadeRunOmit<ExtArgs> | null
    /**
     * The data used to create many CascadeRuns.
     */
    data: CascadeRunCreateManyInput | CascadeRunCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeRunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CascadeRun update
   */
  export type CascadeRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CascadeRun
     */
    select?: CascadeRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CascadeRun
     */
    omit?: CascadeRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeRunInclude<ExtArgs> | null
    /**
     * The data needed to update a CascadeRun.
     */
    data: XOR<CascadeRunUpdateInput, CascadeRunUncheckedUpdateInput>
    /**
     * Choose, which CascadeRun to update.
     */
    where: CascadeRunWhereUniqueInput
  }

  /**
   * CascadeRun updateMany
   */
  export type CascadeRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CascadeRuns.
     */
    data: XOR<CascadeRunUpdateManyMutationInput, CascadeRunUncheckedUpdateManyInput>
    /**
     * Filter which CascadeRuns to update
     */
    where?: CascadeRunWhereInput
    /**
     * Limit how many CascadeRuns to update.
     */
    limit?: number
  }

  /**
   * CascadeRun updateManyAndReturn
   */
  export type CascadeRunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CascadeRun
     */
    select?: CascadeRunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CascadeRun
     */
    omit?: CascadeRunOmit<ExtArgs> | null
    /**
     * The data used to update CascadeRuns.
     */
    data: XOR<CascadeRunUpdateManyMutationInput, CascadeRunUncheckedUpdateManyInput>
    /**
     * Filter which CascadeRuns to update
     */
    where?: CascadeRunWhereInput
    /**
     * Limit how many CascadeRuns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeRunIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CascadeRun upsert
   */
  export type CascadeRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CascadeRun
     */
    select?: CascadeRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CascadeRun
     */
    omit?: CascadeRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeRunInclude<ExtArgs> | null
    /**
     * The filter to search for the CascadeRun to update in case it exists.
     */
    where: CascadeRunWhereUniqueInput
    /**
     * In case the CascadeRun found by the `where` argument doesn't exist, create a new CascadeRun with this data.
     */
    create: XOR<CascadeRunCreateInput, CascadeRunUncheckedCreateInput>
    /**
     * In case the CascadeRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CascadeRunUpdateInput, CascadeRunUncheckedUpdateInput>
  }

  /**
   * CascadeRun delete
   */
  export type CascadeRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CascadeRun
     */
    select?: CascadeRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CascadeRun
     */
    omit?: CascadeRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeRunInclude<ExtArgs> | null
    /**
     * Filter which CascadeRun to delete.
     */
    where: CascadeRunWhereUniqueInput
  }

  /**
   * CascadeRun deleteMany
   */
  export type CascadeRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CascadeRuns to delete
     */
    where?: CascadeRunWhereInput
    /**
     * Limit how many CascadeRuns to delete.
     */
    limit?: number
  }

  /**
   * CascadeRun.cascade
   */
  export type CascadeRun$cascadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cascade
     */
    select?: CascadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cascade
     */
    omit?: CascadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeInclude<ExtArgs> | null
    where?: CascadeWhereInput
  }

  /**
   * CascadeRun.cascadeOutbox
   */
  export type CascadeRun$cascadeOutboxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CascadeOutbox
     */
    select?: CascadeOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CascadeOutbox
     */
    omit?: CascadeOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeOutboxInclude<ExtArgs> | null
    where?: CascadeOutboxWhereInput
    orderBy?: CascadeOutboxOrderByWithRelationInput | CascadeOutboxOrderByWithRelationInput[]
    cursor?: CascadeOutboxWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CascadeOutboxScalarFieldEnum | CascadeOutboxScalarFieldEnum[]
  }

  /**
   * CascadeRun without action
   */
  export type CascadeRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CascadeRun
     */
    select?: CascadeRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CascadeRun
     */
    omit?: CascadeRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeRunInclude<ExtArgs> | null
  }


  /**
   * Model CascadeOutbox
   */

  export type AggregateCascadeOutbox = {
    _count: CascadeOutboxCountAggregateOutputType | null
    _min: CascadeOutboxMinAggregateOutputType | null
    _max: CascadeOutboxMaxAggregateOutputType | null
  }

  export type CascadeOutboxMinAggregateOutputType = {
    id: string | null
    cascadeRunId: string | null
    status: string | null
  }

  export type CascadeOutboxMaxAggregateOutputType = {
    id: string | null
    cascadeRunId: string | null
    status: string | null
  }

  export type CascadeOutboxCountAggregateOutputType = {
    id: number
    metadata: number
    cascadeRunId: number
    status: number
    _all: number
  }


  export type CascadeOutboxMinAggregateInputType = {
    id?: true
    cascadeRunId?: true
    status?: true
  }

  export type CascadeOutboxMaxAggregateInputType = {
    id?: true
    cascadeRunId?: true
    status?: true
  }

  export type CascadeOutboxCountAggregateInputType = {
    id?: true
    metadata?: true
    cascadeRunId?: true
    status?: true
    _all?: true
  }

  export type CascadeOutboxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CascadeOutbox to aggregate.
     */
    where?: CascadeOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CascadeOutboxes to fetch.
     */
    orderBy?: CascadeOutboxOrderByWithRelationInput | CascadeOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CascadeOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CascadeOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CascadeOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CascadeOutboxes
    **/
    _count?: true | CascadeOutboxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CascadeOutboxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CascadeOutboxMaxAggregateInputType
  }

  export type GetCascadeOutboxAggregateType<T extends CascadeOutboxAggregateArgs> = {
        [P in keyof T & keyof AggregateCascadeOutbox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCascadeOutbox[P]>
      : GetScalarType<T[P], AggregateCascadeOutbox[P]>
  }




  export type CascadeOutboxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CascadeOutboxWhereInput
    orderBy?: CascadeOutboxOrderByWithAggregationInput | CascadeOutboxOrderByWithAggregationInput[]
    by: CascadeOutboxScalarFieldEnum[] | CascadeOutboxScalarFieldEnum
    having?: CascadeOutboxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CascadeOutboxCountAggregateInputType | true
    _min?: CascadeOutboxMinAggregateInputType
    _max?: CascadeOutboxMaxAggregateInputType
  }

  export type CascadeOutboxGroupByOutputType = {
    id: string
    metadata: JsonValue
    cascadeRunId: string
    status: string
    _count: CascadeOutboxCountAggregateOutputType | null
    _min: CascadeOutboxMinAggregateOutputType | null
    _max: CascadeOutboxMaxAggregateOutputType | null
  }

  type GetCascadeOutboxGroupByPayload<T extends CascadeOutboxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CascadeOutboxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CascadeOutboxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CascadeOutboxGroupByOutputType[P]>
            : GetScalarType<T[P], CascadeOutboxGroupByOutputType[P]>
        }
      >
    >


  export type CascadeOutboxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metadata?: boolean
    cascadeRunId?: boolean
    status?: boolean
    CascadeRun?: boolean | CascadeOutbox$CascadeRunArgs<ExtArgs>
  }, ExtArgs["result"]["cascadeOutbox"]>

  export type CascadeOutboxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metadata?: boolean
    cascadeRunId?: boolean
    status?: boolean
    CascadeRun?: boolean | CascadeOutbox$CascadeRunArgs<ExtArgs>
  }, ExtArgs["result"]["cascadeOutbox"]>

  export type CascadeOutboxSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metadata?: boolean
    cascadeRunId?: boolean
    status?: boolean
    CascadeRun?: boolean | CascadeOutbox$CascadeRunArgs<ExtArgs>
  }, ExtArgs["result"]["cascadeOutbox"]>

  export type CascadeOutboxSelectScalar = {
    id?: boolean
    metadata?: boolean
    cascadeRunId?: boolean
    status?: boolean
  }

  export type CascadeOutboxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "metadata" | "cascadeRunId" | "status", ExtArgs["result"]["cascadeOutbox"]>
  export type CascadeOutboxInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CascadeRun?: boolean | CascadeOutbox$CascadeRunArgs<ExtArgs>
  }
  export type CascadeOutboxIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CascadeRun?: boolean | CascadeOutbox$CascadeRunArgs<ExtArgs>
  }
  export type CascadeOutboxIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CascadeRun?: boolean | CascadeOutbox$CascadeRunArgs<ExtArgs>
  }

  export type $CascadeOutboxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CascadeOutbox"
    objects: {
      CascadeRun: Prisma.$CascadeRunPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      metadata: Prisma.JsonValue
      cascadeRunId: string
      status: string
    }, ExtArgs["result"]["cascadeOutbox"]>
    composites: {}
  }

  type CascadeOutboxGetPayload<S extends boolean | null | undefined | CascadeOutboxDefaultArgs> = $Result.GetResult<Prisma.$CascadeOutboxPayload, S>

  type CascadeOutboxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CascadeOutboxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CascadeOutboxCountAggregateInputType | true
    }

  export interface CascadeOutboxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CascadeOutbox'], meta: { name: 'CascadeOutbox' } }
    /**
     * Find zero or one CascadeOutbox that matches the filter.
     * @param {CascadeOutboxFindUniqueArgs} args - Arguments to find a CascadeOutbox
     * @example
     * // Get one CascadeOutbox
     * const cascadeOutbox = await prisma.cascadeOutbox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CascadeOutboxFindUniqueArgs>(args: SelectSubset<T, CascadeOutboxFindUniqueArgs<ExtArgs>>): Prisma__CascadeOutboxClient<$Result.GetResult<Prisma.$CascadeOutboxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CascadeOutbox that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CascadeOutboxFindUniqueOrThrowArgs} args - Arguments to find a CascadeOutbox
     * @example
     * // Get one CascadeOutbox
     * const cascadeOutbox = await prisma.cascadeOutbox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CascadeOutboxFindUniqueOrThrowArgs>(args: SelectSubset<T, CascadeOutboxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CascadeOutboxClient<$Result.GetResult<Prisma.$CascadeOutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CascadeOutbox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CascadeOutboxFindFirstArgs} args - Arguments to find a CascadeOutbox
     * @example
     * // Get one CascadeOutbox
     * const cascadeOutbox = await prisma.cascadeOutbox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CascadeOutboxFindFirstArgs>(args?: SelectSubset<T, CascadeOutboxFindFirstArgs<ExtArgs>>): Prisma__CascadeOutboxClient<$Result.GetResult<Prisma.$CascadeOutboxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CascadeOutbox that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CascadeOutboxFindFirstOrThrowArgs} args - Arguments to find a CascadeOutbox
     * @example
     * // Get one CascadeOutbox
     * const cascadeOutbox = await prisma.cascadeOutbox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CascadeOutboxFindFirstOrThrowArgs>(args?: SelectSubset<T, CascadeOutboxFindFirstOrThrowArgs<ExtArgs>>): Prisma__CascadeOutboxClient<$Result.GetResult<Prisma.$CascadeOutboxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CascadeOutboxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CascadeOutboxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CascadeOutboxes
     * const cascadeOutboxes = await prisma.cascadeOutbox.findMany()
     * 
     * // Get first 10 CascadeOutboxes
     * const cascadeOutboxes = await prisma.cascadeOutbox.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cascadeOutboxWithIdOnly = await prisma.cascadeOutbox.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CascadeOutboxFindManyArgs>(args?: SelectSubset<T, CascadeOutboxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CascadeOutboxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CascadeOutbox.
     * @param {CascadeOutboxCreateArgs} args - Arguments to create a CascadeOutbox.
     * @example
     * // Create one CascadeOutbox
     * const CascadeOutbox = await prisma.cascadeOutbox.create({
     *   data: {
     *     // ... data to create a CascadeOutbox
     *   }
     * })
     * 
     */
    create<T extends CascadeOutboxCreateArgs>(args: SelectSubset<T, CascadeOutboxCreateArgs<ExtArgs>>): Prisma__CascadeOutboxClient<$Result.GetResult<Prisma.$CascadeOutboxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CascadeOutboxes.
     * @param {CascadeOutboxCreateManyArgs} args - Arguments to create many CascadeOutboxes.
     * @example
     * // Create many CascadeOutboxes
     * const cascadeOutbox = await prisma.cascadeOutbox.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CascadeOutboxCreateManyArgs>(args?: SelectSubset<T, CascadeOutboxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CascadeOutboxes and returns the data saved in the database.
     * @param {CascadeOutboxCreateManyAndReturnArgs} args - Arguments to create many CascadeOutboxes.
     * @example
     * // Create many CascadeOutboxes
     * const cascadeOutbox = await prisma.cascadeOutbox.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CascadeOutboxes and only return the `id`
     * const cascadeOutboxWithIdOnly = await prisma.cascadeOutbox.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CascadeOutboxCreateManyAndReturnArgs>(args?: SelectSubset<T, CascadeOutboxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CascadeOutboxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CascadeOutbox.
     * @param {CascadeOutboxDeleteArgs} args - Arguments to delete one CascadeOutbox.
     * @example
     * // Delete one CascadeOutbox
     * const CascadeOutbox = await prisma.cascadeOutbox.delete({
     *   where: {
     *     // ... filter to delete one CascadeOutbox
     *   }
     * })
     * 
     */
    delete<T extends CascadeOutboxDeleteArgs>(args: SelectSubset<T, CascadeOutboxDeleteArgs<ExtArgs>>): Prisma__CascadeOutboxClient<$Result.GetResult<Prisma.$CascadeOutboxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CascadeOutbox.
     * @param {CascadeOutboxUpdateArgs} args - Arguments to update one CascadeOutbox.
     * @example
     * // Update one CascadeOutbox
     * const cascadeOutbox = await prisma.cascadeOutbox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CascadeOutboxUpdateArgs>(args: SelectSubset<T, CascadeOutboxUpdateArgs<ExtArgs>>): Prisma__CascadeOutboxClient<$Result.GetResult<Prisma.$CascadeOutboxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CascadeOutboxes.
     * @param {CascadeOutboxDeleteManyArgs} args - Arguments to filter CascadeOutboxes to delete.
     * @example
     * // Delete a few CascadeOutboxes
     * const { count } = await prisma.cascadeOutbox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CascadeOutboxDeleteManyArgs>(args?: SelectSubset<T, CascadeOutboxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CascadeOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CascadeOutboxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CascadeOutboxes
     * const cascadeOutbox = await prisma.cascadeOutbox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CascadeOutboxUpdateManyArgs>(args: SelectSubset<T, CascadeOutboxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CascadeOutboxes and returns the data updated in the database.
     * @param {CascadeOutboxUpdateManyAndReturnArgs} args - Arguments to update many CascadeOutboxes.
     * @example
     * // Update many CascadeOutboxes
     * const cascadeOutbox = await prisma.cascadeOutbox.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CascadeOutboxes and only return the `id`
     * const cascadeOutboxWithIdOnly = await prisma.cascadeOutbox.updateManyAndReturn({
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
    updateManyAndReturn<T extends CascadeOutboxUpdateManyAndReturnArgs>(args: SelectSubset<T, CascadeOutboxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CascadeOutboxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CascadeOutbox.
     * @param {CascadeOutboxUpsertArgs} args - Arguments to update or create a CascadeOutbox.
     * @example
     * // Update or create a CascadeOutbox
     * const cascadeOutbox = await prisma.cascadeOutbox.upsert({
     *   create: {
     *     // ... data to create a CascadeOutbox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CascadeOutbox we want to update
     *   }
     * })
     */
    upsert<T extends CascadeOutboxUpsertArgs>(args: SelectSubset<T, CascadeOutboxUpsertArgs<ExtArgs>>): Prisma__CascadeOutboxClient<$Result.GetResult<Prisma.$CascadeOutboxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CascadeOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CascadeOutboxCountArgs} args - Arguments to filter CascadeOutboxes to count.
     * @example
     * // Count the number of CascadeOutboxes
     * const count = await prisma.cascadeOutbox.count({
     *   where: {
     *     // ... the filter for the CascadeOutboxes we want to count
     *   }
     * })
    **/
    count<T extends CascadeOutboxCountArgs>(
      args?: Subset<T, CascadeOutboxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CascadeOutboxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CascadeOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CascadeOutboxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CascadeOutboxAggregateArgs>(args: Subset<T, CascadeOutboxAggregateArgs>): Prisma.PrismaPromise<GetCascadeOutboxAggregateType<T>>

    /**
     * Group by CascadeOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CascadeOutboxGroupByArgs} args - Group by arguments.
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
      T extends CascadeOutboxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CascadeOutboxGroupByArgs['orderBy'] }
        : { orderBy?: CascadeOutboxGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CascadeOutboxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCascadeOutboxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CascadeOutbox model
   */
  readonly fields: CascadeOutboxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CascadeOutbox.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CascadeOutboxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CascadeRun<T extends CascadeOutbox$CascadeRunArgs<ExtArgs> = {}>(args?: Subset<T, CascadeOutbox$CascadeRunArgs<ExtArgs>>): Prisma__CascadeRunClient<$Result.GetResult<Prisma.$CascadeRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CascadeOutbox model
   */ 
  interface CascadeOutboxFieldRefs {
    readonly id: FieldRef<"CascadeOutbox", 'String'>
    readonly metadata: FieldRef<"CascadeOutbox", 'Json'>
    readonly cascadeRunId: FieldRef<"CascadeOutbox", 'String'>
    readonly status: FieldRef<"CascadeOutbox", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CascadeOutbox findUnique
   */
  export type CascadeOutboxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CascadeOutbox
     */
    select?: CascadeOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CascadeOutbox
     */
    omit?: CascadeOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeOutboxInclude<ExtArgs> | null
    /**
     * Filter, which CascadeOutbox to fetch.
     */
    where: CascadeOutboxWhereUniqueInput
  }

  /**
   * CascadeOutbox findUniqueOrThrow
   */
  export type CascadeOutboxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CascadeOutbox
     */
    select?: CascadeOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CascadeOutbox
     */
    omit?: CascadeOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeOutboxInclude<ExtArgs> | null
    /**
     * Filter, which CascadeOutbox to fetch.
     */
    where: CascadeOutboxWhereUniqueInput
  }

  /**
   * CascadeOutbox findFirst
   */
  export type CascadeOutboxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CascadeOutbox
     */
    select?: CascadeOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CascadeOutbox
     */
    omit?: CascadeOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeOutboxInclude<ExtArgs> | null
    /**
     * Filter, which CascadeOutbox to fetch.
     */
    where?: CascadeOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CascadeOutboxes to fetch.
     */
    orderBy?: CascadeOutboxOrderByWithRelationInput | CascadeOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CascadeOutboxes.
     */
    cursor?: CascadeOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CascadeOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CascadeOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CascadeOutboxes.
     */
    distinct?: CascadeOutboxScalarFieldEnum | CascadeOutboxScalarFieldEnum[]
  }

  /**
   * CascadeOutbox findFirstOrThrow
   */
  export type CascadeOutboxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CascadeOutbox
     */
    select?: CascadeOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CascadeOutbox
     */
    omit?: CascadeOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeOutboxInclude<ExtArgs> | null
    /**
     * Filter, which CascadeOutbox to fetch.
     */
    where?: CascadeOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CascadeOutboxes to fetch.
     */
    orderBy?: CascadeOutboxOrderByWithRelationInput | CascadeOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CascadeOutboxes.
     */
    cursor?: CascadeOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CascadeOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CascadeOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CascadeOutboxes.
     */
    distinct?: CascadeOutboxScalarFieldEnum | CascadeOutboxScalarFieldEnum[]
  }

  /**
   * CascadeOutbox findMany
   */
  export type CascadeOutboxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CascadeOutbox
     */
    select?: CascadeOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CascadeOutbox
     */
    omit?: CascadeOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeOutboxInclude<ExtArgs> | null
    /**
     * Filter, which CascadeOutboxes to fetch.
     */
    where?: CascadeOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CascadeOutboxes to fetch.
     */
    orderBy?: CascadeOutboxOrderByWithRelationInput | CascadeOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CascadeOutboxes.
     */
    cursor?: CascadeOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CascadeOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CascadeOutboxes.
     */
    skip?: number
    distinct?: CascadeOutboxScalarFieldEnum | CascadeOutboxScalarFieldEnum[]
  }

  /**
   * CascadeOutbox create
   */
  export type CascadeOutboxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CascadeOutbox
     */
    select?: CascadeOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CascadeOutbox
     */
    omit?: CascadeOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeOutboxInclude<ExtArgs> | null
    /**
     * The data needed to create a CascadeOutbox.
     */
    data: XOR<CascadeOutboxCreateInput, CascadeOutboxUncheckedCreateInput>
  }

  /**
   * CascadeOutbox createMany
   */
  export type CascadeOutboxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CascadeOutboxes.
     */
    data: CascadeOutboxCreateManyInput | CascadeOutboxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CascadeOutbox createManyAndReturn
   */
  export type CascadeOutboxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CascadeOutbox
     */
    select?: CascadeOutboxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CascadeOutbox
     */
    omit?: CascadeOutboxOmit<ExtArgs> | null
    /**
     * The data used to create many CascadeOutboxes.
     */
    data: CascadeOutboxCreateManyInput | CascadeOutboxCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeOutboxIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CascadeOutbox update
   */
  export type CascadeOutboxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CascadeOutbox
     */
    select?: CascadeOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CascadeOutbox
     */
    omit?: CascadeOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeOutboxInclude<ExtArgs> | null
    /**
     * The data needed to update a CascadeOutbox.
     */
    data: XOR<CascadeOutboxUpdateInput, CascadeOutboxUncheckedUpdateInput>
    /**
     * Choose, which CascadeOutbox to update.
     */
    where: CascadeOutboxWhereUniqueInput
  }

  /**
   * CascadeOutbox updateMany
   */
  export type CascadeOutboxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CascadeOutboxes.
     */
    data: XOR<CascadeOutboxUpdateManyMutationInput, CascadeOutboxUncheckedUpdateManyInput>
    /**
     * Filter which CascadeOutboxes to update
     */
    where?: CascadeOutboxWhereInput
    /**
     * Limit how many CascadeOutboxes to update.
     */
    limit?: number
  }

  /**
   * CascadeOutbox updateManyAndReturn
   */
  export type CascadeOutboxUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CascadeOutbox
     */
    select?: CascadeOutboxSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CascadeOutbox
     */
    omit?: CascadeOutboxOmit<ExtArgs> | null
    /**
     * The data used to update CascadeOutboxes.
     */
    data: XOR<CascadeOutboxUpdateManyMutationInput, CascadeOutboxUncheckedUpdateManyInput>
    /**
     * Filter which CascadeOutboxes to update
     */
    where?: CascadeOutboxWhereInput
    /**
     * Limit how many CascadeOutboxes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeOutboxIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CascadeOutbox upsert
   */
  export type CascadeOutboxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CascadeOutbox
     */
    select?: CascadeOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CascadeOutbox
     */
    omit?: CascadeOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeOutboxInclude<ExtArgs> | null
    /**
     * The filter to search for the CascadeOutbox to update in case it exists.
     */
    where: CascadeOutboxWhereUniqueInput
    /**
     * In case the CascadeOutbox found by the `where` argument doesn't exist, create a new CascadeOutbox with this data.
     */
    create: XOR<CascadeOutboxCreateInput, CascadeOutboxUncheckedCreateInput>
    /**
     * In case the CascadeOutbox was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CascadeOutboxUpdateInput, CascadeOutboxUncheckedUpdateInput>
  }

  /**
   * CascadeOutbox delete
   */
  export type CascadeOutboxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CascadeOutbox
     */
    select?: CascadeOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CascadeOutbox
     */
    omit?: CascadeOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeOutboxInclude<ExtArgs> | null
    /**
     * Filter which CascadeOutbox to delete.
     */
    where: CascadeOutboxWhereUniqueInput
  }

  /**
   * CascadeOutbox deleteMany
   */
  export type CascadeOutboxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CascadeOutboxes to delete
     */
    where?: CascadeOutboxWhereInput
    /**
     * Limit how many CascadeOutboxes to delete.
     */
    limit?: number
  }

  /**
   * CascadeOutbox.CascadeRun
   */
  export type CascadeOutbox$CascadeRunArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CascadeRun
     */
    select?: CascadeRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CascadeRun
     */
    omit?: CascadeRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeRunInclude<ExtArgs> | null
    where?: CascadeRunWhereInput
  }

  /**
   * CascadeOutbox without action
   */
  export type CascadeOutboxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CascadeOutbox
     */
    select?: CascadeOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CascadeOutbox
     */
    omit?: CascadeOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CascadeOutboxInclude<ExtArgs> | null
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
    cascadeId: string | null
  }

  export type TriggerMaxAggregateOutputType = {
    id: string | null
    triggerId: string | null
    cascadeId: string | null
  }

  export type TriggerCountAggregateOutputType = {
    id: number
    triggerId: number
    cascadeId: number
    _all: number
  }


  export type TriggerMinAggregateInputType = {
    id?: true
    triggerId?: true
    cascadeId?: true
  }

  export type TriggerMaxAggregateInputType = {
    id?: true
    triggerId?: true
    cascadeId?: true
  }

  export type TriggerCountAggregateInputType = {
    id?: true
    triggerId?: true
    cascadeId?: true
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
    cascadeId: string
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
    cascadeId?: boolean
    type?: boolean | AvailableTriggerDefaultArgs<ExtArgs>
    cascade?: boolean | CascadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggerId?: boolean
    cascadeId?: boolean
    type?: boolean | AvailableTriggerDefaultArgs<ExtArgs>
    cascade?: boolean | CascadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triggerId?: boolean
    cascadeId?: boolean
    type?: boolean | AvailableTriggerDefaultArgs<ExtArgs>
    cascade?: boolean | CascadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectScalar = {
    id?: boolean
    triggerId?: boolean
    cascadeId?: boolean
  }

  export type TriggerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "triggerId" | "cascadeId", ExtArgs["result"]["trigger"]>
  export type TriggerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AvailableTriggerDefaultArgs<ExtArgs>
    cascade?: boolean | CascadeDefaultArgs<ExtArgs>
  }
  export type TriggerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AvailableTriggerDefaultArgs<ExtArgs>
    cascade?: boolean | CascadeDefaultArgs<ExtArgs>
  }
  export type TriggerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AvailableTriggerDefaultArgs<ExtArgs>
    cascade?: boolean | CascadeDefaultArgs<ExtArgs>
  }

  export type $TriggerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trigger"
    objects: {
      type: Prisma.$AvailableTriggerPayload<ExtArgs>
      cascade: Prisma.$CascadePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      triggerId: string
      cascadeId: string
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
    cascade<T extends CascadeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CascadeDefaultArgs<ExtArgs>>): Prisma__CascadeClient<$Result.GetResult<Prisma.$CascadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly cascadeId: FieldRef<"Trigger", 'String'>
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
    cascadeId: string | null
  }

  export type ActionMaxAggregateOutputType = {
    id: string | null
    actionId: string | null
    cascadeId: string | null
  }

  export type ActionCountAggregateOutputType = {
    id: number
    actionId: number
    cascadeId: number
    _all: number
  }


  export type ActionMinAggregateInputType = {
    id?: true
    actionId?: true
    cascadeId?: true
  }

  export type ActionMaxAggregateInputType = {
    id?: true
    actionId?: true
    cascadeId?: true
  }

  export type ActionCountAggregateInputType = {
    id?: true
    actionId?: true
    cascadeId?: true
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
    cascadeId: string
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
    cascadeId?: boolean
    type?: boolean | AvailableActionsDefaultArgs<ExtArgs>
    cascade?: boolean | CascadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionId?: boolean
    cascadeId?: boolean
    type?: boolean | AvailableActionsDefaultArgs<ExtArgs>
    cascade?: boolean | CascadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionId?: boolean
    cascadeId?: boolean
    type?: boolean | AvailableActionsDefaultArgs<ExtArgs>
    cascade?: boolean | CascadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectScalar = {
    id?: boolean
    actionId?: boolean
    cascadeId?: boolean
  }

  export type ActionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "actionId" | "cascadeId", ExtArgs["result"]["action"]>
  export type ActionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AvailableActionsDefaultArgs<ExtArgs>
    cascade?: boolean | CascadeDefaultArgs<ExtArgs>
  }
  export type ActionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AvailableActionsDefaultArgs<ExtArgs>
    cascade?: boolean | CascadeDefaultArgs<ExtArgs>
  }
  export type ActionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | AvailableActionsDefaultArgs<ExtArgs>
    cascade?: boolean | CascadeDefaultArgs<ExtArgs>
  }

  export type $ActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Action"
    objects: {
      type: Prisma.$AvailableActionsPayload<ExtArgs>
      cascade: Prisma.$CascadePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      actionId: string
      cascadeId: string
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
    cascade<T extends CascadeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CascadeDefaultArgs<ExtArgs>>): Prisma__CascadeClient<$Result.GetResult<Prisma.$CascadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly cascadeId: FieldRef<"Action", 'String'>
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
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CascadeScalarFieldEnum: {
    id: 'id',
    triggerId: 'triggerId'
  };

  export type CascadeScalarFieldEnum = (typeof CascadeScalarFieldEnum)[keyof typeof CascadeScalarFieldEnum]


  export const CascadeRunScalarFieldEnum: {
    id: 'id',
    cascadeId: 'cascadeId',
    status: 'status',
    metadata: 'metadata'
  };

  export type CascadeRunScalarFieldEnum = (typeof CascadeRunScalarFieldEnum)[keyof typeof CascadeRunScalarFieldEnum]


  export const CascadeOutboxScalarFieldEnum: {
    id: 'id',
    metadata: 'metadata',
    cascadeRunId: 'cascadeRunId',
    status: 'status'
  };

  export type CascadeOutboxScalarFieldEnum = (typeof CascadeOutboxScalarFieldEnum)[keyof typeof CascadeOutboxScalarFieldEnum]


  export const TriggerScalarFieldEnum: {
    id: 'id',
    triggerId: 'triggerId',
    cascadeId: 'cascadeId'
  };

  export type TriggerScalarFieldEnum = (typeof TriggerScalarFieldEnum)[keyof typeof TriggerScalarFieldEnum]


  export const ActionScalarFieldEnum: {
    id: 'id',
    actionId: 'actionId',
    cascadeId: 'cascadeId'
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
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
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
  }

  export type CascadeWhereInput = {
    AND?: CascadeWhereInput | CascadeWhereInput[]
    OR?: CascadeWhereInput[]
    NOT?: CascadeWhereInput | CascadeWhereInput[]
    id?: StringFilter<"Cascade"> | string
    triggerId?: StringFilter<"Cascade"> | string
    trigger?: XOR<TriggerNullableScalarRelationFilter, TriggerWhereInput> | null
    action?: ActionListRelationFilter
    CascadeRuns?: CascadeRunListRelationFilter
  }

  export type CascadeOrderByWithRelationInput = {
    id?: SortOrder
    triggerId?: SortOrder
    trigger?: TriggerOrderByWithRelationInput
    action?: ActionOrderByRelationAggregateInput
    CascadeRuns?: CascadeRunOrderByRelationAggregateInput
  }

  export type CascadeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CascadeWhereInput | CascadeWhereInput[]
    OR?: CascadeWhereInput[]
    NOT?: CascadeWhereInput | CascadeWhereInput[]
    triggerId?: StringFilter<"Cascade"> | string
    trigger?: XOR<TriggerNullableScalarRelationFilter, TriggerWhereInput> | null
    action?: ActionListRelationFilter
    CascadeRuns?: CascadeRunListRelationFilter
  }, "id">

  export type CascadeOrderByWithAggregationInput = {
    id?: SortOrder
    triggerId?: SortOrder
    _count?: CascadeCountOrderByAggregateInput
    _max?: CascadeMaxOrderByAggregateInput
    _min?: CascadeMinOrderByAggregateInput
  }

  export type CascadeScalarWhereWithAggregatesInput = {
    AND?: CascadeScalarWhereWithAggregatesInput | CascadeScalarWhereWithAggregatesInput[]
    OR?: CascadeScalarWhereWithAggregatesInput[]
    NOT?: CascadeScalarWhereWithAggregatesInput | CascadeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cascade"> | string
    triggerId?: StringWithAggregatesFilter<"Cascade"> | string
  }

  export type CascadeRunWhereInput = {
    AND?: CascadeRunWhereInput | CascadeRunWhereInput[]
    OR?: CascadeRunWhereInput[]
    NOT?: CascadeRunWhereInput | CascadeRunWhereInput[]
    id?: StringFilter<"CascadeRun"> | string
    cascadeId?: StringFilter<"CascadeRun"> | string
    status?: StringFilter<"CascadeRun"> | string
    metadata?: JsonFilter<"CascadeRun">
    cascade?: XOR<CascadeNullableScalarRelationFilter, CascadeWhereInput> | null
    cascadeOutbox?: CascadeOutboxListRelationFilter
  }

  export type CascadeRunOrderByWithRelationInput = {
    id?: SortOrder
    cascadeId?: SortOrder
    status?: SortOrder
    metadata?: SortOrder
    cascade?: CascadeOrderByWithRelationInput
    cascadeOutbox?: CascadeOutboxOrderByRelationAggregateInput
  }

  export type CascadeRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CascadeRunWhereInput | CascadeRunWhereInput[]
    OR?: CascadeRunWhereInput[]
    NOT?: CascadeRunWhereInput | CascadeRunWhereInput[]
    cascadeId?: StringFilter<"CascadeRun"> | string
    status?: StringFilter<"CascadeRun"> | string
    metadata?: JsonFilter<"CascadeRun">
    cascade?: XOR<CascadeNullableScalarRelationFilter, CascadeWhereInput> | null
    cascadeOutbox?: CascadeOutboxListRelationFilter
  }, "id">

  export type CascadeRunOrderByWithAggregationInput = {
    id?: SortOrder
    cascadeId?: SortOrder
    status?: SortOrder
    metadata?: SortOrder
    _count?: CascadeRunCountOrderByAggregateInput
    _max?: CascadeRunMaxOrderByAggregateInput
    _min?: CascadeRunMinOrderByAggregateInput
  }

  export type CascadeRunScalarWhereWithAggregatesInput = {
    AND?: CascadeRunScalarWhereWithAggregatesInput | CascadeRunScalarWhereWithAggregatesInput[]
    OR?: CascadeRunScalarWhereWithAggregatesInput[]
    NOT?: CascadeRunScalarWhereWithAggregatesInput | CascadeRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CascadeRun"> | string
    cascadeId?: StringWithAggregatesFilter<"CascadeRun"> | string
    status?: StringWithAggregatesFilter<"CascadeRun"> | string
    metadata?: JsonWithAggregatesFilter<"CascadeRun">
  }

  export type CascadeOutboxWhereInput = {
    AND?: CascadeOutboxWhereInput | CascadeOutboxWhereInput[]
    OR?: CascadeOutboxWhereInput[]
    NOT?: CascadeOutboxWhereInput | CascadeOutboxWhereInput[]
    id?: StringFilter<"CascadeOutbox"> | string
    metadata?: JsonFilter<"CascadeOutbox">
    cascadeRunId?: StringFilter<"CascadeOutbox"> | string
    status?: StringFilter<"CascadeOutbox"> | string
    CascadeRun?: XOR<CascadeRunNullableScalarRelationFilter, CascadeRunWhereInput> | null
  }

  export type CascadeOutboxOrderByWithRelationInput = {
    id?: SortOrder
    metadata?: SortOrder
    cascadeRunId?: SortOrder
    status?: SortOrder
    CascadeRun?: CascadeRunOrderByWithRelationInput
  }

  export type CascadeOutboxWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CascadeOutboxWhereInput | CascadeOutboxWhereInput[]
    OR?: CascadeOutboxWhereInput[]
    NOT?: CascadeOutboxWhereInput | CascadeOutboxWhereInput[]
    metadata?: JsonFilter<"CascadeOutbox">
    cascadeRunId?: StringFilter<"CascadeOutbox"> | string
    status?: StringFilter<"CascadeOutbox"> | string
    CascadeRun?: XOR<CascadeRunNullableScalarRelationFilter, CascadeRunWhereInput> | null
  }, "id">

  export type CascadeOutboxOrderByWithAggregationInput = {
    id?: SortOrder
    metadata?: SortOrder
    cascadeRunId?: SortOrder
    status?: SortOrder
    _count?: CascadeOutboxCountOrderByAggregateInput
    _max?: CascadeOutboxMaxOrderByAggregateInput
    _min?: CascadeOutboxMinOrderByAggregateInput
  }

  export type CascadeOutboxScalarWhereWithAggregatesInput = {
    AND?: CascadeOutboxScalarWhereWithAggregatesInput | CascadeOutboxScalarWhereWithAggregatesInput[]
    OR?: CascadeOutboxScalarWhereWithAggregatesInput[]
    NOT?: CascadeOutboxScalarWhereWithAggregatesInput | CascadeOutboxScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CascadeOutbox"> | string
    metadata?: JsonWithAggregatesFilter<"CascadeOutbox">
    cascadeRunId?: StringWithAggregatesFilter<"CascadeOutbox"> | string
    status?: StringWithAggregatesFilter<"CascadeOutbox"> | string
  }

  export type TriggerWhereInput = {
    AND?: TriggerWhereInput | TriggerWhereInput[]
    OR?: TriggerWhereInput[]
    NOT?: TriggerWhereInput | TriggerWhereInput[]
    id?: StringFilter<"Trigger"> | string
    triggerId?: StringFilter<"Trigger"> | string
    cascadeId?: StringFilter<"Trigger"> | string
    type?: XOR<AvailableTriggerScalarRelationFilter, AvailableTriggerWhereInput>
    cascade?: XOR<CascadeScalarRelationFilter, CascadeWhereInput>
  }

  export type TriggerOrderByWithRelationInput = {
    id?: SortOrder
    triggerId?: SortOrder
    cascadeId?: SortOrder
    type?: AvailableTriggerOrderByWithRelationInput
    cascade?: CascadeOrderByWithRelationInput
  }

  export type TriggerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cascadeId?: string
    AND?: TriggerWhereInput | TriggerWhereInput[]
    OR?: TriggerWhereInput[]
    NOT?: TriggerWhereInput | TriggerWhereInput[]
    triggerId?: StringFilter<"Trigger"> | string
    type?: XOR<AvailableTriggerScalarRelationFilter, AvailableTriggerWhereInput>
    cascade?: XOR<CascadeScalarRelationFilter, CascadeWhereInput>
  }, "id" | "cascadeId">

  export type TriggerOrderByWithAggregationInput = {
    id?: SortOrder
    triggerId?: SortOrder
    cascadeId?: SortOrder
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
    cascadeId?: StringWithAggregatesFilter<"Trigger"> | string
  }

  export type ActionWhereInput = {
    AND?: ActionWhereInput | ActionWhereInput[]
    OR?: ActionWhereInput[]
    NOT?: ActionWhereInput | ActionWhereInput[]
    id?: StringFilter<"Action"> | string
    actionId?: StringFilter<"Action"> | string
    cascadeId?: StringFilter<"Action"> | string
    type?: XOR<AvailableActionsScalarRelationFilter, AvailableActionsWhereInput>
    cascade?: XOR<CascadeScalarRelationFilter, CascadeWhereInput>
  }

  export type ActionOrderByWithRelationInput = {
    id?: SortOrder
    actionId?: SortOrder
    cascadeId?: SortOrder
    type?: AvailableActionsOrderByWithRelationInput
    cascade?: CascadeOrderByWithRelationInput
  }

  export type ActionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cascadeId?: string
    AND?: ActionWhereInput | ActionWhereInput[]
    OR?: ActionWhereInput[]
    NOT?: ActionWhereInput | ActionWhereInput[]
    actionId?: StringFilter<"Action"> | string
    type?: XOR<AvailableActionsScalarRelationFilter, AvailableActionsWhereInput>
    cascade?: XOR<CascadeScalarRelationFilter, CascadeWhereInput>
  }, "id" | "cascadeId">

  export type ActionOrderByWithAggregationInput = {
    id?: SortOrder
    actionId?: SortOrder
    cascadeId?: SortOrder
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
    cascadeId?: StringWithAggregatesFilter<"Action"> | string
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
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    password: string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    password: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type CascadeCreateInput = {
    id?: string
    triggerId: string
    trigger?: TriggerCreateNestedOneWithoutCascadeInput
    action?: ActionCreateNestedManyWithoutCascadeInput
    CascadeRuns?: CascadeRunCreateNestedManyWithoutCascadeInput
  }

  export type CascadeUncheckedCreateInput = {
    id?: string
    triggerId: string
    trigger?: TriggerUncheckedCreateNestedOneWithoutCascadeInput
    action?: ActionUncheckedCreateNestedManyWithoutCascadeInput
    CascadeRuns?: CascadeRunUncheckedCreateNestedManyWithoutCascadeInput
  }

  export type CascadeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUpdateOneWithoutCascadeNestedInput
    action?: ActionUpdateManyWithoutCascadeNestedInput
    CascadeRuns?: CascadeRunUpdateManyWithoutCascadeNestedInput
  }

  export type CascadeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUncheckedUpdateOneWithoutCascadeNestedInput
    action?: ActionUncheckedUpdateManyWithoutCascadeNestedInput
    CascadeRuns?: CascadeRunUncheckedUpdateManyWithoutCascadeNestedInput
  }

  export type CascadeCreateManyInput = {
    id?: string
    triggerId: string
  }

  export type CascadeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
  }

  export type CascadeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
  }

  export type CascadeRunCreateInput = {
    id?: string
    status: string
    metadata: JsonNullValueInput | InputJsonValue
    cascade?: CascadeCreateNestedOneWithoutCascadeRunsInput
    cascadeOutbox?: CascadeOutboxCreateNestedManyWithoutCascadeRunInput
  }

  export type CascadeRunUncheckedCreateInput = {
    id?: string
    cascadeId: string
    status: string
    metadata: JsonNullValueInput | InputJsonValue
    cascadeOutbox?: CascadeOutboxUncheckedCreateNestedManyWithoutCascadeRunInput
  }

  export type CascadeRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    cascade?: CascadeUpdateOneWithoutCascadeRunsNestedInput
    cascadeOutbox?: CascadeOutboxUpdateManyWithoutCascadeRunNestedInput
  }

  export type CascadeRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cascadeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    cascadeOutbox?: CascadeOutboxUncheckedUpdateManyWithoutCascadeRunNestedInput
  }

  export type CascadeRunCreateManyInput = {
    id?: string
    cascadeId: string
    status: string
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type CascadeRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type CascadeRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cascadeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type CascadeOutboxCreateInput = {
    id?: string
    metadata: JsonNullValueInput | InputJsonValue
    status: string
    CascadeRun?: CascadeRunCreateNestedOneWithoutCascadeOutboxInput
  }

  export type CascadeOutboxUncheckedCreateInput = {
    id?: string
    metadata: JsonNullValueInput | InputJsonValue
    cascadeRunId: string
    status: string
  }

  export type CascadeOutboxUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    CascadeRun?: CascadeRunUpdateOneWithoutCascadeOutboxNestedInput
  }

  export type CascadeOutboxUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    cascadeRunId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CascadeOutboxCreateManyInput = {
    id?: string
    metadata: JsonNullValueInput | InputJsonValue
    cascadeRunId: string
    status: string
  }

  export type CascadeOutboxUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CascadeOutboxUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    cascadeRunId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerCreateInput = {
    id?: string
    type: AvailableTriggerCreateNestedOneWithoutTriggerInput
    cascade: CascadeCreateNestedOneWithoutTriggerInput
  }

  export type TriggerUncheckedCreateInput = {
    id?: string
    triggerId: string
    cascadeId: string
  }

  export type TriggerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: AvailableTriggerUpdateOneRequiredWithoutTriggerNestedInput
    cascade?: CascadeUpdateOneRequiredWithoutTriggerNestedInput
  }

  export type TriggerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    cascadeId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerCreateManyInput = {
    id?: string
    triggerId: string
    cascadeId: string
  }

  export type TriggerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    cascadeId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionCreateInput = {
    id?: string
    type: AvailableActionsCreateNestedOneWithoutActionInput
    cascade: CascadeCreateNestedOneWithoutActionInput
  }

  export type ActionUncheckedCreateInput = {
    id?: string
    actionId: string
    cascadeId: string
  }

  export type ActionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: AvailableActionsUpdateOneRequiredWithoutActionNestedInput
    cascade?: CascadeUpdateOneRequiredWithoutActionNestedInput
  }

  export type ActionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
    cascadeId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionCreateManyInput = {
    id?: string
    actionId: string
    cascadeId: string
  }

  export type ActionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ActionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
    cascadeId?: StringFieldUpdateOperationsInput | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
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

  export type TriggerNullableScalarRelationFilter = {
    is?: TriggerWhereInput | null
    isNot?: TriggerWhereInput | null
  }

  export type ActionListRelationFilter = {
    every?: ActionWhereInput
    some?: ActionWhereInput
    none?: ActionWhereInput
  }

  export type CascadeRunListRelationFilter = {
    every?: CascadeRunWhereInput
    some?: CascadeRunWhereInput
    none?: CascadeRunWhereInput
  }

  export type ActionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CascadeRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CascadeCountOrderByAggregateInput = {
    id?: SortOrder
    triggerId?: SortOrder
  }

  export type CascadeMaxOrderByAggregateInput = {
    id?: SortOrder
    triggerId?: SortOrder
  }

  export type CascadeMinOrderByAggregateInput = {
    id?: SortOrder
    triggerId?: SortOrder
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

  export type CascadeNullableScalarRelationFilter = {
    is?: CascadeWhereInput | null
    isNot?: CascadeWhereInput | null
  }

  export type CascadeOutboxListRelationFilter = {
    every?: CascadeOutboxWhereInput
    some?: CascadeOutboxWhereInput
    none?: CascadeOutboxWhereInput
  }

  export type CascadeOutboxOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CascadeRunCountOrderByAggregateInput = {
    id?: SortOrder
    cascadeId?: SortOrder
    status?: SortOrder
    metadata?: SortOrder
  }

  export type CascadeRunMaxOrderByAggregateInput = {
    id?: SortOrder
    cascadeId?: SortOrder
    status?: SortOrder
  }

  export type CascadeRunMinOrderByAggregateInput = {
    id?: SortOrder
    cascadeId?: SortOrder
    status?: SortOrder
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

  export type CascadeRunNullableScalarRelationFilter = {
    is?: CascadeRunWhereInput | null
    isNot?: CascadeRunWhereInput | null
  }

  export type CascadeOutboxCountOrderByAggregateInput = {
    id?: SortOrder
    metadata?: SortOrder
    cascadeRunId?: SortOrder
    status?: SortOrder
  }

  export type CascadeOutboxMaxOrderByAggregateInput = {
    id?: SortOrder
    cascadeRunId?: SortOrder
    status?: SortOrder
  }

  export type CascadeOutboxMinOrderByAggregateInput = {
    id?: SortOrder
    cascadeRunId?: SortOrder
    status?: SortOrder
  }

  export type AvailableTriggerScalarRelationFilter = {
    is?: AvailableTriggerWhereInput
    isNot?: AvailableTriggerWhereInput
  }

  export type CascadeScalarRelationFilter = {
    is?: CascadeWhereInput
    isNot?: CascadeWhereInput
  }

  export type TriggerCountOrderByAggregateInput = {
    id?: SortOrder
    triggerId?: SortOrder
    cascadeId?: SortOrder
  }

  export type TriggerMaxOrderByAggregateInput = {
    id?: SortOrder
    triggerId?: SortOrder
    cascadeId?: SortOrder
  }

  export type TriggerMinOrderByAggregateInput = {
    id?: SortOrder
    triggerId?: SortOrder
    cascadeId?: SortOrder
  }

  export type AvailableActionsScalarRelationFilter = {
    is?: AvailableActionsWhereInput
    isNot?: AvailableActionsWhereInput
  }

  export type ActionCountOrderByAggregateInput = {
    id?: SortOrder
    actionId?: SortOrder
    cascadeId?: SortOrder
  }

  export type ActionMaxOrderByAggregateInput = {
    id?: SortOrder
    actionId?: SortOrder
    cascadeId?: SortOrder
  }

  export type ActionMinOrderByAggregateInput = {
    id?: SortOrder
    actionId?: SortOrder
    cascadeId?: SortOrder
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TriggerCreateNestedOneWithoutCascadeInput = {
    create?: XOR<TriggerCreateWithoutCascadeInput, TriggerUncheckedCreateWithoutCascadeInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutCascadeInput
    connect?: TriggerWhereUniqueInput
  }

  export type ActionCreateNestedManyWithoutCascadeInput = {
    create?: XOR<ActionCreateWithoutCascadeInput, ActionUncheckedCreateWithoutCascadeInput> | ActionCreateWithoutCascadeInput[] | ActionUncheckedCreateWithoutCascadeInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutCascadeInput | ActionCreateOrConnectWithoutCascadeInput[]
    createMany?: ActionCreateManyCascadeInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type CascadeRunCreateNestedManyWithoutCascadeInput = {
    create?: XOR<CascadeRunCreateWithoutCascadeInput, CascadeRunUncheckedCreateWithoutCascadeInput> | CascadeRunCreateWithoutCascadeInput[] | CascadeRunUncheckedCreateWithoutCascadeInput[]
    connectOrCreate?: CascadeRunCreateOrConnectWithoutCascadeInput | CascadeRunCreateOrConnectWithoutCascadeInput[]
    createMany?: CascadeRunCreateManyCascadeInputEnvelope
    connect?: CascadeRunWhereUniqueInput | CascadeRunWhereUniqueInput[]
  }

  export type TriggerUncheckedCreateNestedOneWithoutCascadeInput = {
    create?: XOR<TriggerCreateWithoutCascadeInput, TriggerUncheckedCreateWithoutCascadeInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutCascadeInput
    connect?: TriggerWhereUniqueInput
  }

  export type ActionUncheckedCreateNestedManyWithoutCascadeInput = {
    create?: XOR<ActionCreateWithoutCascadeInput, ActionUncheckedCreateWithoutCascadeInput> | ActionCreateWithoutCascadeInput[] | ActionUncheckedCreateWithoutCascadeInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutCascadeInput | ActionCreateOrConnectWithoutCascadeInput[]
    createMany?: ActionCreateManyCascadeInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type CascadeRunUncheckedCreateNestedManyWithoutCascadeInput = {
    create?: XOR<CascadeRunCreateWithoutCascadeInput, CascadeRunUncheckedCreateWithoutCascadeInput> | CascadeRunCreateWithoutCascadeInput[] | CascadeRunUncheckedCreateWithoutCascadeInput[]
    connectOrCreate?: CascadeRunCreateOrConnectWithoutCascadeInput | CascadeRunCreateOrConnectWithoutCascadeInput[]
    createMany?: CascadeRunCreateManyCascadeInputEnvelope
    connect?: CascadeRunWhereUniqueInput | CascadeRunWhereUniqueInput[]
  }

  export type TriggerUpdateOneWithoutCascadeNestedInput = {
    create?: XOR<TriggerCreateWithoutCascadeInput, TriggerUncheckedCreateWithoutCascadeInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutCascadeInput
    upsert?: TriggerUpsertWithoutCascadeInput
    disconnect?: TriggerWhereInput | boolean
    delete?: TriggerWhereInput | boolean
    connect?: TriggerWhereUniqueInput
    update?: XOR<XOR<TriggerUpdateToOneWithWhereWithoutCascadeInput, TriggerUpdateWithoutCascadeInput>, TriggerUncheckedUpdateWithoutCascadeInput>
  }

  export type ActionUpdateManyWithoutCascadeNestedInput = {
    create?: XOR<ActionCreateWithoutCascadeInput, ActionUncheckedCreateWithoutCascadeInput> | ActionCreateWithoutCascadeInput[] | ActionUncheckedCreateWithoutCascadeInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutCascadeInput | ActionCreateOrConnectWithoutCascadeInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutCascadeInput | ActionUpsertWithWhereUniqueWithoutCascadeInput[]
    createMany?: ActionCreateManyCascadeInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutCascadeInput | ActionUpdateWithWhereUniqueWithoutCascadeInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutCascadeInput | ActionUpdateManyWithWhereWithoutCascadeInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type CascadeRunUpdateManyWithoutCascadeNestedInput = {
    create?: XOR<CascadeRunCreateWithoutCascadeInput, CascadeRunUncheckedCreateWithoutCascadeInput> | CascadeRunCreateWithoutCascadeInput[] | CascadeRunUncheckedCreateWithoutCascadeInput[]
    connectOrCreate?: CascadeRunCreateOrConnectWithoutCascadeInput | CascadeRunCreateOrConnectWithoutCascadeInput[]
    upsert?: CascadeRunUpsertWithWhereUniqueWithoutCascadeInput | CascadeRunUpsertWithWhereUniqueWithoutCascadeInput[]
    createMany?: CascadeRunCreateManyCascadeInputEnvelope
    set?: CascadeRunWhereUniqueInput | CascadeRunWhereUniqueInput[]
    disconnect?: CascadeRunWhereUniqueInput | CascadeRunWhereUniqueInput[]
    delete?: CascadeRunWhereUniqueInput | CascadeRunWhereUniqueInput[]
    connect?: CascadeRunWhereUniqueInput | CascadeRunWhereUniqueInput[]
    update?: CascadeRunUpdateWithWhereUniqueWithoutCascadeInput | CascadeRunUpdateWithWhereUniqueWithoutCascadeInput[]
    updateMany?: CascadeRunUpdateManyWithWhereWithoutCascadeInput | CascadeRunUpdateManyWithWhereWithoutCascadeInput[]
    deleteMany?: CascadeRunScalarWhereInput | CascadeRunScalarWhereInput[]
  }

  export type TriggerUncheckedUpdateOneWithoutCascadeNestedInput = {
    create?: XOR<TriggerCreateWithoutCascadeInput, TriggerUncheckedCreateWithoutCascadeInput>
    connectOrCreate?: TriggerCreateOrConnectWithoutCascadeInput
    upsert?: TriggerUpsertWithoutCascadeInput
    disconnect?: TriggerWhereInput | boolean
    delete?: TriggerWhereInput | boolean
    connect?: TriggerWhereUniqueInput
    update?: XOR<XOR<TriggerUpdateToOneWithWhereWithoutCascadeInput, TriggerUpdateWithoutCascadeInput>, TriggerUncheckedUpdateWithoutCascadeInput>
  }

  export type ActionUncheckedUpdateManyWithoutCascadeNestedInput = {
    create?: XOR<ActionCreateWithoutCascadeInput, ActionUncheckedCreateWithoutCascadeInput> | ActionCreateWithoutCascadeInput[] | ActionUncheckedCreateWithoutCascadeInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutCascadeInput | ActionCreateOrConnectWithoutCascadeInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutCascadeInput | ActionUpsertWithWhereUniqueWithoutCascadeInput[]
    createMany?: ActionCreateManyCascadeInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutCascadeInput | ActionUpdateWithWhereUniqueWithoutCascadeInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutCascadeInput | ActionUpdateManyWithWhereWithoutCascadeInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type CascadeRunUncheckedUpdateManyWithoutCascadeNestedInput = {
    create?: XOR<CascadeRunCreateWithoutCascadeInput, CascadeRunUncheckedCreateWithoutCascadeInput> | CascadeRunCreateWithoutCascadeInput[] | CascadeRunUncheckedCreateWithoutCascadeInput[]
    connectOrCreate?: CascadeRunCreateOrConnectWithoutCascadeInput | CascadeRunCreateOrConnectWithoutCascadeInput[]
    upsert?: CascadeRunUpsertWithWhereUniqueWithoutCascadeInput | CascadeRunUpsertWithWhereUniqueWithoutCascadeInput[]
    createMany?: CascadeRunCreateManyCascadeInputEnvelope
    set?: CascadeRunWhereUniqueInput | CascadeRunWhereUniqueInput[]
    disconnect?: CascadeRunWhereUniqueInput | CascadeRunWhereUniqueInput[]
    delete?: CascadeRunWhereUniqueInput | CascadeRunWhereUniqueInput[]
    connect?: CascadeRunWhereUniqueInput | CascadeRunWhereUniqueInput[]
    update?: CascadeRunUpdateWithWhereUniqueWithoutCascadeInput | CascadeRunUpdateWithWhereUniqueWithoutCascadeInput[]
    updateMany?: CascadeRunUpdateManyWithWhereWithoutCascadeInput | CascadeRunUpdateManyWithWhereWithoutCascadeInput[]
    deleteMany?: CascadeRunScalarWhereInput | CascadeRunScalarWhereInput[]
  }

  export type CascadeCreateNestedOneWithoutCascadeRunsInput = {
    create?: XOR<CascadeCreateWithoutCascadeRunsInput, CascadeUncheckedCreateWithoutCascadeRunsInput>
    connectOrCreate?: CascadeCreateOrConnectWithoutCascadeRunsInput
    connect?: CascadeWhereUniqueInput
  }

  export type CascadeOutboxCreateNestedManyWithoutCascadeRunInput = {
    create?: XOR<CascadeOutboxCreateWithoutCascadeRunInput, CascadeOutboxUncheckedCreateWithoutCascadeRunInput> | CascadeOutboxCreateWithoutCascadeRunInput[] | CascadeOutboxUncheckedCreateWithoutCascadeRunInput[]
    connectOrCreate?: CascadeOutboxCreateOrConnectWithoutCascadeRunInput | CascadeOutboxCreateOrConnectWithoutCascadeRunInput[]
    createMany?: CascadeOutboxCreateManyCascadeRunInputEnvelope
    connect?: CascadeOutboxWhereUniqueInput | CascadeOutboxWhereUniqueInput[]
  }

  export type CascadeOutboxUncheckedCreateNestedManyWithoutCascadeRunInput = {
    create?: XOR<CascadeOutboxCreateWithoutCascadeRunInput, CascadeOutboxUncheckedCreateWithoutCascadeRunInput> | CascadeOutboxCreateWithoutCascadeRunInput[] | CascadeOutboxUncheckedCreateWithoutCascadeRunInput[]
    connectOrCreate?: CascadeOutboxCreateOrConnectWithoutCascadeRunInput | CascadeOutboxCreateOrConnectWithoutCascadeRunInput[]
    createMany?: CascadeOutboxCreateManyCascadeRunInputEnvelope
    connect?: CascadeOutboxWhereUniqueInput | CascadeOutboxWhereUniqueInput[]
  }

  export type CascadeUpdateOneWithoutCascadeRunsNestedInput = {
    create?: XOR<CascadeCreateWithoutCascadeRunsInput, CascadeUncheckedCreateWithoutCascadeRunsInput>
    connectOrCreate?: CascadeCreateOrConnectWithoutCascadeRunsInput
    upsert?: CascadeUpsertWithoutCascadeRunsInput
    disconnect?: CascadeWhereInput | boolean
    delete?: CascadeWhereInput | boolean
    connect?: CascadeWhereUniqueInput
    update?: XOR<XOR<CascadeUpdateToOneWithWhereWithoutCascadeRunsInput, CascadeUpdateWithoutCascadeRunsInput>, CascadeUncheckedUpdateWithoutCascadeRunsInput>
  }

  export type CascadeOutboxUpdateManyWithoutCascadeRunNestedInput = {
    create?: XOR<CascadeOutboxCreateWithoutCascadeRunInput, CascadeOutboxUncheckedCreateWithoutCascadeRunInput> | CascadeOutboxCreateWithoutCascadeRunInput[] | CascadeOutboxUncheckedCreateWithoutCascadeRunInput[]
    connectOrCreate?: CascadeOutboxCreateOrConnectWithoutCascadeRunInput | CascadeOutboxCreateOrConnectWithoutCascadeRunInput[]
    upsert?: CascadeOutboxUpsertWithWhereUniqueWithoutCascadeRunInput | CascadeOutboxUpsertWithWhereUniqueWithoutCascadeRunInput[]
    createMany?: CascadeOutboxCreateManyCascadeRunInputEnvelope
    set?: CascadeOutboxWhereUniqueInput | CascadeOutboxWhereUniqueInput[]
    disconnect?: CascadeOutboxWhereUniqueInput | CascadeOutboxWhereUniqueInput[]
    delete?: CascadeOutboxWhereUniqueInput | CascadeOutboxWhereUniqueInput[]
    connect?: CascadeOutboxWhereUniqueInput | CascadeOutboxWhereUniqueInput[]
    update?: CascadeOutboxUpdateWithWhereUniqueWithoutCascadeRunInput | CascadeOutboxUpdateWithWhereUniqueWithoutCascadeRunInput[]
    updateMany?: CascadeOutboxUpdateManyWithWhereWithoutCascadeRunInput | CascadeOutboxUpdateManyWithWhereWithoutCascadeRunInput[]
    deleteMany?: CascadeOutboxScalarWhereInput | CascadeOutboxScalarWhereInput[]
  }

  export type CascadeOutboxUncheckedUpdateManyWithoutCascadeRunNestedInput = {
    create?: XOR<CascadeOutboxCreateWithoutCascadeRunInput, CascadeOutboxUncheckedCreateWithoutCascadeRunInput> | CascadeOutboxCreateWithoutCascadeRunInput[] | CascadeOutboxUncheckedCreateWithoutCascadeRunInput[]
    connectOrCreate?: CascadeOutboxCreateOrConnectWithoutCascadeRunInput | CascadeOutboxCreateOrConnectWithoutCascadeRunInput[]
    upsert?: CascadeOutboxUpsertWithWhereUniqueWithoutCascadeRunInput | CascadeOutboxUpsertWithWhereUniqueWithoutCascadeRunInput[]
    createMany?: CascadeOutboxCreateManyCascadeRunInputEnvelope
    set?: CascadeOutboxWhereUniqueInput | CascadeOutboxWhereUniqueInput[]
    disconnect?: CascadeOutboxWhereUniqueInput | CascadeOutboxWhereUniqueInput[]
    delete?: CascadeOutboxWhereUniqueInput | CascadeOutboxWhereUniqueInput[]
    connect?: CascadeOutboxWhereUniqueInput | CascadeOutboxWhereUniqueInput[]
    update?: CascadeOutboxUpdateWithWhereUniqueWithoutCascadeRunInput | CascadeOutboxUpdateWithWhereUniqueWithoutCascadeRunInput[]
    updateMany?: CascadeOutboxUpdateManyWithWhereWithoutCascadeRunInput | CascadeOutboxUpdateManyWithWhereWithoutCascadeRunInput[]
    deleteMany?: CascadeOutboxScalarWhereInput | CascadeOutboxScalarWhereInput[]
  }

  export type CascadeRunCreateNestedOneWithoutCascadeOutboxInput = {
    create?: XOR<CascadeRunCreateWithoutCascadeOutboxInput, CascadeRunUncheckedCreateWithoutCascadeOutboxInput>
    connectOrCreate?: CascadeRunCreateOrConnectWithoutCascadeOutboxInput
    connect?: CascadeRunWhereUniqueInput
  }

  export type CascadeRunUpdateOneWithoutCascadeOutboxNestedInput = {
    create?: XOR<CascadeRunCreateWithoutCascadeOutboxInput, CascadeRunUncheckedCreateWithoutCascadeOutboxInput>
    connectOrCreate?: CascadeRunCreateOrConnectWithoutCascadeOutboxInput
    upsert?: CascadeRunUpsertWithoutCascadeOutboxInput
    disconnect?: CascadeRunWhereInput | boolean
    delete?: CascadeRunWhereInput | boolean
    connect?: CascadeRunWhereUniqueInput
    update?: XOR<XOR<CascadeRunUpdateToOneWithWhereWithoutCascadeOutboxInput, CascadeRunUpdateWithoutCascadeOutboxInput>, CascadeRunUncheckedUpdateWithoutCascadeOutboxInput>
  }

  export type AvailableTriggerCreateNestedOneWithoutTriggerInput = {
    create?: XOR<AvailableTriggerCreateWithoutTriggerInput, AvailableTriggerUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: AvailableTriggerCreateOrConnectWithoutTriggerInput
    connect?: AvailableTriggerWhereUniqueInput
  }

  export type CascadeCreateNestedOneWithoutTriggerInput = {
    create?: XOR<CascadeCreateWithoutTriggerInput, CascadeUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: CascadeCreateOrConnectWithoutTriggerInput
    connect?: CascadeWhereUniqueInput
  }

  export type AvailableTriggerUpdateOneRequiredWithoutTriggerNestedInput = {
    create?: XOR<AvailableTriggerCreateWithoutTriggerInput, AvailableTriggerUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: AvailableTriggerCreateOrConnectWithoutTriggerInput
    upsert?: AvailableTriggerUpsertWithoutTriggerInput
    connect?: AvailableTriggerWhereUniqueInput
    update?: XOR<XOR<AvailableTriggerUpdateToOneWithWhereWithoutTriggerInput, AvailableTriggerUpdateWithoutTriggerInput>, AvailableTriggerUncheckedUpdateWithoutTriggerInput>
  }

  export type CascadeUpdateOneRequiredWithoutTriggerNestedInput = {
    create?: XOR<CascadeCreateWithoutTriggerInput, CascadeUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: CascadeCreateOrConnectWithoutTriggerInput
    upsert?: CascadeUpsertWithoutTriggerInput
    connect?: CascadeWhereUniqueInput
    update?: XOR<XOR<CascadeUpdateToOneWithWhereWithoutTriggerInput, CascadeUpdateWithoutTriggerInput>, CascadeUncheckedUpdateWithoutTriggerInput>
  }

  export type AvailableActionsCreateNestedOneWithoutActionInput = {
    create?: XOR<AvailableActionsCreateWithoutActionInput, AvailableActionsUncheckedCreateWithoutActionInput>
    connectOrCreate?: AvailableActionsCreateOrConnectWithoutActionInput
    connect?: AvailableActionsWhereUniqueInput
  }

  export type CascadeCreateNestedOneWithoutActionInput = {
    create?: XOR<CascadeCreateWithoutActionInput, CascadeUncheckedCreateWithoutActionInput>
    connectOrCreate?: CascadeCreateOrConnectWithoutActionInput
    connect?: CascadeWhereUniqueInput
  }

  export type AvailableActionsUpdateOneRequiredWithoutActionNestedInput = {
    create?: XOR<AvailableActionsCreateWithoutActionInput, AvailableActionsUncheckedCreateWithoutActionInput>
    connectOrCreate?: AvailableActionsCreateOrConnectWithoutActionInput
    upsert?: AvailableActionsUpsertWithoutActionInput
    connect?: AvailableActionsWhereUniqueInput
    update?: XOR<XOR<AvailableActionsUpdateToOneWithWhereWithoutActionInput, AvailableActionsUpdateWithoutActionInput>, AvailableActionsUncheckedUpdateWithoutActionInput>
  }

  export type CascadeUpdateOneRequiredWithoutActionNestedInput = {
    create?: XOR<CascadeCreateWithoutActionInput, CascadeUncheckedCreateWithoutActionInput>
    connectOrCreate?: CascadeCreateOrConnectWithoutActionInput
    upsert?: CascadeUpsertWithoutActionInput
    connect?: CascadeWhereUniqueInput
    update?: XOR<XOR<CascadeUpdateToOneWithWhereWithoutActionInput, CascadeUpdateWithoutActionInput>, CascadeUncheckedUpdateWithoutActionInput>
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

  export type TriggerCreateWithoutCascadeInput = {
    id?: string
    type: AvailableTriggerCreateNestedOneWithoutTriggerInput
  }

  export type TriggerUncheckedCreateWithoutCascadeInput = {
    id?: string
    triggerId: string
  }

  export type TriggerCreateOrConnectWithoutCascadeInput = {
    where: TriggerWhereUniqueInput
    create: XOR<TriggerCreateWithoutCascadeInput, TriggerUncheckedCreateWithoutCascadeInput>
  }

  export type ActionCreateWithoutCascadeInput = {
    id?: string
    type: AvailableActionsCreateNestedOneWithoutActionInput
  }

  export type ActionUncheckedCreateWithoutCascadeInput = {
    id?: string
    actionId: string
  }

  export type ActionCreateOrConnectWithoutCascadeInput = {
    where: ActionWhereUniqueInput
    create: XOR<ActionCreateWithoutCascadeInput, ActionUncheckedCreateWithoutCascadeInput>
  }

  export type ActionCreateManyCascadeInputEnvelope = {
    data: ActionCreateManyCascadeInput | ActionCreateManyCascadeInput[]
    skipDuplicates?: boolean
  }

  export type CascadeRunCreateWithoutCascadeInput = {
    id?: string
    status: string
    metadata: JsonNullValueInput | InputJsonValue
    cascadeOutbox?: CascadeOutboxCreateNestedManyWithoutCascadeRunInput
  }

  export type CascadeRunUncheckedCreateWithoutCascadeInput = {
    id?: string
    status: string
    metadata: JsonNullValueInput | InputJsonValue
    cascadeOutbox?: CascadeOutboxUncheckedCreateNestedManyWithoutCascadeRunInput
  }

  export type CascadeRunCreateOrConnectWithoutCascadeInput = {
    where: CascadeRunWhereUniqueInput
    create: XOR<CascadeRunCreateWithoutCascadeInput, CascadeRunUncheckedCreateWithoutCascadeInput>
  }

  export type CascadeRunCreateManyCascadeInputEnvelope = {
    data: CascadeRunCreateManyCascadeInput | CascadeRunCreateManyCascadeInput[]
    skipDuplicates?: boolean
  }

  export type TriggerUpsertWithoutCascadeInput = {
    update: XOR<TriggerUpdateWithoutCascadeInput, TriggerUncheckedUpdateWithoutCascadeInput>
    create: XOR<TriggerCreateWithoutCascadeInput, TriggerUncheckedCreateWithoutCascadeInput>
    where?: TriggerWhereInput
  }

  export type TriggerUpdateToOneWithWhereWithoutCascadeInput = {
    where?: TriggerWhereInput
    data: XOR<TriggerUpdateWithoutCascadeInput, TriggerUncheckedUpdateWithoutCascadeInput>
  }

  export type TriggerUpdateWithoutCascadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: AvailableTriggerUpdateOneRequiredWithoutTriggerNestedInput
  }

  export type TriggerUncheckedUpdateWithoutCascadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionUpsertWithWhereUniqueWithoutCascadeInput = {
    where: ActionWhereUniqueInput
    update: XOR<ActionUpdateWithoutCascadeInput, ActionUncheckedUpdateWithoutCascadeInput>
    create: XOR<ActionCreateWithoutCascadeInput, ActionUncheckedCreateWithoutCascadeInput>
  }

  export type ActionUpdateWithWhereUniqueWithoutCascadeInput = {
    where: ActionWhereUniqueInput
    data: XOR<ActionUpdateWithoutCascadeInput, ActionUncheckedUpdateWithoutCascadeInput>
  }

  export type ActionUpdateManyWithWhereWithoutCascadeInput = {
    where: ActionScalarWhereInput
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyWithoutCascadeInput>
  }

  export type ActionScalarWhereInput = {
    AND?: ActionScalarWhereInput | ActionScalarWhereInput[]
    OR?: ActionScalarWhereInput[]
    NOT?: ActionScalarWhereInput | ActionScalarWhereInput[]
    id?: StringFilter<"Action"> | string
    actionId?: StringFilter<"Action"> | string
    cascadeId?: StringFilter<"Action"> | string
  }

  export type CascadeRunUpsertWithWhereUniqueWithoutCascadeInput = {
    where: CascadeRunWhereUniqueInput
    update: XOR<CascadeRunUpdateWithoutCascadeInput, CascadeRunUncheckedUpdateWithoutCascadeInput>
    create: XOR<CascadeRunCreateWithoutCascadeInput, CascadeRunUncheckedCreateWithoutCascadeInput>
  }

  export type CascadeRunUpdateWithWhereUniqueWithoutCascadeInput = {
    where: CascadeRunWhereUniqueInput
    data: XOR<CascadeRunUpdateWithoutCascadeInput, CascadeRunUncheckedUpdateWithoutCascadeInput>
  }

  export type CascadeRunUpdateManyWithWhereWithoutCascadeInput = {
    where: CascadeRunScalarWhereInput
    data: XOR<CascadeRunUpdateManyMutationInput, CascadeRunUncheckedUpdateManyWithoutCascadeInput>
  }

  export type CascadeRunScalarWhereInput = {
    AND?: CascadeRunScalarWhereInput | CascadeRunScalarWhereInput[]
    OR?: CascadeRunScalarWhereInput[]
    NOT?: CascadeRunScalarWhereInput | CascadeRunScalarWhereInput[]
    id?: StringFilter<"CascadeRun"> | string
    cascadeId?: StringFilter<"CascadeRun"> | string
    status?: StringFilter<"CascadeRun"> | string
    metadata?: JsonFilter<"CascadeRun">
  }

  export type CascadeCreateWithoutCascadeRunsInput = {
    id?: string
    triggerId: string
    trigger?: TriggerCreateNestedOneWithoutCascadeInput
    action?: ActionCreateNestedManyWithoutCascadeInput
  }

  export type CascadeUncheckedCreateWithoutCascadeRunsInput = {
    id?: string
    triggerId: string
    trigger?: TriggerUncheckedCreateNestedOneWithoutCascadeInput
    action?: ActionUncheckedCreateNestedManyWithoutCascadeInput
  }

  export type CascadeCreateOrConnectWithoutCascadeRunsInput = {
    where: CascadeWhereUniqueInput
    create: XOR<CascadeCreateWithoutCascadeRunsInput, CascadeUncheckedCreateWithoutCascadeRunsInput>
  }

  export type CascadeOutboxCreateWithoutCascadeRunInput = {
    id?: string
    metadata: JsonNullValueInput | InputJsonValue
    status: string
  }

  export type CascadeOutboxUncheckedCreateWithoutCascadeRunInput = {
    id?: string
    metadata: JsonNullValueInput | InputJsonValue
    status: string
  }

  export type CascadeOutboxCreateOrConnectWithoutCascadeRunInput = {
    where: CascadeOutboxWhereUniqueInput
    create: XOR<CascadeOutboxCreateWithoutCascadeRunInput, CascadeOutboxUncheckedCreateWithoutCascadeRunInput>
  }

  export type CascadeOutboxCreateManyCascadeRunInputEnvelope = {
    data: CascadeOutboxCreateManyCascadeRunInput | CascadeOutboxCreateManyCascadeRunInput[]
    skipDuplicates?: boolean
  }

  export type CascadeUpsertWithoutCascadeRunsInput = {
    update: XOR<CascadeUpdateWithoutCascadeRunsInput, CascadeUncheckedUpdateWithoutCascadeRunsInput>
    create: XOR<CascadeCreateWithoutCascadeRunsInput, CascadeUncheckedCreateWithoutCascadeRunsInput>
    where?: CascadeWhereInput
  }

  export type CascadeUpdateToOneWithWhereWithoutCascadeRunsInput = {
    where?: CascadeWhereInput
    data: XOR<CascadeUpdateWithoutCascadeRunsInput, CascadeUncheckedUpdateWithoutCascadeRunsInput>
  }

  export type CascadeUpdateWithoutCascadeRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUpdateOneWithoutCascadeNestedInput
    action?: ActionUpdateManyWithoutCascadeNestedInput
  }

  export type CascadeUncheckedUpdateWithoutCascadeRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUncheckedUpdateOneWithoutCascadeNestedInput
    action?: ActionUncheckedUpdateManyWithoutCascadeNestedInput
  }

  export type CascadeOutboxUpsertWithWhereUniqueWithoutCascadeRunInput = {
    where: CascadeOutboxWhereUniqueInput
    update: XOR<CascadeOutboxUpdateWithoutCascadeRunInput, CascadeOutboxUncheckedUpdateWithoutCascadeRunInput>
    create: XOR<CascadeOutboxCreateWithoutCascadeRunInput, CascadeOutboxUncheckedCreateWithoutCascadeRunInput>
  }

  export type CascadeOutboxUpdateWithWhereUniqueWithoutCascadeRunInput = {
    where: CascadeOutboxWhereUniqueInput
    data: XOR<CascadeOutboxUpdateWithoutCascadeRunInput, CascadeOutboxUncheckedUpdateWithoutCascadeRunInput>
  }

  export type CascadeOutboxUpdateManyWithWhereWithoutCascadeRunInput = {
    where: CascadeOutboxScalarWhereInput
    data: XOR<CascadeOutboxUpdateManyMutationInput, CascadeOutboxUncheckedUpdateManyWithoutCascadeRunInput>
  }

  export type CascadeOutboxScalarWhereInput = {
    AND?: CascadeOutboxScalarWhereInput | CascadeOutboxScalarWhereInput[]
    OR?: CascadeOutboxScalarWhereInput[]
    NOT?: CascadeOutboxScalarWhereInput | CascadeOutboxScalarWhereInput[]
    id?: StringFilter<"CascadeOutbox"> | string
    metadata?: JsonFilter<"CascadeOutbox">
    cascadeRunId?: StringFilter<"CascadeOutbox"> | string
    status?: StringFilter<"CascadeOutbox"> | string
  }

  export type CascadeRunCreateWithoutCascadeOutboxInput = {
    id?: string
    status: string
    metadata: JsonNullValueInput | InputJsonValue
    cascade?: CascadeCreateNestedOneWithoutCascadeRunsInput
  }

  export type CascadeRunUncheckedCreateWithoutCascadeOutboxInput = {
    id?: string
    cascadeId: string
    status: string
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type CascadeRunCreateOrConnectWithoutCascadeOutboxInput = {
    where: CascadeRunWhereUniqueInput
    create: XOR<CascadeRunCreateWithoutCascadeOutboxInput, CascadeRunUncheckedCreateWithoutCascadeOutboxInput>
  }

  export type CascadeRunUpsertWithoutCascadeOutboxInput = {
    update: XOR<CascadeRunUpdateWithoutCascadeOutboxInput, CascadeRunUncheckedUpdateWithoutCascadeOutboxInput>
    create: XOR<CascadeRunCreateWithoutCascadeOutboxInput, CascadeRunUncheckedCreateWithoutCascadeOutboxInput>
    where?: CascadeRunWhereInput
  }

  export type CascadeRunUpdateToOneWithWhereWithoutCascadeOutboxInput = {
    where?: CascadeRunWhereInput
    data: XOR<CascadeRunUpdateWithoutCascadeOutboxInput, CascadeRunUncheckedUpdateWithoutCascadeOutboxInput>
  }

  export type CascadeRunUpdateWithoutCascadeOutboxInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    cascade?: CascadeUpdateOneWithoutCascadeRunsNestedInput
  }

  export type CascadeRunUncheckedUpdateWithoutCascadeOutboxInput = {
    id?: StringFieldUpdateOperationsInput | string
    cascadeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
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

  export type CascadeCreateWithoutTriggerInput = {
    id?: string
    triggerId: string
    action?: ActionCreateNestedManyWithoutCascadeInput
    CascadeRuns?: CascadeRunCreateNestedManyWithoutCascadeInput
  }

  export type CascadeUncheckedCreateWithoutTriggerInput = {
    id?: string
    triggerId: string
    action?: ActionUncheckedCreateNestedManyWithoutCascadeInput
    CascadeRuns?: CascadeRunUncheckedCreateNestedManyWithoutCascadeInput
  }

  export type CascadeCreateOrConnectWithoutTriggerInput = {
    where: CascadeWhereUniqueInput
    create: XOR<CascadeCreateWithoutTriggerInput, CascadeUncheckedCreateWithoutTriggerInput>
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

  export type CascadeUpsertWithoutTriggerInput = {
    update: XOR<CascadeUpdateWithoutTriggerInput, CascadeUncheckedUpdateWithoutTriggerInput>
    create: XOR<CascadeCreateWithoutTriggerInput, CascadeUncheckedCreateWithoutTriggerInput>
    where?: CascadeWhereInput
  }

  export type CascadeUpdateToOneWithWhereWithoutTriggerInput = {
    where?: CascadeWhereInput
    data: XOR<CascadeUpdateWithoutTriggerInput, CascadeUncheckedUpdateWithoutTriggerInput>
  }

  export type CascadeUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    action?: ActionUpdateManyWithoutCascadeNestedInput
    CascadeRuns?: CascadeRunUpdateManyWithoutCascadeNestedInput
  }

  export type CascadeUncheckedUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    action?: ActionUncheckedUpdateManyWithoutCascadeNestedInput
    CascadeRuns?: CascadeRunUncheckedUpdateManyWithoutCascadeNestedInput
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

  export type CascadeCreateWithoutActionInput = {
    id?: string
    triggerId: string
    trigger?: TriggerCreateNestedOneWithoutCascadeInput
    CascadeRuns?: CascadeRunCreateNestedManyWithoutCascadeInput
  }

  export type CascadeUncheckedCreateWithoutActionInput = {
    id?: string
    triggerId: string
    trigger?: TriggerUncheckedCreateNestedOneWithoutCascadeInput
    CascadeRuns?: CascadeRunUncheckedCreateNestedManyWithoutCascadeInput
  }

  export type CascadeCreateOrConnectWithoutActionInput = {
    where: CascadeWhereUniqueInput
    create: XOR<CascadeCreateWithoutActionInput, CascadeUncheckedCreateWithoutActionInput>
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

  export type CascadeUpsertWithoutActionInput = {
    update: XOR<CascadeUpdateWithoutActionInput, CascadeUncheckedUpdateWithoutActionInput>
    create: XOR<CascadeCreateWithoutActionInput, CascadeUncheckedCreateWithoutActionInput>
    where?: CascadeWhereInput
  }

  export type CascadeUpdateToOneWithWhereWithoutActionInput = {
    where?: CascadeWhereInput
    data: XOR<CascadeUpdateWithoutActionInput, CascadeUncheckedUpdateWithoutActionInput>
  }

  export type CascadeUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUpdateOneWithoutCascadeNestedInput
    CascadeRuns?: CascadeRunUpdateManyWithoutCascadeNestedInput
  }

  export type CascadeUncheckedUpdateWithoutActionInput = {
    id?: StringFieldUpdateOperationsInput | string
    triggerId?: StringFieldUpdateOperationsInput | string
    trigger?: TriggerUncheckedUpdateOneWithoutCascadeNestedInput
    CascadeRuns?: CascadeRunUncheckedUpdateManyWithoutCascadeNestedInput
  }

  export type ActionCreateWithoutTypeInput = {
    id?: string
    cascade: CascadeCreateNestedOneWithoutActionInput
  }

  export type ActionUncheckedCreateWithoutTypeInput = {
    id?: string
    cascadeId: string
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
    cascade: CascadeCreateNestedOneWithoutTriggerInput
  }

  export type TriggerUncheckedCreateWithoutTypeInput = {
    id?: string
    cascadeId: string
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
    cascadeId?: StringFilter<"Trigger"> | string
  }

  export type ActionCreateManyCascadeInput = {
    id?: string
    actionId: string
  }

  export type CascadeRunCreateManyCascadeInput = {
    id?: string
    status: string
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type ActionUpdateWithoutCascadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: AvailableActionsUpdateOneRequiredWithoutActionNestedInput
  }

  export type ActionUncheckedUpdateWithoutCascadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionUncheckedUpdateManyWithoutCascadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionId?: StringFieldUpdateOperationsInput | string
  }

  export type CascadeRunUpdateWithoutCascadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    cascadeOutbox?: CascadeOutboxUpdateManyWithoutCascadeRunNestedInput
  }

  export type CascadeRunUncheckedUpdateWithoutCascadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    cascadeOutbox?: CascadeOutboxUncheckedUpdateManyWithoutCascadeRunNestedInput
  }

  export type CascadeRunUncheckedUpdateManyWithoutCascadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type CascadeOutboxCreateManyCascadeRunInput = {
    id?: string
    metadata: JsonNullValueInput | InputJsonValue
    status: string
  }

  export type CascadeOutboxUpdateWithoutCascadeRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CascadeOutboxUncheckedUpdateWithoutCascadeRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CascadeOutboxUncheckedUpdateManyWithoutCascadeRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ActionCreateManyTypeInput = {
    id?: string
    cascadeId: string
  }

  export type ActionUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    cascade?: CascadeUpdateOneRequiredWithoutActionNestedInput
  }

  export type ActionUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    cascadeId?: StringFieldUpdateOperationsInput | string
  }

  export type ActionUncheckedUpdateManyWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    cascadeId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerCreateManyTypeInput = {
    id?: string
    cascadeId: string
  }

  export type TriggerUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    cascade?: CascadeUpdateOneRequiredWithoutTriggerNestedInput
  }

  export type TriggerUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    cascadeId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerUncheckedUpdateManyWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    cascadeId?: StringFieldUpdateOperationsInput | string
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