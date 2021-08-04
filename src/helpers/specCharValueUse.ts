import { SpecificationCharacteristicValueUse } from '../SpecificationCharacteristicValueUse';
import { SpecificationCharacteristicValueResource } from '../SpecificationCharacteristicValueResource';
import { Specification } from '../Specification';

export const specCharValueGenerator = (
  id: string, name?: string, valueType?: string, partialData?: Partial<SpecificationCharacteristicValueUse>,
): SpecificationCharacteristicValueUse => Object.assign(partialData ?? {}, {
  '@id': id,
  name: String(name),
  valueType: String(valueType),
});

export const specCharValueCardinalityDecorator = (
  spec: SpecificationCharacteristicValueUse, cardinality: {
    minCardinality: number,
    maxCardinality: number
  },
): SpecificationCharacteristicValueUse => ({ ...spec, ...cardinality });

export const booleanSpecCharValue = (
  id: string, name?: string,
): SpecificationCharacteristicValueUse => specCharValueCardinalityDecorator(
  specCharValueGenerator(
    id,
    name,
    'boolean',
    {
      specificationCharacteristicValue: {
        valueRegex: '/[0-1]{1}/',
        editable: false,
        producible: false,
        visible: true,
      },
    },
  ), { minCardinality: 0, maxCardinality: 1 },
);

export const enumSpecCharValue = (
  id: string, types: string[], name?: string,
): SpecificationCharacteristicValueUse => specCharValueCardinalityDecorator(
  specCharValueGenerator(
    id,
    name,
    'enum',
    {
      specificationCharacteristicValue: {
        valueRegex: `/(${
          types.reduce((prev, curr) => `${prev}|${curr}`)
        })/`,
        editable: false,
        producible: false,
        visible: true,
      },
    },
  ), { minCardinality: 0, maxCardinality: 1 },
);

export const stringSpecCharValue = (
  id: string, name?: string,
): SpecificationCharacteristicValueUse => specCharValueGenerator(
  id,
  name,
  'string',
  {
    specificationCharacteristicValue: {
      editable: false,
      producible: false,
      visible: true,
    },
  },
);
export const resourceSpecCharValue = (
  id: string, name?: string, config?: SpecificationCharacteristicValueResource,
): SpecificationCharacteristicValueUse => specCharValueGenerator(
  id,
  name,
  'resource',
  {
    isReference: false,
    isResource: true,
    specificationCharacteristicValue: {
      editable: false,
      producible: false,
      visible: true,
      isResource: true,
      valueResource: { ...config ?? {} },
    },
  },
);

export const referenceSpecCharValue = (
  id: string, name?: string, valueReferenceSpecification?: Specification,
): SpecificationCharacteristicValueUse => specCharValueGenerator(
  id,
  name,
  'reference',
  {
    isReference: true,
    isResource: false,
    specificationCharacteristicValue: {
      editable: false,
      producible: false,
      visible: true,
      isResource: true,
      valueReferenceSpecification,
    },
  },
);
