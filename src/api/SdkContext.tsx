import { createContext } from "react";
import * as SDK from "azure-devops-extension-sdk";
import { CommonServiceIds, IProjectPageService } from "azure-devops-extension-api";

async function sdkInit() {
  await SDK.init();
  console.log('Sdk intialized');
  await SDK.ready().then();
  console.log('Sdk ready');
  const client = await SDK.getService<IProjectPageService>(CommonServiceIds.ProjectPageService);
  const context = await client.getProject();
  console.log('context', context);
  await SDK.notifyLoadSucceeded();
}

sdkInit()
console.log('exporting project');
export const SdkContext = createContext<typeof SDK>(SDK);
