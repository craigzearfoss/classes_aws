define(["require","exports","tslib","react","modules/core/browser","modules/core/i18n","modules/clean/react/delorean/data/api","modules/clean/react/image","modules/clean/static_urls","modules/clean/react/delorean/data/types","modules/clean/react/delorean/constants","modules/clean/react/snackbar","modules/clean/react/delorean/logging","modules/clean/react/delorean/util"],(function(e,t,o,r,a,n,s,i,l,c,d,p,u,m){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r=o.__importDefault(r),a=o.__importStar(a),s=o.__importStar(s),u=o.__importStar(u);var f=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.clickContactSupport=function(){a.open_tab("https://www.dropbox.com/support")},t.navigateToHelp=function(e){var o=t.props,r=o.user,n=o.restoreId;u.clickHelp({user:r,restoreId:n,helpStep:e}),a.unsafe_open_tab("https://help.dropbox.com/security/rewind#after")},t.goToHelpProgressPage=function(){t.navigateToHelp(u.DeloreanPage.progress)},t.goToHelpCompletionPage=function(){t.navigateToHelp(u.DeloreanPage.completion)},t}return o.__extends(t,e),t.prototype.showSuccess=function(e){var t=this.props,o=t.user,r=t.restoreId;this.props.dispatch({type:c.DeloreanActionType.setRewindComplete}),u.loadCompletionSuccess({user:o,restoreId:r,startTs:e})},t.prototype.showFailure=function(e){var t=this.props,o=t.user,a=t.restoreId;u.loadCompletionFailure({user:o,restoreId:a,startTs:e}),p.Snackbar.show(r.default.createElement(p.Snackbar,{closeButtonText:n._("Close"),actionButtonText:n._("Contact us"),onActionClick:this.clickContactSupport,title:n._("Couldn’t rewind this folder. Try again or let us help",{project:"folder-history"}),variant:"fail"})),this.props.closePanel({closedByClick:!1})},t.prototype.componentDidMount=function(){var e=this,t=this.props,r=t.user,a=t.restoreId,n=Date.now();this.props.dispatch({type:c.DeloreanActionType.setRewindInProgress}),u.loadProgress({user:r,restoreId:a});var i=setInterval((function(){return o.__awaiter(e,void 0,void 0,(function(){var e;return o.__generator(this,(function(t){switch(t.label){case 0:return[4,s.getRewindStatus({id:this.props.page.rewindId,user:this.props.user})];case 1:return"successful"===(e=t.sent()).status[".tag"]&&(clearInterval(i),this.showSuccess(n)),"failed"===e.status[".tag"]&&(clearInterval(i),this.showFailure(n)),[2]}}))}))}),d.LOADING_PAGE_POLLING_LENGTH_MS)},t.prototype.render=function(){return this.props.rewindState===c.RewindState.Done?r.default.createElement(h,{page:this.props.page,goToHelpCompletionPage:this.goToHelpCompletionPage}):this.props.rewindState===c.RewindState.InProgress?r.default.createElement(g,{page:this.props.page,goToHelpProgressPage:this.goToHelpProgressPage,folderName:this.props.folderName}):m.assertNever(this.props.rewindState)},t})(r.default.Component);t.RewindStarted=f;var g=function(e){return r.default.createElement("div",{className:"rewind-text"},r.default.createElement(i.Image,{className:"rewind-loading-img",src:l.static_url("/static/images/dbx_cloud_doc_loading-vfl9ZK2NS.gif"),alt:""}),r.default.createElement("div",{className:"rewind-confirmation-header"},n._("Rewinding to an earlier time…",{project:"folder-history",comment:"please use the ellipses rather than 3 dots for accessibility reasons"}).format({folder_name:e.folderName})),r.default.createElement("div",{className:"rewind-confirmation-text"},r.default.createElement("div",null,n._("Everything will soon be like it was before %(date)s at %(time)s. Don’t make any changes here until it’s done.",{project:"folder-history",comment:'date in format "Mon, Mar 18" and time in format "8:05 PM"'}).format({date:e.page.selectedEvent.formattedDate,time:e.page.selectedEvent.timeAgo})),r.default.createElement("a",{href:"#",onClick:e.goToHelpProgressPage},n._("What to do after rewinding",{project:"folder-history"}))))},h=function(e){return r.default.createElement("div",{className:"rewind-text"},r.default.createElement(i.Image,{className:"rewind-finished-img",src:l.static_url("/static/images/delorean/illo-rewind-complete@1x-vflVS_j1t.png"),alt:""}),r.default.createElement("div",{className:"rewind-confirmation-header"},n._("Welcome back to %(date)s at %(time)s",{project:"folder-history",comment:'date in format "Mon, Mar 18" and time in format "8:05 PM"'}).format({date:e.page.selectedEvent.formattedDate,time:e.page.selectedEvent.timeAgo})),r.default.createElement("div",{className:"rewind-confirmation-text"},n.intl.formatMessage(n._("You can use dropbox.com now, but wait for your devices to finish syncing. If anything doesn’t look like you expected, <options>learn more about your options</options>"),{div:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return r.default.createElement("div",null,e)},options:function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return r.default.createElement("a",{href:"#",onClick:e.goToHelpCompletionPage},t)}})))}}));
//# sourceMappingURL=rewind_started.min.js-vflFoSt6p.map