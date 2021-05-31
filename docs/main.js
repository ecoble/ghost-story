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

module.exports = ".container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: absolute; \n    width: 100%;\n    height: 100%;\n}\n\nh1, p {\n    background-color: #F9F9F0;\n    padding: 10px;\n    margin: 20px;\n}\n\n.button-container {\n    background-color: #F9F9F0;\n    display: flex;\n    flex-direction: row;\n}\n\n.text-container {\n    max-width: 800px;\n}\n\n.fake-button {\n    margin: 0;\n    font-weight: bold;\n    background-color: #F9F9F0;\n}\n\n.fake-button:hover {\n    background-color: #e9e9de;\n}\n\n.interactive-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5oMSwgcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjlGMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMjBweDtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUY5RjA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4udGV4dC1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogODAwcHg7XG59XG5cbi5mYWtlLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUY5RjA7XG59XG5cbi5mYWtlLWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTlkZTtcbn1cblxuLmludGVyYWN0aXZlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\" [ngStyle]=\"{background: 'url(' + background_url +') no-repeat center center fixed', 'background-size': 'cover' }\">\n  <h1>A GHOST STORY</h1>\n  <div class=\"text-container\">\n    <p>{{currentNode.text}}</p>\n  </div>\n  <div *ngIf=\"currentNode.left\" class=\"interactive-container\">\n    <p>Do you choose to: </p>\n    <div class=\"button-container\">\n      <p class=\"fake-button\" (click)=\"leftClick()\">{{currentNode.left.button_text}}</p>\n      <p class=\"fake-button\" mat-button (click)=\"rightClick()\">{{currentNode.right.button_text}}</p>\n    </div>\n  </div>\n  <p style=\"font-size: 12px\">To restart the story, refresh your browser.</p>\n</div>\n\n"

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
        this.background_url = "assets/images/courtyard.jpeg";
        this.tree = {
            text: "It is a beautiful spring day. Flowers are blooming, the market is bustling, you've just had a cup of tea and are stepping outside of your courtyard. As you stroll down the road, you notice a young woman ahead of you. She's alone and she's crying.",
            button_text: "",
            left: {
                text: "You approach the girl. As you get closer, you notice she is very beautiful, and her clothes and jewelry are very expensive. You call out to her. She looks up at you, but then quickly puts her face in her sleeves and begins crying again. People on the street are beginning to look at you. You ask her what her name is. \"My name is Fang Xiaocao\", she replies. \"Please forgive me for crying like this, I know it is unseemly. I must be going.\" She starts to walk off.",
                button_text: "Approach her. You want to help!",
                background_url: "assets/images/woman.jpeg",
                left: {
                    text: "She turns back to look at you and smiles weakly. \"Thank you. Truthfully, I am a bit lost. I'm from the Southern province, and recently all of my family died from a strange illness. I was the sole survivor. I came to this town because I heard I have an uncle who lives here. Could you help me find him?\"",
                    button_text: "Ask her what's wrong, and if you can help.",
                    left: {
                        text: "You go with Xiaocao back to your house. You make some fresh tea and she sits and stares out the window silently. You being to worry if you've made a mistake bringing her here. What is she is a runaway, or a con artist? Finally she looks at you. \"Thank you for your generosity, not many people have been kind to me. \" You feel reassured that she is genuine.",
                        button_text: "Take her back to your house, so she can rest before you head off to find her uncle.",
                        left: {
                            text: "Fang Xiaocao agrees, but as you turn to leave your house the door slam shuts. You look back at Xiaocao, and see that she has turned into a huge green serpent. She coils herself around you and eats you whole. You regret helping Fang Xiaocao, and in your last moments you vow to not be so trusting in your next life, if you get one.",
                            button_text: "Suggest that you head out soon to find her uncle, you don't want to waste daylight.",
                            background_url: "assets/images/serpent.jpeg",
                            left: null,
                            right: null,
                        },
                        right: {
                            text: "\"My father was once a successful silk merchant... but I don't like to dwell on the past. My uncle's name is Wang LanTian, he is a potter that lives on the edges of town.\" Wang LanTian... the name sounds somewhat familiar, yet you can't recall knowing anyone with that name. As you are pondering this, you hear a teacup clatter. You look back at Fang Xiaocao, but she is gone.",
                            button_text: "Ask her about her family, and her uncle.",
                            left: {
                                text: "You go out to the court yard. \"Fang Xiaocao...?\" There is no response. You're very nervous now. You turn to go back inside. As you approach the doorway, you see a serpent's tail wrapping around the frame. You start backing up but it is too late. A huge white serpent emerges from your house, wraps itself around you, and swallows you whole. In the face of death, you remember who Wang LanTian is. Your neighbors had a funeral for him last year.",
                                button_text: "Check to see if she went outside.",
                                background_url: "assets/images/serpent.jpeg",
                                left: null,
                                right: null,
                            },
                            right: {
                                text: "You peek in the kitchen but she is not there. You push open the door of your bedroom and see Fang Xiaocao standing over some poetry you wrote the night before. You aren't sure how she could have walked to your bedroom so fast, but before you can say anything she turns to you. \"Wow, you are such a talented poet. Won't you recite some poetry for me? It's been so long since I've heard any.\"",
                                button_text: "Check to see if she's somewhere else in the house.",
                                background_url: "assets/images/desk.png",
                                left: {
                                    text: "You go to your desk and review your poems. You decide to read her your newest poem, and one of your favorites, \"Moonlight Magnolia\". As you start to recite the poem, you feel the wind knocked out of you and a pain in your chest. You look down and see the claw of a green monster, holding your still beating heart. As you collapse to the floor, you see Fang Xiaocao, now transformed into a horrible demon, eat your heart.",
                                    button_text: "Go over to your desk and read her your poetry. When a beautiful girls asks you to read her poetry, you certainly don't refuse!",
                                    background_url: "assets/images/painted_skin.jpeg",
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
                        button_text: "Start heading towards the town square, to see if anybody knows her uncle.",
                        background_url: "assets/images/market.jpg",
                        left: {
                            text: "You enter the monastary. Almost immediately, you see a monk looking at you with concern. He gestures for you to come talk to him, so you go over while Fang Xiacao is busy looking at statues. \"Sir, you must be careful. You are travelling with a demon,\" the monk tells you in a low voice, glancing quickly at Fang Xiaocao. \"You must get away from her as fast as you can.\"",
                            button_text: "Go to the monastary. A lot of people give offerings to their ancestors there, there's a good chance one of the monks knows him.",
                            background_url: "assets/images/temple.jpeg",
                            left: {
                                text: "You scoff and the monk and go back to Fang Xiacocao. What a ridiculous idea! Fang Xiaocao couldn't be a demon. You suggest to Fang Xiaocao that you should leave. The two of you leave through the back, entering a small alley. Just as you are pondering what you should do next, you feel a piercing pain in your heel. You look behind you and see that Fang Xiacao has turned into a horrible shadowy demon with a long tongue, and is using it to drink your blood from your foot. You are too shocked to cry out, and you feel your lifeforce quickly draining. You regret not listening to the monk.",
                                button_text: "Turn and leave. This monk doesn't know what he's talking about!",
                                background_url: "assets/images/demon.jpeg",
                                left: null,
                                right: null,
                            },
                            right: {
                                text: "\"Take this, go to the back of the monastary, and place it around her neck when she isn't expecting it.\" The monk says, handing you a necklace with sacred talisman on it. \"After that I will come, and trap her with this bowl.\" You're nervous but you nod your head and take the necklace. You suggest to Fang Xiaocao that you should leave. You go out the back alley, you let Fang Xiacao go ahead of you. You take a deep breath and put the necklace over Fang Xiaocao's head. Immediately, she begins transforming into a giant snake. You are terrified, but just at the moment the monk runs past you and places the bowl over her head. She shrinks in size quickly, and after a few moments the monk lifts the bowl and reveals a harmless looking garden snake. \"She won't be able to cause any more harm. I'll take it from here.\" The monk slips her into a small pouch and walks off. You are stunned, unsure what to do you return home and make yourself from tea. You always remember this day, but almost as if it were a dream.",
                                button_text: "You knew there was something off about her! Ask the monk what you should do.",
                                background_url: "assets/images/serpent.jpeg",
                                left: null,
                                right: null,
                            },
                        },
                        right: {
                            text: "You head towards the merchant stands. You see a man selling ceramic bowls, and ask if he knows Wang LanTian. \"Wang Lantian... I can't say I know him. But I've heard there is a potter who lives on the southwest outskirts of town, at the base of the mountain. I bet he's the man you are looking for.",
                            button_text: "Go to the merchant stands. Perhaps another craftsman knows him.",
                            left: {
                                text: "You start walking towards the mountain. After about half an hour, you reach the outskirts of town, and start heading into the woods, following a large trail. You look back at Fang Xiaocao, but she is gone.",
                                button_text: "Start walking towards the mountain.",
                                background_url: "assets/images/forest.jpeg",
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
                                        button_text: "Go to the cave to hunker down for the night, and try to find your way out of the woods in the morning.",
                                        left: null,
                                        right: null,
                                    },
                                },
                                right: {
                                    text: "\"Fang Xiaocao..?\" You call out. You walk a few steps further down the trail and peer into the woods. You see a figure standing far ahead of you, it looks like Fang Xiaocao. You jog to catch up. How did she suddenly get so far ahead when she was behind you. \"I think this is my uncle's home.\" Fang Xiaocao points to a small hut up the hill. It looks overgrown and abandoned. You ask her how she can be so sure, but she's already started walking towards it. You reach the house and walk towards the back, there is a tomb. \"Fang Xiaocao, I don't think this is the right house,\" you tell her. Fang Xiaocao doesn't listen. She is kneeling and beginning to weep. You look up at the tomb and read the inscription, it says \"Fang Xiaocao\".",
                                    button_text: "Try to find Fang Xiaocao.",
                                    left: {
                                        text: "You turn to run but you feel as though you're in slow motion. \"I thought you said you would help me!\" Fang Xiaocao cries out. She's crying but now she's angry too. You see her ghostly form as she rushes at your and plunges her hand into your chest, ripping out your heart. As you die you see her place it back on her own grave, crying all the while.",
                                        button_text: "Run away! She's a ghost!",
                                        left: null,
                                        right: null,
                                    },
                                    right: {
                                        text: "You ask but Fang Xiaocao just cries harder. Suddenly, you feel yourself growing cold and are unable to move your body. You try to yell but are unable to. You find yourself alone, in front of Fang Xiaocao's grave. You notice a skeleton nearby and can't remember if it was there before. Scared, you go back to your home. That night, you begin to feel ill, and within several days you die from your sickness.",
                                        button_text: "It could be a concidence. Ask her what's wrong.",
                                        left: null,
                                        right: null,
                                    },
                                },
                            },
                            right: {
                                text: "You aren't convinced by this merchant, so you head off to see if there might be anyone else who would know. You turn down a narrow alley as a shortcut, it's much less crowded than the main streets. Suddently, you feel a piercing pain in your heel. You look behind you and see that Fang Xiacao has turned into a horrible shadowy demon with a long tongue, and is using it to drink your blood from your foot. You are too shocked to cry out, and your lifeforce quicly drains. Fang Xiaocao disappears from the alley.",
                                button_text: "Ask someone else, you want to be sure before you head off.",
                                background_url: "assets/images/demons.jpeg",
                                left: null,
                                right: null,
                            }
                        },
                    },
                },
                right: {
                    text: "You feel sad for her, but you head towards the market and continue you day like usual. Later on you return home and start to make lunch, when you hear crying outside your window, coming from the street again. You look out and see it is the same woman from before, Fang Xiaocao.",
                    button_text: "Let her leave. She clearly wants to be alone.",
                    background_url: "assets/images/woman.jpeg",
                    left: {
                        text: "This time, Fang Xiaocao accepts your help. You bring her back to your house. You make some fresh tea and she sits and stares out the window silently. You being to worry if you've made a mistake bringing her here. What is she is a runaway, or a con artist? Finally she looks at you. \"Thank you for your generosity. I'm from the Southern province, and recently all of my family died from a strange illness. I was the sole survivor. I came to this town because I heard I have an uncle who lives here. Could you help me find him?\" You feel reassured that she is genuine.",
                        button_text: "Go outside and try again to help her.",
                        left: {
                            text: "Fang Xiaocao agrees, but as you turn to leave your house the door slam shuts. You look back at Xiaocao, and see that she has turned into a huge green serpent. She coils herself around you and eats you whole. You regret helping Fang Xiaocao, and in your last moments you vow to not be so trusting in your next life, if you get one.",
                            button_text: "Suggest that you head out soon to find her uncle, you don't want to waste daylight.",
                            background_url: "assets/images/serpent.jpeg",
                            left: null,
                            right: null,
                        },
                        right: {
                            text: "\"My father was once a successful silk merchant... but I don't like to dwell on the past. My uncle's name is Wang LanTian, he is a potter that lives on the edges of town.\" Wang LanTian... the name sounds somewhat familiar, yet you can't recall knowing anyone with that name. As you are pondering this, you hear a teacup clatter. You look back at Fang Xiaocao, but she is gone.",
                            button_text: "Ask her about her family, and her uncle.",
                            left: {
                                text: "You go out to the court yard. \"Fang Xiaocao...?\" There is no response. You're very nervous now. You turn to go back inside. As you approach the doorway, you see a serpent's tail wrapping around the frame. You start backing up but it is too late. A huge white serpent emerges from your house, wraps itself around you, and swallows you whole. In the face of death, you remember who Wang LanTian is. Your neighbors had a funeral for him last year.",
                                button_text: "Check to see if she went outside.",
                                background_url: "assets/images/serpent.jpeg",
                                left: null,
                                right: null,
                            },
                            right: {
                                text: "You peek in the kitchen but she is not there. You push open the door of your bedroom and see Fang Xiaocao standing over some poetry you wrote the night before. You aren't sure how she could have walked to your bedroom so fast, but before you can say anything she turns to you. \"Wow, you are such a talented poet. Won't you recite some poetry for me? It's been so long since I've heard any.\"",
                                button_text: "Check to see if she's somewhere else in the house.",
                                background_url: "assets/images/desk.png",
                                left: {
                                    text: "You go to your desk and review your poems. You decide to read her your newest poem, and one of your favorites, \"Moonlight Magnolia\". As you start to recite the poem, you feel the wind knocked out of you and a pain in your chest. You look down and see the claw of a green monster, holding your still beating heart. As you collapse to the floor, you see Fang Xiaocao, now transformed into a horrible demon, eat your heart.",
                                    button_text: "Go over to your desk and read her your poetry. When a beautiful girls asks you to read her poetry, you certainly don't refuse!",
                                    background_url: "assets/images/painted_skin.jpeg",
                                    left: null,
                                    right: null,
                                },
                                right: {
                                    text: "You turn to leave your bedroom, but the door slam shuts. You look back at Fang Xiaocao and see that she has turned into an enormous red-haired demon. She bites out a chunk from your forehead. As you slowly die, you see her take several poems from your desk and leave out the window.",
                                    button_text: "Tell her you will read it to her later. Things are getting kind of weird, and you want to get going.",
                                    background_url: "assets/images/demons.jpeg",
                                    left: null,
                                    right: null,
                                },
                            },
                        },
                    },
                    right: {
                        text: "You ignore her crying and continue your day, but you are unnerved. That night, you have a horrible dream filled with the sound of Fang Xiaocao's crying, and in the morning decide you should go to the monastary and seek help. Skipping breakfast, you head to the townsquare. As soon as you enter the monastary, a monk looks at you with concern and approaches you. Before you even tell him what happened, he says \"Sir, you look unwell. It seems you have encountered a ghost and she is making you sick.\" You ask the monk what you should do. \"You must find the ghost again, and place this necklace over her head when she is not suspecting it. It should send her back to the underworld\". The monk hands you a necklace with a sacred talisman on it.",
                        button_text: "Draw your curtains and keep making lunch.",
                        background_url: "assets/images/temple.jpeg",
                        left: {
                            text: "You thank the monk and go back to the townsquare. It doesn't take long before you hear crying, and you see Fang Xiaocao standing near a narrow alley. You're nervous, but you approach her once again. You introduce yourself and this time you insist that Fang Xiaocao accepts your help, and comes back to your house for a meal. You both start walking towards your house, and as soon as you are out of view of the townspeople you quickly slip the necklace over her head. Immediately, Fang Xiaocao's eyes glow with rage, but the necklace seems to be restarining her. Her figure turns shadowy and she melts away, leaving the necklace and her hairpin. You take these items are return them to the monk. \"This hairpin was made not long ago. She must have died recently.\" You almost feel bad for her, but you just return to your house and try to forget about this encounter.",
                            button_text: "Leave to try and find Fang Xiaocao immediately and end your haunting.",
                            background_url: "assets/images/hairpin.png",
                            left: null,
                            right: null,
                        },
                        right: {
                            text: "You return home and spend all day worrying. You decide that there is no rush to find Fang Xiaocao, and that you will go in the morning. That night you again dream of her crying, but this time she is in your room. You feel almost unsure about whether you are asleep or awake. Suddenly it's morning, and you feel so sick you are bedridden. Within a couple days you die of your illness, the monk's necklace untouched on your desk next to your bed.",
                            button_text: "Go home and think about what the monk has said. You are nervous to rush off and try to find a ghost.",
                            left: null,
                            right: null
                        },
                    }
                },
            },
            right: {
                text: "You avert your eyes and keep heading towards the town square. While shopping, you see her again. This time she is standing looking a bit lost. You make eye contact and she approaches you. \"Sir, I'm sorry to bother you, I'm lost. Do you think you could help me?\"",
                button_text: "Cross the street and keep walking, it's better to mind your business.",
                background_url: "assets/images/market.jpg",
                left: {
                    text: "\"Thank you so much! You're very kind. I'm Fang Xiaocao, I'm from the Southern Province, but my family is very poor and can no longer afford to feed me. They've sent me here to live with my uncle, and hopefully find a spouse quickly. I don't know where he lives, but I've heard he's a potter.\"",
                    button_text: "Agree to help her.",
                    background_url: "assets/images/woman.jpeg",
                    left: {
                        text: "You search all day but you are unable to find Fang Xiaocao's uncle. Nobody has even heard of him. You begin to grow suspicious of Fang Xiaocao, but her beauty and innocence keep your worries at bay. It is getting late now, and you offer for Fang Xiaocao to stay at your house, which she gladly accepts. You tell her she can sleep in your bed while you sleep on a mat on the floor. Fang Xiaocao looks disappointed. \"I thought we could sleep together... it has been lonely travelling all this way by myself.\"",
                        button_text: "Start asking around the market to see if anybody knows Fang Xiaocao's uncle.",
                        background_url: "assets/images/desk.png",
                        left: {
                            text: "You sleep with Fang Xiaocao, and you share passionate love. Over the next few days, the two of you quickly forget about finding her uncle. You are so enamored by her, that you don't notice yourself growing weaker each day until you are bedridden. You ask Fang Xiaocao what is happening to you, and she smiles. \"Well truthfully, I've been searching for a husband for a long time, but not many people want to marry a ghost... But if you're a ghost too, there aren't any problems.\" You are too weak now to do anything about your situation. You die within a few days, and you and Fang Xiaocao spend eternity together haunting your town.",
                            button_text: "Sleep in bed with Fang Xiaocao.",
                            left: null,
                            right: null,
                        },
                        right: {
                            text: "Fang Xiaocao does not protest anymore. In the morning, before you are about to leave again to search for her uncle, Fang Xiaocao tells you she has a confession. \"We will not find my uncle, he died many years ago. The truth is, I am a ghost. My husband scorned me many years ago, left me with no support, and I died in disgrace. Since then I have been trying to find a new spouse, in the hopes that finding a new life may let me leave this ghostly form behind. I was hoping you would marry me, but it seems you aren't interested...\"",
                            button_text: "Insist on sleeping on the floor.",
                            left: {
                                text: "You tell Fang Xiaocao she has to go. \"I see... I won't be troubling you anymore then.\" Fang Xiaocao leaves and you see her ghostly form disappear once she has walked a little ways down the road. You are nervous for the next few days that she might come back, but true to her word nothing unusual happens. A couple months later, you hear of a healthy young man dying unexpectedly just down the road from where you live.",
                                button_text: "Send Fang Xiaocao away for lying to you and being a ghost.",
                                left: null,
                                right: null,
                            },
                            right: {
                                text: "Fang Xiaocao is skeptical of your idea but agrees. You arrive at the monastary, and a priest immediately approaches you. \"Sir, what are you doing? Why have you brought such a creature here?\" You explain Fang Xiaocao's situation, and the priest seems sympathetic. He takes you to a room in the back of the monastary. He tells Fang Xiaocao to hold several talismans, and then begins chanting sacred scripts. Fang Xiaocao looks uncomfortable, but you see her ghostly form is disappearing. Fang Xiaocao starts smiling, and soon she has vanished. \"Her days will be peaceful now,\" the monk tells you. You leave the monastary and continue running errands, trying to forget your encounter.",
                                button_text: "Take Fang Xiaocao to the monastary to see if a priest can help her.",
                                background_url: "assets/images/temple.jpeg",
                                left: null,
                                right: null,
                            },
                        }
                    },
                    right: {
                        text: "Fang Xiaocao seems delighted by your offer. You head back to your house and she tells you about her family, who are poor farmers. She is quite beautiful, and she's looking for a spouse... perhaps a marriage could work between you two. Fang Xiaocao is tired, so you decide to go to sleep and start your search in the morning.",
                        button_text: "Offer to take her back to your home to have a meal first, she must be hungry.",
                        background_url: "assets/images/desk.png",
                        left: {
                            text: "The mat is a bit uncomfortable, but you are very tired for some reason, and you fall asleep quickly. In the middle of the night you wake up in a panic. Fang Xiaocao is standing above you, holding what seems to be an ornate knife. Before you can cry out, Fang Xiaocao sees that you are awake and begins crying. She collapses to the floor and drops the knife.",
                            button_text: "Let Fang Xiaocao sleep in your bed, while you sleep on a mat on the floor.",
                            left: {
                                text: "You send Fang Xiaocao out of the house. She does not protest, or offer any explanation. You almost feel bad putting her on the street in the middle of the night. Despite your ordeal, you find yourself falling asleep again as soon as you get back inside. You wake up again a few hours later, the window is open and the knife is in your heart.",
                                button_text: "Kick her out. She tried to kill you!",
                                left: null,
                                right: null,
                            },
                            right: {
                                text: "You ask Fang Xiaocao what is wrong. \"Please forgive me,\" she tells you through tears. \"I have not been honest. I am a ghost, and I am controlled by a horrible demon who forces me to kill so she can collect their spirits. I was supposed to kill you tonight, but you have been so kind to me, I can't bring myself to do it. I don't want to kill anymore. Can you felt me break free from her control?\"",
                                button_text: "Comfort her, and hear her out.",
                                left: {
                                    text: "Fang Xiaocao starts crying again, but starts to get up. \"I understand...\" and with these final words she vanishes. You are shocked, but yet you are still exhausted and find yourself falling alseep again, despite not wanting to. You wake up again in the middle of the night, this time you see a horrible demon with a long tongue standing over you. \"Poor beautiful girl, she couldn't finish the job. A shame that now I must do it myself!\" The demon takes its tongue and pierces your foot, draining all of your blood within seconds, and vanishes.",
                                    button_text: "Tell her you can't help, this is too much for you to deal with.",
                                    background_url: "assets/images/demons.jpeg",
                                    left: null,
                                    right: null,
                                },
                                right: {
                                    text: "Fang Xiaocao is overwhelmed with gratitude. \"You are so kind. I will never be able to thank you enough. The task will not be difficult, but it may be tedious.\" Fang Xiaocao explains that in order to free her, you will need to find her remains, take them back to her hometown where she died, and then she can reincarnated. It takes you several days to do this, but you eventually arrive at Fang Xiaocao's home in the southern province. \"I died from a sudden illness over here.\" Fang Xiaocao leads to you a small dilapidated house, now overgrown with weeds. You bury her remains in the backyard, and she smiles with joy as you see her ghost dissapate. You return home and cherish your memory of her.",
                                    button_text: "Agree to help her.",
                                    background_url: "assets/images/forest.jpeg",
                                    left: null,
                                    right: null,
                                }
                            },
                        },
                        right: {
                            text: "Fang Xiaocao blushes but agrees. That night, you and Fang Xiaocao share passionate love together. You feel you really have a connection. In the morning, you make tea and rice porridge.",
                            button_text: "Tell Fang Xiaocao your bed is big enough for both of you to sleep together.",
                            background_url: "assets/images/woman.jpeg",
                            left: {
                                text: "Fang Xiaocao is overjoyed, she happily accepts. You begin your lives together and everything seems great, however you notice that Fang Xiaocao has been growing weaker by the day. You've asked her what's wrong but she refuses to tell you. Finally one day, when she is almost bedridden, she tells you, \"You have been so kind to me. I must be honest. My family sent me here many years ago, and I was unable to find either my uncle or a husband. I am a ghost, I died in the woods on the outskirts of this town searching for his home.\"",
                                button_text: "Propose to Fang Xiaocao. She's the one!",
                                left: {
                                    text: "You tell Fang Xiaocao that you don't care that she's a ghost, and you want to be together anyways. \"You are very kind, but I fear I may not be able to stay with you anyways. My bones are in the woods, and longer I am away from them the weaker I become. I'm doomed to haunt the outskirts of this town forever it seems.\"",
                                    button_text: "You don't care if Fang Xiaocao is a ghost, you love her!",
                                    left: {
                                        text: "\"It's an interesting idea, but I'm not sure it will work... but I am willing to try.\" You walk with Fang Xiaocao out to the edge of town, and she shows you were her remains are. You gather them in a sack and bury them in the corner of your courtyard. Within days, you see Fang Xiaocao's health improve. You are able to live happy and fulfilling life together, and most of the time you even forget that she is a ghost.",
                                        button_text: "Suggest that you bring Fang Xiaocao's bones back to your house instead.",
                                        background_url: "assets/images/forest.jpeg",
                                        left: null,
                                        right: null,
                                    },
                                    right: {
                                        text: "You're sad but you don't know how to help in these ghostly matters. Fang Xiaocao leaves that night, and you never see her again. You are so heartbroken, that over the next few weeks you find yourself growing weak from heartbreak, and eventually you die.",
                                        button_text: "Let Fang Xiaocao go back to haunting the woods.",
                                        left: null,
                                        right: null,
                                    },
                                },
                                right: {
                                    text: "You tell Fang Xiaocao that she has to go. She begins crying but she doesn't resist, and leaves your house. Despite that she was a ghost, you are still heartbroken, and at night you are haunted by her cries. Over the next few weeks you find yourself growing weak from heartbreak, and eventually you die.",
                                    button_text: "Get rid of Fang Xiaocao. You can't believe she didn't notice she was a ghost!",
                                    left: null,
                                    right: null,
                                },
                            },
                            right: {
                                text: "You and Fang Xiaocao go to the townsquare to ask people about her uncle, but you have no luck. This continues for several days, and each day Fang Xiaocao looks more and more unhappy. You ask her what's wrong. \"I have not been honest with you. In truth, I have no uncle here. I am a ghost who died recently. I was sent away from my home in the middle of the night by my stepmother, who falsely accused me of being unchaste as a plot to get rid of me, knowing I would die alone in the forest. I thought I could find fulfillment by coming here and finding a spouse, but I am still restless. I know now the only way to find peace is for justice to be brought to my father and stepmother.\" ",
                                button_text: "Stick with your plan of finding her uncle.",
                                left: {
                                    text: "Without a word, Fang Xiaocao leaves. You are nervous for the next couple of days that she may come back, but she never does. Eventually more and more people in your town talk about the ghost of the crying woman. People put out offerings for her, but nobody will dare approach her. The offerings don't help, only you know what can end her suffering, but you remain silent and feel guilty. After a year you can't take it anymore, and move to a town in the northern province. You die several years later of a mysterious illness.",
                                    button_text: "Send Fang Xiaocao away for lying and being a ghost.",
                                    background_url: "assets/images/forest.jpeg",
                                    left: null,
                                    right: null,
                                },
                                right: {
                                    text: "You offer to help Fang Xiaocao, and she is overjoyed. You travel several days to her hometown, and explain the magistrate what happened. After a trial, it was found there was no real evidence of Fang Xiaocao being unchaste, and her father and stepmother are punished. Fang Xiaocao is able to leave her ghostly form in the mortal world, and you return to your own town.",
                                    button_text: "Help Fang Xiaocao get justice for her death.",
                                    left: null,
                                    right: null,
                                },
                            },
                        }
                    },
                },
                right: {
                    text: "She looks shocked, but simply walks away. You almost feel bad, but you try to put it out of your mind. Later that night, you are trying to fall asleep but you're kept awake by an unseasonal cold wind. Suddenly, Fang Xiaocao appears before you. You're shocked and find yourself unable to cry out. \"What a mean person. Why couldn't you help a beautiful girl like me?\" In the moonlight you see that she is a ghost, made only of bones and shadows. She plunges her arm into your chest and squeezes your heart until it stops beating. In your final moments you see her graceful figure leave out the window, and you hear the wind stop blowing.",
                    button_text: "Tell her you're busy.",
                    background_url: "assets/images/woman.jpeg",
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
        if (this.currentNode.background_url) {
            this.background_url = this.currentNode.background_url;
        }
    };
    AppComponent.prototype.rightClick = function () {
        this.currentNode = this.currentNode.right;
        if (this.currentNode.background_url) {
            this.background_url = this.currentNode.background_url;
        }
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