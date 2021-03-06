import { GraphQLNamedType } from './graphql';
import { TypeComposer } from './TypeComposer';
import { InputTypeComposer } from './InputTypeComposer';
import { EnumTypeComposer } from './EnumTypeComposer';
import { Resolver } from './Resolver';

type K = string;
type V<TContext> = TypeComposer<TContext> | InputTypeComposer | EnumTypeComposer | GraphQLNamedType;

export class TypeStorage<TContext> {
  public types: Map<K, V<TContext>>;
  public size: number;

  public constructor();

  public clear(): void;

  public delete(key: K): boolean;

  public entries(): Iterator<[K, V<TContext>]>;

  public forEach(callbackfn: (value: V<TContext>, index: K, map: Map<K, V<TContext>>) => any, thisArg?: any): void;

  public get(key: K): V<TContext>;

  public has(key: K): boolean;

  public keys(): Iterator<K>;

  public set(key: K, value: V<TContext>): TypeStorage<TContext>;

  public values(): Iterator<V<TContext>>;

  public add(value: V<TContext>): string | null;

  public hasInstance(key: K, ClassObj: any): boolean;

  public getOrSet(key: K, typeOrThunk: V<TContext> | (() => V<TContext>)): V<TContext>;

  public getTC(typeName: string): TypeComposer<TContext>;

  public getITC(typeName: string): InputTypeComposer;

  public getETC(typeName: string): EnumTypeComposer;
}
