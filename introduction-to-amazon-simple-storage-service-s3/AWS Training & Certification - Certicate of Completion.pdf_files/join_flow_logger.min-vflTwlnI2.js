define(["require","exports","modules/clean/api_v2/default_user_client"],(function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),(function(e){e.INVITE_LINK="invite_link",e.IMM_WEB="IMM_web",e.IMM_CB="IMM_cb"})(t.InviteSource||(t.InviteSource={})),(function(e){e.RESEND_INVITE_MODAL="resend_invite_modal",e.REQUEST_TO_JOIN="request_to_join",e.SUGGESTION_TO_JOIN="suggestion_to_join",e.DESKTOP_REQUEST_TO_JOIN_NOTIFICATION="desktop_request_to_join_notification"})(t.Source||(t.Source={})),(function(e){e.WEB="web",e.DESKTOP="desktop"})(t.Platform||(t.Platform={})),t.JoinFlowEvent={invite_user:{".tag":"invite_user"},accept_invitation:{".tag":"accept_invitation"}};var i=(function(){function e(){}return e.logJoinFlowEvent=function(e,t,i,o,_){new n.DefaultUserApiV2Client(e).ns("team").rpc("join_flow_log_event",{team_id:i,event_type:t,invitee_emails:o,extras:_},{})},e})();t.JoinFlowLogger=i}));
//# sourceMappingURL=join_flow_logger.min.js-vfl5dip8c.map