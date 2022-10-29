"use strict";
exports.__esModule = true;
exports.version = exports.disposeAll = exports.dispose = exports.init = void 0;
function delInstance(id) {
}
var ZRender = (function () {
    function ZRender(id, dom, opts) {
        opts = opts || {};
        this.dom = dom;
        this.id = id;
    }
    ZRender.prototype.add = function (el) {
        if (!el) {
            return;
        }
    };
    ZRender.prototype.remove = function (el) {
        if (!el) {
            return;
        }
        this.refresh();
    };
    ZRender.prototype.getBackgroundColor = function () {
    };
    ZRender.prototype.setDarkMode = function (darkMode) {
    };
    ZRender.prototype.isDarkMode = function () {
    };
    ZRender.prototype.refreshImmediately = function (fromInside) {
    };
    ZRender.prototype.refresh = function () {
    };
    ZRender.prototype.flush = function () {
        this._flush(false);
    };
    ZRender.prototype._flush = function (fromInside) {
    };
    ZRender.prototype.setSleepAfterStill = function (stillFramesCount) {
    };
    ZRender.prototype.wakeUp = function () {
    };
    ZRender.prototype.refreshHover = function () {
    };
    ZRender.prototype.refreshHoverImmediately = function () {
    };
    ZRender.prototype.resize = function (opts) {
    };
    ZRender.prototype.clearAnimation = function () {
    };
    ZRender.prototype.getWidth = function () {
        return 0;
    };
    ZRender.prototype.getHeight = function () {
        return 0;
    };
    ZRender.prototype.setCursorStyle = function (cursorStyle) {
    };
    ZRender.prototype.dispose = function () {
    };
    return ZRender;
}());
function init(dom, opts) {
    var zr = new ZRender(1, dom, opts);
    return zr;
}
exports.init = init;
function dispose(zr) {
    zr.dispose();
}
exports.dispose = dispose;
function disposeAll() {
}
exports.disposeAll = disposeAll;
exports.version = '5.4.0';
;
