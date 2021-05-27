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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = ".container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.button-container {\n    display: flex;\n    flex-direction: row;\n}\n\n.text-container {\n    width: 800px;\n}\n\n.interactive-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4udGV4dC1jb250YWluZXIge1xuICAgIHdpZHRoOiA4MDBweDtcbn1cblxuLmludGVyYWN0aXZlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n  <h1>A GHOST STORY</h1>\n  <p>NOTE: This is a work in progress, and some of the story lines still need finishing, as well as styling and images.</p>\n  <div class=\"text-container\">\n    <p>{{currentNode.text}}</p>\n  </div>\n  <div *ngIf=\"currentNode.left\" class=\"interactive-container\">\n    <p>Do you choose to: </p>\n    <div class=\"button-container\">\n      <button mat-button (click)=\"leftClick()\"> {{currentNode.left.button_text}} </button>\n      <button mat-button (click)=\"rightClick()\"> {{currentNode.right.button_text}} </button>\n    </div>\n  </div>\n  \n</div>\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.tree = {
            text: "It is a beautiful spring day. Flowers are blooming, the market is bustling, you've just had a cup of tea and are stepping outside of your courtyard. As you stroll down the road, you notice a young woman ahead of you. She's alone and she's crying.",
            button_text: "",
            left: {
                text: "You approach the girl. As you get closer, you notice she is very beautiful, and her clothes and jewelry are very expensive. You call out to her but she does not respond.",
                button_text: "Approach her. You want to help!",
                left: {
                    text: "She looks up at you, but then quickly puts her face in her sleeves and begins crying again. People on the street are beginning to look at you.",
                    button_text: "Call out to her again, louder this time.",
                    left: {
                        text: "\"My name is Fang Xiaocao\", she replies. \"Please forgive me for crying like this, I know it is unseemly. I must be going.\" She starts to walk off.",
                        button_text: "Ask what her name is.",
                        left: {
                            text: "She turns back to look at you and smiles weakly. \"Thank you. Truthfully, I am a bit lost. I'm from the Southern province, and recently all of my family died from a strange illness. I was the sole survivor. I came to this town because I heard I have an uncle who lives here. Could you help me find him?\"",
                            button_text: "Ask her what's wrong, and if you can help.",
                            left: {
                                text: "You go with Xiaocao back to your house. You make some fresh tea and she sits and stares out the window silently. You being to worry if you've made a mistake bringing her here. What is she is a runaway, or a con artist? Finally she looks at you. \"Thank you for your generosity, not many people have been kind to me. \" You feel reassured that she is genuine.",
                                button_text: "Take her back to your house, so she can rest before you head off to find her uncle.",
                                left: {
                                    text: "Fang Xiaocao agrees, but as you turn to leave your house the door slam shuts. You look back at Xiaocao, and see that she has turned into a huge green serpent. She coils herself around you and eats you whole. You regret helping Fang Xiaocao, and in your last moments you vow to not be so trusting in your next life, if you get one.",
                                    button_text: "Suggest that you head out soon to find her uncle, you don't want to waste daylight.",
                                    left: null,
                                    right: null,
                                },
                                right: {
                                    text: "\"My father was once a successful silk merchant... but I don't like to dwell on the past. My uncle's name is Wang LanTian, he is a potter that lives on the edges of town.\" Wang LanTian... the name sounds somewhat familiar, yet you can't recall knowing anyone with that name. As you are pondering this, you hear a teacup clatter. You look back at Fang Xiaocao, but she is gone.",
                                    button_text: "Ask her about her family, and her uncle.",
                                    left: {
                                        text: "You go out to the court yard. \"Fang Xiaocao...?\" There is no response. You're very nervous now. You turn to go back inside. As you approach the doorway, you see a serpent's tail wrapping around the frame. You start backing up but it is too late. A huge white serpent emerges from your house, wraps itself around you, and swallows you whole. In the face of death, you remember who Wang LanTian is. Your neighbors had a funeral for him last year.",
                                        button_text: "Check to see if she went outside.",
                                        left: null,
                                        right: null,
                                    },
                                    right: {
                                        text: "You peek in the kitchen but she is not there. You push open the door of your bedroom and see Fang Xiaocao standing over some poetry you wrote the night before. You aren't sure how she could have walked to your bedroom so fast, but before you can say anything she turns to you. \"Wow, you are such a talented poet. Won't you recite some poetry for me? It's been so long since I've heard any.\"",
                                        button_text: "Check to see if she's somewhere else in the house.",
                                        left: {
                                            text: "You go to your desk and review your poems. You decide to read her your newest poem, and one of your favorites, \"Moonlight Magnolia\". As you start to recite the poem, you feel the wind knocked out of you and a pain in your chest. You look down and see the claw of a green monster, holding your still beating heart. As you collapse to the floor, you see Fang Xiaocao, now transformed into a horrible monster, eat your heart.",
                                            button_text: "Go over to your desk and read her your poetry. When a beautiful girls asks you to read her poetry, you certainly don't refuse!",
                                            left: null,
                                            right: null,
                                        },
                                        right: {
                                            text: "You turn to leave your bedroom, but the door slam shuts. You look back at Fang Xiaocao and see that she has turned into an enormous red-haired demon. She bites out a chunk from your forehead. As you slowly die, you see her take several poems from your desk and leave out the window.",
                                            button_text: "Tell her you will read it to her later. Things are getting kind of weird, and you want to get going.",
                                            left: null,
                                            right: null,
                                        },
                                    },
                                },
                            },
                            right: {
                                text: "You start walking down the road with Fang Xiaocao. You ask her what her uncle's name is. \"His name is Wang LanTian, I've never met him but I'm told he is a potter that lives on the edge of this town\". The town square is busy, but you're not sure where to start. You've never heard of Wang LanTian. There's a monastary nearby, as well as some merchant stands.",
                                button_text: "Start heading towards the town square, to see if anybody knows her uncle. ",
                                left: {
                                    text: "",
                                    button_text: "Go to the monastary. A lot of people give offerings to their ancestors there, there's a good chance one of the monks knows him.",
                                    left: null,
                                    right: null,
                                },
                                right: {
                                    text: "You head towards the merchant stands. You see a man selling ceramic bowls, and ask if he knows Wang LanTian. \"Wang Lantian... I can't say I know him. But I've heard there is a potter who lives on the southwest outskirts of town, at the base of the mountain. I bet he's the man you are looking for.",
                                    button_text: "Go to the merchant stands. Perhaps another craftsman knows him.",
                                    left: {
                                        text: "You start walking towards the mountain. After about half an hour, you reach the outskirts of town, and start heading into the woods, following a large trail. You look back at Fang Xiaocao, but she is gone.",
                                        button_text: "Start walking towards the mountain.",
                                        left: {
                                            text: "You have a really bad feeling about all that has happened. You turn around to leave, and realize the trail has disappeared too. With no other choice, you simply start wandering in the direction you think you came from. Time slips away, and the woods seem never ending. You see a cave coming up, and a sharp stick nearby.",
                                            button_text: "Just leave the woods, this is too strange!",
                                            left: {
                                                text: "You feel yourself die, but quickly realize you are still in the woods. You have become a ghost. You cry out as you realize you are doomed to wander these woods forever. The townspeople hear your wailing during the night, and grow to fear the demon living in the woods. They set out offerings in hopes the wailing will end, but you are never able to receive them.",
                                                button_text: "Give up, and take your life with the stick.",
                                                left: null,
                                                right: null,
                                            },
                                            right: {
                                                text: "You go to the cave and sleep for the night. The next day, you try to find your way out of the woods, but find yourself somehow walking in circles, always ending up back at the cave. Eventually you lose hope on ever leaving the woods, and learn to live in the cave. Your hair turns white in the darkness and your grow white hair on your body as well. You start wailing at night to mourn the loss of your previous life. The townspeople hear your cries, and develop a local legend about the demon that lives in the woods.",
                                                button_text: "Go to the cave to hunker down for the night, and try to find your way out of the woods in the morning. ",
                                                left: null,
                                                right: null,
                                            },
                                        },
                                        right: {
                                            text: "",
                                            button_text: "Try to find Fang Xiaocao.",
                                            left: null,
                                            right: null,
                                        },
                                    },
                                    right: {
                                        text: "",
                                        button_text: "Ask someone else, you want to be sure before you head off.",
                                        left: null,
                                        right: null,
                                    }
                                },
                            },
                        },
                        right: {
                            text: "",
                            button_text: "Let her leave. She clearly wants to be alone.",
                            left: null,
                            right: null,
                        },
                    },
                    right: {
                        text: "",
                        button_text: "Ask her what's wrong.",
                        left: null,
                        right: null,
                    },
                },
                right: {
                    text: "",
                    button_text: "Gently touch her shoulder to get her attention.",
                    left: null,
                    right: null,
                }
            },
            right: {
                text: "",
                button_text: "Cross the street and keep walking, it's better to mind your business.",
                left: {
                    text: "Option BA",
                    button_text: "",
                    left: null,
                    right: null,
                },
                right: {
                    text: "Option BB",
                    button_text: "",
                    left: null,
                    right: null,
                }
            }
        };
        this.currentNode = this.tree;
        this.title = 'ghost-story';
    }
    AppComponent.prototype.leftClick = function () {
        this.currentNode = this.currentNode.left;
        console.log("left click");
    };
    AppComponent.prototype.rightClick = function () {
        this.currentNode = this.currentNode.right;
        console.log("right click");
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ecoble/Documents/UChicago-20-21/ghost-story/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map