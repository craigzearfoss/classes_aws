define(["require","exports","tslib","comments2/components/comment_editor/types","comments2/components/comment_editor/layers/interaction","comments2/components/comment_editor/layers/publish","comments2/components/comment_editor/layers/text","comments2/components/comment_editor/layers/update","comments2/components/comment_editor/layers/style","comments2/components/comment_editor/layers/stickers","comments2/components/comment_editor/layers/mentions_macro","comments2/components/comment_editor/layers/mentions_entity","comments2/components/comment_editor/layers/suggestions","comments2/components/comment_editor/core/editor_container_component","comments2/components/comment_editor/layers/scaffold","comments2/components/comment_editor/layers/container_interaction","comments2/components/comment_editor/layers/paste"],(function(e,n,t,o,s,r,a,i,m,c,p,u,d,_,y,l,g){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var f={draft:o.DraftNames,comment:o.CommentNames,macro:o.MacroNames,mentionSuggestions:o.MentionSuggestionNames,suggestion:o.SuggestionSelectionNames,container:o.ContainerNames},S=function(){},h=(function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(n,e),Object.defineProperty(n.prototype,"scopeNames",{get:function(){return f},enumerable:!0,configurable:!0}),n.prototype.getLayerProps=function(e){var n=e.onMentionsQueryUpdated,t=void 0===n?S:n,o=e.onPost,s=void 0===o?S:o,r=e.onCancel,a=void 0===r?S:r,i=e.onEditorStateChange,m=void 0===i?S:i,c=e.onFocus,p=void 0===c?S:c,u=e.onBlur;return{onMentionsQueryUpdated:t,onPost:s,onCancel:a,onEditorStateChange:m,onFocus:p,onBlur:void 0===u?S:u}},n.prototype.mapPropsToLayers=function(e){var n=this.getLayerProps(e),t=n.onMentionsQueryUpdated,o=n.onPost,_=n.onCancel,y=n.onEditorStateChange,f=n.onFocus,S=n.onBlur;return[new l.ContainerInteractionLayer,new s.InteractionLayer,new g.PasteLayer,new a.TextLayer,new m.StyleLayer,new c.StickerLayer,new u.MentionsEntityLayer,new p.MentionsMacroLayer({onMentionsQueryUpdated:t}),new r.PublishLayer({onEditorStateChange:y,onPost:o,onCancel:_,onFocus:f,onBlur:S}),new d.SuggestionLayer,new i.UpdateLayer]},n.prototype.createDefaultStatus=function(){var e=y.createDefaultStatus(this.scopeNames);return t.__assign(t.__assign({},e),{draft:t.__assign(t.__assign({},e.draft),{placeholder:this.props.placeholder||""})})},n.prototype.mapPropsToUpdates=function(e,n){var o={};return e.content!==n.comment.content&&(o=t.__assign(t.__assign({},o),{comment:t.__assign(t.__assign({},n.comment),{content:e.content})})),e.mentionsMatches!==n.mentionSuggestions.userMap&&(o=t.__assign(t.__assign({},o),{mentionSuggestions:t.__assign(t.__assign({},n.mentionSuggestions),{userMap:e.mentionsMatches||{}})})),o},n})(_.EditorContainer);n.InteractiveEditorContainer=h}));
//# sourceMappingURL=interactive_editor_container.min.js-vflOTIdf5.map