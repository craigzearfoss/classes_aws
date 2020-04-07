define(["require","exports","tslib","react","modules/clean/react/image","modules/clean/static_urls","spectrum/button","modules/core/i18n","modules/constants/trademark","modules/clean/react/montana/in_product_modal/logging","modules/clean/datetime"],(function(e,a,t,n,r,o,l,i,c,s,m){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),n=t.__importStar(n),m=t.__importStar(m),a.PlusAnnouncement=function(e){var a=e.amount,t=e.canChangePlan,p=e.handleGotIt,u=e.priceDifference,d=e.rebillDate,_=e.isMonthly,g=!1;return d<Date.now()&&(g=!0),n.createElement("div",{className:"in-product-modal-slide-inner"},n.createElement("div",{className:"in-product-modal-slide-main"},n.createElement(r.Image,{className:"popcorn",src:o.static_url("/static/images/montana/in_product_modal/popcorn-vfl3x8Mha.png"),srcHiRes:o.static_url("/static/images/montana/in_product_modal/popcorn@2x-vfl4WZ88G.png")}),n.createElement("h1",{className:"in-product-modal-header"},i._("Your plan just got an upgrade")),n.createElement("p",{className:"in-product-modal-text"},g?i._("The price of Dropbox %(trademark)s recently changed to %(price)s/%(period)s.").format({price:a,period:_?i._("month"):i._("year"),trademark:c.TRADEMARK_PLUS}):i._("The price of Dropbox %(trademark)s is changing to %(price)s/%(period)s (plus any applicable taxes) on %(rebill_date)s.").format({price:a,rebill_date:m.nice_date_with_month_name(d,!0,!0),period:_?i._("month"):i._("year"),trademark:c.TRADEMARK_PLUS})),n.createElement("p",{className:"in-product-modal-text"},i._("This all-new plan has more space and new premium features—all for just %(price_difference)s more a %(period)s.").format({period:_?i._("month"):i._("year"),price_difference:u})),n.createElement(l.Button,{className:"button-sapphire",variant:"primary",onClick:p},i._("Got it"))),n.createElement("div",{className:"in-product-modal-manage-plan"},n.createElement("p",null,_&&t?i.intl.formatMessage(i._("Save up to %(discount_percentage)s on your plan—<link>switch to yearly billing.</link>"),{discount_percentage:i.format_percent(17),link:function(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];return n.createElement("a",{href:"/account/plan?modal=change_schedule","aria-label":i._("Link to Account Settings"),className:"in-product-modal-link","data-test":"yearly-billing-switch",target:"_blank",rel:"noreferrer noopener",onClick:function(){return s.logEvent("plus_ipa_modal_click",{featureType:"intro",cta:"manage_your_plan"})}},e)}}):i.intl.formatMessage(i._("<link>View your account details.</link>"),{link:function(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];return n.createElement("a",{href:"/account/general","aria-label":i._("Link to Account Settings"),className:"in-product-modal-link",target:"_blank",rel:"noreferrer noopener",onClick:function(){return s.logEvent("plus_ipa_modal_click",{featureType:"intro",cta:"manage_your_plan"})}},e)}}))))}}));
//# sourceMappingURL=plus_announcement.min.js-vfl6Dw12U.map