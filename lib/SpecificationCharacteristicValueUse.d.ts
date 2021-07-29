import { Id } from './types/Id';
import { SpecificationCharacteristicValue } from './SpecificationCharacteristicValue';
import { Common } from './types/Common';
export interface SpecificationCharacteristicValueUse extends Id, Common {
    valueType?: string;
    minCardinality?: number;
    maxCardinality?: number;
    specificationCharacteristicValue?: undefined | SpecificationCharacteristicValue;
}
