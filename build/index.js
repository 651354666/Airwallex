(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{315:function(e,t,n){},316:function(e,t,n){"use strict";n.r(t),n(124);var o=n(1),r=n.n(o),a=n(123),c=n.n(a);function i(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header__content"},r.a.createElement("img",{className:"header__logo",src:"/src/statics/images/logo.png"})))}function l(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer__content"},"Made with ♥ in Melborne"," ",r.a.createElement("br",null)," ","© 2019 Broccoli & Co. All rights reserved."))}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,s(t).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r.a.Component),function(e,t,n){t&&f(e.prototype,t)}(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"content__center"},r.a.createElement("h1",{className:"content__title"},r.a.createElement("span",{className:"content__title__text"},"A better way"),r.a.createElement("span",{className:"content__title__text"},"to enjoy every day.")),r.a.createElement("h2",{className:"content__subtitle"},"Be the first to know when we launch."),r.a.createElement("div",{className:"content__btn",onClick:function(){return e.props.openModal()}},"Request an invite")))}}]),t}();function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=Object(o.lazy)(function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,344))}),E=function(e){function t(e){var n;return function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),w(d(n=function(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?d(e):t}(this,h(t).call(this,e))),"openModal",function(){console.log("openModal"),n.setState({showModal:!0})}),w(d(n),"closeModal",function(){console.log("closeModal"),n.setState({showModal:!1})}),n.state={showModal:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,r.a.Component),function(e,t,n){t&&m(e.prototype,t)}(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement(i,null),r.a.createElement(l,null),r.a.createElement(y,{openModal:this.openModal}),this.state.showModal&&r.a.createElement(o.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(v,{closeModal:this.closeModal})))}}]),t}();function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,j(t).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,r.a.Component),function(e,t,n){t&&g(e.prototype,t)}(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(E,null))}}]),t}();n(315),c.a.render(r.a.createElement(P,null),document.getElementById("app"))}},[[316,1,2]]]);