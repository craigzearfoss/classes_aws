define(["require","exports","modules/core/notify","rondo/v1/index"],(function(e,o,t,i){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.ModalNotificationsBehavior=function(e){var o=e.defaultSuccessMessage,s=e.defaultErrorMessage,r=e.closeAction,n=e.useNotificationDefaults,a=void 0!==n&&n,c=(function(){function e(){this.actionClose=i.createOrUseIn(this,r).watch((function(e,i){return i instanceof Error?t.Notify.error(!a&&i.message?i.message:s):t.Notify.success(!a&&i?i:o)}))}return e.displayName="ModalNotifications",e})();return i.behavior(c)}}));
//# sourceMappingURL=modal_notifications_behavior.min.js-vflxW1hRH.map