import * as React from "react";
import {
  FunctionComponent,
  useState, useEffect, useContext
} from "react";
import { Button } from "azure-devops-ui/Button";
import { BuildItem } from "./BuildItem";
import { BuildFolder } from "./BuildFolder";
import { listBuilds, listFolders } from "../api/build";

export const BuildFolders: FunctionComponent = () => {
  const [builds, setBuilds] = useState([]);
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    listItems();
  }, []);

  const listItems = async () => {
    try {
      const folders = await listFolders();
      const builds = await listBuilds();
      setBuilds(builds);
      setFolders(folders);
    } catch (error) {
        console.error("Erro ao listar as builds:", error);
    }
  };

  return (
    <div className="flex-column">
      <Button
        primary={true}
        iconProps={{
          iconName: "refresh",
          tooltipProps: {text: "Atualizar Lista"}
        }}
        onClick={() => listBuilds()}
      />
      <div className="bolt-table">
        {folders.map(folder => (
          <BuildFolder folder={folder}/>
        ))}
        {builds.map(build => (
          <BuildItem build={build} />
        ))}
      </div>
    </div>
  );
};