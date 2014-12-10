'use strict';

var pattern = require('li-urlpattern');

// -> /users/1000
pattern.parse('/users/:id', {id: 1000});

