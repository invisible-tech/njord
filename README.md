# Njord/Server

## Set up Environment
You need to set the following environment variables on your `.env` file:
- `NODE_ENV, PORT, DB_CONNECTION_STRING, DB_TEST_CONNECTION_STRING, NJORD_API_TOKEN`

## How to start Njord server?

```sh
$ yarn build
$ node build/index.js
```

## Routes
### POST /api/v1/event
This route creates an event and save it to a MongoDB database.

The incoming request `body` should have the following parameters:

#### name
Type: `String`

#### metadata
Type: `Object`


# Njord/client
## How to install the client?

`npm install @invisible/njord`

or

`yarn add @invisible/njord`

## API

### recordEvent(options)
- Returns a `Promise` for a response from Njord server.

#### options

```ts
interface optionsInterface {
  name: string,
  metadata: object,
}
```

## Environment Variables
Add the following environment variables:
- `NJORD_API_TOKEN` - Njord server authentication token.
- `NJORD_HOSTNAME` - Njord hostname url. Ex: `http://inv-njord.herokuapp.com/`

Consume programmatically like below:

```js
import { recordEvent } from '@invisible/njord/client'

[...]
// Inside some async function
  await recordEvent({ name: 'eventName', metadata: { data: 'test' } })
[...]
```

# LICENSE
MIT
