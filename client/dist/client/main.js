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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: 'pets', pathMatch: 'full' },
    { path: 'pets', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], pathMatch: 'full' },
    { path: 'pets/new', component: _new_new_component__WEBPACK_IMPORTED_MODULE_3__["NewComponent"] },
    { path: 'pets/:id/edit', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"] },
    { path: 'pets/:id', component: _details_details_component__WEBPACK_IMPORTED_MODULE_5__["DetailsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<head>\n  <!-- materialize links here! look at main page  -->\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css\">\n\n  <style>\n    .cont{\n      padding:10px 50px 50px 50px;\n    }\n\n    nav ul {\n      padding-right: 50px;\n    }\n\n    nav .brand-logo{\n      padding-left : 50px;\n    }\n\n  </style>\n\n</head>\n<body>\n\n  <nav>\n      <div class=\"nav-wrapper\">\n        <a class=\"brand-logo\"> Exam!</a>\n        <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n            <li><a [routerLink]=\"['pets/new']\">Add Pet to Shelter</a></li>\n          <li><a [routerLink]=\"['']\">Home</a></li>\n        </ul>\n      </div>\n    </nav>\n    <div class=\"cont\">\n      <h1>Pet Shelter</h1>\n        <router-outlet></router-outlet>\n    </div>\n</body>\n\n"

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
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _new_new_component__WEBPACK_IMPORTED_MODULE_8__["NewComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_10__["DetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ],
            providers: [
                _http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/details/details.component.css":
/*!***********************************************!*\
  !*** ./src/app/details/details.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<style>\n  button { margin-right:10px; }\n</style>\n\n<h5>Details about {{ pet.name }}</h5>\n\n<strong>Pet type</strong> {{ pet.petType}}\n\n<br>\n\n<strong>Description : </strong> {{ pet.desc  }}\n\n<br>\n\n<strong> Likes : </strong>  {{ totalLikes }}\n\n\n<br>\n\n\n  <ul>\n    <h6>Skills</h6>\n    <li *ngFor=\"let sk of skills\" >\n       <p> <strong> {{ sk }} </strong> </p>\n    </li>\n  </ul>\n\n\n  <button class=\"add-pet waves-effect waves-light btn\" (click)=\"adopt()\" >Adopt this Pet</button>\n\n  <button class=\"add-pet waves-effect waves-light btn\" [disabled]=\"liked==true\" (click)=\"Like()\" >Like this pet</button>\n"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(_http, _router, _route) {
        var _this = this;
        this._http = _http;
        this._router = _router;
        this._route = _route;
        this.liked = false;
        this.pet = {
            name: '',
            petType: ''
        };
        this.skills = [];
        this._route.params
            .subscribe(function (params) {
            _this._http.getPetById(params['id'])
                .subscribe(function (data) {
                console.log(data);
                _this.pet = data;
                _this.totalLikes = _this.pet.likes;
                _this.skills = [
                    _this.pet.skills[0].skill_1,
                    _this.pet.skills[0].skill_2,
                    _this.pet.skills[0].skill_3
                ];
            });
        });
    }
    DetailsComponent.prototype.adopt = function () {
        var _this = this;
        this._http.deletePetById(this.pet._id)
            .subscribe(function (data) {
            if ('errors' in data) {
                console.log('errors in delete', data);
            }
            else {
                console.log('this was delete', data);
                _this._http.goHome();
            }
        });
    };
    DetailsComponent.prototype.Like = function () {
        var _this = this;
        this.liked = true;
        this.pet.likes += 1;
        this.totalLikes = this.pet.likes;
        this._http.updatePetById(this.pet._id, this.pet)
            .subscribe(function (data) {
            _this.pet = data;
        });
    };
    DetailsComponent.prototype.ngOnInit = function () {
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Edit this pet</h4>\n\n<style>\n    .create{\n      width: 500px;\n    }\n    .create a {\n      margin-right : 10px;\n    }\n    .red{\n      padding:10px;\n      color: snow;\n      border-radius: 5px;\n      border: 1px solid black;\n      font-weight: bolder;\n      opacity: .6;\n    }\n\n    .add-pet{\n      margin-right : 10px;\n    }\n\n  </style>\n\n\n  <div class=\"create row\">\n      <div class=\"col s12\">\n        <div class=\"row\">\n\n            <div class=\"helper-text red\" *ngIf=\"errors?.name\">\n                {{ errors?.name }}\n            </div>\n\n\n            <div *ngIf=\"Name.invalid && (Name.dirty || Name.touched)\"\n            class=\"helper-text red\" >\n\n               <div *ngIf=\"Name.errors.required\">\n                     name is required!\n               </div>\n\n               <div *ngIf=\"Name.errors.minlength\">\n                     name must be greater than 4 chars\n               </div>\n\n               <div *ngIf=\"Name.errors.name\">\n                  name must be greater must be unique\n             </div>\n\n           </div>\n\n\n            <div class=\"input-field\">\n              <input\n              required\n              minlength=\"3\"\n              type=\"text\"\n              class=\"validate\"\n              [(ngModel)]=\"pet.name\"\n              name=\"Name\"\n              #Name=\"ngModel\">\n            </div>\n\n            <div class=\"helper-text red\" *ngIf=\"errors?.petType\">\n                {{ errors?.petType }}\n            </div>\n\n            <div *ngIf=\"petType.invalid && (petType.dirty || petType.touched)\" class=\"helper-text red\" >\n\n                    <div *ngIf=\"petType.errors.required\"> The pet Type is required! </div>\n\n                    <div *ngIf=\"petType.errors.minlength\"> The pet Type  must be greater than 3 chars </div>\n\n           </div>\n\n            <div class=\"input-field\">\n                <input\n                required\n                minlength=\"3\"\n                placeholder=\"Pet type\"\n                [(ngModel)]=\"pet.petType\"\n                type=\"text\"\n                class=\"validate\"\n                name=\"petType\"\n                #petType=\"ngModel\"\n                >\n            </div>\n\n            <div class=\"helper-text red\" *ngIf=\"errors?.desc\">\n                {{ errors?.desc }}\n            </div>\n\n            <div *ngIf=\"desc.invalid && (desc.dirty || desc.touched)\" class=\"helper-text red\" >\n\n                <div *ngIf=\"desc.errors.required\"> The description is required! </div>\n\n                <div *ngIf=\"desc.errors.minlength\"> The description must be greater than 10 chars </div>\n\n            </div>\n\n            <div class=\"input-field\">\n                <input\n                required\n                minlength=\"10\"\n                [(ngModel)]=\"pet.desc\"\n                type=\"text\"\n                class=\"validate\"\n                name=\"desc\"\n                #desc=\"ngModel\">\n            </div>\n\n            <h5>Skills:</h5>\n\n            <div class=\"input-field\">\n                <input placeholder=\"Skill 1\" [(ngModel)]=\"pet.skills[0].skill_1\" type=\"text\" class=\"validate\">\n            </div>\n\n            <div class=\"input-field\">\n                <input placeholder=\"Skill 2\" [(ngModel)]=\"pet.skills[0].skill_2\" type=\"text\" class=\"validate\">\n            </div>\n\n            <div class=\"input-field\">\n                <input placeholder=\"Skill 3\" [(ngModel)]=\"pet.skills[0].skill_3\" type=\"text\" class=\"validate\">\n            </div>\n\n\n        </div>\n        <button [disabled]=\"(!Name.valid || !petType.valid || !desc.valid)\"  class=\"add-pet waves-effect waves-light btn\"\n         (click)=\"editPet()\">Edit Pet</button>\n        <a class=\"waves-effect waves-light btn\"\n        (click)=\"goHome()\">Cancal</a>\n      </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditComponent = /** @class */ (function () {
    function EditComponent(_http, _router, _route) {
        var _this = this;
        this._http = _http;
        this._router = _router;
        this._route = _route;
        this.pet = {
            name: '',
            petType: '',
            desc: '',
            skills: [{
                    skill_1: '',
                    skill_2: '',
                    skill_3: ''
                }]
        };
        this._route.params
            .subscribe(function (params) {
            _this._http.getPetById(params['id'])
                .subscribe(function (data) {
                _this.pet = data;
                console.log(_this.pet);
            });
        });
    }
    EditComponent.prototype.editPet = function () {
        var _this = this;
        this.errors = {};
        this._http.updatePetById(this.pet._id, this.pet)
            .subscribe(function (data) {
            if ('errors' in data) {
                console.log('errors in the data', data);
                for (var er in data['errors']) {
                    _this.errors[er] = data['errors'][er]['message'];
                }
            }
            else {
                console.log('success we have updated baby', data);
                _this.goHome();
            }
        });
    };
    EditComponent.prototype.goHome = function () {
        this._http.goHome();
    };
    EditComponent.prototype.ngOnInit = function () {
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<style>\n  table{\n    width: 600px;\n    margin: auto;\n  }\n\n  .add-pet {\n    margin-right : 15px;\n  }\n\n</style>\n\n<p>\n    These pets are looking for a home\n</p>\n\n<table>\n    <thead>\n      <tr>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Actions</th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr *ngFor=\"let pet of pets\">\n        <td>{{ pet?.name}}</td>\n        <td>{{ pet?.petType}}</td>\n        <td>\n            <button  class=\"add-pet waves-effect waves-light btn\"\n            (click)=\"goDets(pet._id)\">Details</button>\n           <a class=\"waves-effect waves-light btn\"\n           (click)=\"goEdit(pet._id)\">Edit</a>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n"

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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function HomeComponent(_http, _router) {
        var _this = this;
        this._http = _http;
        this._router = _router;
        this._http.pets()
            .subscribe(function (data) {
            var ar = [];
            for (var dt in data) {
                ar.push(data[dt]);
            }
            console.log(ar);
            var sorted = ar.sort(_this.compare);
            _this.pets = sorted;
        });
    }
    HomeComponent.prototype.goEdit = function (id) {
        this._router.navigate(['pets', id, 'edit']);
    };
    HomeComponent.prototype.compare = function (a, b) {
        if (a.petType > b.petType)
            return 1;
        if (a.petType < b.petType)
            return -1;
        return 0;
    };
    HomeComponent.prototype.goDets = function (id) {
        this._http.goDetails(id);
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = /** @class */ (function () {
    function HttpService(_http, _router) {
        this._http = _http;
        this._router = _router;
    }
    HttpService.prototype.goHome = function () {
        this._router.navigate(['']);
    };
    HttpService.prototype.goDetails = function (id) {
        this._router.navigate(['pets', id]);
    };
    HttpService.prototype.pets = function () {
        return this._http.get('/api/pets');
    };
    HttpService.prototype.getPetById = function (id) {
        return this._http.get('/api/pets/' + id);
    };
    HttpService.prototype.updatePetById = function (id, obj) {
        return this._http.patch('/api/pets/' + id, obj);
    };
    HttpService.prototype.createPet = function (obj) {
        return this._http.post('/api/pets', obj);
    };
    HttpService.prototype.deletePetById = function (id) {
        return this._http.delete('/api/pets/' + id);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/new/new.component.css":
/*!***************************************!*\
  !*** ./src/app/new/new.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new/new.component.html":
/*!****************************************!*\
  !*** ./src/app/new/new.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Know of a pet needing a home?</h4>\n\n<style>\n    .create{\n      width: 500px;\n    }\n    .create a {\n      margin-right : 10px;\n    }\n    .red{\n      padding:10px;\n      color: snow;\n      border-radius: 5px;\n      border: 1px solid black;\n      font-weight: bolder;\n      opacity: .6;\n    }\n\n    .add-pet{\n      margin-right : 10px;\n    }\n\n  </style>\n\n\n  <div class=\"create row\">\n      <div class=\"col s12\">\n        <div class=\"row\">\n\n            <div class=\"helper-text red\" *ngIf=\"errors?.name\">\n                {{ errors?.name }}\n            </div>\n\n            <div *ngIf=\"Name.invalid && (Name.dirty || Name.touched)\"\n            class=\"helper-text red\" >\n\n               <div *ngIf=\"Name.errors.required\">\n                     name is required!\n               </div>\n\n               <div *ngIf=\"Name.errors.minlength\">\n                     name must be greater than 4 chars\n               </div>\n\n               <div *ngIf=\"Name.errors.name\">\n                  name must be greater must be unique\n             </div>\n\n           </div>\n\n            <div class=\"input-field\">\n              <input\n              required\n              minlength=\"3\"\n              placeholder=\"Pet name\"\n              [(ngModel)]=\"pet.name\"\n              type=\"text\"\n              class=\"validate\"\n              name=\"Name\"\n              #Name=\"ngModel\">\n            </div>\n\n            <div class=\"helper-text red\" *ngIf=\"errors?.petType\">\n                {{ errors?.petType }}\n            </div>\n\n            <div *ngIf=\"petType.invalid && (petType.dirty || petType.touched)\" class=\"helper-text red\" >\n\n                <div *ngIf=\"petType.errors.required\"> The pet Type is required! </div>\n\n                <div *ngIf=\"petType.errors.minlength\"> The pet Type  must be greater than 3 chars </div>\n\n            </div>\n\n            <div class=\"input-field\">\n                <input\n                required\n                minlength=\"3\"\n                placeholder=\"Pet type\"\n                [(ngModel)]=\"pet.petType\"\n                type=\"text\"\n                class=\"validate\"\n                name=\"petType\"\n                #petType=\"ngModel\">\n            </div>\n\n            <div class=\"helper-text red\" *ngIf=\"errors?.desc\">\n                {{ errors?.desc }}\n            </div>\n\n            <div *ngIf=\"desc.invalid && (desc.dirty || desc.touched)\" class=\"helper-text red\" >\n\n                <div *ngIf=\"desc.errors.required\"> The description is required! </div>\n\n                <div *ngIf=\"desc.errors.minlength\"> The description must be greater than 10 chars </div>\n\n            </div>\n\n            <div class=\"input-field\">\n                <input\n                required\n                minlength=\"10\"\n                placeholder=\"Description\"\n                [(ngModel)]=\"pet.desc\"\n                type=\"text\"\n                class=\"validate\"\n                name=\"desc\"\n                #desc=\"ngModel\">\n            </div>\n\n            <h5>Skills:</h5>\n\n            <div class=\"input-field\">\n                <input placeholder=\"Skill 1\" [(ngModel)]=\"skills.skill_1\" type=\"text\" class=\"validate\">\n            </div>\n\n            <div class=\"input-field\">\n                <input placeholder=\"Skill 2\" [(ngModel)]=\"skills.skill_2\" type=\"text\" class=\"validate\">\n            </div>\n\n            <div class=\"input-field\">\n                <input placeholder=\"Skill 3\" [(ngModel)]=\"skills.skill_3\" type=\"text\" class=\"validate\">\n            </div>\n\n\n        </div>\n        <button [disabled]=\"(!Name.valid || !petType.valid || !desc.valid)\"  class=\"add-pet waves-effect waves-light btn\"\n         (click)=\"addPet()\">Add Pet</button>\n        <a class=\"waves-effect waves-light btn\"\n        (click)=\"goHome()\">Cancal</a>\n      </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/new/new.component.ts":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewComponent = /** @class */ (function () {
    function NewComponent(_http) {
        this._http = _http;
        this.pet = {
            name: '',
            petType: '',
            desc: '',
            skills: {}
        };
        this.skills = {
            skill_1: '',
            skill_2: '',
            skill_3: ''
        };
    }
    NewComponent.prototype.goHome = function () {
        this._http.goHome();
    };
    NewComponent.prototype.reset = function () {
        this.pet = {
            name: '',
            petType: '',
            desc: '',
            skillz: ''
        };
        this.skills = {
            skill_1: '',
            skill_2: '',
            skill_3: ''
        };
    };
    NewComponent.prototype.addPet = function () {
        var _this = this;
        this.errors = {};
        this.pet.skills = this.skills;
        this._http.createPet(this.pet)
            .subscribe(function (data) {
            if ('errors' in data) {
                console.log('errors in ', data);
                for (var er in data['errors']) {
                    _this.errors[er] = data['errors'][er]['message'];
                }
            }
            else {
                console.log('success in ', data);
                _this.goHome();
                _this.reset();
            }
        });
    };
    NewComponent.prototype.ngOnInit = function () {
    };
    NewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! ./new.component.html */ "./src/app/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.css */ "./src/app/new/new.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], NewComponent);
    return NewComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\My_Files\courses\coding-dojo-homework\mean_exam\mean_ex\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map