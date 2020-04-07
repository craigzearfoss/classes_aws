define(["require","exports","tslib","react","modules/core/i18n"],(function(e,t,r,s,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=(function(e){function t(t){return e.call(this,t)||this}return r.__extends(t,e),t.prototype.render=function(){var e=this.props.currentStep>1;return s.default.createElement("div",{className:"rewind-graph-title-container"},s.default.createElement("div",{className:"rewind-step-header"},e?s.default.createElement("a",{className:"rewind-step-back",onClick:this.props.onGoBack,href:"javascript:;"},"‹"):s.default.createElement("span",{className:"rewind-step-back"}),n._("%(current_step)s of %(max_step)s:",{project:"folder-history",comment:'This is the step the user is in the rewind process. e.g. the "1 of 3" in "1 of 3: Choose a date"'}).format({current_step:this.props.currentStep,max_step:this.props.maxStep})," ",s.default.createElement("strong",null,this.props.instructions)))},t})((s=r.__importDefault(s)).default.Component);t.RewindStepHeader=a}));
//# sourceMappingURL=rewind_step_header.min.js-vflMBChvh.map