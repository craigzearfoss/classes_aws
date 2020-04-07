define(["require","exports","tslib","classnames","purify","react","modules/core/cookies","modules/clean/prompt/api/rendering","dig-components/buttons"],(function(t,e,n,r,o,a,i,s,l){"use strict";function m(t){return t?{__html:o.sanitize(t)}:void 0}Object.defineProperty(e,"__esModule",{value:!0}),r=n.__importDefault(r),o=n.__importStar(o),a=n.__importDefault(a),e.sanitizeOptionalHTML=m;var c=(function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.onClick=function(t){e.props.onConfirm(t),window.open(e.props.confirmUrl,e.getTarget())},e}return n.__extends(e,t),e.prototype.render=function(){var t=r.default(this.props.className,{"confirm-button":!0,enabled:!0});if(this.props.confirmIsPost){var e=i.Cookies.read("__Host-js_csrf");return a.default.createElement("form",{className:"form-button-primary-dig2",action:this.props.confirmUrl,method:"POST",target:this.getTarget(),onSubmit:this.props.onConfirm},a.default.createElement("input",{type:"hidden",name:"t",value:e}),a.default.createElement(l.Button,{type:"submit",variant:"primary",className:t,inverse:!0},a.default.createElement("div",{dangerouslySetInnerHTML:m(this.props.html)})))}return a.default.createElement(l.Button,{variant:"primary",className:t,onClick:this.onClick,inverse:!0},a.default.createElement("div",{dangerouslySetInnerHTML:m(this.props.html)}))},e.prototype.getTarget=function(){return this.props.confirmInNewTab?"_blank":"_self"},e})(a.default.Component);e.ConfirmButtonDIG2=c;var u=(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n.__extends(e,t),e.prototype.render=function(){var t=r.default(this.props.className,{"dismiss-button":!0,enabled:!0});return a.default.createElement(l.Button,{variant:"outline",className:t,onClick:this.props.onDismiss,inverse:!0},a.default.createElement("div",{dangerouslySetInnerHTML:m(this.props.html)}))},e})(a.default.Component);e.DismissButtonDIG2=u,e.PromptButtonsDIG2=function(t){return a.default.createElement("div",{className:"upsell-buttons"},(e=t.campaign,n=t.onDismiss,o=t.onRemindMeLater,i={"cancel-button":!0},e.content.cancelText?(s.isHomeModalContent(e.content)&&e.content.remindMeLaterText&&o&&(i["cancel-link"]=!0),t.dismissButtonClassName&&(i[t.dismissButtonClassName]=!0),a.default.createElement(u,{className:r.default(i),onDismiss:n,html:e.content.cancelText||void 0})):null),(function(){var e=t.campaign,n=t.onRemindMeLater;return s.isHomeModalContent(e.content)&&e.content.remindMeLaterText&&n?a.default.createElement(u,{className:"remind-me-later cancel-button button-tertiary",onDismiss:n,html:e.content.remindMeLaterText}):null})(),(function(){if(t.campaign.content.confirmText){var e={};return t.confirmButtonClassName&&(e[t.confirmButtonClassName]=!0),a.default.createElement(c,{className:r.default(e),confirmInNewTab:t.campaign.content.confirmInNewTab,confirmIsPost:t.confirmIsPost,confirmUrl:t.confirmUrl,onConfirm:t.onConfirm,html:t.campaign.content.confirmText})}return null})());var e,n,o,i}}));
//# sourceMappingURL=dig2_buttons.min.js-vfl8If8FK.map