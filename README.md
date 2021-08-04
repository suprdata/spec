# @suprdata/spec

The SuprData specification allows the management of the entire lifecycle of specific models, the consultation of models
during several processes such as content management, ordering processes, catalog management, workflow management,
application processes and furthermore.

## Install

```bash
npm install @suprdata/spec
```

## Usage

We want to manage the players of a team.

Let's specify and model athletes and create a list of known football players.

```ts
import {model, typed} from './model';
import {Specification} from './Specification';
import {Thing} from './Thing';

const personType = typed<Specification>(('Common/Person'), {
  '@context': 'Common',
  '@version': '1',
});

const personSpec: Specification = personType({
  name: 'Player component',
  '@id': 'player/component',
});

const athleteType = typed<Thing>('SportsTeam/Athlete', {
  '@context': 'SportsTeam',
  '@baseType': 'Person',
  '@version': '1',
});

const baseAthelete = model<Thing>(athleteType({
  specification: personSpec,
  accessRights: [
    {
      name: 'public',
      '@id': 'PUBLIC'
    }
  ]
}))

const athletes: Thing[] = [
  baseAthelete({
    name: 'Harry Kane',
  }),
  baseAthelete({
    name: 'Paul Pogba',
  }),
  baseAthelete({
    name: 'Toni Kroos',
  }),
];
```

We use schemas and ajv to validate the modeled athlete and create a JSON-Response for our API.

```ts
import {thingSchema} from './schemas';

const validAthletes = athletes.filter((athlete) => {
  const validateAthlete = ajv(thingSchema);
  const valid = validate(athlete)
  if (!valid) console.log(validate.errors)
});

emitResponse(JSON.stringify(validAthletes));
```

Supr data spec helps to create consistent data and helps to exchange between different systems, eg. between an API and Website.

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) and [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md) for details.

## Deployment

Only maintainers are allowed to deploy new versions!

1. Run `npm run release` which will update changelog, package version and creates a publishes a release and push
   everything to master.

## Security

If you discover any security related issues, please email marco_bunge@web.de instead of using the issue tracker.

## Credits

- [Marco Bunge][link-author]
- [All Contributors][link-contributors]

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

[link-author]: https://github.com/mbunge
[link-contributors]: https://github.com/suprdata/spec/graphs/contributors
