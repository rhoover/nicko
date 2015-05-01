//Shamelessly copied and pasted for the most part from the Gruntfile created
//by the Yeoman angular-generator team.  Amazing work, thank you!

'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || 'app',
        build: 'build'
    };

    //Configuration for all tasks
    grunt.initConfig({

        nickoApp: appConfig,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            js: {
                files: ['<%= nickoApp.app %>/scripts/{,*/}*.js'],
                tasks: ['newer:jshint:all'],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
            compass: {
                files: ['<%= nickoApp.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:server']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= nickoApp.app %>/{,*/}*.html',
                    '.tmp/styles/{,*/}*.css',
                    '<%= nickoApp.app %>/images/{,*/}*.{png,jpg,jpeg}'
                ]
            }
        }, //end watch

        //Grunt Serve settings
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function (connect) {
                      return [
                           connect.static('.tmp'),
                           connect().use(
                               '/libs',
                                connect.static('./libs')
                            ),
                            connect.static(appConfig.app)
                        ];
                    }
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= nickoApp.build %>'
                }
            }
        }, //end connect

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src: [
                    'Gruntfile.js',
                    '<%= nickoApp.app %>/scripts/{,*/}*.js'
                ]
            }
        }, // jshint

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                    '.tmp',
                    '<%= nickoApp.build %>/{,*/}*',
                    '!<%= nickoApp.build %>/.git{,*/}*'
                    ]
                }]
            },
            server: '.tmp'
        }, //end clean

        // Compiles Sass to CSS and generates necessary files if requested
        compass: {
            options: {
                sassDir: '<%= nickoApp.app %>/styles',
                cssDir: '.tmp/styles',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: '<%= nickoApp.app %>/images',
                javascriptsDir: '<%= nickoApp.app %>/scripts',
                fontsDir: '<%= nickoApp.app %>/styles/fonts',
                importPath: './libs',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '/styles/fonts',
                require: ['susy', 'breakpoint'],
                relativeAssets: false,
                assetCacheBuster: false,
                raw: 'Sass::Script::Number.precision = 10\n'
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= nickoApp.build %>/images/generated'
                }
            },
            server: {
                options: {
                    debugInfo: true
                }
            }
        }, //end compass

        // Renames files for browser caching purposes
        filerev: {
            dist: {
                src: [
                    '<%= nickoApp.build %>/scripts/{,*/}*.js',
                    '<%= nickoApp.build %>/styles/{,*/}*.css'
                ]
            }
        }, //end filerev

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: '<%= nickoApp.app %>/index.html',
            options: {
                dest: '<%= nickoApp.build %>',
                flow: {
                    html: {
                        steps: {
                            js: ['concat'], //, 'uglifyjs'
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        }, //end useminPrepare

        // Performs rewrites based on filerev and the useminPrepare configuration
        usemin: {
            html: ['<%= nickoApp.build %>/{,*/}*.html'],
            css: ['<%= nickoApp.build %>/styles/{,*/}*.css'],
            options: {
                assetsDirs: ['<%= nickoApp.build %>','<%= nickoApp.build %>/images']
            }
        }, //end usemin

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= nickoApp.app %>',
                    dest: '<%= nickoApp.build %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        '*.html',
                        'styles/fonts/*',
                        'images/*.png',
                        'images/*.jpg'
                    ]
                }, {
                    expand: true,
                    cwd: '.tmp/images',
                    dest: '<%= nickoApp.build %>/images',
                    src: ['generated/*']
                }, {
                    expand: true,
                    cwd: '<%= nickoApp.app %>',
                    dest: '<%= nickoApp.build %>',
                    src: ['partials/dashboard/**']
                }, {
                    expand: true,
                    cwd: '<%= nickoApp.app %>',
                    dest: '<%= nickoApp.build %>',
                    src: ['partials/jobleader/**']
                }]
            },
            styles: {
                expand: true,
                cwd: '<%= nickoApp.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        }, //end copy

        // Run some tasks in parallel to speed up the build process
        concurrent: {
            server: ['compass:server'],
            test: ['compass'],
            dist: ['compass:dist']
        }, //end concurrent

        //as noted
        uglify: {
            dist: {
                options: {
                    mangle: false
                },
                files: {
                    '<%= nickoApp.build %>/scripts/nicko-app.js': ['<%= nickoApp.build %>/scripts/nicko-app.js']  // jshint ignore:line
                }
            }
        }, //end uglify

        //Turn HTML Partials into script tags in index.html
        inline_angular_templates: {  // jshint ignore:line
            dist: {
                options: {
                    base: 'app/views',  //this makes no sense, but leave it alone
                    prefix: ' ',
                    selector: 'body',
                    method: 'after'
                },
                files: {
                    'build/index.html': [
                        'app/partials/home/{,*/}*.html',
                        'app/partials/signup/{,*/}*.html',
                        'app/partials/login/{,*/}*.html',
                        'app/partials/details/{,*/}*.html'
                    ]
                }
            }
        } //end inline-angular-templates 'app/partials/dashboard/{,*/}*.html',

    }); //end .initConfig

    grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }
        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'connect:livereload',
            'watch'
        ]);
    }); //end serve

    grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve:' + target]);
    }); //end server

    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concurrent:dist',
        'concat',
        'copy:dist',
        'uglify',
        'cssmin',
        'filerev',
        'usemin',
        'inline_angular_templates'
    ]); //end build

    grunt.registerTask('default', [
        'newer:jshint',
        'test',
        'build'
    ]); //end default
}; //end module.exports