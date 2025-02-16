import * as React from "react";
import {
  FunctionComponent,
  useState, useEffect
} from "react";
import { BuildTree } from "./BuildTree";
import { listBuilds, listFolders } from "../api/build.mok";

export const WrapBuildTree: FunctionComponent = () => {
  const [builds, setBuilds] = useState([]);
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    console.log('listing itens')
    listItems();
  }, []);

  const listItems = async () => {
    try {
      const [builds,folders] = await Promise.all(
        [listBuilds(), listFolders()]
      )
      setBuilds(builds);
      setFolders(folders);
    } catch (error) {
        console.error("Erro ao listar as builds:", error);
    }
  };

  return (
    <div className="flex-column">

      <div className="bolt-table">
          <BuildTree folders={folders} builds={builds}/>
      </div>
    </div>
  );
};