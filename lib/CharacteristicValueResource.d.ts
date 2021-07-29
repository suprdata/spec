import { AccessRights } from './AccessRights';
import { Common } from './types/Common';
export interface CharacteristicValueResource extends Common {
    byte?: number;
    mimeType?: string;
    contentLink?: string;
    accessRights?: AccessRights[];
}
