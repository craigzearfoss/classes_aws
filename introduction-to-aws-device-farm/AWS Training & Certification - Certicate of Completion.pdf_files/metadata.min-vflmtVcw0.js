define(["require","exports","rondo/v1/metadata","rondo/v1/metadata_reselect/types"],(function(e,t,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.reselectConvention={pattern:/^reselect(\w+)/,meta:r.ReselectMeta,valueMapper:function(e){return{name:n.lowerFirstCharacterSingleMatch(e)}}},t.getReselectEntries=function(e){return n.getMetadataEntries(e,r.ReselectMeta,t.reselectConvention)},t.getReselects=function(e){return n.getMetadataEntriesElements(e,r.ReselectMeta,t.reselectConvention)}}));
//# sourceMappingURL=metadata.min.js-vfln2_qLT.map