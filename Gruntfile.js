module.exports = function(grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			def: {
				src: 'src/gm.minTime.js',
				dest: 'dist/gm.minTime.min.js'
			}
		},
		
		watch: {
			files: ['src/**'],
			tasks: ['uglify']
		}
	});
	
	//grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['uglify']);
};