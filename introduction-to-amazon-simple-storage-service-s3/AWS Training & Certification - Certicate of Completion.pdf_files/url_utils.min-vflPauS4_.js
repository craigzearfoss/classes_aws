define(["require","exports"],(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=["mailto:","webcal:","tel:"];e.isValidURL=function(t){if(!t||!t.trim().length)return!1;try{var e=new URL(t);return!!e.host||r.includes(e.protocol)}catch(t){return!1}},e.maybePreprendHttp=function(t){return t&&r.filter((function(e){return t.trim().startsWith(e)})).length?t:(t.match(/^[a-zA-Z0-9\+\-\.]+:\/\//)||(t="http://"+t),t)}}));
//# sourceMappingURL=url_utils.min.js-vfl-P6UdB.map