define(["require","exports","tslib","immutable","external/lodash","modules/clean/logging/hive/schemas/web-modal-activity","modules/clean/react/async_fileops_modals","modules/clean/react/browse/actions","modules/clean/react/browse/action_logger","modules/clean/react/browse/data/action_creators","modules/clean/react/browse/data/selectors","modules/clean/react/browse/data/store","modules/clean/react/browse/logger_util","modules/clean/react/fileops_actions","modules/clean/react/folder_dialog/api","modules/clean/react/folder_dialog/constants","modules/clean/react/selection","modules/clean/search/single_page/data/action_creators","modules/clean/search/single_page/data/store","modules/clean/web_user_action_events","modules/core/i18n","modules/clean/react/async_overquota_modal_controller","modules/clean/react/browse/file_actions/file_action_helpers"],(function(e,t,o,s,r,n,a,l,i,c,d,u,_,m,p,g,f,v,h,S,F,w,b){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),s=o.__importStar(s),r=o.__importStar(r),a=o.__importStar(a),i=o.__importStar(i),d=o.__importStar(d),_=o.__importStar(_),m=o.__importStar(m),w=o.__importStar(w);function O(){w.showOverquota("wb_oq_mv_cp")}t.getMoveItem=function(e,t){var w,M=t.isOverFreeQuota,y=t.hasExcludedNsIds,q=t.moveItemDisabled,A=M&&!y?O:(w=e,function(){var e=w.user,t=w.context,F=w.files,O=w.firstFile,M=w.source,y=w.isSearchMode,q=w.viewType,A=w.useSearchSuccessBanner,E=w.expBrowseSuccessBanner,P=w.expListSubfoldersWithOdyssey,N=F.toArray();b.logUserEventOnFile({result:O,args:w,action_type:S.WebUserActionLogEvent.OPEN_MOVE_MODAL}),b.showRetrievalSuccessBanner(A,y,E,S.WebUserActionLogEvent.OPEN_MOVE_MODAL);var B={user:e,files:N,path:y?void 0:t.currentFQPath,onSuccess:function(t,o){if(y&&o)(r=h.getStoreForSearch()).dispatch(v.updateResults({results:o})),r.dispatch(v.setSelection({selection:new f.Selection({selected:s.OrderedSet(o.map((function(e){return e.fq_path}))),anchor:null}),skipLogging:!0}));else if(o){var r=u.getStoreForBrowse(),n=d.unsortedFiles(r.getState());o.forEach((function(e){var t=n.find((function(t){return t.file_id===e.file_id}));t&&(n=n.remove(t.fq_path))})),r.dispatch(c.setUnsortedFiles({unsortedFiles:n}))}var a=_.countFilesAndFolders(F),l=a.num_files_selected,m=a.num_folders_selected;i.logMoveFiles({uid:e.id,source:M,view_type:q,result:O,num_files_selected:l,num_folders_selected:m})},onRequestNotSent:function(){l.browseActions.selectFilesByFqPath({fqPathsToSelect:N.map((function(e){return e.fq_path}))})},onUndo:function(e){if(y&&e){var t=h.getStoreForSearch();t.dispatch(v.updateResults({results:N})),t.dispatch(v.setSelection({selection:new f.Selection({selected:s.OrderedSet(N.map((function(e){return e.fq_path}))),anchor:null}),skipLogging:!0}))}l.browseActions.selectRowsFromBoltClient(N)}},L=P?p.getFolderContentsAPIv2:p.getFolderContents;a.showMoveDialog({operation:g.Operation.MOVE,modalName:n.ModalName.MOVE,user:e,apiClient:{moveToFolder:function(e){var t=o.__assign(o.__assign({},B),{newPath:e,checkFSWs:!0,useApiV2:!0});return m.moveFiles(t),Promise.resolve()},getFolderContents:L,getFolderSuggestion:p.getFolderSuggestion},entries:N,initialFolderSelection:t.currentFQPath,onSuccess:r.noop,onCancel:r.noop,showFolderSuggestion:!0,createNewFolderInMoveDialog:!0})});return{label:F._("Move"),performAction:A,disabled:q,iconName:"move",className:"action-move",key:"move"}}}));
//# sourceMappingURL=move.min.js-vfluNBtY-.map