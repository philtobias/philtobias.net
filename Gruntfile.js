'use strict';

module.exports = function (grunt) {
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);
  const pngquant = require('imagemin-pngquant');

  grunt.initConfig({
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          removeOptionalTags: true
        },
        files: {
          '_site/index.html': '_site/index.html'
        }
      }
    },
    cssmin: {
      dist: {
        files: {
          '_site/css/main.css': ['_site/css/main.css']
        }
      }
    },
    imagemin: {
      dist: {
        options: {
          use: [pngquant({
            speed: 1,
            quality: 80
          })]
        },
        files: [{
          expand: true,
          cwd: '_site/images/',
          src: ['*.{png,jpg,gif}'],
          dest: '_site/images/'
        }]
      }
    }
  });

  grunt.registerTask('default', [
      'cssmin',
      'imagemin',
      'htmlmin'
  ]);
};