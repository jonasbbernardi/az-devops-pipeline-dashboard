import * as React from 'react';
import { ISimpleTableCell, SimpleTableCell } from "azure-devops-ui/Table";
import { ITreeColumn, renderExpandableTreeCell } from "azure-devops-ui/TreeEx";
import { ITreeItemEx } from "azure-devops-ui/Utilities/TreeItemProvider";
import { BuildStatusIcon } from './BuildTree/BuildStatusIcon';
import { BuildDefinitionReference } from 'azure-devops-extension-api/Build';
import { IBuildItem } from './BuildProvider';

export default function renderBuildTreeItem<T extends ISimpleTableCell>(
  rowIndex: number,
  columnIndex: number,
  treeColumn: ITreeColumn<T>,
  treeItem: ITreeItemEx<T>,
  ariaRowIndex?: number | undefined,
  role?: string
){
  const item = treeItem.underlyingItem.data;

  if(item["path"] !== undefined) {

    return renderExpandableTreeCell(
      rowIndex,
      columnIndex,
      treeColumn,
      treeItem,
      ariaRowIndex,
      role
    );

  } else {

    return (
      <SimpleTableCell
        key={item.id as number}
        tableColumn={treeColumn}
        columnIndex={columnIndex}
        contentClassName="fontWeightSemiBold font-weight-semibold fontSizeM font-size-m"
        >
        <BuildStatusIcon
          key={item.id as number}
          status={item.status as number}
          result={item.result as number} />
          <div className="flex-row wrap-text">
            <span>{item.name}</span>
          </div>
      </SimpleTableCell>
    )

  }
}