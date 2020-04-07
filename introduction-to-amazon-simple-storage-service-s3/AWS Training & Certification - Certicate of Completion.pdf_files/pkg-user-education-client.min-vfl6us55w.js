define("modules/clean/user_education/react/user_education_effect",["require","exports","tslib","react","modules/clean/user_education/user_education_interface","modules/clean/user_education/user_education_client"],(function(e,t,n,i,o,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i=n.__importDefault(i);var r=function(e,t){var n=this;this.start=function(){n.isRunning=!0;var e,t=n.thunk,i=n.fps,o=-1,a=1e3/i,r=function(e,t){var n=Date.now(),i=n-(t||0);return i>a&&(e(),t=n-i%a),o=requestAnimationFrame((function(){return r(e,t)}))};e=requestAnimationFrame((function(){return r(t)})),n.cleanup=function(){cancelAnimationFrame(e),cancelAnimationFrame(o)}},this.stop=function(){n.isRunning=!1,n.cleanup()},this.thunk=e,this.fps=t,this.cleanup=function(){},this.isRunning=!1};t.RenderAtFps=r;var s={bottom:0,height:0,left:0,right:0,top:-1e3,width:0},c=(function(e){function t(t){var n=e.call(this,t)||this;return n.isActive=!1,n.container=i.default.createRef(),n}return n.__extends(t,e),t.prototype.activateElementObserver=function(){this.isActive=!0,this.updateRect(!0),this.startRectUpdateLoop()},t.prototype.deactivateElementObserver=function(){this.stopRectUpdateLoop(),this.isActive=!1,this.activeRect=s},t.prototype.componentDidMount=function(){a.UEClient.on(o.UEEffectChannel,this.handleUpdate,this),a.UEClient.send(o.UEEffectChannel,{type:o.UEEffectEventType.EffectReady,containerName:this.props.containerName,elementName:this.props.name}),a.UEClient.sendEvent(this.props.containerName,this.props.name+".componentDidMount",{})},t.prototype.componentDidUpdate=function(){this.updateRect(!0)},t.prototype.shouldUpdateActiveRect=function(e){return!this.activeRect||!(this.activeRect.top===e.top&&this.activeRect.bottom===e.bottom&&this.activeRect.left===e.left&&this.activeRect.right===e.right&&this.activeRect.width===e.width&&this.activeRect.height===e.height)},t.prototype.updateRect=function(e){if(this.isActive&&this.container&&this.container.current instanceof Element){var t=this.container.current.getBoundingClientRect();t&&(e||this.shouldUpdateActiveRect(t))&&(this.activeRect=t,this.notifyRectUpdate())}},t.prototype.notifyRectUpdate=function(){this.isActive&&a.UEClient.send(o.UEEffectChannel,{type:o.UEEffectEventType.UpdateRect,containerName:this.props.containerName,elementName:this.props.name,rect:this.activeRect})},t.prototype.componentWillUnmount=function(){this.isActive&&(this.activeRect=n.__assign({},s),this.notifyRectUpdate(),this.deactivateElementObserver()),a.UEClient.removeListener(o.UEEffectChannel,this.handleUpdate,this)},t.prototype.startRectUpdateLoop=function(){this.sizeObserver||(this.sizeObserver=new r(this.updateRect.bind(this),t.RectUpdateFrequencyPerSec)),this.sizeObserver.isRunning||this.sizeObserver.start()},t.prototype.stopRectUpdateLoop=function(){this.sizeObserver&&this.sizeObserver.stop()},t.prototype.handleUpdate=function(e){e.containerName===this.props.containerName&&e.elementName===this.props.name&&(e.type===o.UEEffectEventType.Activate?this.activateElementObserver():e.type===o.UEEffectEventType.Deactivate&&this.deactivateElementObserver())},t.prototype.render=function(){var e="ue-effect-container uee-"+this.props.containerName+"-"+this.props.name;return this.props.useSpan?i.default.createElement("span",{ref:this.container,className:e},this.props.children):i.default.createElement("div",{ref:this.container,className:e},this.props.children)},t.displayName="UserEducationEffect",t.RectUpdateFrequencyPerSec=15,t})(i.default.Component);t.UserEducationEffect=c})),define("modules/clean/user_education/user_education_client",["require","exports","tslib","eventemitter3","modules/clean/user_education/user_education_interface"],(function(e,t,n,i,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i=n.__importDefault(i),window.ensemble&&!window.ensemble.eventEmitter&&(window.ensemble.eventEmitter=new i.default);var a=window.ensemble&&window.ensemble.eventEmitter?window.ensemble.eventEmitter:new i.default,r=(function(){function e(){this.controllerReady=!1,this.eventQueue=[],this.stepCallback={},this.globalCallbacks=[],this.on(o.UEStateChannel,this.handleUpdate,this)}return e.prototype.init=function(){this._sendEvent({containerName:"UEClient",name:o.UEEventName.Subscribe,data:{}})},e.prototype.on=function(e,t,n){a.on(e,t,n)},e.prototype.removeListener=function(e,t,n){a.removeListener(e,t,n)},e.prototype.send=function(e,t){this._isUserEducationDisabled()||a.emit(e,t)},e.prototype.sendEvent=function(e,t,n){if(void 0===n&&(n={}),!this._isUserEducationDisabled()){var i={containerName:e,name:t,data:n};this.controllerReady?this._sendEvent(i):this.eventQueue.push(i)}},e.prototype._sendEvent=function(e){var t=this;this._isUserEducationDisabled()||(this._shouldSendEventAsynchronously()?setTimeout((function(){return t.send(o.UEEventChannel,e)}),0):this.send(o.UEEventChannel,e))},e.prototype._isUserEducationDisabled=function(){return!window.ensemble},e.prototype._shouldSendEventAsynchronously=function(){return!0},e.prototype._registerCallbackForEducationStep=function(e,t,n){var i=this._getKeyForStepCallback(e,t);this.stepCallback[i]||(this.stepCallback[i]=[]),this.stepCallback[i].push(n)},e.prototype.registerCallbackForEducationStep=function(e,t,n){this._registerCallbackForEducationStep(e,t,n),this.sendEvent("UEClientCallback",o.UEEventName.Subscribe)},e.prototype.registerBulkCallbackForEducationStep=function(e,t){var n=this;e.forEach((function(e){n._registerCallbackForEducationStep(e.moduleName,e.stepName,t)})),this.sendEvent("UEClientCallback",o.UEEventName.Subscribe)},e.prototype.registerForAllEducationSteps=function(e){this.globalCallbacks.push(e),this.sendEvent("UEClientCallback",o.UEEventName.Subscribe)},e.prototype.unregisterCallbackForEducationStep=function(e,t,n){this.unregisterBulkCallbackForEducationStep([{moduleName:e,stepName:t}],n)},e.prototype.unregisterBulkCallbackForEducationStep=function(e,t){var n=this;e.forEach((function(e){var i=n._getKeyForStepCallback(e.moduleName,e.stepName);n.stepCallback[i]&&(-1!==n.stepCallback[i].indexOf(t)&&(n.stepCallback[i].splice(n.stepCallback[i].indexOf(t),1),0===n.stepCallback[i].length&&delete n.stepCallback[i]))}))},e.prototype.unregisterForAllEducationSteps=function(e){var t=this.globalCallbacks.indexOf(e);-1!==t&&this.globalCallbacks.splice(t,1)},e.prototype._getKeyForStepCallback=function(e,t){return e+"."+t},e.prototype.handleUpdate=function(e){if(e.state!==o.UEStateType.Ready||this.controllerReady){if(e.state===o.UEStateType.ShowStep&&e.step&&e.step.name){var t=this._getKeyForStepCallback(e.moduleName,e.step.name);if(this.stepCallback[t]){for(var n=0,i=this.stepCallback[t];n<i.length;n++){(0,i[n])()}delete this.stepCallback[t]}for(var a=0,r=this.globalCallbacks;a<r.length;a++){(0,r[a])(e)}}}else for(this.controllerReady=!0;this.eventQueue.length>0;){var s=this.eventQueue.shift();s&&this._sendEvent(s)}},e.prototype.sendError=function(e){this.send(o.UEErrorChannel,e)},e})();t.UserEducationClient=r,t.UEClient=new r,t.UEClient.init()})),define("modules/clean/user_education/user_education_interface",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UEEventChannel="UE.event",t.UEStateChannel="UE.state",t.UEEffectChannel="UE.effect",t.UEErrorChannel="UE.error",t.UEEventName={Subscribe:"Subscribe",NextClicked:"nextClicked",ExitOnboarding:"exitOnboarding",EffectResponded:"effectResponded",OverlayClicked:"overlayClicked"},(function(e){e.Ready="Ready",e.ShowStep="ShowStep",e.Finished="Finished"})(t.UEStateType||(t.UEStateType={})),(function(e){e.Activate="Activate",e.Deactivate="Deactivate",e.EffectReady="EffectReady",e.UpdateRect="UpdateRect"})(t.UEEffectEventType||(t.UEEffectEventType={})),(function(e){e.EFFECT_TARGET_NOT_FOUND="effect_target_not_found",e.REDIRECT_FAILED="redirect_failed"})(t.UEErrorType||(t.UEErrorType={})),(function(e){e[e.Spotlight=0]="Spotlight",e[e.Pulsar=1]="Pulsar",e[e.ToolTip=2]="ToolTip",e[e.Modal=3]="Modal"})(t.UEEffectType||(t.UEEffectType={})),(function(e){e[e.Small=1]="Small",e[e.Medium=2]="Medium",e[e.Large=3]="Large",e[e.XLarge=4]="XLarge"})(t.UESpotlightSize||(t.UESpotlightSize={})),t.UEPulsarSize=24,(function(e){e[e.Center=1]="Center",e[e.LeftCenter=2]="LeftCenter",e[e.RightCenter=3]="RightCenter"})(t.UEEffectPosition||(t.UEEffectPosition={})),(function(e){e[e.TopLeft=1]="TopLeft",e[e.TopRight=2]="TopRight",e[e.BottomLeft=3]="BottomLeft",e[e.BottomRight=4]="BottomRight"})(t.UEToolTipPointerPosition||(t.UEToolTipPointerPosition={}))})),define("modules/clean/navigation",["require","exports","modules/core/browser"],(function(e,t,n){"use strict";var i;function o(e){return e.metaKey||e.ctrlKey}Object.defineProperty(t,"__esModule",{value:!0}),(function(e){e[e.REDIRECT=1]="REDIRECT",e[e.NEW_TAB=2]="NEW_TAB",e[e.UNSAFE_NEW_TAB=3]="UNSAFE_NEW_TAB"})(i=t.NavigationMethod||(t.NavigationMethod={})),t.isMetaKeyPressed=o,t.getNavigationMethod=function(e){return o(e)?i.NEW_TAB:i.REDIRECT},t.logAndNavigate=function(e,t,o){switch(void 0===o&&(o=i.NEW_TAB),o){case i.REDIRECT:return void(t?t().then((function(){return n.redirect(e)})):n.redirect(e));case i.NEW_TAB:n.open_tab(e);break;case i.UNSAFE_NEW_TAB:n.unsafe_open_tab(e)}t&&t()};var a=(function(){function e(){this.specificHandlers={},this.genericHandlers=[]}return e.prototype.dispatch=function(e){for(var t=0,n=(this.specificHandlers[e.id]||[]).concat(this.genericHandlers);t<n.length;t++){if((0,n[t])(e))return!0}return!1},e.prototype.handle=function(e,t){var n=this;if(t&&t.actionId){var i=this.specificHandlers[t.actionId]||(this.specificHandlers[t.actionId]=[]),o=i.push(e);return function(){i.splice(o-1,1)}}var a=this.genericHandlers.push(e);return function(){n.genericHandlers.splice(a-1,1)}},e})();t.NavigationActionDispatcher=a,t.navigationActionDispatcher=new a}));
//# sourceMappingURL=pkg-user-education-client.min.js-vfl7zBOZu.map