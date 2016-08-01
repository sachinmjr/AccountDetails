/*jslint node: true */
"use strict";

module.exports = function(grunt) {
  var appbaseURL='../app/';
  var path = require('path');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    bower: {
      install: {
        options: {
          install: true,
          copy: false,
          targetDir: './lib',
          cleanTargetDir: true
        }
      }
    },
    
    uglify: {
      dist: {
        files: {
          'client/app.js': ['client/app.js']
        },
        options: {
          mangle: false
        }
      }
    },
    
    clean: {
      temp: {
        src: [ 'client' ]
      }
    },
    
    concat: {
      options: {
        separator: ';'
      },
      scripts: {
        src: [ appbaseURL+'app.js', appbaseURL+'js/**/*.js'],
        dest: 'client/app.js'
      }
    },
  
    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 8080
        }
      }
    },

    htmlmin: {                                    
     dist: {                                      
      options: {                          
        removeComments: true,
        collapseWhitespace: true
      },
        files: 
        [{
             'client/index.html': appbaseURL+'app.html'
        },
        {
            expand: true,
            cwd: appbaseURL+'/templates',
            src: '**/*.html',
            dest: 'client/templates'
        }]  
    }
  },
  cssmin: {
      combine: {
        options: {
          banner: "/*Copyrights (c) 2016 test by sachin */"
        },
        files: {
          'client/styles/lcss/main.css': [appbaseURL+'/styles/lcss/bootstrap.css', appbaseURL+'/styles/lcss/style.css', appbaseURL+'/styles/lcss/sweetalert.css']
        }
      }
  },

  copy: {
    dist: {
      files: [
         // includes files within path and its sub-directories
        {expand: true, cwd: appbaseURL, src: ['styles/images/**'], dest: 'client/'},
        {expand: true, cwd: appbaseURL, src: ['styles/fonts/**'], dest: 'client/'},
        {expand: true, cwd: appbaseURL, src: ['lib/**'], dest: 'client/'},
        {expand: true, cwd: appbaseURL, src: ['json/**'], dest: 'client/'},
        {expand: true, cwd: appbaseURL, src: ['package.json'], dest: 'client/'},
        {expand: true, cwd: appbaseURL, src: ['server.js'], dest: 'client/'},
      ],
    },
  },

    karma: {
      options: {
        configFile: 'karma.conf.js'
      },
      unit: {
        singleRun: true
      },
      
      // continuous: {
      //   singleRun: true,
      //   autoWatch: false
      // }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-karma');
  
  grunt.registerTask('default', [ 'bower','clean', 'karma', 'concat:scripts', 'htmlmin:dist', 'copy:dist','cssmin:combine','uglify:dist']);
};