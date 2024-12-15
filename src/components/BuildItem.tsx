import * as React from 'react';
import { FunctionComponent } from "react"
import { BuildDefinitionReference, BuildResult, BuildStatus } from "azure-devops-extension-api/Build"
import { IStatusProps, Status, Statuses, StatusSize } from "azure-devops-ui/Status";

interface BuildItemProps {
    build: BuildDefinitionReference
}

export const BuildItem: FunctionComponent<BuildItemProps> = (props: BuildItemProps) => {
  let statuses: IStatusProps = Statuses.Queued;
  let key: string = "queued";
  const buildStatus = props.build.latestBuild.status;

  if(buildStatus == BuildStatus.Completed) {

    const buildResult = props.build.latestBuild.result;

    if(buildResult == BuildResult.Succeeded) {
      statuses = Statuses.Success;
      key = "success";
    }
    if(buildResult == BuildResult.Failed ||
        buildResult == BuildResult.PartiallySucceeded){
      statuses = Statuses.Failed;
      key="failed"
    }
    if(buildResult == BuildResult.Canceled) {
      statuses = Statuses.Canceled;
      key="canceled"
    }
  }

  if(props.build.latestBuild.status == BuildStatus.InProgress) {
    statuses = Statuses.Running;
    key="running"
  }

  if(props.build.latestBuild.status == BuildStatus.NotStarted) {
    statuses = Statuses.Waiting;
    key="waiting"
  }


  return <Status
        {...statuses}
        key={key}
        size={StatusSize.m}
        className="status-example flex-self-center "
      />
}