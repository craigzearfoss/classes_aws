define(["require","exports","rondo/v1/metadata","rondo/v1/metadata_redux/slice_action","rondo/v1/metadata_redux","rondo/v1/metadata_action_listener/types"],(function(t,e,a,n,c,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={pattern:"^watchAction("+c.prefixNoSlice+")*(\\w+)",meta:i.WatchActionMeta,valueMapper:function(t){return{actions:[{actionType:"ACTION_"+n.actionCamelCaseToUnderscore(t),useSlice:n.useSliceSingleMatch(t)}]}}};e.getWatchActionEntries=function(t){return a.getMetadataEntries(t,i.WatchActionMeta,o)},e.getWatchActions=function(t){return a.getMetadataEntriesElements(t,i.WatchActionMeta,o)}}));
//# sourceMappingURL=metadata.min.js-vflJuq1Yx.map