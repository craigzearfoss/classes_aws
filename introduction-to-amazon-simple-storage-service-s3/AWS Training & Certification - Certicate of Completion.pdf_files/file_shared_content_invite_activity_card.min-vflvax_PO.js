define(["require","exports","tslib","react","modules/core/i18n","modules/clean/react/file_activity_stream/display_name","modules/clean/react/file_activity_stream/utils","modules/clean/react/file_viewer/share_helpers","modules/clean/react/file_activity_stream/file_activity_stream_card","modules/clean/sharing/constants"],(function(e,t,r,n,a,s,i,o,l,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=r.__importDefault(n),o=r.__importStar(o);var c=a._("Can view",{comment:"used to explain what permissions a user has on a file"}),m=a._("Can comment",{comment:"used to explain what permissions a user has on a file"}),d=a._("Can edit",{comment:"used to explain what permissions a user has on a file"}),g={view_name_only:c,traverse:c,reader_no_comment:c,reader:m,writer:d,owner:d},h=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onShareSettingsClick=function(){o.share(t.props.file,t.props.viewingUser,null,u.SHARE_ACTION_ORIGIN_TYPE.PREVIEW_PAGE)},t}return r.__extends(t,e),t.prototype.message=function(e){var t=this.props.activity.user;if(i.isViewingUser(this.props)){if(1===e.length)return a.intl.formatMessage(a._("<strong>You</strong> shared this file with <strong>%(entity)s</strong>"),{strong:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.default.createElement("strong",null,e)},entity:e[0]});if(e.length>1)return a.intl.formatMessage(a.ungettext("<strong>You</strong> shared this file with <strong>%(entity)s</strong> and <strong>1 other</strong>","<strong>You</strong> shared this file with <strong>%(entity)s</strong> and <strong>%(count)s others</strong>",e.length-1),{strong:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.default.createElement("strong",null,e)},entity:e[0],count:e.length-1})}else{if(1===e.length)return a.intl.formatMessage(a._("<strong>%(name)s</strong> shared this file with <strong>%(entity)s</strong>"),{strong:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.default.createElement("strong",null,e)},entity:e[0],name:t.display_name});if(e.length>1)return a.intl.formatMessage(a.ungettext("<strong>%(name)s</strong> shared this file with <strong>%(entity)s</strong> and <strong>1 other</strong>","<strong>%(name)s</strong> shared this file with <strong>%(entity)s</strong> and <strong>%(count)s others</strong>",e.length-1),{strong:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.default.createElement("strong",null,e)},entity:e[0],count:e.length-1,name:t.display_name})}return null},t.prototype.renderSharedUser=function(e,t){return n.default.createElement(l.FileActivityStreamCard.Detail,{key:e.id,user:e},n.default.createElement(l.FileActivityStreamCard.Detail.Entity,{title:n.default.createElement(s.DisplayName,{user:e}),detail:g[t]}))},t.prototype.renderSharedGroup=function(e,t){return n.default.createElement(l.FileActivityStreamCard.Detail,{key:e.id,group:e},n.default.createElement(l.FileActivityStreamCard.Detail.Entity,{title:e.name,detail:g[t]}))},t.prototype.renderSharedEmail=function(e,t){return n.default.createElement(l.FileActivityStreamCard.Detail,{key:e,email:e},n.default.createElement(l.FileActivityStreamCard.Detail.Entity,{title:e,detail:g[t]}))},t.prototype.render=function(){var e=this,t=this.props.activity,s=t.shared_users.slice(),o=t.shared_emails.slice(),u=t.shared_groups.slice();s.sort((function(e,t){return i.userDisplayName(e).localeCompare(i.userDisplayName(t))})),o.sort(),u.sort((function(e,t){return e.name.localeCompare(t.name)}));var c=r.__spreadArrays(s.map((function(e){return i.userDisplayName(e)})),o,u.map((function(e){return e.name}))),m=this.message(c);return n.default.createElement(l.FileActivityStreamCard,{user:t.user,timestamp:t.timestamp,action:{text:a._("Sharing settings"),onClick:this.onShareSettingsClick},message:m},s.map((function(r){return e.renderSharedUser(r,t.access_type)})),o.map((function(r){return e.renderSharedEmail(r,t.access_type)})),u.map((function(r){return e.renderSharedGroup(r,t.access_type)})))},t})(n.default.Component);t.FileSharedContentInviteActivityCard=h}));
//# sourceMappingURL=file_shared_content_invite_activity_card.min.js-vfllrrG5r.map