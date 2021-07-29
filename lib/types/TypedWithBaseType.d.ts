import { Typed } from './Typed';
export interface TypedWithBaseType extends Typed {
    '@baseType'?: string;
}
