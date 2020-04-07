define(["require","exports","tslib","react","spectrum/button","spectrum/tertiary_link","spectrum/admin_link","spectrum/icon_media","spectrum/popover","spectrum/facepile/facepile_members_avatar","spectrum-sharing/components/sharing_portal_dropdown","spectrum-sharing/components/icons/icon_dropdown_caret","modules/core/i18n","modules/clean/analytics","modules/clean/viewer","modules/clean/react/member_sidebar_actions","modules/clean/user_education/react/user_education_effect","modules/clean/teams/admin/maestro/admin_console_constants","modules/clean/teams/admin/widgets/resend_invite_modal/resend_invite_modal"],(function(e,a,t,n,r,o,i,l,m,s,c,d,u,_,p,f,g,b,v){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),n=t.__importDefault(n);a.MemberRow=function(e){var a=e.id,t=e.userId,i=e.avatarUrl,g=e.empty,b=e.showInvited,E=e.displayName,h=e.roleLabel,N=e.actionsData,y=e.initials,I=e.email,A=e.optionGroup,k=e.onChange,C=e.handleOnClose,M={user_id:t,module_name:"first_task_imm",framework:"team_setup_essential"},T=N&&new f.MemberInviteSidebarActions(N).getActionsItems(),L=n.default.createElement(n.default.Fragment,null,E),S=p.Viewer.get_viewer().work_user;return S&&t===S.id?L=n.default.createElement(n.default.Fragment,null,u.intl.formatMessage(u._("%(displayName)s <b>(You)</b>",{project:"growth-exps",comment:"This string appears after the current user's name on the invite member modal member list."}),{displayName:E,b:function(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];return n.default.createElement("b",null,e)}})):b&&I&&(L=n.default.createElement(n.default.Fragment,null,u.intl.formatMessage(u._("%(displayName)s<row> · Invited · </row><link>Resend invite</link>"),{displayName:E,row:function(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];return n.default.createElement("span",{className:"member-row__dot"},e)},link:function(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];return n.default.createElement(o.TertiaryLink,{className:"member-row__invite-button",onClick:function(){_.TeamsWebActionsLogger.log("admin_resend_email_invite_open",M);var e=function(e){void 0===e&&(e=!1),_.TeamsWebActionsLogger.log(e?"admin_resend_email_invite":"admin_resend_email_invite_cancel",M),N&&N.onClose&&N.onClose()};v.showResendInviteModal({userId:t,email:I,onRequestClose:e,onPrimaryAction:function(){return e(!0)},onSecondaryAction:e}),C()}},e)}}))),n.default.createElement("div",{id:a,className:"member-row "+(g?"member-row--empty":"")},n.default.createElement(s.FacepileMembersAvatar,{avatarColorSeed:E,avatarSize:32,initials:y||"",photoUrl:i,active:!0,disabled:!0}),n.default.createElement("div",{className:"member-row__text-container"},n.default.createElement("div",{className:"member-row__name"},L),I&&n.default.createElement("div",{className:"member-row__email"},I)),A&&k&&n.default.createElement(c.SharingPortalDropdown,{id:a,optionGroup:A,onSelection:k}),!A&&n.default.createElement("span",{className:"member-row__admin-text"},h,g&&n.default.createElement(d.IconDropdownCaretWeb,{className:"scl-sharing-portal-dropdown-icon"})),g?n.default.createElement(r.Button,{tagName:"span",variant:"borderless",disabled:!0,className:"member-row__gear"},n.default.createElement(l.IconMedia,{name:"gear"})):n.default.createElement(m.Popover,{onMenuToggle:function(){_.TeamsWebActionsLogger.log("member_gear_menu_open",M)},onSelection:function(e){_.TeamsWebActionsLogger.log(e.actionId+"_open",M),e.handleClick((function(){_.TeamsWebActionsLogger.log(e.actionId+"_cancel",M)})),C()}},n.default.createElement(m.PopoverTrigger,null,n.default.createElement(r.Button,{tagName:"span",variant:"borderless",className:"member-row__gear","aria-label":u._("Options for team member %(name)s").format({name:E})},n.default.createElement(l.IconMedia,{name:"gear"}))),n.default.createElement(m.PopoverContent,{attachment:"right"},T&&T.map(w))))};var w=function(e){var a,t=e.disabled,r=e.actionId,l=e.displayName,s=e.handleClick,c=e.iconName,d=e.groupName;return(d=d||b.IconGroup.Admin)===b.IconGroup.Admin?a=i.AdminTertiaryLink:d===b.IconGroup.Action&&(a=o.TertiaryLink),n.default.createElement(m.PopoverSelectableItem,{value:{handleClick:s,actionId:r},key:l},n.default.createElement(a,{icon:c,disabled:t,className:"secondary-action-menu__button"},n.default.createElement(g.UserEducationEffect,{containerName:"AdminConsoleActionsView",name:"SecondaryActionMenu-text-"+c},l)))}}));
//# sourceMappingURL=invite_modal_member_row.min.js-vfl23cL-S.map