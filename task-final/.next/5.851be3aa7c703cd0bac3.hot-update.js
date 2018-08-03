webpackHotUpdate(5,{

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
        validate: [__WEBPACK_IMPORTED_MODULE_2__validators_validators__["b" /* day */], __WEBPACK_IMPORTED_MODULE_2__validators_validators__["h" /* year */]],
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

/***/ })

})
//# sourceMappingURL=5.851be3aa7c703cd0bac3.hot-update.js.map