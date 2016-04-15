module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
      build: {
        src: ['dest']
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['app/app.component.js', 'app/main.js'],
        dest: 'dest/output.js'
      }
    },
    jshint: {
      options: {
        esversion: 6
      },
      beforeconcat: ['Gruntfile.js', 'app/**/*.js'],
      afterconcat: ['dest/output.js'],
      afteruglify: ['dest/output.min.js']
    },
    babel: {
      options: {
        presets: ['es2015']
      },
      dist: {
        files: {
          'dest/output.js': 'dest/output.js'
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'dest/output.min.js': 'dest/output.js'
        }
      }
    },
    watch: {
      js: {
        files: ['app/**/*.js'],
        tasks: ['default']
      },
      less: {
        files: ['css/**/*.less'],
        tasks: ['default']
      }
    },
    less: {
      development: {
        options: {
          paths: ["css"]
        },
        files: {
          "css/theme.css": "css/theme.less"
        }
      }
    },
    postcss: {
        options: {
            processors: [
                require('autoprefixer')({
                    browsers: ['last 2 versions']
                })
            ]
        },
        dist: {
            src: 'css/*.css'
        }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('build-js', [
      'clean:js',
      'jshint:beforeconcat',
      'concat',
      'jshint:afterconcat',
      'babel',
      'uglify'
  ]);

  grunt.registerTask('build-css', [
      'clean:css',
      'less',
      'postcss:dist'
  ]);

  grunt.registerTask('default', [
      'build-css',
      'build-js'
  ]);
};
