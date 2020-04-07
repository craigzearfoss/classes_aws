define("modules/clean/react/arbor/aspen/elements/arbor_account_menu",["require","exports","tslib","react","modules/clean/react/account_menu/account_menu","modules/clean/react/css"],(function(e,t,n,a,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=n.__importDefault(a);t.ArborAccountMenu=s.requireCssWithComponent((function(e){return a.default.createElement(r.AccountMenu,n.__assign({dropdownHorizontalDisplacement:-40},e))}),["/static/css/arbor/aspen/elements/account_menu-vfl7RNuqC.css"])})),define("modules/clean/react/arbor/aspen/elements/arbor_buttons",["require","exports","tslib","react","classnames","modules/clean/react/css"],(function(e,t,n,a,r,s){"use strict";function o(e,t,n,a,s){void 0===e&&(e="primary"),void 0===t&&(t=!1),void 0===n&&(n="small"),void 0===a&&(a=null),void 0===s&&(s=null);var o="button--"+n,l="";a&&(l=o+"--"+a);var i="button--"+e,p="";return t&&(p=i+"--disabled"),r.default(["button",i,o,l,s,p])}function l(e){e.preventDefault()}function i(){}Object.defineProperty(t,"__esModule",{value:!0}),a=n.__importDefault(a),r=n.__importDefault(r);var p=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.importance,n=e.disabled,r=e.size,s=e.width,p=e.className,c=e.trackingId,d=o(t,n,r,s,p);return a.default.createElement("a",{href:this.props.href,className:d,onClick:n?l:i,"aria-disabled":n,"data-trackingid":c},this.props.children)},t})(a.default.Component);t.ArborButtonAnchorElement=p,t.ArborButtonAnchor=s.requireCssWithComponent(p,["/static/css/arbor/aspen/elements/button-vfl_LeDB9.css"]);var c=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.importance,n=e.disabled,r=e.size,s=e.width,l=e.className,i=e.onClick,p=e.type,c=o(t,n,r,s,l);return a.default.createElement("button",{className:c,onClick:i,disabled:n,type:p||"button"},this.props.children)},t})(a.default.Component);t.ArborButtonElement=c,t.ArborButton=s.requireCssWithComponent(c,["/static/css/arbor/aspen/elements/button-vfl_LeDB9.css"])})),define("modules/clean/react/arbor/aspen/elements/arbor_dropdown_link",["require","exports","tslib","react","react-dom","classnames","modules/clean/react/css","modules/clean/react/arbor/aspen/elements/arbor_links"],(function(e,t,n,a,r,s,o,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=n.__importDefault(a),r=n.__importStar(r),s=n.__importDefault(s);var i=(function(e){function t(t){var n=e.call(this,t)||this;return n.handlePageClick=function(e){var t=e.target;r.findDOMNode(n).contains(t)||(n.setState({isExpanded:!1}),n.props.onPageClick&&n.props.onPageClick(n.props.id,!0))},n.state={isExpanded:n.props.isExpanded},n}return n.__extends(t,e),t.prototype.componentDidMount=function(){window.addEventListener("click",this.handlePageClick)},t.prototype.componentWillUnmount=function(){window.removeEventListener("click",this.handlePageClick)},t.prototype.componentWillReceiveProps=function(e){e.isExpanded!==this.state.isExpanded&&this.setState({isExpanded:e.isExpanded})},t.prototype.handleDropdownClick=function(e){e.preventDefault(),this.props.onDropdownClick?this.props.onDropdownClick(this.props.id,this.props.title):this.setState({isExpanded:!this.state.isExpanded})},t.prototype.renderDropdownLink=function(e,t){if(!0===e.disabled)return null;var n=null;return n=!!e.type?a.default.createElement(l.ArborImageLink,{linkItem:e,className:"dropdown__content-link"}):a.default.createElement("a",{className:"dropdown__content-link",href:e.url},e.title),a.default.createElement("li",{key:t,className:"dropdown__content-list-item"},n)},t.prototype.renderDropdownContent=function(e){var t=this;return this.props.children?this.props.children:a.default.createElement("ul",{className:"dropdown__content-list"},e.map((function(e,n){return t.renderDropdownLink(e,n)})))},t.prototype.render=function(){var e=s.default({dropdown__container:!0,"dropdown__container--left":"left"===this.props.placement,"dropdown__container--right":"right"===this.props.placement},this.props.className),t=s.default({dropdown__link:!0,"dropdown__link--open":this.state.isExpanded}),n=s.default({"dropdown__dropdown-container":!0,"dropdown__dropdown-container--open":this.state.isExpanded}),r=!!this.props.children,o=s.default({dropdown__dropdown:!0,"dropdown__dropdown--visible":this.state.isExpanded,"dropdown__dropdown--custom-content":r});return a.default.createElement("div",{className:e},a.default.createElement("a",{className:t,onClick:this.handleDropdownClick.bind(this),href:"#"},this.props.title),a.default.createElement("div",{className:n},a.default.createElement("div",{className:o},this.renderDropdownContent(this.props.dropdownContent))))},t})(a.default.Component);t.ArborDropdownLinkElement=i,t.ArborDropdownLink=o.requireCssWithComponent(i,["/static/css/arbor/aspen/elements/dropdown-vfl17HpQ2.css"])})),define("modules/clean/react/arbor/aspen/elements/arbor_expandable_nav",["require","exports","tslib","react","classnames","modules/clean/react/css","modules/clean/react/arbor/aspen/elements/arbor_buttons","modules/clean/react/arbor/aspen/elements/arbor_links"],(function(e,t,n,a,r,s,o,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=n.__importDefault(a),r=n.__importDefault(r);var i=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.handleHamburgerClick=function(e){e.preventDefault(),this.props.onHamburgerClick()},t.prototype.render=function(){var e=r.default({"hamburger-helper":!0,"hamburger-helper--expanded":this.props.expanded},this.props.className);return a.default.createElement("a",{onClick:this.handleHamburgerClick.bind(this),className:e,href:"#"},a.default.createElement("div",{className:"hamburger-helper__container"},a.default.createElement("span",null),a.default.createElement("span",null),a.default.createElement("span",null),a.default.createElement("span",null)))},t})(a.default.Component);t.ArborExpandableNavIconElement=i,t.ArborExpandableNavIcon=s.requireCssWithComponent(i,["/static/css/arbor/aspen/elements/expandable-nav-icon-vflbjSB59.css"]);var p=(function(t){function s(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={childDropdownExpanded:!1},e}return n.__extends(s,t),s.prototype.renderChildLinks=function(t,r){var s;if(t.disabled)s=null;else if("chat"===t.type){s=a.default.createElement("li",{key:r,className:"expandable-child-nav__list-item"},a.default.createElement("a",{href:t.url,className:"expandable-child-nav__link",onClick:function(t){t.preventDefault(),new Promise((function(t,n){e(["modules/clean/snapengage"],t,n)})).then(n.__importStar).then((function(e){e.DropboxSnapEngage.startReactiveChat()}))}},t.title))}else s=a.default.createElement("li",{key:r,className:"expandable-child-nav__list-item"},a.default.createElement("a",{href:t.url,className:"expandable-child-nav__link"},t.title));return s},s.prototype.handleChildDropdownLink=function(e){e.preventDefault(),this.setState({childDropdownExpanded:!this.state.childDropdownExpanded})},s.prototype.render=function(){var e=this,t=[];t.push(this.props.linkContent.children.map((function(t,n){return e.renderChildLinks(t,n)})));var n=r.default({"hamburger-menu__link":!0,"expandable-child-nav__parent-link":!0,"expandable-child-nav__parent-link--expanded":this.state.childDropdownExpanded}),s=r.default({"expandable-child-nav":!0,"expandable-child-nav--expanded":this.state.childDropdownExpanded});return a.default.createElement("div",null,a.default.createElement("a",{href:"#",className:n,onClick:this.handleChildDropdownLink.bind(this)},this.props.linkContent.title),a.default.createElement("ul",{className:s},t))},s})(a.default.Component);t.ArborExpandableChildNavMenuElement=p,t.ArborExpandableChildNavMenu=s.requireCssWithComponent(p,["/static/css/arbor/aspen/elements/expandable-child-nav-vflLexTnf.css"]);var c=(function(e){function s(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(s,e),s.prototype.renderLinks=function(e,n){var r=null;return r=!!e.type?a.default.createElement(l.ArborImageLink,{linkItem:e,className:"hamburger-menu__link"}):e.children?a.default.createElement(t.ArborExpandableChildNavMenu,{linkContent:e}):a.default.createElement("a",{href:e.url,className:"hamburger-menu__link","data-trackingid":e.trackingId},e.title),a.default.createElement("li",{className:"hamburger-menu__list-item",key:n},r)},s.prototype.render=function(){var e=this,t=r.default({"hamburger-menu":!0,"hamburger-menu--expanded":this.props.expanded},this.props.className),n=null;if(this.props.buttonContent){var s=this.props.buttonContent,l=s.url,i=s.title,p=s.trackingId;n=a.default.createElement(o.ArborButtonAnchor,{href:l,importance:"primary",trackingId:p},i)}var c=[];return this.props.linkContent&&c.push(this.props.linkContent.map((function(t,n){return e.renderLinks(t,n)}))),a.default.createElement("section",{className:t},a.default.createElement("div",{className:"hamburger-menu__list-container"},a.default.createElement("ul",{className:"hamburger-menu__list"},c),n))},s})(a.default.Component);t.ArborExpandableNavMenuElement=c,t.ArborExpandableNavMenu=s.requireCssWithComponent(c,["/static/css/arbor/aspen/elements/expandable-nav-vflWcer_B.css"])})),define("modules/clean/react/arbor/aspen/elements/arbor_links",["require","exports","tslib","react","classnames","modules/clean/react/css","modules/core/i18n","modules/clean/static_urls"],(function(e,t,n,a,r,s,o,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=n.__importDefault(a),r=n.__importDefault(r);var i=(o=n.__importStar(o))._,p=(function(t){function s(){var e=null!==t&&t.apply(this,arguments)||this;return e.typeImageMap={email:{iconSrc:l.static_url("/static/images/arbor/aspen/icons/email-vflLMwpBH.svg"),title:i("Email")},chat:{iconSrc:l.static_url("/static/images/arbor/aspen/icons/chat-vfl-fdkjo.svg"),title:i("Chat"),clickHandler:e.snapEngageHandler},phone:{iconSrc:l.static_url("/static/images/arbor/aspen/icons/phone-vflsl6BWj.svg"),title:i("Call")}},e}return n.__extends(s,t),s.prototype.snapEngageHandler=function(t){t.preventDefault(),new Promise((function(t,n){e(["modules/clean/snapengage"],t,n)})).then(n.__importStar).then((function(e){e.DropboxSnapEngage.startReactiveChat()}))},s.prototype.render=function(){var e,t=this,n=this.props.linkItem;if(n.disabled)return null;var s=this.typeImageMap[n.type],o=r.default(((e={"image-link":!0})["image-link--"+n.type]=!0,e),this.props.className),l=a.default.createElement("span",{className:"image-link__icon-container"},a.default.createElement("img",{src:s.iconSrc,alt:s.title,className:"image-link__icon-image"})),i=a.default.createElement("span",{className:"image-link__text"},n.title),p=null;if("phone"===n.type)p=a.default.createElement("span",{className:o},l,i);else{p=a.default.createElement("a",{href:n.url,className:o,onClick:function(e){s.clickHandler&&s.clickHandler.call(t,e),n.clickHandler&&n.clickHandler()}},l,i)}return p},s})(a.default.Component);t.ArborImageLinkElement=p,t.ArborImageLink=s.requireCssWithComponent(p,["/static/css/arbor/aspen/elements/arbor-image-link-vflkgIfQu.css"]);var c=(function(e){function s(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(s,e),s.prototype.render=function(){var e=this.props.linksToRender.map((function(e,n){return a.default.createElement("li",{key:n,className:"image-links__list-item"},a.default.createElement(t.ArborImageLink,{linkItem:e}))})),n=r.default({"image-links":!0},this.props.className);return a.default.createElement("ul",{className:n},e)},s})(a.default.Component);t.ArborImageLinksElement=c,t.ArborImageLinks=s.requireCssWithComponent(c,["/static/css/arbor/aspen/elements/arbor-image-links-vflVt10ke.css"])})),define("modules/clean/react/arbor/aspen/elements/arbor_logo",["require","exports","tslib","react","classnames","modules/clean/static_urls","modules/clean/react/css","modules/constants/trademark"],(function(e,t,n,a,r,s,o,l){"use strict";function i(e){return void 0!==e?e:s.static_url("/static/images/logo_catalog/glyph_m1-vflCrXgzt.svg")}function p(e,t){var n=i(e),a=void 0!==t?t:s.static_url("/static/images/logo_catalog/wordmark--dropbox_m1-vfldArOOy.svg"),r=void 0!==t?t:s.static_url("/static/images/logo_catalog/wordmark--business_m1-vflQClrTq.svg");return{default:{imageSrc:a,platformName:"Dropbox",url:"/",slug:"dropbox"},business:{imageSrc:r,platformName:l.TRADEMARK_BUSINESS,url:"/business",slug:"business"},enterprise:{imageSrc:r,platformName:l.TRADEMARK_BUSINESS,url:"/enterprise",slug:"business"},arbor:{imageSrc:n,platformName:"Arbor",url:"/arbor",slug:"arbor"}}}Object.defineProperty(t,"__esModule",{value:!0}),a=n.__importDefault(a),r=n.__importDefault(r),t.generatePlatformMap=p;var c=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.renderLogoType=function(e){var t,n;if(this.props.glyphOnly)n=null;else{var s=r.default(((t={"arbor-logo__logotype":!0})["arbor-logo__logotype--"+e.slug]=!!e.slug,t));n=a.default.createElement("img",{src:e.imageSrc,alt:e.platformName,className:s})}return n},t.prototype.render=function(){var e=p(this.props.glyph,this.props.wordmark),t=this.props,n=t.customPlatform,s=t.presetPlatform,o=t.onClick,l=e.default;n?l=n:s&&s in e&&(l=e[s]);var c=i(this.props.glyph),d=a.default.createElement("img",{src:c,alt:"",className:"arbor-logo__glyph"}),u=this.renderLogoType(l),h=r.default({"arbor-logo--collapse":this.props.collapse},"arbor-logo");return this.props.noLogoLink?a.default.createElement("span",{className:h},d,u):a.default.createElement("a",{className:h,href:l.url,onClick:o},d,u)},t})(a.default.Component);t.ArborLogoElement=c,t.ArborLogo=o.requireCssWithComponent(c,["/static/css/arbor/aspen/elements/logo-vflpkLJAU.css"])})),define("modules/clean/react/arbor/aspen/elements/arbor_inputs",["require","exports","tslib","react","classnames","modules/clean/react/css"],(function(e,t,n,a,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=n.__importDefault(a),r=n.__importDefault(r);var o=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.render=function(){var e=r.default({input__label:!0,"input__label--before":Boolean(this.props.labelBeforeElement)},this.props.className),t=r.default({"input__label-container":!0},this.props.containerClassName),n=r.default({"input__label-input-map":!0,"input__label-input-map--stack":Boolean(this.props.labelBeforeElement)}),s=r.default({"input__label--error":!0}),o=a.default.createElement("label",{className:e,htmlFor:this.props.htmlFor},this.props.labelText),l=null;this.props.labelBeforeElement&&(l=o,o=null);var i=null;return this.props.errorText&&this.props.showError&&(i=a.default.createElement("label",{className:s,htmlFor:this.props.htmlFor},this.props.errorText)),a.default.createElement("div",{className:t},a.default.createElement("div",{className:n},l,this.props.children,o),i)},t})(a.default.Component);t.ArborLabeledInput=o;var l=(function(e){function t(t){var n=e.call(this,t)||this;return n.handleOnChange=n.handleOnChange.bind(n),n}return n.__extends(t,e),t.prototype.componentWillMount=function(){this.setState({isValid:this.props.isValid,value:this.props.value})},t.prototype.componentWillReceiveProps=function(e){this.props.isValid!==e.isValid&&this.setState({isValid:e.isValid})},t.prototype.handleOnChange=function(e){var t=e.target;if(this.props.validateHandler){var n=this.props.validateHandler(e,t.value);n||e.preventDefault(),this.setState({isValid:n})}this.setState({value:t.value}),this.props.onChange&&this.props.onChange(e,t.name,t.value)},t.prototype.renderInput=function(){var e=this.props,t=e.name,n=e.id,s=e.disabled,o=e.placeholderText,l=e.pattern,i=e.step,p=this.props.type||"text",c=this.props.maxLength,d=r.default({input__text:!0,"input__text--error":!1===this.state.isValid,"input__text--valid":!0===this.state.isValid},this.props.className);return a.default.createElement("input",{className:d,type:p,name:t,id:n,value:this.state.value,pattern:l,placeholder:o,disabled:s,onChange:this.handleOnChange,maxLength:c,step:i})},t.prototype.render=function(){var e=this.props,t=e.name,n=e.labelText,r=e.errorText,s=e.labelClassName,l=e.containerClassName;return a.default.createElement(o,{className:s,containerClassName:l,labelText:n,htmlFor:t,showError:!1===this.state.isValid,errorText:r,labelBeforeElement:!0},this.renderInput())},t})(a.default.Component);t.ArborTextInputElement=l,t.ArborTextInput=s.requireCssWithComponent(l,["/static/css/arbor/aspen/elements/inputs-vflZ6TYxP.css"]);var i=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.renderInput=function(){var e=this.props,t=e.name,n=e.id,s=e.disabled,o=e.value,l=e.placeholderText,i=r.default({input__text:!0,"input__text--error":!1===this.state.isValid,"input__text--valid":!0===this.state.isValid},this.props.className);return a.default.createElement("textarea",{className:i,name:t,id:n,value:o,placeholder:l,disabled:s,onChange:this.handleOnChange})},t})(l);t.ArborTextAreaElement=i,t.ArborTextArea=s.requireCssWithComponent(i,["/static/css/arbor/aspen/elements/inputs-vflZ6TYxP.css"]);var p=(function(e){function t(t){var n=e.call(this,t)||this;return n.handleCheckboxClick=n.handleCheckboxClick.bind(n),n}return n.__extends(t,e),t.prototype.handleCheckboxClick=function(e){this.props.disabled?e.stopPropagation():this.props.onClick&&this.props.onClick(e,this.props.name,this.props.checked)},t.prototype.render=function(){var e=this.props,t=e.name,n=e.disabled,s=e.required,l=e.checked,i=e.onChange,p=e.errorText,c=e.labelText,d=r.default({input__checkbox:!0,"input__checkbox--valid":l,"input__checkbox--disabled":Boolean(n)},this.props.className),u=r.default(this.props.labelClassName);return a.default.createElement(o,{className:u,labelText:c,htmlFor:t,showError:s&&!l,errorText:p},a.default.createElement("div",{className:d,onClick:this.handleCheckboxClick,tabIndex:0}),a.default.createElement("input",{ref:"checkbox",type:"checkbox","aria-checked":l,name:t,id:t,checked:l,onChange:i,disabled:n}))},t})(a.default.Component);t.ArborCheckboxInputElement=p,t.ArborCheckboxInput=s.requireCssWithComponent(p,["/static/css/arbor/aspen/elements/inputs-vflZ6TYxP.css"]);var c=(function(e){function t(t){var n=e.call(this,t)||this;return n.handleRadioKeyDown=function(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),n.handleRadioClick(e))},n.handleRadioClick=n.handleRadioClick.bind(n),n}return n.__extends(t,e),t.prototype.handleRadioClick=function(e){this.props.disabled?e.stopPropagation():this.props.onClick&&this.props.onClick(e,this.props.name,this.props.value)},t.prototype.render=function(){var e=this.props,t=e.name,n=e.disabled,s=e.required,l=e.value,i=e.checked,p=e.onChange,c=e.errorText,d=e.labelText,u=r.default({input__radio:!0,"input__radio--valid":Boolean(i),"input__radio--disabled":Boolean(n)},this.props.className),h=r.default(this.props.labelClassName);return a.default.createElement(o,{className:h,labelText:d,htmlFor:t,showError:s&&!l,errorText:c,containerClassName:"input__label-container--row"},a.default.createElement("div",{"aria-label":t,tabIndex:0,className:u,onClick:this.handleRadioClick,onKeyDown:this.handleRadioKeyDown}),a.default.createElement("input",{ref:"radio",tabIndex:-1,type:"radio",name:t,id:t,value:l,checked:i,onChange:p,disabled:n}))},t})(a.default.Component);t.ArborRadioInputElement=c,t.ArborRadioInput=s.requireCssWithComponent(c,["/static/css/arbor/aspen/elements/inputs-vflZ6TYxP.css"]);var d=(function(e){function t(t){var n=e.call(this,t)||this;return n.handleSelectChange=n.handleSelectChange.bind(n),n}return n.__extends(t,e),t.prototype.componentWillMount=function(){this.setState({isValid:this.props.isValid})},t.prototype.componentWillReceiveProps=function(e){this.props.isValid!==e.isValid&&this.setState({isValid:e.isValid})},t.prototype.handleSelectChange=function(e){if(this.props.disabled)e.stopPropagation();else{var t=e.target;if(this.props.validateHandler){var n=this.props.validateHandler(e,t.value);n||e.preventDefault(),this.setState({isValid:n})}if(this.props.onChange){var a=e.currentTarget;this.props.onChange(e,this.props.name,a.value)}}},t.prototype.render=function(){var e=this.props,t=e.name,n=e.labelClassName,s=e.className,l=e.labelText,i=e.disabled,p=e.errorText,c=r.default({input__select:!0},s);return a.default.createElement(o,{className:n,errorText:p,htmlFor:t,labelBeforeElement:!0,labelText:l,showError:!1===this.state.isValid},a.default.createElement("select",{className:c,id:t,name:t,disabled:i,onChange:this.handleSelectChange,value:this.props.value},this.props.children))},t})(a.default.Component);t.ArborSelectInputElement=d,t.ArborSelectInput=s.requireCssWithComponent(d,["/static/css/arbor/aspen/elements/inputs-vflZ6TYxP.css"])})),define("modules/clean/react/arbor/aspen/elements/arbor_supernav",["require","exports","tslib","react","classnames","modules/clean/react/css","modules/core/browser","modules/clean/react/arbor/aspen/elements/arbor_logo","modules/clean/react/arbor/aspen/elements/arbor_buttons","modules/clean/react/arbor/aspen/elements/arbor_dropdown_link","modules/clean/react/arbor/aspen/elements/arbor_expandable_nav","modules/clean/react/arbor/aspen/elements/arbor_links"],(function(e,t,n,a,r,s,o,l,i,p,c,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=n.__importDefault(a),r=n.__importDefault(r),o=n.__importStar(o);var u=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={mobileMenuExpanded:!1,activeDropdown:null,scrolled:!1,overlayActive:!0},t.handleScroll=function(e){var n=window.pageYOffset,a=!1;n>=350?!1===a&&(a=!a):a=!1,t.setState({scrolled:a,overlayActive:0===n,activeDropdown:null})},t.handlePageClick=function(e,n){void 0===n&&(n=!1),t.state.activeDropdown===e&&n&&t.setState({activeDropdown:null})},t.handleLinkClick=function(e){return function(n){var a=t.props.onNavLinkClick;n.preventDefault(),a&&e.id&&a(e.id),e.url&&o.redirect(e.url)}},t}return n.__extends(t,e),t.prototype.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll),0!==window.pageYOffset&&this.setState({scrolled:!0,overlayActive:!1})},t.prototype.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},t.prototype.handleDropdownClick=function(e,t){var n={};this.props.onDropdownClick&&this.props.onDropdownClick(t),n=this.state.activeDropdown===e?{activeDropdown:null}:{activeDropdown:e},this.setState(n)},t.prototype.renderLinkByType=function(e,t){var n,s;if(e.children){var o=this.state.activeDropdown===t,l=r.default({supernav__link:!0,"dropdown__container--dark":"dark"===this.props.overlay&&this.state.overlayActive,"dropdown__container--light":"light"===this.props.overlay&&this.state.overlayActive,"dropdown__container--no-cta":!this.props.navCTA});s=a.default.createElement(p.ArborDropdownLink,{title:e.title,className:l,dropdownContent:e.children,isExpanded:o,id:t,onDropdownClick:this.handleDropdownClick.bind(this),onPageClick:this.handlePageClick})}else s=e.is_button?a.default.createElement("button",{className:"supernav__link supernav__link--button-as-link",id:e.id,onClick:this.handleLinkClick(e),"aria-label":e.label||e.title},e.title):a.default.createElement("a",{className:"supernav__link",href:e.url,id:e.id,onClick:this.handleLinkClick(e),"data-trackingid":e.trackingId},e.title);var i=r.default(((n={})["supernav__list-item--no-width-cap"]=this.props.navLinksRight&&1===this.props.navLinksRight.length,n),"supernav__list-item");return a.default.createElement("li",{key:t,className:i},s)},t.prototype.renderNavLinks=function(e){var t=this,n=e.map((function(e,n){return t.renderLinkByType(e,n)})),s=r.default({"supernav__section-list":!0,"supernav__section-list--no-collapse":this.props.preventMobileMenu||!1});return a.default.createElement("ul",{className:s},n)},t.prototype.renderNavButton=function(e,t){var n=t?"primary":"secondary";return!(!0!==this.props.transitionButtonOnScroll&&void 0!==this.props.transitionButtonOnScroll||this.props.makeLeftCtaPrimary&&this.props.makeRightCtaPrimary)&&this.state.scrolled&&(n="primary"),a.default.createElement(i.ArborButtonAnchor,{className:"supernav__cta",href:e.url,importance:n,trackingId:e.trackingId},e.title)},t.prototype.handleHamburgerClick=function(){this.setState({mobileMenuExpanded:!this.state.mobileMenuExpanded})},t.prototype.render=function(){var e=this.props.leftAlignLogo||this.props.contactLinks||this.props.accountMenu||this.props.userNameAndAvatar,t=!e&&(this.props.navLinksLeft||this.props.leftCTA),n=this.props.navLinksRight||this.props.navCTA||this.props.contactLinks||this.props.accountMenu||this.props.userNameAndAvatar,s=t&&n,o=!(t||this.props.navLinksRight||this.props.navCTA||this.props.leftCTA),i=this.props.navCTA&&t||s,p=null,u=null,h=null,m=null,f=null,v=r.default({supernav__container:!0,"supernav__container--expanded":this.state.mobileMenuExpanded,"supernav__container--fixed":this.props.fixed,"supernav__container--fixed--overlay":!!this.props.overlay,"supernav__container--fixed--overlay--active":this.props.overlay&&this.state.overlayActive,"supernav__container--no-shadow":this.props.noShadow,"supernav__container--transparent-background":this.props.transparentBackground},this.props.className),_=r.default({supernav__dummy:!0,"supernav__dummy--fixed--overlay":!!this.props.overlay}),b=r.default({supernav:!0,"supernav--x-right":!i&&!o&&!e,"supernav--x-center":o&&!e,"supernav--x-bookend":Boolean(!i&&e),"supernav--x-center-right":Boolean(!i&&!e&&!o),"supernav--fixed--overlay":!!this.props.overlay,"supernav--fixed--overlay--active":this.props.overlay&&this.state.overlayActive,"supernav--fixed--overlay--dark":"dark"===this.props.overlay,"supernav--fixed--overlay--light":"light"===this.props.overlay}),k=r.default({supernav__section:!0,"supernav__section--center":!e,"supernav__section--x-left":Boolean(e),"supernav__section--1-3":!i&&!e}),g=r.default({supernav__section:!0,"supernav__section--1-3":!i&&!e}),C=null;if(this.props.logoOverride)C=this.props.logoOverride;else{var E=!(!this.props.logoCollapseOnScroll||!this.state.scrolled);C=a.default.createElement(l.ArborLogo,{presetPlatform:this.props.logoPlatform,customPlatform:this.props.customPlatform,glyphOnly:this.props.logoGlyphOnly,collapse:E,glyph:this.props.glyph,wordmark:this.props.wordmark,noLogoLink:this.props.noLogoLink,onClick:this.props.onLogoClick})}var x=a.default.createElement("div",{className:k},C);t&&(p=a.default.createElement("div",{className:g},this.props.leftCTA?this.renderNavButton(this.props.leftCTA,this.props.makeLeftCtaPrimary):null,this.props.navLinksLeft?this.renderNavLinks(this.props.navLinksLeft):null));var y=null,N=null;if(n){if(h=this.props.navCTA?this.renderNavButton(this.props.navCTA,this.props.makeRightCtaPrimary):null,this.props.contactLinks?m=a.default.createElement(d.ArborImageLinks,{linksToRender:this.props.contactLinks,className:"large-show--flex base-hide"}):this.props.navLinksRight&&(m=this.renderNavLinks(this.props.navLinksRight)),f=this.props.navLinksLeft&&e&&!this.props.contactLinks?this.renderNavLinks(this.props.navLinksLeft):null,e&&!this.props.preventMobileMenu){N=a.default.createElement(c.ArborExpandableNavIcon,{onHamburgerClick:this.handleHamburgerClick.bind(this),expanded:this.state.mobileMenuExpanded,className:"large-hide"});var w=void 0;w=this.props.contactLinks?this.props.contactLinks:this.props.navLinksRight,y=a.default.createElement(c.ArborExpandableNavMenu,{expanded:this.state.mobileMenuExpanded,linkContent:w,buttonContent:this.props.navCTA?this.props.navCTA:null,className:"large-hide"})}u=this.props.accountMenu?a.default.createElement("div",{className:g},this.props.accountMenu):this.props.userNameAndAvatar?a.default.createElement("div",{className:g},a.default.createElement("span",{className:"user-info"},a.default.createElement("img",{src:this.props.userNameAndAvatar.photoUrl,className:"user-info__avatar",alt:this.props.userNameAndAvatar.displayName}),this.props.userNameAndAvatar.displayName)):a.default.createElement("div",{className:g},f,m,h,N)}var A=a.default.createElement("header",{className:v},a.default.createElement("section",{className:b},p,x,u),y);return this.props.fixed&&(A=a.default.createElement("div",null,A,a.default.createElement("div",{className:_}))),A},t})(a.default.Component);t.ArborSuperNavElement=u,t.ArborSuperNav=s.requireCssWithComponent(u,["/static/css/arbor/aspen/elements/supernav-vflUvVi5y.css"])}));
//# sourceMappingURL=pkg-arbor.min.js-vflDhw2_1.map