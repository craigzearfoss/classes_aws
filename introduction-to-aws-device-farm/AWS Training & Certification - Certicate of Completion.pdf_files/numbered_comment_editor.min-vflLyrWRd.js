define(["require","exports","tslib","react","prop-types","comments2/components/comment/annotation_toggle","comments2/components/comment_editor/comment_editor"],(function(t,e,n,o,i,r,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),o=n.__importStar(o),i=n.__importStar(i);var p=(function(t){function e(){var e=t.apply(this,arguments)||this;return e.onPost=function(t){var n=e.props.onPost;n&&n(t,e.pendingAnnotationOrDefault)},e}return n.__extends(e,t),Object.defineProperty(e.prototype,"pendingAnnotationOrDefault",{get:function(){return this.props.pendingAnnotation||this.props.defaultAnnotation},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"page",{get:function(){var t=this.pendingAnnotationOrDefault;if(t)return"document"===t.type&&t.regions[0]&&t.regions[0].page},enumerable:!0,configurable:!0}),e.prototype.render=function(){var t=this.props,e=(t.pendingAnnotation,n.__rest(t,["pendingAnnotation"])),i=this.context.localization.intl,p=this.page?o.createElement(r.AnnotationToggle,{label:i.formatMessage({id:"5iv8V",defaultMessage:"Page {page}"},{page:this.page})}):void 0;return o.createElement(a.CommentEditor,Object.assign({},e,{annotation:p,onPost:this.onPost}))},e})(o.PureComponent);e.NumberedCommentEditor=p,p.contextTypes={localization:i.object}}));
//# sourceMappingURL=numbered_comment_editor.min.js-vflYVvUhS.map