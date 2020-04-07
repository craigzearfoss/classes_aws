define(["require","exports","tslib","classnames","react-redux","react","spectrum/button","spectrum/popover","spectrum/tooltip","modules/clean/filepath","modules/clean/filetypes","modules/clean/integrations/data/selectors","modules/clean/react/app_actions/apis","modules/clean/react/app_actions/redirect","modules/clean/react/app_actions/education/types","modules/clean/react/app_actions/telemetry_client","modules/clean/react/css","modules/clean/react/extensions/connect_flow","modules/clean/react/extensions/data/action_creators","modules/clean/react/extensions/data/selectors","modules/clean/react/extensions/data/store","modules/clean/react/extensions/data/types","modules/clean/react/extensions/tooltips","modules/clean/react/extensions/extensions_scaling_modal","modules/clean/react/extensions/utils","modules/clean/react/extensions/extensions_utils","modules/clean/react/extensions/data/helpers","modules/clean/react/file_viewer/constants","modules/clean/react/file_viewer/file_preview_event_emitter","modules/clean/react/file_viewer/models","modules/clean/react/file_viewer/open_button/types","modules/clean/react/file_viewer_sidebar/buttons/icon","modules/clean/react/portal_popover","modules/clean/static_urls","modules/constants/file_viewer","modules/core/i18n","external/lodash","modules/clean/react/extensions/menu_content_item","modules/clean/react/extensions/menu_survey","modules/clean/react/extensions/feature_flags","modules/clean/cloud_docs/constants","modules/clean/react/extensions/common"],(function(e,t,n,o,r,i,a,s,l,p,c,u,d,h,_,g,m,S,f,v,A,O,T,E,I,y,P,x,b,C,k,N,w,L,B,M,F,R,U,D,H,V){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o=n.__importDefault(o),i=n.__importStar(i);var Z="TOOLTIP_ONLY"===B.FILES_2_COLLAPSED_SHARE_COPY_TOOLTIP_CHANGES,G="COPY_ONLY"===B.FILES_2_COLLAPSED_SHARE_COPY_TOOLTIP_CHANGES,Y="COPY_AND_TOOLTIP"===B.FILES_2_COLLAPSED_SHARE_COPY_TOOLTIP_CHANGES;A.getStore();var q=(function(e){function t(t){var r=e.call(this,t)||this;return r.handleClickShare=function(e){e.preventDefault(),r.props.onShowShare(),r.props.logShareButtonClick&&r.props.logShareButtonClick(),r.currentSession&&r.currentSession.event("click_share",{trigger_type:r.props.triggerType}),e.stopPropagation()},r.handleSelectAction=function(e,t){t.preventDefault(),e.handler(),r.props.logShareButtonClick&&r.props.logShareButtonClick(e.userAction),V.logEvent(r.currentSession,"select_action",{type:e.type,trigger_type:r.props.triggerType}),t.stopPropagation()},r.handlePreventMouseDown=function(e){e.preventDefault(),r.state.tooltipState===_.TooltipState.BIG_ONBOARDING_TOOLTIP&&(r.markSplitShareTooltipViewed(),r.setState({tooltipState:_.TooltipState.NO_TOOLTIP})),e.stopPropagation()},r.handlePopoverHover=function(){r.currentSession&&r.currentSession.event("popover_trigger_hover",{trigger_type:r.props.triggerType})},r.handleShareHover=function(){r.currentSession&&r.currentSession.event("share_hover",{trigger_type:r.props.triggerType})},r.handlePopoverToggle=function(e){var t=e.isOpen,n=r.props,o=n.onDropdownOpen,i=n.onDropdownClose,a=n.triggerType,s=n.isCollapsed;if(t&&o?o():!t&&i&&i(),r.currentSession&&r.currentSession.event(t?"open_popover":"close_popover",{trigger_type:a}),t){var l=s?x.EventType.SidebarCollapsedShareClicked:x.EventType.SidebarOpenedShareClicked;b.filePreviewEventEmitter.emit(l,C.FilePreviewSession.currentSession)}},r.handlePresentInZoom=function(e,t){var n=r.props,o=n.refreshSharingServiceInfo,i=n.sharingServiceInfo,a=n.onPresentInZoom,s=n.landingPageEnabled;i&&o&&a&&S.presentInZoomFlow(e,i,o,a,"split_share_button",s,t)},r.handleShareInSlack=function(e,t,n){var o=r.props,i=o.refreshSharingServiceInfo,a=o.sharingServiceInfo,s=o.landingPageEnabled;a&&i&&S.shareInSlackFlow(t,a,i,e,"split_share_button",s,n)},r.handleShareToTrello=function(e,t,n){var o=r.props,i=o.refreshSharingServiceInfo,a=o.sharingServiceInfo,s=o.landingPageEnabled;a&&i&&S.shareInTrelloFlow(t,a,i,e,"split_share_button",s,n)},r.handleUpdateLinkState=function(e,t){(0,r.props.updateLinkState)({actionId:e,linkState:t})},r.handleAppAction=function(e,t,n){var o=r.props,i=o.context,a=o.featureFlags;h.redirectToActionOrShowAuth(t,e,n,a,i,r.handleUpdateLinkState,r.handleShareAction),V.logEvent(r.currentSession,"select_action",V.getAppActionExtras(n))},r.handleShareAction=function(e,t,n){var o=n.handler.service_type[".tag"],i={".tag":"profile_linked"},a=function(){r.handleUpdateLinkState(n.id,i),h.authorizeNoRedirect(e,n.id)};switch(o){case"slack_dropbox":return r.handleShareInSlack(t,e,a);case"zoom":return r.handlePresentInZoom(e,a);case"trello":return r.handleShareToTrello(t,e,a)}},r.getAppActionIconUrl=function(e){var t=e.icon;return t&&t.url&&!t.is_static?t.url:L.static_url("/static/images/generic_app_icon-vflIPYT1H.png")},r.getAppActionOpenOptionActions=function(e){var t=e.handler;if("profile_service"!==t[".tag"])return{type:k.OpenButtonAction.APP_ACTION,userAction:x.UserAction.ShareToAction};switch(t.service_type[".tag"]){case"slack_dropbox":return{type:k.OpenButtonAction.SHARE_TO_SLACK,userAction:x.UserAction.ShareToSlack};case"zoom":return{type:k.OpenButtonAction.PRESENT_IN_ZOOM,userAction:x.UserAction.PresentInZoom};case"trello":return{type:k.OpenButtonAction.SHARE_TO_TRELLO,userAction:x.UserAction.ShareToTrello};default:return{type:k.OpenButtonAction.APP_ACTION,userAction:x.UserAction.ShareToAction}}},r.getAppActionOpenOption=function(e,t,n){var o=r.getAppActionOpenOptionActions(n),i=o.type,a=o.userAction;return{handler:function(){return r.handleAppAction(e,t,n)},spriteName:null,text:n.description,type:i,userAction:a,iconUrl:r.getAppActionIconUrl(n)}},r.getMoreAppsOpenOption=function(e,t){return{handler:function(){r.handleMoreApps(e,t),V.logEvent(r.currentSession,"select_show_more",{})},text:M._("Connect more apps"),type:k.OpenButtonAction.OPEN_MORE_APPS,userAction:x.UserAction.OpenMoreApps,spriteName:null}},r.getAddAppsOpenOption=function(e,t){return{handler:function(){r.handleMoreApps(e,t),V.logEvent(r.currentSession,"select_add_apps",{})},text:M._("Connect apps"),type:k.OpenButtonAction.OPEN_ADD_APPS,userAction:x.UserAction.OpenAddApps,spriteName:null,iconUrl:L.static_url("/static/images/extensions/circled_plus-vfl7N2-Lg.svg")}},r.handleMoreApps=function(e,t){var n=r.props,o=n.appActions,i=n.featureFlags,a=n.context,s=n.categoryInfo,l=y.getCategoryIdToInfos(s);E.showExtensionsScalingModal(M._("Share with these apps"),t,e,o.sort(P.actionCompareFn),l,i,r.handleUpdateLinkState,a,r.currentSession,r.handleShareAction)},r.getSharingServiceOpenOptions=function(e,t){var n=r.props,o=n.onPresentInZoom,i=n.refreshSharingServiceInfo,a=n.sharingServiceInfo,s=[];if(!a)return s;I.isSlackAvailable(a)&&!e.is_dir&&s.push({handler:function(){return r.handleShareInSlack(e,t)},spriteName:null,text:M._("Share in Slack"),type:k.OpenButtonAction.SHARE_TO_SLACK,userAction:x.UserAction.ShareToSlack,iconUrl:L.static_url("/static/images/thirdparty/slack_icon_circle-vfl4S6f-q.svg")}),I.isTrelloAvailable(a)&&s.push({handler:function(){return r.handleShareToTrello(e,t)},spriteName:null,text:M._("Add to Trello"),type:k.OpenButtonAction.SHARE_TO_TRELLO,userAction:x.UserAction.ShareToTrello,iconUrl:L.static_url("/static/images/thirdparty/trello_icon-vfl-FetdA.svg")});var l=!(e.type!==c.FileTypes.FILE&&e.file_type!==c.FileTypes.FILE||e.is_cloud_doc||e.is_symlink);return I.isZoomAvailable(a)&&o&&i&&l&&!e.is_dir&&s.push({handler:function(){return r.handlePresentInZoom(t)},spriteName:null,text:M._("Present in Zoom"),type:k.OpenButtonAction.PRESENT_IN_ZOOM,userAction:x.UserAction.PresentInZoom,iconUrl:L.static_url("/static/images/thirdparty/zoom_icon_transparent_background-vflJC8HYC.svg")}),s},r.getShareWithEmailOpenOption=function(){var e=r.props,t=e.onShowShare,n=e.featureFlags.expRealignMenu,o=D.shouldRealignMenu(n),i=G||Y;return{handler:t,spriteName:null,text:o||i?M._("Share with Dropbox"):M._("Invite via email"),type:k.OpenButtonAction.INVITE_VIA_EMAIL,userAction:x.UserAction.InviteViaEmail,iconUrl:o||i?L.static_url("/static/images/logo_catalog/logo_m1-vfl4RBXCG.png"):L.static_url("/static/images/extensions/shared_medium-vfldEW5Iw.svg")}},r.getPopoverTriggerRenderer=function(e,t,n){return function(){var s=G||Y?i.default.createElement("img",{alt:"",src:L.static_url("/static/images/extensions/shared_light-vfl8nVEY_.svg")}):i.default.createElement(N.ButtonIcon,{isPrimary:"primary"===r.getButtonVariant(),name:"share","aria-label":n}),p=i.default.createElement(a.Button,{className:o.default("extensions-split-share-menu__trigger",{"extensions-split-share-menu__trigger--collapsed":e}),tagName:"span",tabIndex:t?void 0:-1,variant:r.getButtonVariant(),onMouseEnter:r.handlePopoverHover,"aria-label":M._("Expand share menu")},e?s:"▾");return(Z||Y)&&e?i.default.createElement(l.Tooltip,{positionOffset:8,positioning:"left",tooltipContent:M._("Share")},p):p}},r.getPopoverItemRenderer=function(){return function(){var e=r.props,t=e.user,n=e.file,o=e.appActions,a=e.categoryInfo,l=e.featureFlags,p=l.expSplitShareBtn,c=l.expRealignMenu,u=r.getShareWithEmailOpenOption(),d="ON_SHOW_INVITE"===p?i.default.createElement(i.Fragment,null,i.default.createElement(R.MenuContentItem,{openOption:u}),i.default.createElement(s.PopoverItemGroupSeparator,null)):null,h=i.default.createElement(U.ShareMenuSurvey,{userId:t.id,session:r.currentSession});if(!D.shouldRealignMenu(c)){var _=r.getSharingServiceOpenOptions(n,t).map((function(e){return i.default.createElement(R.MenuContentItem,{key:e.text,openOption:e})}));return i.default.createElement(i.Fragment,null,d,_,h)}var g=P.partitionActions(o,2),m=g.installedActions,S=g.promotedActions,f=i.default.createElement(R.MenuContentItem,{openOption:r.getMoreAppsOpenOption(n,t)});if(!F.isEmpty(m)){var v=m.map((function(e){return r.getAppActionOpenOption(n,t,e)})).map((function(e){return i.default.createElement(R.MenuContentItem,{key:e.text,openOption:e})}));return i.default.createElement(i.Fragment,null,d,v,f,h)}if("ON_PROMOTE_NONE"===c||F.isEmpty(S))return i.default.createElement(i.Fragment,null,d,i.default.createElement(R.MenuContentItem,{openOption:r.getAddAppsOpenOption(n,t)}),h);var A=y.getCategoryIdToInfos(a),O=S.map((function(e){return{openOption:r.getAppActionOpenOption(n,t,e),description:A[e.category].display_name}})).map((function(e){var t=e.openOption,n=e.description;return i.default.createElement(R.MenuContentItem,{key:t.text,openOption:t,description:n})}));return i.default.createElement(i.Fragment,null,d,i.default.createElement(s.PopoverItemGroupTitle,{className:"app-action-category-title"},M._("SUGGESTED")),O,f,h)}},r.markSplitShareTooltipViewed=function(){d.markTooltipViewed(r.props.user.id,"split_share_edu")},r.state={tooltipState:_.TooltipState.NO_TOOLTIP},r.telemetryClient=g.createTelemetryClient(n.__assign({component:"split-share-btn"},t.context)),r}return n.__extends(t,e),t.prototype.componentDidMount=function(){this.props.showEduTooltip&&this.setEduTooltip()},t.prototype.setEduTooltip=function(){return n.__awaiter(this,void 0,void 0,(function(){var e,t;return n.__generator(this,(function(n){switch(n.label){case 0:return[4,d.getTooltipHistory(this.props.user.id,["open_with_edu","split_share_edu"])];case 1:return e=n.sent(),t=T.allowedTooltips(this.props.appActions.length>0,this.props.file.fq_path?"."+p.file_extension(p.filename(this.props.file.fq_path)):"",this.props.featureFlags),"split_share_edu"===t.find((function(t){return void 0!==e[t]&&!e[t]}))&&this.setState({tooltipState:_.TooltipState.BIG_ONBOARDING_TOOLTIP}),[2]}}))}))},t.prototype.getButtonVariant=function(){var e=this.props,t=e.isVisible,n=e.variant;return n&&t?n:"invisible"},t.prototype.render=function(){var e=this.props,t=e.file,n=e.context,r=e.isVisible,l=e.shareButtonLabel,c=e.triggerType,u=e.isCollapsed,d=e.shouldUsePortalPopover,h=e.sharingServiceInfo,_=e.scrollableSidebarRef,m=e.featureFlags,S=I.shouldShowSplitShare(m,h,t);n?this.currentSession=this.telemetryClient.session({ext:g.getPiiSafeExtension(t?"."+p.file_extension(p.filename(t.fq_path)):"")}):delete this.currentSession;var f=o.default({"primary-action-menu__button":c===O.TriggerType.SidebarPrimaryButton,"extensions-inline-share-button":!0}),v=o.default({"primary-action-menu__button":c===O.TriggerType.SidebarPrimaryButton,"action-share":!0}),A=i.default.createElement(a.Button,{"aria-label":l,className:S?f:v,onClick:this.handleClickShare,tabIndex:r?void 0:-1,variant:this.getButtonVariant(),onMouseEnter:this.handleShareHover},l),T=null;if(S){var E=this.getPopoverTriggerRenderer(u,r,l),y=this.getPopoverItemRenderer();T=d?i.default.createElement(w.PortalPopover,{className:"extensions-split-share__popover",popoverTriggerSelector:".extensions-split-share-menu__trigger",renderPopoverTrigger:E,renderPopoverItems:y,scrollableContainer:_,onSelection:this.handleSelectAction,onMenuToggle:this.handlePopoverToggle,onClick:this.handlePreventMouseDown,onDoubleClick:this.handlePreventMouseDown}):i.default.createElement(s.Popover,{className:"extensions-split-share__popover",onClick:this.handlePreventMouseDown,onDoubleClick:this.handlePreventMouseDown,onSelection:this.handleSelectAction,onMenuToggle:this.handlePopoverToggle,closeOnSelection:!0},i.default.createElement(s.PopoverTrigger,null,E()),i.default.createElement(s.PopoverContent,{position:"below",attachment:"right"},y()))}var P=this.props.sharingServiceInfo&&I.isSlackAvailable(this.props.sharingServiceInfo)&&I.isZoomAvailable(this.props.sharingServiceInfo);return i.default.createElement("div",{className:o.default("extensions-split-share-btn",{"extensions-split-share-btn--invisible":!r,"slack-zoom-available":P&&!u,"slack-zoom-available-collapsed":P&&u,"wopi-available":H.isMicrosoftFileByExtension(p.file_extension(p.filename(this.props.file.fq_path)))&&!u})},u?null:A,T)},t.defaultProps={isVisible:!0,shareButtonLabel:M._("Share"),triggerType:O.TriggerType.PrimaryButton,variant:"secondary"},t})(i.default.Component);t.SplitShareButtonComponent=q;var z={refreshSharingServiceInfo:f.refreshSharingServiceInfoAdapter,updateLinkState:f.updateLinkState},W=r.connect((function(e,t){return{appActions:v.getShareActionsForFile(e,n.__assign(n.__assign({},t.file),{bytes:0})),categoryInfo:v.getCategoryInfos(e),featureFlags:v.getFeatureFlags(e),sharingServiceInfo:v.getSharingServiceInfoAdapter(e),landingPageEnabled:u.isConnectServiceLandingPagesEnabled(e)}}),z)(q);t.SplitShareButton=m.requireCssWithComponent(W,["/static/css/extensions/index-vflpbukXI.css","/static/css/app_actions/index-vfl5P3doR.css"])}));
//# sourceMappingURL=split_share_button_component.min.js-vflP2keMk.map