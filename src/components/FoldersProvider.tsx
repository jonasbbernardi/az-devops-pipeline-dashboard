import { Folder } from "azure-devops-extension-api/Build";
import { ISimpleListCell } from "azure-devops-ui/List";
import { ISimpleTableCell } from "azure-devops-ui/Table";
import { ITreeItem, TreeItemProvider } from "azure-devops-ui/Utilities/TreeItemProvider";
import { listFolders } from "../api/build.mok";

export interface IFolderItem extends ISimpleTableCell {
    path: string;
    cell: ISimpleListCell;
}

export function provideFolderList(folders: Folder[]) {
    const items: Array<ITreeItem<IFolderItem>> = [];
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