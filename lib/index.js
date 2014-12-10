/*
 * 
 * http://liangyali.com
 *
 * Copyright (c) 2014 liangyali
 * Licensed under the MIT license.
 */

'use strict';

var querystring = require('querystring');
var _ = require('lodash');


/**
 * parse the url pattern
 * @param pattern {String}
 * @param params {Object}
 * @returns {string}
 * @api public
 * @example /user/:id  {id:1000,type:123} => /user/10000?type=123
 */
exports.parse = function (pattern, params) {

    if (!_.isString(pattern)) {
        throw new Error('pattern must be string');
    }
    params = _.clone(params);

    var url = pattern.replace(/:(\w+)/g, function (all, name) {
        var result = params[name] || all;
        delete params[name];
        return result;
    });

    if (_.isEmpty(params)) {
        return url;
    }

    return url + (url.indexOf('?') === -1 ? '?' : '&') + querystring.stringify(params);
};


