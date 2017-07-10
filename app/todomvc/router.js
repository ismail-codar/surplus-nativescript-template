"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var s_js_1 = require("s-js");
// with such a simple router scenario, no need for a lib, just hand-write it
function ToDosRouter(ctrl) {
    // filter() -> browser hash
    s_js_1.default(function () {
        var filter = ctrl.filter(), hash = filter === true ? "/completed" :
            filter === false ? "/active" :
                "/";
        if (window.location.hash !== hash)
            window.location.hash = hash;
    });
    // browser hash -> filter()
    window.addEventListener('hashchange', setStateFromHash, false);
    s_js_1.default.cleanup(function () { window.removeEventListener('hashchange', setStateFromHash); });
    function setStateFromHash() {
        var hash = window.location.hash, filter = hash === "#/completed" ? true :
            hash === "#/active" ? false :
                null;
        if (ctrl.filter() !== filter)
            ctrl.filter(filter);
    }
    // init from browser hash
    s_js_1.default.sample(setStateFromHash);
}
exports.ToDosRouter = ToDosRouter;
