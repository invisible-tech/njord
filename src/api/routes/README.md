This folder would contain all of the routes called by the API.

## POST /api/v1/event
This route creates an event and save it to a MongoDB database.

The incoming request `body` should have the following parameters:

### name
Type: `String`

### metadata
Type: `Object`
