define(["require","exports","tslib","modules/clean/ajax","react","modules/clean/payments/skus/sku_content","modules/clean/react/button","modules/clean/react/css","modules/clean/react/image","modules/clean/react/modal","modules/clean/static_urls","modules/constants/trademark","modules/core/browser","modules/core/exception","modules/core/i18n","modules/clean/analytics","modules/clean/ncct/manual_assist_util","modules/clean/stormcrow/experiment","modules/clean/react/ncct/countdown_calendar"],(function(e,t,a,r,n,i,o,s,l,d,c,u,m,_,p,f,y,g,w){"use strict";var h;Object.defineProperty(t,"__esModule",{value:!0}),r=a.__importStar(r),n=a.__importDefault(n),m=a.__importStar(m),_=a.__importStar(_),(function(e){e[e.DAY_5=0]="DAY_5",e[e.DAY_26=1]="DAY_26",e[e.DAY_28=2]="DAY_28",e[e.DAY_3=3]="DAY_3",e[e.DAY_7=4]="DAY_7",e[e.DAY_3_14=5]="DAY_3_14",e[e.DAY_6=6]="DAY_6",e[e.DAY_9=7]="DAY_9",e[e.DAY_12=8]="DAY_12"})(h=t.ReminderIndexes||(t.ReminderIndexes={}));var V=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onAccept=function(){y.markConversionComplete(),f.TeamsWebActionsLogger.log("click_purchase_upsell_campaign",{reminder_index:t.props.reminderIndex}),m.redirect("/business/billing")},t.onDismiss=function(){y.markConversionComplete(),f.TeamsWebActionsLogger.log("click_dismiss_upsell_campaign",{reminder_index:t.props.reminderIndex}),d.Modal.close()},t}return a.__extends(t,e),t.load=function(){return new Promise((function(e,a){r.WebRequest({url:"/home_feed/get_ncct_reminder_modal_props",success:function(a){try{a=JSON.parse(a)}catch(t){return void e(!1)}a.props&&(t.showInstance(a.props),e(!0)),e(!1)}})}))},t.showInstance=function(e){y.markConversionStarted(),d.Modal.showInstance(n.default.createElement(t.NcctReminderModal,a.__assign({},e)))},t.prototype.getImageURI=function(){switch(this.props.reminderIndex){case h.DAY_5:return g.Experiment(this.props.ncctVariant).variantIn("V1","V2","V3")?c.static_url("/static/images/ncct/treasure_chest-vflvblhlo.png"):c.static_url("/static/images/ncct/modal_1-vflIURq-_.png");case h.DAY_26:return g.Experiment(this.props.ncctVariant).variantIn("V1","V2","V3")?c.static_url("/static/images/ncct/toothpaste_sad-vflrqXJen.png"):c.static_url("/static/images/ncct/modal_2-vfl2dFHNp.png");case h.DAY_28:return g.Experiment(this.props.ncctVariant).variantIn("V1","V2","V3")?c.static_url("/static/images/ncct/calendar_sad-vflZQicR5.png"):c.static_url("/static/images/ncct/modal_3-vflVkGLUt.png");default:return _.reportStack("Unrecognized reminder index for modal: "+this.props.reminderIndex),""}},t.prototype.getHiResImageURI=function(){switch(this.props.reminderIndex){case h.DAY_5:return c.static_url("/static/images/ncct/modal_1@2x-vflreOfP8.png");case h.DAY_26:return c.static_url("/static/images/ncct/modal_2@2x-vflivhtZC.png");case h.DAY_28:return c.static_url("/static/images/ncct/modal_3@2x-vflRrQCwJ.png");default:return _.reportStack("Unrecognized reminder index for modal: "+this.props.reminderIndex),""}},t.prototype.getTitle=function(){if(g.Experiment(this.props.ncctVariant).variantIn("V4","V5","V6","V7","V8","V9","V10","V11","V12","V13"))switch(this.props.reminderIndex){case h.DAY_3:case h.DAY_3_14:return p._("Enjoying your free trial?");case h.DAY_7:case h.DAY_6:return p._("Your team will lose %(trademark_business)s on %(trial_end)s").format({trademark_business:u.TRADEMARK_BUSINESS,trial_end:this.props.trialEndDate});case h.DAY_26:case h.DAY_9:return p._("Your %(trademark_business)s trial is almost over.").format({trademark_business:u.TRADEMARK_BUSINESS});case h.DAY_28:case h.DAY_12:return p._("Your plan is set to downgrade on %(trial_end)s").format({trial_end:this.props.trialEndDate});default:return _.reportStack("Unrecognized reminder index for modal: "+this.props.reminderIndex),""}switch(this.props.reminderIndex){case h.DAY_5:return p._("Enjoying your %(trademark_business)s trial?").format({trademark_business:u.TRADEMARK_BUSINESS});case h.DAY_26:return p._("Your %(trademark_business)s trial is almost over").format({trademark_business:u.TRADEMARK_BUSINESS});case h.DAY_28:return 0===this.props.daysLeft?p._("Your trial ends today"):p.ungettext("Only %(days_left)s day left","Only %(days_left)s days left",this.props.daysLeft).format({days_left:this.props.daysLeft});default:return _.reportStack("Unrecognized reminder index for modal: "+this.props.reminderIndex),""}},t.prototype.getRemainingCopy=function(){return p._("left in your free trial",{comment:"This appears after a number of days. e.g. '22 (new line) days (new line) left in your free trial'"})},t.prototype.getBody=function(){var e=this.props,t=e.trialDays,a=e.trialEndDate,r=e.reminderIndex,o=e.ncctVariant,s=e.subStateContent,l=i.SubStateContentClient.deserialize(s),d=g.Experiment(o).variantIn("V3","V4","V5","V6","V7","V8","V9","V10","V11","V12","V13");switch(r){case h.DAY_3:case h.DAY_3_14:return p._("If you want to keep using %(trademark_business)s, why not add your billing information now and get it out of the way?").format({trademark_business:u.TRADEMARK_BUSINESS});case h.DAY_5:return d?p._("If you want to keep using it, why not add your billing information now and get it out of the way? It won’t interrupt your free trial period, and you’ll transition seamlessly at the end of %(trial_days)s days.").format({trial_days:t}):p._("If you want to continue using it, why not add your billing information now and get it out of the way? It won’t interrupt your free trial period, and you’ll transition seamlessly at the end of %(trial_days)s days.").format({trial_days:t});case h.DAY_7:case h.DAY_6:return p._("Add your billing information now to keep using %(trademark_business)s after your trial has ended.").format({trademark_business:u.TRADEMARK_BUSINESS});case h.DAY_26:case h.DAY_9:return l.hasUnlimitedSpace()?g.Experiment(o).variantIn("V4","V5","V6","V7","V8","V9","V10","V11","V12","V13")?p._("Your account will be downgraded, and your team will lose the additional space it’s been using, file recovery, and advanced features like Smart Sync."):d?p.intl.formatMessage(p._("Your trial will end in four days. Your account will be downgraded, and your team will lose the additional space it’s been using, file recovery, and advanced features like Smart Sync.%(br)s%(br)sAdd your billing info now so your plan will transition without interruption on %(trial_end)s."),{br:n.default.createElement("br",null),trial_end:a}):p._("At the end of your trial you will be downgraded to a free team plan. Your team will lose out on the additional space it’s been using, file recovery, and advanced features like Smart Sync. If you choose to purchase now, it won’t interrupt your free trial period and your plan will transition without interruption at the end of %(trial_days)s."):g.Experiment(o).variantIn("V4","V5","V6","V7","V8","V9","V10","V11","V12","V13")?p._("Your account will be downgraded, and your team will lose out on %(space)s of space, file recovery, and advanced features like Smart Sync.").format({space:l.totalSpaceShortFormTb()}):d?p.intl.formatMessage(p._("Your trial will end in four days. Your account will be downgraded, and your team will lose out on %(space)s of space, file recovery, and advanced features like Smart Sync.%(br)s%(br)sAdd your billing info now so your plan will transition without interruption on %(trial_end)s."),{space:l.totalSpaceShortFormTb(),br:n.default.createElement("br",null),trial_end:a}):p._("At the end of your trial you will be downgraded to a free team plan. Your team will lose out on %(space)s of space, file recovery, and advanced features like Smart Sync. If you choose to purchase now, it won’t interrupt your free trial period and your plan will transition without interruption at the end of %(trial_days)s days.").format({space:l.totalSpaceShortFormTb(),trial_days:t});case h.DAY_28:case h.DAY_12:return l.hasUnlimitedSpace()?g.Experiment(o).variantIn("V4","V5","V6","V7","V8","V9","V10","V11","V12","V13")?p._("If you downgrade, your team will lose the additional space it’s been using, and your active team members will return to their initial space quota."):d?p.intl.formatMessage(p._("Your trial will end on %(trial_end)s. If you downgrade, your team will lose the additional space it’s been using, and your active team members will return to their initial space quota.%(br)s%(br)sIf you want to keep using %(trademark_business)s, it only takes a few minutes to add your billing information."),{br:n.default.createElement("br",null),trial_end:a,trademark_business:u.TRADEMARK_BUSINESS}):p._("Your plan is set to downgrade %(trial_end)s. If you downgrade, your team will lose the additional space it’s been using and your active team members will return to their initial space quota. If you want to keep using %(trademark_business)s, it only takes a few moments to add your billing information.").format({trial_end:a,trademark_business:u.TRADEMARK_BUSINESS}):g.Experiment(o).variantIn("V4","V5","V6","V7","V8","V9","V10","V11","V12","V13")?p._("If you downgrade, your team will lose out on %(space)s of space, and your active team members will return to their initial space quota.").format({space:l.totalSpaceShortFormTb()}):d?p.intl.formatMessage(p._("Your trial will end on %(trial_end)s. If you downgrade, your team will lose out on %(space)s of space, and your active team members will return to their initial space quota.%(br)s%(br)sIf you want to keep using %(trademark_business)s, it only takes a few minutes to add your billing information."),{space:l.totalSpaceShortFormTb(),br:n.default.createElement("br",null),trial_end:a,trademark_business:u.TRADEMARK_BUSINESS}):p._("Your plan is set to downgrade %(trial_end)s. If you downgrade, your team will lose %(space)s of space and your active team members will return to their initial space quota. If you want to keep using %(trademark_business)s, it only takes a few moments to add your billing information.").format({space:l.totalSpaceShortFormTb(),trial_end:a,trademark_business:u.TRADEMARK_BUSINESS})}},t.prototype.getFooter=function(){var e=this.props,t=e.trialDays,a=e.trialEndDate,r=e.reminderIndex;switch(r){case h.DAY_3:case h.DAY_3_14:return p._("It won’t interrupt your free trial period, and you’ll transition seamlessly at the end of %(trial_days)s days.").format({trial_days:t});case h.DAY_7:case h.DAY_6:return p._("Your free trial period won’t be affected, and we won’t charge you until after your free trial ends.");case h.DAY_26:case h.DAY_9:return p._("Add your billing info now so your plan upgrades without interruption on %(trial_end)s.").format({trial_end:a});case h.DAY_28:case h.DAY_12:return p._("If you want to keep %(trademark_business)s, it only takes a few minutes to add your billing information.").format({trademark_business:u.TRADEMARK_BUSINESS});default:return _.reportStack("Unrecognized reminder index for modal: "+r),""}},t.prototype.render=function(){return g.Experiment(this.props.ncctVariant).variantIn("V4","V5","V6","V7","V8","V9","V10","V11","V12","V13")?this.renderV4():this.renderOriginal()},t.prototype.renderV4=function(){return n.default.createElement(d.Modal,{className:"ncct_reminder_modal_v4",showX:!1,style:"clean",buttonComponent:n.default.createElement("div",{className:"ncct_reminder_modal_v4__footer"},n.default.createElement("div",{className:"ncct_reminder_modal_v4__footer-copy"},this.getFooter()),n.default.createElement("div",{className:"ncct_reminder_modal_v4__buttons"},n.default.createElement(o.Button,{className:"ncct_reminder_modal_v4__dismiss-btn",importance:"tertiary",onClick:this.onDismiss},p._("Dismiss")),n.default.createElement(o.Button,{className:"ncct_reminder_modal_v4__accept-btn",onClick:this.onAccept},p._("Add billing info"))))},n.default.createElement("div",{className:"ncct_reminder_modal_v4__content"},n.default.createElement("div",{className:"ncct_reminder_modal_v4__calendar"},n.default.createElement(w.CountdownCalendar,{daysLeft:this.props.daysLeft,subTextCopy:this.getRemainingCopy()})),n.default.createElement("div",{className:"ncct_reminder_modal_v4__copy"},n.default.createElement("h1",{className:"ncct_reminder_modal_v4__title"},this.getTitle()),n.default.createElement("p",{className:"ncct_reminder_modal_v4__body"},this.getBody()))))},t.prototype.renderOriginal=function(){var e=p._("Purchase now"),t=[n.default.createElement("br",null),n.default.createElement("a",{href:"#",onClick:this.onDismiss},p._("No thanks"))];return g.Experiment(this.props.ncctVariant).variantIn("V3","V4","V5","V6","V7","V8","V9","V10","V11","V12","V13")&&(e=p._("Add billing info"),t=void 0),n.default.createElement(d.Modal,{className:"ncct_reminder_modal",style:"clean",buttonComponent:n.default.createElement(d.ModalButtons,{className:"oq-modal__buttons "},n.default.createElement(o.Button,{onClick:this.onAccept},e),t)},n.default.createElement(l.Image,{className:"image--"+this.props.reminderIndex,src:this.getImageURI(),srcHiRes:this.getHiResImageURI(),alt:p._("reminder graphic")}),n.default.createElement("h1",null,this.getTitle()),n.default.createElement("p",null,this.getBody()))},t.NcctReminderModal=s.requireCssWithComponent(t,["/static/css/ncct/reminder_modal-vflFNlJt6.css"]),t})(n.default.Component);t.NcctReminderModalView=V}));
//# sourceMappingURL=reminder_modal.min.js-vflsEHjp6.map