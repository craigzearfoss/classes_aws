define("spectrum/icon_star",["require","exports","tslib","spectrum/icon_star/icon_star"],(function(e,t,r,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.__exportStar(a,t)})),define("spectrum/icon_star/icon_star",["require","exports","tslib","react","classnames","spectrum/icon_action","spectrum/svg_icon_bundle"],(function(e,t,r,a,o,s,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=r.__importStar(a),o=r.__importDefault(o),t.ICONS=s.ICONS,t.IconStar=function(e){var t=e.state,n=e.selected,d=e.className,c=(e.ref,r.__rest(e,["state","selected","className","ref"])),l=n?s.ICONS.unstar:s.ICONS.star,u=o.default("mc-icon-star",{"mc-icon-star-selected":n,"mc-icon-star-hovered":"hovered"===t,"mc-icon-star-active":"active"===t,"mc-icon-star-disabled":"disabled"===t},d);return a.createElement(i.SvgIconBundle,Object.assign({className:u,icon:l},c))},t.IconStar.displayName="IconStar"})),define("spectrum/icon_star_v2",["require","exports","tslib","spectrum/icon_star_v2/icon_star_v2"],(function(e,t,r,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.__exportStar(a,t)})),define("spectrum/icon_star_v2/icon_star_v2",["require","exports","tslib","react","classnames","spectrum/util/uuid_generator","spectrum/svg_icon_bundle"],(function(e,t,r,a,o,s,i){"use strict";function n(e){return'\n<defs>\n<mask id="'+e+'-star-mask">\n<rect fill="#FFFFFF" height="24" width="24"/>\n<path d="M14.467 12.9133L17.249 10.4704L13.5247 10.0874L12 6.75439L10.4753 10.0874L6.75098 10.4704L9.53295 12.9133L8.75592 16.483L12 14.6598L15.244 16.483L14.467 12.9133Z" fill="#000000" class="mask"/>\n</mask>\n<mask id="'+e+'-shine-mask">\n<rect fill="000000" height="24" width="24"/>\n<path class="fill shine-fill" d="M20 8.68629V15.3137L15.3137 20H8.68629L4 15.3137L4 8.68629L8.68629 4L15.3137 4L20 8.68629Z" fill="#FFFFFF"/>\n<path class="mask shine-mask" d="M21 8.27208V15.7279L15.7279 21H8.27208L3 15.7279L3 8.27208L8.27208 3L15.7279 3L21 8.27208Z" fill="#000000"/>\n</mask>\n</defs>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M8.52516 18.3645L12 16.4117L15.4748 18.3645C15.6967 18.4893 15.9582 18.5296 16.2089 18.4778C16.7699 18.3619 17.1282 17.8248 17.0092 17.2782L16.1769 13.4546L19.1567 10.838C19.3471 10.6708 19.4673 10.441 19.4942 10.1926C19.5544 9.63698 19.1409 9.13899 18.5706 9.08034L14.5814 8.67009L12.9483 5.10005C12.8439 4.87198 12.6567 4.68956 12.4227 4.5879C11.8989 4.36041 11.2851 4.58971 11.0516 5.10005L9.41849 8.67009L5.4293 9.08034C5.17445 9.10655 4.93855 9.22367 4.767 9.40916C4.38312 9.82423 4.41724 10.4639 4.8432 10.838L7.82305 13.4546L6.99075 17.2782C6.93758 17.5225 6.97899 17.7773 7.10703 17.9936C7.39352 18.4776 8.02844 18.6437 8.52516 18.3645ZM17.249 10.4704L14.467 12.9133L15.244 16.483L12 14.6598L8.7559 16.483L9.53293 12.9133L6.75096 10.4704L10.4753 10.0874L12 6.75439L13.5247 10.0874L17.249 10.4704Z"/>\n<path class="star-fill" d="M14.467 12.9133L17.249 10.4704L13.5247 10.0874L12 6.75439L10.4753 10.0874L6.75098 10.4704L9.53295 12.9133L8.75592 16.483L12 14.6598L15.244 16.483L14.467 12.9133Z"/>\n<path mask="url(#'+e+'-shine-mask)" fill-rule="evenodd" clip-rule="evenodd" d="M12.7536 10.1809L19.2477 3.69171L20.3088 4.75197L13.8192 11.2465L22.9998 11.25L23.0003 12.75L13.8192 12.7535L20.3083 19.2477L19.2481 20.3087L12.7536 13.8192L12.75 22.9997L11.25 23.0003L11.2465 13.8192L4.7524 20.3083L3.69134 19.2481L10.1809 12.7535L1.00033 12.75L0.999756 11.25L10.1809 11.2465L3.69174 4.75237L4.752 3.69131L11.2465 10.1809L11.25 1.0003L12.75 0.999725L12.7536 10.1809Z"/>\n'}Object.defineProperty(t,"__esModule",{value:!0}),a=r.__importStar(a),o=r.__importDefault(o),t.createIcon=n;var d=(function(e){function t(){var t=e.apply(this,arguments)||this;return t.id=s.generateUUID("icon-star-v2"),t.state={isInitialAnimation:!0},t}return r.__extends(t,e),t.prototype.componentDidUpdate=function(e){!e.active&&this.props.active&&this.setState({isInitialAnimation:!1})},t.prototype.render=function(){var e=this.props,t=e.active,s=e.size,d=void 0===s?24:s,c=r.__rest(e,["active","size"]),l=d.toString(),u=d.toString(),p=o.default("mc-icon-star-v2",{"mc-icon-star-v2-active":t,"mc-icon-star-v2-inanimate":this.state.isInitialAnimation}),m={attrs:{width:l,height:u,viewBox:"0 0 24 24"},dangerouslySetInnerIconHtml:n(this.id)};return a.createElement("span",{className:p},a.createElement(i.SvgIconBundle,Object.assign({icon:m},c)))},t})(a.PureComponent);t.IconStarV2=d})),define("modules/clean/react/starred/actions",["require","exports","tslib","modules/clean/flux/dispatcher","modules/clean/react/starred/constants","modules/clean/react/starred/api","modules/clean/react/starred/model"],(function(e,t,r,a,o,s,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),s=r.__importStar(s);var n=(function(){function e(){}return e.fetchStatuses=function(t,r,n){return void 0===n&&(n=!1),n||e.markAsLoading(r),s.fetchStatuses(t,r).then((function(e){a.Dispatcher.dispatch({type:o.StarredActionTypes.SET_STATUS,starredStatuses:i.statusResultsToStarredStatuses(e)})})).catch((function(e){return a.Dispatcher.dispatch({type:o.StarredActionTypes.LOAD_FAILURE,idTypePairs:r}),Promise.reject(e)}))},e.markAsLoading=function(e){a.Dispatcher.dispatch({type:o.StarredActionTypes.LOADING,idTypePairs:e})},e.update=function(e,t,r,i){var n,d={id:t,type:r};a.Dispatcher.dispatch({type:o.StarredActionTypes.LOADING,idTypePairs:[d]});var c=s.update(e,t,r,i);return c.then((function(){return n=i})).catch((function(e){throw n=!i,e})).finally((function(){a.Dispatcher.dispatch({type:o.StarredActionTypes.SET_STATUS,starredStatuses:[{idTypePair:{id:t,type:r},starred:n}]})})),c},e})();t.StarredActions=n})),define("modules/clean/react/starred/api",["require","exports","modules/clean/ajax"],(function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t,a){return new Promise((function(o,s){(a?r.SilentBackgroundRequest:r.WebRequest)({url:e,type:"POST",dataType:"json",data:t,success:o,error:function(e,t,r){return s(Error("error: "+r+", status: "+t))}})}))};t.fetchStatuses=function(e,t){return a("/starred/get_status",{role:e,resources_json:JSON.stringify(t)},!0)},t.update=function(e,t,r,o){return a("/starred/update",{role:e,resource_id:t,id_type:r,is_starred:o})}})),define("modules/clean/react/starred/star",["require","exports","tslib","classnames","react","modules/clean/react/starred/starred_activity_logger","modules/clean/react/css","modules/clean/react/starred/actions","modules/clean/react/starred/store","modules/clean/react/title_bubble","modules/core/i18n","modules/core/notify","spectrum/icon_star","spectrum/icon_star_v2"],(function(e,t,r,a,o,s,i,n,d,c,l,u,p,m){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=r.__importDefault(a);var _=(function(e){function t(t){var r=e.call(this,t)||this;return r.onStoreUpdate=function(){var e=r.getStateFromStore();r.setState(e)},r.onClick=function(e){if(e.stopPropagation(),e.preventDefault(),!r.state.isLoading){var t=!r.state.isStarred;s.starredActivityLogger.logClick(r.props.user,r.props.id,r.props.idType,r.props.isDir,r.props.source,t),r.props.onStarClick&&r.props.onStarClick(t),n.StarredActions.update(r.props.user.role,r.props.id,r.props.idType,t).catch((function(e){var a;a=r.props.itemName?t?l._("There was a problem starring %(item_name)s").format({item_name:r.props.itemName}):l._("There was a problem unstarring %(item_name)s").format({item_name:r.props.itemName}):t?l._("There was a problem starring your selection"):l._("There was a problem unstarring your selection"),u.Notify.error(a)}))}},r.state=r.getStateFromStore(),r.removeStoreListener=d.StarredStore.addListener(r.onStoreUpdate),r}return r.__extends(t,e),t.prototype.componentWillUnmount=function(){this.removeStoreListener&&this.removeStoreListener()},t.prototype.componentWillReceiveProps=function(e){this.props.id===e.id&&this.props.idType===e.idType||this.setState(this.getStateFromStore(e))},t.prototype.getStateFromStore=function(e){void 0===e&&(e=this.props);var t={id:e.id,type:e.idType};return{isLoading:d.StarredStore.getIsLoading(t),isStarred:d.StarredStore.getIsStarred(t)}},t.prototype.getTooltipContent=function(){return this.props.isReadOnly?this.state.isStarred?l._("Starred"):null:this.state.isStarred?l._("Remove from Starred"):l._("Add to Starred")},t.prototype.render=function(){if(void 0===this.state.isStarred)return null;if(this.props.isReadOnly&&!this.state.isStarred)return null;var e={star__toggle:!0,"star__toggle--starred":this.state.isStarred,"star__toggle--unstarred":!this.state.isStarred&&!this.props.isTabbing,"star__toggle--loading":this.state.isLoading},t=this.getTooltipContent();return o.default.createElement(c.TitleBubble,{content:t,position:this.props.tooltipPosition},o.default.createElement("button",{className:a.default(e),role:"button","aria-pressed":this.state.isStarred,"aria-label":this.props.isReadOnly?l._("Starred"):l._("Add to starred"),onClick:this.onClick,onDoubleClick:this.onClick,disabled:this.props.isReadOnly,tabIndex:this.props.tabIndex},this.props.useNewIcon?o.default.createElement(m.IconStarV2,{active:this.state.isStarred||this.state.isLoading,size:24}):o.default.createElement(p.IconStar,{selected:this.state.isStarred||this.state.isLoading})))},t.displayName="Star",t.defaultProps={tooltipPosition:c.TitleBubble.POSITIONS.TOP},t})((o=r.__importDefault(o)).default.PureComponent);t.Star=i.requireCssWithComponent(_,["/static/css/starred/star-vfl7N7UrB.css"])})),define("modules/clean/react/starred/starred_activity_logger",["require","exports","modules/clean/react/home/api","modules/clean/react/home/starred/constants","modules/clean/react/starred/constants","modules/clean/web_user_action_logger","modules/clean/web_user_action_events"],(function(e,t,r,a,o,s,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=[o.StarredSource.HOME_STARRED,o.StarredSource.HOME_RECENTS],d=(function(){function e(){}return e.prototype.logClick=function(e,t,o,d,c,l){if("BROWSE"===c)return Promise.resolve();var u=[];if(n.includes(c)){var p=l?a.StarredLoggingTypes.CLICK_STAR:a.StarredLoggingTypes.CLICK_UNSTAR;u.push(r.logHomeActivity({eventName:p,role:e.role,extra:{resource_id:t,id_type:o,is_dir:d}}))}var m=l?i.WebUserActionLogEvent.STAR:i.WebUserActionLogEvent.REMOVE_STAR;return u.push(s.WebUserActionLog.log(e.id,m,{resource_id:t,id_type:o,is_dir:d,role:e.role,source:c})),Promise.all(u)},e})();t.StarredActivityLogger=d,t.starredActivityLogger=new d})),define("modules/clean/react/starred/store",["require","exports","tslib","external/lodash","modules/clean/flux/dispatcher","modules/clean/flux/flux_store","modules/clean/react/starred/constants","modules/clean/react/home/starred/constants","modules/clean/react/starred/id_type_pair"],(function(e,t,r,a,o,s,i,n,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=r.__importStar(a);var c=(function(e){function t(){var t=e.call(this,o.Dispatcher)||this;return t.idsToLoadingState={},t.idsToStarred={},t}return r.__extends(t,e),t.prototype.getLoadingStates=function(){return this.idsToLoadingState},t.prototype.hasIdTypePair=function(e){return this.idsToLoadingState.hasOwnProperty(d.idTypePairToString(e))},t.prototype.getLoadingState=function(e){return this.idsToLoadingState[d.idTypePairToString(e)]},t.prototype.getIsStarred=function(e){return this.idsToStarred[d.idTypePairToString(e)]},t.prototype.getAllStarredPairStrings=function(){return Object.keys(a.pickBy(this.idsToStarred,(function(e){return e})))},t.prototype.getIsLoading=function(e){return this.getLoadingState(e)===i.StarredLoadingState.LOADING},t.prototype.onLoading=function(e){var t={};e.forEach((function(e){return t[d.idTypePairToString(e)]=i.StarredLoadingState.LOADING})),this.idsToLoadingState=r.__assign(r.__assign({},this.idsToLoadingState),t)},t.prototype.onSetStatus=function(e){void 0===e&&(e=[]);var t={},a={};e.forEach((function(e){var r=d.idTypePairToString(e.idTypePair);t[r]=i.StarredLoadingState.LOAD_SUCCESS,a[r]=e.starred})),this.idsToLoadingState=r.__assign(r.__assign({},this.idsToLoadingState),t),this.idsToStarred=r.__assign(r.__assign({},this.idsToStarred),a)},t.prototype.onLoadFailure=function(e){var t=this,a={};e.forEach((function(e){var r=d.idTypePairToString(e),o=t.idsToLoadingState[r];void 0!==o&&o!==i.StarredLoadingState.LOADING||(a[r]=i.StarredLoadingState.LOAD_FAILED)})),this.idsToLoadingState=r.__assign(r.__assign({},this.idsToLoadingState),a)},t.prototype.__onDispatch=function(e){var t=e.action;switch(t.type){case i.StarredActionTypes.LOADING:this.onLoading(t.idTypePairs),this.__emitChange();break;case i.StarredActionTypes.SET_STATUS:case n.StarredResourceActionTypes.LOAD_SUCCESS:this.onSetStatus(t.starredStatuses),this.__emitChange();break;case i.StarredActionTypes.LOAD_FAILURE:this.onLoadFailure(t.idTypePairs),this.__emitChange();break;default:return}},t})(s.FluxStore);t._StarredStoreClass=c,t.StarredStore=new c})),define("modules/clean/react/starred/model",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.statusResultsToStarredStatuses=function(e){return e.map((function(e){var t=e.id,r=e.type,a=e.is_starred,o=e.canonical_id,s=e.canonical_id_type,i={idTypePair:{id:t,type:r},starred:a};return o&&s&&(i.canonicalIdTypePair={id:o,type:s}),i}))}})),define("modules/clean/react/home/starred/constants",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StarredResourceActionTypes={LOADING_INITIAL:"HOME_STARRED_LOADING_INITIAL",LOADING_ALL:"HOME_STARRED_LOADING_ALL",LOAD_SUCCESS:"HOME_STARRED_LOAD_SUCCESS",LOAD_FAILURE:"HOME_STARRED_LOAD_FAILURE",HIDE_EMPTY_SECTION:"HOME_STARRED_HIDE_EMPTY_SECTION"},t.NOT_PAPER_USER_ERROR="not_paper_user",t.StarredLoggingTypes={CLICK_STAR:"click_star",CLICK_UNSTAR:"click_unstar"},t.StarredLoadingTypes={INITIAL:"INITIAL",ALL:"ALL"},t.LOAD_ALL_ITEMS_COUNT=1e3,t.INITIAL_STARRED_ITEMS_LIMIT=5})),define("modules/clean/react/home/starred/conditional_interface",["require","exports","modules/clean/react/home/starred/starred_resource_store","modules/clean/react/starred/star","modules/clean/react/home/recents/recent_activity_starred","modules/clean/react/home/starred/starred_view","modules/clean/react/starred/id_type_pair"],(function(e,t,r,a,o,s,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getStarredResourceStore=r.getStarredResourceStore,t.Star=a.Star,t.getIdTypePairFromRecentItem=o.getIdTypePairFromRecentItem,t.StarredView=s.StarredView,t.RootComponent=s.RootComponent,t.idTypePairToString=i.idTypePairToString})),define("modules/clean/react/home/starred/actions",["require","exports","modules/clean/flux/dispatcher","modules/clean/react/home/starred/constants","modules/clean/react/home/starred/models/starred_item","modules/clean/react/starred/model","modules/core/exception"],(function(e,t,r,a,o,s,i){"use strict";function n(e,t){return r.Dispatcher.dispatch({type:a.StarredResourceActionTypes.LOAD_FAILURE,error:t,loadingType:e}),t}Object.defineProperty(t,"__esModule",{value:!0}),t.onRetrieveStarredError=n;var d=(function(){function e(){}return e.handleRetrieveStarredPayload=function(e,t,d){if("success"!==d.status)throw n(t,d.status);if(!d.items||void 0===d.has_more)throw i.reportStack("Home starred items request returned success without items or hasMore",{severity:i.SEVERITY.NONCRITICAL}),n(t,new Error("Invalid server response for Starred getItems"));var c=d.items.map(o.starredItemFromJson),l=s.statusResultsToStarredStatuses(c.map(o.starredItemModelToStarredStatus));r.Dispatcher.dispatch({type:a.StarredResourceActionTypes.LOAD_SUCCESS,hasMore:d.has_more,items:c,starredStatuses:l,loadingType:t}),e().then((function(e){return(0,e.getStarredStatusMetadata)(l)}))},e})();t.StarredActions=d})),define("modules/clean/react/home/starred/models/starred_item",["require","exports","modules/clean/react/home/constants"],(function(e,t,r){"use strict";function a(e,t){var a,o=r.DisplayTypeToResourceType[e];return o===r.FILE_RESOURCE_TYPE?{fqPath:(a=t).fq_path}:o===r.FOLDER_RESOURCE_TYPE?{fqPath:(a=t).fq_path,targetNsId:a.target_ns_id,isTeamMemberFolder:a.is_team_member_folder}:{}}Object.defineProperty(t,"__esModule",{value:!0}),t.starredItemFromJson=function(e){return{title:e.title,resourceId:e.resource_id,idType:e.id_type,displayType:e.display_type,url:e.url,details:a(e.display_type,e.details)}},t.detailsFromJson=a,t.starredItemModelToStarredStatus=function(e){return{id:e.resourceId,type:e.idType,is_starred:!0}}})),define("modules/clean/react/home/starred/starred_item",["require","exports","tslib","classnames","spectrum/overflow_button","spectrum/popover","react","modules/core/i18n","modules/clean/filepath","modules/clean/react/home/store","modules/clean/navigation","modules/clean/react/home/util/paper_utils","modules/clean/react/home/util/resource_icon","modules/clean/sharing/constants","modules/clean/react/starred/actions","modules/clean/react/starred/star","modules/clean/react/starred/constants","modules/clean/react/starred/id_type_pair","modules/clean/react/home/util/logging/activity_logger","modules/clean/react/home/constants","modules/clean/undo","modules/clean/user_education/react/user_education_effect","modules/clean/react/home/post_tti/api","modules/clean/react/home/util/rendering_utils","modules/clean/react/home/util/post_tti_components"],(function(e,t,r,a,o,s,i,n,d,c,l,u,p,m,_,S,h,f,g,y,L,T,I,v,E){"use strict";var A;Object.defineProperty(t,"__esModule",{value:!0}),a=r.__importDefault(a),i=r.__importDefault(i),L=r.__importStar(L);var R=((A={})[y.FILE_RESOURCE_TYPE]=!0,A[y.FOLDER_RESOURCE_TYPE]=!0,A[y.PAPER_DOCUMENT_RESOURCE_TYPE]=!0,A),C=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.getLoggingInfo=function(){var e=y.DisplayTypeToResourceType[t.props.item.displayType];return{resourceId:t.props.item.resourceId,resourceType:e,position:t.props.position}},t.onClick=function(e){e.stopPropagation(),e.preventDefault(),y.DisplayTypeToResourceType[t.props.item.displayType]!==y.FILE_RESOURCE_TYPE||l.isMetaKeyPressed(e)?l.logAndNavigate(t.props.item.url,t.logOpen,l.NavigationMethod.NEW_TAB):(e.preventDefault(),I.waitForHomeTTI().then((function(e){return e.openInFileViewer(f.idTypePairToString({type:t.props.item.idType,id:t.props.item.resourceId}),t.logOpen)})))},t.onStarClick=function(e){if(!e){var r=t.getLoggingInfo(),a=r.resourceId,o=r.resourceType,s=r.position,i=t.props.item,d=n._("Removed from Starred.");L.notifyWithUndo(d,{itemToStar:i},(function(e){var t=e.itemToStar;_.StarredActions.update(c.getHomeStore().getRole(),t.resourceId,t.idType,!0),g.homeActivityLogger.logUndoUnstarItem(a,o,s)}),10)}},t.logEvent=function(e){var r=t.getLoggingInfo();return e(r.resourceId,r.resourceType,r.position)},t.logOpen=function(){return t.logEvent(g.homeActivityLogger.logOpenStarredItem)},t.logClickMenu=function(){return t.logEvent(g.homeActivityLogger.logClickStarOverflowMenu)},t.logClickShare=function(){return t.logEvent(g.homeActivityLogger.logClickStarOverflowShare)},t.handleShare=function(e){return function(r){if(r.preventDefault(),t.props.item.displayType!==y.PAPER_DOCUMENT_RESOURCE_TYPE){t.logClickShare();var a=y.DisplayTypeToResourceType[t.props.item.displayType]===y.FOLDER_RESOURCE_TYPE,o=a?t.props.item.details.targetNsId:null,s=t.props.item.details.fqPath;I.waitForHomeTTI().then((function(r){e?r.createAutoShareLink(t.props.user,s):r.asyncShowShareModal(t.props.user,{fqPath:s,isFolder:a,origin:m.SHARE_ACTION_ORIGIN_TYPE.STARRED,targetNsId:o})}))}else u.sharePaperDoc(t.props.item.url,t.logClickShare)}},t.stopEvent=function(e){e.stopPropagation(),e.preventDefault()},t.handleSelection=function(e,t){e(t)},t.getIcon=function(){var e=t.props.item.details.fqPath;return i.default.createElement(p.HomeResourceIcon,{key:"icon",className:"starred-item__file-icon",displayType:t.props.item.displayType,fileName:t.props.item.title,shortcutUrlForIcon:e&&"web"===d.file_extension(e)&&t.props.item.url||void 0})},t}return r.__extends(t,e),t.prototype.renderDropdown=function(){var e=[],t=y.DisplayTypeToResourceType[this.props.item.displayType],d=this.props.item.details.isTeamMemberFolder;t in R&&!d&&e.push(i.default.createElement(s.PopoverContentItem,{className:"starred-item__context-menu-item starred-item__context-menu-item--share",key:"share",value:this.handleShare()},n._("Share")));var c={"aria-label":n._("More actions"),onDoubleClick:function(e){e.stopPropagation()}},l=i.default.createElement(o.OverflowButton,r.__assign({tagName:"span",className:"starred-item__context-menu-button","aria-label":n._("More Actions")},c));return i.default.createElement("div",{key:"dropDown",onClick:this.stopEvent,className:a.default("starred-item__more-actions",{"starred-item__context-menu-emtpy":!e.length})},i.default.createElement(s.Popover,{onSelection:this.handleSelection,onMenuToggle:this.logClickMenu},i.default.createElement(s.PopoverTrigger,{className:"starred-item__context-menu-trigger"},l),i.default.createElement(s.PopoverContent,{attachment:"right"},e)))},t.prototype.getStarredItemName=function(){var e=this.props.item,t=e.url,r=e.title;return i.default.createElement("a",{key:"name",onClick:this.onClick,href:t,className:"starred-item__title"},v.truncateTitle(r))},t.prototype.render=function(){var e={"starred-item":!0,"starred-item--last-in-row":this.props.lastInRow,"starred-item--in-last-row":this.props.inLastRow};return i.default.createElement("li",{onClick:this.onClick,className:a.default(e)},this.getIcon(),i.default.createElement("div",{className:"starred-item__content",key:"userEducation"},i.default.createElement(T.UserEducationEffect,{containerName:"StarredItem",name:"starred-item-"+String(this.props.position)}),this.getStarredItemName(),i.default.createElement("div",{className:"starred-item__star",key:"star"},i.default.createElement(S.Star,{user:c.getHomeStore().getUser(),id:this.props.item.resourceId,idType:this.props.item.idType,isDir:void 0!==this.props.item.details.targetNsId,itemName:this.props.item.title,onStarClick:this.onStarClick,source:h.StarredSource.HOME_STARRED}))),i.default.createElement("div",{className:"starred-item__actions"},i.default.createElement("div",{className:"starred-item__actions-inner"},i.default.createElement(E.PostTTIStarredItemFileActions,{starredItem:this.props.item,user:this.props.user}),this.renderDropdown())))},t.displayName="StarredItem",t})(i.default.PureComponent);t.StarredItem=C})),define("modules/clean/react/home/starred/starred_item_list",["require","exports","tslib","react","react-dom","modules/clean/react/home/starred/starred_empty_state","modules/clean/react/home/util/logging/activity_logger","modules/clean/react/home/starred/starred_item","modules/clean/react/home/post_tti/api","modules/clean/react/home/util/spinner","modules/clean/react/home/util/show_hide_link","modules/clean/react/home/starred/constants","modules/clean/react/home/store"],(function(e,t,r,a,o,s,i,n,d,c,l,u,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=r.__importDefault(a),o=r.__importDefault(o);var m=(function(e){function t(t){var a=e.call(this,t)||this;return a.toggleShowAll=function(){return r.__awaiter(a,void 0,void 0,(function(){var e,t,a;return r.__generator(this,(function(r){switch(r.label){case 0:return e=!this.state.showAll,i.homeActivityLogger.logClickShowAll("starred",e),this.setState({showAll:e}),e&&this.props.hasMore?[4,d.waitForHomeTTI()]:[3,2];case 1:(0,r.sent().loadAllStarredItems)(),r.label=2;case 2:return(t=o.default.findDOMNode(this.refs.lastUnhiddenStar))&&(a=t.querySelector("a"))&&a.focus(),[2]}}))}))},a.state={showAll:!1},a}return r.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.canShowSpinner,r=e.hasLoadedInitial,o=e.itemModels,i=this.state.showAll,d=p.getUser(),m=Math.max(o.length-u.INITIAL_STARRED_ITEMS_LIMIT,0),_=m&&!i?o.slice(0,u.INITIAL_STARRED_ITEMS_LIMIT):o,S=t&&(i||!r&&!o.length);return a.default.createElement("div",{className:"starred"},a.default.createElement("div",{className:"starred-container"},_.length?a.default.createElement("ul",{className:"starred-list"},_.map((function(e,t){return a.default.createElement(n.StarredItem,{key:e.resourceId,item:e,user:d,position:t,ref:t===u.INITIAL_STARRED_ITEMS_LIMIT-1?"lastUnhiddenStar":void 0})}))):a.default.createElement(s.StarredEmptyState,null),S?a.default.createElement(c.HomeSpinner,null):null,m?a.default.createElement(l.ShowHideLink,{onClick:this.toggleShowAll,isExpanded:i,hiddenItemCount:m,canLoadMore:!1}):null))},t.displayName="StarredItemList",t})(a.default.PureComponent);t.StarredItemList=m})),define("modules/clean/react/home/starred/starred_resource_store",["require","exports","tslib","modules/clean/flux/dispatcher","modules/clean/react/home/constants","modules/clean/react/home/starred/constants","modules/clean/react/starred/constants","modules/clean/react/home/starred/actions","modules/clean/react/starred/store","modules/clean/react/home/util/logging/availability_logger","modules/clean/flux/flux_store","modules/clean/react/home/post_tti/api"],(function(e,t,r,a,o,s,i,n,d,c,l,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var p=(function(e){function t(){var t=e.call(this,a.Dispatcher)||this;return t.orderedIds=[],t.itemsById={},t.loadingState=o.LoadingStates.LOADING,t.hasMore=!0,t.hasLoadedInitial=!1,t.hasLoadedAll=!1,t.isPaperUser=!0,c.getHomeAvailabilityLogger().handlePrefetch(o.HomePrefetchTypes.RETRIEVE_STARRED,(function(e){return n.StarredActions.handleRetrieveStarredPayload(u.waitForHomeTTI,s.StarredResourceActionTypes.LOADING_INITIAL,e)})),t}return r.__extends(t,e),t.prototype.getStarredStore=function(){return d.StarredStore},t.prototype.clearPresentableItemsCache=function(){this.presentableItemsCache=null},t.prototype.getItems=function(){var e=this;return this.presentableItemsCache||(this.presentableItemsCache=this.orderedIds.map((function(t){return e.itemsById[t]})).filter((function(t){var r={id:t.resourceId,type:t.idType},a=e.getStarredStore().getLoadingState(r),o=e.getStarredStore().getIsStarred(r);return a===i.StarredLoadingState.LOADING||o}))),this.presentableItemsCache},t.prototype.getItem=function(e){return this.itemsById[e]},t.prototype.getLoadingState=function(){return this.loadingState},t.prototype.getHasMore=function(){return this.hasMore},t.prototype.getHasLoadedInitial=function(){return this.hasLoadedInitial},t.prototype.getHasLoadedAll=function(){return this.hasLoadedAll},t.prototype.getIsPaperUser=function(){return this.isPaperUser},t.prototype.onItemsLoading=function(){this.loadingState=o.LoadingStates.LOADING},t.prototype.onItemsLoadSuccess=function(e,t){var r=this;e.forEach((function(e){r.itemsById[e.resourceId]=e})),this.loadingState=o.LoadingStates.SUCCESS,this.orderedIds=e.map((function(e){return e.resourceId})),this.hasMore=t,e.length&&this.clearPresentableItemsCache()},t.prototype.onItemsLoadFailure=function(e){this.loadingState=o.LoadingStates.FAILURE,e&&e===s.NOT_PAPER_USER_ERROR&&(this.isPaperUser=!1)},t.prototype.onItemsLoadComplete=function(e,t){e!==s.StarredLoadingTypes.INITIAL&&t||(this.hasLoadedInitial=!0),e!==s.StarredLoadingTypes.ALL&&t||(this.hasLoadedAll=!0)},t.prototype.onStatusChange=function(){u.waitForHomeTTI().then((function(e){return(0,e.loadAllStarredItems)()})),this.clearPresentableItemsCache()},t.prototype.__onDispatch=function(e){var t=e.action;switch(t.type){case s.StarredResourceActionTypes.LOADING_INITIAL:case s.StarredResourceActionTypes.LOADING_ALL:this.onItemsLoading(),this.__emitChange();break;case s.StarredResourceActionTypes.LOAD_SUCCESS:this.onItemsLoadSuccess(t.items,t.hasMore),this.onItemsLoadComplete(t.loadingType,t.hasMore),this.__emitChange();break;case s.StarredResourceActionTypes.LOAD_FAILURE:this.onItemsLoadFailure(t.error),this.onItemsLoadComplete(t.loadingType,!0),this.__emitChange();break;case i.StarredActionTypes.LOADING:this.clearPresentableItemsCache(),this.__emitChange();break;case i.StarredActionTypes.SET_STATUS:this.onStatusChange(),this.__emitChange()}},t})(l.FluxStore);t.PrivateStarredResourceStoreClass=p;var m=null;t.getStarredResourceStore=function(){return null===m&&(m=new p),m}})),define("modules/clean/react/home/starred/starred_view",["require","exports","tslib","react","modules/clean/react/home/constants","modules/clean/react/home/starred/constants","modules/clean/react/home/starred/starred_item_list","modules/clean/react/home/starred/starred_layout","modules/clean/react/home/starred/starred_resource_store","modules/clean/react/home/util/logging/activity_logger","modules/clean/react/home/util/logging/timing_component","modules/clean/react/home/util/logging/timing_logger"],(function(e,t,r,a,o,s,i,n,d,c,l,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var p=(function(e){function t(t){var r=e.call(this,t)||this;return r.onStoreUpdate=function(){return r.setState(r.getStateFromStore())},r.removeStoreListener=d.getStarredResourceStore().addListener(r.onStoreUpdate),r.state=r.getStateFromStore(),r}return r.__extends(t,e),t.prototype.getStateFromStore=function(){var e=d.getStarredResourceStore(),t=e.getLoadingState(),r=e.getItems(),a=e.getHasMore(),i=e.getHasLoadedInitial();if(t===o.LoadingStates.SUCCESS&&u.homeTimingLogger.logTTData(o.HomeSections.STARRED)){var n=r.length>s.INITIAL_STARRED_ITEMS_LIMIT;c.homeActivityLogger.logStarredShown(r.length,n,a)}return{itemModels:r,hasLoadedInitial:i,hasMore:a,canShowSpinner:t===o.LoadingStates.LOADING&&!e.getHasLoadedAll()}},t.prototype.componentWillUnmount=function(){this.removeStoreListener&&this.removeStoreListener()},t.prototype.render=function(){var e=this.props,t=e.canRenderItems,o=e.isHiddenByUser;return t?a.default.createElement(n.StarredLayout,r.__assign({isHiddenByUser:o,starredComponent:i.StarredItemList},this.state)):null},t.displayName="StarredView",t})((a=r.__importDefault(a)).default.PureComponent);t.StarredView=l.timingComponent(p,o.HomeSections.STARRED),t.RootComponent=function(e){return a.default.createElement(t.StarredView,r.__assign({},e))}})),define("modules/clean/react/home/util/paper_utils",["require","exports","modules/clean/navigation"],(function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sharePaperDoc=function(e,t){r.logAndNavigate(e+"?openSharing=1",t)}})),define("modules/clean/react/home/util/rendering_utils",["require","exports","modules/clean/em_string","modules/core/i18n"],(function(e,t,r,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a._("Untitled");t.truncateTitle=function(e){return r.Emstring.em_snippet(e.trim().length?e:o,30)}})),define("modules/clean/react/home/util/spinner",["require","exports","tslib","react"],(function(e,t,r,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=r.__importDefault(a),t.HomeSpinner=function(){return a.default.createElement("div",{className:"home-access__loading-indicator home--loading-indicator"},a.default.createElement("div",{className:"maestro-loading-spinner"}))}})),define("modules/clean/react/home/recents/recent_activity_starred",["require","exports","tslib","external/lodash","modules/clean/react/starred/id_type_pair"],(function(e,t,r,a,o){"use strict";function s(e){return e.resource_id&&e.id_type?{id:e.resource_id,type:e.id_type}:null}Object.defineProperty(t,"__esModule",{value:!0}),a=r.__importStar(a),t.getIdTypePair=s,t.getIdTypePairsByRecentActivityItems=function(e){var t={};return e.forEach((function(e){var r=s(e);r&&(t[o.idTypePairToString(r)]=r)})),a.values(t)},t.getIdTypePairFromRecentItem=function(e){return e.resourceId&&e.idType?{id:e.resourceId,type:e.idType}:null}}));
//# sourceMappingURL=pkg-starred.min.js-vflmHR6bE.map