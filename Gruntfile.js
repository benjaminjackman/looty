var _ = require('underscore');
var shelljs = require('shelljs');
var path = require('path');

function endsWith(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

function dtsFilter(abspath, name) {
  if (name.indexOf("_") != 0 && name.match(/.*\.ts$/)) {
    return abspath.substring(12);
  } else {
    return null;
  }
}

module.exports = function (grunt) {

  //External tasks
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-copy-to');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-express');

  //Helper functions
  function log() {
    grunt.log.writeln.apply(
      grunt.log,
      _.toArray(arguments).map(function (x) {
        return _.isObject(x) || _.isArray(x) ? JSON.stringify(x) : x
      })
    );
  }

  grunt.initConfig({
    bower: {
      install: {
      }
    },

    express: {
      server: {
        options: {
          port: 3000,
          bases: ["target/site"]
        }
      }
    },

    clean: {
      bower: ['lib', 'components'],
      targetlib: ['target/site/scripts/lib', 'target/site/styles/lib', 'target/site/resources/lib'],
      coffee: ['target/site/scripts/coffee'],
      less: ['target/site/styles/less'],
      typescript: ['target/site/scripts/ts'],
      templates: ['target/site/*.html'],
      json: ['target/site/*.json'],
      resources: ['target/site/resources']
    },

    less: {
      site: {
        src: 'src/main/less/**/*.less',
        dest: 'target/site/styles/less/less.css'
      }
    },

    copyto: {
      resources: {
        files: [
          {cwd: "src/main/resources", src: "**/*", dest: "target/site/resources/"}
        ]},
      json: {
        files: [
          {cwd: "src/main/json", src: "*.json", dest: "target/site/"}
        ]},
      js: {
        files: [
          {cwd: "src/main/js", src: "**/*.js", dest: "target/site/scripts/js/"}
        ]},
      jsTest: {
        files: [
          {cwd: "src/test/js", src: "**/*.js", dest: "target/site/test/scripts/js/"}
        ]},
      jslib: {
        files: [
          {cwd: "lib", src: "**/*.js", dest: "target/site/scripts/lib/"}
        ]
      },
      jslibTest: {
        files: [
          {cwd: "src/test/lib", src: "**/*.js", dest: "target/site/test/scripts/lib/"}
        ]},
      css: {
        files: [
          {cwd: "src/main/css", src: "**/*.css", dest: "target/site/styles/css/"}
        ]},
      csslib: {
        files: [
          {cwd: "lib", src: "**/*.css", dest: "target/site/styles/lib/"}
        ]
      }
    },

    ngModules: {
      theta: {
        base: ["src/main/coffee/cgta/ng", "src/main/ts/cgta/ng"],
        root: "",
        dest: "target/site/scripts/js/ng-modules.js",
        ignore: function (path, name) {
          return endsWith(name, ".d.ts") || endsWith(name, ".js") || endsWith(name, ".map");
        }
      }
    },

    coffee: {
      site: {
        expand: true,
        flatten: true,
        src: 'src/main/coffee/**/*.coffee',
        dest: 'target/site/scripts/coffee',
        ext: '.js'
      }
    },

//    typescript: {
//      theta: {
//        src: ['src/main/ts/cgta/**/*.ts'],
//        dest: 'site/scripts/ts',
//        options: {
//          target: 'es5', //or es3
//          sourcemap: true,
//          noImplicitAny: true
//        }
//      }
//    },

    exec: {
      typescript: {
        command: function () {
          var srcs = grunt.file.expand(['src/main/ts/cgta/**/*.ts']).join(" ");
          var cmd = 'tsc --noImplicitAny --outDir target/site/scripts/ts/cgta ' + srcs;
          log(cmd)
          return cmd;
        }
      },
      typescriptTest: {
        command: function () {
          var srcs = grunt.file.expand(['src/test/ts/cgta/**/*.ts']).join(" ");
          var cmd = 'tsc --noImplicitAny --outDir target/site/test/scripts/ts/cgta ' + srcs;
          log(cmd)
          return cmd;
        }
      }
    },

    typescriptDTS: {
      main: {
        base: [
          {
            dir: "src/main/ts/cgta",
            fn: dtsFilter
          },
          {
            dir: "src/main/ts/lib",
            fn: dtsFilter
          }
        ],
        dest: "src/main/ts/_all.d.ts"
      },
      test: {
        base: [
          {
            dir: "src/test/ts/cgta",
            fn: dtsFilter
          },
          {
            dir: "src/test/ts/lib",
            fn: dtsFilter
          }
        ],
        extras: ["../../main/ts/_all.d.ts"],
        dest: "src/test/ts/_all.d.ts"
      }
    },

    watch: {
      //Build on coffee file changes
      coffee: {
        files: 'src/main/coffee/**/*.coffee',
        tasks: ['coffee', 'templates']
      },
      //Build on js file changes
      js: {
        files: 'src/main/js/**/*.js',
        tasks: ['copyto:js', 'templates']
      },
      jsTest: {
        files: 'src/test/js/**/*.js',
        tasks: ['copyto:jsTest', 'templates']
      },
      //When a typescript file changes. we need to recompile it
      typescriptCompile: {
        files: ['src/main/ts/cgta/**/*.ts', 'src/main/ts/lib/**/*.ts'],
        tasks: ['exec:typescript']
//        tasks: ['typescript'],
//        options: {
//          event: ['changed']
//        }
      },
      typescriptCompileTest: {
        files: ['src/test/ts/cgta/**/*.ts', 'src/test/ts/lib/**/*.ts'],
        tasks: ['exec:typescriptTest']
//        tasks: ['typescript'],
//        options: {
//          event: ['changed']
//        }
      },
//      //When a typescript file is added or removed we need to regenerate the _all.d.ts
//      //which tell the ts compiler what the dependencies are, also we need to
//      //regenerate all the script tags in the html files
//      typescriptFullCompile: {
//        files: ['src/main/ts/cgta/**/*.ts', 'src/main/ts/lib/**/*.ts'],
//        tasks: ['typescriptDTS', 'clean:typescript', 'exec:typescript', 'templates']
////        ,options: {
////          event: ['added', 'deleted']
////        }
//      },
//      //Whenever we add or remove a coffee or ts file we need to remake the modules
//      //file that is used to make angular modules load easier
//      ngModules: {
//        files: ['src/main/ts/cgta/**/*.ts', 'src/main/coffee/**/*.coffee'],
//        tasks: ['ngModules', 'coffee']
////        ,options: {
////          event: ['added', 'deleted']
////        }
//      },
      //Build on css file changes
      css: {
        files: 'src/main/css/**/*.css',
        tasks: ['copyto:css', 'templates']
      },
      //Build on js file changes
      less: {
        files: 'src/main/less/**/*.less',
        tasks: ['less', 'templates']
      },
      //Build on changes to html template files
      templates: {
        files: ['src/main/html/**/*.html'],
        tasks: ['templates']
      },
      //Build when jslib is updated
      resources: {
        files: ["src/main/resources/**/*"],
        tasks: ['copyto:resources']
      },
      json: {
        files: ["src/main/json/**/*"],
        tasks: ['copyto:json']
      },
      jslib: {
        files: ["lib/**/*.js"],
        tasks: ['copyto:jslib', 'templates']
      },
      jslibTest: {
        files: ["scr/main/test/lib/**/*.js"],
        tasks: ['copyto:jslibTest', 'templates']
      },
      csslib: {
        files: ["lib/**/*.css"],
        tasks: ['copyto:csslib', 'templates']
      }
    }
  });

  //Creates a file that will create a recursive module structure for angular js, this prevents having to
  //define multiple modules.
  grunt.registerMultiTask('ngModules', 'Creates a js file with all coffeescript/ts files as modules.',
    function () {
      var modules = {};
      var self = this
      var root = this.data.root
      this.data.base.forEach(function (base) {
        grunt.file.recurse(base, function (abspath, rootdir, subdir, filename) {
          if (self.data.ignore != null && self.data.ignore(abspath, filename)) return;
          if (subdir == null) return;
          m = (root != null && root != "" ? root + "." : "") + subdir.replace(/\//g, ".");
          f = filename.replace(/\.coffee/g, '').replace(/\.ts/g, '');
          if (modules[m] == null) modules[m] = [];
          modules[m].push(m + "." + f);
        });
      });
      var content = "";
      Object.keys(modules).forEach(function (k) {
        var str = "angular.module('" + k + "', " + JSON.stringify(modules[k]) + ");\n";
        grunt.verbose.writeln(str);
        content += str;
      });
      grunt.file.delete(this.data.dest);
      grunt.file.write(this.data.dest, content);
    }
  );

  //Will replace <%= css %> with a list of all css files and <%= js %> with a list of all js scripts in html
  grunt.registerTask('templates', 'Fills in Html Templates', function () {
    //Get the name of all the html files.
    var templs = grunt.file.expand({cwd: 'src/main/html'}, '**/*.html');

    function paths(cwd, files, f) {
      return _.uniq(grunt.file.expand({cwd: cwd}, files)).map(f).join("\n");
    }

    //All the scripts from all the different languages
    var scriptsTmpl = paths(
      "target/site",
      [ 'scripts/lib/jquery/jquery.js',
        'scripts/lib/underscore/underscore.js',
        'scripts/lib/angular/angular.js',
        'scripts/js/ng-modules.js',
        'scripts/lib/**/*.js',
        'scripts/js/**/*.js',
        'scripts/coffee/**/*.js',
        'scripts/ts/**/*.js'],
      function (f) {
        return '<script src="' + f + '"></script>';
      }
    );

    //The scripts that only be included for unit testing
    var scriptsTestTmpl = paths(
      "target/site",
      [ 'test/scripts/js/**/*.js',
        'test/scripts/ts/cgta/test/**/*.js'
      ],
      function (f) {
        return '<script src="' + f + '"></script>';
      }
    );

    //The different css styles
    var stylesTmpl = paths(
      "target/site",
      ['styles/lib/**/*.css',
        'styles/css/**/*.css',
        'styles/less/**/*.css',
        'resources/glyphicons/web/html_css/css/glyphicons.css',
        'resources/glyphicons_halflings/web/html_css/css/halflings.css'
      ],
      function (f) {
        return '<link rel="stylesheet" href="' + f + '"/>';
      }
    );

    templs.forEach(function (f) {
      var cfg = {
        js: scriptsTmpl,
        css: stylesTmpl,
        jstest: scriptsTestTmpl
      };
      var src = 'src/main/html/' + f;
      var dest = 'target/site/' + f;
      grunt.file.write(dest, grunt.template.process(grunt.file.read(src), {data: cfg}));
    });
  });


  //This file is then read by the typescript compiler and provides typing for all the other files
  grunt.registerMultiTask('typescriptDTS', 'Creates a typescript _all.ts file that references all ts files',
    function () {
      var paths = [];
      this.data.base.forEach(function (base) {
        grunt.file.recurse(base.dir, function (abspath, rootdir, subdir, filename) {
          var p = base.fn(abspath, filename);
          if (p != null) {
            paths.push(p)
          }
        });
      });
      if (this.data.extras != null) {
        this.data.extras.forEach(function (extra) {
          paths.push(extra)
        });
      }
      content = paths.map(function (path) {
        return '/// <reference path="' + path + '" />'
      }).join("\n");
      grunt.file.delete(this.data.dest);
      grunt.file.write(this.data.dest, content);
    }
  );

  //Clears then Downloads bower managed dependencies
  grunt.registerTask('update', ['clean:bower', 'clean:targetlib', 'bower:install', 'copyto:jslib', 'copyto:csslib']);
  //Cleans generated files
  grunt.registerTask('cleangen', ['clean:resources', 'clean:json', 'clean:targetlib', 'clean:coffee', 'clean:less', 'clean:typescript', 'clean:templates']);
  //Compiles needed files to the site folder
  grunt.registerTask('compile', [
    'cleangen',
    'ngModules',
    'coffee',
    'less',
    'typescriptDTS',
    'exec:typescript',
    'exec:typescriptTest',
//    'typescript',
    'copyto:jslib',
    'copyto:csslib',
    'copyto:resources',
    'copyto:json',
    'copyto:js',
    'copyto:jsTest',
    'copyto:jslibTest',
    'copyto:css',
    'templates']);
  //loops and recompiles / tests on every source file change.
  grunt.registerTask('loop', ['compile', 'watch']);
  //by default do a compile
  grunt.registerTask('www', ['compile', 'express', 'watch']);

  grunt.registerTask('default', ['compile']);


};