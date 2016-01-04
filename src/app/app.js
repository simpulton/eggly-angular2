"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var categories_1 = require('./categories/categories');
var bookmarks_1 = require('./categories/bookmarks/bookmarks');
var bookmark_create_1 = require('./categories/bookmarks/create/bookmark-create');
var App = (function () {
    function App() {
    }
    App = __decorate([
        core_1.Component({
            selector: 'app',
            directives: [router_1.ROUTER_DIRECTIVES, categories_1.Categories],
            pipes: [],
            template: "\n    <main>\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <categories></categories>\n                <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\">\n                    <router-outlet></router-outlet>\n                </div>\n            </div>\n        </div>\n    </main>\n  ",
            styles: [
                "\n          .main {\n            padding-top: 96px;\n            padding-left: 24px;\n          }\n      "
            ]
        }),
        router_1.RouteConfig([
            { path: '/', component: bookmarks_1.Bookmarks, name: 'Bookmarks' },
            { path: '/:category/bookmarks/create', component: bookmark_create_1.BookmarkCreate, name: 'Create' }
        ]), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
exports.App = App;
//# sourceMappingURL=app.js.map