import { CharacteristicValue } from './CharacteristicValue';
import { SpecificationCharacteristicValueUse } from './SpecificationCharacteristicValueUse';

export interface CharacteristicValueUse {
  commonSpecCharValueUse: SpecificationCharacteristicValueUse;

  /**
   * Needs to correspondent to a subset of values of
   * CommonCharValueUse.commonSpecCharValueUse
   *
   * Values are always a real list if maxCardinality > 1 or not defined
   * Values are always single values if maxCardinality = 1
   */
  commonCharValues: CharacteristicValue[];
}
