webpackHotUpdate(5,{

/***/ "./validators/validators.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return require; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return minLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return password; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return day; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return month; });
/* unused harmony export year */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return date; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_luxon__ = __webpack_require__("./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_luxon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_luxon__);

var require = function require(value) {
  return value ? undefined : 'IS REQUIRED';
};
var email = function email(value) {
  var regular = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regular.test(String(value).toLowerCase()) ? undefined : 'MUST BE VALID';
};
var minLength = function minLength(value) {
  return value.trim().length >= 6 ? undefined : 'LENGTH MUST BE MORE THEN 6 SYMBOLS';
};
var password = function password(value, allValues) {
  return allValues.password !== undefined && allValues.password.trim().length >= 6 && allValues.confirmPassword.trim().length >= 6 && allValues.password === allValues.confirmPassword ? undefined : 'MUST BE THE SAME WITH PASSWORD';
};
var day = function day(value) {
  // console.log(value);
  return /([0][1-9]|[1][0-9]|[2][0-9]|[3][0-1])/.test(value) ? undefined : 'WRONG DAY';
};
var month = function month(value) {
  // console.log(value);
  return /([0][1-9]|[1][0-2])/.test(value) ? undefined : 'WRONG MONTH';
};
var year = function year(value) {
  // console.log(value);
  return /([1][9][5-9][1-9]|[2][0][0][0])/.test(value) ? undefined : 'WRONG YEAR';
};
var date = function date(value, allValues) {
  var day = allValues.day,
      month = allValues.month,
      year = allValues.year;

  if (day !== undefined && month !== undefined && year !== undefined) {
    console.log(allValues);
    var validationDate = __WEBPACK_IMPORTED_MODULE_0_luxon__["DateTime"].fromObject({
      year: 2017,
      month: 5,
      day: 25,
      weekday: 3
    });
    console.log('valDate', validationDate); // console.log(day, month, year);

    return validationDate.isValid() ? undefined : 'WRONG DATE';
  }

  return undefined;
};

/***/ })

})
//# sourceMappingURL=5.b79abe729e1d8f6fc464.hot-update.js.map