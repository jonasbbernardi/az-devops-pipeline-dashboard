import { Folder } from "azure-devops-extension-api/Build";
import { ISimpleListCell } from "azure-devops-ui/List";
import { ISimpleTableCell } from "azure-devops-ui/Table";
import { ITreeItem } from "azure-devops-ui/Utilities/TreeItemProvider";

export interface IFolderItem extends ISimpleTableCell {
    path: string;
    cell: ISimpleListCell;
}

export function provideFolderList(folders: Folder[]) {
    const items: Array<ITreeItem<IFolderItem>> = [];
    if(folders === undefined) return items;
    for (const folder of folders) {
      const folderName = folder.path.slice(1);
      items.push({
        id: folder.path,
        data: {
          name: folderName,
          path: folder.path,
          cell: {
            text: folderName,
            iconProps: {iconName: 'FabricFolderFill'}
          }
        },
        childItems: [{data: {path: "no-item", cell: {}}, id:""}],
        expanded: false
      })
    }
    return items;
}