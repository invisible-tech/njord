### General notes 

* Use express.js
* Testing (superagent, mocha) - (factory grow for creating models will be added later)
* NYC details code coverage and is part of running `yarn test`.  The default is 90% code coverage, but we can (and should) talk about what numbers are reasonable for us to use by default.
* `specs` folder mirrors the `src` folder and mirrors files 1 to 1.
* Add @invisible/eslint-config to the project
* Create your documentation in swagger.yaml.  We use yaml because the editor swagger provides uses yaml, and the editor makes it much easier to troubleshoot any errors you might make in your yaml file.
* Use the following .eslintrc.json:

```
{
  "extends": "@invisible"
}
```

### Documentation 
Documentation should be done through swagger.  There's a swagger.json file that all end points should be documented and created in.  Good places to read up if you are not familiar with swagger https://swagger.io/ is a good place to read up.

### Folder structure 
```
/src
  /api
    /config
    /controllers
    /middlewares
    /routes
    index.js
    swagger.json
  /models
/test
  /specs
    /api
      /controllers
      ... etc (should mirror the src directory)
```

### Testing 

1. The default should be to write a unit test for something unless there's a good reason not to.  If the unit test starts looking like we're mocking everything and is not very useful because everything is mocked, we should write an integration test.
2. When we find a bug, we should write a test explicitly addressing that bug and making sure the fix passes that test.

### TODO 
- Add Dockerfile
- Fill out CONTRIBUTING.md
- Split swagger.json file out so that it can be documented alongside the controllers vs having a single huge JSON file that is hard to search through.
-- Add a mocha test to verify there is documentation added for an endpoint
-- Look into making this into a library
