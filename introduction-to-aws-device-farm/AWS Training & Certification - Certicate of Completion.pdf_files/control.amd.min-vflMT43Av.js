define(["require","exports","tslib","classnames","react","react-transition-group","dig-components/_motion","dig-components/_overlay/overlay","dig-components/typography/text"],(function(e,t,o,r,n,i,a,l,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r=o.__importDefault(r),n=o.__importStar(n);var c={top:"up",bottom:"down",left:"left",right:"right"},u=function(e){return{transitions:[{property:c[e],value:8},{property:"opacity",value:1}],easing:"out",duration:"faster",origin:[.5,1]}},p={transitions:[{property:"opacity",value:0}],easing:"out",duration:"faster",origin:[.5,1]};t.Control=function(e){var t=e.id,c=e.className,d=e.children,m=e.open,g=e.placement,f=void 0===g?"bottom":g,v=e.variant,y=void 0===v?"basic":v,T=e.triggerRef,_=e.shouldReturnFocus,h=void 0===_||_,w=o.__rest(e,["id","className","children","open","placement","variant","triggerRef","shouldReturnFocus"]),E=n.useRef(null),N=n.useState(!1),b=N[0],R=N[1],C=r.default("dig-Tooltip","dig-Tooltip--"+y,"dig-Tooltip--"+f,c);return n.useEffect((function(){if(m){var e=window.setTimeout((function(){R(!0),E&&E.current&&E.current.update()}),0);return function(){window.clearTimeout(e)}}b&&(R(!1),h&&T&&T.current&&T.current.focus())}),[m]),n.createElement(i.TransitionGroup,{component:null},m&&n.createElement(a.Motion,{transitionIn:u(f),transitionOut:p},(function(e){var o=e.style;return n.createElement(l.Overlay,Object.assign({id:t,role:"tooltip",placement:f,triggerRef:T,className:C,innerClass:"dig-Tooltip-inner",innerStyle:o,ref:E},w),n.createElement("div",{className:"dig-Tooltip-content"},n.createElement(s.Text,{tagName:"div",color:"standard",inverse:!0},b&&d)),n.createElement("span",{className:"dig-Tooltip-arrow","data-popper-arrow":!0}))})))},t.Control.displayName="Tooltips.Control"}));
//# sourceMappingURL=control.amd.min.js-vflrfu2vW.map