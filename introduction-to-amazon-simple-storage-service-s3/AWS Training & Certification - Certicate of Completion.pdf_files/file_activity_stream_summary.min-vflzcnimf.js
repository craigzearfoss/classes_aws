define(["require","exports","tslib","react","modules/clean/react/file_activity_stream/file_activity_stream_card_factory","modules/clean/react/file_activity_stream/thirdparty_activity_onboarding_logic","modules/clean/react/file_sidebar/store/file_activity/actions","modules/clean/react/file_activity_stream/tti_logger","modules/clean/react/file_sidebar/store/file_activity/selectors","modules/clean/react/css","modules/clean/react/file_sidebar/file_sidebar_connect","spectrum/button","modules/core/i18n"],(function(e,t,i,a,r,s,l,n,c,o,u,m,f){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=i.__importDefault(a),l=i.__importStar(l),c=i.__importStar(c);var d=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onRefreshClick=function(e){var i=t.props,a=i.dispatch,r=i.file,s=i.user;a(l.reset()),a(l.getActivityStream(s.id,r))},t}return i.__extends(t,e),t.prototype.render=function(){var e=this,t=this.props,i=t.activities,l=t.file,c=t.user,o=t.maxVisibleActivityCards;if(!i||i.loading)return null;if(0===i.value.length)return i.error?a.default.createElement("div",{className:"file_activity_summary-message"},f.intl.formatMessage(f._("Can’t load activity—<button>refresh the page</button> to try again."),{button:function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return a.default.createElement(m.Button,{"aria-label":f._("refresh the page"),variant:"styleless",className:"button-as-link",onClick:e.onRefreshClick},t)}})):l.ts&&Math.floor(Date.now()/1e3)-l.ts>=7776e3?a.default.createElement("div",{className:"file_activity_summary-message"},f._("No one worked with this file in the past 3 months.")):a.default.createElement("div",{className:"file_activity_summary-message"},f._("When people work with this file, you’ll see their activity here."));var u=i.value.slice(0,o),d=this.props.disableOnboardingCard?null:a.default.createElement(s.ThirdpartyActivityOnboardingComponent,{activities:i.value,user:c}),_=a.default.createElement("div",{className:"file_activity_stream"},d,u.map((function(e){return a.default.createElement(r.FileActivityStreamCardFactory,{key:e.id,activity:e,file:l,viewingUser:c})})));return n.faStreamTTILogger.recordInteractive(l.file_id),_},t})(a.default.Component);t.FileActivityStreamSummaryComponent=d,t.FileActivityStreamSummary=u.fileSidebarConnect((function(e){var t=c.getActivitiesMetadata(e);return{activities:i.__assign({},t)}}))(o.requireCssWithComponent(d,["/static/css/file_activity_stream-vflpewEtF.css"]))}));
//# sourceMappingURL=file_activity_stream_summary.min.js-vflzhVItv.map