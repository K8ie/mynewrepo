(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\diana\OneDrive\Desktop\Programming\Neuer Ordner\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1U8D":
    /*!**************************************************!*\
      !*** ./src/app/pie-chart/pie-chart.component.ts ***!
      \**************************************************/

    /*! exports provided: PieChartComponent */

    /***/
    function U8D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PieChartComponent", function () {
        return PieChartComponent;
      });
      /* harmony import */


      var _amcharts_amcharts4_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @amcharts/amcharts4/core.js */
      "cclQ");
      /* harmony import */


      var _amcharts_amcharts4_charts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @amcharts/amcharts4/charts.js */
      "xJfa");
      /* harmony import */


      var _amcharts_amcharts4_themes_animated_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @amcharts/amcharts4/themes/animated.js */
      "WlQZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PieChartComponent = /*#__PURE__*/function () {
        function PieChartComponent() {
          _classCallCheck(this, PieChartComponent);
        }

        _createClass(PieChartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            _amcharts_amcharts4_core_js__WEBPACK_IMPORTED_MODULE_0__["ready"](function () {
              // Themes begin
              _amcharts_amcharts4_core_js__WEBPACK_IMPORTED_MODULE_0__["useTheme"](_amcharts_amcharts4_themes_animated_js__WEBPACK_IMPORTED_MODULE_2__["default"]); // Themes end
              // Create chart instance


              var chart = _amcharts_amcharts4_core_js__WEBPACK_IMPORTED_MODULE_0__["create"]("chartdiv", _amcharts_amcharts4_charts_js__WEBPACK_IMPORTED_MODULE_1__["PieChart"]); // Add and configure Series


              var pieSeries = chart.series.push(new _amcharts_amcharts4_charts_js__WEBPACK_IMPORTED_MODULE_1__["PieSeries"]());
              pieSeries.dataFields.value = "litres";
              pieSeries.dataFields.category = "country"; // Let's cut a hole in our Pie chart the size of 30% the radius

              chart.innerRadius = _amcharts_amcharts4_core_js__WEBPACK_IMPORTED_MODULE_0__["percent"](30); // Put a thick white border around each Slice

              pieSeries.slices.template.stroke = _amcharts_amcharts4_core_js__WEBPACK_IMPORTED_MODULE_0__["color"]("#fff");
              pieSeries.slices.template.strokeWidth = 2;
              pieSeries.slices.template.strokeOpacity = 1;
              pieSeries.slices.template // change the cursor on hover to make it apparent the object can be interacted with
              .cursorOverStyle = [{
                "property": "cursor",
                "value": "pointer"
              }];
              pieSeries.alignLabels = false;
              pieSeries.labels.template.disabled = true;
              pieSeries.labels.template.bent = false;
              pieSeries.labels.template.radius = 3;
              pieSeries.labels.template.padding(0, 0, 0, 0);
              pieSeries.ticks.template.disabled = true; // Create a base filter effect (as if it's not there) for the hover to return to

              var shadow = pieSeries.slices.template.filters.push(new _amcharts_amcharts4_core_js__WEBPACK_IMPORTED_MODULE_0__["DropShadowFilter"]());
              shadow.opacity = 0; // Create hover state
              // var hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

              /* Slightly shift the shadow and make it more prominent on hover
              var hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
              hoverShadow.opacity = 0.7;
              hoverShadow.blur = 5;*/
              // Add a legend

              chart.legend = new _amcharts_amcharts4_charts_js__WEBPACK_IMPORTED_MODULE_1__["Legend"]();
              chart.data = [{
                "country": "Mit Karte Bezahlt",
                "litres": 501.9
              }, {
                "country": "Rechnungen",
                "litres": 165.8
              }, {
                "country": "Lebensmittel",
                "litres": 139.9
              }, {
                "country": "Daueraufträge",
                "litres": 128.3
              }, {
                "country": "Sonstige Ausgaben",
                "litres": 99
              }, {
                "country": "Bargeld bezüge",
                "litres": 60
              }];
            }); // end am4core.ready()

          }
        }]);

        return PieChartComponent;
      }();

      PieChartComponent.ɵfac = function PieChartComponent_Factory(t) {
        return new (t || PieChartComponent)();
      };

      PieChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: PieChartComponent,
        selectors: [["app-pie-chart"]],
        decls: 1,
        vars: 0,
        consts: [["id", "chartdiv"]],
        template: function PieChartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);
          }
        },
        styles: ["#chartdiv[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 500px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpZS1jaGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakIiLCJmaWxlIjoicGllLWNoYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2hhcnRkaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "D/pH":
    /*!**************************************************************!*\
      !*** ./src/app/chat-bot-pop-up/chat-bot-pop-up.component.ts ***!
      \**************************************************************/

    /*! exports provided: ChatBotPopUpComponent */

    /***/
    function DPH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatBotPopUpComponent", function () {
        return ChatBotPopUpComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ChatBotPopUpComponent = /*#__PURE__*/function () {
        function ChatBotPopUpComponent() {
          _classCallCheck(this, ChatBotPopUpComponent);

          this.idNumber = '';
        }

        _createClass(ChatBotPopUpComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.modal = document.getElementById("myModal" + this.idNumber);
            this.messeger = document.getElementById("mymesseger"); // Get the button that opens the modal

            this.btn = document.getElementById("myBtn" + this.idNumber); // Get the <span> element that closes the modal

            this.span = document.getElementById("closingSpan");
            console.log(this.modal);
          }
        }, {
          key: "showMessager",
          value: function showMessager() {
            this.messeger.style.display = "block";
          }
        }, {
          key: "showModal",
          value: function showModal() {
            this.modal.style.display = "block";
          }
        }, {
          key: "closeMessager",
          value: function closeMessager() {
            this.messeger.style.display = "none";
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modal.style.display = "none";
          }
        }]);

        return ChatBotPopUpComponent;
      }();

      ChatBotPopUpComponent.ɵfac = function ChatBotPopUpComponent_Factory(t) {
        return new (t || ChatBotPopUpComponent)();
      };

      ChatBotPopUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChatBotPopUpComponent,
        selectors: [["app-chat-bot-pop-up"]],
        inputs: {
          idNumber: "idNumber"
        },
        decls: 25,
        vars: 3,
        consts: [[1, "btnRocket", 3, "id", "click"], [1, "modal", 3, "id"], [1, "modal-content"], ["id", "closingSpan", 1, "close", 3, "click"], [1, "list-group", 2, "text-align", "left"], [1, "list-group-item", "list-group-item-action", 3, "click"], ["data-layer", "5d6b7b76-a2d1-4932-bdbf-c52408bdfa5a", "preserveAspectRatio", "none", "viewBox", "2.5707316398620605 1.9280335903167725 25 25", 1, "iconMetroBellfb6d0d58"], ["d", "M 27.57070350646973 21.45928001403809 C 27.57070350646973 14.42803382873535 21.3298454284668 15.99053192138672 21.3298454284668 10.52178287506104 C 21.3298454284668 10.06865787506104 21.28625869750977 9.681450843811035 21.20678520202637 9.351666450500488 C 20.79649543762207 6.592437744140625 18.96017456054688 4.37803316116333 16.5804557800293 3.703228712081909 C 16.60188484191895 3.605316638946533 16.61267471313477 3.505369901657104 16.61263656616211 3.405133008956909 C 16.61263465881348 2.592681884765625 15.9105396270752 1.928033590316772 15.05242252349854 1.928033590316772 C 14.19430446624756 1.928033590316772 13.49220752716064 2.592681884765625 13.49220752716064 3.405084371566772 C 13.49220752716064 3.507135152816772 13.50332355499268 3.606842279434204 13.52438735961914 3.703180074691772 C 10.85568904876709 4.459967136383057 8.870244026184082 7.152837753295898 8.813199043273926 10.37900924682617 C 8.812223434448242 10.42588424682617 8.811589241027832 10.47334575653076 8.811589241027832 10.5217342376709 C 8.811589241027832 15.99053192138672 2.570731639862061 14.42803382873535 2.570731639862061 21.45928192138672 C 2.570731639862061 23.32026863098145 6.729434490203857 24.87715339660645 12.29696369171143 25.26982879638672 C 12.82168292999268 26.25625419616699 13.85854244232178 26.92803382873535 15.05244827270508 26.92803382873535 C 16.24635314941406 26.92803382873535 17.28326225280762 26.25625610351563 17.80793190002441 25.26983070373535 C 23.37545967102051 24.87715339660645 27.53416442871094 23.32026863098145 27.53416442871094 21.45928382873535 C 27.53416442871094 21.45371627807617 27.53353118896484 21.44815254211426 27.53348159790039 21.4426326751709 L 27.57073020935059 21.45928382873535 Z M 22.7132453918457 22.77998352050781 C 21.39120674133301 23.13325500488281 19.8327465057373 23.38730812072754 18.16014862060547 23.52822494506836 C 18.02107048034668 21.93110847473145 16.68325996398926 20.67803192138672 15.05242252349854 20.67803192138672 C 13.42158222198486 20.67803192138672 12.08379745483398 21.93110847473145 11.94472026824951 23.52822494506836 C 10.2721700668335 23.38730812072754 8.713662147521973 23.13325500488281 7.391623497009277 22.77998352050781 C 5.572266578674316 22.29380226135254 4.702447414398193 21.74995422363281 4.384115219116211 21.45928001403809 C 4.702447414398193 21.16860771179199 5.572267055511475 20.62475776672363 7.391623497009277 20.13857650756836 C 9.507006645202637 19.57334136962891 12.22763061523438 19.26201438903809 15.05242252349854 19.26201438903809 C 17.87721252441406 19.26201438903809 20.59786224365234 19.57334136962891 22.71322059631348 20.13857650756836 C 24.53257751464844 20.62475776672363 25.40239715576172 21.16860771179199 25.72072982788086 21.45928001403809 C 25.40239715576172 21.74995422363281 24.53257751464844 22.29380226135254 22.71322059631348 22.77998352050781 Z"], [2, "text-align", "center", "margin-top", "0px", "padding-top", "0px"], [1, "list-group-item", "list-group-item-action"], ["src", "/assets/imgs/checkbox-icon-from-business-bicolor-set-vector-5368179.jpg", 2, "height", "20px", "width", "20px"], ["id", "mymesseger", 1, "modal", "messege-content", 2, "width", "30%"], ["src", "https://webchat.botframework.com/embed/my-advisor-in-command?s=AwZGzBhtINs.qGy0YadRdgLLwSSugnIV4R-h2HIL9t86a-P_9pgN8tE", 2, "width", "100%", "height", "90%"]],
        template: function ChatBotPopUpComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBotPopUpComponent_Template_button_click_1_listener() {
              return ctx.showModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBotPopUpComponent_Template_span_click_5_listener() {
              return ctx.closeModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBotPopUpComponent_Template_li_click_8_listener() {
              return ctx.showMessager();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Title-Switch Vorschlag ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Neue E-Bill Rechnung ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Neuer Vorsorgeauszug ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBotPopUpComponent_Template_span_click_22_listener() {
              return ctx.closeMessager();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "iframe", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "myBtn", ctx.idNumber, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.idNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "myModal", ctx.idNumber, "");
          }
        },
        styles: [".modal[_ngcontent-%COMP%] {\r\n  display: none;\r\n  \r\n  position: fixed;\r\n  \r\n  z-index: 1;\r\n  \r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  \r\n  height: 100%;\r\n  \r\n  overflow: auto;\r\n  \r\n  background-color: rgb(0, 0, 0);\r\n  \r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  \r\n}\r\n\r\n.markdown[_ngcontent-%COMP%]   webchat--css-oofrb-xdnm15[_ngcontent-%COMP%] {\r\n  background-color: rgb(255, 136, 0) !important;\r\n}\r\n\r\n\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  background-color: #fefefe;\r\n  margin: 10%;\r\n  \r\n  margin-left: 35%;\r\n  \r\n  padding: 10px;\r\n  border: 1px solid #888;\r\n  width: 30%;\r\n  \r\n  position: absolute;\r\n}\r\n\r\n.messege-content[_ngcontent-%COMP%] {\r\n  background-color: #fefefe;\r\n  margin-left: 35%;\r\n  \r\n  margin-top: 5%;\r\n  padding: 10px;\r\n  border: 1px solid #888;\r\n  height: 600px;\r\n  overflow: hidden;\r\n}\r\n\r\n.iconMetroBellfb6d0d58[_ngcontent-%COMP%] {\r\n  fill: rgba(249, 137, 63, 1);\r\n  box-shadow: none;\r\n  width: 25.00px;\r\n  height: 25.00px;\r\n  left: 647.50px;\r\n  top: 20.00px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%] {\r\n  color: rgba(249, 137, 63, 1);\r\n}\r\n\r\n\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  color: #aaa;\r\n  float: right;\r\n  font-size: 28px;\r\n  padding-right: 0;\r\n  align-self: flex-end;\r\n  font-weight: bold;\r\n}\r\n\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n  color: black;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.btnRocket[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtYm90LXBvcC11cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUEyQjs7QUFFM0I7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWU7RUFDZixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDZDQUE2QztBQUMvQzs7QUFFQTs7OztxQkFJcUI7O0FBRXJCO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLG1DQUFtQztFQUNuQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixvREFBb0Q7RUFDcEQsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixtQ0FBbUM7RUFDbkMsY0FBYztFQUNkLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBLHFCQUFxQjs7QUFFckI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0FBQ2QiLCJmaWxlIjoiY2hhdC1ib3QtcG9wLXVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXHJcblxyXG4ubW9kYWwge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgLyogU2l0IG9uIHRvcCAqL1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8qIEZ1bGwgd2lkdGggKi9cclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLyogRnVsbCBoZWlnaHQgKi9cclxuICBvdmVyZmxvdzogYXV0bztcclxuICAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbn1cclxuXHJcbi5tYXJrZG93biB3ZWJjaGF0LS1jc3Mtb29mcmIteGRubTE1IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMzYsIDApICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qXHJcbiAgLndlYmNoYXQtLWNzcy15aWZocy0xZzVqMzFtLndlYmNoYXRfX2J1YmJsZTpub3QoLndlYmNoYXRfX2J1YmJsZS0tZnJvbS11c2VyKSAud2ViY2hhdF9fYnViYmxlX19jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTM2LCAwKSAhaW1wb3J0YW50O1xyXG4gIH0gXHJcbiAgTW9kYWwgQ29udGVudC9Cb3ggKi9cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gIG1hcmdpbjogMTAlO1xyXG4gIC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXHJcbiAgbWFyZ2luLWxlZnQ6IDM1JTtcclxuICAvKiAzMCUgZnJvbSB0aGUgbGVmdCBhbmQgY2VudGVyZWQgKi9cclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgd2lkdGg6IDMwJTtcclxuICAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLm1lc3NlZ2UtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICBtYXJnaW4tbGVmdDogMzUlO1xyXG4gIC8qIDMwJSBmcm9tIHRoZSBsZWZ0IGFuZCBjZW50ZXJlZCAqL1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5pY29uTWV0cm9CZWxsZmI2ZDBkNTgge1xyXG4gIGZpbGw6IHJnYmEoMjQ5LCAxMzcsIDYzLCAxKTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIHdpZHRoOiAyNS4wMHB4O1xyXG4gIGhlaWdodDogMjUuMDBweDtcclxuICBsZWZ0OiA2NDcuNTBweDtcclxuICB0b3A6IDIwLjAwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsIHtcclxuICBjb2xvcjogcmdiYSgyNDksIDEzNywgNjMsIDEpO1xyXG59XHJcblxyXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXHJcblxyXG4uY2xvc2Uge1xyXG4gIGNvbG9yOiAjYWFhO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNsb3NlOmhvdmVyLCAuY2xvc2U6Zm9jdXMge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnRuUm9ja2V0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "D5ag":
    /*!**************************************************!*\
      !*** ./src/app/home-view/home-view.component.ts ***!
      \**************************************************/

    /*! exports provided: HomeViewComponent */

    /***/
    function D5ag(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeViewComponent", function () {
        return HomeViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var HomeViewComponent = /*#__PURE__*/function () {
        function HomeViewComponent() {
          _classCallCheck(this, HomeViewComponent);
        }

        _createClass(HomeViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "myFunction",
          value: function myFunction() {
            // window.open( 
            // "app-berater-portal"); 
            var temp = document.getElementById('entrypoint');

            if (temp.style.display === "none") {
              temp.style.display = "block";
            } else {
              temp.style.display = "none";
            }
          }
        }]);

        return HomeViewComponent;
      }();

      HomeViewComponent.ɵfac = function HomeViewComponent_Factory(t) {
        return new (t || HomeViewComponent)();
      };

      HomeViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeViewComponent,
        selectors: [["app-home-view"]],
        decls: 26,
        vars: 0,
        consts: [[1, "text-center", 2, "margin", "20%", "margin-top", "10%"], [1, "h3", "mb-3", "fw-normal"], [1, "row"], [1, "col-sm-6"], [1, "card"], ["src", "assets/imgs/berater.png", "alt", ""], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["routerLink", "berater-portal", "routerLinkActive", "active", 1, "btn", "btn-primary", 3, "click"], ["src", "assets/imgs/kunde.png", "alt", ""], ["routerLink", "kunden-portal", "routerLinkActive", "active", 1, "btn", "btn-primary", 3, "click"], [1, "mt-5", "mb-3", "text-muted"]],
        template: function HomeViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choose your Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Berater");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "With supporting text below as a natural lead-in to additional content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeViewComponent_Template_button_click_12_listener() {
              return ctx.myFunction();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Gehe zu Bereateransicht");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Kunde");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "With supporting text below as a natural lead-in to additional content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeViewComponent_Template_button_click_22_listener() {
              return ctx.myFunction();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Gehe zu Kundenansicht");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\xA9 2017\u20132021");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
        styles: [".bd-placeholder-img[_ngcontent-%COMP%] {\r\n    font-size: 1.125rem;\r\n    text-anchor: middle;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n        user-select: none;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .bd-placeholder-img-lg[_ngcontent-%COMP%] {\r\n        font-size: 3.5rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFpQjtRQUFqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6ImhvbWUtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJkLXBsYWNlaG9sZGVyLWltZyB7XHJcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgdGV4dC1hbmNob3I6IG1pZGRsZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmJkLXBsYWNlaG9sZGVyLWltZy1sZyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzLjVyZW07XHJcbiAgICB9XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "De4M":
    /*!****************************************************!*\
      !*** ./src/app/line-chart/line-chart.component.ts ***!
      \****************************************************/

    /*! exports provided: LineChartComponent */

    /***/
    function De4M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LineChartComponent", function () {
        return LineChartComponent;
      });
      /* harmony import */


      var _amcharts_amcharts4_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @amcharts/amcharts4/core.js */
      "cclQ");
      /* harmony import */


      var _amcharts_amcharts4_charts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @amcharts/amcharts4/charts.js */
      "xJfa");
      /* harmony import */


      var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @amcharts/amcharts4/themes/animated */
      "WlQZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LineChartComponent = /*#__PURE__*/function () {
        function LineChartComponent() {
          _classCallCheck(this, LineChartComponent);
        }

        _createClass(LineChartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            /* Chart code */
            // Themes begin
            _amcharts_amcharts4_core_js__WEBPACK_IMPORTED_MODULE_0__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_2__["default"]); // Themes end


            var chart = _amcharts_amcharts4_core_js__WEBPACK_IMPORTED_MODULE_0__["create"]("chartdiv", _amcharts_amcharts4_charts_js__WEBPACK_IMPORTED_MODULE_1__["XYChart"]);

            chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

            var data = [];
            var open = 100;
            var close = 250;

            for (var i = 1; i < 120; i++) {
              open += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 4);
              close = Math.round(open + Math.random() * 5 + i / 5 - (Math.random() < 0.5 ? 1 : -1) * Math.random() * 2);
              data.push({
                date: new Date(2018, 0, i),
                open: open,
                close: close
              });
            }

            chart.data = data;
            var dateAxis = chart.xAxes.push(new _amcharts_amcharts4_charts_js__WEBPACK_IMPORTED_MODULE_1__["DateAxis"]());
            var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts_js__WEBPACK_IMPORTED_MODULE_1__["ValueAxis"]()); //valueAxis.tooltip.disabled = true;

            var series = chart.series.push(new _amcharts_amcharts4_charts_js__WEBPACK_IMPORTED_MODULE_1__["LineSeries"]());
            series.dataFields.dateX = "date";
            series.dataFields.openValueY = "open";
            series.dataFields.valueY = "close";
            series.tooltipText = "open: {openValueY.value} close: {valueY.value}";
            series.sequencedInterpolation = true;
            series.fillOpacity = 0.3;
            series.defaultState.transitionDuration = 1000;
            series.tensionX = 0.8;
            var series2 = chart.series.push(new _amcharts_amcharts4_charts_js__WEBPACK_IMPORTED_MODULE_1__["LineSeries"]());
            series2.dataFields.dateX = "date";
            series2.dataFields.valueY = "open";
            series2.sequencedInterpolation = true;
            series2.defaultState.transitionDuration = 1500;
            series2.stroke = chart.colors.getIndex(6);
            series2.tensionX = 0.8;
            chart.cursor = new _amcharts_amcharts4_charts_js__WEBPACK_IMPORTED_MODULE_1__["XYCursor"]();
            chart.cursor.xAxis = dateAxis;
            chart.scrollbarX = new _amcharts_amcharts4_core_js__WEBPACK_IMPORTED_MODULE_0__["Scrollbar"]();
          }
        }]);

        return LineChartComponent;
      }();

      LineChartComponent.ɵfac = function LineChartComponent_Factory(t) {
        return new (t || LineChartComponent)();
      };

      LineChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: LineChartComponent,
        selectors: [["app-line-chart"]],
        decls: 1,
        vars: 0,
        consts: [["id", "chartdiv"]],
        template: function LineChartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);
          }
        },
        styles: ["#chartdiv[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    height: 250px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmUtY2hhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixhQUFhO0FBQ2pCIiwiZmlsZSI6ImxpbmUtY2hhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjaGFydGRpdiB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "G4mx":
    /*!************************************************************!*\
      !*** ./src/app/berater-portal/berater-portal.component.ts ***!
      \************************************************************/

    /*! exports provided: BeraterPortalComponent */

    /***/
    function G4mx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BeraterPortalComponent", function () {
        return BeraterPortalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _message_view_message_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../message-view/message-view.component */
      "JexY");
      /* harmony import */


      var _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../line-chart/line-chart.component */
      "De4M");

      var BeraterPortalComponent = /*#__PURE__*/function () {
        function BeraterPortalComponent() {
          _classCallCheck(this, BeraterPortalComponent);

          this.count = '55';
        }

        _createClass(BeraterPortalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BeraterPortalComponent;
      }();

      BeraterPortalComponent.ɵfac = function BeraterPortalComponent_Factory(t) {
        return new (t || BeraterPortalComponent)();
      };

      BeraterPortalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BeraterPortalComponent,
        selectors: [["app-berater-portal"]],
        decls: 282,
        vars: 0,
        consts: [["lang", "en"], [1, "navbar", "navbar-dark", "sticky-top", "bg-dark", "flex-md-nowrap", "p-0", "shadow"], [1, "navbar-brand", "col-md-3", "col-lg-2", "me-0", "px-3"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#sidebarMenu", "aria-controls", "sidebarMenu", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "position-absolute", "d-md-none", "collapsed"], [1, "navbar-toggler-icon"], ["type", "text", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "form-control-dark", "w-100"], [1, "navbar-nav", "px-3"], [1, "nav-item", "text-nowrap"], ["href", "#", 1, "nav-link"], [1, "container-fluid", 2, "float", "right"], [1, "row"], ["id", "sidebarMenu", 1, "col-md-3", "col-lg-2", "d-md-block", "bg-light", "sidebar", "collapse", 2, "z-index", "unset"], [1, "position-sticky", "pt-3"], [1, "nav", "flex-column"], [1, "nav-item"], ["aria-current", "page", 1, "nav-link", "active"], ["data-feather", "home"], [1, "nav-link"], ["data-feather", "file"], ["data-feather", "shopping-cart"], ["data-feather", "users"], ["data-feather", "bar-chart-2"], ["data-feather", "layers"], [1, "sidebar-heading", "d-flex", "justify-content-between", "align-items-center", "px-3", "mt-4", "mb-1", "text-muted"], ["aria-label", "Add a new report", 1, "link-secondary"], ["data-feather", "plus-circle"], [1, "nav", "flex-column", "mb-2"], ["data-feather", "file-text"], [1, "col-md-9", "ms-sm-auto", "col-lg-10", "px-md-4", 2, "margin-left", "10%!important"], [1, "d-flex", "justify-content-between", "flex-wrap", "flex-md-nowrap", "align-items-center", "pt-3", "pb-2", "mb-3", "border-bottom", 2, "z-index", "unset", "margin-left", "10%!important"], [1, "h2"], [1, "btn-toolbar", "mb-2", "mb-md-0"], [1, "btn-group", "me-2"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", "dropdown-toggle"], ["data-feather", "calendar"], [1, "container", "g-3", "overflow-hidden", 2, "margin-left", "9%"], [1, "col-sm"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "table", "table-hover", 2, "width", "100%", "margin-top", "5px"], [1, "list-group", 2, "width", "100%"], ["type", "button", 1, "task-btn-item", "list-group-item", "list-group-item-action"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-repeat", 2, "text-align", "right", "float", "right"], ["d", "M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"], ["fill-rule", "evenodd", "d", "M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "7+10", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "10%"], ["role", "progressbar", "aria-valuenow", "30", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "30%"], ["role", "progressbar", "aria-valuenow", "70", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "70%"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "100%"], [1, "row", "gx-5"], [1, "col-sm-8"], [1, "table", "table-hover", 2, "width", "100%"], [1, "col-sm-4"], [2, "width", "180%"], [1, "card-text"]],
        template: function BeraterPortalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Advisonaut Arbeitsbereich");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Abmelden");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nav", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Dashboard ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Anfragen ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Produkte ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Meine Kunden ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Dokumente ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Favoriten ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h6", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Gespeicherte Berichte");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ul", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Letzte Bewegungen ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "span", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Letztes Semester ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "main", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h1", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Share");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Export");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "span", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " This week ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h5", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Tasks und Pendenzen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "table", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "21");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "A");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "new");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Basisvertrag ausstehend");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Hans");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "22");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "P");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "new");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Bezugsgespr\xE4ch");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Peter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "23");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "T");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "old");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "neune Kontakt anfrage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Maria");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "24");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "A");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "old");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Zusatzvertrag fertig");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Robert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "25");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "P");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "old");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "neune Kontakt anfrage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Max");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "26");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "T");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "old");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Mandanten Gespreaech");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Miriam");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "h5", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Meine Auftr\xE4ge");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Hans Muster     ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "svg", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "\n                                                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "path", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "\n                                                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "path", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "\n                                              ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "       ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "\n                                                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "\n                                                  10%\n                                                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "\n                                              ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "\n                                            \n                                            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Hans Muster     ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "svg", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "\n                                                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "path", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "\n                                                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "path", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "\n                                              ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "       ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "\n                                                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "\n                                                  30%\n                                                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "\n                                              ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "\n                                            \n                                            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Melina Mueller     ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "svg", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "\n                                            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "path", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "\n                                            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "path", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "\n                                          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "       ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "\n                                            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "\n                                              70%\n                                            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "\n                                          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "\n                                        \n                                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Robert Keller    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "\n                                            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "\n                                              100%\n                                            ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "\n                                          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "\n                                        \n                                        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "h5", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Benachrichtigungen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "app-message-view");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "h5", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Offene Prozesse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "table", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Onboarding prozess");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "29/03/2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "29/03/2021");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Max Muster");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Besprechungsauszug ausf\xFCllen ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "21/03/2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "29/03/2021");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Benjamin Bluemche");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Basisvertrag ausstehend");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "20/03/2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "29/03/2021");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "Maria Meier");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "neune Kontakt anfrage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "09/02/2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "29/03/2021");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "Max Muster");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Zusatzvertrag fertig");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "28/01/2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "29/03/2021");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Max Muster");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "neune Kontakt anfrage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "05/01/2020 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "29/03/2021");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Mandantengespraech");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "app-line-chart", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "h5", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Produktivit\xE4t");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "p", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_message_view_message_view_component__WEBPACK_IMPORTED_MODULE_1__["MessageViewComponent"], _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_2__["LineChartComponent"]],
        styles: ["body[_ngcontent-%COMP%] {\r\n    font-size: .875rem;\r\n    margin: 0; height: 100%; \r\n    overflow: hidden\r\n  }\r\n  \r\n  .feather[_ngcontent-%COMP%] {\r\n    width: 16px;\r\n    height: 16px;\r\n    vertical-align: text-bottom;\r\n  }\r\n  \r\n  .row[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .lineChart[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    height: 200px;\r\n  }\r\n  \r\n  \r\n  \r\n  .sidebar[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    \r\n    bottom: 0;\r\n    \r\n    left: 0;\r\n    z-index: 100; \r\n    padding: 48px 0 0; \r\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\r\n  }\r\n  \r\n  @media (max-width: 767.98px) {\r\n    .sidebar[_ngcontent-%COMP%] {\r\n      top: 5rem;\r\n    }\r\n  }\r\n  \r\n  .sidebar-sticky[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: 0;\r\n    height: calc(100vh - 48px);\r\n    padding-top: .5rem;\r\n    overflow-x: hidden;\r\n    overflow-y: auto; \r\n  }\r\n  \r\n  .sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n    font-weight: 500;\r\n    color: #333;\r\n  }\r\n  \r\n  .sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .feather[_ngcontent-%COMP%] {\r\n    margin-right: 4px;\r\n    color: #727272;\r\n  }\r\n  \r\n  .sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\r\n    color: #007bff;\r\n  }\r\n  \r\n  .sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover   .feather[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]   .feather[_ngcontent-%COMP%] {\r\n    color: inherit;\r\n  }\r\n  \r\n  .sidebar-heading[_ngcontent-%COMP%] {\r\n    font-size: .75rem;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  \r\n  \r\n  .navbar-brand[_ngcontent-%COMP%] {\r\n    padding-top: .75rem;\r\n    padding-bottom: .75rem;\r\n    font-size: 1rem;\r\n    background-color: rgba(0, 0, 0, .25);\r\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);\r\n  }\r\n  \r\n  .navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\r\n    top: .25rem;\r\n    right: 1rem;\r\n  }\r\n  \r\n  .navbar[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    padding: .75rem 1rem;\r\n    border-width: 0;\r\n    border-radius: 0;\r\n  }\r\n  \r\n  .form-control-dark[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    background-color: rgba(255, 255, 255, .1);\r\n    border-color: rgba(255, 255, 255, .1);\r\n  }\r\n  \r\n  .form-control-dark[_ngcontent-%COMP%]:focus {\r\n    border-color: transparent;\r\n    box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\r\n  }\r\n  \r\n  .modal-btn[_ngcontent-%COMP%]{\r\n    float: right;\r\n  }\r\n  \r\n  .bd-placeholder-img[_ngcontent-%COMP%] {\r\n    font-size: 1.125rem;\r\n    text-anchor: middle;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n        user-select: none;\r\n}\r\n  \r\n  @media (min-width: 768px) {\r\n    .bd-placeholder-img-lg[_ngcontent-%COMP%] {\r\n        font-size: 3.5rem;\r\n    }\r\n}\r\n  \r\n  pre[_ngcontent-%COMP%]{\r\n  margin-bottom: 0;\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n  \r\n  .task-btn-item[_ngcontent-%COMP%]{\r\n  height: 60px;\r\n}\r\n  \r\n  .btn-tasksPendenzen[_ngcontent-%COMP%]{\r\n\r\n  margin: 2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlcmF0ZXItcG9ydGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUyxFQUFFLFlBQVk7SUFDdkI7RUFDRjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixhQUFhO0VBQ2Y7O0VBRUE7O0lBRUU7O0VBRUY7SUFDRSxlQUFlO0lBQ2YsTUFBTTtJQUNOOztLQUVDO0lBQ0QsU0FBUztJQUNULGVBQWU7SUFDZixPQUFPO0lBQ1AsWUFBWSxFQUFFLHNCQUFzQjtJQUNwQyxpQkFBaUIsRUFBRSxxQkFBcUI7SUFDeEMsNENBQTRDO0VBQzlDOztFQUVBO0lBQ0U7TUFDRSxTQUFTO0lBQ1g7RUFDRjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUUsNkRBQTZEO0VBQ2pGOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTs7SUFFRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLHlCQUF5QjtFQUMzQjs7RUFFQTs7SUFFRTs7RUFFRjtJQUNFLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG9DQUFvQztJQUNwQyw2Q0FBNkM7RUFDL0M7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsV0FBVztFQUNiOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gseUNBQXlDO0lBQ3pDLHFDQUFxQztFQUN2Qzs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6Qiw4Q0FBOEM7RUFDaEQ7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIscUJBQWlCO1FBQWpCLGlCQUFpQjtBQUNyQjs7RUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0VBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0lBQXdJO0FBQzFJOztFQUVBO0VBQ0UsWUFBWTtBQUNkOztFQUVBOztFQUVFLFdBQVc7QUFDYiIsImZpbGUiOiJiZXJhdGVyLXBvcnRhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBmb250LXNpemU6IC44NzVyZW07XHJcbiAgICBtYXJnaW46IDA7IGhlaWdodDogMTAwJTsgXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuXHJcbiAgfVxyXG4gIFxyXG4gIC5mZWF0aGVyIHtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xyXG4gIH1cclxuXHJcbiAgLnJvd3tcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmxpbmVDaGFydHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuICBcclxuICAvKlxyXG4gICAqIFNpZGViYXJcclxuICAgKi9cclxuICBcclxuICAuc2lkZWJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICAvKiBydGw6cmF3OlxyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICAqL1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgLyogcnRsOnJlbW92ZSAqL1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDEwMDsgLyogQmVoaW5kIHRoZSBuYXZiYXIgKi9cclxuICAgIHBhZGRpbmc6IDQ4cHggMCAwOyAvKiBIZWlnaHQgb2YgbmF2YmFyICovXHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgMCByZ2JhKDAsIDAsIDAsIC4xKTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAuc2lkZWJhciB7XHJcbiAgICAgIHRvcDogNXJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXItc3RpY2t5IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDQ4cHgpO1xyXG4gICAgcGFkZGluZy10b3A6IC41cmVtO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bzsgLyogU2Nyb2xsYWJsZSBjb250ZW50cyBpZiB2aWV3cG9ydCBpcyBzaG9ydGVyIHRoYW4gY29udGVudC4gKi9cclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXIgLm5hdi1saW5rIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXIgLm5hdi1saW5rIC5mZWF0aGVyIHtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgY29sb3I6ICM3MjcyNzI7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyIC5uYXYtbGluay5hY3RpdmUge1xyXG4gICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyIC5uYXYtbGluazpob3ZlciAuZmVhdGhlcixcclxuICAuc2lkZWJhciAubmF2LWxpbmsuYWN0aXZlIC5mZWF0aGVyIHtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gIH1cclxuICBcclxuICAuc2lkZWJhci1oZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgXHJcbiAgLypcclxuICAgKiBOYXZiYXJcclxuICAgKi9cclxuICBcclxuICAubmF2YmFyLWJyYW5kIHtcclxuICAgIHBhZGRpbmctdG9wOiAuNzVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLjc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMjUpO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMjUpO1xyXG4gIH1cclxuICBcclxuICAubmF2YmFyIC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICB0b3A6IC4yNXJlbTtcclxuICAgIHJpZ2h0OiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAubmF2YmFyIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgcGFkZGluZzogLjc1cmVtIDFyZW07XHJcbiAgICBib3JkZXItd2lkdGg6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1jb250cm9sLWRhcmsge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWNvbnRyb2wtZGFyazpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjI1KTtcclxuICB9XHJcblxyXG4gIC5tb2RhbC1idG57XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIC5iZC1wbGFjZWhvbGRlci1pbWcge1xyXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5iZC1wbGFjZWhvbGRlci1pbWctbGcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5wcmV7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4udGFzay1idG4taXRlbXtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5idG4tdGFza3NQZW5kZW56ZW57XHJcblxyXG4gIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "JexY":
    /*!********************************************************!*\
      !*** ./src/app/message-view/message-view.component.ts ***!
      \********************************************************/

    /*! exports provided: MessageViewComponent */

    /***/
    function JexY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageViewComponent", function () {
        return MessageViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MessageViewComponent = /*#__PURE__*/function () {
        function MessageViewComponent() {
          _classCallCheck(this, MessageViewComponent);

          this.idNumber = '';
        }

        _createClass(MessageViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.modal = document.getElementById("myModal" + this.idNumber); // Get the button that opens the modal

            this.btn = document.getElementById("myBtn" + this.idNumber); // Get the <span> element that closes the modal

            this.span = document.getElementById("closingSpan");
            console.log(this.modal);
          }
        }, {
          key: "showMessager",
          value: function showMessager() {
            this.modal.style.display = "block";
          }
        }, {
          key: "closeMessager",
          value: function closeMessager() {
            this.modal.style.display = "none";
          }
        }]);

        return MessageViewComponent;
      }();

      MessageViewComponent.ɵfac = function MessageViewComponent_Factory(t) {
        return new (t || MessageViewComponent)();
      };

      MessageViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MessageViewComponent,
        selectors: [["app-message-view"]],
        inputs: {
          idNumber: "idNumber"
        },
        decls: 22,
        vars: 4,
        consts: [[1, "list-group"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], [3, "id", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-check-circle-fill"], ["d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-question-circle-fill"], ["d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-x-circle-fill"], ["d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"], [1, "modal", 3, "id"], [1, "modal-content"], ["id", "closingSpan", 1, "close", 3, "click"], ["src", "https://webchat.botframework.com/embed/my-advisor-in-command?s=AwZGzBhtINs.qGy0YadRdgLLwSSugnIV4R-h2HIL9t86a-P_9pgN8tE", 2, "width", "100%", "min-height", "500px"]],
        template: function MessageViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Neuer Title-Switch von Robert ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageViewComponent_Template_button_click_4_listener() {
              return ctx.showMessager();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Offener Title-Switch von Maria ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageViewComponent_Template_button_click_9_listener() {
              return ctx.showMessager();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Angebot wurde Abgelehnt ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageViewComponent_Template_button_click_14_listener() {
              return ctx.showMessager();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageViewComponent_Template_span_click_19_listener() {
              return ctx.closeMessager();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "iframe", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "myBtn", ctx.idNumber, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "myBtn", ctx.idNumber, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "myBtn", ctx.idNumber, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "myModal", ctx.idNumber, "");
          }
        },
        styles: [".modal[_ngcontent-%COMP%] {\r\n    display: none; \r\n    position: fixed; \r\n    z-index: 1; \r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; \r\n    height: 100%; \r\n    overflow: auto; \r\n    background-color: rgb(0,0,0); \r\n    background-color: rgba(0,0,0,0.4); \r\n  }\r\n.input-group[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n  }\r\n.modal-content[_ngcontent-%COMP%] {\r\n    background-color: #fefefe;\r\n    margin: 10% ; \r\n    margin-left: 35% ; \r\n    padding: 10px;\r\n    border: 1px solid #888;\r\n    width: 30%; \r\n    position: absolute;\r\n  }\r\n\r\n.close[_ngcontent-%COMP%] {\r\n    color: #aaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    padding-right: 0;\r\n    align-self: flex-end;\r\n    font-weight: bold;\r\n  }\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n    color: black;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2Utdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUEyQjtBQUMzQjtJQUNJLGFBQWEsRUFBRSxzQkFBc0I7SUFDckMsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxVQUFVLEVBQUUsZUFBZTtJQUMzQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVcsRUFBRSxlQUFlO0lBQzVCLFlBQVksRUFBRSxnQkFBZ0I7SUFDOUIsY0FBYyxFQUFFLDRCQUE0QjtJQUM1Qyw0QkFBNEIsRUFBRSxtQkFBbUI7SUFDakQsaUNBQWlDLEVBQUUscUJBQXFCO0VBQzFEO0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZLEVBQUUsa0NBQWtDO0lBQ2hELGlCQUFpQixFQUFFLG1DQUFtQztJQUN0RCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVUsRUFBRSxvREFBb0Q7SUFDaEUsa0JBQWtCO0VBQ3BCO0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixpQkFBaUI7RUFDbkI7QUFFQTs7SUFFRSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakIiLCJmaWxlIjoibWVzc2FnZS12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXHJcbi5tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cclxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xyXG4gIH1cclxuXHJcbiAgLmlucHV0LWdyb3Vwe1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICAgIG1hcmdpbjogMTAlIDsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cclxuICAgIG1hcmdpbi1sZWZ0OiAzNSUgOyAvKiAzMCUgZnJvbSB0aGUgbGVmdCBhbmQgY2VudGVyZWQgKi9cclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgd2lkdGg6IDMwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbiAgXHJcbiAgLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xyXG4gIC5jbG9zZSB7XHJcbiAgICBjb2xvcjogI2FhYTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAuY2xvc2U6aG92ZXIsXHJcbiAgLmNsb3NlOmZvY3VzIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9Il19 */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _home_view_home_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home-view/home-view.component */
      "D5ag");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'advisonaut-routed';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 10,
        vars: 0,
        consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["name", "description", "content", ""], ["name", "author", "content", "Mark Otto, Jacob Thornton, and Bootstrap contributors"], ["name", "generator", "content", "Hugo 0.80.0"], ["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css", "rel", "stylesheet", "integrity", "sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://use.fontawesome.com/releases/v5.8.1/css/all.css", "integrity", "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf", "crossorigin", "anonymous"], ["id", "entrypoint"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "link", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-home-view", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
          }
        },
        directives: [_home_view_home_view_component__WEBPACK_IMPORTED_MODULE_1__["HomeViewComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _home_view_home_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./home-view/home-view.component */
      "D5ag");
      /* harmony import */


      var _kunden_portal_kunden_portal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./kunden-portal/kunden-portal.component */
      "tvs1");
      /* harmony import */


      var _berater_portal_berater_portal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./berater-portal/berater-portal.component */
      "G4mx");
      /* harmony import */


      var _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./line-chart/line-chart.component */
      "De4M");
      /* harmony import */


      var _message_view_message_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./message-view/message-view.component */
      "JexY");
      /* harmony import */


      var _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pie-chart/pie-chart.component */
      "1U8D");
      /* harmony import */


      var _chat_bot_pop_up_chat_bot_pop_up_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./chat-bot-pop-up/chat-bot-pop-up.component */
      "D/pH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["routes"])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_view_home_view_component__WEBPACK_IMPORTED_MODULE_4__["HomeViewComponent"], _kunden_portal_kunden_portal_component__WEBPACK_IMPORTED_MODULE_5__["KundenPortalComponent"], _berater_portal_berater_portal_component__WEBPACK_IMPORTED_MODULE_6__["BeraterPortalComponent"], _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_7__["LineChartComponent"], _message_view_message_view_component__WEBPACK_IMPORTED_MODULE_8__["MessageViewComponent"], _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_9__["PieChartComponent"], _chat_bot_pop_up_chat_bot_pop_up_component__WEBPACK_IMPORTED_MODULE_10__["ChatBotPopUpComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "tvs1":
    /*!**********************************************************!*\
      !*** ./src/app/kunden-portal/kunden-portal.component.ts ***!
      \**********************************************************/

    /*! exports provided: KundenPortalComponent */

    /***/
    function tvs1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KundenPortalComponent", function () {
        return KundenPortalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _chat_bot_pop_up_chat_bot_pop_up_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../chat-bot-pop-up/chat-bot-pop-up.component */
      "D/pH");
      /* harmony import */


      var _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../pie-chart/pie-chart.component */
      "1U8D");

      var KundenPortalComponent = /*#__PURE__*/function () {
        function KundenPortalComponent() {
          _classCallCheck(this, KundenPortalComponent);
        }

        _createClass(KundenPortalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.myDropdown = document.getElementById('dropMenu');
          }
        }, {
          key: "onToggleClick",
          value: function onToggleClick() {
            this.myDropdown.classList.toggle("show");
          }
        }]);

        return KundenPortalComponent;
      }();

      KundenPortalComponent.ɵfac = function KundenPortalComponent_Factory(t) {
        return new (t || KundenPortalComponent)();
      };

      KundenPortalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: KundenPortalComponent,
        selectors: [["app-kunden-portal"]],
        decls: 143,
        vars: 1,
        consts: [[1, "navbar", "navbar-dark", "bg-dark", "shadow-sm"], [1, "container"], ["href", "./app.component.html", 1, "navbar-brand", "d-flex", "align-items-center"], ["data-layer", "974b35d6-138b-44ea-8d69-3b7b0c212a0b", "preserveAspectRatio", "none", "viewBox", "0.0040628910064697266 0 36.990325927734375 36.000518798828125", 1, "iconAwesomeRocket"], ["d", "M 35.51132965087891 1.342968702316284 C 35.41904449462891 0.9131768345832825 35.08331298828125 0.5774422883987427 34.65352249145508 0.4851561784744263 C 32.38945388793945 0 30.6182804107666 0 28.85343742370605 0 C 21.59718704223633 0 17.24484252929688 3.881249904632568 13.99710941314697 9 L 6.670547008514404 9 C 5.39445972442627 9.001079559326172 4.228097915649414 9.721792221069336 3.656250476837158 10.86257743835449 L 0.1814062595367432 17.8094539642334 C -0.0795060396194458 18.33268928527832 -0.05098259449005127 18.95369529724121 0.2567955255508423 19.45080947875977 C 0.5645736455917358 19.94792175292969 1.107743501663208 20.25029754638672 1.692422151565552 20.25 L 8.988750457763672 20.25 L 7.408828735351563 21.82992172241211 C 6.530376434326172 22.70856285095215 6.530376434326172 24.13292121887207 7.408829689025879 25.01156234741211 L 10.9877347946167 28.59117126464844 C 11.86645603179932 29.4700927734375 13.29135704040527 29.4700927734375 14.17007732391357 28.59117126464844 L 15.75 27.01124954223633 L 15.75 34.3125 C 15.74982166290283 34.89698028564453 16.05210113525391 35.4399299621582 16.54900550842285 35.74766540527344 C 17.04590797424316 36.05540084838867 17.66666984558105 36.08409881591797 18.18984603881836 35.82351684570313 L 25.12968826293945 32.35078430175781 C 26.27246475219727 31.77992820739746 26.9940357208252 30.61180114746094 26.99296951293945 29.33437538146973 L 26.99296951293945 21.9930477142334 C 32.09695434570313 18.73757934570313 35.99296951293945 14.37117290496826 35.99296951293945 7.150781631469727 C 36 5.378906726837158 36 3.607031583786011 35.51132965087891 1.342968940734863 Z M 27 11.8125 C 25.44670104980469 11.81250095367432 24.18750190734863 10.55330181121826 24.18750190734863 9.000000953674316 C 24.18750190734863 7.446700096130371 25.44670104980469 6.187500953674316 27.00000190734863 6.187500953674316 C 28.55330276489258 6.187500953674316 29.81250190734863 7.446700096130371 29.81250190734863 9.000000953674316 C 29.81250190734863 10.55330181121826 28.55330276489258 11.81250095367432 27.00000190734863 11.81250095367432 Z"], [2, "margin-left", "20px"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarHeader", "aria-controls", "navbarHeader", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [2, "float", "left", 3, "idNumber"], [1, "visually-hidden"], ["data-layer", "5d6b7b76-a2d1-4932-bdbf-c52408bdfa5a", "preserveAspectRatio", "none", "viewBox", "2.5707316398620605 1.9280335903167725 25 25", 1, "iconMetroBellfb6d0d58"], ["d", "M 27.57070350646973 21.45928001403809 C 27.57070350646973 14.42803382873535 21.3298454284668 15.99053192138672 21.3298454284668 10.52178287506104 C 21.3298454284668 10.06865787506104 21.28625869750977 9.681450843811035 21.20678520202637 9.351666450500488 C 20.79649543762207 6.592437744140625 18.96017456054688 4.37803316116333 16.5804557800293 3.703228712081909 C 16.60188484191895 3.605316638946533 16.61267471313477 3.505369901657104 16.61263656616211 3.405133008956909 C 16.61263465881348 2.592681884765625 15.9105396270752 1.928033590316772 15.05242252349854 1.928033590316772 C 14.19430446624756 1.928033590316772 13.49220752716064 2.592681884765625 13.49220752716064 3.405084371566772 C 13.49220752716064 3.507135152816772 13.50332355499268 3.606842279434204 13.52438735961914 3.703180074691772 C 10.85568904876709 4.459967136383057 8.870244026184082 7.152837753295898 8.813199043273926 10.37900924682617 C 8.812223434448242 10.42588424682617 8.811589241027832 10.47334575653076 8.811589241027832 10.5217342376709 C 8.811589241027832 15.99053192138672 2.570731639862061 14.42803382873535 2.570731639862061 21.45928192138672 C 2.570731639862061 23.32026863098145 6.729434490203857 24.87715339660645 12.29696369171143 25.26982879638672 C 12.82168292999268 26.25625419616699 13.85854244232178 26.92803382873535 15.05244827270508 26.92803382873535 C 16.24635314941406 26.92803382873535 17.28326225280762 26.25625610351563 17.80793190002441 25.26983070373535 C 23.37545967102051 24.87715339660645 27.53416442871094 23.32026863098145 27.53416442871094 21.45928382873535 C 27.53416442871094 21.45371627807617 27.53353118896484 21.44815254211426 27.53348159790039 21.4426326751709 L 27.57073020935059 21.45928382873535 Z M 22.7132453918457 22.77998352050781 C 21.39120674133301 23.13325500488281 19.8327465057373 23.38730812072754 18.16014862060547 23.52822494506836 C 18.02107048034668 21.93110847473145 16.68325996398926 20.67803192138672 15.05242252349854 20.67803192138672 C 13.42158222198486 20.67803192138672 12.08379745483398 21.93110847473145 11.94472026824951 23.52822494506836 C 10.2721700668335 23.38730812072754 8.713662147521973 23.13325500488281 7.391623497009277 22.77998352050781 C 5.572266578674316 22.29380226135254 4.702447414398193 21.74995422363281 4.384115219116211 21.45928001403809 C 4.702447414398193 21.16860771179199 5.572267055511475 20.62475776672363 7.391623497009277 20.13857650756836 C 9.507006645202637 19.57334136962891 12.22763061523438 19.26201438903809 15.05242252349854 19.26201438903809 C 17.87721252441406 19.26201438903809 20.59786224365234 19.57334136962891 22.71322059631348 20.13857650756836 C 24.53257751464844 20.62475776672363 25.40239715576172 21.16860771179199 25.72072982788086 21.45928001403809 C 25.40239715576172 21.74995422363281 24.53257751464844 22.29380226135254 22.71322059631348 22.77998352050781 Z"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarResponsive", "aria-controls", "navbarResponsive", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "container", 2, "margin-top", "20px"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["role", "presentation", 1, "nav-item"], ["id", "home-tab", "data-bs-toggle", "tab", "data-bs-target", "#home", "type", "button", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "profile-tab", "data-bs-toggle", "tab", "data-bs-target", "#profile", "type", "button", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link"], ["id", "messages-tab", "data-bs-toggle", "tab", "data-bs-target", "#messages", "type", "button", "role", "tab", "aria-controls", "messages", "aria-selected", "false", 1, "nav-link"], ["id", "settings-tab", "data-bs-toggle", "tab", "data-bs-target", "#settings", "type", "button", "role", "tab", "aria-controls", "settings", "aria-selected", "false", 1, "nav-link"], ["id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "active", 2, "margin-top", "20px"], ["for", "basic-url", 1, "form-label"], [1, "input-group", "mb-3", 2, "z-index", "0"], ["id", "basic-addon3", 1, "input-group-text", 2, "letter-spacing", "0.5px"], ["type", "text", "id", "basic-url", "aria-describedby", "basic-addon3", 1, "form-control"], ["type", "button", "data-bs-toggle", "button", "autocomplete", "off", 1, "btn", "btn-primary"], [1, "card", "mb-3", 2, "max-width", "100%"], [1, "row", "g-0"], [1, "col-md-8"], [1, "card-body"], [1, "list-group"], [1, "list-group-item"], [1, "fas", "fa-piggy-bank", 2, "font-size", "30px", "margin-right", "50px"], [2, "float", "right"], [2, "float", "right", "font-family", "inherit", "padding-left", "10px"], [1, "fas", "fa-coins", 2, "font-size", "30px", "margin-right", "53px"], [2, "float", "right", "font-family", "inherit", "padding-left", "10px", "margin-right", "20px"], [2, "float", "right", "font-family", "inherit", "padding-left", "10px", "margin-right", "10px"], [1, "card-text"], [1, "text-muted"], [1, "col-md-4", 2, "padding", "10px"], [1, "form-label", 2, "align-self", "center"], [2, "padding-left", "10px"], [1, "card-title", 2, "margin-bottom", "20px"], [1, "card-body", "container"], [1, "list-group", 2, "width", "100%"], [1, "table"], ["scope", "col"], [1, "text-muted", "py-5"], [1, "float-end", "mb-7"], ["href", "#"]],
        template: function KundenPortalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "- ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Meine Bank");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-chat-bot-pop-up", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "unread messages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\xDCBERSICHT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "VERM\xD6GEN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "KARTEN UND TWINT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "EINSTELLUNGEN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Zahlung erfassen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "IBAN/Konto-Nr/Name/");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Zahlung erfassen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Mein Verm\xF6gen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Sparkonto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " 105'433.33 CHF ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u2261");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "pre", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Mike M\xFCller             ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Sparkonto(Hobby)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " 165'433.40 CHF ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\u2261");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "pre", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Mike M\xFCller             ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Privatkonto (Steuern)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " 6500.99 CHF ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\u2261");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "pre", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Mike M\xFCller             ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Privatkonto (Haushalt)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " 65'000.50 CHF ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\u2261");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "pre", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Mike M\xFCller             ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "small", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Last updated 3 mins ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "label", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Ausgaben Haushalt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "app-pie-chart", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h5", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Ausgaben seit 01.01.2021");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "table", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "th", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Datum");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "th", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Einkauf");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "th", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Ort");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "th", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Ausgegeben");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "30.03.2021 : 20:21");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Ice Tea - Nestee -");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Brugg 5200 . CoopToGo - Tankstelle Coop to go Brugg Bahnhofstrasse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "- 07.80 CHF");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "29.03.2021 : 08:04");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Mc-Tastey Menu mit Pommes und Getraenk");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Baden 5400 . McDonalds Baden Altstatt - McDonalds Bahnhofstrasse 8");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "- 11.80 CHF");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "27.03.2021 : 07:30");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Emmi Cafee Latte - Softdrink");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Brugg 5200 . CoopToGo - Tankstelle Coop to go Brugg Bahnhofstrasse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "- 2.20 CHF");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "footer", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "a", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Back to top");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("idNumber", 3);
          }
        },
        directives: [_chat_bot_pop_up_chat_bot_pop_up_component__WEBPACK_IMPORTED_MODULE_1__["ChatBotPopUpComponent"], _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_2__["PieChartComponent"]],
        styles: [".bd-placeholder-img[_ngcontent-%COMP%] {\r\n    font-size: 1.125rem;\r\n    text-anchor: middle;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n        user-select: none;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .bd-placeholder-img-lg[_ngcontent-%COMP%] {\r\n        font-size: 3.5rem;\r\n    }\r\n}\r\n\r\n.iconAwesomeRocket[_ngcontent-%COMP%] {\r\n    fill: rgba(249, 137, 63, 1);\r\n    box-shadow: none;\r\n    width: 35.99px;\r\n    height: 36.00px;\r\n    left: 34.00px;\r\n    top: 15.00px;\r\n}\r\n\r\n.show[_ngcontent-%COMP%]{\r\n    display: block;\r\n}\r\n\r\n.iconMetroBellfb6d0d58[_ngcontent-%COMP%] {\r\n    fill: rgba(249, 137, 63, 1);\r\n    box-shadow: none;\r\n    width: 25.00px;\r\n    height: 25.00px;\r\n    left: 647.50px;\r\n    top: 20.00px;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%] {\r\n    color: rgba(249, 137, 63, 1);\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n    margin-top: 60px;\r\n}\r\n\r\n.price-tag[_ngcontent-%COMP%]{\r\n    text-align: right;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImt1bmRlbi1wb3J0YWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBaUI7UUFBakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoia3VuZGVuLXBvcnRhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJkLXBsYWNlaG9sZGVyLWltZyB7XHJcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgdGV4dC1hbmNob3I6IG1pZGRsZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmJkLXBsYWNlaG9sZGVyLWltZy1sZyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzLjVyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pY29uQXdlc29tZVJvY2tldCB7XHJcbiAgICBmaWxsOiByZ2JhKDI0OSwgMTM3LCA2MywgMSk7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgd2lkdGg6IDM1Ljk5cHg7XHJcbiAgICBoZWlnaHQ6IDM2LjAwcHg7XHJcbiAgICBsZWZ0OiAzNC4wMHB4O1xyXG4gICAgdG9wOiAxNS4wMHB4O1xyXG59XHJcblxyXG4uc2hvd3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaWNvbk1ldHJvQmVsbGZiNmQwZDU4IHtcclxuICAgIGZpbGw6IHJnYmEoMjQ5LCAxMzcsIDYzLCAxKTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB3aWR0aDogMjUuMDBweDtcclxuICAgIGhlaWdodDogMjUuMDBweDtcclxuICAgIGxlZnQ6IDY0Ny41MHB4O1xyXG4gICAgdG9wOiAyMC4wMHB4O1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbCB7XHJcbiAgICBjb2xvcjogcmdiYSgyNDksIDEzNywgNjMsIDEpO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG59XHJcbi5wcmljZS10YWd7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: routes, AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_view_home_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home-view/home-view.component */
      "D5ag");
      /* harmony import */


      var _kunden_portal_kunden_portal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./kunden-portal/kunden-portal.component */
      "tvs1");
      /* harmony import */


      var _berater_portal_berater_portal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./berater-portal/berater-portal.component */
      "G4mx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'home-view',
        component: _home_view_home_view_component__WEBPACK_IMPORTED_MODULE_1__["HomeViewComponent"]
      }, {
        path: 'kunden-portal',
        component: _kunden_portal_kunden_portal_component__WEBPACK_IMPORTED_MODULE_2__["KundenPortalComponent"]
      }, {
        path: 'berater-portal',
        component: _berater_portal_berater_portal_component__WEBPACK_IMPORTED_MODULE_3__["BeraterPortalComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map