import * as React from 'react';
import { FunctionComponent, SyntheticEvent, useContext, useState, useEffect } from "react"
import { Folder } from "azure-devops-extension-api/Build"
import { Tree, renderExpandableTreeCell } from "azure-devops-ui/TreeEx";
import { ISimpleTableCell } from 'azure-devops-ui/Table';
import { ITreeItem, ITreeItemEx, TreeItemProvider } from 'azure-devops-ui/Utilities/TreeItemProvider';
import { ProjectContext } from '../context/ProjectContext';
import { listFoldersAndBuildDefinitions } from '../api/build';

interface BuildFolderProps {
    folder: Folder
}
interface IFolder extends ISimpleTableCell {}

export const BuildFolder: FunctionComponent<BuildFolderProps> = (props: BuildFolderProps) => {
  const project = useContext(ProjectContext);
  const [itemProvider, setItemProvider]: [TreeItemProvider<IFolder>, Function] = useState(null);

  useEffect(() => {
    getItemProvider().then((provider) => {
      setItemProvider(provider);
    });
  }, []);

  const onToggleFolder = (event: SyntheticEvent<HTMLElement>, treeItem: ITreeItemEx<IFolder>) => {
    event
    const folder = treeItem.underlyingItem;
    console.log(folder);
  }

  const getItemProvider = async () => {
    const rootItems: Array<ITreeItem<Folder>> = [];
    const list = await listFoldersAndBuildDefinitions(project.id);
    for(const item of list.folders) {
      await listFoldersAndBuildDefinitions(project.id, item.path);
      rootItems.push({
        data: {...item},
        childItems: [],
        expanded: true,
      });
    }
    return new TreeItemProvider<Folder>(rootItems);
  }

  const nameColumn = {
    id: "name",
    name: "Name",
    renderCell: renderExpandableTreeCell,
    width: 400,
  };

  return (
    <Tree<IFolder>
      ariaLabel="Basic tree"
      columns={[nameColumn]}
      itemProvider={itemProvider}
      onToggle={onToggleFolder}
      scrollable={true}
    />
  )
}