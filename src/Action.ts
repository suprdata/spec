import { Id } from './types/Id';
import { Common } from './types/Common';
import { Typed } from './types/Typed';
import { AccessRightManagement } from './types/AccessRightManagement';
import { ValidFor } from './types/ValidFor';
import { LifecycleStatus } from './types/LifecycleStatus';

export interface Action extends Id,
  Common,
  Typed,
  AccessRightManagement,
  ValidFor,
  LifecycleStatus {
}
