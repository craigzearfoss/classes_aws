define(["require","exports","modules/core/i18n","modules/core/notify","modules/core/html"],(function(e,o,i,t,r){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.initialize_module=function(e){var s=e.message,n=e.isError;o.utils.cookies_are_enabled()||t.Notify.error(i._("Please enable browser-cookies to use the Dropbox website.")),s&&(null==n||n?t.Notify.error(new r.HTML(s)):t.Notify.success(new r.HTML(s)))},o.utils={cookies_are_enabled:function(){return navigator.cookieEnabled?navigator.cookieEnabled:(document.cookie="this_is_a_test_cookie",-1!==document.cookie.indexOf("this_is_a_test_cookie"))}}}));
//# sourceMappingURL=flash_pagelet.min.js-vfl7qU4C-.map