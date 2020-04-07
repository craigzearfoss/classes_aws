define(["require","exports","tslib","modules/clean/react/delorean/util","modules/clean/filepath","modules/core/i18n"],(function(e,t,o,r,n,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r=o.__importStar(r),n=o.__importStar(n);var i={move:{generateWithYou:function(e){return 1===e?s._("You moved <strong>%(single_item_name)s</strong> from <strong>%(src_folder)s</strong> to this folder",{project:"folder-history"}):s.ungettext("You moved %(item_count)d item from <strong>%(src_folder)s</strong> to this folder","You moved %(item_count)d items from <strong>%(src_folder)s</strong> to this folder",e,{project:"folder-history"})},generateWithName:function(e){return 1===e?s._("%(name)s moved <strong>%(single_item_name)s</strong> from <strong>%(src_folder)s</strong> to this folder",{project:"folder-history"}):s.ungettext("%(name)s moved %(item_count)d item from <strong>%(src_folder)s</strong> to this folder","%(name)s moved %(item_count)d items from <strong>%(src_folder)s</strong> to this folder",e,{project:"folder-history"})},generateWithYouAndFolder:function(e){return 1===e?s._("You moved <strong>%(single_item_name)s</strong> from <strong>%(src_folder)s</strong> to <strong>%(dst_folder)s</strong>",{project:"folder-history"}):s.ungettext("You moved %(item_count)d item from <strong>%(src_folder)s</strong> to <strong>%(dst_folder)s</strong>","You moved %(item_count)d items from <strong>%(src_folder)s</strong> to <strong>%(dst_folder)s</strong>",e,{project:"folder-history"})},generateWithNameAndFolder:function(e){return 1===e?s._("%(name)s moved <strong>%(single_item_name)s</strong> from <strong>%(src_folder)s</strong> to <strong>%(dst_folder)s</strong>",{project:"folder-history"}):s.ungettext("%(name)s moved %(item_count)d item from <strong>%(src_folder)s</strong> to <strong>%(dst_folder)s</strong>","%(name)s moved %(item_count)d items from <strong>%(src_folder)s</strong> to <strong>%(dst_folder)s</strong>",e,{project:"folder-history"})}},move_in:{generateWithYou:function(e){return 1===e?s._("You moved <strong>%(single_item_name)s</strong> into this folder",{project:"folder-history"}):s.ungettext("You moved %(item_count)d item into this folder","You moved %(item_count)d items into this folder",e,{project:"folder-history"})},generateWithName:function(e){return 1===e?s._("%(name)s moved <strong>%(single_item_name)s</strong> into this folder",{project:"folder-history"}):s.ungettext("%(name)s moved %(item_count)d item into this folder","%(name)s moved %(item_count)d items into this folder",e,{project:"folder-history"})},generateWithYouAndFolder:function(e){return 1===e?s._("You moved <strong>%(single_item_name)s</strong> into <strong>%(dst_folder)s</strong>",{project:"folder-history"}):s.ungettext("You moved %(item_count)d item into <strong>%(dst_folder)s</strong>","You moved %(item_count)d items into <strong>%(dst_folder)s</strong>",e,{project:"folder-history"})},generateWithNameAndFolder:function(e){return 1===e?s._("%(name)s moved <strong>%(single_item_name)s</strong> into <strong>%(dst_folder)s</strong>",{project:"folder-history"}):s.ungettext("%(name)s moved %(item_count)d item into <strong>%(dst_folder)s</strong>","%(name)s moved %(item_count)d items into <strong>%(dst_folder)s</strong>",e,{project:"folder-history"})}},move_out:{generateWithYou:function(e){return 1===e?s._("You moved <strong>%(single_item_name)s</strong> out of this folder",{project:"folder-history"}):s.ungettext("You moved %(item_count)d item out of this folder","You moved %(item_count)d items out of this folder",e,{project:"folder-history"})},generateWithName:function(e){return 1===e?s._("%(name)s moved <strong>%(single_item_name)s</strong> out of this folder",{project:"folder-history"}):s.ungettext("%(name)s moved %(item_count)d item out of this folder","%(name)s moved %(item_count)d items out of this folder",e,{project:"folder-history"})},generateWithYouAndFolder:function(e){return 1===e?s._("You moved <strong>%(single_item_name)s</strong> out of <strong>%(src_folder)s</strong>",{project:"folder-history"}):s.ungettext("You moved %(item_count)d item out of <strong>%(src_folder)s</strong>","You moved %(item_count)d items out of <strong>%(src_folder)s</strong>",e,{project:"folder-history"})},generateWithNameAndFolder:function(e){return 1===e?s._("%(name)s moved <strong>%(single_item_name)s</strong> out of <strong>%(src_folder)s</strong>",{project:"folder-history"}):s.ungettext("%(name)s moved %(item_count)d item out of <strong>%(src_folder)s</strong>","%(name)s moved %(item_count)d items out of <strong>%(src_folder)s</strong>",e,{project:"folder-history"})}}},d={rename:{you:function(e){return 1===e?s._("You renamed %(single_item_name_prev)s to <strong>%(single_item_name_next)s</strong>",{project:"folder-history"}):s.ungettext("You renamed %(item_count)d item","You renamed %(item_count)d items",e,{project:"folder-history"})},name:function(e){return 1===e?s._("%(name)s renamed %(single_item_name_prev)s to <strong>%(single_item_name_next)s</strong>",{project:"folder-history"}):s.ungettext("%(name)s renamed %(item_count)d item","%(name)s renamed %(item_count)d items",e,{project:"folder-history"})},youFolder:function(e){return 1===e?s._("You renamed %(single_item_name_prev)s to <strong>%(single_item_name_next)s</strong> in %(folder_path)s",{project:"folder-history"}):s.ungettext("You renamed %(item_count)d item in %(folder_path)s","You renamed %(item_count)d items in %(folder_path)s",e,{project:"folder-history"})},nameFolder:function(e){return 1===e?s._("%(name)s renamed %(single_item_name_prev)s to <strong>%(single_item_name_next)s</strong> in %(folder_path)s",{project:"folder-history"}):s.ungettext("%(name)s renamed %(item_count)d item in %(folder_path)s","%(name)s renamed %(item_count)d items in %(folder_path)s",e,{project:"folder-history"})}},unshare:{you:function(e){return 1===e?s._("You unshared <strong>%(single_item_name)s</strong>",{project:"folder-history"}):s.ungettext("You unshared %(item_count)d item","You unshared %(item_count)d items",e,{project:"folder-history"})},name:function(e){return 1===e?s._("%(name)s unshared <strong>%(single_item_name)s</strong>",{project:"folder-history"}):s.ungettext("%(name)s unshared %(item_count)d item","%(name)s unshared %(item_count)d items",e,{project:"folder-history"})},youFolder:function(e){return 1===e?s._("You unshared <strong>%(single_item_name)s</strong> in %(folder_path)s",{project:"folder-history"}):s.ungettext("You unshared %(item_count)d item in %(folder_path)s","You unshared %(item_count)d items in %(folder_path)s",e,{project:"folder-history"})},nameFolder:function(e){return 1===e?s._("%(name)s unshared <strong>%(single_item_name)s</strong> in %(folder_path)s",{project:"folder-history"}):s.ungettext("%(name)s unshared %(item_count)d item in %(folder_path)s","%(name)s unshared %(item_count)d items in %(folder_path)s",e,{project:"folder-history"})}},unmount:{you:function(e){return 1===e?s._("You deleted <strong>%(single_item_name)s</strong>",{project:"folder-history"}):s.ungettext("You deleted %(item_count)d item","You deleted %(item_count)d items",e,{project:"folder-history"})},name:function(e){return 1===e?s._("%(name)s deleted <strong>%(single_item_name)s</strong>",{project:"folder-history"}):s.ungettext("%(name)s deleted %(item_count)d item","%(name)s deleted %(item_count)d items",e,{project:"folder-history"})},youFolder:function(e){return 1===e?s._("You deleted <strong>%(single_item_name)s</strong> in %(folder_path)s",{project:"folder-history"}):s.ungettext("You deleted %(item_count)d item in %(folder_path)s","You deleted %(item_count)d items in %(folder_path)s",e,{project:"folder-history"})},nameFolder:function(e){return 1===e?s._("%(name)s deleted <strong>%(single_item_name)s</strong> in %(folder_path)s",{project:"folder-history"}):s.ungettext("%(name)s deleted %(item_count)d item in %(folder_path)s","%(name)s deleted %(item_count)d items in %(folder_path)s",e,{project:"folder-history"})}},share:{you:function(e){return 1===e?s._("You shared <strong>%(single_item_name)s</strong>",{project:"folder-history"}):s.ungettext("You shared %(item_count)d item","You shared %(item_count)d items",e,{project:"folder-history"})},name:function(e){return 1===e?s._("%(name)s shared <strong>%(single_item_name)s</strong>",{project:"folder-history"}):s.ungettext("%(name)s shared %(item_count)d item","%(name)s shared %(item_count)d items",e,{project:"folder-history"})},youFolder:function(e){return 1===e?s._("You shared <strong>%(single_item_name)s</strong> in %(folder_path)s",{project:"folder-history"}):s.ungettext("You shared %(item_count)d item in %(folder_path)s","You shared %(item_count)d items in %(folder_path)s",e,{project:"folder-history"})},nameFolder:function(e){return 1===e?s._("%(name)s shared <strong>%(single_item_name)s</strong> in %(folder_path)s",{project:"folder-history"}):s.ungettext("%(name)s shared %(item_count)d item in %(folder_path)s","%(name)s shared %(item_count)d items in %(folder_path)s",e,{project:"folder-history"})}},mount:{you:function(e){return 1===e?s._("You added <strong>%(single_item_name)s</strong>",{project:"folder-history"}):s.ungettext("You added %(item_count)d item","You added %(item_count)d items",e,{project:"folder-history"})},name:function(e){return 1===e?s._("%(name)s added <strong>%(single_item_name)s</strong>",{project:"folder-history"}):s.ungettext("%(name)s added %(item_count)d item","%(name)s added %(item_count)d items",e,{project:"folder-history"})},youFolder:function(e){return 1===e?s._("You added <strong>%(single_item_name)s</strong> in %(folder_path)s",{project:"folder-history"}):s.ungettext("You added %(item_count)d item in %(folder_path)s","You added %(item_count)d items in %(folder_path)s",e,{project:"folder-history"})},nameFolder:function(e){return 1===e?s._("%(name)s added <strong>%(single_item_name)s</strong> in %(folder_path)s",{project:"folder-history"}):s.ungettext("%(name)s added %(item_count)d item in %(folder_path)s","%(name)s added %(item_count)d items in %(folder_path)s",e,{project:"folder-history"})}},lost_access:{you:function(e){return 1===e?s._("You were removed from <strong>%(single_item_name)s</strong>",{project:"folder-history"}):s.ungettext("You were removed from %(item_count)d item","You were removed from %(item_count)d items",e,{project:"folder-history"})},name:function(e){return 1===e?s._("You were removed from <strong>%(single_item_name)s</strong>",{project:"folder-history"}):s.ungettext("You were removed from %(item_count)d item","You were removed from %(item_count)d items",e,{project:"folder-history"})},youFolder:function(e){return 1===e?s._("You were removed from <strong>%(single_item_name)s</strong> in %(folder_path)s",{project:"folder-history"}):s.ungettext("You were removed from %(item_count)d item in %(folder_path)s","You were removed from %(item_count)d items in %(folder_path)s",e,{project:"folder-history"})},nameFolder:function(e){return 1===e?s._("You were removed from <strong>%(single_item_name)s</strong> in %(folder_path)s",{project:"folder-history"}):s.ungettext("You were removed from %(item_count)d item in %(folder_path)s","You were removed from %(item_count)d items in %(folder_path)s",e,{project:"folder-history"})}},add:{you:function(e){return 1===e?s._("You added <strong>%(single_item_name)s</strong>",{project:"folder-history"}):s.ungettext("You added %(item_count)d item","You added %(item_count)d items",e,{project:"folder-history"})},name:function(e){return 1===e?s._("%(name)s added <strong>%(single_item_name)s</strong>",{project:"folder-history"}):s.ungettext("%(name)s added %(item_count)d item","%(name)s added %(item_count)d items",e,{project:"folder-history"})},youFolder:function(e){return 1===e?s._("You added <strong>%(single_item_name)s</strong> in %(folder_path)s",{project:"folder-history"}):s.ungettext("You added %(item_count)d item in %(folder_path)s","You added %(item_count)d items in %(folder_path)s",e,{project:"folder-history"})},nameFolder:function(e){return 1===e?s._("%(name)s added <strong>%(single_item_name)s</strong> in %(folder_path)s",{project:"folder-history"}):s.ungettext("%(name)s added %(item_count)d item in %(folder_path)s","%(name)s added %(item_count)d items in %(folder_path)s",e,{project:"folder-history"})}},edit:{you:function(e){return 1===e?s._("You edited <strong>%(single_item_name)s</strong>",{project:"folder-history"}):s.ungettext("You edited %(item_count)d item","You edited %(item_count)d items",e,{project:"folder-history"})},name:function(e){return 1===e?s._("%(name)s edited <strong>%(single_item_name)s</strong>",{project:"folder-history"}):s.ungettext("%(name)s edited %(item_count)d item","%(name)s edited %(item_count)d items",e,{project:"folder-history"})},youFolder:function(e){return 1===e?s._("You edited <strong>%(single_item_name)s</strong> in %(folder_path)s",{project:"folder-history"}):s.ungettext("You edited %(item_count)d item in %(folder_path)s","You edited %(item_count)d items in %(folder_path)s",e,{project:"folder-history"})},nameFolder:function(e){return 1===e?s._("%(name)s edited <strong>%(single_item_name)s</strong> in %(folder_path)s",{project:"folder-history"}):s.ungettext("%(name)s edited %(item_count)d item in %(folder_path)s","%(name)s edited %(item_count)d items in %(folder_path)s",e,{project:"folder-history"})}},delete:{you:function(e){return 1===e?s._("You deleted <strong>%(single_item_name)s</strong>",{project:"folder-history"}):s.ungettext("You deleted %(item_count)d item","You deleted %(item_count)d items",e,{project:"folder-history"})},name:function(e){return 1===e?s._("%(name)s deleted <strong>%(single_item_name)s</strong>",{project:"folder-history"}):s.ungettext("%(name)s deleted %(item_count)d item","%(name)s deleted %(item_count)d items",e,{project:"folder-history"})},youFolder:function(e){return 1===e?s._("You deleted <strong>%(single_item_name)s</strong> in %(folder_path)s",{project:"folder-history"}):s.ungettext("You deleted %(item_count)d item in %(folder_path)s","You deleted %(item_count)d items in %(folder_path)s",e,{project:"folder-history"})},nameFolder:function(e){return 1===e?s._("%(name)s deleted <strong>%(single_item_name)s</strong> in %(folder_path)s",{project:"folder-history"}):s.ungettext("%(name)s deleted %(item_count)d item in %(folder_path)s","%(name)s deleted %(item_count)d items in %(folder_path)s",e,{project:"folder-history"})}},restore:{you:function(e){return 1===e?s._("You restored <strong>%(single_item_name)s</strong>"):s.ungettext("You restored %(item_count)d item","You restored %(item_count)d items",e)},name:function(e){return 1===e?s._("%(name)s restored <strong>%(single_item_name)s</strong>"):s.ungettext("%(name)s restored %(item_count)d item","%(name)s restored %(item_count)d items",e)},youFolder:function(e){return 1===e?s._("You restored <strong>%(single_item_name)s</strong> in %(folder_path)s"):s.ungettext("You restored %(item_count)d item in %(folder_path)s","You restored %(item_count)d items in %(folder_path)s",e)},nameFolder:function(e){return 1===e?s._("%(name)s restored <strong>%(single_item_name)s</strong> in %(folder_path)s"):s.ungettext("%(name)s restored %(item_count)d item in %(folder_path)s","%(name)s restored %(item_count)d items in %(folder_path)s",e)}},restore_version:{you:function(e){return 1===e?s._("You restored a previous version of <strong>%(single_item_name)s</strong>"):s.ungettext("You restored a previous version of %(item_count)d item","You restored a previous version of %(item_count)d items",e)},name:function(e){return 1===e?s._("%(name)s restored a previous version of <strong>%(single_item_name)s</strong>"):s.ungettext("%(name)s restored a previous version of %(item_count)d item","%(name)s restored a previous version of %(item_count)d items",e)},youFolder:function(e){return 1===e?s._("You restored a previous version of <strong>%(single_item_name)s</strong> in %(folder_path)s"):s.ungettext("You restored a previous version of %(item_count)d item in %(folder_path)s","You restored a previous version of %(item_count)d items in %(folder_path)s",e)},nameFolder:function(e){return 1===e?s._("%(name)s restored a previous version of <strong>%(single_item_name)s</strong> in %(folder_path)s"):s.ungettext("%(name)s restored a previous version of %(item_count)d item in %(folder_path)s","%(name)s restored a previous version of %(item_count)d items in %(folder_path)s",e)}},rollback:{you:function(e){return 1===e?s._("You rolled back <strong>%(single_item_name)s</strong>"):s.ungettext("You rolled back %(item_count)d item","You rolled back %(item_count)d items",e)},name:function(e){return 1===e?s._("%(name)s rolled back <strong>%(single_item_name)s</strong>"):s.ungettext("%(name)s rolled back %(item_count)d item","%(name)s rolled back %(item_count)d items",e)},youFolder:function(e){return 1===e?s._("You rolled back <strong>%(single_item_name)s</strong> in %(folder_path)s"):s.ungettext("You rolled back %(item_count)d item in %(folder_path)s","You rolled back %(item_count)d items in %(folder_path)s",e)},nameFolder:function(e){return 1===e?s._("%(name)s rolled back <strong>%(single_item_name)s</strong> in %(folder_path)s"):s.ungettext("%(name)s rolled back %(item_count)d item in %(folder_path)s","%(name)s rolled back %(item_count)d items in %(folder_path)s",e)}},unknown:{you:function(){return""},name:function(){return""},youFolder:function(){return""},nameFolder:function(){return""}},other:{you:function(){return""},name:function(){return""},youFolder:function(){return""},nameFolder:function(){return""}}};t.getTooltipForEvent=function(e){var t=e.event,s=e.itemCount,m=e.relativeFolderDisplayPath,u=t.op_type,_={single_item_name:r.getRepresentativeNameOfMetadata(t.object_metadata),item_count:s,name:t.actor.display_name,folder_path:m};if(r.isOpType(u,"move")||r.isOpType(u,"move_in")||r.isOpType(u,"move_out"))return(function(e){var t=e.event,s=e.itemCount,d=e.i18nParams,m=t.object_metadata;if(!t.op_type)return"";var u=t.op_type[".tag"];if("move_in"!==u&&"move_out"!==u&&"move"!==u)throw new Error("Unhandled move type in getMoveTooltip");var _,a,l="",f="";if(r.isMetadataType(m,"move_metadata"))l=n.child_dir(m.from_containing_path),f=n.child_dir(m.to_containing_path);else if(r.isMetadataType(m,"move_in_metadata"))l="",f=n.child_dir(m.to_containing_path);else{if(!r.isMetadataType(m,"move_out_metadata"))throw new Error("Unknown type for move metadata.");l=n.child_dir(m.from_containing_path),f=""}_=n.normalize(f)===n.normalize(e.path),a=n.normalize(l)===n.normalize(e.path);var c=o.__assign(o.__assign({},d),{src_folder:l,dst_folder:f}),g=i[u],h=g.generateWithYou,p=g.generateWithYouAndFolder,y=g.generateWithName,v=g.generateWithNameAndFolder;return"move"===u||"move_in"===u?_?e.isYou?h(s).format(c):y(s).format(c):e.isYou?p(s).format(c):v(s).format(c):"move_out"===u?a?e.isYou?h(s).format(c):y(s).format(c):e.isYou?p(s).format(c):v(s).format(c):r.assertNever(u)})(o.__assign(o.__assign({},e),{i18nParams:_}));if(r.isOpType(u,"rename")){var a=t.object_metadata;if(!r.isMetadataType(a,"rename_metadata"))throw new Error("rename optype without associated rename metadata?");_=o.__assign(o.__assign({},_),{single_item_name_prev:a.from_name,single_item_name_next:a.to_name})}var l=d[u[".tag"]],f=l.you,c=l.youFolder,g=l.name,h=l.nameFolder;return void 0===m?e.isYou?f(s).format(_):g(s).format(_):e.isYou?c(s).format(_):h(s).format(_)}}));
//# sourceMappingURL=tooltips.min.js-vfl7TiXQB.map