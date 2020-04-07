define(["require","exports","tslib","react","modules/core/i18n","spectrum/modal","modules/clean/static_urls","spectrum/button","deep-integrations/text/text","modules/clean/ux_analytics_modal_tracking","modules/clean/react/css","modules/clean/react/modal","react-modal","external/lodash","deep-integrations/search_input/search_input","deep-integrations/search_input/clear_input_button","spectrum/colorized_icon","deep-integrations/icons/icon_cancel","modules/clean/react/extensions/common","modules/clean/react/extensions/data/helpers","modules/clean/react/extensions/data/selectors","modules/clean/react/extensions/feature_flags","modules/clean/react/app_actions/redirect","modules/clean/react/file_viewer/open_button/types","modules/clean/react/extensions/cloud_docs_compat"],(function(e,t,n,a,s,r,o,i,l,c,d,u,m,p,f,_,g,h,y,x,E,v,C,S,N){"use strict";function A(){return a.default.createElement("div",{className:"extensions-scaling-modal__directory-entry-point"},a.default.createElement("a",{href:"/apps",target:"_blank",rel:"noreferrer"},s._("View all apps")))}Object.defineProperty(t,"__esModule",{value:!0}),a=n.__importDefault(a),p=n.__importStar(p),t.AppDirectoryEntryPoint=A;var b=(function(e){function t(t){var n=e.call(this,t)||this;return n.hasUsedSearchBar=!1,n.createClickHandler=function(e){return function(){u.Modal.close();var t=n.props,a=t.user,s=t.file,r=t.featureFlags,o=t.currentSession,i=t.telemetryContext,l=t.updateLinkState,c=t.onProfileServiceAuth;if(C.redirectToActionOrShowAuth(a,s,e,r,i,l,c),"redirect"===e.handler[".tag"])y.logEvent(o,"select_action",y.getAppActionExtras(e));else if("cloud_editor"===e.handler[".tag"]){var d=N.isWopiAction(e)?S.OpenButtonAction.OPEN_WITH:S.OpenButtonAction.OPEN_WITH_CLOUD_DOC;y.logEvent(n.props.currentSession,"select_legacy_action",{type:d})}}},n.handleQueryChange=function(e){n.setState({searchKey:e}),n.hasUsedSearchBar||(y.logEvent(n.props.currentSession,"start_searching",{}),n.hasUsedSearchBar=!0)},n.filterActions=function(){var e=n.props,t=e.appActions,a=e.categoryIdToInfos,s=n.state.searchKey.trim().toLowerCase(),r=t.map((function(e){return e.category})).map((function(e){return a[e]})).filter((function(e){return-1!==e.display_name.toLowerCase().indexOf(s)})).map((function(e){return e.id}));return t.filter((function(e){return-1!==e.description.toLowerCase().indexOf(s)||r.includes(e.category)}))},n.renderExtensionItem=function(e){var t=n.props,r=t.categoryIdToInfos,l=t.featureFlags.expRealignMenu,c=e.icon,d=c.is_static?o.static_url("/static/images/generic_app_icon-vflIPYT1H.png"):c.url,u=e.app_copy,m=y.isLinked(e),p=m?"primary":"secondary",f=r[e.category],_=m?v.shouldRealignMenu(l)&&E.isShareCategory(e.category)?s._("Share"):s._("Open"):s._("Connect");return a.default.createElement("div",{className:"extension-section",key:e.description},a.default.createElement("div",{className:"extension-tile"},a.default.createElement("img",{src:d,className:"extensions-icon",alt:""}),a.default.createElement("div",{className:"extensions-description"},a.default.createElement("div",{className:"extensions-category-name"},e.description),a.default.createElement("div",{className:"extensions-app-name"},f.display_name)),a.default.createElement(i.Button,{variant:p,className:"extensions-scaling-modal__redirect_button",onClick:n.createClickHandler(e)},_)),a.default.createElement("div",{className:"extensions-scaling-modal__app-description"},u&&u.map((function(e,t){return a.default.createElement("p",{key:t,className:"extensions-scaling-modal__app-description-line"},"• "+e)}))))},n.renderEmptySearch=function(){return a.default.createElement("div",{className:"extensions-scaling-modal__empty-search"},a.default.createElement("img",{className:"extensions-scaling-modal__empty-search-image",src:o.static_url("/static/images/empty_states/search-vflHMNVT9.png"),srcSet:o.static_url("/static/images/empty_states/search@2x-vfly2B3kk.png")+" 2x",alt:""}),a.default.createElement(l.Text,{size:"medium"},s.intl.formatMessage(s._("<bold>Looking for something?</bold>"),{bold:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return a.default.createElement(l.Text,{fontWeight:"medium",size:"large"},e)}})),a.default.createElement(l.Text,{size:"medium"},s._("Check spelling or try again.")))},n.state={searchKey:""},n}return n.__extends(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.onRequestClose,o=t.featureFlags,i=t.modalTitle,d=this.filterActions().sort(x.actionCompareFn),u="ON"===o.appDirectory;return a.default.createElement(r.Modal,{ariaLabel:s._("App actions"),className:"extensions-scaling-modal",displayCloseButton:!0,open:!0,overlayClassName:"file-viewer-modal-overlay",overlayFixed:!1,onRequestClose:function(){return n()}},a.default.createElement("div",{className:"extensions-scaling-modal__body-wrapper"},a.default.createElement("div",{className:"extensions-scaling-modal__title"},a.default.createElement(l.Text,{size:"large"},i)),a.default.createElement("div",{className:"extensions-scaling-modal__search-bar"},a.default.createElement(f.SearchInput,{clearButtonRenderer:function(e){var t=e.handleClick,n=e.handleKeyDown,s=e.handleMouseDown;return a.default.createElement(_.ClearInputButton,{icon:a.default.createElement(g.ColorizedIcon,{color:"#707781"},a.default.createElement(h.IconCancel,null)),onClick:t,onKeyDown:n,onMouseDown:s})},keyboardShortcut:"",placeholder:s._("Search by action or app name"),value:this.state.searchKey,onChange:this.handleQueryChange})),a.default.createElement("div",{className:"extensions-container"},d.length>0?d.map((function(t){return e.renderExtensionItem(t)})):this.renderEmptySearch()),u&&a.default.createElement(A,null)),a.default.createElement(c.UXAnalyticsModalTracking,{id:"extensions-scaling-modal"}))},t})(a.default.Component);t.ExtensionsScalingModal=d.requireCssWithComponent(b,["/static/js/deep-integrations/index.web-vflmWfCnU.css","/static/css/app_actions/index-vfl5P3doR.css"]);var k=p.once((function(){m.setAppElement(document.body)}));t.showExtensionsScalingModal=function(e,n,s,r,o,i,l,c,d,m){k(),u.Modal.showInstance(a.default.createElement(t.ExtensionsScalingModal,{modalTitle:e,user:n,file:s,onRequestClose:u.Modal.close,appActions:r,categoryIdToInfos:o,featureFlags:i,updateLinkState:l,telemetryContext:c,currentSession:d,onProfileServiceAuth:m}));var p=y.partitionActionsByLinkStatus(r),f=p.connected_apps,_=p.unconnected_apps;y.logEvent(d,"view_scaling_modal",{connected_apps:f,unconnected_apps:_})}}));
//# sourceMappingURL=extensions_scaling_modal.min.js-vflkvVVJb.map