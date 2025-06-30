"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=s(function(h,n){
var o=require('@stdlib/assert-is-collection/dist'),v=require('@stdlib/assert-is-number/dist').isPrimitive,m=require('@stdlib/array-dtypes/dist'),l=require('@stdlib/array-dtype/dist'),c=require('@stdlib/array-base-assert-contains/dist'),g=require('@stdlib/array-base-join/dist'),d=require('@stdlib/stats-base-varianceyc/dist').ndarray,i=require('@stdlib/error-tools-fmtprodmsg/dist'),t=m("real_and_generic"),y="generic";function p(e){var r,a;if(!o(e))throw new TypeError(i('2Ef2O',e));if(a=l(e)||y,!c(t,a))throw new TypeError(i('2EfHZ',g(t,'", "'),a));if(arguments.length>1){if(r=arguments[1],!v(r))throw new TypeError(i('2Ef4A',r))}else r=1;return d(e.length,r,e,1,0)}n.exports=p
});var q=u();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
