define(["require","exports","tslib","react","react-redux","modules/clean/react/file_sidebar/managed_comments_tab","modules/clean/react/comments2/data/actions","modules/clean/react/comments2/components/comments_more_option_manager","modules/clean/react/file_viewer_sidebar/utils/ensure_comments"],(function(e,t,n,o,r,s,a,c,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var m=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.clearContext=function(){t.props.dispatch(a.Actions.setFileContext())},t.setContext=function(e){t.props.dispatch(a.Actions.setFileContext({stream:s.streamFromProps(e),viewer:e.user}))},t}return n.__extends(t,e),t.prototype.componentDidMount=function(){this.setContext(this.props)},t.prototype.componentWillUnmount=function(){this.clearContext()},t.prototype.componentWillUpdate=function(e){this.setContext(e)},t.prototype.render=function(){return o.default.createElement(c.CommentsMoreOptionManager,null)},t})((o=n.__importDefault(o)).default.PureComponent);t.UnconnectedCommentingDataManager=m,t.CommentingDataManager=i.ensureComments(r.connect()(m))}));
//# sourceMappingURL=commenting_data_manager.min.js-vflwfuBAa.map