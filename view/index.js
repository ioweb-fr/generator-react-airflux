'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var changeCase = require('change-case');

var Generator = yeoman.generators.Base.extend({
  initializing: function () {
    this.argument('viewname', { type: String, required: true });
    this.paramName = this.viewname;
    this.pascalName = changeCase.pascalCase(this.viewname);
  },

  prompting: {
  },

  writing: {
    view: function () {
      this.copy("./view.jsx", "./web/views/" + this.paramName + ".jsx");
      this.copy("./view.less", "./web/views/" + this.paramName + ".less");
    }
  }

});

module.exports = Generator;
