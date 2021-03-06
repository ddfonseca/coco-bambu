(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"], {
    /***/
    8255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
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
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _pages_last_order_last_order_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pages/last-order/last-order.component */
      8315);
      /* harmony import */


      var _pages_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages/recipe-detail/recipe-detail.component */
      7901);
      /* harmony import */


      var _pages_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/recipes/recipes.component */
      5636);
      /* harmony import */


      var _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/signin/signin.component */
      5003);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__.SigninComponent
      }, {
        path: 'pedidos',
        component: _pages_last_order_last_order_component__WEBPACK_IMPORTED_MODULE_0__.LastOrderComponent
      }, {
        path: 'receitas',
        component: _pages_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_2__.RecipesComponent
      }, {
        path: 'receitas/:slug',
        component: _pages_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_1__.RecipeDetailComponent
      }];

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _AppRoutingModule.??fac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    5041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      1258);

      var _AppComponent = function _AppComponent() {
        _classCallCheck(this, _AppComponent);

        this.title = 'frontend-v2';
      };

      _AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)();
      };

      _AppComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    6747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/platform-browser */
      1570);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common/http */
      3882);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      718);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      2529);
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/header/header.component */
      3646);
      /* harmony import */


      var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/login/login.component */
      7143);
      /* harmony import */


      var _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/signin/signin.component */
      5003);
      /* harmony import */


      var _pages_last_order_last_order_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/last-order/last-order.component */
      8315);
      /* harmony import */


      var _components_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/recipe-list/recipe-list.component */
      3810);
      /* harmony import */


      var _pages_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/recipes/recipes.component */
      5636);
      /* harmony import */


      var _pages_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/recipe-detail/recipe-detail.component */
      7901);
      /* harmony import */


      var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/modal/modal.component */
      385);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.??fac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["????defineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["????defineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["????setNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__.SigninComponent, _pages_last_order_last_order_component__WEBPACK_IMPORTED_MODULE_5__.LastOrderComponent, _components_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_6__.RecipeListComponent, _pages_recipes_recipes_component__WEBPACK_IMPORTED_MODULE_7__.RecipesComponent, _pages_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_8__.RecipeDetailComponent, _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__.ModalComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule]
        });
      })();
      /***/

    },

    /***/
    3646:
    /*!*******************************************************!*\
      !*** ./src/app/components/header/header.component.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeaderComponent": function HeaderComponent() {
          return (
            /* binding */
            _HeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _core_services_recipe_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @core/services/recipe.service */
      4056);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      2529);

      var _HeaderComponent = /*#__PURE__*/function () {
        function _HeaderComponent(recipeService) {
          _classCallCheck(this, _HeaderComponent);

          this.recipeService = recipeService;
          this.search = '';
          this.imgSrc = '../../assets/img/logo-coco-bambu-mini.png';
        }

        _createClass(_HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.search = this.recipeService.getSearch();
          }
        }, {
          key: "onChangeInput",
          value: function onChangeInput() {
            this.recipeService.setSearch(this.search);
          }
        }]);

        return _HeaderComponent;
      }();

      _HeaderComponent.??fac = function HeaderComponent_Factory(t) {
        return new (t || _HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_0__.RecipeService));
      };

      _HeaderComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: _HeaderComponent,
        selectors: [["app-header"]],
        decls: 24,
        vars: 2,
        consts: [[1, "container"], ["alt", "Logo coco bambu", 3, "src"], [3, "submit"], ["type", "text", "name", "searchRecipes", "placeholder", "Buscar receita...", 1, "search", 3, "ngModel", "ngModelChange", "input"], ["routerLink", "/pedidos", "routerLinkActive", "active"], ["routerLink", "/receitas", "routerLinkActive", "active"], ["routerLink", "/"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("submit", function HeaderComponent_Template_form_submit_3_listener() {
              return ctx.onChangeInput();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function HeaderComponent_Template_input_ngModelChange_4_listener($event) {
              return ctx.search = $event;
            })("input", function HeaderComponent_Template_input_input_4_listener() {
              return ctx.onChangeInput();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "data_usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, " Pedidos ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "restaurant_menu ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, " Receitas ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, " Sair ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](23, "br");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("src", ctx.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.search);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon],
        styles: [".container[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n  background-color: hsl(0deg 0% 22%);\n}\n\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 0;\n  max-width: var(--max-width);\n  margin: 0 auto;\n  color: white;\n  padding: 0 10px;\n}\n\nform[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 16px;\n}\n\ninput[_ngcontent-%COMP%] {\n  background: url('icon-busca.png') no-repeat scroll 5px;\n  background-position: 98%;\n  background-color: white;\n  min-width: 17ch;\n  width: 100%;\n  padding: 10px 0;\n  padding-left: 16px;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: 1px solid var(--primary-color);\n}\n\ninput[_ngcontent-%COMP%]::-moz-placeholder {\n  display: inline;\n  font-style: italic;\n}\n\ninput[_ngcontent-%COMP%]:-ms-input-placeholder {\n  display: inline;\n  font-style: italic;\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  display: inline;\n  font-style: italic;\n}\n\na[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  grid-gap: 4px;\n  gap: 4px;\n  padding: 0 10px;\n  color: inherit;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color);\n}\n\nul[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  grid-gap: 10px;\n  gap: 10px;\n}\n\nli[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: white;\n  color: var(--primary-color);\n  margin-top: -16px;\n  margin-bottom: -16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHNEQUF3RTtFQUN4RSx3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBSEE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUhBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFRO0VBQVIsUUFBUTtFQUNSLGVBQWU7RUFDZixjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFTO0VBQVQsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDFyZW0gMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDBkZWcgMCUgMjIlKTtcbn1cblxuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgMTZweDtcbn1cblxuaW5wdXQge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9pY29uLWJ1c2NhLnBuZykgbm8tcmVwZWF0IHNjcm9sbCA1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDk4JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1pbi13aWR0aDogMTdjaDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbmEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxudWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBnYXA6IDEwcHg7XG59XG5cbmxpIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIG1hcmdpbi10b3A6IC0xNnB4O1xuICBtYXJnaW4tYm90dG9tOiAtMTZweDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    7143:
    /*!*****************************************************!*\
      !*** ./src/app/components/login/login.component.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginComponent": function LoginComponent() {
          return (
            /* binding */
            _LoginComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      4364);

      function LoginComponent_span_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"]("Por favor, entre com um usu\xE1rio.");
        }
      }

      function LoginComponent_span_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"]("Usu\xE1rio incorreto.");
        }
      }

      function LoginComponent_span_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"]("Por favor, entre com uma senha.");
        }
      }

      var _LoginComponent = /*#__PURE__*/function () {
        function _LoginComponent(router) {
          _classCallCheck(this, _LoginComponent);

          this.router = router;
          this.submitted = false;
          this.valid = {
            username: true,
            password: true
          };
        }

        _createClass(_LoginComponent, [{
          key: "onLoginSubmit",
          value: function onLoginSubmit(form) {
            this.submitted = true;
            var username = form.value.username;
            var password = form.value.password; // console.log(form);

            if (username !== 'admin') {
              this.valid.username = false;
            }

            if (password !== 'admin') {
              this.valid.password = false;
            }

            if (username === 'admin' && password === 'admin') {
              this.router.navigate(['pedidos']);
            }
          }
        }, {
          key: "onChangeInput",
          value: function onChangeInput() {
            this.valid.username = true;
            this.valid.password = true;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _LoginComponent;
      }();

      _LoginComponent.??fac = function LoginComponent_Factory(t) {
        return new (t || _LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
      };

      _LoginComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _LoginComponent,
        selectors: [["app-login"]],
        decls: 23,
        vars: 4,
        consts: [[1, "container"], [1, "notification"], [1, "order"], [1, "number"], [1, "number--message"], [1, "info-message"], [1, "logo"], ["src", "../../../assets/img/logo-coco-bambu.png", "alt", ""], [3, "ngSubmit"], ["loginForm", "ngForm"], ["type", "text", "id", "username", "placeholder", "Nome do usu\xE1rio", "ngModel", "", "name", "username", "required", "", 3, "input"], ["username", "ngModel"], ["class", "error", 4, "ngIf"], ["type", "password", "id", "password", "placeholder", "Senha", "required", "", "ngModel", "", "name", "password"], ["password", "ngModel"], ["type", "submit", 3, "disabled"], [1, "error"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "main");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Novo pedido");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " Por favor, fa\xE7a o login para ver o pedido e ter acesso a receita com o modo de preparo. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "form", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_12_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](13);

              return ctx.onLoginSubmit(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "input", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function LoginComponent_Template_input_input_14_listener() {
              return ctx.onChangeInput();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, LoginComponent_span_16_Template, 2, 1, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, LoginComponent_span_17_Template, 2, 1, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "input", 13, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, LoginComponent_span_20_Template, 2, 1, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Acessar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](13);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](15);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.valid.username);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !_r0.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
        styles: ["main[_ngcontent-%COMP%] {\n  background: url('img-bg-login.jpg');\n  background-repeat: no-rpeat;\n  background-size: cover;\n  height: 100%;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  grid-gap: 1rem;\n  gap: 1rem;\n  max-width: 340px;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  height: 100%;\n}\n\n.notification[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  background-color: var(--text-button-color);\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n  border-radius: 10px;\n}\n\n.notification[_ngcontent-%COMP%]::before, .notification[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \" \";\n  top: 100%;\n  left: 50%;\n}\n\n.notification[_ngcontent-%COMP%]::before {\n  border: 12px solid white;\n  transform: rotate(45deg) translate(-50%);\n  margin-top: -5px;\n}\n\n.order[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  color: var(--primary-color);\n  width: 40%;\n  \n  height: 100%;\n  text-align: center;\n  \n  border-right: 1px solid var(--text-input-brighter-color);\n}\n\n.number[_ngcontent-%COMP%] {\n  font-size: 4.5rem;\n  font-weight: 900;\n  padding-bottom: 1.2rem;\n}\n\n\n\n.info-message[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: var(--text-input-color);\n  padding: 0 1rem;\n  width: 60%;\n  \n}\n\nimg[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n  max-width: 100%;\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  grid-gap: 1rem;\n  gap: 1rem;\n  \n}\n\nform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:focus {\n  outline: 1px solid var(--primary-color);\n}\n\nform[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%], form[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  border-radius: 100px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border-radius: 0;\n  border: none;\n  padding: 0.7em 0;\n  background-color: var(--primary-color);\n  color: var(--text-button-color);\n  font-weight: 600;\n}\n\nbutton[_ngcontent-%COMP%]:hover, button[_ngcontent-%COMP%]:active {\n  background-color: var(--primary-darker-color);\n  transition: 0.5s ease;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n}\n\nbutton[_ngcontent-%COMP%]:disabled:hover {\n  background-color: var(--primary-color);\n  cursor: not-allowed;\n}\n\ninput[_ngcontent-%COMP%]::-moz-placeholder {\n  display: inline;\n  padding-left: 10px;\n}\n\ninput[_ngcontent-%COMP%]:-ms-input-placeholder {\n  display: inline;\n  padding-left: 10px;\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  display: inline;\n  padding-left: 10px;\n}\n\ninput[_ngcontent-%COMP%] {\n  color: var(--text-input-color);\n  font-style: italic;\n  border: none;\n  padding: 0.8em 0;\n  padding-left: 3.3em;\n  width: 100%;\n}\n\n#username[_ngcontent-%COMP%] {\n  background: url('icon-login.png') no-repeat scroll 5px;\n  background-color: white;\n}\n\n#password[_ngcontent-%COMP%] {\n  background: url('icon-key.png') no-repeat scroll 5px;\n  background-color: white;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: var(--primary-darker-color);\n  \n  \n}\n\na[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBdUQ7RUFDdkQsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQVM7RUFBVCxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULFNBQVM7QUFDWDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix3Q0FBd0M7RUFDeEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsd0RBQXdEO0FBQzFEOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSxrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQVM7RUFBVCxTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBOztFQUVFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHNDQUFzQztFQUN0QywrQkFBK0I7RUFDL0IsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLDZDQUE2QztFQUM3QyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFIQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBSEE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzREFBd0U7RUFDeEUsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0RBQXNFO0VBQ3RFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxvQkFBb0I7RUFDcEI7Ozs7O29DQUtrQztBQUNwQzs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvaW1nLWJnLWxvZ2luLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG4gIG1heC13aWR0aDogMzQwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm5vdGlmaWNhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1idXR0b24tY29sb3IpO1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5ub3RpZmljYXRpb246OmJlZm9yZSxcbi5ub3RpZmljYXRpb246OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIiBcIjtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiA1MCU7XG59XG5cbi5ub3RpZmljYXRpb246OmJlZm9yZSB7XG4gIGJvcmRlcjogMTJweCBzb2xpZCB3aGl0ZTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtNTAlKTtcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cblxuLm9yZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICB3aWR0aDogNDAlO1xuICAvKiBwYWRkaW5nOiAwIDFyZW07ICovXG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvKiBhbGlnbi1zZWxmOiBmbGV4LWVuZDsgKi9cbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tdGV4dC1pbnB1dC1icmlnaHRlci1jb2xvcik7XG59XG5cbi5udW1iZXIge1xuICBmb250LXNpemU6IDQuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgcGFkZGluZy1ib3R0b206IDEuMnJlbTtcbn1cblxuLyogLm51bWJlci1tZXNzYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59ICovXG5cbi5pbmZvLW1lc3NhZ2Uge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWlucHV0LWNvbG9yKTtcbiAgcGFkZGluZzogMCAxcmVtO1xuICB3aWR0aDogNjAlO1xuICAvKiBib3JkZXI6IHNvbGlkOyAqL1xufVxuXG5pbWcge1xuICBtYXJnaW46IDJyZW0gMDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xuICAvKiB3aWR0aDogNzAlOyAqL1xufVxuXG5mb3JtID4gKjpmb2N1cyB7XG4gIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuZm9ybSA+IGlucHV0LFxuZm9ybSA+IGJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xufVxuXG5idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuN2VtIDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1idXR0b24tY29sb3IpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5idXR0b246aG92ZXIsXG5idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrZXItY29sb3IpO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNjtcbn1cblxuYnV0dG9uOmRpc2FibGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbmlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pbnB1dCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWlucHV0LWNvbG9yKTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuOGVtIDA7XG4gIHBhZGRpbmctbGVmdDogMy4zZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jdXNlcm5hbWUge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9pY29uLWxvZ2luLnBuZykgbm8tcmVwZWF0IHNjcm9sbCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4jcGFzc3dvcmQge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9pY29uLWtleS5wbmcpIG5vLXJlcGVhdCBzY3JvbGwgNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZGFya2VyLWNvbG9yKTtcbiAgLyogY29sb3I6ICNlZTgwOWQ7ICovXG4gIC8qIGNvbG9yOiAjZmY0OTU2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlMWUzO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNmZjQ5NTY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAycHg7ICovXG59XG5cbmEge1xuICBjb2xvcjogd2hpdGU7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    385:
    /*!*****************************************************!*\
      !*** ./src/app/components/modal/modal.component.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModalComponent": function ModalComponent() {
          return (
            /* binding */
            _ModalComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      4364);

      function ModalComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Obrigado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Prato finalizado com sucesso ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ModalComponent_div_0_Template_div_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r1.closeModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ModalComponent_div_0_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r3.closeModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Ok");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" em ", ctx_r0.minutes, " minutos e ", ctx_r0.seconds, " segundos! ");
        }
      }

      var _ModalComponent = /*#__PURE__*/function () {
        function _ModalComponent() {
          var _this2 = this;

          _classCallCheck(this, _ModalComponent);

          this.minutes = 0;
          this.seconds = 0;
          this.showModal = false;
          this.showModalChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();

          this.closeModal = function () {
            _this2.showModal = false;

            _this2.showModalChange.emit(_this2.showModal);
          };
        }

        _createClass(_ModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ModalComponent;
      }();

      _ModalComponent.??fac = function ModalComponent_Factory(t) {
        return new (t || _ModalComponent)();
      };

      _ModalComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _ModalComponent,
        selectors: [["app-modal"]],
        inputs: {
          minutes: "minutes",
          seconds: "seconds",
          showModal: "showModal"
        },
        outputs: {
          showModalChange: "showModalChange"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "modal-container", 4, "ngIf"], [1, "modal-container"], [1, "modal"], [1, "X-button", 3, "click"], ["src", "../../../assets/img/icon-close.png", "alt", "", "srcset", ""], [3, "click"]],
        template: function ModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, ModalComponent_div_0_Template, 12, 2, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showModal);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
        styles: [".modal-container[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 2000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.modal[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 50px 80px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: relative;\n  -webkit-animation: modal 0.3s;\n          animation: modal 0.3s;\n}\n\n@-webkit-keyframes modal {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -60px, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes modal {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -60px, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.modal[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n.modal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  width: 150px;\n  padding: 10px 0;\n  margin: 30px auto 0;\n  background-color: white;\n  border: 2px solid black;\n  text-transform: uppercase;\n  font-weight: 600;\n}\n\n.modal[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.X-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translateY(-40px);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixNQUFNO0VBQ04sT0FBTztFQUNQLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsbUNBQW1DO0VBQ3JDO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsK0JBQStCO0VBQ2pDO0FBQ0Y7O0FBVEE7RUFDRTtJQUNFLFVBQVU7SUFDVixtQ0FBbUM7RUFDckM7RUFDQTtJQUNFLFVBQVU7SUFDViwrQkFBK0I7RUFDakM7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUiw0QkFBNEI7RUFDNUIsZUFBZTtBQUNqQiIsImZpbGUiOiJtb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgei1pbmRleDogMjAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tb2RhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1MHB4IDgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFuaW1hdGlvbjogbW9kYWwgMC4zcztcbn1cblxuQGtleWZyYW1lcyBtb2RhbCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNjBweCwgMCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuXG4ubW9kYWwgaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5tb2RhbCBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubW9kYWwgYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIG1hcmdpbjogMzBweCBhdXRvIDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm1vZGFsIGJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLlgtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQwcHgpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    3810:
    /*!*****************************************************************!*\
      !*** ./src/app/components/recipe-list/recipe-list.component.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RecipeListComponent": function RecipeListComponent() {
          return (
            /* binding */
            _RecipeListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! environments/environment */
      2340);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      4283);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _core_services_recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @core/services/recipe.service */
      4056);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      1258);

      function RecipeListComponent_a_0_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Prato Finalizado");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function RecipeListComponent_a_0_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "div", 10);
        }
      }

      var _c0 = function _c0(a1) {
        return ["/receitas", a1];
      };

      function RecipeListComponent_a_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](2, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](8, RecipeListComponent_a_0_div_8_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](9, RecipeListComponent_a_0_div_9_Template, 1, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12, "Hoje");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](14, "19:32");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](17, "Ver");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](19, "Receita");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var recipe_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](7, _c0, recipe_r1.slug));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate2"]("src", "", ctx_r0.BACKEND_URL, "/", recipe_r1.pictures.thumb, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](recipe_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", recipe_r1.description, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", recipe_r1.finished);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !recipe_r1.finished);
        }
      }

      var BACKEND_URL = environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;

      var _RecipeListComponent = /*#__PURE__*/function () {
        function _RecipeListComponent(recipeService) {
          _classCallCheck(this, _RecipeListComponent);

          this.recipeService = recipeService;
          this.BACKEND_URL = BACKEND_URL;
          this.searchSub = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
          this.recipeSub = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
          this.recipes = [];
          this.frecipes = [];
        }

        _createClass(_RecipeListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.recipeService.getRecipes();
            this.recipeSub = this.recipeService.getRecipesListener().subscribe(function (recipes) {
              _this3.recipes = recipes;
              _this3.frecipes = recipes;
            });
            this.searchSub = this.recipeService.getSearchListener().subscribe(function (search) {
              _this3.filterRecipes(search);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.searchSub.unsubscribe();
            this.recipeSub.unsubscribe();
          }
        }, {
          key: "filterRecipes",
          value: function filterRecipes(search) {
            this.frecipes = this.recipes.filter(function (_ref) {
              var name = _ref.name;
              return name.toLowerCase().includes(search);
            });
          }
        }, {
          key: "getLengthFilteredRecipes",
          value: function getLengthFilteredRecipes() {
            return this.recipes.length;
          }
        }]);

        return _RecipeListComponent;
      }();

      _RecipeListComponent.??fac = function RecipeListComponent_Factory(t) {
        return new (t || _RecipeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_1__.RecipeService));
      };

      _RecipeListComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _RecipeListComponent,
        selectors: [["app-recipe-list"]],
        decls: 1,
        vars: 1,
        consts: [["class", "wrapper", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "wrapper", 3, "routerLink"], [1, "img"], ["alt", "Imagem", 3, "src"], [1, ""], [1, "title"], [1, "description"], ["class", "circle prato", 4, "ngIf"], [1, "circle", "tempo"], [1, "circle", "receita"], [1, "circle", "prato"]],
        template: function RecipeListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](0, RecipeListComponent_a_0_Template, 20, 9, "a", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.frecipes);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n  transition: 0.5s;\n}\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 20px 10px;\n  grid-gap: 10px;\n  gap: 10px;\n  border-bottom: 1px solid var(--text-input-brighter-color);\n}\n.wrapper[_ngcontent-%COMP%]:hover {\n  \n  outline: 1px solid var(--primary-color);\n  \n  border-radius: 10px;\n  \n}\n.wrapper[_ngcontent-%COMP%]:focus {\n  outline: 1px solid var(--primary-color);\n  border-radius: 10px;\n}\n.wrapper[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n.info-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.circle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  border-radius: 50%;\n  \n  flex: 0 0 90px;\n  aspect-ratio: 1;\n}\n.receita[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  color: var(--text-button-color);\n  font-weight: 900;\n}\n.tempo[_ngcontent-%COMP%] {\n  background-color: #eee;\n}\n.prato[_ngcontent-%COMP%] {\n  color: #a7e369;\n  font-weight: 900;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n.receita[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-darker-color);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFTO0VBQVQsU0FBUztFQUNULHlEQUF5RDtBQUMzRDtBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1DQUFtQztBQUNyQztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLCtCQUErQjtFQUMvQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLDZDQUE2QztFQUM3QyxlQUFlO0FBQ2pCIiwiZmlsZSI6InJlY2lwZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIGdhcDogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXRleHQtaW5wdXQtYnJpZ2h0ZXItY29sb3IpO1xufVxuXG4ud3JhcHBlcjpob3ZlciB7XG4gIC8qIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpOyAqL1xuICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIC8qIG9wYWNpdHk6IDAuODsgKi9cbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLyogYm94LXNoYWRvdzogMXB4IDFweCAzcHggYmxhY2s7ICovXG59XG5cbi53cmFwcGVyOmZvY3VzIHtcbiAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ud3JhcHBlciAuaW1nIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmluZm8tdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNpcmNsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLyogZmxleC1iYXNpczogMjAwcHg7ICovXG4gIGZsZXg6IDAgMCA5MHB4O1xuICBhc3BlY3QtcmF0aW86IDE7XG59XG5cbi5yZWNlaXRhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJ1dHRvbi1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbi50ZW1wbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG5cbi5wcmF0byB7XG4gIGNvbG9yOiAjYTdlMzY5O1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLnJlY2VpdGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmtlci1jb2xvcik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    4056:
    /*!*************************************************!*\
      !*** ./src/app/core/services/recipe.service.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RecipeService": function RecipeService() {
          return (
            /* binding */
            _RecipeService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      9441);
      /* harmony import */


      var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! environments/environment */
      2340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      3882);

      var BACKEND_URL = environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;

      var _RecipeService = /*#__PURE__*/function () {
        function _RecipeService(http) {
          _classCallCheck(this, _RecipeService);

          this.http = http;
          this.recipes = []; // private recipe: Recipe = {}

          this.recipesUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          this.search = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        }

        _createClass(_RecipeService, [{
          key: "getRecipes",
          value: function getRecipes() {
            var _this4 = this;

            this.http.get("".concat(BACKEND_URL, "/recipes")).subscribe(function (recipes) {
              _this4.recipes = recipes;

              _this4.recipesUpdated.next(_toConsumableArray(_this4.recipes));
            });
          }
        }, {
          key: "getRecipesListener",
          value: function getRecipesListener() {
            return this.recipesUpdated.asObservable();
          }
        }, {
          key: "getLength",
          value: function getLength() {
            return this.recipes.length;
          }
        }, {
          key: "setSearch",
          value: function setSearch(search) {
            this.search.next(search);
          }
        }, {
          key: "getSearchListener",
          value: function getSearchListener() {
            return this.search.asObservable();
          }
        }, {
          key: "getRecipeBySlug",
          value: function getRecipeBySlug(_slug) {
            return this.http.get("".concat(BACKEND_URL, "/recipes/").concat(_slug)).toPromise();
          }
        }]);

        return _RecipeService;
      }();

      _RecipeService.??fac = function RecipeService_Factory(t) {
        return new (t || _RecipeService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _RecipeService.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({
        token: _RecipeService,
        factory: _RecipeService.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    8315:
    /*!**********************************************************!*\
      !*** ./src/app/pages/last-order/last-order.component.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LastOrderComponent": function LastOrderComponent() {
          return (
            /* binding */
            _LastOrderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../components/header/header.component */
      3646);
      /* harmony import */


      var _components_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../components/recipe-list/recipe-list.component */
      3810);

      var _LastOrderComponent = /*#__PURE__*/function () {
        function _LastOrderComponent() {
          _classCallCheck(this, _LastOrderComponent);

          this.search = '';
        }

        _createClass(_LastOrderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSearchRecipes",
          value: function onSearchRecipes(search) {
            this.search = search;
          }
        }]);

        return _LastOrderComponent;
      }();

      _LastOrderComponent.??fac = function LastOrderComponent_Factory(t) {
        return new (t || _LastOrderComponent)();
      };

      _LastOrderComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _LastOrderComponent,
        selectors: [["app-last-order"]],
        decls: 5,
        vars: 0,
        consts: [[1, "container"]],
        template: function LastOrderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "\xDAltimos pedidos");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "app-recipe-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
          }
        },
        directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_1__.RecipeListComponent],
        styles: [".container[_ngcontent-%COMP%] {\n  max-width: var(--max-width);\n  margin: 0 auto;\n  margin-top: 20px;\n  padding: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhc3Qtb3JkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakIiLCJmaWxlIjoibGFzdC1vcmRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    7901:
    /*!****************************************************************!*\
      !*** ./src/app/pages/recipe-detail/recipe-detail.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RecipeDetailComponent": function RecipeDetailComponent() {
          return (
            /* binding */
            _RecipeDetailComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _home_davidfonseca_Documents_Dev_tagme_coco_bambu_one_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */
      9369);
      /* harmony import */


      var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! environments/environment */
      2340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/services/recipe.service */
      4056);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../components/modal/modal.component */
      385);

      function RecipeDetailComponent_main_0_ng_container_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("change", function RecipeDetailComponent_main_0_ng_container_24_Template_input_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](2);

            return ctx_r7.onChangeItems($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var ingredient_r5 = ctx.$implicit;
          var idx_r6 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????propertyInterpolate1"]("id", "ingredient_", idx_r6, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("value", idx_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????propertyInterpolate1"]("for", "ingredient_", idx_r6, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", ingredient_r5, " ");
        }
      }

      function RecipeDetailComponent_main_0_ng_container_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("change", function RecipeDetailComponent_main_0_ng_container_29_Template_input_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](2);

            return ctx_r11.onChangeItems($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var step_r9 = ctx.$implicit;
          var idx_r10 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????propertyInterpolate1"]("id", "step_", idx_r10, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("value", idx_r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????propertyInterpolate1"]("for", "step_", idx_r10, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"]("Passo ", idx_r10 + 1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", step_r9, " ");
        }
      }

      function RecipeDetailComponent_main_0_ng_container_38_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RecipeDetailComponent_main_0_ng_container_38_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](2);

            return ctx_r13.startTime();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](2, " Iniciar Prepara\xE7\xE3o ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("disabled", !ctx_r3.checkedIngredients);
        }
      }

      function RecipeDetailComponent_main_0_ng_container_39_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RecipeDetailComponent_main_0_ng_container_39_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](2);

            return ctx_r15.endTime();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](2, " Finalizar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("disabled", !ctx_r4.checkedSteps);
        }
      }

      function RecipeDetailComponent_main_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "main", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](4, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](6, "Voltar");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](8, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](11, "Tempo de preparo");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](12, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](14, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](16, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](20, "section", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](21, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](22, "Ingredientes");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](23, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](24, RecipeDetailComponent_main_0_ng_container_24_Template, 5, 4, "ng-container", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](25, "section", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](26, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](27, "Modo de Preparo");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](28, "ol", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](29, RecipeDetailComponent_main_0_ng_container_29_Template, 9, 5, "ng-container", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](30, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](31, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](32, " Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](33, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](35, " pronto e ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](38, RecipeDetailComponent_main_0_ng_container_38_Template, 3, 1, "ng-container", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](39, RecipeDetailComponent_main_0_ng_container_39_Template, 3, 1, "ng-container", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](40, "app-modal", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("showModalChange", function RecipeDetailComponent_main_0_Template_app_modal_showModalChange_40_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();

            return ctx_r17.onModalChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"]("", ctx_r0.recipe.time, " minutos");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????propertyInterpolate2"]("src", "", ctx_r0.BACKEND_URL, "/", ctx_r0.recipe.pictures.hero, "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????propertyInterpolate"]("alt", ctx_r0.recipe.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](ctx_r0.recipe.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](ctx_r0.recipe.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngForOf", ctx_r0.recipe.ingredients);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngForOf", ctx_r0.recipe.steps);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"]("", ctx_r0.status, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate2"](" ", ctx_r0.minutes, " minuto(s) ", ctx_r0.seconds, " segundo(s) utilizado(s) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx_r0.showButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", !ctx_r0.showButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("minutes", ctx_r0.minutes)("seconds", ctx_r0.seconds)("showModal", ctx_r0.showModal);
        }
      }

      var Choice;

      (function (Choice) {
        Choice[Choice["ingredient"] = 0] = "ingredient";
        Choice[Choice["step"] = 1] = "step";
      })(Choice || (Choice = {}));

      var BACKEND_URL = environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;

      var _RecipeDetailComponent = /*#__PURE__*/function () {
        function _RecipeDetailComponent(recipeService, route) {
          var _this5 = this;

          _classCallCheck(this, _RecipeDetailComponent);

          this.recipeService = recipeService;
          this.route = route;
          this.BACKEND_URL = BACKEND_URL;
          this.selectedIngredients = [];
          this.selectedSteps = [];
          this.checkedIngredients = false;
          this.checkedSteps = false;
          this.showButton = true;
          this.timeReference = new Date();
          this.minutes = 0;
          this.seconds = 0;
          this.showModal = false;
          this.status = 0;

          this.updateTime = function () {
            var currentTime = new Date();

            var difference = currentTime.getTime() - _this5.timeReference.getTime(); // miliseconds


            _this5.minutes = Math.floor(difference / 1000 / 60) % 60;
            _this5.seconds = Math.floor(difference / 1000) % 60;
          };

          this.endTime = function () {
            clearInterval(_this5.interval);
            _this5.showModal = true;
          };
        }

        _createClass(_RecipeDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            return (0, _home_davidfonseca_Documents_Dev_tagme_coco_bambu_one_app_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var slug;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _this.recipeService.getRecipes();

                      slug = _this.route.snapshot.params.slug;
                      _context.next = 4;
                      return _this.recipeService.getRecipeBySlug(slug);

                    case 4:
                      _this.recipe = _context.sent;
                      _this.recipe = Object.assign(Object.assign({}, _this.recipe), {
                        time: _this.recipe.time / 60000
                      });
                      _this.selectedIngredients = _this.fillArray(_this.recipe.ingredients.length);
                      _this.selectedSteps = _this.fillArray(_this.recipe.steps.length);

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }))();
          }
        }, {
          key: "fillArray",
          value: function fillArray(length) {
            return Array(length).fill({
              idx: '0',
              selected: false
            }).map(function (_, idx) {
              return {
                id: String(idx),
                selected: false
              };
            });
          }
        }, {
          key: "onChangeItems",
          value: function onChangeItems($event) {
            var id = $event.target.value;
            var isChecked = $event.target.checked;
            var findItem;

            if ($event.target.id.includes('ingredient')) {
              findItem = this.selectedIngredients.find(function (item) {
                return item.id === id;
              });
              findItem.selected = isChecked;
              this.checkedIngredients = this.verifyAllItems(Choice.ingredient);
            } else {
              findItem = this.selectedSteps.find(function (item) {
                return item.id === id;
              });
              findItem.selected = isChecked;
              this.status = this.onChangeStatus(this.selectedSteps);
              this.checkedSteps = this.verifyAllItems(Choice.step);
            }
          }
        }, {
          key: "onChangeStatus",
          value: function onChangeStatus(items) {
            var total = items.reduce(function (acc, item) {
              if (item.selected) {
                acc++;
              }

              return acc;
            }, 0);
            return Math.round(total / items.length * 100);
          }
        }, {
          key: "verifyAllItems",
          value: function verifyAllItems(choice) {
            switch (choice) {
              case Choice.ingredient:
                return this.selectedIngredients.every(function (item) {
                  return item.selected === true;
                });

              case Choice.step:
                return this.selectedSteps.every(function (item) {
                  return item.selected === true;
                });

              default:
                return false;
            }
          }
        }, {
          key: "startTime",
          value: function startTime() {
            this.timeReference = new Date();
            this.interval = setInterval(this.updateTime, 1000);
            this.showButton = !this.showButton;
          }
        }, {
          key: "onModalChanged",
          value: function onModalChanged(showModal) {
            this.showModal = showModal;
          }
        }]);

        return _RecipeDetailComponent;
      }();

      _RecipeDetailComponent.??fac = function RecipeDetailComponent_Factory(t) {
        return new (t || _RecipeDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_core_services_recipe_service__WEBPACK_IMPORTED_MODULE_2__.RecipeService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute));
      };

      _RecipeDetailComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({
        type: _RecipeDetailComponent,
        selectors: [["app-recipe-detail"]],
        decls: 1,
        vars: 1,
        consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "hero"], ["routerLink", "/pedidos"], [1, "goBack"], ["src", "../../assets/img/icon-back.png", "alt", ""], [1, "goBack--text"], [1, "tempoDePreparo"], ["src", "../../assets/img/icon-time.png", "alt", ""], [1, "tempoDePreparo--info"], [1, "tempoDePreparo--time"], [3, "src", "alt"], [1, "info"], [1, "ingredients"], [1, "ingredients--list"], [4, "ngFor", "ngForOf"], [1, "modo-de-preparo"], [1, "modo-de-preparo--list"], [1, "status"], [4, "ngIf"], [3, "minutes", "seconds", "showModal", "showModalChange"], [1, "ingredients--list-item"], ["type", "checkbox", 1, "checkbox-circle", 3, "value", "id", "change"], [1, "checkbox-label", 3, "for"], [1, "modo-de-preparo--list-item"], [1, "checkbox-label", "row", 3, "for"], [3, "disabled", "click"]],
        template: function RecipeDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](0, RecipeDetailComponent_main_0_Template, 41, 16, "main", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.recipe);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__.ModalComponent],
        styles: ["[_nghost-%COMP%] {\n  --height: 120px;\n  --padding: 25px;\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: var(--max-width);\n  margin: 0 auto;\n}\n\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.goBack[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  z-index: 99;\n  color: white;\n  align-items: center;\n  margin-top: 20px;\n  margin-left: 20px;\n}\n\n.goBack--text[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n\n.tempoDePreparo[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  top: 5%;\n  right: 5%;\n  font-size: clamp(0.2rem, 3vw, 1rem);\n  color: black;\n  background-color: white;\n  padding: 10px 15px;\n  border-radius: 10px;\n}\n\n.tempoDePreparo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  z-index: 1;\n  width: 50px;\n  margin-right: 20px;\n}\n\n.tempoDePreparo--info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.tempoDePreparo--time[_ngcontent-%COMP%] {\n  margin-top: -8px;\n  font-weight: 600;\n}\n\n.info[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  z-index: -1;\n  margin-left: calc(var(--padding) * -1);\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));\n}\n\n.info[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 0 var(--padding);\n  height: var(--height);\n  padding-top: var(--padding);\n  z-index: 2;\n  transform: translateY(calc(var(--height) * -1 + var(--padding) * -1));\n  \n}\n\nimg[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  z-index: -1;\n  \n}\n\nh1[_ngcontent-%COMP%] {\n  font-weight: 900;\n}\n\n.info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.ingredients[_ngcontent-%COMP%] {\n  padding: 40px var(--padding);\n  background-color: #fafafa;\n}\n\n.ingredients--list[_ngcontent-%COMP%] {\n  list-style: none;\n  font-size: 1rem;\n  display: flex;\n  flex-direction: column;\n  grid-gap: 10px;\n  gap: 10px;\n}\n\n\n\n.checkbox-circle[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.checkbox-label[_ngcontent-%COMP%] {\n  display: block;\n  cursor: pointer;\n}\n\n.checkbox-label[_ngcontent-%COMP%]::before {\n  content: \"\\2714\";\n  display: inline-block;\n  border-radius: 50%;\n  font-size: 2rem;\n  width: 40px;\n  aspect-ratio: 1;\n  margin-right: 30px;\n  padding-top: 8px;\n  padding-left: 5px;\n  vertical-align: middle;\n  color: transparent;\n  transition: 0.2s;\n  border: 2px solid var(--text-input-brighter-color);\n}\n\n.checkbox-label[_ngcontent-%COMP%]:hover::before {\n  background-color: hsl(147deg, 66%, 70%);\n  border: 2px solid hsl(147deg, 66%, 70%);\n}\n\n.checkbox-label[_ngcontent-%COMP%]:active:before {\n  transform: scale(0);\n}\n\n.checkbox-circle[_ngcontent-%COMP%]:checked    + .checkbox-label[_ngcontent-%COMP%]::before {\n  background-color: mediumseagreen;\n  border-color: mediumseagreen;\n  color: #fff;\n}\n\n.checkbox-circle[_ngcontent-%COMP%]:disabled    + .checkbox-label[_ngcontent-%COMP%]:before {\n  transform: scale(1);\n  border-color: #aaa;\n}\n\n.checkbox-circle[_ngcontent-%COMP%]:checked:disabled    + .checkbox-labe[_ngcontent-%COMP%]:before {\n  transform: scale(1);\n  background-color: #bfb;\n  border-color: #bfb;\n}\n\n.modo-de-preparo[_ngcontent-%COMP%] {\n  padding: 0 var(--padding);\n}\n\n.modo-de-preparo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 30px 0;\n}\n\n.modo-de-preparo--list[_ngcontent-%COMP%] {\n  list-style-position: inside;\n}\n\n.modo-de-preparo--list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.modo-de-preparo--list-item[_ngcontent-%COMP%]    + .modo-de-preparo--list-item[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n\n\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  \n}\n\nfooter[_ngcontent-%COMP%] {\n  background-color: #f2f0f1;\n  padding: var(--padding);\n  display: flex;\n  margin-top: 50px;\n  align-items: center;\n}\n\nfooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: white;\n  font-weight: 600;\n  background-color: var(--primary-color);\n  padding: 10px 20px;\n  border-radius: 100px;\n  min-width: 162px;\n}\n\nfooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-darker-color);\n  cursor: pointer;\n}\n\nfooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background-color: dimgray;\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxTQUFTO0VBQ1QsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxzQ0FBc0M7RUFDdEMsWUFBWTtFQUNaLFdBQVc7RUFDWCwwRUFBMEU7QUFDNUU7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsVUFBVTtFQUNWLHFFQUFxRTtFQUNyRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixjQUFTO0VBQVQsU0FBUztBQUNYOztBQUVBOztHQUVHOztBQUVIO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBOzs7Ozs7R0FNRzs7QUFFSDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHNDQUFzQztFQUN0QyxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDZDQUE2QztFQUM3QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7QUFDckIiLCJmaWxlIjoicmVjaXBlLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAtLWhlaWdodDogMTIwcHg7XG4gIC0tcGFkZGluZzogMjVweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uaGVybyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmdvQmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgei1pbmRleDogOTk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5nb0JhY2stLXRleHQge1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLnRlbXBvRGVQcmVwYXJvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUlO1xuICByaWdodDogNSU7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMC4ycmVtLCAzdncsIDFyZW0pO1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi50ZW1wb0RlUHJlcGFybyBpbWcge1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4udGVtcG9EZVByZXBhcm8tLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udGVtcG9EZVByZXBhcm8tLXRpbWUge1xuICBtYXJnaW4tdG9wOiAtOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaW5mbzo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB6LWluZGV4OiAtMTtcbiAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tcGFkZGluZykgKiAtMSk7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMSkpO1xufVxuXG4uaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMCB2YXIoLS1wYWRkaW5nKTtcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpO1xuICBwYWRkaW5nLXRvcDogdmFyKC0tcGFkZGluZyk7XG4gIHotaW5kZXg6IDI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWShjYWxjKHZhcigtLWhlaWdodCkgKiAtMSArIHZhcigtLXBhZGRpbmcpICogLTEpKTtcbiAgLyogYm9yZGVyOiBzb2xpZDsgKi9cbn1cblxuaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbiAgLyogYm9yZGVyOiBzb2xpZDsgKi9cbn1cblxuaDEge1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG4uaW5mbyBoMSxcbi5pbmZvIHAge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pbmdyZWRpZW50cyB7XG4gIHBhZGRpbmc6IDQwcHggdmFyKC0tcGFkZGluZyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG5cbi5pbmdyZWRpZW50cy0tbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4vKiAuaW5ncmVkaWVudHMtLWxpc3QtaXRlbSAuY2hlY2tib3gtY2lyY2xlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTtcbn0gKi9cblxuLmNoZWNrYm94LWNpcmNsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jaGVja2JveC1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2hlY2tib3gtbGFiZWw6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFwyNzE0XCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDJyZW07XG4gIHdpZHRoOiA0MHB4O1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGV4dC1pbnB1dC1icmlnaHRlci1jb2xvcik7XG59XG5cbi5jaGVja2JveC1sYWJlbDpob3Zlcjo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE0N2RlZywgNjYlLCA3MCUpO1xuICBib3JkZXI6IDJweCBzb2xpZCBoc2woMTQ3ZGVnLCA2NiUsIDcwJSk7XG59XG5cbi5jaGVja2JveC1sYWJlbDphY3RpdmU6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cblxuLmNoZWNrYm94LWNpcmNsZTpjaGVja2VkICsgLmNoZWNrYm94LWxhYmVsOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBtZWRpdW1zZWFncmVlbjtcbiAgYm9yZGVyLWNvbG9yOiBtZWRpdW1zZWFncmVlbjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jaGVja2JveC1jaXJjbGU6ZGlzYWJsZWQgKyAuY2hlY2tib3gtbGFiZWw6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgYm9yZGVyLWNvbG9yOiAjYWFhO1xufVxuXG4uY2hlY2tib3gtY2lyY2xlOmNoZWNrZWQ6ZGlzYWJsZWQgKyAuY2hlY2tib3gtbGFiZTpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZiO1xuICBib3JkZXItY29sb3I6ICNiZmI7XG59XG5cbi5tb2RvLWRlLXByZXBhcm8ge1xuICBwYWRkaW5nOiAwIHZhcigtLXBhZGRpbmcpO1xufVxuXG4ubW9kby1kZS1wcmVwYXJvIGgxIHtcbiAgbWFyZ2luOiAzMHB4IDA7XG59XG5cbi5tb2RvLWRlLXByZXBhcm8tLWxpc3Qge1xuICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XG59XG5cbi5tb2RvLWRlLXByZXBhcm8tLWxpc3QgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4ubW9kby1kZS1wcmVwYXJvLS1saXN0LWl0ZW0gKyAubW9kby1kZS1wcmVwYXJvLS1saXN0LWl0ZW0ge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLyogXG4ubW9kby1kZS1wcmVwYXJvLS1saXN0IGxpOjptYXJrZXIge1xuICBjb250ZW50OiBcIlBhc3NvIFwiIGNvdW50ZXIobGkpIFwiXFxBXCI7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSAqL1xuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xufVxuXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMGYxO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuZm9vdGVyIGJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBtaW4td2lkdGg6IDE2MnB4O1xufVxuXG5mb290ZXIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrZXItY29sb3IpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmZvb3RlciBidXR0b246ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkaW1ncmF5O1xuICBvcGFjaXR5OiAwLjM7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    5636:
    /*!****************************************************!*\
      !*** ./src/app/pages/recipes/recipes.component.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RecipesComponent": function RecipesComponent() {
          return (
            /* binding */
            _RecipesComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../components/header/header.component */
      3646);

      var _RecipesComponent = /*#__PURE__*/function () {
        function _RecipesComponent() {
          _classCallCheck(this, _RecipesComponent);
        }

        _createClass(_RecipesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _RecipesComponent;
      }();

      _RecipesComponent.??fac = function RecipesComponent_Factory(t) {
        return new (t || _RecipesComponent)();
      };

      _RecipesComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: _RecipesComponent,
        selectors: [["app-recipes"]],
        decls: 4,
        vars: 0,
        consts: [[1, "container"]],
        template: function RecipesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "P\xE1gina de Receitas");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }
        },
        directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent],
        styles: [".container[_ngcontent-%COMP%] {\n  max-width: var(--max-width);\n  padding: 0 15px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTs7OztDQUlDIiwiZmlsZSI6InJlY2lwZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCk7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi8qIC5jb250YWluZXIgZGl2IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgIHBhZGRpbmc6IDIwcHggMDsgXG59IFxuKi9cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    5003:
    /*!**************************************************!*\
      !*** ./src/app/pages/signin/signin.component.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SigninComponent": function SigninComponent() {
          return (
            /* binding */
            _SigninComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../components/login/login.component */
      7143);

      var _SigninComponent = /*#__PURE__*/function () {
        function _SigninComponent() {
          _classCallCheck(this, _SigninComponent);
        }

        _createClass(_SigninComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _SigninComponent;
      }();

      _SigninComponent.??fac = function SigninComponent_Factory(t) {
        return new (t || _SigninComponent)();
      };

      _SigninComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: _SigninComponent,
        selectors: [["app-signin"]],
        decls: 1,
        vars: 0,
        template: function SigninComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-login");
          }
        },
        directives: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHIiwiZmlsZSI6InNpZ25pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmFwcC1sb2dpbiB7XG4gIHdpZHRoOiBjYWxjKHZhcigtLW1heC13aWR0aCkgLSAyMDBweCk7XG59ICovXG4iXX0= */"]
      });
      /***/
    },

    /***/
    2340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false,
        apiUrl: 'http://localhost:3000'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    4431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      1570);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map