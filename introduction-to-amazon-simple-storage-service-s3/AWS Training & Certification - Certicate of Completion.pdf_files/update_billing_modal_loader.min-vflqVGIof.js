define(["require","exports","tslib","react","spectrum/button","classnames","modules/core/notify","modules/core/i18n","modules/clean/ajax","modules/constants/trademark","modules/clean/react/css","modules/clean/react/modal","modules/clean/payments/validation","modules/clean/teams/admin/types/constants","modules/clean/teams/admin/widgets/update_billing_modal/update_billing_modal","modules/clean/react/payments/error/browser_update_required_modal","modules/clean/static_urls","modules/clean/react/payments/unified_module/unified_payment_form_async"],(function(e,t,n,a,o,s,r,i,l,d,u,c,m,p,f,y,g,_){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=n.__importDefault(a),s=n.__importDefault(s),l=n.__importStar(l);var h=(function(e){function u(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={loadingContent:!0,submitting:!1,hasError:!1},t.handleLoadFailure=function(){r.Notify.error(i._("Failed to load modal.")),c.Modal.close(),t.props.onClose&&t.props.onClose()},t.onAccept=function(){t.updateBillingModal&&t.updateBillingModal.onAccept(),t.unifiedPaymentFormAsync&&t.unifiedPaymentFormAsync.onAccept()},t.onDismiss=function(){t.updateBillingModal&&t.updateBillingModal.onDismiss(),c.Modal.close(),t.props.onClose&&t.props.onClose()},t.onSuccess=function(){t.props.onSuccess&&t.props.onSuccess()},t.saveUnifiedPaymentFormAsync=function(e){t.unifiedPaymentFormAsync=e},t.saveUpdateBillingModal=function(e){t.updateBillingModal=e},t.setSubmittingStatus=function(e){t.setState((function(t){return n.__assign(n.__assign({},t),{submitting:e})}))},t}return n.__extends(u,e),u.showInstance=function(e,n){c.Modal.showInstance(a.default.createElement(t.UpdateBillingModalLoader,{onClose:e,onSuccess:n}))},u.prototype.componentDidMount=function(){var e=this;l.WebRequest({url:"/account/team/update_billing_modal_view_model",success:function(t){var a=JSON.parse(t);a.isError?a.errorType===p.TeamBillingErrorType.SUBSCRIPTION_EXPIRED?e.setState({loadingContent:!1,hasError:!0,errorType:a.errorType}):a.errorType===p.TeamBillingErrorType.UNSUPPORTED_BROWSER?(e.handleLoadFailure(),y.BrowserUpdateModalLoader.showInstance()):e.handleLoadFailure():e.setState((function(e){return n.__assign(n.__assign({},e),{loadedProps:{countryList:a.countryList,iframeUrl:a.iframeUrl,vat:a.vat,userInfo:a.userInfo,countryToCurrencyMap:a.countryToCurrencyMap,countryCode:a.countryCode,serializedPaymentFormSpec:a.serializedPaymentFormSpec,showCpf:a.showCpf,showCpfName:a.showCpfName,psd2AddressFields:a.psd2AddressFields,requestId:a.requestId,submitSeq:0,unifiedPayment:a.unifiedPayment},loadingContent:!1})}))},error:function(){e.handleLoadFailure()}})},u.prototype.renderLoading=function(){return a.default.createElement("div",{className:"loading-spinner"},a.default.createElement("img",{src:g.static_url("/static/images/icons/ajax-loading-small-vfl3Wt7C_.gif"),alt:i._("Loading")}))},u.prototype.renderSubscriptionExpired=function(){return a.default.createElement("div",{className:"subscription-expired"},a.default.createElement("h3",{className:"subscription-expired--header"},i._("Your subscription has expired")),a.default.createElement("div",{className:"subscription-expired--copy"},i.intl.formatMessage(i._("To change your billing information, please first renew your %(trademark_business)s account. During the renewal process you’ll be able to choose a different payment method."),{trademark_business:d.TRADEMARK_BUSINESS})))},u.prototype.renderSubscriptionExpiredButtons=function(){return a.default.createElement("div",{className:"subscription-expired--buttons"},a.default.createElement("a",{href:"/team/renew",className:"subscription-expired--button c-btn c-btn--primary"},i._("Renew Your Account")))},u.prototype.renderContent=function(){if(this.state.loadedProps&&this.state.loadedProps.unifiedPayment)return a.default.createElement(_.UnifiedPaymentFormAsync,{isSubmittingStatus:this.setSubmittingStatus,onSuccess:this.onSuccess,ref:this.saveUnifiedPaymentFormAsync});var e=this.state.loadedProps,t=e.countryList,n=e.iframeUrl,o=e.countryToCurrencyMap,s=e.countryCode,r=e.serializedPaymentFormSpec,i=e.showCpf,l=e.showCpfName,d=e.vat,u=e.userInfo,c=e.psd2AddressFields,m=e.requestId;return a.default.createElement(f.UpdateBillingModal,{iframeUrl:n,countryList:t,countryToCurrencyMap:o,countryCode:s,onSuccess:this.onSuccess,ref:this.saveUpdateBillingModal,serializedPaymentFormSpec:r,setSubmittingStatus:this.setSubmittingStatus,showCpf:i,showCpfName:l,vat:d,userInfo:u,psd2AddressFields:c,requestId:m})},u.prototype.renderContentButtons=function(){var e=this.state,t=e.loadingContent,n=e.submitting,s=e.loadedProps,r=e.hasError,l=null;if(s){var d=s.countryCode,u=m.hasVat(d)?i._("Please note: changing your billing location or VAT number could impact your applicable tax rate."):i._("Please note: changing your billing location could impact your applicable tax rate.");l=a.default.createElement("div",{className:"db-modal-lower-left-message"},u)}return a.default.createElement(c.ModalButtons,{className:"oq-modal__buttons"},l,a.default.createElement(o.Button,{className:"cancel-button",variant:"secondary",onClick:this.onDismiss},i._("Cancel")),a.default.createElement(o.Button,{disabled:t||n||r,variant:"primary",onClick:this.onAccept},i._("Save changes")))},u.prototype.render=function(){var e,t=this.state,n=t.loadingContent,o=t.hasError,r=t.errorType,l=null;n?e=this.renderLoading():o&&r===p.TeamBillingErrorType.SUBSCRIPTION_EXPIRED?(e=this.renderSubscriptionExpired(),l=this.renderSubscriptionExpiredButtons()):(e=this.renderContent(),l=this.renderContentButtons());return a.default.createElement(c.Modal,{className:s.default(["update-billing-modal","update-billing-modal-maestro"]),autoClose:!1,buttonComponent:l,title:o?null:i._("Update billing information"),onDismiss:this.props.onClose},a.default.createElement("div",{className:"dynamic-content"},e))},u})(a.default.Component);t.UpdateBillingModalLoaderView=h,t.UpdateBillingModalLoader=u.requireCssWithComponent(h,["/static/css/teams/admin/widgets/update_billing_modal/update_billing_modal-vfls0V9c8.css"])}));
//# sourceMappingURL=update_billing_modal_loader.min.js-vfl-MlOmO.map