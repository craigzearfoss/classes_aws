define(["require","exports","tslib","react","modules/clean/react/montana/in_product_modal/in_product_modal_components","modules/clean/react/montana/in_product_modal/plus/plus_education_slides","modules/core/i18n"],(function(e,t,a,i,n,c,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i=a.__importStar(i),t.PlusEducationMenuMonthly=function(e){var t=e.createSlideClickHandler,a=e.selectedIndex,l=e.quotaShort,u=e.vacuumingPolicyMaxDays;return i.createElement(n.EducationFeatures,{title:o._("What’s new")},i.createElement(n.EducationFeaturesList,null,i.createElement(n.EducationFeaturesListItem,{isSelected:a===c.SLIDES.SmartSync,onClick:t(c.SLIDES.SmartSync),title:o._("Pack away stale files"),subtitle:o._("Move them to the cloud")}),i.createElement(n.EducationFeaturesListItem,{isSelected:a===c.SLIDES.MoreSpace,onClick:t(c.SLIDES.MoreSpace),title:o._("Double your storage"),subtitle:o._("Save everything with %(quota)s").format({quota:l})}),i.createElement(n.EducationFeaturesListItem,{isSelected:a===c.SLIDES.Rewind,onClick:t(c.SLIDES.Rewind),title:o._("Rewind accidental edits"),subtitle:o._("Undo changes up to %(vacuuming_policy_max_days)s days").format({vacuuming_policy_max_days:u})})))}}));
//# sourceMappingURL=plus_education_menu_monthly.min.js-vflKgF36a.map