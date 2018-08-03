module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/StepField/StepField.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export StepField */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stepField_css__ = __webpack_require__("./components/StepField/stepField.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stepField_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__stepField_css__);
var _jsxFileName = "C:\\Users\\Dante\\Desktop\\trainee\\task-final\\components\\StepField\\StepField.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var StepField = function StepField(_ref) {
  var _onClick = _ref.onClick,
      current = _ref.current,
      additionalTitle = _ref.additionalTitle,
      customWrapper = _ref.customWrapper,
      classField = _ref.classField,
      id = _ref.id,
      input = _ref.input,
      label = _ref.label,
      type = _ref.type,
      maxLength = _ref.maxLength,
      placeholder = _ref.placeholder,
      customInput = _ref.customInput,
      _ref$meta = _ref.meta,
      active = _ref$meta.active,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      warning = _ref$meta.warning;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "step-field-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["FormGroup"], {
    className: customWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, additionalTitle && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "step-additional-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "".concat(additionalTitle), "\xA0"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Label"], {
    "for": id,
    onClick: function onClick() {
      return _onClick();
    },
    className: "step-label ".concat(current, " ").concat(classField, " ").concat(touched && !active && error ? 'error' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, label ? label : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "\xA0"), " ", touched && !active && error), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Input"], _extends({}, input, {
    id: id,
    type: type,
    placeholder: placeholder,
    className: "step-field ".concat(customInput),
    maxLength: maxLength,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }))));
};
/* harmony default export */ __webpack_exports__["a"] = (StepField);

/***/ }),

/***/ "./components/StepField/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__StepField__ = __webpack_require__("./components/StepField/StepField.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__StepField__["a"]; });


/***/ }),

/***/ "./components/StepField/stepField.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/StepTemplate/StepTemplate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stepTemplate_css__ = __webpack_require__("./components/StepTemplate/stepTemplate.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stepTemplate_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__stepTemplate_css__);
var _jsxFileName = "C:\\Users\\Dante\\Desktop\\trainee\\task-final\\components\\StepTemplate\\StepTemplate.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



 // import { Route } from 'react-router-dom';
// import { Redirect } from 'react-router';
// const stepsService = new StepsService();

var StepTemplate =
/*#__PURE__*/
function (_Component) {
  _inherits(StepTemplate, _Component);

  function StepTemplate(props) {
    var _this;

    _classCallCheck(this, StepTemplate);

    _this = _possibleConstructorReturn(this, (StepTemplate.__proto__ || Object.getPrototypeOf(StepTemplate)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "goPrevHandler", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var goPrev = _this.props.goPrev;
        goPrev();
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "goNextHandler", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var goNext = _this.props.goNext;
        goNext();
      }
    });
    return _this;
  }

  _createClass(StepTemplate, [{
    key: "progressLength",
    value: function progressLength(stepNum) {
      return (stepNum + 1) * 33.33;
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          Step = _props.step,
          currentStep = _props.currentStep,
          invalid = _props.invalid,
          stepsLength = _props.stepsLength,
          title = _props.title; //const { invalid, history } = this.props;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Card"], {
        className: "step-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["CardHeader"], {
        className: "step-header",
        tag: "h3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["Progress"], {
        value: this.progressLength(currentStep),
        className: "step-progress",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["CardBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Step, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      })), currentStep !== stepsLength - 1 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["CardFooter"], {
        className: "step-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, currentStep !== 0 && currentStep !== stepsLength - 1 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["CardLink"], {
        className: "prev-btn",
        onClick: this.goPrevHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, "Back"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_reactstrap__["CardLink"], {
        className: "next-btn ".concat(invalid ? 'disabled' : ''),
        onClick: this.goNextHandler,
        tag: "button",
        disabled: invalid,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "Next"))))));
    }
  }]);

  return StepTemplate;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]); // Steps.defaultProps = {
//   steps: [],
//   invalid: true
// };


/* harmony default export */ __webpack_exports__["a"] = (StepTemplate);

/***/ }),

/***/ "./components/StepTemplate/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__StepTemplate__ = __webpack_require__("./components/StepTemplate/StepTemplate.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__StepTemplate__["a"]; });


/***/ }),

/***/ "./components/StepTemplate/stepTemplate.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Steps/Final/Final.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_form__ = __webpack_require__("redux-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validators_validators__ = __webpack_require__("./validators/validators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__StepField__ = __webpack_require__("./components/StepField/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__final_css__ = __webpack_require__("./components/Steps/Final/final.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__final_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__final_css__);
var _jsxFileName = "C:\\Users\\Dante\\Desktop\\trainee\\task-final\\components\\Steps\\Final\\Final.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var Final =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Final, _React$Component);

  function Final() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Final);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Final.__proto__ || Object.getPrototypeOf(Final)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "showResult", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var sex = _this.props.values.sex ? _this.props.values.sex : 'MALE';
        var _this$props$values = _this.props.values,
            confirmPassword = _this$props$values.confirmPassword,
            day = _this$props$values.day,
            email = _this$props$values.email,
            month = _this$props$values.month,
            password = _this$props$values.password,
            whereFrom = _this$props$values.whereFrom,
            year = _this$props$values.year;
        console.log('ConfirmPassword: ', confirmPassword);
        console.log('Day of Birth: ', day);
        console.log('Email: ', email);
        console.log('Month: ', month);
        console.log('Password: ', password);
        console.log('Where discover us: ', whereFrom);
        console.log('Year: ', year);
        console.log('Sex: ', sex);
      }
    }), _temp));
  }

  _createClass(Final, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_reactstrap__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_reactstrap__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_reactstrap__["Card"], {
        className: "final-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_reactstrap__["CardImg"], {
        top: true,
        width: "100%",
        src: "/static/final.png",
        alt: "Card image cap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_reactstrap__["CardBody"], {
        className: "final-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_reactstrap__["Button"], {
        outline: true,
        onClick: this.showResult,
        color: "primary",
        className: "final-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, "Go to Dashbord"), ' '))));
    }
  }]);

  return Final;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  //const defaultFields = { values: { login: '', password: '', additional: '' } };
  console.log('state', state);
  return {
    values: state.form.SignUp.values //login: state.form.registration ? state.form.registration.values.login : '',
    //password: state.form.registration ? state.form.registration.values.password : '',
    //additional: state.form.registration ? state.form.registration.values.additional : ''

  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["connect"])(mapStateToProps)(Final));

/***/ }),

/***/ "./components/Steps/Final/final.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Steps/Final/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Final__ = __webpack_require__("./components/Steps/Final/Final.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Final__["a"]; });


/***/ }),

/***/ "./components/Steps/MainInfo/MainInfo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_form__ = __webpack_require__("redux-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_form__);
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
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_redux_form__["Field"], {
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
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_redux_form__["Field"], {
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
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_redux_form__["Field"], {
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

/***/ "./components/Steps/MainInfo/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MainInfo__ = __webpack_require__("./components/Steps/MainInfo/MainInfo.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__MainInfo__["a"]; });


/***/ }),

/***/ "./components/Steps/OtherInfo/OtherInfo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_form__ = __webpack_require__("redux-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_form__);
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
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_redux_form__["Field"], {
        id: "day",
        validate: [__WEBPACK_IMPORTED_MODULE_2__validators_validators__["b" /* day */], __WEBPACK_IMPORTED_MODULE_2__validators_validators__["a" /* date */]],
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
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_redux_form__["Field"], {
        id: "month",
        validate: [__WEBPACK_IMPORTED_MODULE_2__validators_validators__["e" /* month */], __WEBPACK_IMPORTED_MODULE_2__validators_validators__["a" /* date */]],
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
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_redux_form__["Field"], {
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
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_redux_form__["Field"], {
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
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_redux_form__["Field"], {
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
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_redux_form__["Field"], {
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
      }, "WHERE DID YOU HEAR ABOUT IS?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_redux_form__["Field"], {
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

/***/ "./components/Steps/OtherInfo/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OtherInfo__ = __webpack_require__("./components/Steps/OtherInfo/OtherInfo.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__OtherInfo__["a"]; });


/***/ }),

/***/ "./components/Steps/OtherInfo/otherInfo.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/signup.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_form__ = __webpack_require__("redux-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_StepTemplate__ = __webpack_require__("./components/StepTemplate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Steps_MainInfo__ = __webpack_require__("./components/Steps/MainInfo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Steps_OtherInfo__ = __webpack_require__("./components/Steps/OtherInfo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Steps_Final__ = __webpack_require__("./components/Steps/Final/index.js");
var _jsxFileName = "C:\\Users\\Dante\\Desktop\\trainee\\task-final\\pages\\signup.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





 // import StepLayout from '../components/StepLayout';



 // import { validateDate } from '../validators/validators';

var steps = [{
  step: __WEBPACK_IMPORTED_MODULE_5__components_Steps_MainInfo__["a" /* default */],
  title: 'Signup'
}, {
  step: __WEBPACK_IMPORTED_MODULE_6__components_Steps_OtherInfo__["a" /* default */],
  title: 'Signup'
}, {
  step: __WEBPACK_IMPORTED_MODULE_7__components_Steps_Final__["a" /* default */],
  title: 'Thank you!'
}];

var SignUp =
/*#__PURE__*/
function (_Component) {
  _inherits(SignUp, _Component);

  function SignUp(props) {
    var _this;

    _classCallCheck(this, SignUp);

    _this = _possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "nextStep", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          currentStep: _this.state.currentStep + 1
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "prevStep", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          currentStep: _this.state.currentStep - 1
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();
      }
    });
    _this.state = {
      currentStep: 0
    };
    return _this;
  }

  _createClass(SignUp, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_reactstrap__["Form"], {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_StepTemplate__["a" /* default */], {
        goNext: this.nextStep,
        goPrev: this.prevStep,
        currentStep: this.state.currentStep,
        invalid: this.props.invalid,
        errors: this.props.syncErrors,
        values: this.props.values,
        step: steps[this.state.currentStep].step,
        stepsLength: steps.length,
        title: steps[this.state.currentStep].title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }));
    }
  }]);

  return SignUp;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_redux_form__["reduxForm"])({
  form: 'SignUp'
})(SignUp));

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_luxon__ = __webpack_require__("luxon");
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
  return /([0][1-9]|[1][0-9]|[2][0-9]|[3][0-1])/.test(value) ? undefined : 'WRONG DAY';
};
var month = function month(value) {
  return /([0][1-9]|[1][0-2])/.test(value) ? undefined : 'WRONG MONTH';
};
var year = function year(value) {
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
    });
    return validationDate.isValid ? undefined : 'WRONG DATE';
  }

  return undefined;
};

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/signup.js");


/***/ }),

/***/ "luxon":
/***/ (function(module, exports) {

module.exports = require("luxon");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "reactstrap":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "redux-form":
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ })

/******/ });
//# sourceMappingURL=signup.js.map