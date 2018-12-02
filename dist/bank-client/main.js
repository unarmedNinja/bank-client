(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-nav/app-nav.component.html":
/*!************************************************!*\
  !*** ./src/app/app-nav/app-nav.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar>Menu</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item routerLink=\"/landing\">Home</a>\n      <a mat-list-item routerLink=\"/profile\">Profile</a>\n      <a mat-list-item routerLink=\"/contacts\">Contacts</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>Beavr</span>\n    </mat-toolbar>\n    <!-- Add Content Here -->\n    <div>\n      <router-outlet></router-outlet>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/app-nav/app-nav.component.sass":
/*!************************************************!*\
  !*** ./src/app/app-nav/app-nav.component.sass ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1uYXYvYXBwLW5hdi5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/app-nav/app-nav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/app-nav/app-nav.component.ts ***!
  \**********************************************/
/*! exports provided: AppNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppNavComponent", function() { return AppNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppNavComponent = /** @class */ (function () {
    function AppNavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    AppNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./app-nav.component.html */ "./src/app/app-nav/app-nav.component.html"),
            styles: [__webpack_require__(/*! ./app-nav.component.sass */ "./src/app/app-nav/app-nav.component.sass")],
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], AppNavComponent);
    return AppNavComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _list_view_list_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-view/list-view.component */ "./src/app/list-view/list-view.component.ts");
/* harmony import */ var _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/todo/todo.component */ "./src/app/components/todo/todo.component.ts");
/* harmony import */ var _components_cibc_cibc_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cibc/cibc.component */ "./src/app/components/cibc/cibc.component.ts");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _components_documents_documents_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/documents/documents.component */ "./src/app/components/documents/documents.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/summary/summary.component */ "./src/app/components/summary/summary.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/contacts/contacts.component */ "./src/app/components/contacts/contacts.component.ts");
/* harmony import */ var _components_review_review_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/review/review.component */ "./src/app/components/review/review.component.ts");
/* harmony import */ var _components_approve_approve_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/approve/approve.component */ "./src/app/components/approve/approve.component.ts");
/* harmony import */ var _services_todos_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/todos.service */ "./src/app/services/todos.service.ts");
/* harmony import */ var _services_cibc_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/cibc.service */ "./src/app/services/cibc.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














//services


var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'list', component: _list_view_list_view_component__WEBPACK_IMPORTED_MODULE_3__["ListViewComponent"] },
    { path: 'todo/:id', component: _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_4__["TodoComponent"] },
    { path: 'cibc', component: _components_cibc_cibc_component__WEBPACK_IMPORTED_MODULE_5__["CibcComponent"] },
    { path: 'landing', component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"] },
    { path: 'documents', component: _components_documents_documents_component__WEBPACK_IMPORTED_MODULE_7__["DocumentsComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'summary', component: _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_9__["SummaryComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"] },
    { path: 'contacts', component: _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_11__["ContactsComponent"] },
    { path: 'review', component: _components_review_review_component__WEBPACK_IMPORTED_MODULE_12__["ReviewComponent"] },
    { path: 'approve', component: _components_approve_approve_component__WEBPACK_IMPORTED_MODULE_13__["ApproveComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_services_todos_service__WEBPACK_IMPORTED_MODULE_14__["TodosService"], _services_cibc_service__WEBPACK_IMPORTED_MODULE_15__["CibcService"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Beavr';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_nav_app_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-nav/app-nav.component */ "./src/app/app-nav/app-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _list_view_list_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./list-view/list-view.component */ "./src/app/list-view/list-view.component.ts");
/* harmony import */ var _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/todo/todo.component */ "./src/app/components/todo/todo.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_cibc_cibc_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/cibc/cibc.component */ "./src/app/components/cibc/cibc.component.ts");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _components_documents_documents_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/documents/documents.component */ "./src/app/components/documents/documents.component.ts");
/* harmony import */ var _components_cofirm_cofirm_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/cofirm/cofirm.component */ "./src/app/components/cofirm/cofirm.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/summary/summary.component */ "./src/app/components/summary/summary.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/contacts/contacts.component */ "./src/app/components/contacts/contacts.component.ts");
/* harmony import */ var _components_review_review_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/review/review.component */ "./src/app/components/review/review.component.ts");
/* harmony import */ var _components_approve_approve_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/approve/approve.component */ "./src/app/components/approve/approve.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _app_nav_app_nav_component__WEBPACK_IMPORTED_MODULE_7__["AppNavComponent"],
                _list_view_list_view_component__WEBPACK_IMPORTED_MODULE_15__["ListViewComponent"],
                _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_16__["TodoComponent"],
                _components_cibc_cibc_component__WEBPACK_IMPORTED_MODULE_18__["CibcComponent"],
                _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_19__["LandingComponent"],
                _components_documents_documents_component__WEBPACK_IMPORTED_MODULE_20__["DocumentsComponent"],
                _components_cofirm_cofirm_component__WEBPACK_IMPORTED_MODULE_21__["CofirmComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
                _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_23__["SummaryComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_24__["ProfileComponent"],
                _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_25__["ContactsComponent"],
                _components_review_review_component__WEBPACK_IMPORTED_MODULE_26__["ReviewComponent"],
                _components_approve_approve_component__WEBPACK_IMPORTED_MODULE_27__["ApproveComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [_components_cofirm_cofirm_component__WEBPACK_IMPORTED_MODULE_21__["CofirmComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/approve/approve.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/approve/approve.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Mortage Pre Approval</h3>\n\n<div class=\"container\">\n  <ul class=\"progressbar\">\n      <li >step 1</li>\n      <li>step 2</li>\n      <li>step 3</li>\n      <li class=\"active\">step 4</li>\n  </ul>\n</div>\n<h4>Submitted</h4>\n<mat-card class=\"main-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"\"><mat-icon>star</mat-icon></div>\n    <mat-card-title>Thank You!</mat-card-title>\n    \n  </mat-card-header>\n  <mat-card-content>\n    <p>\n      Thank you for submitting, your financial advisor will contact you shortly.\n    </p>\n  </mat-card-content>\n  \n</mat-card>"

/***/ }),

/***/ "./src/app/components/approve/approve.component.sass":
/*!***********************************************************!*\
  !*** ./src/app/components/approve/approve.component.sass ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-card {\n  margin: 2em; }\n\n.container {\n  width: 600px;\n  margin: 100px auto;\n  padding-bottom: 3em; }\n\n.progressbar {\n  counter-reset: step; }\n\n.progressbar li {\n  list-style-type: none;\n  width: 25%;\n  float: left;\n  font-size: 12px;\n  position: relative;\n  text-align: center;\n  text-transform: uppercase;\n  color: #7d7d7d; }\n\n.progressbar li:before {\n  width: 30px;\n  height: 30px;\n  content: counter(step);\n  counter-increment: step;\n  line-height: 30px;\n  border: 2px solid #7d7d7d;\n  display: block;\n  text-align: center;\n  margin: 0 auto 10px auto;\n  border-radius: 50%;\n  background-color: white; }\n\n.progressbar li:after {\n  width: 100%;\n  height: 2px;\n  content: '';\n  position: absolute;\n  background-color: #7d7d7d;\n  top: 15px;\n  left: -50%;\n  z-index: -1; }\n\n.progressbar li:first-child:after {\n  content: none; }\n\n.progressbar li.active {\n  color: green; }\n\n.progressbar li.active:before {\n  border-color: #55b776; }\n\n.progressbar li.active + li:after {\n  background-color: #55b776; }\n\n.requiredDocTable {\n  margin: 3em; }\n\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0; }\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center; }\n\n.green-icon {\n  color: green; }\n\n.green-icon svg {\n  fill: green; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3c3dhbXkvaGFja2F0aG9uL2JhbmstY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9hcHByb3ZlL2FwcHJvdmUuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFXLEVBQUc7O0FBRWhCO0VBQ0ksYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFBRzs7QUFFMUI7RUFDSSxvQkFBbUIsRUFBRzs7QUFFMUI7RUFDSSxzQkFBcUI7RUFDckIsV0FBVTtFQUNWLFlBQVc7RUFDWCxnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsMEJBQXlCO0VBQ3pCLGVBQWMsRUFBRzs7QUFFckI7RUFDSSxZQUFXO0VBQ1gsYUFBWTtFQUNaLHVCQUFzQjtFQUN0Qix3QkFBdUI7RUFDdkIsa0JBQWlCO0VBQ2pCLDBCQUF5QjtFQUN6QixlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLHlCQUF3QjtFQUN4QixtQkFBa0I7RUFDbEIsd0JBQXVCLEVBQUc7O0FBRTlCO0VBQ0ksWUFBVztFQUNYLFlBQVc7RUFDWCxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLDBCQUF5QjtFQUN6QixVQUFTO0VBQ1QsV0FBVTtFQUNWLFlBQVcsRUFBRzs7QUFFbEI7RUFDSSxjQUFhLEVBQUc7O0FBRXBCO0VBQ0ksYUFBWSxFQUFHOztBQUVuQjtFQUNJLHNCQUFxQixFQUFHOztBQUU1QjtFQUNJLDBCQUF5QixFQUFHOztBQUVoQztFQUNJLFlBQVcsRUFBRzs7QUFFbEI7O0VBRUUsY0FBYSxFQUFHOztBQUdsQjtFQUNFLCtCQUE4QjtFQUM5QixvQkFBbUIsRUFBRzs7QUFFeEI7RUFDSSxhQUFZLEVBQUc7O0FBRW5CO0VBQ0ksWUFBVyxFQUFHIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hcHByb3ZlL2FwcHJvdmUuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jYXJkIHtcbiAgbWFyZ2luOiAyZW07IH1cblxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbjogMTAwcHggYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogM2VtOyB9XG5cbi5wcm9ncmVzc2JhciB7XG4gICAgY291bnRlci1yZXNldDogc3RlcDsgfVxuXG4ucHJvZ3Jlc3NiYXIgbGkge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICB3aWR0aDogMjUlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICM3ZDdkN2Q7IH1cblxuLnByb2dyZXNzYmFyIGxpOmJlZm9yZSB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGNvbnRlbnQ6IGNvdW50ZXIoc3RlcCk7XG4gICAgY291bnRlci1pbmNyZW1lbnQ6IHN0ZXA7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzdkN2Q3ZDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG8gMTBweCBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxuXG4ucHJvZ3Jlc3NiYXIgbGk6YWZ0ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMnB4O1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2Q3ZDdkO1xuICAgIHRvcDogMTVweDtcbiAgICBsZWZ0OiAtNTAlO1xuICAgIHotaW5kZXg6IC0xOyB9XG5cbi5wcm9ncmVzc2JhciBsaTpmaXJzdC1jaGlsZDphZnRlciB7XG4gICAgY29udGVudDogbm9uZTsgfVxuXG4ucHJvZ3Jlc3NiYXIgbGkuYWN0aXZlIHtcbiAgICBjb2xvcjogZ3JlZW47IH1cblxuLnByb2dyZXNzYmFyIGxpLmFjdGl2ZTpiZWZvcmUge1xuICAgIGJvcmRlci1jb2xvcjogIzU1Yjc3NjsgfVxuXG4ucHJvZ3Jlc3NiYXIgbGkuYWN0aXZlICsgbGk6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NWI3NzY7IH1cblxuLnJlcXVpcmVkRG9jVGFibGUge1xuICAgIG1hcmdpbjogM2VtOyB9XG5cbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBmbGV4LWJhc2lzOiAwOyB9XG5cblxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLmdyZWVuLWljb24ge1xuICAgIGNvbG9yOiBncmVlbjsgfVxuXG4uZ3JlZW4taWNvbiBzdmcge1xuICAgIGZpbGw6IGdyZWVuOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/approve/approve.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/approve/approve.component.ts ***!
  \*********************************************************/
/*! exports provided: ApproveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveComponent", function() { return ApproveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApproveComponent = /** @class */ (function () {
    function ApproveComponent() {
    }
    ApproveComponent.prototype.ngOnInit = function () {
    };
    ApproveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-approve',
            template: __webpack_require__(/*! ./approve.component.html */ "./src/app/components/approve/approve.component.html"),
            styles: [__webpack_require__(/*! ./approve.component.sass */ "./src/app/components/approve/approve.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], ApproveComponent);
    return ApproveComponent;
}());



/***/ }),

/***/ "./src/app/components/cibc/cibc.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/cibc/cibc.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Mortage Pre Approval</h3>\n\n<div class=\"container\">\n    <ul class=\"progressbar\">\n        <li class=\"active\">step 1</li>\n        <li>step 2</li>\n        <li>step 3</li>\n        <li>step 4</li>\n    </ul>\n</div>\n\n    <h4>Required Documents</h4>\n      <mat-accordion class=\"requiredDocTable example-headers-align\">\n          <mat-expansion-panel>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Accounts\n              </mat-panel-title>\n              <mat-panel-description>\n                Bank Account Details\n\n                <mat-icon class=\"green-icon\">check_box</mat-icon>\n              </mat-panel-description>\n            </mat-expansion-panel-header>\n        \n    <table>\n      <tr *ngFor=\"let account of accounts\">\n        <td>{{ account.type }}</td>\n        <td>{{ account.label }}</td>\n        <td>{{ account.balance.funds_available }} {{ account.balance.currency }}</td>\n      </tr>\n    </table>\n  </mat-expansion-panel>\n  <mat-expansion-panel (opened)=\"panelOpenState = true\"\n  (closed)=\"panelOpenState = false\">\n<mat-expansion-panel-header>\n    <mat-panel-title>\n        Pay Stub\n      </mat-panel-title>\n      <mat-panel-description>\n        Payroll Details (ADP)\n        <mat-icon class=\"green-icon\">check_box</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <div *ngIf=\"pay.payStatements && pay\">\n        <table>\n          <tr *ngFor=\"let statement of pay.payStatements\">\n            <td>{{statement.payDate }}</td>\n            <td>{{statement.grossPayAmount.amountValue}} {{ statement.grossPayAmount.currencyCode }}</td>\n          </tr>\n        </table>\n      </div>\n    </mat-expansion-panel>\n    <mat-expansion-panel (opened)=\"panelOpenState = true\"\n  (closed)=\"panelOpenState = false\">\n<mat-expansion-panel-header>\n    <mat-panel-title>\n        T4 Income\n      </mat-panel-title>\n      <mat-panel-description>\n          CRA Notice of Assessment\n        <mat-icon class=\"green-icon\">check_box</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <table>\n        <tr *ngFor=\"let line of income\">\n          <td>{{line.line }}</td>\n          <td>{{line.description}}</td>\n          <td>{{line.amount }}</td>\n      </table> \n    </mat-expansion-panel>\n    <mat-expansion-panel (opened)=\"panelOpenState = true\"\n  (closed)=\"panelOpenState = false\">\n<mat-expansion-panel-header>\n    <mat-panel-title>\n       Credit Score\n      </mat-panel-title>\n      <mat-panel-description>\n          Equifax\n        <mat-icon class=\"green-icon\">check_box</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n     Credit Score is 800\n    </mat-expansion-panel>\n</mat-accordion>\n<mat-divider></mat-divider>\n<div>\n  <button mat-button (click)=\"next()\">Submit</button>\n</div>"

/***/ }),

/***/ "./src/app/components/cibc/cibc.component.sass":
/*!*****************************************************!*\
  !*** ./src/app/components/cibc/cibc.component.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 600px;\n  margin: 100px auto;\n  padding-bottom: 3em; }\n\n.progressbar {\n  counter-reset: step; }\n\n.progressbar li {\n  list-style-type: none;\n  width: 25%;\n  float: left;\n  font-size: 12px;\n  position: relative;\n  text-align: center;\n  text-transform: uppercase;\n  color: #7d7d7d; }\n\n.progressbar li:before {\n  width: 30px;\n  height: 30px;\n  content: counter(step);\n  counter-increment: step;\n  line-height: 30px;\n  border: 2px solid #7d7d7d;\n  display: block;\n  text-align: center;\n  margin: 0 auto 10px auto;\n  border-radius: 50%;\n  background-color: white; }\n\n.progressbar li:after {\n  width: 100%;\n  height: 2px;\n  content: '';\n  position: absolute;\n  background-color: #7d7d7d;\n  top: 15px;\n  left: -50%;\n  z-index: -1; }\n\n.progressbar li:first-child:after {\n  content: none; }\n\n.progressbar li.active {\n  color: green; }\n\n.progressbar li.active:before {\n  border-color: #55b776; }\n\n.progressbar li.active + li:after {\n  background-color: #55b776; }\n\n.requiredDocTable {\n  margin: 3em; }\n\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0; }\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center; }\n\n.green-icon {\n  color: green; }\n\n.green-icon svg {\n  fill: green; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3c3dhbXkvaGFja2F0aG9uL2JhbmstY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9jaWJjL2NpYmMuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUFHOztBQUUxQjtFQUNJLG9CQUFtQixFQUFHOztBQUUxQjtFQUNJLHNCQUFxQjtFQUNyQixXQUFVO0VBQ1YsWUFBVztFQUNYLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQiwwQkFBeUI7RUFDekIsZUFBYyxFQUFHOztBQUVyQjtFQUNJLFlBQVc7RUFDWCxhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLHdCQUF1QjtFQUN2QixrQkFBaUI7RUFDakIsMEJBQXlCO0VBQ3pCLGVBQWM7RUFDZCxtQkFBa0I7RUFDbEIseUJBQXdCO0VBQ3hCLG1CQUFrQjtFQUNsQix3QkFBdUIsRUFBRzs7QUFFOUI7RUFDSSxZQUFXO0VBQ1gsWUFBVztFQUNYLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsMEJBQXlCO0VBQ3pCLFVBQVM7RUFDVCxXQUFVO0VBQ1YsWUFBVyxFQUFHOztBQUVsQjtFQUNJLGNBQWEsRUFBRzs7QUFFcEI7RUFDSSxhQUFZLEVBQUc7O0FBRW5CO0VBQ0ksc0JBQXFCLEVBQUc7O0FBRTVCO0VBQ0ksMEJBQXlCLEVBQUc7O0FBRWhDO0VBQ0ksWUFBVyxFQUFHOztBQUVsQjs7RUFFRSxjQUFhLEVBQUc7O0FBR2xCO0VBQ0UsK0JBQThCO0VBQzlCLG9CQUFtQixFQUFHOztBQUV4QjtFQUNJLGFBQVksRUFBRzs7QUFFbkI7RUFDSSxZQUFXLEVBQUciLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NpYmMvY2liYy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBtYXJnaW46IDEwMHB4IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDNlbTsgfVxuXG4ucHJvZ3Jlc3NiYXIge1xuICAgIGNvdW50ZXItcmVzZXQ6IHN0ZXA7IH1cblxuLnByb2dyZXNzYmFyIGxpIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjN2Q3ZDdkOyB9XG5cbi5wcm9ncmVzc2JhciBsaTpiZWZvcmUge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBjb250ZW50OiBjb3VudGVyKHN0ZXApO1xuICAgIGNvdW50ZXItaW5jcmVtZW50OiBzdGVwO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM3ZDdkN2Q7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvIDEwcHggYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cblxuLnByb2dyZXNzYmFyIGxpOmFmdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdkN2Q3ZDtcbiAgICB0b3A6IDE1cHg7XG4gICAgbGVmdDogLTUwJTtcbiAgICB6LWluZGV4OiAtMTsgfVxuXG4ucHJvZ3Jlc3NiYXIgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IG5vbmU7IH1cblxuLnByb2dyZXNzYmFyIGxpLmFjdGl2ZSB7XG4gICAgY29sb3I6IGdyZWVuOyB9XG5cbi5wcm9ncmVzc2JhciBsaS5hY3RpdmU6YmVmb3JlIHtcbiAgICBib3JkZXItY29sb3I6ICM1NWI3NzY7IH1cblxuLnByb2dyZXNzYmFyIGxpLmFjdGl2ZSArIGxpOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTViNzc2OyB9XG5cbi5yZXF1aXJlZERvY1RhYmxlIHtcbiAgICBtYXJnaW46IDNlbTsgfVxuXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgZmxleC1iYXNpczogMDsgfVxuXG5cbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbi5ncmVlbi1pY29uIHtcbiAgICBjb2xvcjogZ3JlZW47IH1cblxuLmdyZWVuLWljb24gc3ZnIHtcbiAgICBmaWxsOiBncmVlbjsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/components/cibc/cibc.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/cibc/cibc.component.ts ***!
  \***************************************************/
/*! exports provided: CibcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CibcComponent", function() { return CibcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cibc_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cibc.service */ "./src/app/services/cibc.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CibcComponent = /** @class */ (function () {
    function CibcComponent(route, cibcService, router) {
        this.route = route;
        this.cibcService = cibcService;
        this.router = router;
        this.pay = {};
        this.accounts = [];
        this.income = [];
    }
    CibcComponent.prototype.ngOnInit = function () {
        this.getAccounts();
        this.getIncome();
        this.getPay();
    };
    CibcComponent.prototype.getAccounts = function () {
        var _this = this;
        this.cibcService.getAccounts().subscribe(function (accounts) { return _this.accounts = accounts; });
    };
    CibcComponent.prototype.getPay = function () {
        var _this = this;
        this.cibcService.getPay().subscribe(function (pay) { return _this.pay = pay; });
    };
    CibcComponent.prototype.getIncome = function () {
        var _this = this;
        this.cibcService.getIncome().subscribe(function (income) { return _this.income = income; });
    };
    CibcComponent.prototype.next = function () {
        this.router.navigate(['/summary']);
    };
    CibcComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cibc',
            template: __webpack_require__(/*! ./cibc.component.html */ "./src/app/components/cibc/cibc.component.html"),
            styles: [__webpack_require__(/*! ./cibc.component.sass */ "./src/app/components/cibc/cibc.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_cibc_service__WEBPACK_IMPORTED_MODULE_1__["CibcService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CibcComponent);
    return CibcComponent;
}());



/***/ }),

/***/ "./src/app/components/cofirm/cofirm.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/cofirm/cofirm.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Consent</h2>\n<mat-dialog-content class=\"mat-typography\">\n  <h3>Authorize API</h3>\n  <p>Do you provide consent to retrieve CRA, Credit Check, Payroll data?</p>\n  <p>Terms and Conditions below...</p>\n  </mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-button mat-dialog-close>No</button>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Yes</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/components/cofirm/cofirm.component.sass":
/*!*********************************************************!*\
  !*** ./src/app/components/cofirm/cofirm.component.sass ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29maXJtL2NvZmlybS5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/components/cofirm/cofirm.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/cofirm/cofirm.component.ts ***!
  \*******************************************************/
/*! exports provided: CofirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CofirmComponent", function() { return CofirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CofirmComponent = /** @class */ (function () {
    function CofirmComponent() {
    }
    CofirmComponent.prototype.ngOnInit = function () {
    };
    CofirmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cofirm',
            template: __webpack_require__(/*! ./cofirm.component.html */ "./src/app/components/cofirm/cofirm.component.html"),
            styles: [__webpack_require__(/*! ./cofirm.component.sass */ "./src/app/components/cofirm/cofirm.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], CofirmComponent);
    return CofirmComponent;
}());



/***/ }),

/***/ "./src/app/components/contacts/contacts.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/contacts/contacts.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Contacts</h4>\n      <mat-accordion class=\"requiredDocTable example-headers-align\">\n          <mat-expansion-panel>\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                Financial Advisor\n              </mat-panel-title>\n              <mat-panel-description>\n                Spencer Strasmore\n\n                \n              </mat-panel-description>\n            </mat-expansion-panel-header>\n        \n    <table>\n      <tr>\n        <td>Phone</td>\n        <td>416-111-2222</td>\n      </tr>\n      <tr>\n        <td>Address</td>\n        <td>161 Bay</td>\n      </tr>\n    </table>\n  </mat-expansion-panel>\n  <mat-expansion-panel (opened)=\"panelOpenState = true\"\n  (closed)=\"panelOpenState = false\">\n<mat-expansion-panel-header>\n    <mat-panel-title>\n       Lawyer\n      </mat-panel-title>\n      <mat-panel-description>\n        Saul Goodman\n      \n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <table>\n      <tr>\n        <td>Phone</td>\n        <td>416-111-2222</td>\n      </tr>\n      <tr>\n        <td>Address</td>\n        <td>161 Bay</td>\n      </tr>\n    </table>\n  </mat-expansion-panel>\n  <mat-expansion-panel (opened)=\"panelOpenState = true\"\n  (closed)=\"panelOpenState = false\">\n<mat-expansion-panel-header>\n    <mat-panel-title>\n       Real Estate Agent\n      </mat-panel-title>\n      <mat-panel-description>\n        Phil Dunphy\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <table>\n      <tr>\n        <td>Phone</td>\n        <td>416-111-2222</td>\n      </tr>\n      <tr>\n        <td>Address</td>\n        <td>161 Bay</td>\n      </tr>\n    </table>\n  </mat-expansion-panel>\n      </mat-accordion>\n      <p>\n        <button mat-button><mat-icon>add_circle_outline</mat-icon>Add New Contact</button>\n      </p>"

/***/ }),

/***/ "./src/app/components/contacts/contacts.component.sass":
/*!*************************************************************!*\
  !*** ./src/app/components/contacts/contacts.component.sass ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 600px;\n  margin: 100px auto;\n  padding-bottom: 3em; }\n\n.progressbar {\n  counter-reset: step; }\n\n.progressbar li {\n  list-style-type: none;\n  width: 25%;\n  float: left;\n  font-size: 12px;\n  position: relative;\n  text-align: center;\n  text-transform: uppercase;\n  color: #7d7d7d; }\n\n.progressbar li:before {\n  width: 30px;\n  height: 30px;\n  content: counter(step);\n  counter-increment: step;\n  line-height: 30px;\n  border: 2px solid #7d7d7d;\n  display: block;\n  text-align: center;\n  margin: 0 auto 10px auto;\n  border-radius: 50%;\n  background-color: white; }\n\n.progressbar li:after {\n  width: 100%;\n  height: 2px;\n  content: '';\n  position: absolute;\n  background-color: #7d7d7d;\n  top: 15px;\n  left: -50%;\n  z-index: -1; }\n\n.progressbar li:first-child:after {\n  content: none; }\n\n.progressbar li.active {\n  color: green; }\n\n.progressbar li.active:before {\n  border-color: #55b776; }\n\n.progressbar li.active + li:after {\n  background-color: #55b776; }\n\n.requiredDocTable {\n  margin: 3em; }\n\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0; }\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center; }\n\n.green-icon {\n  color: green; }\n\n.green-icon svg {\n  fill: green; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3c3dhbXkvaGFja2F0aG9uL2JhbmstY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsb0JBQW1CLEVBQUc7O0FBRTFCO0VBQ0ksb0JBQW1CLEVBQUc7O0FBRTFCO0VBQ0ksc0JBQXFCO0VBQ3JCLFdBQVU7RUFDVixZQUFXO0VBQ1gsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLDBCQUF5QjtFQUN6QixlQUFjLEVBQUc7O0FBRXJCO0VBQ0ksWUFBVztFQUNYLGFBQVk7RUFDWix1QkFBc0I7RUFDdEIsd0JBQXVCO0VBQ3ZCLGtCQUFpQjtFQUNqQiwwQkFBeUI7RUFDekIsZUFBYztFQUNkLG1CQUFrQjtFQUNsQix5QkFBd0I7RUFDeEIsbUJBQWtCO0VBQ2xCLHdCQUF1QixFQUFHOztBQUU5QjtFQUNJLFlBQVc7RUFDWCxZQUFXO0VBQ1gsWUFBVztFQUNYLG1CQUFrQjtFQUNsQiwwQkFBeUI7RUFDekIsVUFBUztFQUNULFdBQVU7RUFDVixZQUFXLEVBQUc7O0FBRWxCO0VBQ0ksY0FBYSxFQUFHOztBQUVwQjtFQUNJLGFBQVksRUFBRzs7QUFFbkI7RUFDSSxzQkFBcUIsRUFBRzs7QUFFNUI7RUFDSSwwQkFBeUIsRUFBRzs7QUFFaEM7RUFDSSxZQUFXLEVBQUc7O0FBRWxCOztFQUVFLGNBQWEsRUFBRzs7QUFHbEI7RUFDRSwrQkFBOEI7RUFDOUIsb0JBQW1CLEVBQUc7O0FBRXhCO0VBQ0ksYUFBWSxFQUFHOztBQUVuQjtFQUNJLFlBQVcsRUFBRyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICB3aWR0aDogNjAwcHg7XG4gICAgbWFyZ2luOiAxMDBweCBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiAzZW07IH1cblxuLnByb2dyZXNzYmFyIHtcbiAgICBjb3VudGVyLXJlc2V0OiBzdGVwOyB9XG5cbi5wcm9ncmVzc2JhciBsaSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHdpZHRoOiAyNSU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzdkN2Q3ZDsgfVxuXG4ucHJvZ3Jlc3NiYXIgbGk6YmVmb3JlIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgY29udGVudDogY291bnRlcihzdGVwKTtcbiAgICBjb3VudGVyLWluY3JlbWVudDogc3RlcDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjN2Q3ZDdkO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgYXV0byAxMHB4IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XG5cbi5wcm9ncmVzc2JhciBsaTphZnRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZDdkN2Q7XG4gICAgdG9wOiAxNXB4O1xuICAgIGxlZnQ6IC01MCU7XG4gICAgei1pbmRleDogLTE7IH1cblxuLnByb2dyZXNzYmFyIGxpOmZpcnN0LWNoaWxkOmFmdGVyIHtcbiAgICBjb250ZW50OiBub25lOyB9XG5cbi5wcm9ncmVzc2JhciBsaS5hY3RpdmUge1xuICAgIGNvbG9yOiBncmVlbjsgfVxuXG4ucHJvZ3Jlc3NiYXIgbGkuYWN0aXZlOmJlZm9yZSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjNTViNzc2OyB9XG5cbi5wcm9ncmVzc2JhciBsaS5hY3RpdmUgKyBsaTphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1Yjc3NjsgfVxuXG4ucmVxdWlyZWREb2NUYWJsZSB7XG4gICAgbWFyZ2luOiAzZW07IH1cblxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gIGZsZXgtYmFzaXM6IDA7IH1cblxuXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4uZ3JlZW4taWNvbiB7XG4gICAgY29sb3I6IGdyZWVuOyB9XG5cbi5ncmVlbi1pY29uIHN2ZyB7XG4gICAgZmlsbDogZ3JlZW47IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/contacts/contacts.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/contacts/contacts.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/components/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.sass */ "./src/app/components/contacts/contacts.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/components/documents/documents.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/documents/documents.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  documents works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/documents/documents.component.sass":
/*!***************************************************************!*\
  !*** ./src/app/components/documents/documents.component.sass ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9jdW1lbnRzL2RvY3VtZW50cy5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/components/documents/documents.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/documents/documents.component.ts ***!
  \*************************************************************/
/*! exports provided: DocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsComponent", function() { return DocumentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocumentsComponent = /** @class */ (function () {
    function DocumentsComponent() {
    }
    DocumentsComponent.prototype.ngOnInit = function () {
    };
    DocumentsComponent.prototype.ngAfterViewInit = function () {
    };
    DocumentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-documents',
            template: __webpack_require__(/*! ./documents.component.html */ "./src/app/components/documents/documents.component.html"),
            styles: [__webpack_require__(/*! ./documents.component.sass */ "./src/app/components/documents/documents.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], DocumentsComponent);
    return DocumentsComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/landing.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/landing/landing.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3>Home Page</h3>\n  \n  \n  \n\n    <mat-card class=\"main-card\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"\"><mat-icon>home</mat-icon></div>\n          <mat-card-title>Morgage Pre Approval</mat-card-title>\n        </mat-card-header>\n       \n        <mat-card-content>\n          <p>\n            Pre-approval means that a lender has stated in writing that you qualify for a mortgage loan based on your current income and credit history. A pre-approval usually specifies a term, interest rate and mortgage amount. A pre-approval is typically valid for a brief period of time and usually has a number of conditions that must be met.\n          </p>\n          <p>Get an online pre-approval to know how much you may be able to afford and start your house hunt with confidence.</p>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-button (click)=\"openDialog()\">More</button>\n        </mat-card-actions>\n      </mat-card>\n      \n      <mat-card class=\"main-card\">\n          <mat-card-header>\n            <div mat-card-avatar class=\"\"><mat-icon>folder</mat-icon></div>\n            <mat-card-title>Mortgage Documents</mat-card-title>\n          </mat-card-header>\n      \n          <mat-card-content>\n            <p>\n              Manage documents and view status of current mortgage.\n            </p>\n          </mat-card-content>\n          <mat-card-actions>\n            <button mat-button routerLink=\"/cibc\">More</button>\n          </mat-card-actions>\n        </mat-card>\n     \n        <mat-card class=\"main-card\">\n            <mat-card-header>\n              <div mat-card-avatar class=\"\"><mat-icon>group</mat-icon></div>\n              <mat-card-title>Contacts</mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n              <p>\n               View and Manage contact details\n              </p>\n            </mat-card-content>\n            <mat-card-actions>\n              <button mat-button routerLink=\"/contacts\">More</button>\n            </mat-card-actions>\n          </mat-card>\n       \n          <mat-card class=\"main-card\">\n              <mat-card-header>\n                <div mat-card-avatar class=\"\"><mat-icon> attach_money</mat-icon></div>\n                <mat-card-title>Financial Advice</mat-card-title>\n                \n              </mat-card-header>\n              <!--\n              <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"\" length=\"320\" width=\"240\">\n              -->\n              <mat-card-content>\n                <p>\n                  View investment reccomendations \n                </p>\n              </mat-card-content>\n              <mat-card-actions>\n                <button mat-button>More</button>\n              </mat-card-actions>\n            </mat-card>\n            <mat-divider></mat-divider>\n\n      <div>\n        &nbsp;\n      </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/landing/landing.component.sass":
/*!***********************************************************!*\
  !*** ./src/app/components/landing/landing.component.sass ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-card {\n  margin: 2em; }\n\n.example-card {\n  max-width: 600px; }\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3c3dhbXkvaGFja2F0aG9uL2JhbmstY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFXLEVBQUc7O0FBRWhCO0VBQ0UsaUJBQWdCLEVBQUc7O0FBRXJCO0VBQ0Usb0ZBQW1GO0VBQ25GLHVCQUFzQixFQUFHIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jYXJkIHtcbiAgbWFyZ2luOiAyZW07IH1cblxuLmV4YW1wbGUtY2FyZCB7XG4gIG1heC13aWR0aDogNjAwcHg7IH1cblxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/landing/landing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/landing/landing.component.ts ***!
  \*********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cofirm_cofirm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cofirm/cofirm.component */ "./src/app/components/cofirm/cofirm.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LandingComponent = /** @class */ (function () {
    function LandingComponent(dialog, router) {
        this.dialog = dialog;
        this.router = router;
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_cofirm_cofirm_component__WEBPACK_IMPORTED_MODULE_1__["CofirmComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
            _this.router.navigate(['/cibc']);
        });
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/components/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.sass */ "./src/app/components/landing/landing.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/landing\"><img src=\"../../../assets/signinpage.png\"></a>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.sass":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.sass ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "content {\n  backgrount-color: blue; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3c3dhbXkvaGFja2F0aG9uL2JhbmstY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFzQixFQUFHIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnRlbnQge1xuICAgIGJhY2tncm91bnQtY29sb3I6IGJsdWU7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.router.navigate(['/landing']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.sass */ "./src/app/components/login/login.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Profile Details</h3>\n<p>\n  Enter Credentials for Bank, CRA, etc ...\n</p>\n <p>Form Input Details</p>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.sass":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.sass ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.sass */ "./src/app/components/profile/profile.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/review/review.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/review/review.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Mortage Pre Approval</h3>\n\n<div class=\"container\">\n    <ul class=\"progressbar\">\n        <li>step 1</li>\n        <li class=\"\">step 2</li>\n        <li class=\"active\">step 3</li>\n        <li>step 4</li>\n    </ul>\n</div>\n\n    <h4>Pre Approval Review</h4>\n    <div>\n      <img src=\"../../../assets/mortgage.graph.png\" width=\"640\" height=\"480\">\n    </div>\n    <mat-divider></mat-divider>\n    <div style=\"margin: 3em\">\n      <button mat-button (click)=\"back()\">back</button>\n      <button mat-button (click)=\"next()\">Submit to Financial Advisor</button>\n    </div>"

/***/ }),

/***/ "./src/app/components/review/review.component.sass":
/*!*********************************************************!*\
  !*** ./src/app/components/review/review.component.sass ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 600px;\n  margin: 100px auto;\n  padding-bottom: 3em; }\n\n.progressbar {\n  counter-reset: step; }\n\n.progressbar li {\n  list-style-type: none;\n  width: 25%;\n  float: left;\n  font-size: 12px;\n  position: relative;\n  text-align: center;\n  text-transform: uppercase;\n  color: #7d7d7d; }\n\n.progressbar li:before {\n  width: 30px;\n  height: 30px;\n  content: counter(step);\n  counter-increment: step;\n  line-height: 30px;\n  border: 2px solid #7d7d7d;\n  display: block;\n  text-align: center;\n  margin: 0 auto 10px auto;\n  border-radius: 50%;\n  background-color: white; }\n\n.progressbar li:after {\n  width: 100%;\n  height: 2px;\n  content: '';\n  position: absolute;\n  background-color: #7d7d7d;\n  top: 15px;\n  left: -50%;\n  z-index: -1; }\n\n.progressbar li:first-child:after {\n  content: none; }\n\n.progressbar li.active {\n  color: green; }\n\n.progressbar li.active:before {\n  border-color: #55b776; }\n\n.progressbar li.active + li:after {\n  background-color: #55b776; }\n\n.requiredDocTable {\n  margin: 3em; }\n\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0; }\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center; }\n\n.green-icon {\n  color: green; }\n\n.green-icon svg {\n  fill: green; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3c3dhbXkvaGFja2F0aG9uL2JhbmstY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9yZXZpZXcvcmV2aWV3LmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFBRzs7QUFFMUI7RUFDSSxvQkFBbUIsRUFBRzs7QUFFMUI7RUFDSSxzQkFBcUI7RUFDckIsV0FBVTtFQUNWLFlBQVc7RUFDWCxnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsMEJBQXlCO0VBQ3pCLGVBQWMsRUFBRzs7QUFFckI7RUFDSSxZQUFXO0VBQ1gsYUFBWTtFQUNaLHVCQUFzQjtFQUN0Qix3QkFBdUI7RUFDdkIsa0JBQWlCO0VBQ2pCLDBCQUF5QjtFQUN6QixlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLHlCQUF3QjtFQUN4QixtQkFBa0I7RUFDbEIsd0JBQXVCLEVBQUc7O0FBRTlCO0VBQ0ksWUFBVztFQUNYLFlBQVc7RUFDWCxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLDBCQUF5QjtFQUN6QixVQUFTO0VBQ1QsV0FBVTtFQUNWLFlBQVcsRUFBRzs7QUFFbEI7RUFDSSxjQUFhLEVBQUc7O0FBRXBCO0VBQ0ksYUFBWSxFQUFHOztBQUVuQjtFQUNJLHNCQUFxQixFQUFHOztBQUU1QjtFQUNJLDBCQUF5QixFQUFHOztBQUVoQztFQUNJLFlBQVcsRUFBRzs7QUFFbEI7O0VBRUUsY0FBYSxFQUFHOztBQUdsQjtFQUNFLCtCQUE4QjtFQUM5QixvQkFBbUIsRUFBRzs7QUFFeEI7RUFDSSxhQUFZLEVBQUc7O0FBRW5CO0VBQ0ksWUFBVyxFQUFHIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXcvcmV2aWV3LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbjogMTAwcHggYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogM2VtOyB9XG5cbi5wcm9ncmVzc2JhciB7XG4gICAgY291bnRlci1yZXNldDogc3RlcDsgfVxuXG4ucHJvZ3Jlc3NiYXIgbGkge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICB3aWR0aDogMjUlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICM3ZDdkN2Q7IH1cblxuLnByb2dyZXNzYmFyIGxpOmJlZm9yZSB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGNvbnRlbnQ6IGNvdW50ZXIoc3RlcCk7XG4gICAgY291bnRlci1pbmNyZW1lbnQ6IHN0ZXA7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzdkN2Q3ZDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG8gMTBweCBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxuXG4ucHJvZ3Jlc3NiYXIgbGk6YWZ0ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMnB4O1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2Q3ZDdkO1xuICAgIHRvcDogMTVweDtcbiAgICBsZWZ0OiAtNTAlO1xuICAgIHotaW5kZXg6IC0xOyB9XG5cbi5wcm9ncmVzc2JhciBsaTpmaXJzdC1jaGlsZDphZnRlciB7XG4gICAgY29udGVudDogbm9uZTsgfVxuXG4ucHJvZ3Jlc3NiYXIgbGkuYWN0aXZlIHtcbiAgICBjb2xvcjogZ3JlZW47IH1cblxuLnByb2dyZXNzYmFyIGxpLmFjdGl2ZTpiZWZvcmUge1xuICAgIGJvcmRlci1jb2xvcjogIzU1Yjc3NjsgfVxuXG4ucHJvZ3Jlc3NiYXIgbGkuYWN0aXZlICsgbGk6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NWI3NzY7IH1cblxuLnJlcXVpcmVkRG9jVGFibGUge1xuICAgIG1hcmdpbjogM2VtOyB9XG5cbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBmbGV4LWJhc2lzOiAwOyB9XG5cblxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLmdyZWVuLWljb24ge1xuICAgIGNvbG9yOiBncmVlbjsgfVxuXG4uZ3JlZW4taWNvbiBzdmcge1xuICAgIGZpbGw6IGdyZWVuOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/review/review.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/review/review.component.ts ***!
  \*******************************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewComponent = /** @class */ (function () {
    function ReviewComponent(router) {
        this.router = router;
    }
    ReviewComponent.prototype.ngOnInit = function () {
    };
    ReviewComponent.prototype.back = function () {
        this.router.navigate(['/summary']);
    };
    ReviewComponent.prototype.next = function () {
        this.router.navigate(['/approve']);
    };
    ReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review',
            template: __webpack_require__(/*! ./review.component.html */ "./src/app/components/review/review.component.html"),
            styles: [__webpack_require__(/*! ./review.component.sass */ "./src/app/components/review/review.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ReviewComponent);
    return ReviewComponent;
}());



/***/ }),

/***/ "./src/app/components/summary/summary.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/summary/summary.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Documents</h3>\n\n<div class=\"container\">\n    <ul class=\"progressbar\">\n        <li>step 1</li>\n        <li class=\"active\">step 2</li>\n        <li>step 3</li>\n        <li>step 4</li>\n    </ul>\n</div>\n\n    <h4>Pre Approval Amount</h4>\n\n    <table mat-table>\n      <tr mat-header-row>\n        <td>Term</td>\n        <td>Rate</td>\n        <td></td>\n      </tr>\n      <tr mat-row>\n        <td>1 Year</td>\n        <td>3.54%</td>\n        <td><button mat-button (click)=\"showMortgage()\"><mat-icon>radio_button_unchecked</mat-icon></button></td>\n      </tr>\n      <tr mat-row>\n          <td>2 Year</td>\n          <td>3.64%</td>\n          <td><button mat-button><mat-icon>radio_button_unchecked</mat-icon></button></td>\n        </tr>\n        <tr mat-row>\n            <td>3 Year</td>\n            <td>3.74%</td>\n            <td><button mat-button><mat-icon>radio_button_unchecked</mat-icon></button></td>\n          </tr>\n          <tr mat-row>\n              <td>4 Year</td>\n              <td>3.84%</td>\n              <td><button mat-button><mat-icon>radio_button_unchecked</mat-icon></button></td>\n            </tr>\n            <tr mat-ro>\n                <td>5 Year</td>\n                <td>5.54%</td>\n                <td><button mat-button><mat-icon>radio_button_unchecked</mat-icon></button></td>\n              </tr>\n    </table>\n\n<div *ngIf=\"doShowMortgage\">\n  <img src=\"../../../assets/mortgage.amount.png\" width=\"640\" height=\"480\">\n</div>\n<mat-divider></mat-divider>\n    <div>\n        <button mat-button (click)=\"back()\">back</button>\n        <button mat-button (click)=\"next()\">next</button>\n      </div>"

/***/ }),

/***/ "./src/app/components/summary/summary.component.sass":
/*!***********************************************************!*\
  !*** ./src/app/components/summary/summary.component.sass ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 600px;\n  margin: 100px auto;\n  padding-bottom: 3em; }\n\n.progressbar {\n  counter-reset: step; }\n\n.progressbar li {\n  list-style-type: none;\n  width: 25%;\n  float: left;\n  font-size: 12px;\n  position: relative;\n  text-align: center;\n  text-transform: uppercase;\n  color: #7d7d7d; }\n\n.progressbar li:before {\n  width: 30px;\n  height: 30px;\n  content: counter(step);\n  counter-increment: step;\n  line-height: 30px;\n  border: 2px solid #7d7d7d;\n  display: block;\n  text-align: center;\n  margin: 0 auto 10px auto;\n  border-radius: 50%;\n  background-color: white; }\n\n.progressbar li:after {\n  width: 100%;\n  height: 2px;\n  content: '';\n  position: absolute;\n  background-color: #7d7d7d;\n  top: 15px;\n  left: -50%;\n  z-index: -1; }\n\n.progressbar li:first-child:after {\n  content: none; }\n\n.progressbar li.active {\n  color: green; }\n\n.progressbar li.active:before {\n  border-color: #55b776; }\n\n.progressbar li.active + li:after {\n  background-color: #55b776; }\n\n.requiredDocTable {\n  margin: 3em; }\n\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0; }\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center; }\n\n.green-icon {\n  color: green; }\n\n.green-icon svg {\n  fill: green; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3c3dhbXkvaGFja2F0aG9uL2JhbmstY2xpZW50L3NyYy9hcHAvY29tcG9uZW50cy9zdW1tYXJ5L3N1bW1hcnkuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUFHOztBQUUxQjtFQUNJLG9CQUFtQixFQUFHOztBQUUxQjtFQUNJLHNCQUFxQjtFQUNyQixXQUFVO0VBQ1YsWUFBVztFQUNYLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQiwwQkFBeUI7RUFDekIsZUFBYyxFQUFHOztBQUVyQjtFQUNJLFlBQVc7RUFDWCxhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLHdCQUF1QjtFQUN2QixrQkFBaUI7RUFDakIsMEJBQXlCO0VBQ3pCLGVBQWM7RUFDZCxtQkFBa0I7RUFDbEIseUJBQXdCO0VBQ3hCLG1CQUFrQjtFQUNsQix3QkFBdUIsRUFBRzs7QUFFOUI7RUFDSSxZQUFXO0VBQ1gsWUFBVztFQUNYLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsMEJBQXlCO0VBQ3pCLFVBQVM7RUFDVCxXQUFVO0VBQ1YsWUFBVyxFQUFHOztBQUVsQjtFQUNJLGNBQWEsRUFBRzs7QUFFcEI7RUFDSSxhQUFZLEVBQUc7O0FBRW5CO0VBQ0ksc0JBQXFCLEVBQUc7O0FBRTVCO0VBQ0ksMEJBQXlCLEVBQUc7O0FBRWhDO0VBQ0ksWUFBVyxFQUFHOztBQUVsQjs7RUFFRSxjQUFhLEVBQUc7O0FBR2xCO0VBQ0UsK0JBQThCO0VBQzlCLG9CQUFtQixFQUFHOztBQUV4QjtFQUNJLGFBQVksRUFBRzs7QUFFbkI7RUFDSSxZQUFXLEVBQUciLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N1bW1hcnkvc3VtbWFyeS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBtYXJnaW46IDEwMHB4IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDNlbTsgfVxuXG4ucHJvZ3Jlc3NiYXIge1xuICAgIGNvdW50ZXItcmVzZXQ6IHN0ZXA7IH1cblxuLnByb2dyZXNzYmFyIGxpIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjN2Q3ZDdkOyB9XG5cbi5wcm9ncmVzc2JhciBsaTpiZWZvcmUge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBjb250ZW50OiBjb3VudGVyKHN0ZXApO1xuICAgIGNvdW50ZXItaW5jcmVtZW50OiBzdGVwO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM3ZDdkN2Q7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvIDEwcHggYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cblxuLnByb2dyZXNzYmFyIGxpOmFmdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdkN2Q3ZDtcbiAgICB0b3A6IDE1cHg7XG4gICAgbGVmdDogLTUwJTtcbiAgICB6LWluZGV4OiAtMTsgfVxuXG4ucHJvZ3Jlc3NiYXIgbGk6Zmlyc3QtY2hpbGQ6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IG5vbmU7IH1cblxuLnByb2dyZXNzYmFyIGxpLmFjdGl2ZSB7XG4gICAgY29sb3I6IGdyZWVuOyB9XG5cbi5wcm9ncmVzc2JhciBsaS5hY3RpdmU6YmVmb3JlIHtcbiAgICBib3JkZXItY29sb3I6ICM1NWI3NzY7IH1cblxuLnByb2dyZXNzYmFyIGxpLmFjdGl2ZSArIGxpOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTViNzc2OyB9XG5cbi5yZXF1aXJlZERvY1RhYmxlIHtcbiAgICBtYXJnaW46IDNlbTsgfVxuXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgZmxleC1iYXNpczogMDsgfVxuXG5cbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbi5ncmVlbi1pY29uIHtcbiAgICBjb2xvcjogZ3JlZW47IH1cblxuLmdyZWVuLWljb24gc3ZnIHtcbiAgICBmaWxsOiBncmVlbjsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/components/summary/summary.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/summary/summary.component.ts ***!
  \*********************************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SummaryComponent = /** @class */ (function () {
    function SummaryComponent(router) {
        this.router = router;
        this.doShowMortgage = false;
    }
    SummaryComponent.prototype.ngOnInit = function () {
    };
    SummaryComponent.prototype.back = function () {
        this.router.navigate(['/cibc']);
    };
    SummaryComponent.prototype.next = function () {
        this.router.navigate(['/review']);
    };
    SummaryComponent.prototype.showMortgage = function () {
        this.doShowMortgage = true;
    };
    SummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-summary',
            template: __webpack_require__(/*! ./summary.component.html */ "./src/app/components/summary/summary.component.html"),
            styles: [__webpack_require__(/*! ./summary.component.sass */ "./src/app/components/summary/summary.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SummaryComponent);
    return SummaryComponent;
}());



/***/ }),

/***/ "./src/app/components/todo/todo.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/todo/todo.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  todo works!  \n  \n</p>\n<div *ngIf=\"todo\">    \n    <label>ID:\n    <span>{{ todo._id }}</span> \n    </label>\n\n    <label>Name:\n      <input [(ngModel)]=\"todo.name\" placeholder=\"name\"/>\n    </label>\n\n    <label>Description:\n      <input [(ngModel)]=\"todo.description\" placeholder=\"description\"/>\n    </label>\n\n    <button (click)=\"updateTodo()\">Update</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/todo/todo.component.sass":
/*!*****************************************************!*\
  !*** ./src/app/components/todo/todo.component.sass ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9kby90b2RvLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/components/todo/todo.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/todo/todo.component.ts ***!
  \***************************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_todos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/todos.service */ "./src/app/services/todos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoComponent = /** @class */ (function () {
    function TodoComponent(route, todoService) {
        this.route = route;
        this.todoService = todoService;
    }
    TodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log("todo params: ", params);
            //this.todoId = +params['id'] || 0; // (+) converts string 'id' to a number
            _this.todoId = params['id'] || 0;
            _this.getTodoById(_this.todoId);
        });
    };
    TodoComponent.prototype.getTodoById = function (todoId) {
        var _this = this;
        this.todoService.getTodo(todoId).subscribe(function (todoObj) { return _this.todo = todoObj; });
    };
    TodoComponent.prototype.updateTodo = function () {
        var _this = this;
        console.log("updating todo: ", this.todo);
        this.todoService.updateTodo(this.todo).subscribe(function (todoObj) { return _this.todo = todoObj; });
    };
    TodoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/components/todo/todo.component.html"),
            styles: [__webpack_require__(/*! ./todo.component.sass */ "./src/app/components/todo/todo.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_todos_service__WEBPACK_IMPORTED_MODULE_2__["TodosService"]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.sass":
/*!******************************************!*\
  !*** ./src/app/home/home.component.sass ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.sass */ "./src/app/home/home.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/list-view/list-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/list-view/list-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  list of Todos:\n</p>\n  <table>\n    <tr>\n      <td>ID</td>\n      <td>Name</td>\n      <td>Description</td>\n    </tr>\n    <tr *ngFor=\"let t of todos\">\n      <td>        \n        <a routerLink=\"/todo/{{t._id}}\">{{ t._id }}</a>\n      </td>\n      <td>\n        {{ t.name }}\n      </td>\n      <td>\n        {{ t.description }}\n      </td>        \n    </tr>\n  </table>\n\n"

/***/ }),

/***/ "./src/app/list-view/list-view.component.sass":
/*!****************************************************!*\
  !*** ./src/app/list-view/list-view.component.sass ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3Qtdmlldy9saXN0LXZpZXcuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/list-view/list-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/list-view/list-view.component.ts ***!
  \**************************************************/
/*! exports provided: ListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewComponent", function() { return ListViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_todos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/todos.service */ "./src/app/services/todos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListViewComponent = /** @class */ (function () {
    function ListViewComponent(todoService) {
        this.todoService = todoService;
    }
    ListViewComponent.prototype.ngOnInit = function () {
        this.getTodos();
    };
    ListViewComponent.prototype.getTodos = function () {
        var _this = this;
        this.todoService.getTodos().subscribe(function (todos) { return _this.todos = todos; });
    };
    ListViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-view',
            template: __webpack_require__(/*! ./list-view.component.html */ "./src/app/list-view/list-view.component.html"),
            styles: [__webpack_require__(/*! ./list-view.component.sass */ "./src/app/list-view/list-view.component.sass")]
        }),
        __metadata("design:paramtypes", [_services_todos_service__WEBPACK_IMPORTED_MODULE_1__["TodosService"]])
    ], ListViewComponent);
    return ListViewComponent;
}());



/***/ }),

/***/ "./src/app/models/todo.ts":
/*!********************************!*\
  !*** ./src/app/models/todo.ts ***!
  \********************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
var Todo = /** @class */ (function () {
    function Todo() {
    }
    return Todo;
}());



/***/ }),

/***/ "./src/app/services/cibc.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cibc.service.ts ***!
  \******************************************/
/*! exports provided: CibcService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CibcService", function() { return CibcService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CibcService = /** @class */ (function () {
    function CibcService(http) {
        this.http = http;
        this.cibcApi = "http://localhost:3000/cibc/";
        this.accountUri = "accounts";
        this.payUri = "pay";
        this.incomeUri = "income";
    }
    CibcService.prototype.getIncome = function () {
        return this.http.get(this.cibcApi + this.incomeUri);
    };
    CibcService.prototype.getPay = function () {
        return this.http.get(this.cibcApi + this.payUri);
    };
    CibcService.prototype.getAccounts = function () {
        return this.http.get(this.cibcApi + this.accountUri);
    };
    CibcService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CibcService);
    return CibcService;
}());



/***/ }),

/***/ "./src/app/services/todos.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/todos.service.ts ***!
  \*******************************************/
/*! exports provided: TodosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosService", function() { return TodosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/todo */ "./src/app/models/todo.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodosService = /** @class */ (function () {
    function TodosService(http) {
        this.http = http;
        this.todosApi = 'http://cloudvps:3000/t/all'; // URL to web api
        this.todosApiById = 'http://cloudvps:3000/t/'; // URL to web api
        this.todosApiUpdate = "http://cloudvps:3000/t/";
        this.list = new Array();
        var T = new _models_todo__WEBPACK_IMPORTED_MODULE_1__["Todo"]();
        T.id = 1;
        T.name = "Test 1";
        T.description = "first item";
        this.list.push(T);
    }
    TodosService.prototype.getTodosStatic = function () {
        console.log("retrieving todos: ", this.list);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.list);
    };
    TodosService.prototype.getTodos = function () {
        return this.http.get(this.todosApi);
    };
    TodosService.prototype.getTodo = function (todoId) {
        return this.http.get(this.todosApiById + todoId);
    };
    TodosService.prototype.updateTodo = function (todo) {
        var id = todo._id;
        //cant update primary key, so remove it;
        delete todo._id;
        return this.http.put(this.todosApiUpdate + id, todo);
    };
    TodosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], TodosService);
    return TodosService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/matthewswamy/hackathon/bank-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map