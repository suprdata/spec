import { CharacteristicValueUse } from '../CharacteristicValueUse';
import { CharacteristicValueResource } from '../CharacteristicValueResource';
import { Thing } from '../Thing';

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
    (characteristicValueResource: CharacteristicValueResource) => ({
      characteristicValueResource,
    }),
  ),
});
export const referenceCharValueUse = (
  specCharValueUseId: string,
  resources: CharacteristicValueResource[],
): CharacteristicValueUse => ({
  commonSpecCharValueUse: {
    '@id': specCharValueUseId,
  },
  commonCharValues: resources.map(
    (characteristicValueReference: Thing) => ({
      characteristicValueReference,
    }),
  ),
});
