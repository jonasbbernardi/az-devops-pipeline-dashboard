import { createContext } from "react";
import * as SDK from "azure-devops-extension-sdk";

async function sdkInit() {
  await SDK.init();
  console.log('Sdk intialized');
  await SDK.ready();
  console.log('Sdk ready');
}

sdkInit()
console.log('exporting project');
export const SdkContext = createContext<typeof SDK>(SDK);
