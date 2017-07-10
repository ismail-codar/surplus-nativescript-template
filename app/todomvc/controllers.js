"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var s_js_1 = require("s-js");
var models_1 = require("./models");
var toDosCtrlType = models_1.returnType(ToDosCtrl);
// export interface IToDosCtrl {
//     editing: DataSignal<ToDo>
//     filter: DataSignal<boolean>
//     newTitle: DataSignal<string>
//     all: SArray<ToDo>
//     completed: SArray<ToDo>
//     remaining: SArray<ToDo>
//     displayed: SArray<ToDo>
//     allCompleted: DataSignal<boolean>
// }
function ToDoCtrl(todos, editing) {
    return function (todo) {
        var title = s_js_1.default.data(s_js_1.default.sample(todo.title));
        return {
            title: title,
            completed: todo.completed,
            remove: function () { return todos.remove(todo); },
            startEditing: function () { return editing(todo); },
            editing: function () { return editing() === todo; },
            endEditing: function (commit) {
                if (commit) {
                    var trimmed = title().trim();
                    if (trimmed) {
                        todo.title(title(trimmed));
                    }
                    else {
                        todos.remove(todo);
                    }
                }
                else {
                    title(todo.title());
                }
                editing(null);
            }
        };
    };
}
var ToDosCtrlCls = (function () {
    function ToDosCtrlCls(todos) {
        var _this = this;
        this.todos = todos;
        this.editing = s_js_1.default.data(null); // the todo selected for editing, or null if none selected
        this.filter = s_js_1.default.data(null); // null = no filtering, true = only completed, false = only incomplete
        this.newTitle = s_js_1.default.data('');
        this.all = this.todos.map(ToDoCtrl(this.todos, this.editing));
        this.completed = this.all.filter(function (t) { return t.completed(); });
        this.remaining = this.all.filter(function (t) { return !t.completed(); });
        this.displayed = function () { return _this.filter() === null ? _this.all() : _this.filter() ? _this.completed() : _this.remaining(); };
        this.allCompleted = function () { return _this.all().length > 0 && _this.remaining().length === 0; };
        this.setAll = function (c) { return s_js_1.default.freeze(function () { return _this.todos().forEach(function (t) { return t.completed(c); }); }); };
        this.clearCompleted = function () { return _this.todos(_this.todos().filter(function (t) { return !t.completed(); })); };
        this.create = function () {
            var title = _this.newTitle().trim();
            if (title) {
                _this.newTitle("");
                _this.todos.unshift(models_1.ToDo(title, false));
            }
        };
    }
    return ToDosCtrlCls;
}());
exports.ToDosCtrlCls = ToDosCtrlCls;
function ToDosCtrl(_a) {
    var todos = _a.todos;
    var editing = s_js_1.default.data(null), // the todo selected for editing, or null if none selected
    filter = s_js_1.default.data(null), // null = no filtering, true = only completed, false = only incomplete
    newTitle = s_js_1.default.data(''), all = todos.map(ToDoCtrl(todos, editing)), completed = all.filter(function (t) { return t.completed(); }), remaining = all.filter(function (t) { return !t.completed(); }), displayed = function () { return filter() === null ? all() : filter() ? completed() : remaining(); };
    return {
        filter: filter,
        newTitle: newTitle,
        all: all,
        completed: completed,
        remaining: remaining,
        displayed: displayed,
        allCompleted: function () { return all().length > 0 && remaining().length === 0; },
        setAll: function (c) { return s_js_1.default.freeze(function () { return todos().forEach(function (t) { return t.completed(c); }); }); },
        clearCompleted: function () { return todos(todos().filter(function (t) { return !t.completed(); })); },
        create: function () {
            var title = newTitle().trim();
            if (title) {
                newTitle("");
                todos.unshift(models_1.ToDo(title, false));
            }
        }
    };
}
exports.ToDosCtrl = ToDosCtrl;
