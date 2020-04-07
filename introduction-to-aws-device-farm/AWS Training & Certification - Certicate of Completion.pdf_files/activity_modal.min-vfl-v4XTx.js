define(["require","exports","tslib","react","rondo-modal/v1/utility_modal","modules/clean/react/modal","modules/core/i18n","modules/clean/teams/admin/pages/activity/activity_modal/left_pane","modules/clean/teams/admin/pages/activity/activity_modal/main_pane","rondo-react/v1/index","modules/clean/teams/admin/pages/activity/behaviors/activity_modal_behavior"],(function(t,e,a,i,c,o,n,l,d,r,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i=a.__importDefault(i),e.ActivityModal=function(t){var e=t.search,a=t.allCategories,r=t.filteredCategories,s=t.actionCheckActivity,m=t.actionCheckCategory,v=t.actionHighlight,u=t.actionSearch,y=t.actionOnSubmit,f=t.actionClear,_=t.actionClose,g=t.countChecked,p=g?n.ungettext("Add %(count)d activity","Add %(count)d activities",g).format({count:g}):n._("Add activity"),A=function(){_(),o.Modal.close()};return i.default.createElement(c.UtilityModal,{className:"activity-modal",title:n._("Add activities to filter"),primaryAction:p,secondaryAction:n._("Cancel"),open:!0,actionAccept:function(){y(),A()},actionCancel:A,actionClose:function(){},actionOpen:function(){},valid:g>0,ariaLabel:n._("Activity Filter"),link:n._("Clear activities"),onLink:f},i.default.createElement("div",{className:"activity-modal-wrapper"},i.default.createElement(l.LeftPane,{categories:a,onSelect:v,disabled:!!e}),i.default.createElement(d.MainPane,{search:e,categories:r,onSearch:u,onSelectActivity:s,onSelectCategory:m,onScroll:v})))},e.ActivityModalWidget=r.widget(s.ActivityModalBehavior,e.ActivityModal)}));
//# sourceMappingURL=activity_modal.min.js-vflPAbeEl.map