define(["require","exports","tslib","external/lodash","rondo/v1/actions/types","rondo/v1/invariant","rondo/v1/behavior/saga_handler","redux-saga"],(function(t,n,r,e,a,i,o,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e=r.__importStar(e);var c=u.effects.takeEvery,s=u.effects.takeLatest,f=u.effects.takeLeading;n.createActionList=function(){for(var t=[],u=0;u<arguments.length;u++)t[u]=arguments[u];var d=e.flatten(t.filter((function(t){return!!t}))),l=a.isActionCreator(d[d.length-1])?void 0:d.pop();i.invariant(d.length>0,"Action list must have at least one action creator"),i.invariant(0===d.filter((function(t){return!a.isActionCreator(t)})).length,"Every parameter to action list but the last one has to be an action creator or list of action creators. Optionally set last parameter only to a behavior type");var h=function(t){return d[0](t)};h.dispatch=d[0].dispatch,h.action=d[0].action,h.type=d[0].type;var v=function(t){return d?(d.forEach((function(n){return t(n)})),h):h};return h.rawWatch=function(t,n){return v((function(r){return r.rawWatch(t,n)}))},h.watch=function(t,n){return v((function(r){return r.watch(t,n)}))},h.rawHandle=function(t,n){return v((function(r){return r.rawHandle(t,n)}))},h.handle=function(t,n){return v((function(r){return r.handle(t,n)}))},h.rawHandleError=function(t,n){return v((function(r){return r.rawHandleError(t,n)}))},h.handleError=function(t,n){return v((function(r){return r.handleError(t,n)}))},h.takeLatest=function(t,n){return i.invariant(!!n||!!l,"takeLatest requires behavior to attach to (are you missing a useIn?)"),o.addSagaHandler(t,s,d,n||l),h},h.takeEvery=function(t,n){return i.invariant(!!n||!!l,"takeEvery requires behavior to attach to (are you missing a useIn?)"),o.addSagaHandler(t,c,d,n||l),h},h.takeLeading=function(t,n){return i.invariant(!!n||!!l,"takeLeading requires behavior to attach to (are you missing a useIn?)"),o.addSagaHandler(t,f,d,n||l),h},h.useIn=function(t){return n.createActionList.apply(void 0,r.__spread(d.map((function(n){return n.useIn(t)})),[t]))},h}}));
//# sourceMappingURL=action_list.min.js-vflJebuBI.map