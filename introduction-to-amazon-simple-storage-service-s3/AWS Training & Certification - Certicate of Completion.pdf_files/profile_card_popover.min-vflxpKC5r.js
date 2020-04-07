define(["require","exports","tslib","react","react-redux","modules/core/user_i18n","deep-integrations/platform/server/localization","deep-integrations/platform/server/service_selection_menu","deep-integrations/platform/server/tooltip","modules/clean/integrations/profile_card","modules/clean/redux/namespaces","modules/clean/redux/selectors","reselect","modules/core/browser","modules/clean/react/pass/tooltip_helpers","modules/clean/integrations/email","modules/clean/integrations/notify","modules/clean/integrations/url_adapter"],(function(e,t,r,i,o,n,a,l,s,u,c,p,d,f,m,_,v,S){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i=r.__importDefault(i),o=r.__importStar(o),n=r.__importStar(n);var g=(function(e){function t(t){return e.call(this,t)||this}return r.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.userInfo,o=e.fileInfo,c=r.__rest(e,["userInfo","fileInfo"]),p="dbx_user";return t.isViewer?p="viewer":-1!==t.key.indexOf("@")?p="unverified_email":t.key.startsWith("dbafvid:")&&(p="guest"),i.default.createElement(u.StatefulProfileCardWithWrapper,r.__assign({targetUser:{account_id:t.key,display_name:t.displayName,type:p,email:t.email},file:o,localization:a.localization,seenState:m.buildSeenStateMessage(t),isActive:t.isActive,initials:n.getInitials(t.displayName),photoUrl:t.photoUrl,tooltip:s.WebTooltip,platform:"web",urlBuilder:S.UrlAdapter,openDropboxUrl:f.open_tab,openExternalUrl:f.unsafe_open_tab,openEmailLink:_.composeEmail,serviceSelectionMenu:l.DefaultServiceSelectionMenu,notify:v.notify},c))},t})(i.default.Component);t.ProfileCardPopoverComponent=g;var y=d.createSelector([function(e){return p.getStateAtNamespace(e,c.INTEGRATIONS_NAMESPACE_KEY)}],(function(e){return e}));t.ProfileCardPopover=o.connect((function(e){return{listServices:y(e).listServices,featureGates:{}}}))(g)}));
//# sourceMappingURL=profile_card_popover.min.js-vflArNOOV.map