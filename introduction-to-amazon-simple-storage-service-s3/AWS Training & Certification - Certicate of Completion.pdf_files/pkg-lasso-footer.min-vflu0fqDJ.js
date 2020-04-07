define("modules/clean/react/maestro/components/callout",["require","exports","tslib","classnames","react","modules/clean/react/css","modules/clean/react/bubble_dropdown_v2","modules/clean/react/overlay","spectrum/button"],(function(e,t,o,n,r,a,s,l,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=o.__importDefault(n),r=o.__importDefault(r);var c=[s.BubbleDropdownPositions.BOTTOM,s.BubbleDropdownPositions.BOTTOM_LEFT,s.BubbleDropdownPositions.TOP_LEFT,s.BubbleDropdownPositions.TOP_ALIGN_RIGHT,s.BubbleDropdownPositions.LEFT],u=(function(e){function t(t){var o=e.call(this,t)||this;return o.onContentClicked=function(e){e.stopPropagation()},o.onDismiss=function(){o.setState({show:!1},o.props.onDismiss)},o.updateTargetDimension=function(){var e=o.props.targetNode;if(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;o.setState({targetNodeDimensions:{width:n,height:r}})}},o.state={show:t.show},o}return o.__extends(t,e),t.prototype.componentWillReceiveProps=function(e){!this.props.show&&e.show&&this.setState({show:!0}),!this.props.parentHasBeenClicked&&e.parentHasBeenClicked&&this.onDismiss()},t.prototype.componentDidUpdate=function(e,t){!e.targetNode&&this.props.targetNode&&this.props.targetNode.addEventListener("click",this.onDismiss)},t.prototype.getArrowPositionOverrides=function(){return this.state.targetNodeDimensions&&this.props.position===s.BubbleDropdownPositions.TOP_ALIGN_RIGHT?{left:"calc(100% - "+this.state.targetNodeDimensions.width/2+"px)"}:{}},t.prototype.getCssPositioningClass=function(e){return e===s.BubbleDropdownPositions.TOP_ALIGN_RIGHT?s.POSITION_TO_CSS_CLASS_MAP[s.BubbleDropdownPositions.TOP_LEFT]:s.POSITION_TO_CSS_CLASS_MAP[e]},t.prototype.render=function(){if(!this.props.show||!this.state.show||!this.props.targetNode)return null;var e=this.props.position||s.BubbleDropdownPositions.BOTTOM;if(!c.includes(e))return null;var t=n.default("callout-container","callout-container--"+this.getCssPositioningClass(e),this.props.className);return r.default.createElement(l.PositionedOverlay,{targetNode:this.props.targetNode,position:e,onReposition:this.updateTargetDimension},r.default.createElement("div",{className:t},r.default.createElement("div",{onClick:this.onContentClicked,className:n.default("callout-content",this.props.contentClassName)},r.default.createElement("div",{className:"callout-content-title"},r.default.createElement("button",{className:"callout-dismiss","aria-label":"dismiss-callout",onClick:this.onDismiss}),this.props.title),r.default.createElement("div",{className:"callout-content-message"},this.props.message),this.props.CTAText&&this.props.onClickCTA&&r.default.createElement(i.Button,{className:"callout-cta",onClick:this.props.onClickCTA,variant:"borderless"},this.props.CTAText)),r.default.createElement("div",{className:"callout-arrow-container",style:this.getArrowPositionOverrides()},r.default.createElement("div",{className:"callout-arrow-border"}),r.default.createElement("div",{className:"callout-arrow"}))))},t})(r.default.Component);t.Callout=a.requireCssWithComponent(u,["/static/css/callout-vflVQ36V3.css"])})),define("modules/clean/react/lasso/footer",["require","exports","tslib","react","dropbox/proto/js_init_data/home_web/lasso_footer","proto_utils/unpack","spectrum/overflow_button","spectrum/popover","modules/clean/analytics","modules/clean/loggers/growth_features_events_logger","modules/clean/react/locale_selector","modules/clean/react/title_bubble","modules/core/i18n"],(function(e,t,o,n,r,a,s,l,i,c,u,d,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=o.__importDefault(n),c=o.__importStar(c);var f=(u=o.__importStar(u)).LocaleSelectorModal,m=r.lasso_footer.LassoFooterPageletProps,h=(function(t){function r(){var r=null!==t&&t.apply(this,arguments)||this;return r.state={hasMouseOver:!1},r.noop=function(){},r.loadComponent=function(t){new Promise((function(t,o){e(["modules/clean/web_timing_logger"],t,o)})).then(o.__importStar).then((function(n){(0,n.waitForTTI)().then((function(){var n=function(e){var o=e.Modal;r.setState({modal:o}),t()};n.perfName="react_modal",new Promise((function(t,o){e(["modules/clean/react/modal"],t,o)})).then(o.__importStar).then(n)}))}))},r.renderPopoverContentItem=function(e){return n.default.createElement(l.PopoverContentItem,{className:"other-link",key:e.text.toLowerCase(),href:e.href,target:"_blank",rel:"noopener noreferrer"},e.text)},r.logLinkClick=function(e){i.TeamsWebActionsLogger.log("footer_button_clicked"),c.logLassoEvent("footer_button_clicked",{buttonText:e.currentTarget.text,buttonHref:e.currentTarget.href})},r.handleLinkSelection=function(e,t){r.logLinkClick(t),"language-button"===t.currentTarget.id&&r.showLocaleModal()},r.onMouseEnter=function(e){r.setState({hasMouseOver:!0})},r.onMouseLeave=function(e){r.setState({hasMouseOver:!1})},r}return o.__extends(r,t),r.prototype.componentDidMount=function(){this.loadComponent(this.noop)},r.prototype.renderPopoverContentItems=function(){var e=this.props.otherLinks.map(this.renderPopoverContentItem),t=n.default.createElement(l.PopoverContentItem,{className:"other-link",key:"language",id:"language-button",href:"#"},this.props.buttonContent.language);return e.push(t),e},r.prototype.showLocaleModal=function(){var e=this.state.modal;e?e.showInstance(n.default.createElement(f,{isTeamAdminSettingsConsole:!1,shouldAllowInternalLocales:!1,isRebrand:!1})):this.loadComponent(this.showLocaleModal)},r.prototype.render=function(){var e=this.props,t=e.buttonContent,o=e.privacyHref,r=e.helpHref,a=this.state.hasMouseOver?"secondary":"borderless";return n.default.createElement("footer",{className:"lasso-footer",onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave},n.default.createElement("div",{id:"page-footer"},n.default.createElement(l.Popover,{className:"other-links",onSelection:this.handleLinkSelection},n.default.createElement(l.PopoverTrigger,null,n.default.createElement(s.OverflowButton,{tagName:"span","aria-label":t.more,variant:a})),n.default.createElement(l.PopoverContent,{attachment:"right",position:"above"},this.renderPopoverContentItems())),n.default.createElement("a",{className:"privacy-link",href:o,tabIndex:0,onClick:this.logLinkClick,target:"_blank",rel:"noopener noreferrer"},t.privacy),n.default.createElement(d.TitleBubble,{content:t.help,position:d.TitleBubble.POSITIONS.TOP,isTargetPositionFixed:!1,distanceFromTarget:5},n.default.createElement("a",{className:"help-button","aria-label":p._("Help center"),href:r,onClick:this.logLinkClick,target:"_blank",rel:"noopener noreferrer",tabIndex:0},"?"))))},r})(n.default.Component);t.LassoFooter=h,t.RootComponent=function(e){var t=a.unpack(e.encodedProto,m);return n.default.createElement(h,o.__assign({},t))}})),define("modules/clean/react/locale_selector",["require","exports","tslib","react","react-dom-factories","prop-types","external/lodash","jquery","modules/clean/ajax","modules/clean/intl_router_utils","modules/clean/react/css","modules/clean/react/modal","modules/clean/react/sprite","modules/constants/locales","modules/constants/page_load","modules/core/browser","modules/core/i18n","modules/core/notify","modules/core/uri"],(function(e,t,o,n,r,a,s,l,i,c,u,d,p,f,m,h,_,g,b){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=o.__importDefault(n),r=o.__importStar(r),a=o.__importStar(a),l=o.__importDefault(l),i=o.__importStar(i),f=o.__importStar(f),m=o.__importStar(m),h=o.__importStar(h);var L=n.default.createElement,v=function(e,t,o){void 0===o&&(o=!1);var n=o?"/team/admin/set_locale":"/set_locale";return g.Notify.success(_._("Changing language...")),i.SilentBackgroundRequest({url:new b.URI({path:n}),data:{locale:e,locale_cont:t},success:function(){return h.redirect(t)}})},C=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype.render=function(){var e=this.props.locale.localeName;return""!==this.props.locale.decorator&&(e+=" ["+this.props.locale.decorator+"]"),r.span({"data-locale":this.props.locale.localeCode},e)},t.displayName="LocaleTag",t.propTypes={locale:a.shape({localeCode:a.string.isRequired,localeName:a.string.isRequired,decorator:a.string.isRequired}).isRequired},t})(n.default.Component),w=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleCloseModal=function(e){return history.pushState("",document.title,h.get_href_no_hash())},t.handleLocaleSelected=function(e){return function(o){return o.preventDefault(),history.pushState("",document.title,h.get_href_no_hash()),d.Modal.close(),v(e,h.get_href_no_hash(),t.props.isTeamAdminSettingsConsole)}},t._renderLocaleList=function(){var e,o=c.isIntlRouterPath();return e=t.props.shouldAllowInternalLocales?f.LIST_OF_LOCALES_WITH_INTERNAL:f.LIST_OF_LOCALES_WITHOUT_INTERNAL,r.div({className:"react-locale-selector-modal"},r.ul({className:"react-locale-selector-modal__list u-unlist u-trim-padding"},Array.from(e).map((function(e){return t._renderLocale(e,o)}))))},t._renderLocale=function(e,o){return o?n.default.createElement("li",{key:e.localeCode},n.default.createElement("a",{href:c.getCurrentPathWithLocaleCode(e.localeCode)},n.default.createElement(C,{locale:e}))):n.default.createElement("li",{key:e.localeCode},n.default.createElement("button",{className:"locale-option button-as-link react-locale-selector-modal__list-item-button",onClick:t.handleLocaleSelected(e.localeCode)},n.default.createElement(C,{locale:e})))},t}return o.__extends(t,e),t.prototype.render=function(){var e="uxa-modal",t="default",o=550;return this.props.isRebrand&&(t="simple",o=null,e+=" rebrand-locale-modal"),L(d.Modal,{onDismissCompleted:this.handleCloseModal,className:e,id:"locale-selector-modal",ref:"modal",width:o,title:_._("Choose a language:"),acceptButtonText:null,style:t},this._renderLocaleList())},t.displayName="LocaleSelectorModal",t.propTypes={isTeamAdminSettingsConsole:a.bool.isRequired,shouldAllowInternalLocales:a.bool.isRequired,isRebrand:a.bool.isRequired},t})(n.default.Component);t.LocaleSelectorModal=u.requireCssWithComponent(w,["/static/css/components/react_locale_selector-vfl6fkA7q.css","/static/css/font_atlas_grotesk-vfldINMge.css","/static/css/font_sharp_grotesk-vfle4tE4q.css","/static/css/modal-vflyV3KII.css"]);var S=(function(e){function n(){var o=null!==e&&e.apply(this,arguments)||this;return o.handleLocaleLinkClick=function(e){return e.preventDefault(),d.Modal.showInstance(L(t.LocaleSelectorModal,{isTeamAdminSettingsConsole:o.props.isTeamAdminSettingsConsole,shouldAllowInternalLocales:o.props.shouldAllowInternalLocales,isRebrand:o.props.isRebrand}))},o._renderLocaleLink=function(){return r.span({id:"locale-link"},L(p.Sprite,{group:"web",name:"globe_gray_20x20",alt:""}),r.button({className:"button-as-link react-locale-selector-link",title:_._("Choose a language"),onClick:o.handleLocaleLinkClick},L(C,{locale:s.find(f.LIST_OF_LOCALES_WITH_INTERNAL,(function(e){return e.localeCode===m.USER_LOCALE}))}),L(p.Sprite,{class:"arrow",group:"web",name:"arrow-up-gray",alt:""})))},o}return o.__extends(n,e),n.showModal=function(e,o){return void 0===e&&(e=!1),void 0===o&&(o=!0),d.Modal.showInstance(L(t.LocaleSelectorModal,{isTeamAdminSettingsConsole:e,shouldAllowInternalLocales:o,isRebrand:!1}))},n.prototype.render=function(){return r.div({id:"locale-container"},this._renderLocaleLink())},n.displayName="LocaleSelector",n.propTypes={isTeamAdminSettingsConsole:a.bool,shouldAllowInternalLocales:a.bool,isRebrand:a.bool},n.defaultProps={isTeamAdminSettingsConsole:!1,shouldAllowInternalLocales:!0,isRebrand:!1},n})(n.default.Component);t.LocaleSelectorWithoutCss=S;var k=u.requireCssWithComponent(S,["/static/css/components/react_locale_selector-vfl6fkA7q.css","/static/css/font_atlas_grotesk-vfldINMge.css","/static/css/font_sharp_grotesk-vfle4tE4q.css"]);t.LocaleSelector=k,t.initialize_module=function(e){if(null!=e?e.dom_id:void 0)return l.default(document).ready((function(){return l.default("#"+e.dom_id).click((function(){return k.wrappedClass.showModal()}))}))}})),define("modules/clean/intl_router_utils",["require","exports","tslib","modules/core/browser","modules/constants/locales"],(function(e,t,o,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=o.__importStar(n),r=o.__importStar(r),t.isIntlRouterPath=function(){var e=n.get_pathname();if("/"!==e[0])return!1;for(var t=e.split("/",2)[1],o=0,a=r.LIST_OF_LOCALES_WITHOUT_INTERNAL;o<a.length;o++){if(a[o].localeCode===t)return!0}return!1},t.getCurrentPathWithLocaleCode=function(e){var t=n.get_pathname();if("/"!==t[0])return t;var o=t.split("/"),a=o[1];return r.LIST_OF_LOCALES_WITHOUT_INTERNAL.some((function(t){return t.localeCode===e}))&&r.LIST_OF_LOCALES_WITHOUT_INTERNAL.some((function(e){return e.localeCode===a}))?(o[1]=e,o.join("/")):t}})),define("modules/clean/react/growth/util",["require","exports","modules/clean/api_v2/user_client","modules/clean/payments/skus/constants"],(function(e,t,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r;(function(e){e[e.MONTHLY=1]="MONTHLY",e[e.YEARLY=2]="YEARLY",e[e.PLUS=3]="PLUS",e[e.PROFESSIONAL=4]="PROFESSIONAL",e[e.ADD_EVH=5]="ADD_EVH",e[e.REMOVE_EVH=6]="REMOVE_EVH"})(r=t.PerformPlanTransition||(t.PerformPlanTransition={})),t.getActiveUserId=function(){if(window.ensemble)return window.ensemble.viewer.getActiveUser().userId},t.getImageOS=function(){return window&&window.navigator&&window.navigator.platform&&window.navigator.platform.indexOf&&-1!==window.navigator.platform.indexOf("Mac")?"mac":"win"},t.getTransitionChangeType=function(e){if(e.finalSubState.planSku){if(e.finalSubState.planSku.productType===n.ProductPlanType.PLUS)return r.PLUS;if(e.finalSubState.planSku.productType===n.ProductPlanType.PROFESSIONAL)return r.PROFESSIONAL}return null},(function(e){e.LOCAL="local",e.ONDEMAND="on_demand"})(t.SmartSyncOption||(t.SmartSyncOption={})),t.markModuleAsCompleted=function(e,t){(new o.UserApiV2Client).ns("growth").rpc("mark_onboarding_modules_as_completed",{modules:[t]},{subjectUserId:e})}})),define("modules/clean/ts_utils",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.enforceExhaustive=function(e){return e},t.throwEnforceExhaustive=function(e,t){throw new Error(t)}})),define("modules/clean/viewer_refresh",["require","exports","modules/clean/viewer","modules/clean/ajax","modules/core/exception"],(function(e,t,o,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.refreshViewerAfterLogin=function(){return r.assert(!o.Viewer.get_viewer().is_signed_in,"Attempted to use refreshViewerAfterLogin but already logged in"),new Promise((function(e,t){return n.WebRequest({url:"/get_viewer",success:function(n){try{o.Viewer.get_viewer().replace_viewer_data(JSON.parse(n)),e()}catch(e){t({error:e})}},error:function(e,o,n){t({error:n})}})}))}})),define("dropbox/proto/js_init_data/home_web/lasso_footer",["require","exports","tslib","protobufjs/minimal"],(function(e,t,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=(n=o.__importStar(n)).Reader,s=n.Writer,l=n.util,i=n.roots.default||(n.roots.default={});t.default=i,t.lasso_footer=i.lasso_footer=((r=i.lasso_footer||{}).Link=(function(e){function e(e){if(e)for(var t=Object.keys(e),o=0;o<t.length;++o)null!=e[t[o]]&&(this[t[o]]=e[t[o]])}return e.prototype.text="",e.prototype.href="",e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=s.create()),null!=e.text&&Object.hasOwnProperty.call(e,"text")&&t.uint32(10).string(e.text),null!=e.href&&Object.hasOwnProperty.call(e,"href")&&t.uint32(18).string(e.href),t},e.decode=function(e,t){e instanceof a||(e=a.create(e));for(var o=void 0===t?e.len:e.pos+t,n=new i.lasso_footer.Link;e.pos<o;){var r=e.uint32();switch(r>>>3){case 1:n.text=e.string();break;case 2:n.href=e.string();break;default:e.skipType(7&r)}}return n},e})(r.Link||{}),r.LassoFooterPageletProps=(function(e){function e(e){if(this.otherLinks=[],this.buttonContent={},e)for(var t=Object.keys(e),o=0;o<t.length;++o)null!=e[t[o]]&&(this[t[o]]=e[t[o]])}return e.prototype.helpHref="",e.prototype.otherLinks=l.emptyArray,e.prototype.privacyHref="",e.prototype.buttonContent=l.emptyObject,e.create=function(t){return new e(t)},e.encode=function(e,t){if(t||(t=s.create()),null!=e.helpHref&&Object.hasOwnProperty.call(e,"helpHref")&&t.uint32(10).string(e.helpHref),null!=e.otherLinks&&e.otherLinks.length)for(var o=0;o<e.otherLinks.length;++o)i.lasso_footer.Link.encode(e.otherLinks[o],t.uint32(18).fork()).ldelim();if(null!=e.privacyHref&&Object.hasOwnProperty.call(e,"privacyHref")&&t.uint32(26).string(e.privacyHref),null!=e.buttonContent&&Object.hasOwnProperty.call(e,"buttonContent")){var n=Object.keys(e.buttonContent);for(o=0;o<n.length;++o)t.uint32(34).fork().uint32(10).string(n[o]).uint32(18).string(e.buttonContent[n[o]]).ldelim()}return t},e.decode=function(e,t){e instanceof a||(e=a.create(e));for(var o,n=void 0===t?e.len:e.pos+t,r=new i.lasso_footer.LassoFooterPageletProps;e.pos<n;){var s=e.uint32();switch(s>>>3){case 1:r.helpHref=e.string();break;case 2:r.otherLinks&&r.otherLinks.length||(r.otherLinks=[]),r.otherLinks.push(i.lasso_footer.Link.decode(e,e.uint32()));break;case 3:r.privacyHref=e.string();break;case 4:e.skip().pos++,r.buttonContent===l.emptyObject&&(r.buttonContent={}),o=e.string(),e.pos++,r.buttonContent[o]=e.string();break;default:e.skipType(7&s)}}return r},e})(r.LassoFooterPageletProps||{}),r)}));
//# sourceMappingURL=pkg-lasso-footer.min.js-vflj8HPAl.map