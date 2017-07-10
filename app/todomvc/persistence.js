"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var s_js_1 = require("s-js");
var models_1 = require("./models");
var LOCAL_STORAGE_KEY = 'todos-surplus';
function LocalStoragePersistence(model) {
    // load stored todos on init
    var stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored)
        model.todos(JSON.parse(stored).todos.map(function (t) { return models_1.ToDo(t.title, t.completed); }));
    // store JSONized todos whenever they change
    s_js_1.default(function () {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(model));
    });
}
exports.LocalStoragePersistence = LocalStoragePersistence;
