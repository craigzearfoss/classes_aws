define(["require","exports","tslib","react"],(function(n,e,t,r){"use strict";function o(e,o){return t.__awaiter(this,void 0,void 0,(function(){var a,s,i;return t.__generator(this,(function(u){switch(u.label){case 0:return[4,new Promise((function(e,t){n(["modules/clean/react/montana/in_product_modal/plus/in_product_modal_plus"],e,t)})).then(t.__importStar)];case 1:return a=u.sent().InProductModalPlus,s=o.smartSyncEnabled,i=t.__rest(o,["smartSyncEnabled"]),[2,r.createElement(a,t.__assign({isSmartSyncEnabled:s,user:e},i))]}}))}))}function a(e){return t.__awaiter(this,void 0,void 0,(function(){var o,a;return t.__generator(this,(function(s){switch(s.label){case 0:return[4,new Promise((function(e,t){n(["modules/clean/react/montana/in_product_modal/pro/in_product_modal_pro"],e,t)})).then(t.__importStar)];case 1:return o=s.sent().InProductModalPro,e.canChangePlan,e.seenIPAModal,e.smartSyncEnabled,e.isPlus,e.isProfessional,a=t.__rest(e,["canChangePlan","seenIPAModal","smartSyncEnabled","isPlus","isProfessional"]),[2,r.createElement(o,t.__assign({},a))]}}))}))}Object.defineProperty(e,"__esModule",{value:!0});var s=(function(e){function s(){var n=null!==e&&e.apply(this,arguments)||this;return n.state={component:null},n}return t.__extends(s,e),s.prototype.componentDidMount=function(){return t.__awaiter(this,void 0,void 0,(function(){var e,s,i,u,c,l,_,d;return t.__generator(this,(function(m){switch(m.label){case 0:return e=this.props,s=e.user,i=e.montanaModalProps,u=i.isPlus,c=i.seenIPAModal,[4,Promise.all([u?o(s,i):a(i),new Promise((function(e,t){n(["modules/clean/react/montana/in_product_modal/in_product_modal_helper"],e,t)})).then(t.__importStar)])];case 1:return l=m.sent(),_=l[0],d=l[1].InProductModalHelper,_?this.setState({component:r.createElement(d,{openIf:!c,user:s},_)}):this.setState({component:!1}),[2]}}))}))},s.prototype.render=function(){return this.state.component},s})((r=t.__importStar(r)).Component);e.PostTTIMontanaIPAModalRenderer=s}));
//# sourceMappingURL=in_product_modal_post_tti_renderer.min.js-vflspJzwr.map