import * as React from "react";
import {
  FunctionComponent,
  useState, useEffect, useContext
} from "react";
import { Button } from "azure-devops-ui/Button";
import { ProjectContext } from "../context/ProjectContext";
import { BuildItem } from "./BuildItem";
import { BuildFolder } from "./BuildFolder";
import { listBuildDefinitions, listFolders } from "../api/build";

export const BuildFolders: FunctionComponent = () => {
  const project = useContext(ProjectContext);
  const [builds, setBuilds] = useState([]);
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    listBuilds();
  }, []);

  const listBuilds = async () => {
    try {
      const folders = await listFolders(project.id);
      const definitions = await listBuildDefinitions(project.id);
      setBuilds(definitions);
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