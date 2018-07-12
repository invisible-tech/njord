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
- `NJORD_URL` - Njord hostname url. Ex: `http://inv-njord.herokuapp.com/`

Consume programmatically like below:

```js
import { recordEvent } from '@invisible/njord/client'

[...]
// Inside some async function
  await recordEvent({ name: 'eventName', metadata: { data: 'test' } })
[...]
```