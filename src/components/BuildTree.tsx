import * as React from 'react';
import { FunctionComponent, useState, useEffect } from "react";
import { BuildDefinitionReference, Folder } from "azure-devops-extension-api/Build";
import { Tree } from "azure-devops-ui/TreeEx";
import {
  ITreeItemProvider,
  ITreeItemEx,
  TreeItemProvider
} from "azure-devops-ui/Utilities/TreeItemProvider";
import { IFolderItem, provideFolderList } from './providers/FoldersProvider'; 
import renderBuildTreeItem from './BuildTreeRenderer';
import { IBuildItem, provideBuildList } from './providers/BuildProvider';

interface BuildTreeProps {
    folders: Folder[]
    builds: BuildDefinitionReference[]
}

export const BuildTree: FunctionComponent<BuildTreeProps> = (props: BuildTreeProps) => {
  const [itemProvider, setItemProvider] = useState<ITreeItemProvider<IFolderItem | IBuildItem>>(new TreeItemProvider([]));

  useEffect(() => {
    const folderProvider = provideFolderList(props.folders);
    const buildProvider = provideBuildList(props.builds);
    const provider = new TreeItemProvider<IFolderItem | IBuildItem>([
      ...folderProvider,
      ...buildProvider
    ]);
    setItemProvider(provider);
  }, [props.folders, props.builds]);

  const treeColumns = [{
        id: "cell",
        name: "Name",
        minWidth: 200,
        renderCell: renderBuildTreeItem,
        width: -100,
  }]

  return (
    <Tree<IFolderItem | IBuildItem>
      key={"folders"}
      ariaLabel="Tree with many items"
      columns={treeColumns}
      itemProvider={itemProvider}
      onToggle={(event, treeItem: ITreeItemEx<IFolderItem | IBuildItem>) => {
        console.log("toggle:",treeItem);
        itemProvider.toggle(treeItem.underlyingItem);
      }}
      scrollable={true}
    />
  )
};
