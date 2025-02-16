import {
  listBuilds as listBuildsPrd,
  listFolders as listFoldersPrd
} from "./build";
import {
  SdkContext as SdkContextPrd
} from "./SdkContext";
import {
  listBuilds as listBuildsMok,
  listFolders as listFoldersMok } from "./build.mok";
import {
  SdkContext as SdkContextMok
} from "./SdkContext.mok";

const mokData = true;

let SdkContext: React.Context<any>;
let listBuilds: Function;
let listFolders: Function;

if(mokData) {
  SdkContext = SdkContextMok;
  listBuilds = listBuildsMok;
  listFolders = listFoldersMok;
} else {
  SdkContext = SdkContextPrd;
  listBuilds = listBuildsPrd;
  listFolders = listFoldersPrd;
}

export {
  SdkContext,
  listBuilds,
  listFolders
}