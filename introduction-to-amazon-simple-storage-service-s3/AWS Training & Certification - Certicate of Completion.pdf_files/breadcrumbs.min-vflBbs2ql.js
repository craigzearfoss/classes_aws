define(["require","exports","tslib","react","modules/clean/viewer","modules/clean/react/file_path_breadcrumb"],(function(e,t,r,a,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=r.__importDefault(a),t.Breadcrumbs=function(e){var t=e.filepath,r=e.maxWidth,u=e.user,l=(function(e,t){for(var r=[{name:n.Viewer.get_root_name(t)}],a=0,i=e.split("/").filter((function(e){return e}));a<i.length;a++){var u=i[a];r.push({name:u})}return r})(t.replace(new RegExp("/[^/]*$"),""),u);return a.default.createElement(i.FilePathBreadcrumb,{paths:l,maxWidth:r,useLinks:!1,pathClassname:"file_activity_stream__breadcrumb",showTooltipOnTruncated:!0})}}));
//# sourceMappingURL=breadcrumbs.min.js-vfl35qZ0n.map