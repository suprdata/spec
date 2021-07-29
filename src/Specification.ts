import { Id } from './types/Id';
import { Typed } from './types/Typed';
import { Timestamps } from './types/Timestamps';
import { LifecycleStatus } from './types/LifecycleStatus';
import { ValidFor } from './types/ValidFor';
import { Common } from './types/Common';
import { SpecificationCharacteristicValueUse } from './SpecificationCharacteristicValueUse';
import { ActionManagement } from './types/ActionManagement';

export interface Specification extends Id,
  Typed,
  Timestamps,
  ValidFor,
  LifecycleStatus,
  Common,
  ActionManagement {
  isBundle?: boolean;
  specificationCharacteristicValueUse?: undefined | SpecificationCharacteristicValueUse[];
}
