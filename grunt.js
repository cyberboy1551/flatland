/*global module:false*/
module.exports = function(grunt) {
		
		// Grunt Docco task
		grunt.loadNpmTasks('grunt-docco');

		// Grunt LESS task
		grunt.loadNpmTasks('grunt-contrib-less');

		// Project configuration.
		grunt.initConfig({
				meta: {
						version: '0.1.0',
						banner: '/*! Flatland - v<%= meta.version %> - ' +
								'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
								'* http://github.com/ZachWick/flatland/\n' +
								'* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
								'Zach Wick; Licensed GPLv3 */'
				},
				lint: {
						files: ['grunt.js', 'include/js/**/*.js', 'spec/**/*.js']
				},
				qunit: {
						files: ['spec/**/*.html']
				},
				concat: {
						dist: {
								src: ['include/js/lib/json2.js','include/js/lib/jquery-1.8.3.min.js','include/js/lib/underscore.js','include/js/lib/backbone.js','include/js/lib/backbone-relational.js','include/js/bootstrap.js','include/js/modules/game/**/*.js'],
								dest: 'dist/flatland.js'
						}
				},
				min: {
						dist: {
								src: ['include/js/lib/json2.js','include/js/lib/jquery-1.8.3.min.js','include/js/lib/underscore.js','include/js/lib/backbone.js','include/js/lib/backbone-relational.js','include/js/bootstrap.js','include/js/modules/game/**/*.js'],
								dest: 'dist/flatland.min.js'
						}
				},
				docco: {
						app: {
								src: ['include/js/**/*.js']
						}
				},
				less: {
						development: {
								options: {
										paths: ['include/less']
								},
								files: {
										'dist/bootstrap.css': 'include/less/bootstrap.less'
								}
						},
						production: {
								options: {
										paths: ['include/less'],
										yuicompress: true
								},
								files: {
										'dist/bootstrap.css': 'include/less/bootstrap.less'
								}
						}
				},
				watch: {
						files: '<config:lint.files>',
						tasks: 'lint qunit'
				},
				jshint: {
						options: {
								curly: true,
								eqeqeq: true,
								immed: true,
								latedef: true,
								newcap: true,
								noarg: true,
								sub: true,
								undef: true,
								boss: true,
								eqnull: true,
								browser: true
						},
						globals: {}
				},
				uglify: {}
		});

		// Default task.
		grunt.registerTask('default', 'qunit concat min less docco');
};
