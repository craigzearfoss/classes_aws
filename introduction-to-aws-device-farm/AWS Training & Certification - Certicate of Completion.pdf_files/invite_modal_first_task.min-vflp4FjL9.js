define(["require","exports","tslib","react","react-intl","spectrum/modal","modules/core/i18n","modules/clean/analytics","modules/clean/static_urls","modules/clean/ux_analytics_modal_tracking","modules/clean/viewer","modules/constants/page_load","modules/clean/react/image","modules/clean/teams/constants","modules/clean/teams/modals/team_admin_roles_modal","modules/clean/teams/admin/widgets/admin_permissions_modal/admin_permissions_modal","modules/clean/teams/admin/widgets/invite_modal/invite_modal_member_row","modules/clean/teams/admin/widgets/invite_modal/invite_modal_sidebar","modules/clean/react/growth/first_task/first_task","modules/clean/react/member_sidebar_actions"],(function(e,a,i,s,t,n,l,o,m,r,d,_,c,u,p,g,b,v,f,E){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),s=i.__importDefault(s);var w=d.Viewer.get_viewer(),N=l._("Member",{project:"growth-exps",comment:"This string appears on a dropdown menu option of the invite members modal. The 'Member' option is revoking Admin permissions."}),h=l._("Admin");function A(e){return null!=e&&e!==u.ADMIN_ROLE.NONE}var C=function(e){var a=e.baseClass,t=e.tieredAdmin,n=e.memberList,r=e.memberActionsData,d=e.loggingExtras,_=e.handleOnClose,v=["option-member","option-admin"],f=v[0],C=v[1],M={enabled:!0,id:"role-dropdown",options:[{apiId:f,label:N,tooltip:l._("Can view, edit, delete, comment on, and save files")},{apiId:C,label:h,tooltip:l._("Member, but can invite and manage team members")}]};return s.default.createElement("div",{className:a+"__members"},s.default.createElement("div",{className:a+"__members-header"},s.default.createElement(c.Image,{src:m.static_url("/static/images/growth/team-vfl8WprcF.svg"),className:a+"__members-image"}),l.intl.formatMessage(l._("Members of %(team)s"),{team:w.team_name})),n.map((function(e,a){var n=r&&r[e.user_id],c=A(e.admin_role)?C:f,v=(function(e,a){return void 0===a&&(a=!1),e?A(e.admin_role)?a&&u.ADMIN_ROLE_NAMES[e.admin_role]||h:N:l._("Select between member or admin")})(e,t);return s.default.createElement(b.MemberRow,{key:a,id:"member-row-"+a,userId:e.user_id,showInvited:e.team_join_state===E.JoinState.PENDING,avatarUrl:e.team_join_state!==E.JoinState.PENDING?e.photo_url||"":m.static_url("/static/images/growth/member-vflJ3QUg7.svg"),displayName:e.display_name,roleLabel:v,initials:e.initials,email:e.email,actionsData:n,handleOnClose:_,onChange:function(a){if(a!==c||t&&a===C){_();var s=a===C?"granted":"revoked",l=i.__assign(i.__assign({},d),{user_id:e.user_id});o.TeamsWebActionsLogger.log(s+"_admin_permissions_open",i.__assign({},l));var m=function(){o.TeamsWebActionsLogger.log(s+"_admin_permissions_cancel",i.__assign({},l))};t?p.showTeamAdminRolesModal({userId:e.user_id,displayName:e.display_name,isAdmin:A(e.admin_role),origAdminRole:null!=e.admin_role?e.admin_role:u.ADMIN_ROLE.NONE,success:function(a){if(o.TeamsWebActionsLogger.log(s+"_admin_permissions",i.__assign({},l)),n&&n.roleUpdateCallback){var t=JSON.parse(a)[e.user_id].admin_role;n.roleUpdateCallback(t)}},onRequestClose:n&&n.onClose,onSecondaryAction:m}):g.showAdminPermissionsModal({userId:e.user_id,displayName:e.display_name,enablePermissions:"option-admin"===a,limited:!1,team_id:w.team_id,onPrimaryAction:function(){if(o.TeamsWebActionsLogger.log(s+"_admin_permissions",i.__assign({},l)),n&&n.roleUpdateCallback){var e="option-admin"===a?u.ADMIN_ROLE.SUPER:u.ADMIN_ROLE.NONE;n.roleUpdateCallback(e)}},onRequestClose:n&&n.onClose,onSecondaryAction:m})}},optionGroup:w.work_user.id!==e.user_id?i.__assign(i.__assign({},M),{selectedApiId:c,label:v}):void 0})})),1===n.length&&s.default.createElement(b.MemberRow,{id:"empty-row",userId:-1,empty:!0,avatarUrl:m.static_url("/static/images/growth/single-vflQ4gh9g.svg"),displayName:l._("Your team members will show up here"),roleLabel:N,handleOnClose:_}))};a.FirstTaskInviteModal=function(e){var a=e.baseClass,i=e.showSidebar,o=e.memberList,m=e.emails,d=e.sentEmails,c=e.handleOnClose,u=e.focusRef,p=e.open,g=1===o.length?l._("Invite team members"):l._("Manage team members");return s.default.createElement(t.IntlProvider,{defaultLocale:"en-US",locale:l.localeToBcp47LangTag(_.USER_LOCALE)},s.default.createElement(n.Modal,{open:p,ariaLabel:l._("Invite Members"),displayCloseButton:!0,onRequestClose:function(){d.length&&f.showClinkTooltip(f.TooltipType.Members),c()},overlayClickClose:!0,width:i?960:699,overflowY:!0,focusedElementOnOpen:u,appElement:document.body,bodyClassName:"invite-modal "+a+" "+(i?a+"--sidebar-visible":"")},s.default.createElement(r.UXAnalyticsModalTracking,{id:"invite-modal"}),s.default.createElement("div",{className:a+"__container"},s.default.createElement("div",{className:a+"__content"},s.default.createElement("div",{className:a+"__title"},g),s.default.createElement("div",{className:a+"__invite-content"},e.children),C(e)),i&&s.default.createElement(v.InviteModalSidebar,{baseClass:a,memberList:o,emails:m,sentEmails:d}))))}}));
//# sourceMappingURL=invite_modal_first_task.min.js-vflM04gh8.map