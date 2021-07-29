import { TypedWithBaseType } from '../types/TypedWithBaseType';

export const model = <T>(initial: Partial<T>): (extend: Partial<T>) => T =>
  (extend: Partial<T>): T =>
    Object.assign(initial, extend) as T;

export const typed = <T extends TypedWithBaseType>(type: string, baseTypeAndContext: Partial<TypedWithBaseType> = {}): (partial: Partial<T>) => T =>
  (partial: Partial<T>): T => Object
    .assign(partial, baseTypeAndContext, { '@type': type }) as TypedWithBaseType as T;
