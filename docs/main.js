(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\fifib\OneDrive\Documents\GitHub\RatingWebsite.github.io\src\main.ts */"zUnb");


/***/ }),

/***/ "1ujl":
/*!*************************************************************!*\
  !*** ./src/app/components/searchbar/searchbar.component.ts ***!
  \*************************************************************/
/*! exports provided: SearchbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarComponent", function() { return SearchbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class SearchbarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onSubmit(form) {
        this.router.navigate(['search', form.value.search]);
        console.log(form.value.search);
    }
}
SearchbarComponent.ɵfac = function SearchbarComponent_Factory(t) { return new (t || SearchbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
SearchbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchbarComponent, selectors: [["app-searchbar"]], decls: 10, vars: 0, consts: [[1, "search-container"], [1, "search-form", 3, "ngSubmit"], ["form", "ngForm"], [1, "titleContainer"], ["href", "", 1, "title"], [1, "search-bar"], ["type", "text", "placeholder", "Search 100.000+ movies", "name", "search", "ngModel", "", 1, "search-input"], [1, "search-button"]], template: function SearchbarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SearchbarComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "UpMovies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".title[_ngcontent-%COMP%] {\n  width: 15%;\n  font-weight: bold;\n  font-size: xx-large;\n  color: white;\n  text-shadow: 5px 2px grey;\n  text-decoration: none;\n  font-style: italic;\n}\n\n.search-container[_ngcontent-%COMP%] {\n  background-color: #545454;\n  width: 100%;\n  height: 70px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 99;\n}\n\n.search-form[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0;\n  display: flex;\n  flex-direction: row;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  width: 75%;\n  text-align: end;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  width: 300px;\n  padding: 10px;\n  outline: none;\n  border: none;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.search-button[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  padding: 10px;\n  cursor: pointer;\n  font-weight: 600;\n  background-color: var(--accent);\n  color: #fff;\n}\n\n.search-button[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: var(--accent);\n}\n\n.titleContainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@media screen and (max-width: 614px) {\n  .search-form[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .titleContainer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin-bottom: 20px;\n  }\n\n  .title[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n\n  .search-container[_ngcontent-%COMP%] {\n    padding-bottom: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: unset;\n    height: auto;\n    padding-top: 8px;\n    padding-bottom: 8px;\n  }\n\n  .search-bar[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    width: auto;\n  }\n\n  .search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n\n  .search-button[_ngcontent-%COMP%] {\n    width: 15%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZWFyY2hiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFHSTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUFBUjs7QUFJSTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFGUjs7QUFLSTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FBSFI7O0FBTUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBQUpSOztBQU9JO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtBQUxSOztBQVNJO0VBQ0ksc0JBQUE7RUFDQSxvQkFBQTtBQVBSOztBQVlBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFURjs7QUFjQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0VBWEY7O0VBY0E7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0VBWEY7O0VBY0E7SUFDRSxXQUFBO0lBQ0Esa0JBQUE7RUFYRjs7RUFjQTtJQUNFLG9CQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUFYRjs7RUFlQTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0VBWkY7O0VBZ0JBO0lBQ0UsVUFBQTtFQWJGOztFQWVBO0lBQ0UsVUFBQTtFQVpGO0FBQ0YiLCJmaWxlIjoic2VhcmNoYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xuICAgIHdpZHRoOiAxNSU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1zaGFkb3c6IDVweCAycHggZ3JleTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uc2VhcmNoe1xuICAgICYtY29udGFpbmVye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ1NDU0O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IDk5O1xuXG4gICAgfVxuXG4gICAgJi1mb3Jte1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB9XG5cbiAgICAmLWJhcntcbiAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIH1cblxuICAgICYtaW5wdXR7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICB9XG5cbiAgICAmLWJ1dHRvbntcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuXG4gICAgfVxuXG4gICAgJi1idXR0b246aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xuXG4gICAgfVxufVxuXG4udGl0bGVDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYxNHB4KSB7XG4gIC5zZWFyY2gtZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLnRpdGxlQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuc2VhcmNoLWNvbnRhaW5lcntcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogdW5zZXQ7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcblxuICB9XG5cbiAgLnNlYXJjaC1iYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG5cblxuICAuc2VhcmNoLWJhciBpbnB1dCB7XG4gICAgd2lkdGg6NzAlO1xuICB9XG4gIC5zZWFyY2gtYnV0dG9uIHtcbiAgICB3aWR0aDoxNSU7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








function HomeComponent_div_19_ng_container_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 19);
} if (rf & 2) {
    const movie_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", movie_r3.Poster, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_div_19_ng_container_1_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_19_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_19_ng_container_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const movie_r3 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.openMovieDetails(movie_r3.imdbID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_19_ng_container_1_img_3_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_19_ng_container_1_p_4_Template, 2, 0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const movie_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", movie_r3.Poster);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !movie_r3.Poster);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r3.Title);
} }
function HomeComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_19_ng_container_1_Template, 8, 3, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.homePageMovies);
} }
function HomeComponent_div_20_ng_container_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 19);
} if (rf & 2) {
    const movie_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", movie_r10.Poster, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_div_20_ng_container_1_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_20_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_20_ng_container_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const movie_r10 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.openMovieDetails(movie_r10.imdbID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_20_ng_container_1_img_3_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_20_ng_container_1_p_4_Template, 2, 0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const movie_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", movie_r10.Poster);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !movie_r10.background_image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r10.Title);
} }
function HomeComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_20_ng_container_1_Template, 8, 3, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.movies);
} }
class HomeComponent {
    constructor(httpserv, activatedRoute, router) {
        this.httpserv = httpserv;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.movies = [];
        this.homePageMovies = [
            {
                Title: 'Murder Mystery',
                imdbID: 'tt1618434',
                Poster: 'https://m.media-amazon.com/images/M/MV5BNTA2YTI5YjUtZWI4Zi00NWQ5LWFiYmEtOTBmNTUyNDAwNjllXkEyXkFqcGdeQXVyNjIzNzM4NzA@._V1_SX300.jpg'
            },
            {
                Title: 'Mystery Science Theater 3000: The Movie',
                imdbID: 'tt0117128',
                Poster: 'https://m.media-amazon.com/images/M/MV5BYzNmN2UzNTAtNmZkMS00MmI3LThhNzEtNjI1YjJlN2JiZjU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
            },
            {
                Title: 'Batman',
                imdbID: 'tt0096895',
                Poster: 'https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg'
            },
            {
                Title: 'Thrill Seekers',
                imdbID: 'tt0204686',
                Poster: 'https://m.media-amazon.com/images/M/MV5BMzI2NzcwMTM5Nl5BMl5BanBnXkFtZTcwNzgzNDMyMQ@@._V1_SX300.jpg'
            },
            {
                Title: 'Samurai Fiction',
                imdbID: 'tt0170544',
                Poster: 'https://m.media-amazon.com/images/M/MV5BMTI5MjU2MTg4NF5BMl5BanBnXkFtZTcwMjc1NzAwMQ@@._V1_SX300.jpg'
            },
            {
                Title: 'Friends',
                imdbID: 'tt0108778',
                Poster: 'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'
            },
            {
                Title: 'Mystery, Alaska',
                imdbID: 'tt0134618',
                Poster: 'https://m.media-amazon.com/images/M/MV5BZmE3OTRlOGEtNzExMi00YmI0LWIxMzYtNGU2NzU1ZTY0Y2JkXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg'
            },
            {
                Title: 'Fat Fiction',
                imdbID: 'tt11055922',
                Poster: 'https://m.media-amazon.com/images/M/MV5BNzgxMGNkNmMtNmFmNS00NWE3LTk1ZTctNjYxOTcwMTRmYWZkXkEyXkFqcGdeQXVyMzMwMjI2NA@@._V1_SX300.jpg'
            },
            {
                Title: 'Scooby-Doo! Mystery Incorporated',
                imdbID: 'tt1660055',
                Poster: 'https://m.media-amazon.com/images/M/MV5BYjEwMzE1ZGMtMmQzNS00ZGRkLWJmZTQtM2Q3Y2Q5ZTg4ZjQwXkEyXkFqcGdeQXVyNjIyNDgwMzM@._V1_SX300.jpg'
            },
            {
                Title: 'Pulp Fiction',
                imdbID: 'tt0110912',
                Poster: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
            },
            {
                Title: 'Uncharted',
                imdbID: 'tt1464335',
                Poster: 'https://m.media-amazon.com/images/M/MV5BMWEwNjhkYzYtNjgzYy00YTY2LThjYWYtYzViMGJkZTI4Y2MyXkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_SX300.jpg'
            },
            {
                Title: 'The Mask',
                imdbID: 'tt0110475',
                Poster: 'https://m.media-amazon.com/images/M/MV5BOWExYjI5MzktNTRhNi00Nzg2LThkZmQtYWVkYjRlYWI2MDQ4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'
            },
        ];
    }
    ngOnInit() {
        this.routeSub = this.activatedRoute.params.subscribe((params) => {
            if (params['movie-search']) {
                this.searchMovie(params['movie-search']);
                console.log("params : " + params['movie-search']);
            }
        });
    }
    searchMovie(search) {
        this.movieSub = this.httpserv.getMoviesBySearch(search).subscribe((response) => {
            this.movies = response.Search;
            console.log("RESPONSE : " + response);
        });
    }
    SortMovie(sort) {
        this.movieSub = this.httpserv.getMoviesBySort(sort).subscribe((response) => {
            this.movies = response.Search;
            console.log("RESPONSE : " + response);
        });
    }
    openMovieDetails(imdbID) {
        console.log("on click : " + imdbID);
        this.router.navigate(['details', imdbID]);
    }
    ngOnDestroy() {
        if (this.movieSub) {
            this.movieSub.unsubscribe();
        }
        if (this.routeSub) {
            this.routeSub.unsubscribe();
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 21, vars: 3, consts: [[1, "filters"], ["panelClass", "sort-select", 3, "ngModel", "ngModelChange", "selectionChange"], ["value", "comedy"], ["value", "fiction"], ["value", "mystery"], ["value", "romance"], ["value", "document"], ["value", "thrill"], ["value", "horror"], ["class", "movies ", 4, "ngIf"], ["class", "movies", 4, "ngIf"], [1, "movies"], [4, "ngFor", "ngForOf"], [1, "movie", "animate__animated", "animate__fadeInDown", 3, "click"], [1, "movie-thumb-container"], ["alt", "thumbnail", "class", "movie-thumbnail", 3, "src", 4, "ngIf"], [4, "ngIf"], [1, "movie-description"], [1, "movie-name"], ["alt", "thumbnail", 1, "movie-thumbnail", 3, "src"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_mat_select_ngModelChange_4_listener($event) { return ctx.sort = $event; })("selectionChange", function HomeComponent_Template_mat_select_selectionChange_4_listener() { return ctx.SortMovie(ctx.sort); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Comedy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Fiction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Mystery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Romance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Documentary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Thrill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Horror");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HomeComponent_div_19_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HomeComponent_div_20_Template, 2, 1, "div", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sort);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.homePageMovies && ctx.movies.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movies);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: [".filters[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 20px auto;\n  padding-left: 20px;\n}\n\n  .mat-form-field-infix {\n  border-top: none;\n  font-size: medium;\n}\n\n  .mat-form-field {\n  width: 330px;\n  margin-left: 0;\n}\n\n  .mat-select-value {\n  padding: 3px 20px;\n}\n\n  .mat-select-value,   .mat-select-arrow,   .mat-form-field-hide-placeholder,   .mat-select-placeholder,   .mat-form-field-apperance-legacy,   .mat-form-field-label {\n  color: #fff;\n  opacity: 1;\n}\n\n  .mat-form-field-apperance-legacy,   .mat-form-field-label {\n  padding-left: 5px;\n}\n\n  .mat-form-field-apperance-legacy,   .mat-form-field-underline {\n  background-color: #fff;\n}\n\n.movies[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  max-width: 1500px;\n  padding: 30px 50px;\n}\n\n.movies[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  max-width: 1200px;\n  margin: 20px auto;\n}\n\n.movie[_ngcontent-%COMP%] {\n  width: 280px;\n  margin: 10px;\n  height: 330px;\n  overflow: hidden;\n  border-radius: 5px;\n  background-color: #202020;\n  box-shadow: 4px 3px 8px 0px #0d0d0d;\n  transition-duration: 0.3s;\n  cursor: pointer;\n}\n\n.movie[_ngcontent-%COMP%]:hover {\n  box-shadow: 4px 3px 11px 6px rgba(105, 240, 174, 0.4);\n  transform: translateY(-3px);\n}\n\n.movie-thumb-container[_ngcontent-%COMP%] {\n  background-color: #000;\n  position: relative;\n  height: 266px;\n  color: #fff;\n  text-align: center;\n}\n\n.movie-thumbnail[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  height: 266px;\n}\n\n.movie-description[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n\n.movie-name[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 700;\n  font-size: 22px;\n  margin-bottom: 20px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.movie-platforms[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.movie-platform[_ngcontent-%COMP%] {\n  width: 20px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBSUk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBRFI7O0FBS0k7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQUhSOztBQU9JO0VBQ0ksaUJBQUE7QUFMUjs7QUFRSTs7OztFQUlJLFdBQUE7RUFDQSxVQUFBO0FBTlI7O0FBU0k7RUFDSSxpQkFBQTtBQVBSOztBQVVJO0VBQ0ksc0JBQUE7QUFSUjs7QUFjQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBWEo7O0FBY0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQVhKOztBQWNBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFYSjs7QUFhSTtFQUNFLHFEQUFBO0VBQ0EsMkJBQUE7QUFYTjs7QUFjSTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBWk47O0FBZUk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBYk47O0FBZ0JJO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBZE47O0FBa0JJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBaEJOOztBQW1CSTtFQUNFLGFBQUE7QUFqQk47O0FBb0JJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBbEJOIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyc3tcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG5cbn1cblxuOjpuZy1kZWVwe1xuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XG5cbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQge1xuICAgICAgICB3aWR0aDogMzMwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuXG4gICAgfVxuXG4gICAgLm1hdC1zZWxlY3QtdmFsdWV7XG4gICAgICAgIHBhZGRpbmc6IDNweCAyMHB4O1xuICAgIH1cblxuICAgIC5tYXQtc2VsZWN0LXZhbHVlLFxuICAgIC5tYXQtc2VsZWN0LWFycm93LFxuICAgIC5tYXQtZm9ybS1maWVsZC1oaWRlLXBsYWNlaG9sZGVyLCAubWF0LXNlbGVjdC1wbGFjZWhvbGRlcixcbiAgICAubWF0LWZvcm0tZmllbGQtYXBwZXJhbmNlLWxlZ2FjeSwgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtYXBwZXJhbmNlLWxlZ2FjeSwgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtYXBwZXJhbmNlLWxlZ2FjeSwgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB9XG5cblxufVxuXG4ubW92aWVze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIG1heC13aWR0aDogMTUwMHB4O1xuICAgIHBhZGRpbmc6IDMwcHggNTBweDtcbn1cblxuLm1vdmllcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIH1cblxuLm1vdmllIHtcbiAgICB3aWR0aDogMjgwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGhlaWdodDogMzMwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcbiAgICBib3gtc2hhZG93OiA0cHggM3B4IDhweCAwcHggcmdiYSgxMi41NSwgMTIuNTUsIDEyLjU1KTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgYm94LXNoYWRvdzogNHB4IDNweCAxMXB4IDZweCByZ2JhKDEwNSwgMjQwLCAxNzQgLCAwLjQpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICAgIH1cblxuICAgICYtdGh1bWItY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBoZWlnaHQ6IDI2NnB4O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJi10aHVtYm5haWwge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBoZWlnaHQ6IDI2NnB4O1xuICAgIH1cblxuICAgICYtZGVzY3JpcHRpb24ge1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIC8vIGhlaWdodDogMTU3cHg7XG4gICAgfVxuXG4gICAgJi1uYW1lIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cblxuICAgICYtcGxhdGZvcm1zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgJi1wbGF0Zm9ybSB7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gIH1cbiJdfQ== */"] });


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 5, vars: 0, consts: [[1, "footerContainer"], [1, "header1"], [1, "parag"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "UpMovies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "UpMovies is Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nisi. Officia illo assumenda id fuga magnam accusantium nesciunt minus quod!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.footerContainer[_ngcontent-%COMP%] {\n  background-color: #000000d1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 2rem;\n  color: white;\n}\n\n.header1[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: 600;\n}\n\n.parag[_ngcontent-%COMP%] {\n  margin-top: 1.5em;\n  color: rgba(209, 209, 209, 0.615);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxpQ0FBQTtBQUFGIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5mb290ZXJDb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwZDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAycmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5oZWFkZXIxIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cblxuLnBhcmFnIHtcbiAgbWFyZ2luLXRvcDogMS41ZW07XG4gIGNvbG9yOiByZ2JhKDIwOSwgMjA5LCAyMDksIDAuNjE1KTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "N+K7":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class HttpService {
    constructor(http) {
        this.http = http;
    }
    getMoviesBySearch(search) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('search', search);
        if (search) {
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('search', search);
        }
        return this.http.get('https://www.omdbapi.com/?s=' + search + '&apikey=3b4857ea', {
            params: params,
        });
    }
    getMoviesBySort(sort) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('sort', sort);
        if (sort) {
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('sort', sort);
        }
        return this.http.get('https://www.omdbapi.com/?s=' + sort + '&apikey=3b4857ea', {
            params: params,
        });
    }
    getMovieDetails(imdbID) {
        const gameInfoRequest = this.http.get('https://www.omdbapi.com/?i=' + imdbID + '&apikey=3b4857ea');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])({
            gameInfoRequest,
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((resp) => {
            return Object.assign({}, resp['gameInfoRequest']);
        }));
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "QVFe":
/*!*********************************************************!*\
  !*** ./src/app/components/details/details.component.ts ***!
  \*********************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "N+K7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_gauge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-gauge */ "cOd4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function DetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mwl-gauge", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "MetaScore");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Director");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Writer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Actors");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Runtime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "textarea", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "one of the best!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "amazing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "interesting...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "worth something");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "don't waste your time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.movie.Poster, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 100)("dialStartAngle", 180)("dialEndAngle", 0)("value", ctx_r0.movieRating)("animated", true)("color", ctx_r0.getColor)("animationDuration", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.movie.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Released ", ctx_r0.movie.Released, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.movie.Genre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.movie.Plot);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.movie.Director);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.movie.Writer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.movie.Actors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.movie.Runtime);
} }
class DetailsComponent {
    constructor(activatedRoute, httpService) {
        this.activatedRoute = activatedRoute;
        this.httpService = httpService;
        this.movieRating = 0;
    }
    ngOnInit() {
        this.routeSub = this.activatedRoute.params.subscribe((params) => {
            this.movieID = params['imdbID'];
            this.getMovieDetails(this.movieID);
        });
    }
    getMovieDetails(imdbID) {
        this.movieSub = this.httpService.getMovieDetails(imdbID).subscribe((res) => {
            this.movie = res;
            setTimeout(() => {
                this.movieRating = Number(this.movie.Metascore);
            }, 1000);
        });
    }
    getColor(value) {
        if (value > 75) {
            return '#5ee432';
        }
        else if (value > 50) {
            return '#fffa50';
        }
        else if (value > 30) {
            return '#f7aa38';
        }
        else {
            return '#ef4655';
        }
    }
    ngOnDestroy() {
        if (this.movieSub) {
            this.movieSub.unsubscribe();
        }
        if (this.routeSub) {
            this.routeSub.unsubscribe();
        }
    }
}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"])); };
DetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsComponent, selectors: [["app-details"]], decls: 1, vars: 1, consts: [["class", "details", 4, "ngIf"], [1, "details"], [1, "movie-banner"], ["alt", "background image", 1, "movie-banner-img", 3, "src"], [1, "movie-gauge"], [1, "two", 3, "max", "dialStartAngle", "dialEndAngle", "value", "animated", "color", "animationDuration"], [1, "movie-gauge-label"], [1, "movie-content"], [1, "details-wrapper"], [1, "movie-header"], [1, "movie-header-title"], [1, "movie-header-release-date"], [1, "movie-header-genres"], [1, "movie-description"], [1, "label"], [1, "movie-feedback"], [1, "movie-comment"], ["for", "comment"], ["name", "comment", "id", "comment", "rows", "8", "placeholder", "Give your feedback here ..."], [1, "movie-stars"], [1, "rating"], ["type", "radio", "hidden", "", "name", "rate", "id", "rating_opt5", "data-idx", "0"], ["for", "rating_opt5"], ["type", "radio", "hidden", "", "name", "rate", "id", "rating_opt4", "data-idx", "1"], ["for", "rating_opt4"], ["type", "radio", "hidden", "", "name", "rate", "id", "rating_opt3", "data-idx", "2"], ["for", "rating_opt3"], ["type", "radio", "hidden", "", "name", "rate", "id", "rating_opt2", "data-idx", "3"], ["for", "rating_opt2"], ["type", "radio", "hidden", "", "name", "rate", "id", "rating_opt1", "data-idx", "4"], ["for", "rating_opt1"]], template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DetailsComponent_div_0_Template, 71, 16, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movie);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], angular_gauge__WEBPACK_IMPORTED_MODULE_4__["ɵa"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"]], styles: ["@charset \"UTF-8\";\n.details-wrapper[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 20px auto;\n  position: relative;\n}\n.details[_ngcontent-%COMP%]     mwl-gauge {\n  width: 150px;\n  height: 150px;\n  display: block;\n  padding: 10px;\n}\n.details[_ngcontent-%COMP%]     mwl-gauge .dial {\n  stroke-width: 8;\n}\n.details[_ngcontent-%COMP%]     mwl-gauge .value {\n  stroke-dasharray: none;\n  stroke-width: 13;\n}\n.details[_ngcontent-%COMP%]     mwl-gauge .value-text {\n  fill: #fff;\n  font-weight: 700;\n  font-size: 24px;\n}\n.details[_ngcontent-%COMP%]   .movie-gauge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 90px;\n  right: 50px;\n}\n.details[_ngcontent-%COMP%]   .movie-gauge-label[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #fff;\n  position: relative;\n  bottom: 60px;\n  text-align: center;\n}\n.movie-banner[_ngcontent-%COMP%] {\n  height: 700px;\n  overflow: hidden;\n}\n.movie-banner-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150%;\n  filter: blur(3px) brightness(0.3);\n}\n.movie-content[_ngcontent-%COMP%] {\n  text-align: center;\n  position: relative;\n  top: -300px;\n}\n.movie-header-title[_ngcontent-%COMP%] {\n  font-size: 70px;\n  color: #fff;\n  font-weight: 700;\n  line-height: 70px;\n}\n.movie-header-release-date[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 700;\n}\n.movie-header-genres[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 700;\n  font-size: medium;\n}\n.movie-description[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.5);\n  color: #ffffff;\n  padding: 20px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n.movie-feedback[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.5);\n  color: #ffffff;\n  padding: 20px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  width: 50%;\n  margin: 0 auto;\n}\n#comment[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 90%;\n}\n.label[_ngcontent-%COMP%] {\n  margin: 5px;\n  font-size: large;\n}\n.label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px;\n  font-size: medium;\n}\n.rating[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0;\n  position: relative;\n  text-transform: capitalize;\n  padding: 0 20px 8%;\n  color: gray;\n  margin-top: 20px;\n}\n.rating[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  float: right;\n  padding: 0;\n  font-size: 50px;\n  cursor: pointer;\n}\n.rating[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::before {\n  content: \"\u2606\";\n  display: inline-block;\n  transition: 0.2s;\n}\n.rating[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  height: 20px;\n  font-size: 1rem;\n  white-space: nowrap;\n  transition: 0.15s ease-out;\n  pointer-events: none;\n  letter-spacing: -2px;\n  transform: translateY(-50%);\n}\n.rating[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: none;\n  letter-spacing: 0;\n}\n.rating[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover::before {\n  color: orange;\n  opacity: 0.6;\n  filter: drop-shadow(0 0 4px);\n}\n.rating[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]::before {\n  content: \"\u2605\";\n  color: orange;\n  filter: drop-shadow(0 0 4px);\n  transform: rotate(0.2turn);\n  transition-delay: calc(0.1 * attr(data-idx integer));\n}\n@media screen and (max-width: 543px) {\n  .movie-header-title[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n\n  .rating[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n}\n@media screen and (max-width: 893px) {\n  .details[_ngcontent-%COMP%]     mwl-gauge {\n    width: 80px !important;\n    height: 80px !important;\n    display: block;\n    padding: 20px;\n  }\n  .details[_ngcontent-%COMP%]     mwl-gauge .dial {\n    stroke-width: 8;\n  }\n  .details[_ngcontent-%COMP%]     mwl-gauge .value {\n    stroke-dasharray: none;\n    stroke-width: 13;\n  }\n  .details[_ngcontent-%COMP%]     mwl-gauge .value-text {\n    fill: #fff;\n    font-weight: 700;\n    font-size: 24px;\n  }\n\n  .movie-gauge-label[_ngcontent-%COMP%] {\n    font-size: 20px;\n    color: #fff;\n    position: relative;\n    bottom: 47px !important;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUVGO0FBRUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQ0o7QUFDSTtFQUNFLGVBQUE7QUFDTjtBQUVJO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtBQUFOO0FBR0k7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRE47QUFLRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFISjtBQUtJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUhOO0FBU0U7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFOSjtBQVFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtBQU5OO0FBVUU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQVJKO0FBYUk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFYTjtBQWNJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBWk47QUFlSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBYk47QUFrQkU7RUFHRSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQWxCSjtBQXFCRTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFuQko7QUF5QkE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtBQXRCRjtBQTJCQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQXhCRjtBQTJCQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQXhCRjtBQTZCQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQTFCRjtBQTRCRTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQTFCSjtBQTRCSTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBMUJOO0FBNkJJO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7QUEzQk47QUErQk07RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBN0JSO0FBZ0NNO0VBRUUsYUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQS9CUjtBQXVDSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLG9EQUFBO0FBckNOO0FBa0RBO0VBRUU7SUFDRSxlQUFBO0VBaERGOztFQW1EQTtJQUNFLGFBQUE7SUFDQSx1QkFBQTtFQWhERjtBQUNGO0FBb0RBO0VBR0U7SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsY0FBQTtJQUNBLGFBQUE7RUFwREY7RUFzREU7SUFDRSxlQUFBO0VBcERKO0VBdURFO0lBQ0Usc0JBQUE7SUFDQSxnQkFBQTtFQXJESjtFQXdERTtJQUNFLFVBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7RUF0REo7O0VBNkRBO0lBQ0UsZUFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLHVCQUFBO0lBQ0Esa0JBQUE7RUExREY7QUFDRiIsImZpbGUiOiJkZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmRldGFpbHMtd3JhcHBlciB7XG4gIG1heC13aWR0aDogOTAwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kZXRhaWxzIDo6bmctZGVlcCBtd2wtZ2F1Z2Uge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmRldGFpbHMgOjpuZy1kZWVwIG13bC1nYXVnZSAuZGlhbCB7XG4gIHN0cm9rZS13aWR0aDogODtcbn1cbi5kZXRhaWxzIDo6bmctZGVlcCBtd2wtZ2F1Z2UgLnZhbHVlIHtcbiAgc3Ryb2tlLWRhc2hhcnJheTogbm9uZTtcbiAgc3Ryb2tlLXdpZHRoOiAxMztcbn1cbi5kZXRhaWxzIDo6bmctZGVlcCBtd2wtZ2F1Z2UgLnZhbHVlLXRleHQge1xuICBmaWxsOiAjZmZmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDI0cHg7XG59XG4uZGV0YWlscyAubW92aWUtZ2F1Z2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOTBweDtcbiAgcmlnaHQ6IDUwcHg7XG59XG4uZGV0YWlscyAubW92aWUtZ2F1Z2UtbGFiZWwge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubW92aWUtYmFubmVyIHtcbiAgaGVpZ2h0OiA3MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tb3ZpZS1iYW5uZXItaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwJTtcbiAgZmlsdGVyOiBibHVyKDNweCkgYnJpZ2h0bmVzcygwLjMpO1xufVxuLm1vdmllLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMzAwcHg7XG59XG4ubW92aWUtaGVhZGVyLXRpdGxlIHtcbiAgZm9udC1zaXplOiA3MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDcwcHg7XG59XG4ubW92aWUtaGVhZGVyLXJlbGVhc2UtZGF0ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLm1vdmllLWhlYWRlci1nZW5yZXMge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiBtZWRpdW07XG59XG4ubW92aWUtZGVzY3JpcHRpb24ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuLm1vdmllLWZlZWRiYWNrIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4jY29tbWVudCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5sYWJlbCB7XG4gIG1hcmdpbjogNXB4O1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4ubGFiZWwgcCB7XG4gIG1hcmdpbjogNXB4O1xuICBmb250LXNpemU6IG1lZGl1bTtcbn1cblxuLnJhdGluZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBwYWRkaW5nOiAwIDIwcHggOCU7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnJhdGluZyBsYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yYXRpbmcgbGFiZWw6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4piGXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbi5yYXRpbmcgbGFiZWwgc3BhbiB7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdHJhbnNpdGlvbjogMC4xNXMgZWFzZS1vdXQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogLTJweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLnJhdGluZyBsYWJlbDpob3ZlciBzcGFuIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbi5yYXRpbmcgbGFiZWw6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbG9yOiBvcmFuZ2U7XG4gIG9wYWNpdHk6IDAuNjtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgNHB4KTtcbn1cbi5yYXRpbmcgaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOjpiZWZvcmUge1xuICBjb250ZW50OiBcIuKYhVwiO1xuICBjb2xvcjogb3JhbmdlO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCA0cHgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwLjJ0dXJuKTtcbiAgdHJhbnNpdGlvbi1kZWxheTogY2FsYygwLjEgKiBhdHRyKGRhdGEtaWR4IGludGVnZXIpKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTQzcHgpIHtcbiAgLm1vdmllLWhlYWRlci10aXRsZSB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICB9XG5cbiAgLnJhdGluZyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODkzcHgpIHtcbiAgLmRldGFpbHMgOjpuZy1kZWVwIG13bC1nYXVnZSB7XG4gICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIC5kZXRhaWxzIDo6bmctZGVlcCBtd2wtZ2F1Z2UgLmRpYWwge1xuICAgIHN0cm9rZS13aWR0aDogODtcbiAgfVxuICAuZGV0YWlscyA6Om5nLWRlZXAgbXdsLWdhdWdlIC52YWx1ZSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogbm9uZTtcbiAgICBzdHJva2Utd2lkdGg6IDEzO1xuICB9XG4gIC5kZXRhaWxzIDo6bmctZGVlcCBtd2wtZ2F1Z2UgLnZhbHVlLXRleHQge1xuICAgIGZpbGw6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cblxuICAubW92aWUtZ2F1Z2UtbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiA0N3B4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59Il19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/searchbar/searchbar.component */ "1ujl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");




class AppComponent {
    constructor() {
        this.title = 'angularproject';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-searchbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_1__["SearchbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/searchbar/searchbar.component */ "1ujl");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var angular_gauge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-gauge */ "cOd4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _components_details_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/details/details.component */ "QVFe");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");


















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            angular_gauge__WEBPACK_IMPORTED_MODULE_7__["GaugeModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_4__["SearchbarComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _components_details_details_component__WEBPACK_IMPORTED_MODULE_14__["DetailsComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], angular_gauge__WEBPACK_IMPORTED_MODULE_7__["GaugeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_details_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/details/details.component */ "QVFe");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'search/:movie-search',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'details/:imdbID',
        component: _components_details_details_component__WEBPACK_IMPORTED_MODULE_1__["DetailsComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map