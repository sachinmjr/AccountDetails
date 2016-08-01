// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      '../app/lib/jquery.min.js',
      '../app/lib/angular.min.js',
      '../app/lib/angular-animate.js',
      '../app/lib/angular-route.js',
      '../app/lib/angular-resource.js',
      '../app/lib/angular-mocks.js',
      '../app/app.js',
      '../app/js/**/*.js',
      '../test/unitTest.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine'
    ],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome']
  });
};
