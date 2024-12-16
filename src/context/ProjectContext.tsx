import { createContext } from "react";
import * as SDK from "azure-devops-extension-sdk";
import { CommonServiceIds, IProjectInfo, IProjectPageService } from "azure-devops-extension-api";

let project: IProjectInfo | undefined;
async function getProject() {
  const projectService = await SDK.getService<IProjectPageService>(CommonServiceIds.ProjectPageService);
  project = await projectService.getProject();
  if (!project) {
    console.error("Nenhum projeto encontrado no contexto.");
  }
}

async function projectInit() {
  await SDK.init();
  await SDK.ready();
  await getProject();
}

projectInit();
export const Project = project;
export const ProjectContext = createContext<typeof project>(project);
