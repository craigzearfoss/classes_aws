define(["require","exports","tslib","react","external/lodash","modules/core/i18n","modules/clean/api_v2/default_user_client","modules/clean/react/file_activity_stream/thirdparty_activity_onboarding_card","modules/clean/react/file_sidebar/store/file_activity/types","modules/clean/logging/telemetry","modules/clean/logging/hive/schemas/web-ecosystem_integration_events","modules/clean/react/file_activity_stream/utils"],(function(e,t,n,r,o,i,a,s,c,u,l,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r=n.__importDefault(r),o=n.__importStar(o),u=n.__importStar(u);var _=(function(e){function t(t){var n=e.call(this,t)||this;return n.mounted=!1,n.getMessage=function(){return i.intl.formatMessage(i._("<strong>Connect apps</strong> to Dropbox and see what’s happening with your file in other apps."),{strong:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return r.default.createElement("strong",null,e)}})},n.onConnectClick=function(){(new u.HiveLogger).log(new l.EcosystemIntegrationLoggingTableRow({event_name:l.EventName.onboardingCardConnect})),d.thirdPartyActivityShowAppStoreModal(n.props.user)},n.handleDismiss=function(){n.mounted=!0,n.dismissCard().then((function(){n.mounted&&((new u.HiveLogger).log(new l.EcosystemIntegrationLoggingTableRow({event_name:l.EventName.onboardingCardDismissed})),n.setState({mountCard:!1}))}))},n.state={mountCard:!1},n}return n.__extends(t,e),t.prototype.render=function(){return this.state.mountCard?r.default.createElement(s.OnboardingCard,{text:this.getMessage(),connectAppsButtonText:i._("Connect apps"),dismissButtonText:i._("Not now"),onConnect:this.onConnectClick,onDismiss:this.handleDismiss}):null},t.prototype.dismissCard=function(){return n.__awaiter(this,void 0,void 0,(function(){return n.__generator(this,(function(e){switch(e.label){case 0:return[4,new a.DefaultUserApiV2Client(this.props.user).ns("integrations").rpc("add_dismiss_prompts",{prompts:[{".tag":"thirdparty_activity_onboarding"}]},{})];case 1:return[2,e.sent()]}}))}))},t.prototype.componentDidMount=function(){var e=this;this.mounted=!0,p(this.props.activities,this.props.user,m,f).then((function(t){e.mounted&&e.setState({mountCard:t})}))},t.prototype.componentWillUnmount=function(){this.mounted=!1},t})(r.default.Component);t.ThirdpartyActivityOnboardingComponent=_;function g(e){return n.__awaiter(this,void 0,void 0,(function(){return n.__generator(this,(function(t){switch(t.label){case 0:return[4,new a.DefaultUserApiV2Client(e).ns("profile_services").rpc("list_services",void 0,{})];case 1:return[2,t.sent()]}}))}))}function m(e){return n.__awaiter(this,void 0,Promise,(function(){var t;return n.__generator(this,(function(n){switch(n.label){case 0:return[4,new a.DefaultUserApiV2Client(e).ns("integrations").rpc("get_user_settings",{},{})];case 1:return t=n.sent(),[2,o.some(t.dismissed_prompts,[".tag","thirdparty_activity_onboarding"])]}}))}))}function p(e,t,r,i){return n.__awaiter(this,void 0,void 0,(function(){var a,s,d,_,g;return n.__generator(this,(function(n){switch(n.label){case 0:return a=o.filter(e,(function(e){return"slack_link_share"===e.type})),s=o.filter(e,(function(e){return"zoom_screen_share"===e.type})),d=o.filter(e,(function(e){return"trello_file_activity"===e.type})),_=new u.HiveLogger,a.length>0&&o.some(a,["slack_conversation_type",c.SlackConversationType.redacted_viewer_not_slack_connected])?(_.log(new l.EcosystemIntegrationLoggingTableRow({event_name:l.EventName.onboardingCardViewed,extra:{user_onboarding:"false"}})),[2,!0]):s.length>0&&o.some(s,["zoom_screen_share_type",c.ZoomScreenShareType.redacted_viewer_not_zoom_connected])?(_.log(new l.EcosystemIntegrationLoggingTableRow({event_name:l.EventName.onboardingCardViewed,extra:{user_onboarding:"false"}})),[2,!0]):d.length>0?[4,i(t,"trello")]:[3,2];case 1:if(n.sent())return _.log(new l.EcosystemIntegrationLoggingTableRow({event_name:l.EventName.onboardingCardViewed,extra:{user_onboarding:"false"}})),[2,!0];n.label=2;case 2:return a.length>0&&s.length>0&&d.length>0?[2,!1]:[4,i(t,"all")];case 3:return n.sent()?[4,r(t)]:[2,!1];case 4:return(g=n.sent())||_.log(new l.EcosystemIntegrationLoggingTableRow({event_name:l.EventName.onboardingCardViewed,extra:{user_onboarding:"true"}})),[2,!g]}}))}))}function f(e,t){return n.__awaiter(this,void 0,Promise,(function(){var r;return n.__generator(this,(function(n){switch(n.label){case 0:return[4,g(e)];case 1:return r=n.sent(),[2,"all"===t?v(r):h(t,r)]}}))}))}function v(e){if(void 0===e)return!1;var t=h("slack_dropbox",e),n=h("zoom",e),r=h("trello",e);return t||n||r}function h(e,t){var n=o.find(t.services,(function(t){return t.service_type[".tag"]===e}));return void 0!==n&&("enabled"===n.service_availability[".tag"]&&"is_connected"!==n.connection_state[".tag"])}t.shouldRenderCard=p,t.userHasNotConnectedToService=f,t.userHasNotConnectedToAllApps=v}));
//# sourceMappingURL=thirdparty_activity_onboarding_logic.min.js-vflH25Y52.map