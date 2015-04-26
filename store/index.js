'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var changeCase = require('change-case');

var Generator = yeoman.generators.Base.extend({
  initializing: function () {
    this.argument('storename', { type: String, required: true });
    this.paramName = this.storename;
    this.pascalName = changeCase.pascalCase(this.storename);
  },

  prompting: {
  },

  writing: {
    view: function () {
      this.copy("./store.js", "./web/stores/" + this.paramName + "-store.js");
    }
  }

});

module.exports = Generator;
