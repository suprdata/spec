import { Common } from './types/Common';
import { AccessRightManagement } from './types/AccessRightManagement';

export interface CharacteristicValueResource extends Common, AccessRightManagement {
  byte?: number;
  mimeType?: string;
  contentLink?: string;
}
