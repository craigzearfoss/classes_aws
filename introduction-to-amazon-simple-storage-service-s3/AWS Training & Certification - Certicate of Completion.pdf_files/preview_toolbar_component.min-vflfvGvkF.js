define(["require","exports","tslib","react","classnames","external/lodash","react-redux","modules/clean/react/css","modules/clean/react/file_viewer/full_screen_helpers","modules/clean/react/file_viewer/data/selectors","modules/clean/react/comments2/data/selectors"],(function(e,t,o,n,r,a,i,s,l,u,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=o.__importDefault(n),r=o.__importDefault(r),a=o.__importStar(a);var d=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={visible:!1,fadingOut:!1},t.fadeIn=function(){t.isViewerFullscreen()||(t.setState({visible:!0,fadingOut:!1}),t.props.onToolbarShow&&t.props.onToolbarShow())},t.fadeOut=a.debounce((function(){t.props.stayVisible?t.fadeOut():(t.setState({fadingOut:!0}),t.props.onToolbarHide&&t.props.onToolbarHide(),t.startFadeTimeout())}),1500),t.mouseMove=a.throttle((function(){t.state.hovering||(t.fadeIn(),t.fadeOut())}),100),t.onMouseEnterToolbar=function(){t.setState({hovering:!0}),t.fadeOut.cancel()},t.onMouseLeaveToolbar=function(){t.setState({hovering:!1})},t.startFadeTimeout=a.debounce((function(){t.setState({visible:!1,fadingOut:!1})}),400),t.onFocus=function(){t.setState({visible:!0})},t}return o.__extends(t,e),t.prototype.componentDidMount=function(){this.fadeIn(),document.addEventListener("mousemove",this.mouseMove)},t.prototype.componentWillUnmount=function(){this.clearAllTimeouts(),document.removeEventListener("mousemove",this.mouseMove)},t.prototype.clearAllTimeouts=function(){this.startFadeTimeout.cancel(),this.fadeOut.cancel()},t.prototype.isViewerFullscreen=function(){return this.props.isFullscreen||l.isBrowserFullScreen()},t.prototype.render=function(){var e=this.props,t=e.children,o=e.elevateToolbar,a=e.fadeController,i=e.isHidden,s=this.state,l=s.fadingOut,u=s.visible;return n.default.createElement("div",{className:r.default("preview-toolbar-container",{"preview-toolbar-container--elevated":!!o}),onFocus:this.onFocus},n.default.createElement("div",{className:r.default("preview-toolbar-overlay-container",{hide:!u||i,fadeout:l})},n.default.createElement("div",{className:"preview-toolbar-overlay",onMouseEnter:this.onMouseEnterToolbar,onMouseLeave:this.onMouseLeaveToolbar},n.default.createElement("div",{className:"preview-toolbar-content"},t,a&&a({fadeIn:this.fadeIn,fadeOut:this.fadeOut})))))},t})(n.default.Component);t._PreviewToolbar=d,t.ConnectedPreviewToolbar=i.connect((function(e){return{forceHideToolbar:u.shouldForceHideToolbar(e)||c.getHasPendingNumberedAnnotation(e)}}))(d);var f=s.requireCssWithComponent(t.ConnectedPreviewToolbar,["/static/css/preview_toolbar-vflMb1NGN.css"]);t.PreviewToolbar=f}));
//# sourceMappingURL=preview_toolbar_component.min.js-vfl1gE8Vt.map