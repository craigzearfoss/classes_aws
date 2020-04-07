define(["require","exports","tslib","react","modules/clean/react/css","spectrum/button","modules/clean/react/image","modules/clean/static_urls","modules/core/i18n","modules/constants/payments","modules/clean/account/email","modules/clean/account/email_verify_reasons","dropbox/proto/js_init_data/extensions/extensions","proto_utils/unpack"],(function(e,t,a,s,i,o,n,r,c,l,u,p,m,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),s=a.__importDefault(s),l=a.__importStar(l),p=a.__importStar(p);var _=function(e){var t=r.static_url("/static/images/illustration_catalog/"+e.illustrationName+".png"),a=r.static_url("/static/images/illustration_catalog/"+e.illustrationName+"@2x.png");return s.default.createElement("div",{className:"app-actions-status-page"},s.default.createElement(n.Image,{className:"app-actions-status-image",src:t,srcHiRes:a}),s.default.createElement("div",{className:"app-actions-status-content"},e.children))},g=function(e){return s.default.createElement(_,{illustrationName:e.illustrationName},s.default.createElement("div",{className:"app-actions-status-text"},s.default.createElement("div",{className:"app-actions-status-text__header"},e.headerText)),s.default.createElement("div",{className:"app-actions-status-detail"},e.detailText),s.default.createElement(o.Button,{className:"app-actions-status-button",onClick:e.buttonOnClick,href:e.buttonHref,variant:"primary"},e.buttonTitle))};function f(){window.close()}t.AppActionsLoadingPage=i.requireCssWithComponent((function(e){return s.default.createElement("div",{className:"app-actions-status-page"},s.default.createElement(n.Image,{className:"app-actions-status-image",src:r.static_url("/static/images/dbx_cloud_doc_loading-vfl9ZK2NS.gif")}),s.default.createElement("div",{className:"app-actions-status-detail"},e.fileName))}),["/static/css/app_actions/status_page-vflmjPk7l.css","/static/css/components/loading_indicator-vflkh07Fb.css"]),t.AppActionsErrorPage=i.requireCssWithComponent((function(e){return s.default.createElement(g,{illustrationName:"sickbox-illo_m1",headerText:c._("Oops... something went wrong"),detailText:c._("Oh no, it looks like we failed to load your file. Please return to Dropbox and try once more."),buttonOnClick:f,buttonTitle:c._("Close")})}),["/static/css/app_actions/status_page-vflmjPk7l.css","/static/css/spectrum/index.web-vfl_-DzRS.css"]),t.AppActionsOverQuotaPage=i.requireCssWithComponent((function(e){var t=l.OUT_OF_SPACE_URL+"?oqa=wb_oq_aa",a=c._("Get more space");return e.isTeam&&(t="/help/business/space-limit-full",a=c._("Learn more about Dropbox space")),s.default.createElement(g,{illustrationName:"illo-catbox",headerText:c._("Your Dropbox is full"),detailText:c._("Uh oh, in order to perform this action, you need to add more storage to your Dropbox."),buttonTitle:a,buttonHref:t})}),["/static/css/app_actions/status_page-vflmjPk7l.css","/static/css/spectrum/index.web-vfl_-DzRS.css"]),t.DocuSignPermissionDeniedPage=i.requireCssWithComponent((function(e){return s.default.createElement(g,{illustrationName:"account_requires_access",headerText:c._("Your DocuSign account has restricted access"),detailText:c._("It looks like your DocuSign account does not have permission to send envelopes. Please contact your DocuSign admin."),buttonTitle:c._("Close"),buttonOnClick:f})}),["/static/css/app_actions/status_page-vflmjPk7l.css","/static/css/spectrum/index.web-vfl_-DzRS.css"]),t.NoWritePermissionPage=i.requireCssWithComponent((function(e){return s.default.createElement(g,{illustrationName:"403_error-illo",headerText:c._("Oops... something went wrong"),detailText:c._("You do not have access to update files in this folder."),buttonTitle:c._("Close"),buttonOnClick:f})}),["/static/css/app_actions/status_page-vflmjPk7l.css","/static/css/spectrum/index.web-vfl_-DzRS.css"]),t.UnverifiedEmailPage=i.requireCssWithComponent((function(e){return s.default.createElement(g,{illustrationName:"illo-catbox",headerText:c._("Verify Your Email"),detailText:c._("In order to perform this action, Dropbox needs to verify your email address to share links."),buttonTitle:c._("Verify Email"),buttonOnClick:function(){return t=e.role,void u.EmailVerification.getForRole(t).show_verify_modal(null,p.GENERIC);var t}})}),["/static/css/app_actions/status_page-vflmjPk7l.css","/static/css/spectrum/index.web-vfl_-DzRS.css","/static/css/account/emails-vflrQjLwE.css","/static/css/maestro_layout-vfl8iOurw.css","/static/css/upsell/prompt_pagelet-vflxH9dv-.css","/static/css/notify-vfl8J3o-i.css"]),t.FileTooLargePage=i.requireCssWithComponent((function(e){var t,a=e.maxFileSize,i=Number(a),o=(t=i,isFinite(t)&&t>0?c._("The file you selected is larger than the supported %(supported_value)dMB. Please try again with a smaller file.").format({supported_value:i.toString(10)}):c._("The file you selected is larger than supported. Please try again with a smaller file."));return s.default.createElement(g,{illustrationName:"illo-catbox",headerText:c._("Can’t open file"),detailText:o,buttonTitle:c._("Return to Dropbox"),buttonOnClick:f})}),["/static/css/app_actions/status_page-vflmjPk7l.css","/static/css/spectrum/index.web-vfl_-DzRS.css"]),t.RootComponent=function(e){var a=d.unpack(e.encodedProto,m.extensions.StatusPageProps);switch(a.pageType){case m.extensions.StatusPageProps.PageType.DEFAULT:return s.default.createElement(t.AppActionsErrorPage,null);case m.extensions.StatusPageProps.PageType.QUOTA:return s.default.createElement(t.AppActionsOverQuotaPage,{isTeam:a.isTeam});case m.extensions.StatusPageProps.PageType.DOCUSIGN:return s.default.createElement(t.DocuSignPermissionDeniedPage,null);case m.extensions.StatusPageProps.PageType.ACCESS:return s.default.createElement(t.NoWritePermissionPage,null);case m.extensions.StatusPageProps.PageType.UNVERIFIED_EMAIL:return s.default.createElement(t.UnverifiedEmailPage,{role:a.role});case m.extensions.StatusPageProps.PageType.FILE_TOO_LARGE:return s.default.createElement(t.FileTooLargePage,{maxFileSize:Number(a.maxFileSize)})}}}));
//# sourceMappingURL=status_page.min.js-vflT6mma0.map