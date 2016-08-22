/* global process: true */

module.exports = function(config) {
    'use strict';

    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: './',

        frameworks: ['jasmine'],

        files: [
            'public/components/jquery/dist/jquery.min.js',
            'node_modules/jasmine-jquery/lib/jasmine-jquery.js',
            'public/javascripts/*.js',
            'public/javascripts/link/*.js',
            'spec/*.js',
            'spec/data/*.js',
            'spec/**/*.html'
        ],

        // list of files to exclude
        exclude: ['**/control.js'],

        reporters: ['spec'],

        specReporter: {
            suppressSkipped: true // do not print information about skipped tests
        },
        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        // CLI --auto-watch --no-auto-watch
        autoWatch: true,

        // Start these browsers, currently available:
        browsers: ['PhantomJS'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 20000,

        // Set to false to watch files for changes
        singleRun: false,

        preprocessors: {
            '**/*.html': []
        },

        plugins: [
            'karma-jasmine',
            'karma-spec-reporter',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher'
        ],

    });
};
