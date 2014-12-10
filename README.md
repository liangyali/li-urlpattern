#  [![Build Status](https://secure.travis-ci.org/liangyali/li-urlpattern.png?branch=master)](http://travis-ci.org/liangyali/li-urlpattern)[![Coverage Status](https://coveralls.io/repos/liangyali/li-urlpattern/badge.png?branch=master)](https://coveralls.io/r/liangyali/li-urlpattern?branch=master)


## urlpattern parse Getting Started

Install the module with: `npm install li-urlpattern`

```js
var pattern = require('li-urlpattern');

// -> /users/1000
pattern.parse('/users/:id', {id: 1000});

```

## Documentation

_(Coming soon)_


## Examples

```js
var pattern = require('li-urlpattern');

// => /users/1000
pattern.parse('/users/:id', {id: 1000});

// =>/users/1000?type=1
pattern.parse('/users/:id', {id: 1000,type:1});

// =>/users/1000.json?type=1
pattern.parse('/users/:id.:format', {id: 1000,format:'json',type:1});

```


## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com).


## License

Copyright (c) 2014 liangyali  
Licensed under the MIT license.
