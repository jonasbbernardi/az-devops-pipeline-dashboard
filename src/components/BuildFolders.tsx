import * as React from "react";
import {
  FunctionComponent,
  useState, useEffect, useContext
} from "react";
import { getClient } from "azure-devops-extension-api";
import { BuildDefinitionReference, BuildRestClient } from "azure-devops-extension-api/Build";
import { CommonServiceIds, IProjectPageService } from "azure-devops-extension-api/Common";
import { Button } from "azure-devops-ui/Button";
import { SdkContext } from "../SdkContext";
import { BuildItem } from "./BuildItem";

export const BuildFolders: FunctionComponent = () => {
  const sdk = useContext(SdkContext)
  const [builds, setBuilds] = useState([]);

  useEffect(() => {
    listBuilds();
  }, []);

  const listBuilds = async () => {
    try {
      const projectService = await sdk.getService<IProjectPageService>(CommonServiceIds.ProjectPageService);
      const project = await projectService.getProject();

      if (!project) {
        console.error("Nenhum projeto encontrado no contexto.");
        return;
      }

      const buildClient = getClient(BuildRestClient);
      const paths = await buildClient.getFolders(project.id);
      const buildDefinitions = await buildClient.getDefinitions(project.id);
      console.log("paths", paths);
      console.log("buildDefinitions", buildDefinitions);

      setBuilds(buildDefinitions);
    } catch (error) {
        console.error("Erro ao listar as builds:", error);
    }
  };

  return (
    <div className="flex-column">
      <h1 className="bolt-title">Builds do Projeto</h1>
      <Button primary={true} text="Recarregar Builds" onClick={listBuilds} />
      <div className="bolt-table">
        {builds.map(build => (
          <div key={build.id} className="bolt-table-row">
            <BuildItem build={build} />
          </div>
        ))}
      </div>
    </div>
  );
};