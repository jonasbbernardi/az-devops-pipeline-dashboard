import { createContext } from "react";
import * as az_sdk from "azure-devops-extension-sdk";

async function sdkInit() {
  await az_sdk.init();
  await az_sdk.ready();
}

sdkInit();
export const SDK = az_sdk;
export const SdkContext = createContext<typeof SDK>(SDK);
