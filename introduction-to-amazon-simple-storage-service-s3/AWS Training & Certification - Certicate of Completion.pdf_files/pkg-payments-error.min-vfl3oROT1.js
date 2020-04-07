define("modules/clean/react/payments/error/browser_update_required",["require","exports","tslib","react","modules/core/i18n","modules/clean/react/image","modules/clean/react/business/components/headers/logged_in_header","modules/clean/react/rebrand/elements/rebrand_buttons","modules/clean/static_urls"],(function(e,r,t,a,o,n,s,l,c){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var u=(function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),r.prototype.getDefaultProps=function(){return{renderForModal:!1}},r.prototype.renderPageHeader=function(){return a.default.createElement(s.LoggedInHeader,{className:"browser-error-page__nav",logoPlatform:"default",leftAlignLogo:!0})},r.prototype.renderPrimaryCTA=function(){var e="/help/desktop-web/system-requirements#purchase";return this.props.renderForModal?a.default.createElement("a",{className:"browser-error-modal__cta mc-button mc-button-primary",target:"_blank",rel:"noopener noreferrer",href:e},o._("Learn more")):a.default.createElement(l.RebrandButtonAnchor,{className:"browser-error-page__cta",href:e,size:"medium",width:"wide"},o._("Learn more"))},r.prototype.renderGoBackLink=function(){return a.default.createElement("button",{className:"browser-error-page__go-back",onClick:function(){return window.history.back()}},o._("Go back"))},r.prototype.render=function(){var e=this.props.renderForModal,r=e?"browser-error-modal":"browser-error-page";return a.default.createElement("main",{className:r},!e&&this.renderPageHeader(),a.default.createElement("section",{className:r+"__content"},a.default.createElement(n.Image,{className:r+"__image",alt:o._("​​A hand-drawn illustration depicts a white cartoon cat holding a colorful broken umbrella in the rain. The cat appears sad to be getting wet."),src:c.static_url("/static/images/illustration_catalog/sickbox-illo_m1-vflgqFlmE.png"),srcHiRes:c.static_url("/static/images/illustration_catalog/sickbox-illo_m1@2x-vflLIwavU.png")}),a.default.createElement("h1",{className:r+"__title"},o._("Hmm... looks like your browser is not secure")),a.default.createElement("p",{className:r+"__message"},o._("For your own security, you’ll need to update to a newer, more secure browser in order to access this page.")),this.renderPrimaryCTA(),!e&&this.renderGoBackLink()))},r})((a=t.__importDefault(a)).default.Component);r.BrowserUpdateRequiredPage=u})),define("modules/clean/react/payments/error/browser_update_required_modal",["require","exports","tslib","react","modules/clean/react/css","modules/clean/react/modal","modules/clean/react/payments/error/browser_update_required"],(function(e,r,t,a,o,n,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var l=(function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(o,e),o.showInstance=function(){n.Modal.showInstance(a.default.createElement(r.BrowserUpdateModalLoader,null))},o.prototype.render=function(){return a.default.createElement(n.Modal,{className:"browser-update-modal",autoClose:!1,acceptButtonText:null,dismissButtonText:null,style:"clean"},a.default.createElement(s.BrowserUpdateRequiredPage,{renderForModal:!0}))},o})((a=t.__importDefault(a)).default.Component);r.BrowserUpdateModalLoaderView=l,r.BrowserUpdateModalLoader=o.requireCssWithComponent(l,["/static/css/payments/browser_update_required-vflRPziCo.css"])}));
//# sourceMappingURL=pkg-payments-error.min.js-vflMxM3-I.map