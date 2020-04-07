define(["require","exports","tslib","react","classnames","spectrum/button","spectrum/checkbox","spectrum/tertiary_link","spectrum/modal","modules/clean/ajax","modules/clean/display_format","modules/clean/teams/constants","modules/clean/analytics","modules/clean/components/loading_indicator","modules/clean/contacts/contact","modules/clean/contacts/tokenizer","modules/clean/contacts/types","modules/clean/dbmodal_stack","react-modal","modules/clean/loggers/join_flow_logger","modules/clean/react/payments/update_individual_billing/update_individual_store_creator","modules/clean/payments/skus/subscription_diff","modules/clean/payments/skus/subscription_service","modules/clean/payments/skus/subscription_status","modules/clean/teams/admin/widgets/update_billing_modal/update_billing_modal_loader","modules/clean/react/css","modules/clean/react/invite/invite_and_buy_text","modules/clean/react/modal","modules/clean/stormcrow/experiment","modules/clean/viewer","modules/core/browser","modules/core/html","modules/core/i18n","modules/core/notify","modules/clean/user_education/user_education_client","modules/clean/react/teams/avatar/components","modules/clean/stormcrow/stormcrow_exposure_logger","external/lodash","modules/clean/ux_analytics_modal_tracking","modules/clean/ux_analytics_utils","modules/clean/react/payments/common/adapters/setup_cash","modules/clean/teams/admin/widgets/invite_modal/invite_link","modules/clean/teams/admin/api/admin_console_api_client","modules/clean/teams/admin/widgets/invite_modal/invite_modal_first_task","modules/clean/teams/admin/widgets/invite_modal/invite_modal_groups","modules/clean/react/member_sidebar_actions"],(function(e,t,i,n,s,a,r,o,l,m,u,c,d,g,_,p,v,f,h,b,S,L,y,I,k,x,E,A,w,M,C,T,N,P,R,O,D,F,V,B,j,W,q,U,G,z){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=i.__importDefault(n),s=i.__importDefault(s),m=i.__importStar(m),v=i.__importDefault(v),h=i.__importDefault(h),C=i.__importStar(C),F=i.__importStar(F),q=i.__importDefault(q),h.default.setAppElement(document.body);var Y=(function(e){function o(s){var o=e.call(this,s)||this;return o.closeModal=function(e){var t=o.props.onDismiss;window.setTimeout((function(){R.UEClient.sendEvent("InviteModal","Hide")}),2500),o.growthActSmbGroupsIMM.isActive||o.growthActSmbFirstTask.isActive?null==t||t(o.state.memberList):A.Modal.close(),e&&e(o.state.memberList)},o.onBillingClick=function(e){e.stopPropagation(),e.preventDefault();var s=o.state,a=s.emails,r=s.inviteMessage,l=function(){A.Modal.showInstance(n.default.createElement(t.InviteModal,i.__assign({},o.props,{emails:a,inviteMessage:r}))),f.DBModalStack.unregister(S.BILLING_INFO_UPDATED,l)};o.closeModal(),f.DBModalStack.register(S.BILLING_INFO_UPDATED,l),k.UpdateBillingModalLoader.showInstance(l)},o.onSubServiceResponse=function(e,t,i,n){o.setState({emails:t,isMakingTransitionInfoRequest:!1,isPreparingForSubmit:!1,numRemainingLicenses:i-n-t.length,subChangePlan:e})},o.onContactsChanged=function(e,t){var i=o.state,n=i.isReseller,s=i.isSelfServe,a=i.numProvisionedLicenses,r=i.isLoading,l=i.emails,m=i.sentEmails;if(!r){o.setState({isEmailTextInputted:e.length>0||t.length>0});var u=e.map((function(e){return e.email})).filter((function(e){return void 0!==e})),c={emails:u,isPreparingForSubmit:!1,numRemainingLicenses:o.totalLicenses-a-u.length-m.length};!n&&s&&u.length!==l.length&&u.length+a>o.totalLicenses?o.updateSubChangePlan(u.length+a,c):o.setState(c)}},o.onMessageChanged=function(e){o.setState({inviteMessage:e.target.value})},o.sendInviteAction=function(){var e=o.state.emails,t=o.contactsTokenizer.getContacts();e.length!==t.length?o.setState({isPreparingForSubmit:!0},(function(){o.contactsTokenizer.tokenizeAll()})):o.sendMemberInvites()},o.onPrimaryActionClick=function(){!o.props.isInviteLinkGaEnabled||o.growthActSmbFirstTask.isActive?o.sendInviteAction():o.shouldRenderSendInviteAction?o.sendInviteAction():o.closeModal()},o.onSecondaryActionClick=function(){d.TeamsWebActionsLogger.log("invite_member_open_cancel",i.__assign(i.__assign({},o.defaultLoggingExtras),{added_message:o.hasInviteMessage,invite_count:o.inviteCount,invite_or_buy:o.inviteOrBuyText})),o.closeModal()},o.sendMemberInvites=function(){var e=o.state,t=e.emails,n=e.groupIds,s=e.inviteMessage,a=e.numRemainingLicenses,r=e.subChangePlan,l=e.sentEmails,u=e.memberList,g=a<0?-1*a:0,_={charge_for_new_licenses:!0,custom_message:s,emails:t,groups:n,expected_overage:String(g),expected_price:"0",extra:JSON.stringify(i.__assign({},o.defaultLoggingExtras)),url:C.get_uri().path,invite_source:b.InviteSource.IMM_WEB,platform:b.Platform.WEB};if(r&&r.tvm&&(_.expected_price=r.tvm.transition.expected_price),d.TeamsWebActionsLogger.log("invite_member_open_invite_click",i.__assign(i.__assign({},o.defaultLoggingExtras),{added_message:o.hasInviteMessage,expected_price:_.expected_price,invite_count:o.inviteCount,invite_or_buy:o.inviteOrBuyText,licenses_to_add:g})),0===t.length)return P.Notify.error(N._("You haven’t included anyone to invite! Please invite at least one person.")),void d.TeamsWebActionsLogger.log("invite_member_open_invite_error",i.__assign(i.__assign({},o.defaultLoggingExtras),{client:!0,error_reason:"no_invites",invite_or_buy:o.inviteOrBuyText}));for(var p=0,v=t;p<v.length;p++){var f=v[p].toLowerCase().split("@",2)[1];if(-1!==["getdropbox.com","dropboxmail.com"].indexOf(f))return P.Notify.error(N._("You are not allowed to invite a member with a %(domain)s email.").format({domain:f})),void d.TeamsWebActionsLogger.log("invite_member_open_invite_error",i.__assign(i.__assign({},o.defaultLoggingExtras),{client:!0,error_reason:"invite with dropbox domain",invite_or_buy:o.inviteOrBuyText}))}P.Notify.success(N._("Submitting...",{comment:"message shown after user clicks send invite or invite and buy button on invite member modal"})),o.setState({isSubmitting:!0},(function(){var e=Date.now(),n=M.Viewer.get_viewer().work_user;m.FormWebRequest({url:"/account/team/add_users",data:_,subject_user:n,success:function(n){var s=JSON.parse(n);if(P.Notify.clear(),o.setState({isSubmitting:!1}),d.TeamsWebActionsLogger.log("team_admin_add_member_submit_time",i.__assign(i.__assign({},o.defaultLoggingExtras),{time_ms:Date.now()-e})),s){var r=s.users,g=Object.keys(r),_=g.length,p=g.map((function(e){return r[e].email})),v=t.filter((function(e){return-1===p.indexOf(e)}));if(u.length&&(o.growthActSmbGroupsIMM.isActive||o.growthActSmbFirstTask.isActive)){var f=u[0],h=u.slice(1),b=g.map((function(e){return{admin_role:c.ADMIN_ROLE.NONE,initials:r[e].email[0].toUpperCase(),photo_url:null,display_name:r[e].email,email:r[e].email,team_join_state:z.JoinState.PENDING,user_id:r[e].id,storage_used:0,account_id:""}}));o.setState({numRemainingLicenses:a-l.length,sentEmails:l.concat(b),emails:[],memberList:i.__spreadArrays([f],b,h)},(function(){o.growthActSmbGroupsIMM.isActive?o.closeModal():o.growthActSmbFirstTask.isActive&&o.loadMemberActionsData()}))}else o.closeModal((function(){o.props.onInviteSuccess&&o.props.onInviteSuccess(s.num_invited,a<0?-1*a:0)}));d.TeamsWebActionsLogger.log("invite_member_open_invite_success",i.__assign(i.__assign({},o.defaultLoggingExtras),{added_message:o.hasInviteMessage,invite_count:o.inviteCount,invite_or_buy:o.inviteOrBuyText})),1===_?P.Notify.success(N._("Invited %(user_email)s.").format({user_email:r[g[0]].email})):_>1?P.Notify.success(N._("Invited %(user_count)d people.").format({user_count:_})):P.Notify.error(N.ungettext("Skipped %(num_skipped)d person who is already a member of the team.","Skipped %(num_skipped)d people who are already members of the team.",v.length).format({num_skipped:v.length})),m.SilentBackgroundRequest({url:"/account/team/ajax_log_invites",data:{invitations:_}})}else o.props.onInviteError&&o.props.onInviteError(),P.Notify.error(N._("There was a problem completing this request."))},error:function(t,n,s){var a=N._("There was a problem completing this request.");if(P.Notify.clear(),o.setState({isSubmitting:!1}),d.TeamsWebActionsLogger.log("team_admin_add_member_submit_time",i.__assign(i.__assign({},o.defaultLoggingExtras),{time_ms:Date.now()-e,error:!0})),s)try{var r=JSON.parse(s).emails,l=void 0===r?{}:r;l.message_text&&(a=l.message_text,d.TeamsWebActionsLogger.log("invite_member_open_invite_error",i.__assign(i.__assign({},o.defaultLoggingExtras),{client:!0,error_reason:"form_input_invalid",invite_or_buy:o.inviteOrBuyText})))}catch(e){a=s}else d.TeamsWebActionsLogger.log("invite_member_open_invite_error",i.__assign(i.__assign({},o.defaultLoggingExtras),{client:!0,error_reason:"problem_request",invite_or_buy:o.inviteOrBuyText}));o.props.onInviteError&&o.props.onInviteError(),P.Notify.error(new T.HTML(a))}})}))},o.renderPrimaryAction=function(e,t){var i=o.state,s=i.isReseller,r=i.numRemainingLicenses,l=i.isSubmitting,m=i.isSelfServe,u=i.memberList,c=o.isInviteButtonDisabled,d=N._("Send invites");return r<0&&!s&&!o.isNCCT&&m&&!u.length&&(d=N._("Invite and buy")),!o.props.isInviteLinkGaEnabled||o.shouldRenderSendInviteAction||o.growthActSmbFirstTask.isActive||(d=N._("Done",{comment:"A button to close the invite modal",project:"admin-console"}),c=!1),n.default.createElement(a.Button,{ref:t,variant:"primary",disabled:c,onClick:e},n.default.createElement("span",{className:"modal-button-wrapper"},d,l&&n.default.createElement("span",{className:"loading-indicator"},n.default.createElement(g.LoadingIndicator,{style:g.LoadingIndicator.LoadingIndicatorStyle.SPINNER}))))},o.renderSecondaryAction=function(e){var t=N._("Cancel");return n.default.createElement(a.Button,{variant:"secondary",onClick:e},t)},o.contactFilter=function(e){return e.type===v.default.EMAIL},o.renderContactsTokenizer=function(e,t,i){if(void 0===t&&(t=N._("Name or email",{comment:"Default text for inputting a member to invite to a team",project:"admin-console"})),void 0===i&&(i=8),e){var s=function(e){var t=o.state.suggestedMembers;return(void 0===t?[]:t).find((function(t){return t.email===e}))},a=o.state,r=a.isLoading,l=a.emails.map((function(e){return new _.Contact({name:s(e)?s(e).display_name:e,email:e,type:v.default.EMAIL,invalid:!1,on_team:!1,pending:!0,query:e,photo_url:s(e)?s(e).account_photo_url:void 0})}));return n.default.createElement("div",{className:"invite-modal__tokenizer"},n.default.createElement(p.ContactsTokenizer,{customClass:r?"disabled":"",customContactFilter:o.contactFilter,disabled:r,onContentsChange:o.onContactsChanged,placeholder:t,populatedInputData:{tokens:l,value:""},ref:function(e){o.contactsTokenizer=e},showContactImport:!1,tokenSpacing:i,user:e,listHeight:81,tokenizeOnOutOfFocus:!0}))}},o.renderMemberItem=function(e){var t=o.state.emails.includes(e.email)?"checked":"unchecked";return n.default.createElement("li",{className:"suggested-members__item",key:e.user_id},n.default.createElement(r.Checkbox,{name:""+e.user_id,className:"suggested-members__checkbox",checked:t,onChange:function(t){return o.handleCheckboxClicked(t,e.email)}}),n.default.createElement(O.TeamUserAvatar,{name:e.display_name,email:e.email,photo_url:e.account_photo_url}))},o.renderRecommendedMembers=function(){var e=o.state.suggestedMembers,t=(void 0===e?[]:e).map(o.renderMemberItem);return n.default.createElement("div",null,n.default.createElement("h2",{className:"suggested-members__title"},N._("Recommended Members")),n.default.createElement("ul",{className:"suggested-members__list-container"},t))},o.closeAndOpenCSVImportModal=function(){var e=o.props,t=e.onCSVImport,i=e.onDismiss;d.TeamsWebActionsLogger.log("import_csv_modal_open",o.defaultLoggingExtras),t&&(o.closeModal(i),t())},o.subService=new y.SubscriptionService,o.apiClient=new q.default,o.state={emails:s.emails||[],groupIds:[],inviteMessage:s.inviteMessage||"",isEmailTextInputted:!!s.emails&&s.emails.length>0||!1,isLoading:!0,isMakingTransitionInfoRequest:!1,isPreparingForSubmit:!1,isSubmitting:!1,numProvisionedLicenses:0,numRemainingLicenses:0,showInviteLink:!1,showSidebar:!!s.memberList&&1===s.memberList.length,memberList:s.memberList||[],sentEmails:[]},o.growthActSmbFirstTask.isActive&&s.memberList&&o.loadMemberActionsData(),o.defaultLoggingExtras={is_client:!1,origin:o.props.origin},o.props.actionTrigger&&(o.defaultLoggingExtras.action_trigger=o.props.actionTrigger,o.defaultLoggingExtras.module_name="first_task_imm",o.defaultLoggingExtras.framework="team_setup_essential"),o}return i.__extends(o,e),Object.defineProperty(o.prototype,"isInviteButtonDisabled",{get:function(){var e=this.state,t=e.emails,i=e.isLoading,n=e.isMakingTransitionInfoRequest,s=e.isReseller,a=e.isSelfServe,r=e.isSubmitting,o=e.numRemainingLicenses;return i||n||r||s&&o<0||!a&&o<0||0===t.length&&this.contactsTokenizer&&0===this.contactsTokenizer.getInputValue().length},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"hasInviteMessage",{get:function(){return Boolean(this.state.inviteMessage)},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"inviteCount",{get:function(){return this.state.emails.length},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"inviteOrBuyText",{get:function(){return this.state.numRemainingLicenses<0?"invite_buy":"send_invites"},enumerable:!0,configurable:!0}),o.prototype.relaunchFirstTaskModal=function(e){var t=this.props.onDismiss;t&&t(e,!0)},o.prototype.loadMemberActionsData=function(){var e=this,t=this.props.evhMaxDays,n=this.state.memberList,s=n.map((function(e){return e.user_id}));return m.WebRequest({url:"/team/admin/members/member_actions_data",data:{user_list:JSON.stringify(s)},subject_user:M.Viewer.get_viewer().work_user,success:function(s){var a=JSON.parse(s).reduce((function(s,a){var r=n.find((function(e){return e.user_id===a.user_id}));return r?(s[r.user_id]={displayName:r.display_name,accountPhotoUrl:r.photo_url||"",isAdmin:r.admin_role!==c.ADMIN_ROLE.NONE,teamName:e.viewer.team_name,teamJoinState:a.team_join_state,userId:r.user_id,canDeleteMember:a.can_delete,canViewMemberActivities:a.can_view_member_activities,email:r.email,storageUsed:u.format_bytes(r.storage_used),accountId:r.account_id,teamJoinDate:a.team_join_date,canTransferFiles:a.can_transfer_files,evhEndDate:new Date((new Date).setDate(t||0)).toLocaleDateString(),numApiApps:a.num_api_apps,mergedPersonalAccount:a.merged_personal_account,isAalTosRequired:a.is_aal_tos_required,onClose:function(){e.relaunchFirstTaskModal(n)},deleteCallback:function(){for(var t=0;t<n.length&&n[t].user_id!==r.user_id;t++);n.splice(t,1),e.relaunchFirstTaskModal(n)},roleUpdateCallback:function(t){for(var s=0;s<n.length;s++)if(n[s].user_id===r.user_id){var a=i.__assign({},n[s]);a.admin_role=t,n[s]=a}e.setState({memberList:n})}},s):s}),{});e.setState({memberActionsData:a})}})},o.prototype.componentDidUpdate=function(e,t){var i=this.state,n=i.emails,s=i.isPreparingForSubmit;i.numRemainingLicenses>=n.length&&t.isPreparingForSubmit&&!s&&this.sendMemberInvites()},o.prototype.componentWillUnmount=function(){B.dispatchModalClosed()},o.prototype.componentDidMount=function(){var e=this,t=this.props.onDismiss;m.WebRequest({url:"/team/admin/members/invite_members_modal_view_model",subject_user:M.Viewer.get_viewer().work_user,success:function(t){var n,s,a=JSON.parse(t),r=a.isReseller,o=a.numActiveTeamMembers,l=a.provisionedLicenses,m=a.currencyToFormatMap,u=a.localeNumberFormat,c=void 0===a.isSelfServe||a.isSelfServe;if(r){var g=a.resellerContact,_=a.serializedResellerSubSkuSet;n=(s=_.licenseSkus[0].quantity)-l,e.setState({isLoading:!1,isReseller:r,isSelfServe:c,numActiveTeamMembers:o,numProvisionedLicenses:l,numRemainingLicenses:n,resellerContact:g,serializedResellerSubSkuSet:_},(function(){var t;e.props.shouldShowInviteLink&&(t=e.props.inviteLinkUrl?"ON":"OFF"),d.TeamsWebActionsLogger.log("invite_member_open",i.__assign(i.__assign({},e.defaultLoggingExtras),{invite_or_buy:e.inviteOrBuyText,license_limit:s,num_team_members:o,provisioned_licenses:l,url:C.get_uri().path,link_status:t})),e.setInitialSubChangePlan()}))}else{var p=I.SubscriptionStatus.deserialize(a.serializedSubStatus);n=(s=p.subState.totalLicenses)-l-e.state.emails.length-e.state.sentEmails.length,e.fetchSuggestions(),e.setState({isReseller:r,isSelfServe:c,numActiveTeamMembers:o,numProvisionedLicenses:l,numRemainingLicenses:n,subStatus:p},(function(){var t;e.props.shouldShowInviteLink&&(t=e.props.inviteLinkUrl?"ON":"OFF"),d.TeamsWebActionsLogger.log("invite_member_open",i.__assign(i.__assign({},e.defaultLoggingExtras),{invite_or_buy:e.inviteOrBuyText,license_limit:s,num_team_members:o,provisioned_licenses:l,url:C.get_uri().path,link_status:t})),e.setInitialSubChangePlan()}))}j.setupCash(u,m),B.dispatchModalOpened()},error:function(i){P.Notify.error(N._("Failed to load modal.")),e.closeModal(t)}})},Object.defineProperty(o.prototype,"totalLicenses",{get:function(){var e=this.state,t=e.isReseller,i=e.serializedResellerSubSkuSet,n=e.subStatus;return t?i.licenseSkus[0].quantity:n?n.subState.totalLicenses:void 0},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"viewer",{get:function(){return M.Viewer.get_viewer()},enumerable:!0,configurable:!0}),o.prototype.setInitialSubChangePlan=function(){var e=this.props.emails,t=this.state.numProvisionedLicenses;if(!e)return this.setState({isLoading:!1});e.length+t>this.totalLicenses?this.updateSubChangePlan(e.length+t,{emails:e,numProvisionedLicenses:t,totalLicenses:this.totalLicenses},{isLoading:!1}):this.setState({isLoading:!1})},o.prototype.updateSubChangePlan=function(e,t,n){var s=this;void 0===n&&(n={});var a=L.SubscriptionDiff.fromSubscriptionStatus(this.state.subStatus);a.setTotalLicenses(e),this.setState({isMakingTransitionInfoRequest:!0},(function(){var e=Date.now();s.subService.price(a).then((function(a){var r=t.emails,o=t.totalLicenses,l=t.numProvisionedLicenses;s.onSubServiceResponse(a,r,o,l),F.isEmpty(n)||s.setState(n),d.TeamsWebActionsLogger.log("invite_member_billing_load_time_new_imm",i.__assign(i.__assign({},s.defaultLoggingExtras),{time_ms:Date.now()-e}))}))}))},Object.defineProperty(o.prototype,"shouldRenderSendInviteAction",{get:function(){return this.state.isEmailTextInputted},enumerable:!0,configurable:!0}),o.prototype.renderAltAction=function(e){var t=this.state.numRemainingLicenses;return!this.isNCCT&&t&&t<0?this.renderPricingInformation():null},o.prototype.renderForm=function(){var e=this.state,t=e.inviteMessage,i=e.isLoading,s=e.suggestedMembers,a=e.isEmailTextInputted,r=this.props,o=r.isInviteLinkGaEnabled,l=r.shouldShowInviteLink,m=this.expSubgrowthExpandProspectiveImm.isActive&&s,u=(!o||a)&&!m;return n.default.createElement("form",{className:"invite-modal__form"},l&&n.default.createElement("p",{className:"invite-modal__form_title"},N._("Or invite with an email")),this.renderContactsTokenizer(this.viewer.work_user),m&&this.renderRecommendedMembers(),u&&n.default.createElement("div",null,n.default.createElement("textarea",{className:"invite-modal__message-input",disabled:i,id:"message-input",onChange:this.onMessageChanged,placeholder:N._("Add an optional message"),value:t}),n.default.createElement("label",{className:"message-input-label",htmlFor:"message-input"},N._("Invite message"))))},o.prototype.renderLicensesRemainingText=function(){var e,t=this.state,i=t.emails,s=t.isLoading,a=t.isReseller,r=t.numRemainingLicenses,o=t.resellerContact,l=t.isSelfServe,m=i.length,u=this.props.isInviteLinkGaEnabled;if(s)return n.default.createElement(g.LoadingIndicator,{className:"loading-indicator__licenses",style:g.LoadingIndicator.LoadingIndicatorStyle.SPINNER});if(this.isNCCT)return null;if(0===m)return 0===r?(e=N._("You have no remaining licenses."),u&&(e=N._("You have no licenses available"))):(e=N.ungettext("You have %(count)d remaining license.","You have %(count)d remaining licenses.",r).format({count:r}),u&&(e=N.ungettext("You have %(count)d available license.","You have %(count)d available licenses.",r).format({count:r}))),e;if(r<0)return e=a&&o?o.name&&o.phone?N.ungettext("You need more licenses for this invitation. Contact %(name)s at %(phone)s to add more.","You need more licenses for these invitations. Contact %(name)s at %(phone)s to add more.",m).format({name:o.name,phone:o.phone}):N.ungettext("You need more licenses for this invitation. Contact your reseller to add more.","You need more licenses for these invitations. Contact your reseller to add more.",m):l?N.ungettext("You need more licenses for this invitation.","You need more licenses for these invitations.",m):N.ungettext("You need more licenses for this invitation. Please contact your account executive to purchase licenses.","You need more licenses for these invitations. Please contact your account executive to purchase licenses.",m);var c=N.ungettext("After this invitation","After these invitations",m);return e=0===r?N._("%(invitation_msg)s, you’ll have no remaining licenses.").format({invitation_msg:c}):N.ungettext("%(invitation_msg)s, you’ll have %(count)d remaining license.","%(invitation_msg)s, you’ll have %(count)d remaining licenses.",r).format({invitation_msg:c,count:r})},o.prototype.renderPricingInformation=function(){var e=this.state,t=e.numRemainingLicenses,i=e.subChangePlan,a=e.subStatus,r=e.isMakingTransitionInfoRequest;if(!a||!i)return null;if(!i.finalSubState.billingSchedule)return null;if(r)return n.default.createElement("div",{className:"invite-modal__invite-and-buy"},n.default.createElement(g.LoadingIndicator,{style:g.LoadingIndicator.LoadingIndicatorStyle.SPINNER}));if(i.tvm){var o=s.default("invite-modal__invite-and-buy",{"subgrowth-expand-prospective-imm":this.expSubgrowthExpandProspectiveImm.isActive});return n.default.createElement("div",{className:o},n.default.createElement(E.InviteAndBuyText,{className:"invite-modal__invite-and-buy-text u-font-meta",additionalLicenses:-1*t,isTrial:a.isOnTrial,nextBillingDate:a.formattedNextBillingDate,subChangePlan:i}),n.default.createElement("a",{href:"#",className:"invite-modal__update-billing-link",onClick:this.onBillingClick},N._("Update billing")))}return null},Object.defineProperty(o.prototype,"isNCCT",{get:function(){var e=this.state.subStatus;return!!e&&(e.isOnTrial&&w.Experiment(this.props.ncctVariant).variantIn("V1","V2","V3","V4","V5","V6","V7","V8","V9","V10","V11","V12","V13"))},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"expSubgrowthExpandProspectiveImm",{get:function(){return w.Experiment(this.props.experiments.expSubgrowthExpandProspectiveImm)},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"growthActSmbFirstTask",{get:function(){return w.Experiment(this.props.experiments.growthActSmbFirstTask)},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"growthActSmbGroupsIMM",{get:function(){return w.Experiment(this.props.experiments.growthActSmbGroupsIMM)},enumerable:!0,configurable:!0}),o.prototype.fetchSuggestions=function(){var e=this;m.WebRequest({url:"/team/admin_ajax/fetch_all_suggested_users",subject_user:M.Viewer.get_viewer().work_user,success:function(t){var n=JSON.parse(t),s=i.__spreadArrays(n.requests,n.recommendations);s.length>0&&(D.logVariantExposure("subgrowth_expand_prospective_imm",e.expSubgrowthExpandProspectiveImm.variant),e.expSubgrowthExpandProspectiveImm.isActive&&(e.setState({suggestedMembers:s}),d.TeamsWebActionsLogger.log("rm_list_rendered_imm",i.__assign(i.__assign({},e.defaultLoggingExtras),{rm_userids:s.map((function(e){return e.user_id})),url:C.get_uri().path}))))}})},o.prototype.handleCheckboxClicked=function(e,t){var i=this.state,n=i.emails,s=i.isReseller,a=i.numProvisionedLicenses,r=i.sentEmails,o=n.slice();"checked"===e?o.push(t):"unchecked"===e&&(o=o.filter((function(e){return e!==t})));var l={emails:o,isPreparingForSubmit:!1,numRemainingLicenses:this.totalLicenses-a-o.length-r.length};!s&&o.length+a>this.totalLicenses?this.updateSubChangePlan(o.length+a,l):this.setState(l)},o.prototype.sendGroupInvites=function(e,t){this.setState({emails:e,groupIds:t},this.sendMemberInvites)},o.prototype.render=function(){var e=this,t=this.props,i=t.isOpen,s=t.customClass,a=t.shouldShowInviteLink,r=t.inviteLinkUrl,o=t.inviteLinkExpiredTs,m=t.inviteToken,u=t.isInviteLinkGaEnabled,c=t.csvImportLabel,d=t.onCSVImport,g=t.tieredAdmin,_=t.width,p=void 0===_?699:_,v=this.state,f=v.numRemainingLicenses,h=v.emails,b=v.isSubmitting,S=v.memberList,L=v.showSidebar,y=v.sentEmails,I=v.memberActionsData,k=N._("Invite members to your team"),x=this.shouldRenderSendInviteAction||!u;if(this.growthActSmbGroupsIMM.isActive)return n.default.createElement(G.GroupsInviteModal,{open:!!i,isSubmitting:b,memberList:S,handleOnClose:this.closeModal,handleCSVImport:this.closeAndOpenCSVImportModal,sendInvites:function(t,i){return e.sendGroupInvites(t,i)}});if(this.growthActSmbFirstTask.isActive&&S.length){var E="invite-modal-first-task",A=n.default.createRef();return n.default.createElement(U.FirstTaskInviteModal,{open:!!i,baseClass:E,showSidebar:L,tieredAdmin:g,memberList:S,memberActionsData:I,emails:h,focusRef:A,sentEmails:y,handleOnClose:this.closeModal,loggingExtras:this.defaultLoggingExtras},n.default.createElement(n.default.Fragment,null,n.default.createElement("div",{className:E+"__subtitle"},n.default.createElement("div",null,N._("Invite by email")),!1),n.default.createElement("div",{className:E+"__invite-form"},this.renderContactsTokenizer(this.viewer.work_user,N._("Email addresses"),5),this.renderPrimaryAction(this.onPrimaryActionClick,A))))}return n.default.createElement(l.UtilityModal,{ariaLabel:N._("Invite Members"),className:"invite-modal "+s,onPrimaryAction:this.onPrimaryActionClick,onSecondaryAction:this.onSecondaryActionClick,open:!0,overlayClickClose:!0,primaryAction:this.renderPrimaryAction,secondaryAction:x?this.renderSecondaryAction:void 0,title:k,width:p+"px",link:c,onLink:d?this.closeAndOpenCSVImportModal:void 0,overlayClassName:"file-viewer-modal-overlay"},n.default.createElement(V.UXAnalyticsModalTracking,{id:"invite-modal"}),n.default.createElement("div",{className:"invite-modal__content"},n.default.createElement("p",{id:"invite-modal__form-license-msg"},this.renderLicensesRemainingText()),a&&n.default.createElement(W.InviteLink,{numRemainingLicenses:f,inviteLinkUrl:r,inviteLinkExpiredTs:o,inviteToken:m,teamRoutes:this.apiClient.teamRoutes(),emails:h,onInviteLinkCreate:this.props.onInviteLinkCreate,onInviteLinkDelete:this.props.onInviteLinkDelete,onUpdateModal:this.props.onUpdateModal,isTrial:F.get(this.state.subStatus,"isOnTrial"),showAddLicenses:this.props.showAddLicenses,isLoadingNumRemainingLicenses:this.state.isLoading,isNcct:this.isNCCT,isInviteLinkGaEnabled:u}),this.renderForm(),this.renderAltAction()))},o.defaultProps={experiments:{expSubgrowthExpandProspectiveImm:"OFF",growthActSmbFirstTask:"OFF",growthActSmbGroupsIMM:"OFF"},inviteMessage:"",emails:[]},o})(n.default.Component);t.InviteModalView=Y,t.InviteModal=x.requireCssWithComponent(Y,["/static/css/spectrum/index.web-vfl_-DzRS.css","/static/js/spectrum-sharing/index.web-vfl2DiaSm.css","/static/css/teams/admin/widgets/invite_modal/invite_modal-vflkeT8ZK.css"])}));
//# sourceMappingURL=invite_modal.min.js-vflqDyvOk.map