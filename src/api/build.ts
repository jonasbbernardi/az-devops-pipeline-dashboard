import { getClient } from "azure-devops-extension-api";
import { BuildRestClient, Folder } from "azure-devops-extension-api/Build";

export const listFoldersAndBuildDefinitions = async (project_id: string, path: string = '\\') => {
  try {
    const folders = await listFolders(project_id, path);
    const definitions = await listBuildDefinitions(project_id, path);
    return { folders, definitions };
  } catch (error) {
      console.error("Erro ao listar as builds:", error);
  }
};

export const listBuildDefinitions = async (
  project_id: string,
  path: string = '\\'
) => {
  try {
    const buildClient = getClient(BuildRestClient);
    const definitions = await buildClient.getDefinitions(
      project_id, null, null, null, null, null, null, null, null, path
    );
    console.log(definitions);
    return definitions;
  } catch (error) {
      console.error("Erro ao listar as builds:", error);
  }
};

export const listFolders = async (
  project_id: string,
  path: string = '\\'
) => {
  try {
    const buildClient = getClient(BuildRestClient);
    const folders = await buildClient.getFolders(project_id,path);
    console.log(folders);
    return folders.filter((folder: Folder) => {
      if(folder.path == path) return false;
      return folder.path.split(path).length == 2;
    });;
  } catch (error) {
      console.error("Erro ao listar as builds:", error);
  }
};