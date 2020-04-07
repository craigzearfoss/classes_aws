define(["require","exports","tslib","rondo/v1/index"],(function(t,e,n,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.UtilityModalControlBehavior=function(t){var e=t.openAction,n=t.closeAction;return function(){this.actionOpen=i.createOrUseIn(this,e),this.actionClose=i.createOrUseIn(this,n)}},e.UtilityModalBehavior=function(t){var o=t.openAction,a=t.closeAction,r=t.resolveData,c=t.blockRequestAction,s=t.unblockRequestAction,u=t.actionAccept,l=t.applyOpenDataToState,h=void 0!==l&&l,p=t.startsOpen,d=void 0!==p&&p;return(function(){function t(){var t=this;this.initialState=function(){return{open:d}},this.actionBlockRequest=i.createOrUseIn(this,c),this.actionUnblockRequest=i.createOrUseIn(this,s),this.actionDataReady=i.createAction().handle((function(){return{open:!0}})),this.actionAccept=i.createOrUseIn(this,u),this.actionCancel=i.createAction().handle((function(){return{open:!1}}));var l=i.createBehavior(e.UtilityModalControlBehavior({openAction:o,closeAction:a}));l.actionClose.handle((function(){return{open:!1}})).handleError((function(){return{open:!1}})),l.actionOpen.handle((function(t,e){return t.open||r?{}:h&&e&&"object"==typeof e?n.__assign({open:!0},e):{open:!0}})).watch((function(e){return n.__awaiter(t,void 0,void 0,(function(){var t,e;return n.__generator(this,(function(n){switch(n.label){case 0:if(!r)return[2];this.actionBlockRequest(),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,r()];case 2:return t=n.sent(),this.actionDataReady(t),[3,4];case 3:return e=n.sent(),this.actionDataReady(e),[3,4];case 4:return this.actionUnblockRequest(),[2]}}))}))})),i.extendBehavior(this,l)}return t.displayName="UtilityModal",t})()}}));
//# sourceMappingURL=utility_modal_behavior.min.js-vflVyezmU.map