define(["require","exports","tslib","modules/clean/contacts/contact","modules/clean/rondo/components/members_picker/members_picker_behavior","modules/clean/contacts/types"],(function(e,n,t,r,a,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),o=t.__importDefault(o),n.parseTokenObject=function(e){return{content:e,key:e.dbx_account_id,variant:e.invalid?"error":e.on_team?"default":"warning"}};var c=function(e,n){return e.dbx_account_id===n.dbx_account_id};n.ContactTypeAheadFactory=function(e,n,t){return a.TypeaheadBehavior({dataSourceCreator:e,comparator:c,tokenCreator:function(e,t,a){return n(new r.Contact({name:e,dbx_account_id:a,on_team:"pending"===t,invalid:"error"===t,type:"error"===t?o.default.INVALID_ID:o.default.DBX_ID,pending:"pending"===t}))},parser:n,fieldConfig:t})},n.TypeAheadFactory=function(e){return n.ContactTypeAheadFactory((function(){return new e}),n.parseTokenObject,{initialValue:[],clearValue:[],idExtractor:function(e){return e.key}})}}));
//# sourceMappingURL=contacts_picker_behavior.min.js-vflyGehtV.map