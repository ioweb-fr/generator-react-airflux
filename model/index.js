'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var changeCase = require('change-case');

var Generator = yeoman.generators.Base.extend({
  initializing: function () {
    this.argument('modelname', { type: String, required: true });
    this.paramName = this.modelname;
    this.pascalName = changeCase.pascalCase(this.modelname);
  },

  prompting: {
  },

  writing: {
    view: function () {
      this.copy("./model.js", "./web/data/" + this.paramName + ".js");
    }
  }

});

module.exports = Generator;
