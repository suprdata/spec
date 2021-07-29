import { CharacteristicValueResource } from './CharacteristicValueResource';
/**
 * Needs to have either value or valueResource.
 */
export interface CharacteristicValue {
    isDefault?: boolean;
    hasResource?: boolean;
    value?: any;
    characteristicValueResource?: undefined | CharacteristicValueResource;
}
