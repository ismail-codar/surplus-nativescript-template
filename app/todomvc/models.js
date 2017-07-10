"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var s_js_1 = require("s-js");
var s_array_1 = require("s-array");
// our ToDo model
exports.ToDo = function (title, completed) { return ({
    title: jsonable(s_js_1.default.data(title)),
    completed: jsonable(s_js_1.default.data(completed))
}); };
var toDoType = returnType(exports.ToDo);
// our main model
exports.ToDosModel = function (todos) { return ({
    todos: jsonable(s_array_1.default(todos))
}); };
var toDosModelType = returnType(exports.ToDosModel);
// A couple small utilities
// TypeScript utility: do a little generic pattern matching to extract the return type of any function.
// Lets us name that return type for usage in other function's signatures.
//     const fooReturnType = returnType(Foo);
//     type Foo = typeof fooReturnType;
function returnType(fn) {
    return null;
}
exports.returnType = returnType;
// Make any signal jsonable by adding a toJSON method that extracts its value during JSONization
function jsonable(s) {
    s.toJSON = toJSON;
    return s;
}
function toJSON() {
    var json = this();
    // if the value has it's own toJSON, call it now
    if (json && json.toJSON)
        json = json.toJSON();
    return json;
}
