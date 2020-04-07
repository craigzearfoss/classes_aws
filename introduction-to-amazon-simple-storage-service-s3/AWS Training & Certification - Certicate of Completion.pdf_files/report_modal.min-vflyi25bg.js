define(["require","exports","tslib","react","modules/clean/datetime","modules/clean/teams/admin/pages/activity/filters/types","modules/core/i18n","spectrum/checkbox","spectrum/label","rondo-modal/v1","modules/clean/teams/admin/pages/activity/filters/filters"],(function(e,t,a,l,i,r,n,s,c,d,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),l=a.__importDefault(l);var m=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.accept=function(){var e=t.props,a=e.actionCreateReport,l=e.excludeFileEvents;a({fields:e.filterValues,excludeFileEvents:l})},t}return a.__extends(t,e),t.prototype.render=function(){var e,t=this.props,m=t.date,u=t.members,f=t.file,v=t.activities,p=t.filterValues,E=t.showExcludeFileEvents,y=t.excludeFileEvents,_=t.actionExcludeFileEvents,N=t.participants,k=t.isFederation,h=a.__rest(t,["date","members","file","activities","filterValues","showExcludeFileEvents","excludeFileEvents","actionExcludeFileEvents","participants","isFederation"]),b=(function(e){return e?i.format_date(new Date(e.from),i.localized_date_format)+" ― "+i.format_date(new Date(e.to),i.localized_date_format):""})(m),x=(function(e){return e?e.map((function(e){return e.content.name?e.content.name:e.content.email})).join(", "):""})(u),F=(function(e){return e?e.map((function(e){return e.label})).join(", "):""})(v),C=k?p&&p.teams&&p.teams[0]?p.teams.map((function(e){return e.content})).map((function(e){return e.name})).join(", "):n._("All teams"):"",w=0!==(e=N)?e===r.InvolveNoneTeamMembers.YES?o.Participants[r.InvolveNoneTeamMembers.YES]:o.Participants[r.InvolveNoneTeamMembers.NO]:"";return l.default.createElement(d.UtilityModal,a.__assign({},h,{actionAccept:this.accept,primaryAction:n._("Create report"),secondaryAction:n._("Cancel"),title:n._("Create activity report"),ariaLabel:n._("Create activity report"),className:"report"}),l.default.createElement("div",null,n._("The report will be saved as a CSV in a folder called Dropbox Business reports. We’ll email you when the report is ready.")),l.default.createElement("div",{className:"report-info"},l.default.createElement("div",{className:"report-info-title"},n._("The report includes the following:")),l.default.createElement("div",{className:"filters"},""!==b&&[l.default.createElement("div",{className:"filter-key",key:"1"},n._("Date:")),l.default.createElement("div",{className:"filter-value",key:"11"},b)],""!==x&&[l.default.createElement("div",{className:"filter-key",key:"2"},n._("Members:")),l.default.createElement("div",{className:"filter-value",key:"21"},x)],f&&[l.default.createElement("div",{className:"filter-key",key:"3"},n._("Content:")),l.default.createElement("div",{className:"filter-value",key:"31"},f)],""!==F&&[l.default.createElement("div",{className:"filter-key",key:"4"},n._("Activities:")),l.default.createElement("div",{className:"filter-value",key:"41"},F)],""!==C&&[l.default.createElement("div",{className:"filter-key"},n._("Teams:")),l.default.createElement("div",{className:"filter-value"},C)],""!==w&&[l.default.createElement("div",{className:"filter-key",key:"6"},n._("Participants:")),l.default.createElement("div",{className:"filter-value",key:"61"},w)])),E&&l.default.createElement(c.Label,{htmlFor:"exclude-file-events",className:"exclude-file-events-label"},l.default.createElement(s.Checkbox,{"aria-checked":!0,id:"exclude-file-events",checked:y?"checked":"unchecked",onChange:_}),l.default.createElement("div",{className:"exclude-file-events-label-parts"},l.default.createElement("div",{className:"exclude-file-events-label-primary"},n._("Exclude activities in File operations")),l.default.createElement("div",{className:"exclude-file-events-label-secondary"},n._("This creates the report faster")))))},t})(l.default.Component);t.ReportModal=m}));
//# sourceMappingURL=report_modal.min.js-vflJvASRJ.map