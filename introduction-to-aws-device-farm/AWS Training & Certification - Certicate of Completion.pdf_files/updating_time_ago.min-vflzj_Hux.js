define(["require","exports","tslib","react","modules/clean/datetime"],(function(t,e,n,o,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),o=n.__importDefault(o),r=n.__importStar(r);var a=void 0,i=[];function u(){for(var t=new Date,e=0,n=i;e<n.length;e++){(0,n[e])(t)}}var p=(function(t){function e(e){var n=t.call(this,e)||this;return n.updateTimestamp=function(t){n.setState({now:t})},n.state={now:new Date},n}return n.__extends(e,t),e.prototype.componentDidMount=function(){var t;t=this.updateTimestamp,i.push(t),void 0===a&&(a=setInterval(u,6e4))},e.prototype.componentWillUnmount=function(){var t;t=this.updateTimestamp,0===(i=i.filter((function(e){return e!==t}))).length&&void 0!==a&&(clearInterval(a),a=void 0)},e.prototype.render=function(){var t=r.agoFromDate(this.props.timestamp,this.state.now,!0,!0);return o.default.createElement("span",null,t)},e})(o.default.PureComponent);e.UpdatingTimeAgo=p}));
//# sourceMappingURL=updating_time_ago.min.js-vfl9DJ-oC.map