"use strict";

module.exports = function (grunt) {

    // load the project's grunt tasks from a directory
    require('grunt-config-dir')(grunt, {
        configDir: require('path').resolve('tasks')
    });

    // register group tasks
    grunt.registerTask('default', ['jshint', 'mochaTest']);
    grunt.registerTask('test', ['mochaTest']);
};