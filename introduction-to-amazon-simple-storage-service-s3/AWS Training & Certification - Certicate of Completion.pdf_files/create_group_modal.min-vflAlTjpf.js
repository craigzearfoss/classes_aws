define(["require","exports","tslib","react","modules/core/i18n","modules/clean/viewer","dig-components/buttons","dig-components/modal","dig-components/typography","dig-components/text_fields","modules/clean/api_v2/default_team_client"],(function(e,t,a,n,r,o,l,u,i,c,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=a.__importStar(n),t.createGroup=function(e,t){return void 0===t&&(t={".tag":"user_managed"}),a.__awaiter(void 0,void 0,void 0,(function(){return a.__generator(this,(function(a){switch(a.label){case 0:return[4,new d.DefaultTeamApiV2Client(o.Viewer.get_viewer().work_user).ns("team").rpc("groups/create",{group_name:e,group_management_type:t,add_creator_as_owner:!0},{})];case 1:return[2,a.sent()]}}))}))},t.CreateGroupModal=function(e){var a=e.open,o=e.baseClass,d=e.handleOnClose,s=n.useState(),m=s[0],p=s[1],_=n.useState(),f=_[0],g=_[1];return n.default.createElement(u.Modal,{open:a,className:o,width:"small",withCloseButton:r._("Close Modal"),onRequestClose:function(){return d()}},n.default.createElement(u.Modal.Header,{hasBottomSpacing:"title-standard"},n.default.createElement(i.Title,null,r._("Create New Group"))),n.default.createElement(u.Modal.Body,null,n.default.createElement(i.Text,{isBold:!0},r._("Group name")),n.default.createElement(c.TextInput,{autoFocus:!0,placeholder:r._("Marketing, sales, etc"),value:m,onChange:function(e){return p(e.currentTarget.value)}}),n.default.createElement(i.Text,{tagName:"p"},r._("You will be the only person who can add members to this group")),f&&n.default.createElement(i.Text,{tagName:"p"},f)),n.default.createElement(u.Modal.Footer,null,n.default.createElement(l.Button,{variant:"outline",onClick:function(){return d()}},r._("Cancel")),n.default.createElement(l.Button,{variant:"primary",onClick:function(){return m&&t.createGroup(m).then(d).catch((function(e){return g(e("There are one or more errors with your group name."))}))},disabled:!m},r._("Create Group"))))}}));
//# sourceMappingURL=create_group_modal.min.js-vfl_J7J7f.map