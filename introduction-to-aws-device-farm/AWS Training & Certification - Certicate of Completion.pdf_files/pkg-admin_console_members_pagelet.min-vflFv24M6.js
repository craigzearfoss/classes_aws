define("modules/clean/components/modals/show_modal",["require","exports","tslib","react","react-dom","modules/clean/ux_analytics_utils"],(function(e,a,t,o,s,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),o=t.__importDefault(o),s=t.__importStar(s);var r=(function(e){function a(a){var t=e.call(this,a)||this;return t.onRequestClose=function(){var e=o.default.Children.only(t.props.children);e.props.onRequestClose&&e.props.onRequestClose(),t.setState({open:!1})},t.state={open:!0},t}return t.__extends(a,e),a.prototype.componentDidUpdate=function(e,a){a.open!==this.state.open&&(this.state.open?n.dispatchModalOpened():n.dispatchModalClosed())},a.prototype.render=function(){return this.state.open?o.default.cloneElement(o.default.Children.only(this.props.children),{onRequestClose:this.onRequestClose}):null},a})(o.default.Component);a.ModalStateHandler=r;a.showModal=function(e){var a=(function(){var e=document.getElementById("modal-parent");return e||((e=document.createElement("DIV")).id="modal-parent",document.getElementsByTagName("body")[0].appendChild(e)),e})();s.unmountComponentAtNode(a),s.render(o.default.createElement(r,null,e),a)}})),define("modules/clean/react/teams/avatar/components",["require","exports","tslib","classnames","react","react-dom-factories","prop-types","modules/clean/avatar/avatar_with_default","modules/clean/avatar/initials_avatar","modules/core/browser","modules/core/user_i18n"],(function(e,a,t,o,s,n,r,i,l,d,m){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),o=t.__importDefault(o),s=t.__importDefault(s),n=t.__importStar(n),r=t.__importStar(r),i=t.__importDefault(i),d=t.__importStar(d),m=t.__importStar(m);var c=s.default.createElement,u=(function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return a.onPhotoClick=function(){return a.props.onClick?a.props.onClick():d.redirect(a.props.href)},a}return t.__extends(a,e),a.prototype.render=function(){var e=o.default({"u-l-fl":!0,"u-mar-left-xs":!this.props.noMargin}),a=o.default({"team-avatar-photo":!0,clickable:null!=this.props.href,"team-avatar-photo-override":Boolean(this.props.message)}),t=o.default({"team-avatar-component":!0,"team-avatar-component-override":Boolean(this.props.message)}),s=this.props.message&&this.props.message.split("\n").map((function(e){return n.span({},e,n.br())})),r=this.props.name&&this.props.name.length>0?this.props.name:this.props.email,d=this.props.onClick?n.a({className:"team-avatar-link",onClick:this.props.onClick},r):this.props.href?n.a({className:"team-avatar-link",href:this.props.href},r):r;return n.span({className:t},n.span({className:a},c(i.default,{dimension:32,photoUrl:this.props.photo_url,optionalClass:e,defaultAvatar:c(l.InitialsAvatarWithColorDerivedFromName,{dimension:32,name:this.props.name||this.props.email,initials:m.getInitials(this.props.name||this.props.email),shape:"CIRCLE",optionalClass:e}),onPhotoClick:this.props.href||this.props.onClick?this.onPhotoClick:void 0})),this.props.hideInfo?void 0:this.props.message?n.div({className:"team-avatar-group"},n.span({className:""},n.span({className:o.default({"team-avatar-name":!0,"team-avatar-name--improved-visibility":this.props.show_pending_members})},d),n.span({className:"team-avatar-email"},this.props.email)),n.p({className:"team-avatar-message"},s)):n.span({className:"team-avatar-info"},n.span({className:o.default({"team-avatar-name":!0,"team-avatar-name--improved-visibility":this.props.show_pending_members})},d),n.span({className:"team-avatar-email"},this.props.email)),this.props.noMargin?void 0:n.div({className:"team-avatar-spacer"}))},a.displayName="TeamUserAvatar",a.propTypes={name:r.string,email:r.string,photo_url:r.string,href:r.string,hideInfo:r.bool,noMargin:r.bool,message:r.string,onClick:r.func,show_pending_members:r.bool},a})(s.default.Component);a.TeamUserAvatar=u})),define("modules/clean/teams/admin/widgets/admin_permissions_modal/admin_permissions_modal",["require","exports","tslib","react","react-dom-factories","modules/core/i18n","modules/clean/teams/admin/modals/action_utility_modal","modules/clean/viewer","modules/clean/components/modals/show_modal","modules/clean/teams/admin/modals/modal_ajax","modules/clean/teams/constants","modules/constants/trademark"],(function(e,a,t,o,s,n,r,i,l,d,m,c){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),o=t.__importDefault(o),s=t.__importStar(s),a.AdminPermissionsModal=function(e){e.userId;var a=e.displayName,i=e.enablePermissions,l=e.limited,d=e.removeOwnPermission,m=void 0!==d&&d,u=e.onRequestClose,p=void 0===u?function(){}:u,_=e.onPrimaryAction,f=void 0===_?function(){}:_,h=e.onSecondaryAction,y=void 0===h?function(){}:h,v=(i?n._("Add admin permissions for %(display_name)s"):n._("Remove admin privileges from %(display_name)s")).format({display_name:a}),b=i?n._("Add admin permissions"):n._("Remove admin permissions"),A=n.intl.formatMessage((function(e,a,t){return!e&&a?n._("Are you sure you want to add admin permissions for %(display_name)s?"):e||a?e&&a?n._("Are you sure you want to give admin permissions to %(display_name)s? All users with admin permissions will be able to upgrade this team to <businessLink>%(trademark_business)s</businessLink>."):t?n._("If you remove your admin permissions, you’ll no longer be able to upgrade or delete your team, change team settings, or remove invited and existing users."):n._("%(display_name)s won’t be able to manage team settings, remove and un-invite users, or upgrade the team to <businessLink>%(trademark_business)s</businessLink>. Are you sure you want to continue?"):n._("Are you sure you want to remove admin permissions from %(display_name)s?")})(l,i,m),{display_name:a,trademark_business:c.TRADEMARK_BUSINESS,businessLink:function(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];return s.a.apply(s,t.__spreadArrays([{href:"/business"}],e))}});return o.default.createElement(r.ActionUtilityModal,{className:"admin-status-modal",title:v,id:"admin-permissions-modal",primaryAction:b,onPrimaryAction:f,onSecondaryAction:y,onRequestClose:p},A)},a.CHANGE_ADMIN_PERMISSION_URL="/account/team/set_admin_status",a.SUCCESS_NOTIFY=function(e,a){return(a?n._("Admin permissions added to %(display_name)s"):n._("Admin permissions removed from %(display_name)s")).format({display_name:e})},a.AdminPermissionsModalAction=function(e){var o=e.userId,s=e.displayName,n=e.enablePermissions,r=e.limited,l=e.team_id,c=e.removeOwnPermission,u=t.__rest(e,["userId","displayName","enablePermissions","limited","team_id","removeOwnPermission"]),p=r?{user_id:o,on:n?"yes":"no",role:m.ADMIN_ROLE.LIMITED,team_id:l}:{user_id:o,on:n?"yes":"no"};return d.modalAjax({modal:a.AdminPermissionsModal,ajax:{url:a.CHANGE_ADMIN_PERMISSION_URL,data:p,subject_user:i.Viewer.get_viewer().work_user},notify:{successNotify:a.SUCCESS_NOTIFY(s,n)}})(t.__assign({userId:o,displayName:s,enablePermissions:n,limited:r,team_id:l,removeOwnPermission:c},u))},a.showAdminPermissionsModal=function(e){return l.showModal(o.default.createElement(a.AdminPermissionsModalAction,t.__assign({},e)))}})),define("modules/clean/teams/locked_team",["require","exports","modules/clean/teams/modals/locked_state_feature_blocking_modal"],(function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.blockForLockedTeam=function(e,a){return e?t.showLockedStateFeatureBlockingModal:a}})),define("modules/clean/teams/modals/locked_state_feature_blocking_modal",["require","exports","tslib","react","spectrum/modal","modules/clean/components/modals/show_modal","modules/constants/trademark","modules/core/browser","modules/core/i18n"],(function(e,a,t,o,s,n,r,i,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),o=t.__importDefault(o),i=t.__importStar(i);var d=(function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return a.state={open:!0},a.onPrimaryAction=function(){i.redirect("/team/decide")},a.close=function(){a.setState({open:!1})},a}return t.__extends(a,e),a.prototype.render=function(){var e=l._("Your team no longer has full use of %(trademark_business)s features. Add your billing info now and you can pick up right where you left off.").format({trademark_business:r.TRADEMARK_BUSINESS});return o.default.createElement(s.UtilityModal,{className:"locked-state-feature-blocking-modal",title:l._("Action disabled"),primaryAction:l._("See next steps"),secondaryAction:l._("Cancel"),onPrimaryAction:this.onPrimaryAction,onSecondaryAction:this.close,overlayClickClose:!1,ariaLabel:l._("Action disabled"),open:this.state.open},e)},a})(o.default.Component);a.LockedStateFeatureBlockingModal=d,a.showLockedStateFeatureBlockingModal=function(){return n.showModal(o.default.createElement(d,null))}})),define("modules/clean/teams/modals/recover_user_modal",["require","exports","tslib","react","modules/clean/components/modals/show_modal","modules/clean/teams/modals/member_info_modal_header","modules/core/i18n","modules/clean/viewer","modules/clean/teams/admin/modals/modal_ajax","modules/clean/teams/admin/modals/action_utility_modal","modules/clean/react/css"],(function(e,a,t,o,s,n,r,i,l,d,m){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),o=t.__importDefault(o);var c=function(e){var a;return a=e?r._("To give this member access to their account again, reactivate their account after restoring it."):r._("We’ll email this member to let them know they can sign in again."),o.default.createElement("div",{className:"recover_content"},(function(e){var a,t;return e?(t=r._("Because this member was suspended when they were deleted, they’ll still be suspended after the account is restored."),a="recover_content_suspended_user"):(t=r._("This member will be able to access the files, shared folders, and groups they had when their account was deleted."),a="recover_content_active_user"),o.default.createElement("p",{className:a},t)})(e),o.default.createElement("p",{className:"recover_next_steps"},a,o.default.createElement("a",{className:"learn_more",href:"/help/business/recover-deleted-users",target:"_blank",rel:"noopener noreferrer"},r._("Learn more"))))};a.RecoverUserModal=function(e){var a=e.displayName,t=e.email,s=e.teamJoinDate,i=e.storageUsed,l=e.accountPhotoUrl,m=e.isUserSuspended,u=e.onRequestClose,p=void 0===u?function(){}:u,_=e.onPrimaryAction,f=void 0===_?function(){}:_,h=e.onSecondaryAction,y=void 0===h?function(){}:h,v=r._("Restore %(display_name)s’s account").format({display_name:a});return o.default.createElement(d.ActionUtilityModal,{className:"recover-user-modal",title:v,width:"698px",primaryAction:r._("Restore account"),onPrimaryAction:f,onSecondaryAction:y,onRequestClose:p,ariaLabel:r._("Active Member")},o.default.createElement(n.MemberInfoModalHeader,{displayName:a,email:t,storageUsed:i,accountPhotoUrl:l,teamJoinDate:s}),c(m))},a.RECOVER_USER_URL="/account/team/recover_user",a.SUCCESS_NOTIFY=function(e){return r._("Restored %(display_name)s").format({display_name:e})},a.RecoverUserModalActionNoCss=function(e){var o=e.displayName,s=e.email,n=e.userId,r=e.accountId,d=e.teamJoinDate,m=e.storageUsed,c=e.accountPhotoUrl,u=e.isUserSuspended,p=e.teamAuthParams,_=e.successCallback,f=t.__rest(e,["displayName","email","userId","accountId","teamJoinDate","storageUsed","accountPhotoUrl","isUserSuspended","teamAuthParams","successCallback"]);return l.modalAjax({modal:a.RecoverUserModal,ajax:{url:a.RECOVER_USER_URL,data:{user_id:n,account_id:r},subject_user:i.Viewer.get_viewer().work_user,teamAuthParams:p},notify:{successNotify:a.SUCCESS_NOTIFY(o)}})(t.__assign({displayName:o,email:s,teamJoinDate:d,storageUsed:m,accountPhotoUrl:c,isUserSuspended:u,success:_},f))},a.RecoverUserModalAction=m.requireCssWithComponent(a.RecoverUserModalActionNoCss,["/static/css/spectrum/index.web-vfl_-DzRS.css","/static/css/teams/admin_team_modals-vfl1__Dze.css"]),a.showRecoverUserModal=function(e){return s.showModal(o.default.createElement(a.RecoverUserModalAction,t.__assign({},e)))}})),define("modules/clean/teams/admin/modals/action_utility_modal",["require","exports","tslib","react","modules/core/i18n","spectrum/modal","modules/clean/ux_analytics_utils","modules/clean/ux_analytics_modal_tracking"],(function(e,a,t,o,s,n,r,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=(function(e){function a(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(a,e),a.prototype.onReady=function(){r.dispatchModalOpened()},a.prototype.render=function(){var e=this.props,a=e.title,s=e.ariaLabel,l=e.secondaryAction,d=e.children,m=t.__rest(e,["title","ariaLabel","secondaryAction","children"]);s=s||a;var c=r.getModalId({id:this.props.id});return o.default.createElement(n.UtilityModal,t.__assign({title:a,ariaLabel:s,open:!0,secondaryAction:l,overlayFixed:!0,overlayClickClose:!1,onReady:this.onReady},m),o.default.createElement(i.UXAnalyticsModalTracking,{id:c}),d)},a.defaultProps={secondaryAction:s._("Cancel")},a})((o=t.__importDefault(o)).default.Component);a.ActionUtilityModal=l})),define("modules/clean/teams/admin/modals/alert_utility_modal",["require","exports","tslib","react","spectrum/modal"],(function(e,a,t,o,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=(function(e){function a(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(a,e),a.prototype.render=function(){var e=this.props,a=e.title,n=e.ariaLabel,r=e.children,i=t.__rest(e,["title","ariaLabel","children"]);return n=n||a,o.default.createElement(s.UtilityModal,t.__assign({title:a,ariaLabel:n,open:!0,secondaryAction:function(){return o.default.createElement("div",null)},overlayFixed:!0,overlayClickClose:!1},i),r)},a})((o=t.__importDefault(o)).default.Component);a.AlertUtilityModal=n})),define("modules/clean/teams/admin/modals/modal_ajax",["require","exports","tslib","react","external/lodash","redux","react-redux","redux-thunk","modules/clean/redux/unsupported","modules/clean/redux/devtools","rondo/v1/slice_actions","modules/clean/teams/admin/modals/modal_ajax/index"],(function(e,a,t,o,s,n,r,i,l,d,m,c){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),o=t.__importDefault(o),s=t.__importStar(s),i=t.__importDefault(i),a.modalAjax=function(e){var a=e.modal,u=e.ajax,p=e.notify,_=e.fields,f=void 0===_?{}:_,h=e.autoCloseOnError,y=void 0===h||h,v=c.createModalActions(f),b=c.createReducer(f),A=u.data,g=c.formActions(f,u,p,A).actionSubmit,U=n.applyMiddleware(i.default),C=l.createStore(b,d.composeEnhancersWithDevTools(U)),M=r.connect(s.identity,m.bindActionCreators(v),(function(e,a,t){return s.merge({},e,a,t)}))(a);return function(e){var a=e.success,n=void 0===a?s.identity:a,i=e.error,l=void 0===i?s.identity:i,d=e.onPrimaryAction,m=void 0===d?s.noop:d,c=e.onSecondaryAction,u=void 0===c?s.noop:c,p=e.onRequestClose,_=void 0===p?s.noop:p,f=function(e,a){return void 0===a&&(a=!0),function(t){return m(),a?(_(),e(t)):e(t,_),t}};return o.default.createElement(r.Provider,{store:C},o.default.createElement(M,t.__assign({},e,{onPrimaryAction:function(){return C.dispatch(g(f(n),f(l,y)))},onRequestClose:_,onSecondaryAction:function(){u(),_()}})))}}})),define("modules/clean/teams/modals/unsuspend_user_modal",["require","exports","tslib","react","modules/clean/teams/admin/modals/action_utility_modal","modules/clean/components/modals/show_modal","modules/clean/teams/modals/member_info_modal_header","modules/core/i18n","modules/clean/viewer","modules/clean/teams/admin/modals/modal_ajax","modules/clean/react/css"],(function(e,a,t,o,s,n,r,i,l,d,m){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),o=t.__importDefault(o),a.UnsuspendUserModal=function(e){var a=e.displayName,t=e.email,n=e.teamJoinDate,l=e.storageUsed,d=e.accountPhotoUrl,m=e.onRequestClose,c=void 0===m?function(){}:m,u=e.onPrimaryAction,p=void 0===u?function(){}:u,_=e.onSecondaryAction,f=void 0===_?function(){}:_,h=i._("Unsuspend %(display_name)s’s account").format({display_name:a}),y=i._("Unsuspend account"),v=i._("We’ll let %(display_name)s know their account has been unsuspended. This means they’ll have full access to everything in their account again.").format({display_name:a});return o.default.createElement(s.ActionUtilityModal,{className:"unsuspend-user-modal",title:h,primaryAction:y,onPrimaryAction:p,onSecondaryAction:f,onRequestClose:c},o.default.createElement(r.MemberInfoModalHeader,{displayName:a,email:t,storageUsed:l,accountPhotoUrl:d,teamJoinDate:n}),o.default.createElement("div",{className:"unsuspend-user-content"},v))},a.UNSUSPEND_USER_URL="/account/team/unsuspend_user",a.UnsuspendUserModalActionWithoutCSS=function(e){var o=e.userId,s=e.accountId,n=e.displayName,r=e.teamAuthParams,m=e.successCallback,c=t.__rest(e,["userId","accountId","displayName","teamAuthParams","successCallback"]);return d.modalAjax({modal:a.UnsuspendUserModal,ajax:{url:a.UNSUSPEND_USER_URL,data:{user_id:o,account_id:s},subject_user:l.Viewer.get_viewer().work_user,teamAuthParams:r},notify:{successNotify:i._("Unsuspended %(name)s").format({name:n})}})(t.__assign({userId:o,displayName:n,success:m},c))},a.UnsuspendUserModalAction=m.requireCssWithComponent(a.UnsuspendUserModalActionWithoutCSS,["/static/css/teams/admin_team_modals-vfl1__Dze.css"]),a.showUnsuspendUserModal=function(e){return n.showModal(o.default.createElement(a.UnsuspendUserModalAction,t.__assign({},e)))}}));
//# sourceMappingURL=pkg-admin_console_members_pagelet.min.js-vfl3Iqp7B.map