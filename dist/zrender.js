(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.zrender = {}));
}(this, (function (exports) { 'use strict';

  var ZRender = (function () {
      function ZRender(id, dom, opts) {
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
  function dispose(zr) {
      zr.dispose();
  }
  function disposeAll() {
  }
  var version = '5.4.0';

  exports.dispose = dispose;
  exports.disposeAll = disposeAll;
  exports.init = init;
  exports.version = version;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=zrender.js.map
