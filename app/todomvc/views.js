"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoMvcAppView = function (ctrl) {
    return (function () {
        var __, __textField1, __label2, __stackLayout3, __stackLayout3_insert1;
        __ = Surplus.createElement('stackLayout');
        __textField1 = Surplus.createElement('textField');
        Surplus.appendChild(__, __textField1);
        __label2 = Surplus.createElement('label');
        __label2.text = "Type anything and press enter ";
        __label2.textAlignment = "right";
        Surplus.appendChild(__, __label2);
        __stackLayout3 = Surplus.createElement('stackLayout');
        __stackLayout3.orientation = 'vertical';
        __stackLayout3_insert1 = Surplus.createTextNode('');
        Surplus.appendChild(__stackLayout3, __stackLayout3_insert1);
        Surplus.appendChild(__, __stackLayout3);
        Surplus.S(function () { __textField1.text = ctrl.newTitle(); });
        __textField1.returnPress = function (e) { ctrl.newTitle(e.object.text); ctrl.create(); };
        Surplus.S(function (range) {
            return Surplus.insert(range, ctrl.displayed().map(function (todo) {
                return (function () {
                    var __;
                    __ = Surplus.createElement('label');
                    Surplus.S(function () { __.text = todo.title(); });
                    return __;
                })();
            }));
        }, { start: __stackLayout3_insert1, end: __stackLayout3_insert1 });
        return __;
    })();
};
var Surplus = require("surplus");
