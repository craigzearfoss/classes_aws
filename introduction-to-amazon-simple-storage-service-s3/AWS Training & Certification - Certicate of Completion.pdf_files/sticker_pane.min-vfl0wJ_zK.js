define(["require","exports","tslib","react","classnames","prop-types"],(function(e,t,i,r,s,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r=i.__importStar(r),s=i.__importDefault(s),n=i.__importStar(n);var c=(function(e){function t(){var t=e.apply(this,arguments)||this;return t.state={gifLoaded:!1},t.handleGifLoaded=function(){t.setState({gifLoaded:!0})},t.handleOnClick=function(){var e=t.props.sticker,i=e.is_live_sticker?e.base_url+"?type=gif":e.base_url+"?type=png";t.props.onClick(e.id,i,e.name)},t}return i.__extends(t,e),Object.defineProperty(t.prototype,"intl",{get:function(){return this.context.localization.intl},enumerable:!0,configurable:!0}),t.prototype.render=function(){var e=this.props.sticker,t=this.intl.formatMessage({id:"uEtdY",defaultMessage:"Insert {description}"},{description:e.description});return r.createElement("button",{className:"sc-sticker-option","aria-label":t,onClick:this.handleOnClick},e.is_live_sticker&&r.createElement("img",{className:this.state.gifLoaded?"sc-sticker-option-sticker-gif":"sc-sticker-option-sticker-gif-invisible",src:e.base_url+"?type=gif",alt:e.description,title:e.description,onLoad:this.handleGifLoaded}),!this.state.gifLoaded&&r.createElement("img",{className:"sc-sticker-option-sticker",alt:e.description,title:e.description,src:e.base_url+"?type=png"}))},t})(r.Component);c.contextTypes={localization:n.object};var o=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(t,e),Object.defineProperty(t.prototype,"className",{get:function(){return s.default("sc-sticker-pack",{"sc-sticker-pack-is-selected":this.props.isSelected})},enumerable:!0,configurable:!0}),t.prototype.render=function(){var e=this,t=this.props.stickerPack;return r.createElement("div",{className:this.className},t.stickers.map((function(t){return r.createElement(c,{sticker:t,onClick:e.props.onStickerSelected,key:t.id})})))},t})(r.Component);t.StickerPaneComponent=o}));
//# sourceMappingURL=sticker_pane.min.js-vflLHZBFT.map