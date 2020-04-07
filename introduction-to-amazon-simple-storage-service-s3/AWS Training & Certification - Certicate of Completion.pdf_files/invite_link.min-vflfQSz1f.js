define(["require","exports","tslib","react","modules/clean/viewer","modules/clean/analytics","spectrum/dropdown_menu","spectrum/input","spectrum/tertiary_link","modules/core/i18n","spectrum/button","file-transfers/common/helpers","modules/core/notify"],(function(e,i,t,n,o,l,a,r,s,c,d,m,p){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),n=t.__importDefault(n);var _=c.i18n_default_project("invite-link")._,u=_("Choose how long it’ll work"),k=new Map([[259200,{title:_("Link will work for 3 days"),logTitle:"3d"}],[604800,{title:_("Link will work for 7 days"),logTitle:"7d"}],[1209600,{title:_("Link will work for 14 days"),logTitle:"14d"}],[2592e3,{title:_("Link will work for 30 days"),logTitle:"30d"}]]),v=[259200,604800,1209600,2592e3],f=(function(e){function i(i){var t=e.call(this,i)||this;return t.getDefaultSelectedItem=function(){return t.props.isNcct?2592e3:604800},t.onSelect=function(e){t.setState({selectedItem:e}),l.TeamsWebActionsLogger.log("invite_member_open_expiration_dropdown_pick",{expiration_period:k.get(e).logTitle})},t.onLinkExpirationMenuToggle=function(e){e.isOpen&&l.TeamsWebActionsLogger.log("invite_member_open_expiration_dropdown_open")},t.onCreateLinkClick=function(){var e=t.props.emails;t.props.teamRoutes.rpc("create_invite_link",{link_life_span:t.state.selectedItem},{subjectUserId:o.Viewer.get_viewer().work_user.id}).then((function(i){var n;void 0!==t.props.onInviteLinkCreate&&t.props.onInviteLinkCreate(i.invite_link_url,i.time_expired,i.invite_token),void 0!==t.props.onUpdateModal&&t.props.onUpdateModal(e),!0===t.props.isTrial?n="trial":!1===t.props.isTrial&&(n="paid"),l.TeamsWebActionsLogger.log("invite_member_open_create_link",{expiration_period:k.get(t.state.selectedItem).logTitle,expires_on:i.time_expired,usage_limit:t.props.numRemainingLicenses,link_url:i.invite_link_url,trial_or_paid:n})})).catch((function(e){p.Notify.error(_("Failed to create invite link."))}))},t.onCopyLink=function(e){var i="",n=t.props,o=n.isTrial,a=n.isNcct,r=n.isInviteLinkGaEnabled;!0===o?i="trial":!1===t.props.isTrial&&(i="paid"),l.TeamsWebActionsLogger.log("invite_member_open_copy_link",{expiration_period:k.get(t.state.selectedItem).logTitle,link_url:t.props.inviteLinkUrl,expires_on:t.props.inviteLinkExpiredTs,usage_limit:t.props.numRemainingLicenses,trial_or_paid:i}),m.copyToClipboard(e),a||!r?p.Notify.success(_("Link copied and ready to share")):p.Notify.success(_("Link copied. Remember you’ll need 1 license for each member."))},t.onCopyLinkClick=function(){var e=t.props.inviteLinkUrl;e&&t.onCopyLink(e)},t.onDeleteClick=function(){var e=t.props,i=e.inviteToken,n=e.emails,a=e.inviteLinkUrl;null!=i&&t.props.teamRoutes.rpc("delete_invite_link",{invite_token:i},{subjectUserId:o.Viewer.get_viewer().work_user.id}).then((function(){void 0!==t.props.onInviteLinkDelete&&t.props.onInviteLinkDelete(),void 0!==t.props.onUpdateModal&&t.props.onUpdateModal(n),l.TeamsWebActionsLogger.log("invite_member_open_delete_link",{link_url:a}),p.Notify.success(_("Link deleted. People can no longer join your team with this link."))})).catch((function(e){p.Notify.error(_("Failed to delete invite link."))}))},t.onAddMoreLicensesClick=function(){t.props.showAddLicenses&&(t.props.showAddLicenses(),l.TeamsWebActionsLogger.log("invite_member_open_add_more_licenses"))},t.state={selectedItem:t.getDefaultSelectedItem()},t}return t.__extends(i,e),i.prototype.componentDidUpdate=function(e){this.props.isNcct!==e.isNcct&&this.setState({selectedItem:this.getDefaultSelectedItem()})},i.prototype.getInviteLinkLifeSpanOptions=function(){var e=this;return v.map((function(i){var t=k.get(i).title;return n.default.createElement(a.MenuItem,{key:i,value:i,selected:i===e.state.selectedItem},t)}))},i.prototype.render=function(){var e=this,i=this.getInviteLinkLifeSpanOptions(),t=null,o=n.default.createElement("hr",{className:"invite-modal__invite_link_divider"}),l=this.props,m=l.inviteLinkUrl,p=l.inviteLinkExpiredTs,v=l.inviteToken,f=null!=m&&null!=p&&null!=v,h=n.default.createElement("p",{className:"invite-modal__invite_link_header"},_("Invite with a link",{comment:"This appears as a section label for the form input fields to create or delete an invite link"})),g=_("Add more licenses",{comment:"This appears as the screen reader friendly title of an action button - admins will click on this to add more licenses"}),b=c.intl.formatMessage(this.props.isInviteLinkGaEnabled?_("To invite members with a link, <Link>add licenses</Link>.",{comment:'"Add more licenses" appears as a clickable link - admins will click this link to open a dialog box to add more licenses.'}):_("<Link>Add more licenses</Link> to use an invite link.",{comment:'"Add more licenses" appears as a clickable link - admins will click this link to open a dialog box to add more licenses.'}),{Link:function(){for(var i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];return n.default.createElement(s.TertiaryLink,{className:"invite-modal__invite_link_inline_action_button",onClick:e.onAddMoreLicensesClick,"aria-label":g},i)}}),L=this.props,y=L.numRemainingLicenses,w=L.isNcct,T=L.isInviteLinkGaEnabled,E=L.isLoadingNumRemainingLicenses,I=!E&&(y>0||w);if(f){var N=new Date(1e3*p).toLocaleString(void 0,{year:"numeric",month:"short",day:"numeric"}),x=_("People can join your team through this link until %(expiration_date_time)s.").format({expiration_date_time:N}).toString();T&&(x=_("While licenses are available, members can join through this link until %(expiration_date_time)s.").format({expiration_date_time:N}),w&&(x=_("Members can join through this link until %(expiration_date_time)s.").format({expiration_date_time:N})));j=I?x:b;var C=_("Delete link",{comment:"This appears on an action button - admins will click this button to delete an invite link"}),M=n.default.createElement(s.TertiaryLink,{className:"invite-modal__invite_link_inline_action_button--delete",onClick:this.onDeleteClick,"aria-label":C},C),A=_("Copy link",{comment:"This appears on an action button - admins will click on this button to copy the associated link to their clipboard."});t=n.default.createElement("div",null,h,n.default.createElement("div",{className:"invite-modal__invite_link_action_bar"},n.default.createElement(r.Input,{className:"invite-modal__invite_link","aria-label":_("Invite link url",{comment:"This appears as the screen reader friendly label of an invite link (a URL that admins can send to potential team members to join their Dropbox team)"}),value:m,disabled:!0,fullWidth:!0}),n.default.createElement("div",{className:"invite-modal__invite_link_action_button"},n.default.createElement(d.Button,{onClick:this.onCopyLinkClick,variant:"secondary",title:A,disabled:!I},A))),!E&&n.default.createElement("div",{className:"invite-modal__invite_link_secondary_action_bar"},n.default.createElement("span",{className:"invite-modal__invite_link_description"},j)," ",M),o)}else{var D=this.state.selectedItem,j=_("People can join your team through this link.");T&&(j=_("Members can join your team through this link while licenses are available"),w&&(j=_("Members can join your team through this link"))),I||(j=b);var S=_("Create link",{comment:"This appears on an action button - admins will click this button to create an invite link"});t=n.default.createElement("div",null,h,n.default.createElement("div",{className:"invite-modal__invite_link_action_bar"},n.default.createElement("div",{className:"invite-modal__invite_link_expiration"},n.default.createElement(a.DropdownMenu,{disabled:!I,onSelection:this.onSelect,onMenuToggle:this.onLinkExpirationMenuToggle,fullWidth:!0},n.default.createElement(a.DropdownMenuButton,{fullWidth:!0},E?u:k.get(D).title),n.default.createElement(a.Menu,null,i))),n.default.createElement("div",{className:"invite-modal__invite_link_action_button"},n.default.createElement(d.Button,{onClick:this.onCreateLinkClick,variant:"secondary",title:S,disabled:!I},S))),!E&&n.default.createElement("div",{className:"invite-modal__invite_link_secondary_action_bar"},n.default.createElement("span",{className:"invite-modal__invite_link_description"},j)),o)}return t},i.defaultProps={isLoadingNumRemainingLicenses:!1},i})(n.default.PureComponent);i.InviteLink=f}));
//# sourceMappingURL=invite_link.min.js-vflEfUM1Z.map