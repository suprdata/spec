import { AccessRightManagement } from './types/AccessRightManagement';
import { SpecificationCharacteristicValueResource } from './SpecificationCharacteristicValueResource';

export interface SpecificationCharacteristicValue extends AccessRightManagement {
  isDefault?: boolean;
  isResource?: boolean;

  /**
   *   allow or disallow generated content from any source with rules based on CommonSpecCharValueUse
   *   for example comments of any news
   */
  producible?: boolean;
  editable?: boolean;
  visible?: boolean;
  rangeInterval?: string;
  valueFrom?: any;
  valueTo?: any;
  valueRegex?: string;
  value?: any;
  valueResource?: undefined | SpecificationCharacteristicValueResource;
}
