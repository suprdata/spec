import { CharacteristicValueResource } from './CharacteristicValueResource';

// eslint-disable-next-line import/no-cycle
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
