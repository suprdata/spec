import {Id} from './types/Id';
import {Common} from './types/Common';
import {Typed} from './types/Typed';
import {AccessRightsManagement} from './types/AccessRightsManagement';
import {ValidFor} from './types/ValidFor';
import {LifecycleStatus} from './types/LifecycleStatus';

export interface Action extends Id,
  Common,
  Typed,
  AccessRightsManagement,
  ValidFor,
  LifecycleStatus {
}
