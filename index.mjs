// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-erfinv@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";import{factory as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-quantile@v0.1.1-esm/index.mjs";function d(t,i,r){return e(i)||e(r)||e(t)||r<0||t<0||t>1?NaN:0===r?i:i+r*n(2)*s(2*t-1)}function m(t,d){var m,a;return e(t)||e(d)||d<0?i(NaN):(0===d&&r(t),m=t,a=d*n(2),function(t){if(e(t)||t<0||t>1)return NaN;return m+a*s(2*t-1)})}t(d,"factory",m);export{d as default,m as factory};
//# sourceMappingURL=index.mjs.map
