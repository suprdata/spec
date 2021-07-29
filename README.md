# @sprdata/spec

The SuprData specification allows the management of the entire 
lifecycle of specific models, the consultation of models during 
several processes such as content management, ordering processes, 
catalog management, workflow management, application processes and furthermore.

## Install

```bash
npm install @suprdata/spec
```

## Usage

We want to manage the players of a team.

Let's create very simple Athlete model.

```ts
const athlete = {
  '@context': 'SportsTeam',
  '@baseType': 'Person',
  '@type': 'Athlete',
  '@version': '1',
  name: 'Harry Kane',
  specification: {
    name: 'Player component',
    '@id': 'player/component',
  },
  accessRights: [
    {
      name: 'public',
      '@id': 'PUBLIC'
    }
  ]
}
```

Nextup we use schemas and ajv to validate the athlete model.

```ts
import {thingSchema} from './schemas';

const validateAthlete = ajv(thingSchema);
const valid = validate(athlete)
if (!valid) console.log(validate.errors)

```

Last but not least we create a JSON-Response for our API

```ts
emitResponse(JSON.stringify(athlete));
```

The frontend could use the spec to validate the incoming response.

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) and [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md) for details.

## Deployment

Only maintainers are allowed to deploy new versions!

1. Run `npm run release` which will update changelog, package version and creates a publishes a release and push everything to master.

## Security

If you discover any security related issues, please email marco_bunge@web.de instead of using the issue tracker.

## Credits

- [Marco Bunge][link-author]
- [All Contributors][link-contributors]

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

