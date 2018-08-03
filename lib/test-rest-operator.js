'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var teacher = {
  name: 't1',
  age: 23,
  gender: 'man'
};

var cloneTeacher = _extends({}, teacher, { age: 24 });

console.log(cloneTeacher);