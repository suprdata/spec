import {Id} from './types/Id';
import {SpecificationCharacteristicValue} from './SpecificationCharacteristicValue';
import {Common} from './types/Common';

export interface SpecificationCharacteristicValueUse extends Id, Common {
  valueType?: string;// a type could be string, whereas a mimetype needs to be a correct mimetype
  minCardinality?: number;
  maxCardinality?: number;
  specificationCharacteristicValue?: undefined | SpecificationCharacteristicValue;
}
