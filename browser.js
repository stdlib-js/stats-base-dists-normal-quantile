// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function i(r,t,e){var i=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var t,n,c;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!e(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==t)&&(c=4294967295+c+1),c<0?(n=(-c).toString(t),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(t),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function l(r){return"string"==typeof r}var u=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var t,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((t=r.precision)>0&&(t-=1),n=i.toExponential(t)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,w,"$1e"),n=s.call(n,v,"e"),n=s.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,y,"e+0$1"),n=s.call(n,g,"e-0$1"),r.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,h,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===p.call(r.specifier)?p.call(n):f.call(n)}function A(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function S(r,t,e){var n=t-r.length;return n<0?r:r=e?r+A(n):A(n)+r}var N=String.fromCharCode,_=isNaN,j=Array.isArray;function E(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function F(r){var t,e,n,o,a,u,f,p,s;if(!j(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,p=0;p<r.length;p++)if(l(n=r[p]))u+=n;else{if(t=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(o=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):N(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),u+=n.arg||"",f+=1}return u}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function O(r){var t,e,n,i;for(e=[],i=0,n=T.exec(r);n;)(t=r.slice(i,T.lastIndex-n[0].length)).length&&e.push(t),e.push(U(n)),i=T.lastIndex,n=T.exec(r);return(t=r.slice(i)).length&&e.push(t),e}function x(r){return"string"==typeof r}function k(r){var t,e,n;if(!x(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=O(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return F.apply(null,e)}var I=Object.prototype,V=I.toString,P=I.__defineGetter__,$=I.__defineSetter__,C=I.__lookupGetter__,R=I.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(C.call(r,t)||R.call(r,t)?(n=r.__proto__,r.__proto__=I,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&P&&P.call(r,t,e.get),a&&$&&$.call(r,t,e.set),r};function Z(r,t,e){G(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function W(r){return r!=r}var L=Math.sqrt;function q(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var M,X=q(),Y=Object.prototype.toString,z=Object.prototype.hasOwnProperty,B="function"==typeof Symbol?Symbol:void 0,D="function"==typeof B?B.toStringTag:"",H=X&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,i,o;if(null==r)return Y.call(r);e=r[D],o=D,t=null!=(i=r)&&z.call(i,o);try{r[D]=void 0}catch(t){return Y.call(r)}return n=Y.call(r),t?r[D]=e:delete r[D],n}:function(r){return Y.call(r)},J="function"==typeof Uint32Array,K="function"==typeof Uint32Array?Uint32Array:null,Q="function"==typeof Uint32Array?Uint32Array:void 0;M=function(){var r,t,e;if("function"!=typeof K)return!1;try{t=new K(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(J&&e instanceof Uint32Array||"[object Uint32Array]"===H(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Q:function(){throw new Error("not implemented")};var rr,tr=M,er=q(),nr=Object.prototype.toString,ir=Object.prototype.hasOwnProperty,or="function"==typeof B?B.toStringTag:"",ar=er&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,i,o;if(null==r)return nr.call(r);e=r[or],o=or,t=null!=(i=r)&&ir.call(i,o);try{r[or]=void 0}catch(t){return nr.call(r)}return n=nr.call(r),t?r[or]=e:delete r[or],n}:function(r){return nr.call(r)},cr="function"==typeof Float64Array,lr="function"==typeof Float64Array?Float64Array:null,ur="function"==typeof Float64Array?Float64Array:void 0;rr=function(){var r,t,e;if("function"!=typeof lr)return!1;try{t=new lr([1,3.14,-3.14,NaN]),e=t,r=(cr&&e instanceof Float64Array||"[object Float64Array]"===ar(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var fr,pr=rr,sr=q(),yr=Object.prototype.toString,gr=Object.prototype.hasOwnProperty,dr="function"==typeof B?B.toStringTag:"",hr=sr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,i,o;if(null==r)return yr.call(r);e=r[dr],o=dr,t=null!=(i=r)&&gr.call(i,o);try{r[dr]=void 0}catch(t){return yr.call(r)}return n=yr.call(r),t?r[dr]=e:delete r[dr],n}:function(r){return yr.call(r)},br="function"==typeof Uint8Array,vr="function"==typeof Uint8Array?Uint8Array:null,wr="function"==typeof Uint8Array?Uint8Array:void 0;fr=function(){var r,t,e;if("function"!=typeof vr)return!1;try{t=new vr(t=[1,3.14,-3.14,256,257]),e=t,r=(br&&e instanceof Uint8Array||"[object Uint8Array]"===hr(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var mr,Ar=fr,Sr=q(),Nr=Object.prototype.toString,_r=Object.prototype.hasOwnProperty,jr="function"==typeof B?B.toStringTag:"",Er=Sr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,i,o;if(null==r)return Nr.call(r);e=r[jr],o=jr,t=null!=(i=r)&&_r.call(i,o);try{r[jr]=void 0}catch(t){return Nr.call(r)}return n=Nr.call(r),t?r[jr]=e:delete r[jr],n}:function(r){return Nr.call(r)},Fr="function"==typeof Uint16Array,Tr="function"==typeof Uint16Array?Uint16Array:null,Ur="function"==typeof Uint16Array?Uint16Array:void 0;mr=function(){var r,t,e;if("function"!=typeof Tr)return!1;try{t=new Tr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Fr&&e instanceof Uint16Array||"[object Uint16Array]"===Er(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Ur:function(){throw new Error("not implemented")};var Or,xr={uint16:mr,uint8:Ar};(Or=new xr.uint16(1))[0]=4660;var kr=52===new xr.uint8(Or.buffer)[0],Ir=!0===kr?1:0,Vr=new pr(1),Pr=new tr(Vr.buffer);function $r(r){return Vr[0]=r,Pr[Ir]}var Cr,Rr=q(),Gr=Object.prototype.toString,Zr=Object.prototype.hasOwnProperty,Wr="function"==typeof B?B.toStringTag:"",Lr=Rr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,i,o;if(null==r)return Gr.call(r);e=r[Wr],o=Wr,t=null!=(i=r)&&Zr.call(i,o);try{r[Wr]=void 0}catch(t){return Gr.call(r)}return n=Gr.call(r),t?r[Wr]=e:delete r[Wr],n}:function(r){return Gr.call(r)},qr="function"==typeof Float64Array,Mr="function"==typeof Float64Array?Float64Array:null,Xr="function"==typeof Float64Array?Float64Array:void 0;Cr=function(){var r,t,e;if("function"!=typeof Mr)return!1;try{t=new Mr([1,3.14,-3.14,NaN]),e=t,r=(qr&&e instanceof Float64Array||"[object Float64Array]"===Lr(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Xr:function(){throw new Error("not implemented")};var Yr=!0===kr?1:0,zr=new Cr(1),Br=new tr(zr.buffer),Dr=Number.NEGATIVE_INFINITY,Hr=.6931471803691238,Jr=1.9082149292705877e-10,Kr=1048575;function Qr(r){var t,e,n,i,o,a,c,l,u,f,p,s;return 0===r?Dr:W(r)||r<0?NaN:(o=0,(e=$r(r))<1048576&&(o-=54,e=$r(r*=0x40000000000000)),e>=2146435072?r+r:(o+=(e>>20)-1023|0,o+=(l=614244+(e&=Kr)&1048576|0)>>20|0,c=(r=function(r,t){return zr[0]=r,Br[Yr]=t>>>0,zr[0]}(r,e|1072693248^l))-1,(Kr&2+e)<3?0===c?0===o?0:o*Hr+o*Jr:(a=c*c*(.5-.3333333333333333*c),0===o?c-a:o*Hr-(a-o*Jr-c)):(l=e-398458|0,u=440401-e|0,i=(p=(s=(f=c/(2+c))*f)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),n=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=n+i,(l|=u)>0?(t=.5*c*c,0===o?c-(t-f*(t+a)):o*Hr-(t-(f*(t+a)+o*Jr)-c)):0===o?c-f*(c-a):o*Hr-(f*(c-a)-o*Jr-c))))}var rt=Number.POSITIVE_INFINITY;function tt(r){var t,e,n,i,o;return W(r)?NaN:1===r?rt:-1===r?Dr:0===r?r:r>1||r<-1?NaN:(r<0?(t=-1,e=-r):(t=1,e=r),n=1-e,e<=.5?(i=e*(e+10),o=function(r){var t,e;return 0===r?-.0005087819496582806:((r<0?-r:r)<=1?(t=r*(r*(.03348066254097446+r*(r*(r*(.02198786811111689+r*(.008226878746769157+r*(r*(0+0*r)-.005387729650712429)))-.03656379714117627)-.012692614766297404))-.008368748197417368)-.0005087819496582806,e=1+r*(r*(r*(1.5622155839842302+r*(.662328840472003+r*(r*(r*(.07952836873415717+r*(.0008862163904564247*r-.0023339375937419))-.05273963823400997)-.7122890234154284)))-1.5657455823417585)-.9700050433032906)):(t=0+(r=1/r)*(0+r*(r*(.008226878746769157+r*(.02198786811111689+r*(r*(r*(.03348066254097446+r*(-.0005087819496582806*r-.008368748197417368))-.012692614766297404)-.03656379714117627)))-.005387729650712429)),e=.0008862163904564247+r*(r*(.07952836873415717+r*(r*(r*(.662328840472003+r*(1.5622155839842302+r*(r*(1*r-.9700050433032906)-1.5657455823417585)))-.7122890234154284)-.05273963823400997))-.0023339375937419)),t/e)}(e),t*(.08913147449493408*i+i*o)):n>=.25?(i=L(-2*Qr(n)),o=function(r){var t,e;return 0===r?-.20243350835593876:((r<0?-r:r)<=1?(t=r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(r*(r*(17.445385985570866+r*(21.12946554483405+-3.6719225470772936*r))-44.6382324441787)-18.851064805871424))))-.20243350835593876,e=1+r*(6.242641248542475+r*(3.971343795334387+r*(r*(r*(48.560921310873994+r*(10.826866735546016+r*(1.7211476576120028*r-22.643693341313973)))-20.14326346804852)-28.66081804998)))):(t=(r=1/r)*(21.12946554483405+r*(17.445385985570866+r*(r*(r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+-.20243350835593876*r)))-18.851064805871424)-44.6382324441787)))-3.6719225470772936,e=1.7211476576120028+r*(r*(10.826866735546016+r*(48.560921310873994+r*(r*(r*(3.971343795334387+r*(6.242641248542475+1*r))-28.66081804998)-20.14326346804852)))-22.643693341313973)),t/e)}(n-=.25),t*(i/(2.249481201171875+o))):(n=L(-Qr(n)))<3?(o=function(r){var t,e;return 0===r?-.1311027816799519:((r<0?-r:r)<=1?(t=r*(r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(r*(2.8522533178221704e-8+-6.81149956853777e-10*r)-6.794655751811263e-7)))))))-.16379404719331705)-.1311027816799519,e=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+0*r)))))))))):(t=(r=1/r)*(2.8522533178221704e-8+r*(r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.1311027816799519*r-.16379404719331705)))))))-6.794655751811263e-7))-6.81149956853777e-10,e=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+1*r)))))))))),t/e)}(n-1.125),t*(.807220458984375*n+o*n)):n<6?(o=function(r){var t,e;return 0===r?-.0350353787183178:((r<0?-r:r)<=1?(t=r*(r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(26633922742578204e-28*r-2.304047769118826e-10))))))-.0022242652921344794)-.0350353787183178,e=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+0*r)))))))):(t=26633922742578204e-28+(r=1/r)*(r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0350353787183178*r-.0022242652921344794))))))-2.304047769118826e-10),e=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+1*r)))))))),t/e)}(n-3),t*(.9399557113647461*n+o*n)):(o=function(r){var t,e;return 0===r?-.016743100507663373:((r<0?-r:r)<=1?(t=r*(r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(4.4969678992770644e-7+r*(4.625961635228786e-9+r*(9905570997331033e-32*r-2811287356288318e-29))))))-.0011295143874558028)-.016743100507663373,e=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(2.82243172016108e-7+r*(0+0*r)))))))):(t=9905570997331033e-32+(r=1/r)*(r*(4.625961635228786e-9+r*(4.4969678992770644e-7+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.016743100507663373*r-.0011295143874558028))))))-2811287356288318e-29),e=0+r*(0+r*(2.82243172016108e-7+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+1*r)))))))),t/e)}(n-6),t*(.9836282730102539*n+o*n)))}function et(r,t,e){return W(t)||W(e)||W(r)||e<0||r<0||r>1?NaN:0===e?t:t+e*L(2)*tt(2*r-1)}function nt(r){return function(){return r}}return Z((function(r,t){return W(r)||r<0||r>1?NaN:t}),"factory",(function(r){return W(r)?nt(NaN):function(t){return W(t)||t<0||t>1?NaN:r}})),Z(et,"factory",(function(r,t){var e,n;return W(r)||W(t)||t<0?nt(NaN):(e=r,n=t*L(2),function(r){return W(r)||r<0||r>1?NaN:e+n*tt(2*r-1)})})),et},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).quantile=t();
//# sourceMappingURL=browser.js.map
