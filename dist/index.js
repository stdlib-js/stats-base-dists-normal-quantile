"use strict";var q=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=q(function(j,f){
var y=require('@stdlib/math-base-special-erfinv/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-special-sqrt/dist');function x(e,r,t){var n,a;return u(r)||u(t)||u(e)||t<0||e<0||e>1?NaN:t===0?r:(n=r,a=t*l(2),n+a*y(2*e-1))}f.exports=x
});var s=q(function(k,o){
var d=require('@stdlib/utils-constant-function/dist'),A=require('@stdlib/stats-base-dists-degenerate-quantile/dist').factory,B=require('@stdlib/math-base-special-erfinv/dist'),v=require('@stdlib/math-base-assert-is-nan/dist'),F=require('@stdlib/math-base-special-sqrt/dist');function O(e,r){var t,n;if(v(e)||v(r)||r<0)return d(NaN);return r===0&&A(e),t=e,n=r*F(2),a;function a(i){return v(i)||i<0||i>1?NaN:t+n*B(2*i-1)}}o.exports=O
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),N=c(),b=s();R(N,"factory",b);module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
