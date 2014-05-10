# _error

A simple extension to the Node.js built-in Error object to allow you to pass an object to the constructor whose keys will be put into the Error object.

## Usage

Perhaps you currently do this:

```
var err = new Error('Something bad happened');
err.statusCode = 400;
err.pertinentInformation = 'something';
return callback(err);
```

Now you can now do this:
```
return callback(new Error('Something bad happened', {statusCode: 400, pertinentInformation: 'something'}));
```

That's all there is to it.

Tests are included.

### Licence

MIT
