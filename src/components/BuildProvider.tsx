import { BuildDefinitionReference } from "azure-devops-extension-api/Build";
import { ISimpleListCell } from "azure-devops-ui/List";
import { ISimpleTableCell } from "azure-devops-ui/Table";
import { ITreeItem } from "azure-devops-ui/Utilities/TreeItemProvider";

export interface IBuildItem extends ISimpleTableCell {
  id: number,
  status: number;
  result: number;
  cell: ISimpleListCell;
}

export function provideBuildList(builds: BuildDefinitionReference[]) {
    const items: Array<ITreeItem<IBuildItem>> = [];
    if(builds === undefined) return items;
    for (const build of builds) {
      items.push({
        id: build.path + build.name,
        data: {
          id: build.id,
          name: build.name,
          status: build.latestBuild.status,
          result: build.latestBuild.result,
          cell: {
            text: build.name,
            iconProps: {iconName: 'FabricFolderFill'}
          }
        },
        childItems: [],
        expanded: false
      })
    }
    return items;
}