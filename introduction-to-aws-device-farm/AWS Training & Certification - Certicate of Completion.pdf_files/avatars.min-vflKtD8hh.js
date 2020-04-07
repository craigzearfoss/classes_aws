define(["require","exports","tslib","react","comments2/components/rich_facepile/context","spectrum/avatar","spectrum/facepile","comments2/components/rich_facepile/spectrum_fork/facepile_members_avatar","spectrum/util/uuid_generator","comments2/components/rich_facepile/leave_active_mode_wrapper"],(function(e,t,o,i,n,r,a,l,c,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i=o.__importStar(i),t.OVERFLOW="overflow",t.MAX_FACES=5;var p;(p=t.DisplayMode||(t.DisplayMode={}))[p.Auto=1]="Auto",p[p.ForceShow=2]="ForceShow",p[p.ForceHide=3]="ForceHide",p[p.Hover=4]="Hover";var d=(function(e){function n(){var o=e.apply(this,arguments)||this;return o.state={},o.tooltipContentWrapperClassName=c.generateUUID("sc-rich-facepile-tooltip-content"),o.documentClickListener=function(e){var t=e.target;void 0===o.state.activeTooltipIndex||o.closest(t,o.tooltipContentWrapperClassName)||o.closest(t,"mc-facepile-container")||o.setActiveTooltipIndex(void 0)},o.leaveActiveMode=function(){o.setActiveTooltipIndex(void 0)},o.bindN=function(e){for(var o=[],i=function(t){o.push((function(){return e(t)}))},n=0;n<t.MAX_FACES;n++)i(n);return o},o.onTooltipShownForIndex=function(e){if(!o.activeMode){var t=o.props.onTooltipChange,i=o.infoFromIndex(e);if(t&&null!==i){var n=o.avatarRectForIndex(e,i);t({activeMode:o.activeMode,displayInfo:null},{activeMode:o.activeMode,displayInfo:i,avatarRect:n})}}},o.onTooltipHiddenForIndex=function(e){if(!o.activeMode){var t=o.props.onTooltipChange,i=o.infoFromIndex(e);t&&null!==i&&t({activeMode:o.activeMode,displayInfo:i},{activeMode:o.activeMode,displayInfo:null})}},o.onAvatarClickForIndex=function(e){var i=o.props,n=i.becomePassiveOnOverflowAvatarClick,r=i.onAvatarClick,a=o.infoFromIndex(e),l=n&&a===t.OVERFLOW;l||o.activeMode||o.setActiveTooltipIndex(e),l&&o.activeMode&&o.setActiveTooltipIndex(void 0),a&&r&&r(a)},o.onAvatarMouseOverForIndex=function(e){o.activeMode&&o.setActiveTooltipIndex(e)},o.onTooltipShown=o.bindN(o.onTooltipShownForIndex),o.onTooltipHidden=o.bindN(o.onTooltipHiddenForIndex),o.onAvatarClick=o.bindN(o.onAvatarClickForIndex),o.onAvatarMouseOver=o.bindN(o.onAvatarMouseOverForIndex),o.avatarDivRefs=Array(t.MAX_FACES).fill(0).map((function(e){return i.createRef()})),o}return o.__extends(n,e),n.prototype.componentDidMount=function(){document.addEventListener("click",this.documentClickListener,!0),window.addEventListener("resize",this.leaveActiveMode,!0)},n.prototype.componentWillUnmount=function(){document.removeEventListener("click",this.documentClickListener,!0),window.removeEventListener("resize",this.leaveActiveMode,!0)},n.prototype.closest=function(e,t){for(;e;e=e.parentElement)if(e.classList.contains(t))return e;return null},Object.defineProperty(n.prototype,"activeMode",{get:function(){return void 0!==this.state.activeTooltipIndex},enumerable:!0,configurable:!0}),n.prototype.setActiveTooltipIndex=function(e){var t=this.state.activeTooltipIndex,o=this.props.onTooltipChange;if(o&&t!==e){var i=this.activeMode,n=void 0!==e,r=n?this.infoFromIndex(e):null;o({activeMode:i,displayInfo:i?this.infoFromIndex(t):r},{activeMode:n,displayInfo:r,avatarRect:n?this.avatarRectForIndex(e,r):void 0})}this.setState({activeTooltipIndex:e})},n.prototype.displayModeForIndex=function(e){var o=this.state.activeTooltipIndex,i=this.props.passiveShowOnHover?t.DisplayMode.Hover:t.DisplayMode.Auto;return void 0===o?i:o===e?t.DisplayMode.ForceShow:t.DisplayMode.ForceHide},n.prototype.infoFromIndex=function(e){var o=this.props,i=o.avatarInfoList,n=o.avatarInfoList.length;return o.overflowRemainderCount&&e===n?t.OVERFLOW:e>=n?null:i[e]},n.prototype.getBoundingClientRectForRef=function(e){var t=e.current;return t?t.getBoundingClientRect():{left:-1,top:-1,width:0,height:0,right:-1,bottom:-1}},n.prototype.avatarRectForIndex=function(e,t){if(void 0===t&&(t=this.infoFromIndex(e)),t){var o=this.getBoundingClientRectForRef(this.avatarDivRefs[e]);return{origin:{x:o.left,y:o.top},size:{width:o.width,height:o.height}}}},Object.defineProperty(n.prototype,"intl",{get:function(){return this.context.intl},enumerable:!0,configurable:!0}),n.prototype.render=function(){var e=this,o=this.props,n=o.avatarSize,c=o.avatarInfoList,p=o.overflowRemainderCount,d=o.tooltipComponent,v=o.renderFacepile,u=c.map((function(t,o){var a,c=t.present,p=t.activeTooltipContent,v=t.avatarColorSeed,u=t.displayName,f=t.initials,h=t.memberKey,m=t.passiveTooltipContent,C=t.photoUrl,M=v||u,F=i.createElement("div",{onFocusCapture:e.onAvatarMouseOver[o],ref:e.avatarDivRefs[o]},i.createElement(l.FacepileMembersAvatar,{active:c,"aria-label":u,avatarColorSeed:M,avatarSize:n,initials:f,onClick:e.onAvatarClick[o],onMouseOver:e.onAvatarMouseOver[o],photoUrl:C}));return e.activeMode?null!==(a=void 0!==p?p:m)&&(a=i.createElement(s.LeaveActiveModeWrapperContext.Provider,{value:{signalClick:e.leaveActiveMode}},a)):a=m,i.createElement(d,{avatar:F,displayMode:e.displayModeForIndex(o),tooltipContent:a,avatarColor:r.avatarColorForUserIdentifier(M),onTooltipShown:e.onTooltipShown[o],onTooltipHidden:e.onTooltipHidden[o],tooltipContentWrapperClassName:e.tooltipContentWrapperClassName,key:h})})),f=this.context.localization,h=this.intl;if(p){var m=void 0;m=h?h.formatMessage({id:"2vfyO",defaultMessage:"99+"}):f?f.ninetyNinePlus:"";var C=p>=99?m:""+p,M=c.length,F=i.createElement("div",{onFocusCapture:this.onAvatarMouseOver[M],ref:this.avatarDivRefs[M]},i.createElement(a.FacepileMembersOverflowCircle,{avatarSize:n,backgroundColor:"#627283",textColor:"white",onClick:this.onAvatarClick[M],onMouseOver:this.onAvatarMouseOver[M],remainderCount:C})),I=void 0;I=h?h.formatMessage({id:"2jr6K",defaultMessage:"{count, plural, one {# other} other {# others}}"},{count:p}):f?f.nOthers(p,C):"",u.push(i.createElement(d,{avatar:F,displayMode:this.displayModeForIndex(M),tooltipContent:i.createElement("div",{className:"sc-rich-facepile-overflow-tooltip-content"},I),avatarColor:"#627283",onTooltipShown:this.onTooltipShown[M],onTooltipHidden:this.onTooltipHidden[M],tooltipContentWrapperClassName:this.tooltipContentWrapperClassName,key:t.OVERFLOW}))}return v(u)},n})(i.Component);t.Avatars=d,d.contextType=n.RichFacepileContext}));
//# sourceMappingURL=avatars.min.js-vflLGDrY7.map