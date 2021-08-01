import { CharacteristicValueResource } from './CharacteristicValueResource';
import { Thing } from './Thing';

/**
 * Needs to have either value or valueResource.
 */
export interface CharacteristicValue {
  isDefault?: boolean;
  hasResource?: boolean;
  value?: any;
  characteristicValueResource?: undefined | CharacteristicValueResource;
  characteristicValueReference?: undefined | Thing;
}
