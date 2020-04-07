define(["require","exports","modules/core/i18n","modules/clean/datetime","modules/clean/previews/util","modules/clean/react/pass/constants","modules/constants/file_viewer"],(function(e,n,s,a,t,i,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.buildSeenStateTemplate=function(e){return e.isActive?s._("<b>%(user_name)s</b> %(newline)s Viewing now",{comment:'Format like "user_name <newline> Viewing now"'}):null!=e.whenLastSeen?(function(e){var n=s._("<b>%(user_name)s</b> %(newline)s Viewed %(ago)s",{comment:'Format like "userName <newline> Viewed 5 days ago'});if(t.shouldShowPlatformInfo()){var o=e.platformType;o===i.PassPlatform.DESKTOP?n=s._("<b>%(user_name)s</b> %(newline)s Viewed %(ago)s %(newline)s on desktop",{comment:'Format like "userName <newline> Viewed 5 days ago <newline> on desktop'}):o===i.PassPlatform.WEB?n=s._("<b>%(user_name)s</b> %(newline)s Viewed %(ago)s %(newline)s on web",{comment:'Format like "userName <newline> Viewed 5 days ago <newline> on web'}):o===i.PassPlatform.MOBILE&&(n=s._("<b>%(user_name)s</b> %(newline)s Viewed %(ago)s %(newline)s on mobile",{comment:'Format like "userName <newline> Viewed 5 days ago <newline> on mobile'}))}return n.replace("%(ago)s",a.ago(1e3*e.whenLastSeen,!1,!0,!0))})(e):(function(e){switch(e){case"owner":return s._("<b>%(user_name)s</b> %(newline)s Owner",{comment:'Format like "user_name <newline> Owner"'});case"writer":return s._("<b>%(user_name)s</b> %(newline)s Can edit",{comment:'Format like "user_name <newline> Can edit"'});case"reader":return s._("<b>%(user_name)s</b> %(newline)s Can comment",{comment:'Format like "user_name <newline> Can comment"'});case"reader_no_comment":case void 0:return s._("<b>%(user_name)s</b> %(newline)s Can view",{comment:'Format like "user_name <newline> Can view"'})}})(e.accessLevel)},n.buildSeenStateMessage=function(e){return n.buildSeenStateTemplate(e).replace("<b>","").replace("</b>","").replace("%(newline)s","").replace("%(user_name)s","").trim()},n.getOnVsOffTeamExperiment=function(){return o.ON_VS_OFF_TEAM_PREVIEWS_EXPERIMENT in["ON","LIMITED"]},n.getOnVsOffTeamLimitedVariant=function(){return"LIMITED"===o.ON_VS_OFF_TEAM_PREVIEWS_EXPERIMENT},n.notOnTeamLabel=s._("Outside %(teamname)s"),n.inviteToTeamLabel=s._("Invite to team"),n.joinTeamLabel=s._("Join team"),n.onTeamLabel=s._("Member of %(teamname)s"),n.buildTeamExpandReasons=function(e){var n=[];return e&&(n.push(s._("Content stays within the team",{comment:"refers to benefits when users join a Dropbox Business Team"})),n.push(s._("They’ll get instant access to files",{comment:"refers to benefits when users join a Dropbox Business Team"})),n.push(s._("Enough space to do their work",{comment:"refers to benefits when users join a Dropbox Business Team"}))),n}}));
//# sourceMappingURL=tooltip_helpers.min.js-vflVPYsnp.map