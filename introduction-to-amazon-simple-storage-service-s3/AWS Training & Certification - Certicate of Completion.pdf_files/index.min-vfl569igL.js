define(["require","exports","tslib","tslib","classnames","react","spectrum/avatar","spectrum/icon_global","spectrum/tertiary_link","retrieval-components/highlighted-truncated-string"],(function(e,t,i,s,n,r,a,g,o,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),s=i.__importStar(s),n=i.__importDefault(n),r=i.__importStar(r),t.SearchSuggestions=function(e){return r.createElement("ul",{id:e.id,className:n.default("rc-search-suggestions__list",e.className),role:"listbox","aria-label":e.ariaLabel},e.suggestions.map((function(t){return!!t.suggestions.length&&[t.title&&r.createElement(u,{title:t.title,key:t.title}),r.createElement(m,{key:h(t.suggestions)?"suggestions-people":"suggestions-query",suggestions:t.suggestions,highlightedSuggestion:e.highlightedSuggestion,onSuggestionClick:e.onSuggestionClick,onSuggestionHighlight:e.onSuggestionHighlight,width:e.width,showViewProfileButton:e.showViewProfileButton})]})))};var u=function(e){var t=e.title;return r.createElement("li",{className:"rc-search-suggestions__header",role:"option"},r.createElement("h3",null,t))},c=function(e){return"name"in e},h=function(e){return!!e.length&&c(e[0])},d=function(e,t){return!!e&&(c(e)&&c(t)?e.emailAddress===t.emailAddress:!c(e)&&!c(t)&&e.query===t.query)},m=function(e){var t=e.width,i=e.suggestions,s=e.highlightedSuggestion,n=e.onSuggestionClick,a=e.onSuggestionHighlight,g=e.showViewProfileButton;return h(i)?r.createElement(r.Fragment,null,i.map((function(e){return r.createElement(w,{key:e.emailAddress,suggestion:e,isHighlighted:d(s,e),onSuggestionClick:n,onSuggestionHighlight:a,width:t,showViewProfileButton:g})}))):r.createElement(r.Fragment,null,i.map((function(e){return r.createElement(v,{key:e.query,suggestion:e,isHighlighted:d(s,e),onSuggestionClick:n,onSuggestionHighlight:a,width:t})})))},_=function(e){var t=e.initials,i=e.avatar;return i?r.createElement(a.Avatar,{size:24,src:i,className:"rc-search-suggestions__row-avatar",alt:t,renderFallback:function(){return r.createElement(a.AvatarInitials,{avatarSize:24,backgroundColor:a.avatarColorForUserIdentifier(t)},t)},"aria-hidden":!0}):r.createElement(a.AvatarInitials,{avatarSize:24,backgroundColor:a.avatarColorForUserIdentifier(t),className:"rc-search-suggestions__row-avatar","aria-hidden":!0},t)};t.generateIdForSuggestion=function(e){return c(e)?"suggestion-people-"+e.emailAddress:"suggestion-query-"+e.query};var p=(function(e){function i(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(){t.props.onSuggestionClick(t.props.suggestion)},t.handleMouseOver=function(){t.props.onSuggestionHighlight(t.props.suggestion)},t.handleMouseOut=function(){t.props.onSuggestionHighlight(void 0)},t}return s.__extends(i,e),i.prototype.render=function(){var e=this.props,i=e.isHighlighted,s=e.children,a=e.className,g=e.suggestion;return r.createElement("li",{className:n.default("rc-search-suggestions__row",a,{"rc-search-suggestions__row--highlighted":i}),role:"option",onClick:this.handleClick,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut,"aria-selected":i,id:t.generateIdForSuggestion(g),"aria-label":g.ariaLabel},s)},i})(r.PureComponent),f={variant:"HIGHLIGHTED_TRUNCATED_STRING_END",fontSize:14},w=function(e){return r.createElement(p,s.__assign({},e,{className:"rc-search-suggestions__row--people"}),r.createElement(_,{initials:e.suggestion.initials,avatar:e.suggestion.avatar}),r.createElement(l.HighlightedTruncatedString,s.__assign({},f,{text:e.suggestion.name,highlightSpans:e.suggestion.nameHighlights,availableWidth:e.width?e.width/2:0})),r.createElement(l.HighlightedTruncatedString,s.__assign({},f,{className:"rc-search-suggestions__subtitle",text:e.suggestion.emailAddress,highlightSpans:e.suggestion.emailAddressHighlights,availableWidth:e.width?e.width/2:0})),e.showViewProfileButton&&"createViewProfileHandler"in e.suggestion&&r.createElement(o.TertiaryLink,{className:"rc-search-suggestions__view-profile",onClick:e.suggestion.createViewProfileHandler(e.suggestion),onKeyDown:e.suggestion.handleViewProfileKeyDown},r.createElement("span",{className:"rc-search-suggestions__view-profile-text"},e.suggestion.viewProfileButtonText)))},v=function(e){return r.createElement(p,s.__assign({},e,{className:"rc-search-suggestions__row--query"}),r.createElement(g.IconGlobal,{name:"search",className:"rc-search-suggestions__row-avatar"}),r.createElement(l.HighlightedTruncatedString,s.__assign({},f,{text:e.suggestion.query,highlightSpans:e.suggestion.highlightSpans,availableWidth:e.width||0})))}}));
//# sourceMappingURL=index.min.js-vflUOIASo.map