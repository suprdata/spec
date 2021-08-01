import { Id } from './types/Id';
import { TypedWithBaseType } from './types/TypedWithBaseType';
import { Timestamps } from './types/Timestamps';
import { AccessRightManagement } from './types/AccessRightManagement';
import { ValidFor } from './types/ValidFor';
import { LifecycleStatus } from './types/LifecycleStatus';
import { Common } from './types/Common';
import { Specification } from './Specification';
import { CharacteristicValueUse } from './CharacteristicValueUse';

export interface Thing extends Id,
  TypedWithBaseType,
  Timestamps,
  AccessRightManagement,
  ValidFor,
  LifecycleStatus,
  Common {
  specification: Specification;

  /**
   * values need to correspondent
   * to values of spec
   */
  characteristicValueUse?: undefined | CharacteristicValueUse[];
  subThings?: undefined | Thing[];
  relatedThings?: undefined | Thing[];
  isBundle?: boolean;
}
