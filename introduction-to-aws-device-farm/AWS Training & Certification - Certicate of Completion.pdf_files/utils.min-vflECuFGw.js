define(["require","exports","tslib"],(function(e,r,t){"use strict";var n=this;Object.defineProperty(r,"__esModule",{value:!0}),r.validStringType=function(e){return e?"valid":"error"},r.asyncIsValid=function(e,i){return void 0===i&&(i=function(){return{message:void 0}}),function(s){return t.__awaiter(n,void 0,void 0,(function(){var n,a,o,u,c,d,v;return t.__generator(this,(function(t){switch(t.label){case 0:n=!0,a=void 0,t.label=1;case 1:return t.trys.push([1,3,,4]),[4,e.validate(s)];case 2:return t.sent(),[3,4];case 3:return o=t.sent(),n=!1,a=o,[3,4];case 4:return u=i(n,s,a),c=u.type,d=void 0===c?r.validStringType(n):c,v=u.message,[2,{valid:n,type:d,message:v}]}}))}))}},r.errorMessageCreator=function(e,r){return void 0===r&&(r="error"),function(t,n,i){return t?{type:"valid",message:void 0}:{type:r,message:e(n,i)}}},r.isPromise=function(e){return void 0!==e.then}}));
//# sourceMappingURL=utils.min.js-vflfw6WwJ.map