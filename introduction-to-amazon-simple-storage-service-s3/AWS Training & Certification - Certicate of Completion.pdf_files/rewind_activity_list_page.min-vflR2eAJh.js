define(["require","exports","tslib","react","modules/core/i18n","modules/clean/react/delorean/data/types","modules/clean/react/delorean/components/folder_history/folder_history","modules/clean/react/delorean/data/actions","modules/clean/react/delorean/components/rewind_step_header","modules/clean/react/delorean/components/rewind_continue_widget","modules/clean/react/trash/constants","modules/clean/react/delorean/logging","modules/clean/react/delorean/constants","modules/clean/react/delorean/util"],(function(e,t,s,o,n,r,i,a,p,d,c,l,u,v){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o=s.__importDefault(o),l=s.__importStar(l);var h=(function(e){function t(t){var o=e.call(this,t)||this;return o.initialEventTimestamp=null,o.startLoadTsInMs=null,o.loadPageOfEvents=function(){var e=o.props,t=e.user,n=e.restoreId,i=e.events;o.setState((function(e){var a=e.pagesLoaded+1;if(2===a&&(l.loadEvents({user:t,restoreId:n,startLoadTsInMs:o.startLoadTsInMs,events:i}),o.props.events.type===r.RewindEventState.hasContent))for(var p=0,d=o.props.events.processedEvents;p<d.length;p++){var c=d[p];if(c.type===r.DeloreanEventType.event){o.initialEventTimestamp=c.timestamp;break}}return s.__assign(s.__assign({},e),{pagesLoaded:a})}))},o.onGoBack=function(){var e=o.props,t=e.user,s=e.restoreId;l.clickEventsBack({user:t,restoreId:s}),o.props.dispatch({type:r.DeloreanActionType.goBackFromActivityListPage})},o.showMoreFuture=function(e){var t=Date.now();o.props.dispatch(a.showMoreAction({user:o.props.user,fqpath:o.props.browseContext.currentFQPath,futureCursor:e,direction:r.PaginationDirection.future,done:function(e){var s=o.props,n=s.user,r=s.restoreId;l.clickEventsLoadNew({user:n,restoreId:r,startTsInMs:t,count:e})}}))},o.showMorePast=function(e){var t=Date.now();o.props.dispatch(a.showMoreAction({user:o.props.user,fqpath:o.props.browseContext.currentFQPath,pastCursor:e,direction:r.PaginationDirection.past,done:function(e){var s=o.props,n=s.user,r=s.restoreId;l.clickEventsLoadNew({user:n,restoreId:r,startTsInMs:t,count:e})}}))},o.selectEventForRewind=function(e){o.setState({eventAboveDivider:e.topEvent})},o.onContinue=function(){o.state.eventAboveDivider&&(o.logContinue(o.state.eventAboveDivider),o.props.dispatch({type:r.DeloreanActionType.changeRewindPageToConfirmationPage,eventAboveDivider:o.state.eventAboveDivider}))},o.logContinue=function(e){if(o.props.events.type===r.RewindEventState.hasContent){var t=o.initialEventTimestamp,s=o.props,n=s.user,i=s.restoreId,a=o.props.events.processedEvents;l.clickEventsNext({selectedEvent:e,events:a,restoreId:i,initialEventTimestamp:t,user:n})}},o.state={pagesLoaded:0,eventAboveDivider:void 0},o}return s.__extends(t,e),t.prototype.componentDidMount=function(){this.startLoadTsInMs=Date.now(),this.props.dispatch({type:r.DeloreanActionType.clearEventList});var e=Math.floor((this.props.selectedDateTsInMs+c.ONE_DAY_MS)/1e3);this.props.dispatch(a.fetchEventsAction({user:this.props.user,fqpath:this.props.fqpath,onlyRewindableEvents:this.props.isForRewindFlow,direction:r.PaginationDirection.past,timestampInSeconds:e,done:this.loadPageOfEvents})),this.props.dispatch(a.fetchEventsAction({user:this.props.user,fqpath:this.props.fqpath,direction:r.PaginationDirection.future,onlyRewindableEvents:this.props.isForRewindFlow,timestampInSeconds:e,done:this.loadPageOfEvents}))},t.prototype.render=function(){return o.default.createElement("div",{className:"folder-history-ie11fix"},o.default.createElement("div",{className:"folder-history-event-list-container"},this.props.isForRewindFlow&&o.default.createElement(p.RewindStepHeader,{currentStep:2,maxStep:u.NUM_REWIND_STEPS,instructions:n._("Fine tune",{project:"folder-history"}),onGoBack:this.onGoBack}),o.default.createElement(i.FolderHistory,{selectedDateTsInMs:this.props.selectedDateTsInMs,dispatch:this.props.dispatch,events:this.props.events,isForARewind:this.props.isForRewindFlow,onShowMoreFuture:this.showMoreFuture,onShowMorePast:this.showMorePast,onClickEvent:this.props.isForRewindFlow?this.selectEventForRewind:v.noop,pagesLoaded:this.state.pagesLoaded}),o.default.createElement(d.RewindContinueWidget,{onContinue:this.onContinue,visible:!!this.state.eventAboveDivider,text:n._("Now, let’s review",{project:"folder-history",comment:"Try to keep this as short as possible"})})))},t})(o.default.Component);t.RewindActivityListPage=h}));
//# sourceMappingURL=rewind_activity_list_page.min.js-vflAcuhJG.map