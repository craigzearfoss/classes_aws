define(["require","exports","tslib","react","modules/clean/react/montana/css_transition","spectrum/icon_form","spectrum/icon_arrow"],(function(e,t,a,n,i,c,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=a.__importStar(n),t.InProductModalAnnouncement=function(e){var t=e.animationIn,a=e.shouldAnimate,c=e.children;return n.createElement(i.CSSTransition,{in:t,timeout:300,shouldAnimate:a,classNames:"ipa-announcement"},n.createElement("div",{className:"in-product-modal-announcement in-product-modal-slide"},c))},t.InProductModalEducation=function(e){var t=e.animationIn,a=e.shouldAnimate,o=e.onAnimationEntered,r=e.onBack,s=e.onClose,d=e.children;return n.createElement(i.CSSTransition,{in:t,timeout:1e3,onEntered:o,classNames:"ipa-education",shouldAnimate:a},n.createElement("div",{className:"in-product-modal-education in-product-modal-slide"},n.createElement(l.IconArrow,{name:"right","aria-label":"Go Back",className:"modal-action modal-back",onClick:r}),n.createElement(c.IconForm,{name:"cancel","aria-label":"Close",className:"modal-action modal-close",onClick:s}),d))},t.EducationFeatures=function(e){var t=e.children,a=e.title;return n.createElement("div",{className:"in-product-modal-slide-inner"},n.createElement("h3",{className:"education-header"},a),t)},t.EducationFeaturesList=function(e){var t=e.children;return n.createElement("ul",{className:"education-list"},t)},t.EducationFeaturesListItem=function(e){var t=e.isSelected,a=e.onClick,i=e.title,c=e.subtitle;return n.createElement("li",{className:t?"active":""},n.createElement("button",{className:"education-list-button",onClick:a},n.createElement("div",{className:"education-list-text"},n.createElement("h3",{className:"education-list-title"},i),n.createElement("div",{className:"education-list-subtitle"},c)),n.createElement(l.IconArrow,{className:"education-list-arrow",name:"right"})))},t.EducationSlides=function(e){var t=e.children;return n.createElement("div",{className:"education-slides"},t)},t.EducationSlide=function(e){var t=e.children,a=e.className;return n.createElement("div",{className:"education-slide "+a},t)}}));
//# sourceMappingURL=in_product_modal_components.min.js-vfl2WAFNX.map