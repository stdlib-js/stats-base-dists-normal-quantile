// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,r=Object.prototype,e=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,a=r.__lookupSetter__,f=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,n,f){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===e.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(u.call(t,n)||a.call(t,n)?(c=t.__proto__,t.__proto__=r,delete t[n],t[n]=f.value,t.__proto__=c):t[n]=f.value),y="get"in f,p="set"in f,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,n,f.get),p&&i&&i.call(t,n,f.set),t};function c(t,n,r){f(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}function l(t){return t!=t}var y,p=Math.sqrt,b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),v=Object.prototype.toString,d=Object.prototype.hasOwnProperty,A="function"==typeof Symbol?Symbol.toStringTag:"",_=b&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,e,o,i;if(null==t)return v.call(t);r=t[A],i=A,n=null!=(o=t)&&d.call(o,i);try{t[A]=void 0}catch(n){return v.call(t)}return e=v.call(t),n?t[A]=r:delete t[A],e}:function(t){return v.call(t)},m="function"==typeof Uint32Array,s="function"==typeof Uint32Array?Uint32Array:null,w="function"==typeof Uint32Array?Uint32Array:void 0;y=function(){var t,n,r;if("function"!=typeof s)return!1;try{n=new s(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(m&&r instanceof Uint32Array||"[object Uint32Array]"===_(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?w:function(){throw new Error("not implemented")};var N,U=y,h="function"==typeof Float64Array,j="function"==typeof Float64Array?Float64Array:null,g="function"==typeof Float64Array?Float64Array:void 0;N=function(){var t,n,r;if("function"!=typeof j)return!1;try{n=new j([1,3.14,-3.14,NaN]),r=n,t=(h&&r instanceof Float64Array||"[object Float64Array]"===_(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?g:function(){throw new Error("not implemented")};var S,E=N,F="function"==typeof Uint8Array,T="function"==typeof Uint8Array?Uint8Array:null,I="function"==typeof Uint8Array?Uint8Array:void 0;S=function(){var t,n,r;if("function"!=typeof T)return!1;try{n=new T(n=[1,3.14,-3.14,256,257]),r=n,t=(F&&r instanceof Uint8Array||"[object Uint8Array]"===_(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?I:function(){throw new Error("not implemented")};var O,P=S,x="function"==typeof Uint16Array,V="function"==typeof Uint16Array?Uint16Array:null,G="function"==typeof Uint16Array?Uint16Array:void 0;O=function(){var t,n,r;if("function"!=typeof V)return!1;try{n=new V(n=[1,3.14,-3.14,65536,65537]),r=n,t=(x&&r instanceof Uint16Array||"[object Uint16Array]"===_(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?G:function(){throw new Error("not implemented")};var k,q={uint16:O,uint8:P};(k=new q.uint16(1))[0]=4660;var Y=52===new q.uint8(k.buffer)[0],C=!0===Y?1:0,M=new E(1),z=new U(M.buffer);function B(t){return M[0]=t,z[C]}var D=!0===Y?1:0,H=new E(1),J=new U(H.buffer),K=Number.NEGATIVE_INFINITY,L=.6931471803691238,Q=1.9082149292705877e-10,R=1048575;function W(t){var n,r,e,o,i,u,a,f,c,y,p,b;return 0===t?K:l(t)||t<0?NaN:(i=0,(r=B(t))<1048576&&(i-=54,r=B(t*=0x40000000000000)),r>=2146435072?t+t:(i+=(r>>20)-1023|0,i+=(f=614244+(r&=R)&1048576|0)>>20|0,a=(t=function(t,n){return H[0]=t,J[D]=n>>>0,H[0]}(t,r|1072693248^f))-1,(R&2+r)<3?0===a?0===i?0:i*L+i*Q:(u=a*a*(.5-.3333333333333333*a),0===i?a-u:i*L-(u-i*Q-a)):(f=r-398458|0,c=440401-r|0,o=(p=(b=(y=a/(2+a))*y)*b)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(p),e=b*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(p),u=e+o,(f|=c)>0?(n=.5*a*a,0===i?a-(n-y*(n+u)):i*L-(n-(y*(n+u)+i*Q)-a)):0===i?a-y*(a-u):i*L-(y*(a-u)-i*Q-a))))}var X=Number.POSITIVE_INFINITY;function Z(t){var n,r,e,o,i;return l(t)?NaN:1===t?X:-1===t?K:0===t?t:t>1||t<-1?NaN:(t<0?(n=-1,r=-t):(n=1,r=t),e=1-r,r<=.5?(o=r*(r+10),i=function(t){var n,r;return 0===t?-.0005087819496582806:((t<0?-t:t)<=1?(n=t*(t*(.03348066254097446+t*(t*(t*(.02198786811111689+t*(.008226878746769157+t*(t*(0+0*t)-.005387729650712429)))-.03656379714117627)-.012692614766297404))-.008368748197417368)-.0005087819496582806,r=1+t*(t*(t*(1.5622155839842302+t*(.662328840472003+t*(t*(t*(.07952836873415717+t*(.0008862163904564247*t-.0023339375937419))-.05273963823400997)-.7122890234154284)))-1.5657455823417585)-.9700050433032906)):(n=0+(t=1/t)*(0+t*(t*(.008226878746769157+t*(.02198786811111689+t*(t*(t*(.03348066254097446+t*(-.0005087819496582806*t-.008368748197417368))-.012692614766297404)-.03656379714117627)))-.005387729650712429)),r=.0008862163904564247+t*(t*(.07952836873415717+t*(t*(t*(.662328840472003+t*(1.5622155839842302+t*(t*(1*t-.9700050433032906)-1.5657455823417585)))-.7122890234154284)-.05273963823400997))-.0023339375937419)),n/r)}(r),n*(.08913147449493408*o+o*i)):e>=.25?(o=p(-2*W(e)),i=function(t){var n,r;return 0===t?-.20243350835593876:((t<0?-t:t)<=1?(n=t*(.10526468069939171+t*(8.3705032834312+t*(17.644729840837403+t*(t*(t*(17.445385985570866+t*(21.12946554483405+-3.6719225470772936*t))-44.6382324441787)-18.851064805871424))))-.20243350835593876,r=1+t*(6.242641248542475+t*(3.971343795334387+t*(t*(t*(48.560921310873994+t*(10.826866735546016+t*(1.7211476576120028*t-22.643693341313973)))-20.14326346804852)-28.66081804998)))):(n=(t=1/t)*(21.12946554483405+t*(17.445385985570866+t*(t*(t*(17.644729840837403+t*(8.3705032834312+t*(.10526468069939171+-.20243350835593876*t)))-18.851064805871424)-44.6382324441787)))-3.6719225470772936,r=1.7211476576120028+t*(t*(10.826866735546016+t*(48.560921310873994+t*(t*(t*(3.971343795334387+t*(6.242641248542475+1*t))-28.66081804998)-20.14326346804852)))-22.643693341313973)),n/r)}(e-=.25),n*(o/(2.249481201171875+i))):(e=p(-W(e)))<3?(i=function(t){var n,r;return 0===t?-.1311027816799519:((t<0?-t:t)<=1?(n=t*(t*(.11703015634199525+t*(.38707973897260434+t*(.3377855389120359+t*(.14286953440815717+t*(.029015791000532906+t*(.0021455899538880526+t*(t*(2.8522533178221704e-8+-6.81149956853777e-10*t)-6.794655751811263e-7)))))))-.16379404719331705)-.1311027816799519,r=1+t*(3.4662540724256723+t*(5.381683457070069+t*(4.778465929458438+t*(2.5930192162362027+t*(.848854343457902+t*(.15226433829533179+t*(.011059242293464892+t*(0+t*(0+0*t)))))))))):(n=(t=1/t)*(2.8522533178221704e-8+t*(t*(.0021455899538880526+t*(.029015791000532906+t*(.14286953440815717+t*(.3377855389120359+t*(.38707973897260434+t*(.11703015634199525+t*(-.1311027816799519*t-.16379404719331705)))))))-6.794655751811263e-7))-6.81149956853777e-10,r=0+t*(0+t*(0+t*(.011059242293464892+t*(.15226433829533179+t*(.848854343457902+t*(2.5930192162362027+t*(4.778465929458438+t*(5.381683457070069+t*(3.4662540724256723+1*t)))))))))),n/r)}(e-1.125),n*(.807220458984375*e+i*e)):e<6?(i=function(t){var n,r;return 0===t?-.0350353787183178:((t<0?-t:t)<=1?(n=t*(t*(.018557330651423107+t*(.009508047013259196+t*(.0018712349281955923+t*(.00015754461742496055+t*(460469890584318e-20+t*(26633922742578204e-28*t-2.304047769118826e-10))))))-.0022242652921344794)-.0350353787183178,r=1+t*(1.3653349817554064+t*(.7620591645536234+t*(.22009110576413124+t*(.03415891436709477+t*(.00263861676657016+t*(7646752923027944e-20+t*(0+0*t)))))))):(n=26633922742578204e-28+(t=1/t)*(t*(460469890584318e-20+t*(.00015754461742496055+t*(.0018712349281955923+t*(.009508047013259196+t*(.018557330651423107+t*(-.0350353787183178*t-.0022242652921344794))))))-2.304047769118826e-10),r=0+t*(0+t*(7646752923027944e-20+t*(.00263861676657016+t*(.03415891436709477+t*(.22009110576413124+t*(.7620591645536234+t*(1.3653349817554064+1*t)))))))),n/r)}(e-3),n*(.9399557113647461*e+i*e)):(i=function(t){var n,r;return 0===t?-.016743100507663373:((t<0?-t:t)<=1?(n=t*(t*(.001056288621524929+t*(.00020938631748758808+t*(14962478375834237e-21+t*(4.4969678992770644e-7+t*(4.625961635228786e-9+t*(9905570997331033e-32*t-2811287356288318e-29))))))-.0011295143874558028)-.016743100507663373,r=1+t*(.5914293448864175+t*(.1381518657490833+t*(.016074608709367652+t*(.0009640118070051656+t*(27533547476472603e-21+t*(2.82243172016108e-7+t*(0+0*t)))))))):(n=9905570997331033e-32+(t=1/t)*(t*(4.625961635228786e-9+t*(4.4969678992770644e-7+t*(14962478375834237e-21+t*(.00020938631748758808+t*(.001056288621524929+t*(-.016743100507663373*t-.0011295143874558028))))))-2811287356288318e-29),r=0+t*(0+t*(2.82243172016108e-7+t*(27533547476472603e-21+t*(.0009640118070051656+t*(.016074608709367652+t*(.1381518657490833+t*(.5914293448864175+1*t)))))))),n/r)}(e-6),n*(.9836282730102539*e+i*e)))}function $(t,n,r){return l(n)||l(r)||l(t)||r<0||t<0||t>1?NaN:0===r?n:n+r*p(2)*Z(2*t-1)}function tt(t){return function(){return t}}return c((function(t,n){return l(t)||t<0||t>1?NaN:n}),"factory",(function(t){return l(t)?tt(NaN):function(n){return l(n)||n<0||n>1?NaN:t}})),c($,"factory",(function(t,n){var r,e;return l(t)||l(n)||n<0?tt(NaN):(r=t,e=n*p(2),function(t){return l(t)||t<0||t>1?NaN:r+e*Z(2*t-1)})})),$},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).quantile=n();
//# sourceMappingURL=index.js.map