// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"p9m+":[function(require,module,exports) {
var html = document.querySelector('#html');
var style = document.querySelector('#style');
console.log(html);
var string = '/*\u6211\u662F\u4E00\u4E2A\u65B0\u7684\u987B\u5F25\u89D2\u8272\uFF0C\n*\u53EB\u505A\u7F07\u5A1C\u91CC,\n*\u6211\u6709\u4E00\u4E2A\u53EB\u67EF\u83B1\u7684\u5F92\u5F1F\u4ECE\u7483\u6708\u5B66\u5230\u4E00\u4E2A\u65B0\u7684\u6807\u5FD7\n*\u8BA9\u6211\u6765\u7ED9\u5927\u5BB6\u5C55\u793A\u5C55\u793A\n*\u63A5\u4E0B\u6765\u6211\u8981\u4E00\u4E2A\u6837\u5F0F\u662F\n*/\n#div1{\n    // border: 1px solid red;\n    width:200px;\n    height:200px;\n}\n/*\u63A5\u4E0B\u6765\u628Adiv\u53D8\u6210\u4E00\u4E2A\u516B\u5366\u56FE\n*\u9996\u5148\u628Adiv\u53D8\u6210\u5706\u7684\n*/\n#div1{\n    border-radius:50%;\n    box-shadow: 0 0 3px;\n    border:none;\n}\n/*\u516B\u5366\u662F\u9634\u9633\u5F62\u6210\u7684\n*\u4E00\u9ED1\u4E00\u767D\n*/\n#div1{\n    background: rgb(255,255,255);\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, \n    rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 98%);\n}\n/*\u52A0\u4E24\u4E2A\u795E\u79D8\u7684\u5C0F\u7403*/\n#div1::before{\n    width:100px;\n    height:100px;\n    top:0;\n    left:50%;\n    transform: translateX(-50%);\n    border-radius:50%;\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%,\n    rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 98%);\n}\n#div1::after{\n    width:100px;\n    height:100px;\n    bottom:0;\n    left:50%;\n    transform: translateX(-50%);\n    border-radius:50%;\n    background:radial-gradient(circle, rgba(0,0,0,1) 0%,\n    rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 98%);\n}\n\n';
console.log(string.length);
var n = 0;
var string2 = '';

var step = function step() {
    setTimeout(function () {
        // string2 += string[n] === '\n' ?'<br>' :string[n];
        if (string[n] === '\n') {
            string2 += '<br>';
        } else if (string[n] === ' ') {
            string2 += '&nbsp';
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);

        console.log(string2);
        console.log(n);
        n++;
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < string.length) {
            step();
        }
    }, 10);
};
step();
},{}]},{},["p9m+"], null)
//# sourceMappingURL=CV.6ccecf74.map