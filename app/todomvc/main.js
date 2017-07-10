"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var stack_layout_1 = require("tns-core-modules/ui/layouts/stack-layout");
var s_js_1 = require("s-js");
var models_1 = require("./models");
var controllers_1 = require("./controllers");
var views_1 = require("./views");
var TodoMvcControl = (function (_super) {
    __extends(TodoMvcControl, _super);
    function TodoMvcControl() {
        var _this = _super.call(this) || this;
        s_js_1.default.root(function () {
            var model = models_1.ToDosModel([]), ctrl = controllers_1.ToDosCtrl(model), 
            // router = ToDosRouter(ctrl),
            // storage = LocalStoragePersistence(model),
            view = views_1.TodoMvcAppView(ctrl);
            _this.addChild(view);
        });
        return _this;
    }
    return TodoMvcControl;
}(stack_layout_1.StackLayout));
exports.TodoMvcControl = TodoMvcControl;
