module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2,
          plugins: [ require('less-plugin-glob') ]
        },
        files: {
          // target.css file: source.less file
          "assets/css/site.css": "assets/less/site.less"
        }
      }
    },
    uglify: {
      site_js: {
        options: {
          mangle: true,
          sourceMap: false,
          compress: {
            drop_console: true,
            dead_code: true
          }
        },
        files: {
          'assets/js/app.min.js': ['assets/js/script.js']
        }
      }
    },
    watch: {
      layout: {
        files: ['*.html', 'assets/js/*.js'],
        options: {
          livereload: true
        }
      },
      styles: {
        // Which files to watch (all .less files recursively in the less directory)
        files: ['assets/less/*.less', 'assets/less/**/*.less',],
        tasks: ['less'],
        options: {
          nospawn: true,
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('assets', ['uglify', 'less']);
};
