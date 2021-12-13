(function(f,i){typeof exports=="object"&&typeof module!="undefined"?i(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],i):(f=typeof globalThis!="undefined"?globalThis:f||self,i(f["@my-lib/apple"]={},f.React))})(this,function(f,i){"use strict";function m(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var O=m(i),N="",v={banana:"_banana_teasi_1"},l={exports:{}},s={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var p=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;function g(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function h(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;var n=Object.getOwnPropertyNames(r).map(function(a){return r[a]});if(n.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(a){o[a]=a}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}h();/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w=O.default,b=60103;if(s.Fragment=60107,typeof Symbol=="function"&&Symbol.for){var d=Symbol.for;b=d("react.element"),s.Fragment=d("react.fragment")}var S=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function y(e,r,t){var n,o={},a=null,u=null;t!==void 0&&(a=""+t),r.key!==void 0&&(a=""+r.key),r.ref!==void 0&&(u=r.ref);for(n in r)x.call(r,n)&&!P.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps,r)o[n]===void 0&&(o[n]=r[n]);return{$$typeof:b,type:e,key:a,ref:u,props:o,_owner:S.current}}s.jsx=y,s.jsxs=y,l.exports=s;const E=l.exports.jsx;function R(e){return E("button",{className:v.banana,children:e.text})}f.Button=R,Object.defineProperty(f,"__esModule",{value:!0}),f[Symbol.toStringTag]="Module"});
