define(["require","exports","modules/clean/react/app_actions/category","modules/clean/react/file_viewer/open_button/types","modules/clean/react/extensions/common"],(function(t,i,o,n,r){"use strict";function e(t,i){if(t.priority&&i.priority){var o=i.priority-t.priority;return 0!==o?o:t.description<i.description?-1:t.description>i.description?1:0}return t.priority?-1:i.priority?1:t.description<i.description?-1:t.description>i.description?1:0}Object.defineProperty(i,"__esModule",{value:!0}),i.actionCompareFn=e,i.partitionActions=function(t,i){void 0===i&&(i=5);var n=[],c=[],p=[],s=[];return t.sort(e).forEach((function(t){t.category===o.Category.CLOUD_EDITORS?n.push(t):r.isLinked(t)||r.isPrelinked(t)?c.push(t):void 0!==t.priority&&t.priority>0&&p.length<i?p.push(t):s.push(t)})),{cloudEditors:n,installedActions:c,promotedActions:p,unpromotedActions:s}},i.partitionOptions=function(t){var i,o=[],r=[];return t.forEach((function(t){var e=t.type;e===n.OpenButtonAction.UNITY_FILE||e===n.OpenButtonAction.UNITY_FOLDER?o.push(t):e===n.OpenButtonAction.OPEN_WITH||e===n.OpenButtonAction.OPEN_WITH_CLOUD_DOC?r.push(t):e===n.OpenButtonAction.DOWNLOAD&&(i=t)})),{unityOptions:o,cloudEditorOptions:r,downloadOption:i}},i.constructAlphabetizeActions=function(t){return function(i,o){var n=t[i.category].display_name,r=t[o.category].display_name;return n<r?-1:n>r?1:i.description<o.description?-1:i.description>o.description?1:0}}}));
//# sourceMappingURL=helpers.min.js-vfl6PAdzG.map