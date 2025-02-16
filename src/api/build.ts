import { getClient } from "azure-devops-extension-api";
import { Build, BuildRestClient, BuildStatus, Folder } from "azure-devops-extension-api/Build";
import { CommonServiceIds, IProjectPageService } from "azure-devops-extension-api";
import * as SDK from "azure-devops-extension-sdk";

async function getProject() {
  const projectService = await SDK.getService<IProjectPageService>(CommonServiceIds.ProjectPageService);
  const project = await projectService.getProject();
  if (!project) {
    console.error("Nenhum projeto encontrado no contexto.");
  }
  console.log('Project loaded');
  return project;
}

export const listBuilds = async (
  path: string = '\\'
) => {
  try {
    const project = await getProject();
    const buildClient = getClient(BuildRestClient);
    const definitions = await buildClient.getDefinitions(
      project.id, null, null, null, null, null, null, null, null, path
    );
    const builds = await Promise.all(
      definitions.map(async d => {
        let latestBuild: Build;
        try{
          latestBuild = await buildClient.getLatestBuild(project.id, `${d.id}`);
        } catch (error) {
          console.error(error);
          latestBuild = {status: BuildStatus.None} as Build;
        }
        return { ...d, latestBuild };
      })
    );
    return builds;
  } catch (error) {
      console.error("Erro ao listar as builds:", error);
  }
};

export const listFolders = async (
  path: string = '\\'
) => {
  try {
    const project = await getProject();
    const buildClient = getClient(BuildRestClient);
    const folders = await buildClient.getFolders(project.id,path);
    return folders.filter((folder: Folder) => {
      if(folder.path == path) return false;
      return folder.path.split(path).length == 2;
    });
  } catch (error) {
      console.error("Erro ao listar as pastas:", error);
  }
};