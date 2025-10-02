
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
 * Model UserSignature
 * 
 */
export type UserSignature = $Result.DefaultSelection<Prisma.$UserSignaturePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserSignatures
 * const userSignatures = await prisma.userSignature.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more UserSignatures
   * const userSignatures = await prisma.userSignature.findMany()
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
   * `prisma.userSignature`: Exposes CRUD operations for the **UserSignature** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSignatures
    * const userSignatures = await prisma.userSignature.findMany()
    * ```
    */
  get userSignature(): Prisma.UserSignatureDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
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
    UserSignature: 'UserSignature'
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
      modelProps: "userSignature"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UserSignature: {
        payload: Prisma.$UserSignaturePayload<ExtArgs>
        fields: Prisma.UserSignatureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSignatureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSignaturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSignatureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSignaturePayload>
          }
          findFirst: {
            args: Prisma.UserSignatureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSignaturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSignatureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSignaturePayload>
          }
          findMany: {
            args: Prisma.UserSignatureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSignaturePayload>[]
          }
          create: {
            args: Prisma.UserSignatureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSignaturePayload>
          }
          createMany: {
            args: Prisma.UserSignatureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserSignatureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSignaturePayload>
          }
          update: {
            args: Prisma.UserSignatureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSignaturePayload>
          }
          deleteMany: {
            args: Prisma.UserSignatureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSignatureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserSignatureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSignaturePayload>
          }
          aggregate: {
            args: Prisma.UserSignatureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSignature>
          }
          groupBy: {
            args: Prisma.UserSignatureGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSignatureGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSignatureCountArgs<ExtArgs>
            result: $Utils.Optional<UserSignatureCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    userSignature?: UserSignatureOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Models
   */

  /**
   * Model UserSignature
   */

  export type AggregateUserSignature = {
    _count: UserSignatureCountAggregateOutputType | null
    _min: UserSignatureMinAggregateOutputType | null
    _max: UserSignatureMaxAggregateOutputType | null
  }

  export type UserSignatureMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    position: string | null
    email: string | null
    phoneNumber: string | null
    officeNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSignatureMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    position: string | null
    email: string | null
    phoneNumber: string | null
    officeNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSignatureCountAggregateOutputType = {
    id: number
    fullName: number
    position: number
    email: number
    phoneNumber: number
    officeNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserSignatureMinAggregateInputType = {
    id?: true
    fullName?: true
    position?: true
    email?: true
    phoneNumber?: true
    officeNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSignatureMaxAggregateInputType = {
    id?: true
    fullName?: true
    position?: true
    email?: true
    phoneNumber?: true
    officeNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSignatureCountAggregateInputType = {
    id?: true
    fullName?: true
    position?: true
    email?: true
    phoneNumber?: true
    officeNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserSignatureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSignature to aggregate.
     */
    where?: UserSignatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSignatures to fetch.
     */
    orderBy?: UserSignatureOrderByWithRelationInput | UserSignatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSignatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSignatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSignatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSignatures
    **/
    _count?: true | UserSignatureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSignatureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSignatureMaxAggregateInputType
  }

  export type GetUserSignatureAggregateType<T extends UserSignatureAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSignature]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSignature[P]>
      : GetScalarType<T[P], AggregateUserSignature[P]>
  }




  export type UserSignatureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSignatureWhereInput
    orderBy?: UserSignatureOrderByWithAggregationInput | UserSignatureOrderByWithAggregationInput[]
    by: UserSignatureScalarFieldEnum[] | UserSignatureScalarFieldEnum
    having?: UserSignatureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSignatureCountAggregateInputType | true
    _min?: UserSignatureMinAggregateInputType
    _max?: UserSignatureMaxAggregateInputType
  }

  export type UserSignatureGroupByOutputType = {
    id: string
    fullName: string
    position: string
    email: string
    phoneNumber: string
    officeNumber: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserSignatureCountAggregateOutputType | null
    _min: UserSignatureMinAggregateOutputType | null
    _max: UserSignatureMaxAggregateOutputType | null
  }

  type GetUserSignatureGroupByPayload<T extends UserSignatureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSignatureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSignatureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSignatureGroupByOutputType[P]>
            : GetScalarType<T[P], UserSignatureGroupByOutputType[P]>
        }
      >
    >


  export type UserSignatureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    position?: boolean
    email?: boolean
    phoneNumber?: boolean
    officeNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userSignature"]>



  export type UserSignatureSelectScalar = {
    id?: boolean
    fullName?: boolean
    position?: boolean
    email?: boolean
    phoneNumber?: boolean
    officeNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserSignatureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "position" | "email" | "phoneNumber" | "officeNumber" | "createdAt" | "updatedAt", ExtArgs["result"]["userSignature"]>

  export type $UserSignaturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSignature"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      position: string
      email: string
      phoneNumber: string
      officeNumber: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userSignature"]>
    composites: {}
  }

  type UserSignatureGetPayload<S extends boolean | null | undefined | UserSignatureDefaultArgs> = $Result.GetResult<Prisma.$UserSignaturePayload, S>

  type UserSignatureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSignatureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSignatureCountAggregateInputType | true
    }

  export interface UserSignatureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSignature'], meta: { name: 'UserSignature' } }
    /**
     * Find zero or one UserSignature that matches the filter.
     * @param {UserSignatureFindUniqueArgs} args - Arguments to find a UserSignature
     * @example
     * // Get one UserSignature
     * const userSignature = await prisma.userSignature.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSignatureFindUniqueArgs>(args: SelectSubset<T, UserSignatureFindUniqueArgs<ExtArgs>>): Prisma__UserSignatureClient<$Result.GetResult<Prisma.$UserSignaturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSignature that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSignatureFindUniqueOrThrowArgs} args - Arguments to find a UserSignature
     * @example
     * // Get one UserSignature
     * const userSignature = await prisma.userSignature.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSignatureFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSignatureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSignatureClient<$Result.GetResult<Prisma.$UserSignaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSignature that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSignatureFindFirstArgs} args - Arguments to find a UserSignature
     * @example
     * // Get one UserSignature
     * const userSignature = await prisma.userSignature.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSignatureFindFirstArgs>(args?: SelectSubset<T, UserSignatureFindFirstArgs<ExtArgs>>): Prisma__UserSignatureClient<$Result.GetResult<Prisma.$UserSignaturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSignature that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSignatureFindFirstOrThrowArgs} args - Arguments to find a UserSignature
     * @example
     * // Get one UserSignature
     * const userSignature = await prisma.userSignature.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSignatureFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSignatureFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSignatureClient<$Result.GetResult<Prisma.$UserSignaturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSignatures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSignatureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSignatures
     * const userSignatures = await prisma.userSignature.findMany()
     * 
     * // Get first 10 UserSignatures
     * const userSignatures = await prisma.userSignature.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSignatureWithIdOnly = await prisma.userSignature.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSignatureFindManyArgs>(args?: SelectSubset<T, UserSignatureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSignaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSignature.
     * @param {UserSignatureCreateArgs} args - Arguments to create a UserSignature.
     * @example
     * // Create one UserSignature
     * const UserSignature = await prisma.userSignature.create({
     *   data: {
     *     // ... data to create a UserSignature
     *   }
     * })
     * 
     */
    create<T extends UserSignatureCreateArgs>(args: SelectSubset<T, UserSignatureCreateArgs<ExtArgs>>): Prisma__UserSignatureClient<$Result.GetResult<Prisma.$UserSignaturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSignatures.
     * @param {UserSignatureCreateManyArgs} args - Arguments to create many UserSignatures.
     * @example
     * // Create many UserSignatures
     * const userSignature = await prisma.userSignature.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSignatureCreateManyArgs>(args?: SelectSubset<T, UserSignatureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserSignature.
     * @param {UserSignatureDeleteArgs} args - Arguments to delete one UserSignature.
     * @example
     * // Delete one UserSignature
     * const UserSignature = await prisma.userSignature.delete({
     *   where: {
     *     // ... filter to delete one UserSignature
     *   }
     * })
     * 
     */
    delete<T extends UserSignatureDeleteArgs>(args: SelectSubset<T, UserSignatureDeleteArgs<ExtArgs>>): Prisma__UserSignatureClient<$Result.GetResult<Prisma.$UserSignaturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSignature.
     * @param {UserSignatureUpdateArgs} args - Arguments to update one UserSignature.
     * @example
     * // Update one UserSignature
     * const userSignature = await prisma.userSignature.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSignatureUpdateArgs>(args: SelectSubset<T, UserSignatureUpdateArgs<ExtArgs>>): Prisma__UserSignatureClient<$Result.GetResult<Prisma.$UserSignaturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSignatures.
     * @param {UserSignatureDeleteManyArgs} args - Arguments to filter UserSignatures to delete.
     * @example
     * // Delete a few UserSignatures
     * const { count } = await prisma.userSignature.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSignatureDeleteManyArgs>(args?: SelectSubset<T, UserSignatureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSignatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSignatureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSignatures
     * const userSignature = await prisma.userSignature.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSignatureUpdateManyArgs>(args: SelectSubset<T, UserSignatureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserSignature.
     * @param {UserSignatureUpsertArgs} args - Arguments to update or create a UserSignature.
     * @example
     * // Update or create a UserSignature
     * const userSignature = await prisma.userSignature.upsert({
     *   create: {
     *     // ... data to create a UserSignature
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSignature we want to update
     *   }
     * })
     */
    upsert<T extends UserSignatureUpsertArgs>(args: SelectSubset<T, UserSignatureUpsertArgs<ExtArgs>>): Prisma__UserSignatureClient<$Result.GetResult<Prisma.$UserSignaturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSignatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSignatureCountArgs} args - Arguments to filter UserSignatures to count.
     * @example
     * // Count the number of UserSignatures
     * const count = await prisma.userSignature.count({
     *   where: {
     *     // ... the filter for the UserSignatures we want to count
     *   }
     * })
    **/
    count<T extends UserSignatureCountArgs>(
      args?: Subset<T, UserSignatureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSignatureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSignature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSignatureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSignatureAggregateArgs>(args: Subset<T, UserSignatureAggregateArgs>): Prisma.PrismaPromise<GetUserSignatureAggregateType<T>>

    /**
     * Group by UserSignature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSignatureGroupByArgs} args - Group by arguments.
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
      T extends UserSignatureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSignatureGroupByArgs['orderBy'] }
        : { orderBy?: UserSignatureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSignatureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSignatureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSignature model
   */
  readonly fields: UserSignatureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSignature.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSignatureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserSignature model
   */
  interface UserSignatureFieldRefs {
    readonly id: FieldRef<"UserSignature", 'String'>
    readonly fullName: FieldRef<"UserSignature", 'String'>
    readonly position: FieldRef<"UserSignature", 'String'>
    readonly email: FieldRef<"UserSignature", 'String'>
    readonly phoneNumber: FieldRef<"UserSignature", 'String'>
    readonly officeNumber: FieldRef<"UserSignature", 'String'>
    readonly createdAt: FieldRef<"UserSignature", 'DateTime'>
    readonly updatedAt: FieldRef<"UserSignature", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSignature findUnique
   */
  export type UserSignatureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSignature
     */
    select?: UserSignatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSignature
     */
    omit?: UserSignatureOmit<ExtArgs> | null
    /**
     * Filter, which UserSignature to fetch.
     */
    where: UserSignatureWhereUniqueInput
  }

  /**
   * UserSignature findUniqueOrThrow
   */
  export type UserSignatureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSignature
     */
    select?: UserSignatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSignature
     */
    omit?: UserSignatureOmit<ExtArgs> | null
    /**
     * Filter, which UserSignature to fetch.
     */
    where: UserSignatureWhereUniqueInput
  }

  /**
   * UserSignature findFirst
   */
  export type UserSignatureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSignature
     */
    select?: UserSignatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSignature
     */
    omit?: UserSignatureOmit<ExtArgs> | null
    /**
     * Filter, which UserSignature to fetch.
     */
    where?: UserSignatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSignatures to fetch.
     */
    orderBy?: UserSignatureOrderByWithRelationInput | UserSignatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSignatures.
     */
    cursor?: UserSignatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSignatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSignatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSignatures.
     */
    distinct?: UserSignatureScalarFieldEnum | UserSignatureScalarFieldEnum[]
  }

  /**
   * UserSignature findFirstOrThrow
   */
  export type UserSignatureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSignature
     */
    select?: UserSignatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSignature
     */
    omit?: UserSignatureOmit<ExtArgs> | null
    /**
     * Filter, which UserSignature to fetch.
     */
    where?: UserSignatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSignatures to fetch.
     */
    orderBy?: UserSignatureOrderByWithRelationInput | UserSignatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSignatures.
     */
    cursor?: UserSignatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSignatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSignatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSignatures.
     */
    distinct?: UserSignatureScalarFieldEnum | UserSignatureScalarFieldEnum[]
  }

  /**
   * UserSignature findMany
   */
  export type UserSignatureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSignature
     */
    select?: UserSignatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSignature
     */
    omit?: UserSignatureOmit<ExtArgs> | null
    /**
     * Filter, which UserSignatures to fetch.
     */
    where?: UserSignatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSignatures to fetch.
     */
    orderBy?: UserSignatureOrderByWithRelationInput | UserSignatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSignatures.
     */
    cursor?: UserSignatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSignatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSignatures.
     */
    skip?: number
    distinct?: UserSignatureScalarFieldEnum | UserSignatureScalarFieldEnum[]
  }

  /**
   * UserSignature create
   */
  export type UserSignatureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSignature
     */
    select?: UserSignatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSignature
     */
    omit?: UserSignatureOmit<ExtArgs> | null
    /**
     * The data needed to create a UserSignature.
     */
    data: XOR<UserSignatureCreateInput, UserSignatureUncheckedCreateInput>
  }

  /**
   * UserSignature createMany
   */
  export type UserSignatureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSignatures.
     */
    data: UserSignatureCreateManyInput | UserSignatureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSignature update
   */
  export type UserSignatureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSignature
     */
    select?: UserSignatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSignature
     */
    omit?: UserSignatureOmit<ExtArgs> | null
    /**
     * The data needed to update a UserSignature.
     */
    data: XOR<UserSignatureUpdateInput, UserSignatureUncheckedUpdateInput>
    /**
     * Choose, which UserSignature to update.
     */
    where: UserSignatureWhereUniqueInput
  }

  /**
   * UserSignature updateMany
   */
  export type UserSignatureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSignatures.
     */
    data: XOR<UserSignatureUpdateManyMutationInput, UserSignatureUncheckedUpdateManyInput>
    /**
     * Filter which UserSignatures to update
     */
    where?: UserSignatureWhereInput
    /**
     * Limit how many UserSignatures to update.
     */
    limit?: number
  }

  /**
   * UserSignature upsert
   */
  export type UserSignatureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSignature
     */
    select?: UserSignatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSignature
     */
    omit?: UserSignatureOmit<ExtArgs> | null
    /**
     * The filter to search for the UserSignature to update in case it exists.
     */
    where: UserSignatureWhereUniqueInput
    /**
     * In case the UserSignature found by the `where` argument doesn't exist, create a new UserSignature with this data.
     */
    create: XOR<UserSignatureCreateInput, UserSignatureUncheckedCreateInput>
    /**
     * In case the UserSignature was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSignatureUpdateInput, UserSignatureUncheckedUpdateInput>
  }

  /**
   * UserSignature delete
   */
  export type UserSignatureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSignature
     */
    select?: UserSignatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSignature
     */
    omit?: UserSignatureOmit<ExtArgs> | null
    /**
     * Filter which UserSignature to delete.
     */
    where: UserSignatureWhereUniqueInput
  }

  /**
   * UserSignature deleteMany
   */
  export type UserSignatureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSignatures to delete
     */
    where?: UserSignatureWhereInput
    /**
     * Limit how many UserSignatures to delete.
     */
    limit?: number
  }

  /**
   * UserSignature without action
   */
  export type UserSignatureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSignature
     */
    select?: UserSignatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSignature
     */
    omit?: UserSignatureOmit<ExtArgs> | null
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


  export const UserSignatureScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    position: 'position',
    email: 'email',
    phoneNumber: 'phoneNumber',
    officeNumber: 'officeNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserSignatureScalarFieldEnum = (typeof UserSignatureScalarFieldEnum)[keyof typeof UserSignatureScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserSignatureOrderByRelevanceFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    position: 'position',
    email: 'email',
    phoneNumber: 'phoneNumber',
    officeNumber: 'officeNumber'
  };

  export type UserSignatureOrderByRelevanceFieldEnum = (typeof UserSignatureOrderByRelevanceFieldEnum)[keyof typeof UserSignatureOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type UserSignatureWhereInput = {
    AND?: UserSignatureWhereInput | UserSignatureWhereInput[]
    OR?: UserSignatureWhereInput[]
    NOT?: UserSignatureWhereInput | UserSignatureWhereInput[]
    id?: StringFilter<"UserSignature"> | string
    fullName?: StringFilter<"UserSignature"> | string
    position?: StringFilter<"UserSignature"> | string
    email?: StringFilter<"UserSignature"> | string
    phoneNumber?: StringFilter<"UserSignature"> | string
    officeNumber?: StringNullableFilter<"UserSignature"> | string | null
    createdAt?: DateTimeFilter<"UserSignature"> | Date | string
    updatedAt?: DateTimeFilter<"UserSignature"> | Date | string
  }

  export type UserSignatureOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    position?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    officeNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: UserSignatureOrderByRelevanceInput
  }

  export type UserSignatureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserSignatureWhereInput | UserSignatureWhereInput[]
    OR?: UserSignatureWhereInput[]
    NOT?: UserSignatureWhereInput | UserSignatureWhereInput[]
    fullName?: StringFilter<"UserSignature"> | string
    position?: StringFilter<"UserSignature"> | string
    email?: StringFilter<"UserSignature"> | string
    phoneNumber?: StringFilter<"UserSignature"> | string
    officeNumber?: StringNullableFilter<"UserSignature"> | string | null
    createdAt?: DateTimeFilter<"UserSignature"> | Date | string
    updatedAt?: DateTimeFilter<"UserSignature"> | Date | string
  }, "id">

  export type UserSignatureOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    position?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    officeNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserSignatureCountOrderByAggregateInput
    _max?: UserSignatureMaxOrderByAggregateInput
    _min?: UserSignatureMinOrderByAggregateInput
  }

  export type UserSignatureScalarWhereWithAggregatesInput = {
    AND?: UserSignatureScalarWhereWithAggregatesInput | UserSignatureScalarWhereWithAggregatesInput[]
    OR?: UserSignatureScalarWhereWithAggregatesInput[]
    NOT?: UserSignatureScalarWhereWithAggregatesInput | UserSignatureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSignature"> | string
    fullName?: StringWithAggregatesFilter<"UserSignature"> | string
    position?: StringWithAggregatesFilter<"UserSignature"> | string
    email?: StringWithAggregatesFilter<"UserSignature"> | string
    phoneNumber?: StringWithAggregatesFilter<"UserSignature"> | string
    officeNumber?: StringNullableWithAggregatesFilter<"UserSignature"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserSignature"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserSignature"> | Date | string
  }

  export type UserSignatureCreateInput = {
    id?: string
    fullName: string
    position: string
    email: string
    phoneNumber: string
    officeNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSignatureUncheckedCreateInput = {
    id?: string
    fullName: string
    position: string
    email: string
    phoneNumber: string
    officeNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSignatureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    officeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSignatureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    officeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSignatureCreateManyInput = {
    id?: string
    fullName: string
    position: string
    email: string
    phoneNumber: string
    officeNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSignatureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    officeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSignatureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    officeNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
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

  export type UserSignatureOrderByRelevanceInput = {
    fields: UserSignatureOrderByRelevanceFieldEnum | UserSignatureOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserSignatureCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    position?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    officeNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSignatureMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    position?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    officeNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSignatureMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    position?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    officeNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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