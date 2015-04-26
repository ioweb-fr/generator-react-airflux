'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  initializing: function () {
  },

  prompting: {
  },

  writing: {
    app: function () {
      this.directory("./web", "./web");
      this.copy('./doteslintrc.json', './.eslintrc');
      this.copy('./dotgitignore', './.gitignore');
      this.copy('./doteditorconfig', './.editorconfig');
      this.copy('./Gulpfile.js', './Gulpfile.js');
      this.copy('./index.html', './index.html');
      this.copy('./package.json', './package.json');

      this.installDependencies({
      	  bower:false,
		  npm: true,
		  callback: function () {
		    console.log('Everything is ready!');
		  }
	  });
    }
  }

});

module.exports = Generator;