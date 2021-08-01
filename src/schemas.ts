export const accessRightSchema = `{
  "$ref": "#/definitions/AccessRight",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "definitions": {
    "AccessRight": {
      "additionalProperties": false,
      "properties": {
        "@id": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      },
      "required": [
        "@id"
      ],
      "type": "object"
    }
  }
}
`;
export const actionSchema = `{
  "$ref": "#/definitions/Action",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "definitions": {
    "AccessRight": {
      "additionalProperties": false,
      "properties": {
        "@id": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      },
      "required": [
        "@id"
      ],
      "type": "object"
    },
    "Action": {
      "additionalProperties": false,
      "properties": {
        "@context": {
          "type": "string"
        },
        "@id": {
          "type": "string"
        },
        "@type": {
          "type": "string"
        },
        "@version": {
          "type": "string"
        },
        "accessRights": {
          "items": {
            "$ref": "#/definitions/AccessRight"
          },
          "type": "array"
        },
        "description": {
          "type": "string"
        },
        "lifecycleStatus": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "validFor": {
          "$ref": "#/definitions/TimePeriod"
        }
      },
      "required": [
        "@id"
      ],
      "type": "object"
    },
    "TimePeriod": {
      "additionalProperties": false,
      "properties": {
        "from": {
          "format": "date-time",
          "type": "string"
        },
        "to": {
          "format": "date-time",
          "type": "string"
        }
      },
      "required": [
        "from",
        "to"
      ],
      "type": "object"
    }
  }
}
`;
export const categorySchema = `{
  "$ref": "#/definitions/Category",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "definitions": {
    "AccessRight": {
      "additionalProperties": false,
      "properties": {
        "@id": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      },
      "required": [
        "@id"
      ],
      "type": "object"
    },
    "Action": {
      "additionalProperties": false,
      "properties": {
        "@context": {
          "type": "string"
        },
        "@id": {
          "type": "string"
        },
        "@type": {
          "type": "string"
        },
        "@version": {
          "type": "string"
        },
        "accessRights": {
          "items": {
            "$ref": "#/definitions/AccessRight"
          },
          "type": "array"
        },
        "description": {
          "type": "string"
        },
        "lifecycleStatus": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "validFor": {
          "$ref": "#/definitions/TimePeriod"
        }
      },
      "required": [
        "@id"
      ],
      "type": "object"
    },
    "Category": {
      "additionalProperties": false,
      "properties": {
        "description": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "parentCategory": {
          "$ref": "#/definitions/Category"
        },
        "subCategories": {
          "items": {
            "$ref": "#/definitions/Category"
          },
          "type": "array"
        },
        "things": {
          "items": {
            "$ref": "#/definitions/Thing"
          },
          "type": "array"
        }
      },
      "type": "object"
    },
    "CharacteristicValue": {
      "additionalProperties": false,
      "description": "Needs to have either value or valueResource.",
      "properties": {
        "characteristicValueResource": {
          "$ref": "#/definitions/CharacteristicValueResource"
        },
        "hasResource": {
          "type": "boolean"
        },
        "isDefault": {
          "type": "boolean"
        },
        "value": {
        }
      },
      "type": "object"
    },
    "CharacteristicValueResource": {
      "additionalProperties": false,
      "properties": {
        "accessRights": {
          "items": {
            "$ref": "#/definitions/AccessRight"
          },
          "type": "array"
        },
        "byte": {
          "type": "number"
        },
        "contentLink": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "mimeType": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "CharacteristicValueUse": {
      "additionalProperties": false,
      "properties": {
        "commonCharValues": {
          "description": "Needs to correspondent to a subset of values of CommonCharValueUse.commonSpecCharValueUse\n\nValues are always a real list if maxCardinality > 1 or not defined Values are always single values if maxCardinality = 1",
          "items": {
            "$ref": "#/definitions/CharacteristicValue"
          },
          "type": "array"
        },
        "commonSpecCharValueUse": {
          "$ref": "#/definitions/SpecificationCharacteristicValueUse"
        }
      },
      "required": [
        "commonSpecCharValueUse",
        "commonCharValues"
      ],
      "type": "object"
    },
    "Specification": {
      "additionalProperties": false,
      "properties": {
        "@context": {
          "type": "string"
        },
        "@id": {
          "type": "string"
        },
        "@type": {
          "type": "string"
        },
        "@version": {
          "type": "string"
        },
        "actions": {
          "items": {
            "$ref": "#/definitions/Action"
          },
          "type": "array"
        },
        "createdAt": {
          "format": "date-time",
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "isBundle": {
          "type": "boolean"
        },
        "lifecycleStatus": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "specificationCharacteristicValueUse": {
          "items": {
            "$ref": "#/definitions/SpecificationCharacteristicValueUse"
          },
          "type": "array"
        },
        "updatedAt": {
          "format": "date-time",
          "type": "string"
        },
        "validFor": {
          "$ref": "#/definitions/TimePeriod"
        }
      },
      "required": [
        "@id"
      ],
      "type": "object"
    },
    "SpecificationCharacteristicValue": {
      "additionalProperties": false,
      "properties": {
        "accessRights": {
          "items": {
            "$ref": "#/definitions/AccessRight"
          },
          "type": "array"
        },
        "editable": {
          "type": "boolean"
        },
        "isDefault": {
          "type": "boolean"
        },
        "isResource": {
          "type": "boolean"
        },
        "producible": {
          "description": "allow or disallow generated content from any source with rules based on CommonSpecCharValueUse for example comments of any news",
          "type": "boolean"
        },
        "rangeInterval": {
          "type": "string"
        },
        "value": {
        },
        "valueFrom": {
        },
        "valueRegex": {
          "type": "string"
        },
        "valueResource": {
          "$ref": "#/definitions/SpecificationCharacteristicValueResource"
        },
        "valueTo": {
        },
        "visible": {
          "type": "boolean"
        }
      },
      "type": "object"
    },
    "SpecificationCharacteristicValueResource": {
      "additionalProperties": false,
      "properties": {
        "maxBytes": {
          "type": "number"
        },
        "mimeTypes": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "SpecificationCharacteristicValueUse": {
      "additionalProperties": false,
      "properties": {
        "@id": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "maxCardinality": {
          "type": "number"
        },
        "minCardinality": {
          "type": "number"
        },
        "name": {
          "type": "string"
        },
        "specificationCharacteristicValue": {
          "$ref": "#/definitions/SpecificationCharacteristicValue"
        },
        "valueType": {
          "type": "string"
        }
      },
      "required": [
        "@id"
      ],
      "type": "object"
    },
    "Thing": {
      "additionalProperties": false,
      "properties": {
        "@baseType": {
          "type": "string"
        },
        "@context": {
          "type": "string"
        },
        "@id": {
          "type": "string"
        },
        "@type": {
          "type": "string"
        },
        "@version": {
          "type": "string"
        },
        "accessRights": {
          "items": {
            "$ref": "#/definitions/AccessRight"
          },
          "type": "array"
        },
        "characteristicValueUse": {
          "description": "values need to correspondent to values of spec",
          "items": {
            "$ref": "#/definitions/CharacteristicValueUse"
          },
          "type": "array"
        },
        "createdAt": {
          "format": "date-time",
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "isBundle": {
          "type": "boolean"
        },
        "lifecycleStatus": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "relatedThings": {
          "items": {
            "$ref": "#/definitions/Thing"
          },
          "type": "array"
        },
        "specification": {
          "$ref": "#/definitions/Specification"
        },
        "subThings": {
          "items": {
            "$ref": "#/definitions/Thing"
          },
          "type": "array"
        },
        "updatedAt": {
          "format": "date-time",
          "type": "string"
        },
        "validFor": {
          "$ref": "#/definitions/TimePeriod"
        }
      },
      "required": [
        "@id",
        "specification"
      ],
      "type": "object"
    },
    "TimePeriod": {
      "additionalProperties": false,
      "properties": {
        "from": {
          "format": "date-time",
          "type": "string"
        },
        "to": {
          "format": "date-time",
          "type": "string"
        }
      },
      "required": [
        "from",
        "to"
      ],
      "type": "object"
    }
  }
}
`;
export const characteristicValueSchema = `{
  "$ref": "#/definitions/CharacteristicValue",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "definitions": {
    "AccessRight": {
      "additionalProperties": false,
      "properties": {
        "@id": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      },
      "required": [
        "@id"
      ],
      "type": "object"
    },
    "CharacteristicValue": {
      "additionalProperties": false,
      "description": "Needs to have either value or valueResource.",
      "properties": {
        "characteristicValueResource": {
          "$ref": "#/definitions/CharacteristicValueResource"
        },
        "hasResource": {
          "type": "boolean"
        },
        "isDefault": {
          "type": "boolean"
        },
        "value": {
        }
      },
      "type": "object"
    },
    "CharacteristicValueResource": {
      "additionalProperties": false,
      "properties": {
        "accessRights": {
          "items": {
            "$ref": "#/definitions/AccessRight"
          },
          "type": "array"
        },
        "byte": {
          "type": "number"
        },
        "contentLink": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "mimeType": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      },
      "type": "object"
    }
  }
}
`;
export const characteristicValueResourceSchema = `{
  "$ref": "#/definitions/CharacteristicValueResource",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "definitions": {
    "AccessRight": {
      "additionalProperties": false,
      "properties": {
        "@id": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      },
      "required": [
        "@id"
      ],
      "type": "object"
    },
    "CharacteristicValueResource": {
      "additionalProperties": false,
      "properties": {
        "accessRights": {
          "items": {
            "$ref": "#/definitions/AccessRight"
          },
          "type": "array"
        },
        "byte": {
          "type": "number"
        },
        "contentLink": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "mimeType": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      },
      "type": "object"
    }
  }
}
`;
export const characteristicValueUseSchema = `{
  "$ref": "#/definitions/CharacteristicValueUse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "definitions": {
    "AccessRight": {
      "additionalProperties": false,
      "properties": {
        "@id": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      },
      "required": [
        "@id"
      ],
      "type": "object"
    },
    "CharacteristicValue": {
      "additionalProperties": false,
      "description": "Needs to have either value or valueResource.",
      "properties": {
        "characteristicValueResource": {
          "$ref": "#/definitions/CharacteristicValueResource"
        },
        "hasResource": {
          "type": "boolean"
        },
        "isDefault": {
          "type": "boolean"
        },
        "value": {
        }
      },
      "type": "object"
    },
    "CharacteristicValueResource": {
      "additionalProperties": false,
      "properties": {
        "accessRights": {
          "items": {
            "$ref": "#/definitions/AccessRight"
          },
          "type": "array"
        },
        "byte": {
          "type": "number"
        },
        "contentLink": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "mimeType": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "CharacteristicValueUse": {
      "additionalProperties": false,
      "properties": {
        "commonCharValues": {
          "description": "Needs to correspondent to a subset of values of CommonCharValueUse.commonSpecCharValueUse\n\nValues are always a real list if maxCardinality > 1 or not defined Values are always single values if maxCardinality = 1",
          "items": {
            "$ref": "#/definitions/CharacteristicValue"
          },
          "type": "array"
        },
        "commonSpecCharValueUse": {
          "$ref": "#/definitions/SpecificationCharacteristicValueUse"
        }
      },
      "required": [
        "commonSpecCharValueUse",
        "commonCharValues"
      ],
      "type": "object"
    },
    "SpecificationCharacteristicValue": {
      "additionalProperties": false,
      "properties": {
        "accessRights": {
          "items": {
            "$ref": "#/definitions/AccessRight"
          },
          "type": "array"
        },
        "editable": {
          "type": "boolean"
        },
        "isDefault": {
          "type": "boolean"
        },
        "isResource": {
          "type": "boolean"
        },
        "producible": {
          "description": "allow or disallow generated content from any source with rules based on CommonSpecCharValueUse for example comments of any news",
          "type": "boolean"
        },
        "rangeInterval": {
          "type": "string"
        },
        "value": {
        },
        "valueFrom": {
        },
        "valueRegex": {
          "type": "string"
        },
        "valueResource": {
          "$ref": "#/definitions/SpecificationCharacteristicValueResource"
        },
        "valueTo": {
        },
        "visible": {
          "type": "boolean"
        }
      },
      "type": "object"
    },
    "SpecificationCharacteristicValueResource": {
      "additionalProperties": false,
      "properties": {
        "maxBytes": {
          "type": "number"
        },
        "mimeTypes": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "SpecificationCharacteristicValueUse": {
      "additionalProperties": false,
      "properties": {
        "@id": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "maxCardinality": {
          "type": "number"
        },
        "minCardinality": {
          "type": "number"
        },
        "name": {
          "type": "string"
        },
        "specificationCharacteristicValue": {
          "$ref": "#/definitions/SpecificationCharacteristicValue"
        },
        "valueType": {
          "type": "string"
        }
      },
      "required": [
        "@id"
      ],
      "type": "object"
    }
  }
}
`;
export const specificationSchema = `{
  "$ref": "#/definitions/Specification",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "definitions": {
    "AccessRight": {
      "additionalProperties": false,
      "properties": {
        "@id": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      },
      "required": [
        "@id"
      ],
      "type": "object"
    },
    "Action": {
      "additionalProperties": false,
      "properties": {
        "@context": {
          "type": "string"
        },
        "@id": {
          "type": "string"
        },
        "@type": {
          "type": "string"
        },
        "@version": {
          "type": "string"
        },
        "accessRights": {
          "items": {
            "$ref": "#/definitions/AccessRight"
          },
          "type": "array"
        },
        "description": {
          "type": "string"
        },
        "lifecycleStatus": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "validFor": {
          "$ref": "#/definitions/TimePeriod"
        }
      },
      "required": [
        "@id"
      ],
      "type": "object"
    },
    "Specification": {
      "additionalProperties": false,
      "properties": {
        "@context": {
          "type": "string"
        },
        "@id": {
          "type": "string"
        },
        "@type": {
          "type": "string"
        },
        "@version": {
          "type": "string"
        },
        "actions": {
          "items": {
            "$ref": "#/definitions/Action"
          },
          "type": "array"
        },
        "createdAt": {
          "format": "date-time",
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "isBundle": {
          "type": "boolean"
        },
        "lifecycleStatus": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "specificationCharacteristicValueUse": {
          "items": {
            "$ref": "#/definitions/SpecificationCharacteristicValueUse"
          },
          "type": "array"
        },
        "updatedAt": {
          "format": "date-time",
          "type": "string"
        },
        "validFor": {
          "$ref": "#/definitions/TimePeriod"
        }
      },
      "required": [
        "@id"
      ],
      "type": "object"
    },
    "SpecificationCharacteristicValue": {
      "additionalProperties": false,
      "properties": {
        "accessRights": {
          "items": {
            "$ref": "#/definitions/AccessRight"
          },
          "type": "array"
        },
        "editable": {
          "type": "boolean"
        },
        "isDefault": {
          "type": "boolean"
        },
        "isResource": {
          "type": "boolean"
        },
        "producible": {
          "description": "allow or disallow generated content from any source with rules based on CommonSpecCharValueUse for example comments of any news",
          "type": "boolean"
        },
        "rangeInterval": {
          "type": "string"
        },
        "value": {
        },
        "valueFrom": {
        },
        "valueRegex": {
          "type": "string"
        },
        "valueResource": {
          "$ref": "#/definitions/SpecificationCharacteristicValueResource"
        },
        "valueTo": {
        },
        "visible": {
          "type": "boolean"
        }
      },
      "type": "object"
    },
    "SpecificationCharacteristicValueResource": {
      "additionalProperties": false,
      "properties": {
        "maxBytes": {
          "type": "number"
        },
        "mimeTypes": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "SpecificationCharacteristicValueUse": {
      "additionalProperties": false,
      "properties": {
        "@id": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "maxCardinality": {
          "type": "number"
        },
        "minCardinality": {
          "type": "number"
        },
        "name": {
          "type": "string"
        },
        "specificationCharacteristicValue": {
          "$ref": "#/definitions/SpecificationCharacteristicValue"
        },
        "valueType": {
          "type": "string"
        }
      },
      "required": [
        "@id"
      ],
      "type": "object"
    },
    "TimePeriod": {
      "additionalProperties": false,
      "properties": {
        "from": {
          "format": "date-time",
          "type": "string"
        },
        "to": {
          "format": "date-time",
          "type": "string"
        }
      },
      "required": [
        "from",
        "to"
      ],
      "type": "object"
    }
  }
}
`;
export const specificationCharacteristicValueSchema = `{
  "$ref": "#/definitions/SpecificationCharacteristicValue",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "definitions": {
    "AccessRight": {
      "additionalProperties": false,
      "properties": {
        "@id": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      },
      "required": [
        "@id"
      ],
      "type": "object"
    },
    "SpecificationCharacteristicValue": {
      "additionalProperties": false,
      "properties": {
        "accessRights": {
          "items": {
            "$ref": "#/definitions/AccessRight"
          },
          "type": "array"
        },
        "editable": {
          "type": "boolean"
        },
        "isDefault": {
          "type": "boolean"
        },
        "isResource": {
          "type": "boolean"
        },
        "producible": {
          "description": "allow or disallow generated content from any source with rules based on CommonSpecCharValueUse for example comments of any news",
          "type": "boolean"
        },
        "rangeInterval": {
          "type": "string"
        },
        "value": {
        },
        "valueFrom": {
        },
        "valueRegex": {
          "type": "string"
        },
        "valueResource": {
          "$ref": "#/definitions/SpecificationCharacteristicValueResource"
        },
        "valueTo": {
        },
        "visible": {
          "type": "boolean"
        }
      },
      "type": "object"
    },
    "SpecificationCharacteristicValueResource": {
      "additionalProperties": false,
      "properties": {
        "maxBytes": {
          "type": "number"
        },
        "mimeTypes": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      },
      "type": "object"
    }
  }
}
`;
export const specificationCharacteristicValueResourceSchema = `{
  "$ref": "#/definitions/SpecificationCharacteristicValueResource",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "definitions": {
    "SpecificationCharacteristicValueResource": {
      "additionalProperties": false,
      "properties": {
        "maxBytes": {
          "type": "number"
        },
        "mimeTypes": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      },
      "type": "object"
    }
  }
}
`;
export const specificationCharacteristicValueUseSchema = `{
  "$ref": "#/definitions/SpecificationCharacteristicValueUse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "definitions": {
    "AccessRight": {
      "additionalProperties": false,
      "properties": {
        "@id": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      },
      "required": [
        "@id"
      ],
      "type": "object"
    },
    "SpecificationCharacteristicValue": {
      "additionalProperties": false,
      "properties": {
        "accessRights": {
          "items": {
            "$ref": "#/definitions/AccessRight"
          },
          "type": "array"
        },
        "editable": {
          "type": "boolean"
        },
        "isDefault": {
          "type": "boolean"
        },
        "isResource": {
          "type": "boolean"
        },
        "producible": {
          "description": "allow or disallow generated content from any source with rules based on CommonSpecCharValueUse for example comments of any news",
          "type": "boolean"
        },
        "rangeInterval": {
          "type": "string"
        },
        "value": {
        },
        "valueFrom": {
        },
        "valueRegex": {
          "type": "string"
        },
        "valueResource": {
          "$ref": "#/definitions/SpecificationCharacteristicValueResource"
        },
        "valueTo": {
        },
        "visible": {
          "type": "boolean"
        }
      },
      "type": "object"
    },
    "SpecificationCharacteristicValueResource": {
      "additionalProperties": false,
      "properties": {
        "maxBytes": {
          "type": "number"
        },
        "mimeTypes": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "SpecificationCharacteristicValueUse": {
      "additionalProperties": false,
      "properties": {
        "@id": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "maxCardinality": {
          "type": "number"
        },
        "minCardinality": {
          "type": "number"
        },
        "name": {
          "type": "string"
        },
        "specificationCharacteristicValue": {
          "$ref": "#/definitions/SpecificationCharacteristicValue"
        },
        "valueType": {
          "type": "string"
        }
      },
      "required": [
        "@id"
      ],
      "type": "object"
    }
  }
}
`;
export const thingSchema = `{
  "$ref": "#/definitions/Thing",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "definitions": {
    "AccessRight": {
      "additionalProperties": false,
      "properties": {
        "@id": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      },
      "required": [
        "@id"
      ],
      "type": "object"
    },
    "Action": {
      "additionalProperties": false,
      "properties": {
        "@context": {
          "type": "string"
        },
        "@id": {
          "type": "string"
        },
        "@type": {
          "type": "string"
        },
        "@version": {
          "type": "string"
        },
        "accessRights": {
          "items": {
            "$ref": "#/definitions/AccessRight"
          },
          "type": "array"
        },
        "description": {
          "type": "string"
        },
        "lifecycleStatus": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "validFor": {
          "$ref": "#/definitions/TimePeriod"
        }
      },
      "required": [
        "@id"
      ],
      "type": "object"
    },
    "CharacteristicValue": {
      "additionalProperties": false,
      "description": "Needs to have either value or valueResource.",
      "properties": {
        "characteristicValueResource": {
          "$ref": "#/definitions/CharacteristicValueResource"
        },
        "hasResource": {
          "type": "boolean"
        },
        "isDefault": {
          "type": "boolean"
        },
        "value": {
        }
      },
      "type": "object"
    },
    "CharacteristicValueResource": {
      "additionalProperties": false,
      "properties": {
        "accessRights": {
          "items": {
            "$ref": "#/definitions/AccessRight"
          },
          "type": "array"
        },
        "byte": {
          "type": "number"
        },
        "contentLink": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "mimeType": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "CharacteristicValueUse": {
      "additionalProperties": false,
      "properties": {
        "commonCharValues": {
          "description": "Needs to correspondent to a subset of values of CommonCharValueUse.commonSpecCharValueUse\n\nValues are always a real list if maxCardinality > 1 or not defined Values are always single values if maxCardinality = 1",
          "items": {
            "$ref": "#/definitions/CharacteristicValue"
          },
          "type": "array"
        },
        "commonSpecCharValueUse": {
          "$ref": "#/definitions/SpecificationCharacteristicValueUse"
        }
      },
      "required": [
        "commonSpecCharValueUse",
        "commonCharValues"
      ],
      "type": "object"
    },
    "Specification": {
      "additionalProperties": false,
      "properties": {
        "@context": {
          "type": "string"
        },
        "@id": {
          "type": "string"
        },
        "@type": {
          "type": "string"
        },
        "@version": {
          "type": "string"
        },
        "actions": {
          "items": {
            "$ref": "#/definitions/Action"
          },
          "type": "array"
        },
        "createdAt": {
          "format": "date-time",
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "isBundle": {
          "type": "boolean"
        },
        "lifecycleStatus": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "specificationCharacteristicValueUse": {
          "items": {
            "$ref": "#/definitions/SpecificationCharacteristicValueUse"
          },
          "type": "array"
        },
        "updatedAt": {
          "format": "date-time",
          "type": "string"
        },
        "validFor": {
          "$ref": "#/definitions/TimePeriod"
        }
      },
      "required": [
        "@id"
      ],
      "type": "object"
    },
    "SpecificationCharacteristicValue": {
      "additionalProperties": false,
      "properties": {
        "accessRights": {
          "items": {
            "$ref": "#/definitions/AccessRight"
          },
          "type": "array"
        },
        "editable": {
          "type": "boolean"
        },
        "isDefault": {
          "type": "boolean"
        },
        "isResource": {
          "type": "boolean"
        },
        "producible": {
          "description": "allow or disallow generated content from any source with rules based on CommonSpecCharValueUse for example comments of any news",
          "type": "boolean"
        },
        "rangeInterval": {
          "type": "string"
        },
        "value": {
        },
        "valueFrom": {
        },
        "valueRegex": {
          "type": "string"
        },
        "valueResource": {
          "$ref": "#/definitions/SpecificationCharacteristicValueResource"
        },
        "valueTo": {
        },
        "visible": {
          "type": "boolean"
        }
      },
      "type": "object"
    },
    "SpecificationCharacteristicValueResource": {
      "additionalProperties": false,
      "properties": {
        "maxBytes": {
          "type": "number"
        },
        "mimeTypes": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "SpecificationCharacteristicValueUse": {
      "additionalProperties": false,
      "properties": {
        "@id": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "maxCardinality": {
          "type": "number"
        },
        "minCardinality": {
          "type": "number"
        },
        "name": {
          "type": "string"
        },
        "specificationCharacteristicValue": {
          "$ref": "#/definitions/SpecificationCharacteristicValue"
        },
        "valueType": {
          "type": "string"
        }
      },
      "required": [
        "@id"
      ],
      "type": "object"
    },
    "Thing": {
      "additionalProperties": false,
      "properties": {
        "@baseType": {
          "type": "string"
        },
        "@context": {
          "type": "string"
        },
        "@id": {
          "type": "string"
        },
        "@type": {
          "type": "string"
        },
        "@version": {
          "type": "string"
        },
        "accessRights": {
          "items": {
            "$ref": "#/definitions/AccessRight"
          },
          "type": "array"
        },
        "characteristicValueUse": {
          "description": "values need to correspondent to values of spec",
          "items": {
            "$ref": "#/definitions/CharacteristicValueUse"
          },
          "type": "array"
        },
        "createdAt": {
          "format": "date-time",
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "isBundle": {
          "type": "boolean"
        },
        "lifecycleStatus": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "relatedThings": {
          "items": {
            "$ref": "#/definitions/Thing"
          },
          "type": "array"
        },
        "specification": {
          "$ref": "#/definitions/Specification"
        },
        "subThings": {
          "items": {
            "$ref": "#/definitions/Thing"
          },
          "type": "array"
        },
        "updatedAt": {
          "format": "date-time",
          "type": "string"
        },
        "validFor": {
          "$ref": "#/definitions/TimePeriod"
        }
      },
      "required": [
        "@id",
        "specification"
      ],
      "type": "object"
    },
    "TimePeriod": {
      "additionalProperties": false,
      "properties": {
        "from": {
          "format": "date-time",
          "type": "string"
        },
        "to": {
          "format": "date-time",
          "type": "string"
        }
      },
      "required": [
        "from",
        "to"
      ],
      "type": "object"
    }
  }
}
`;
