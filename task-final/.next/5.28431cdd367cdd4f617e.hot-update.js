webpackHotUpdate(5,{

/***/ "./components/Steps/MainInfo/MainInfo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_form__ = __webpack_require__("./node_modules/redux-form/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validators_validators__ = __webpack_require__("./validators/validators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__StepField__ = __webpack_require__("./components/StepField/index.js");
var _jsxFileName = "C:\\Users\\Dante\\Desktop\\trainee\\task-final\\components\\Steps\\MainInfo\\MainInfo.js";



 // import '../steps.css';

var MainInfo = function MainInfo() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_redux_form__["a" /* Field */], {
    id: "email",
    validate: [__WEBPACK_IMPORTED_MODULE_2__validators_validators__["g" /* require */], __WEBPACK_IMPORTED_MODULE_2__validators_validators__["c" /* email */]],
    name: "email",
    label: "EMAIL",
    component: __WEBPACK_IMPORTED_MODULE_3__StepField__["a" /* default */],
    type: "text",
    classField: "step-margin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_redux_form__["a" /* Field */], {
    id: "password",
    validate: [__WEBPACK_IMPORTED_MODULE_2__validators_validators__["g" /* require */], __WEBPACK_IMPORTED_MODULE_2__validators_validators__["d" /* minLength */]],
    name: "password",
    label: "PASSWORD",
    component: __WEBPACK_IMPORTED_MODULE_3__StepField__["a" /* default */],
    type: "password",
    className: "step-input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_redux_form__["a" /* Field */], {
    id: "confirmPassword",
    validate: [__WEBPACK_IMPORTED_MODULE_2__validators_validators__["g" /* require */], __WEBPACK_IMPORTED_MODULE_2__validators_validators__["d" /* minLength */], __WEBPACK_IMPORTED_MODULE_2__validators_validators__["f" /* password */]],
    name: "confirmPassword",
    label: "CONFIRM PASSWORD",
    component: __WEBPACK_IMPORTED_MODULE_3__StepField__["a" /* default */],
    type: "password",
    className: "step-input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (MainInfo);

/***/ }),

/***/ "./components/Steps/OtherInfo/OtherInfo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_form__ = __webpack_require__("./node_modules/redux-form/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validators_validators__ = __webpack_require__("./validators/validators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__StepField__ = __webpack_require__("./components/StepField/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__otherInfo_css__ = __webpack_require__("./components/Steps/OtherInfo/otherInfo.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__otherInfo_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__otherInfo_css__);
var _jsxFileName = "C:\\Users\\Dante\\Desktop\\trainee\\task-final\\components\\Steps\\OtherInfo\\OtherInfo.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var OtherInfo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(OtherInfo, _React$Component);

  function OtherInfo(props) {
    var _this;

    _classCallCheck(this, OtherInfo);

    _this = _possibleConstructorReturn(this, (OtherInfo.__proto__ || Object.getPrototypeOf(OtherInfo)).call(this, props));
    _this.state = {
      currentSex: 'male'
    };
    return _this;
  }

  _createClass(OtherInfo, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log(this.state);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_redux_form__["a" /* Field */], {
        id: "day",
        validate: __WEBPACK_IMPORTED_MODULE_2__validators_validators__["b" /* day */],
        name: "day",
        label: "",
        component: __WEBPACK_IMPORTED_MODULE_3__StepField__["a" /* default */],
        type: "text",
        customWrapper: "step-date",
        maxLength: "2",
        placeholder: "DD",
        additionalTitle: " ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_redux_form__["a" /* Field */], {
        id: "month",
        validate: __WEBPACK_IMPORTED_MODULE_2__validators_validators__["e" /* month */],
        name: "month",
        component: __WEBPACK_IMPORTED_MODULE_3__StepField__["a" /* default */],
        type: "text",
        customWrapper: "step-date",
        maxLength: "2",
        placeholder: "MM",
        additionalTitle: "DATE OF BIRTH",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_redux_form__["a" /* Field */], {
        id: "year",
        validate: [__WEBPACK_IMPORTED_MODULE_2__validators_validators__["h" /* year */], __WEBPACK_IMPORTED_MODULE_2__validators_validators__["a" /* date */]],
        name: "year",
        label: "",
        component: __WEBPACK_IMPORTED_MODULE_3__StepField__["a" /* default */],
        type: "text",
        customWrapper: "step-date",
        maxLength: "4",
        placeholder: "DDDD",
        additionalTitle: " ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_redux_form__["a" /* Field */], {
        id: "male",
        name: "sex",
        value: "MALE",
        defaultValue: "MALE",
        label: "MALE",
        component: __WEBPACK_IMPORTED_MODULE_3__StepField__["a" /* default */],
        type: "radio",
        additionalTitle: " ",
        customWrapper: "step-sex",
        current: this.state.currentSex === 'male' ? 'current' : '',
        onClick: function onClick() {
          return _this2.setState({
            currentSex: 'male'
          });
        },
        checked: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_redux_form__["a" /* Field */], {
        id: "female",
        name: "sex",
        value: "FEMALE",
        label: "FEMALE",
        component: __WEBPACK_IMPORTED_MODULE_3__StepField__["a" /* default */],
        type: "radio",
        additionalTitle: "GENDER",
        customWrapper: "step-sex",
        current: this.state.currentSex === 'female' ? 'current' : '',
        onClick: function onClick() {
          return _this2.setState({
            currentSex: 'female'
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_redux_form__["a" /* Field */], {
        id: "unspecified",
        name: "sex",
        value: "UNSPECIFIED",
        label: "UNSPECIFIED",
        component: __WEBPACK_IMPORTED_MODULE_3__StepField__["a" /* default */],
        type: "radio",
        additionalTitle: " ",
        customWrapper: "step-sex",
        current: this.state.currentSex === 'unspecified' ? 'current' : '',
        onClick: function onClick() {
          return _this2.setState({
            currentSex: 'unspecified'
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "select-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "select-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, "WHERE DID YOU HEAR ABOUT IS?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_redux_form__["a" /* Field */], {
        id: "op",
        name: "whereFrom",
        component: "select",
        label: "opp",
        type: "select",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "Friend",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, "Friend"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "TV",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, "TV"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "Internet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, "Internet"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "Radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, "Radio"))));
    }
  }]);

  return OtherInfo;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (OtherInfo);

/***/ }),

/***/ "./validators/validators.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return require; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return minLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return password; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return day; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return month; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return year; });
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
    var validationDate = __WEBPACK_IMPORTED_MODULE_0_luxon__["DateTime"].fromObject({
      year: parseInt(year),
      month: parseInt(month),
      day: parseInt(day)
    }); // console.log('valDate',validationDate);
    // console.log(day, month, year);

    return validationDate.isValid ? undefined : 'WRONG DATE';
  }

  return undefined;
};

/***/ })

})
//# sourceMappingURL=5.28431cdd367cdd4f617e.hot-update.js.map