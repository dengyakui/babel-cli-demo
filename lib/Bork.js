"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bork = function Bork() {
  var _this = this;

  _classCallCheck(this, Bork);

  Object.defineProperty(this, "instanceProperty", {
    enumerable: true,
    writable: true,
    value: "bork"
  });
  Object.defineProperty(this, "boundFunction", {
    enumerable: true,
    writable: true,
    value: function value() {
      return _this.instanceProperty;
    }
  });
};

Object.defineProperty(Bork, "staticProperty", {
  enumerable: true,
  writable: true,
  value: "babelIsCool"
});
Object.defineProperty(Bork, "staticFunction", {
  enumerable: true,
  writable: true,
  value: function value() {
    return Bork.staticProperty;
  }
});


var myBork = new Bork();
console.log(myBork.__proto__.boundFunction);
console.log(myBork.__proto__.boundFunction.call(undefined));
console.log(Bork.staticFunction());