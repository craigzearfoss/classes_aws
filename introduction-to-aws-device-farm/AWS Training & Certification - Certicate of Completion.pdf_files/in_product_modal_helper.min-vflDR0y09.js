define(["require","exports","tslib","react","modules/core/browser","modules/core/uri","modules/clean/api_v2/user_client"],(function(e,n,t,o,s,i,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),o=t.__importStar(o),s=t.__importStar(s);var r=(function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.state={isOpen:!1,showAnnouncement:!1,onRequestClose:function(){}},n.closeModal=function(){n.setState({isOpen:!1})},n.getInitialModalProps=function(e){void 0===e&&(e=!0);var t=s.get_hash(),o=i.URI.parse(s.get_href()).getQuery();if(n.props.openIf)return{isOpen:!0,showAnnouncement:!0};var a=!1,r=!1;return e&&o.modal?(a="mont"===o.modal,r="1"!==o.ss):t&&(a="o-ipa"===t||"o-ipa-ss"===t,r="o-ipa-ss"!==t),{isOpen:a,showAnnouncement:r}},n.maybeDisplayModal=function(){var e=n.getInitialModalProps();n.displayModal(e)},n.handleHashChange=function(){var e=n.getInitialModalProps(!1);n.displayModal(e)},n.displayModal=function(e){n.props.openIf&&(new a.UserApiV2Client).ns("montana").rpc("mark_ipa_as_seen",void 0,{subjectUserId:n.props.user.id});e.isOpen&&n.setState(t.__assign({},e))},n}return t.__extends(n,e),n.prototype.componentDidMount=function(){window.addEventListener("hashchange",this.handleHashChange,!1),this.maybeDisplayModal()},n.prototype.componentWillUnmount=function(){window.removeEventListener("hashchange",this.handleHashChange)},n.prototype.render=function(){if(!this.state.isOpen)return null;var e=o.Children.only(this.props.children);return o.cloneElement(e,{isOpen:this.state.isOpen,onRequestClose:this.closeModal,showAnnouncement:this.state.showAnnouncement})},n})(o.PureComponent);n.InProductModalHelper=r}));
//# sourceMappingURL=in_product_modal_helper.min.js-vfl_UvZKF.map