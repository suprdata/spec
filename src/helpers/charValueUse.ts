import { CharacteristicValueUse } from '../CharacteristicValueUse';
import { CharacteristicValueResource } from '../CharacteristicValueResource';

export const simpleCharValueUse = (
  specCharValueUseId: string,
  values: any[],
): CharacteristicValueUse => ({
  commonSpecCharValueUse: {
    '@id': specCharValueUseId,
  },
  commonCharValues: values.map(
    (value: any) => ({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      value,
    }),
  ),
});

export const resourceCharValueUse = (
  specCharValueUseId: string,
  resources: CharacteristicValueResource[],
): CharacteristicValueUse => ({
  commonSpecCharValueUse: {
    '@id': specCharValueUseId,
  },
  commonCharValues: resources.map(
    (characteristicValueResource: any) => ({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      characteristicValueResource,
    }),
  ),
});
