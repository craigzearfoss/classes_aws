define(["require","exports","tslib","modules/clean/unity/check_file_cache","modules/clean/unity/features","modules/clean/unity/types"],(function(e,n,i,t,l,r){"use strict";function o(e,n){l.UnityFeatures.file_browser_display_name((function(i){e.file_browser_display_name=i,n(e)}),(function(){return n(e)}))}function a(e){return null!=e&&(!!e.is_locally_available||!!e.is_infinite_placeholder)&&n.UnityHelpers.clientSupportsOpenInFileBrowser()}function u(e){return null!=e&&!!e.is_locally_available&&!1!==e.can_open_directly}Object.defineProperty(n,"__esModule",{value:!0}),t=i.__importDefault(t),n.UnityInfo=r.UnityInfo,n.isUnityFolderSupported=a,n.isUnityFileSupported=u,n.UnityHelpers={isUnityEnabled:function(){return l.UnityFeatures.isUnitySupported()},isFileInUnityCache:function(e,n){return!!t.default.is_cached_and_locally_available(e,n)},clientSupportsOpenInFileBrowser:function(){return l.UnityFeatures.client_supports_open_in_file_browser()},getFileInfoFromUnityCache:function(e,n){return t.default.get(e,n)},fetchUnityFileInfo:function(e,n,i,t,r){l.UnityFeatures.check_file(e,n,i,(function(e){e.is_locally_available?o(e,t):t(e)}),r)},getUnityFileInfo:function(e,i,t,l,r){if(n.UnityHelpers.isFileInUnityCache(e,i)){var a=n.UnityHelpers.getFileInfoFromUnityCache(e,i);a.is_locally_available&&null==a.file_browser_display_name?o(a,l):l(a)}else n.UnityHelpers.fetchUnityFileInfo(e,i,t,l,r)},openFile:function(e,n,i,t){l.UnityFeatures.open_file(e,n,i,l.UnityFeatures.standard_open_file_handler,(function(){return l.UnityFeatures.standard_open_file_handler(!1)}),t)},isUnityFolderSupported:a,isUnityFileSupported:u}}));
//# sourceMappingURL=unity_utils.min.js-vflP5Jlk9.map