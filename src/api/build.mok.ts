import { Folder } from "azure-devops-extension-api/Build";
import { PagedList } from "azure-devops-extension-api/WebApi/WebApi";

const builds = [
  {
      "_links": {
          "self": {
              "href": "https://dev.azure.com/jonasbbernardi/d11e6f6f-534c-41f5-9e0c-f443b4e45215/_apis/build/Definitions/1?revision=1"
          },
          "web": {
              "href": "https://dev.azure.com/jonasbbernardi/d11e6f6f-534c-41f5-9e0c-f443b4e45215/_build/definition?definitionId=1"
          },
          "editor": {
              "href": "https://dev.azure.com/jonasbbernardi/d11e6f6f-534c-41f5-9e0c-f443b4e45215/_build/designer?id=1&_a=edit-build-definition"
          },
          "badge": {
              "href": "https://dev.azure.com/jonasbbernardi/d11e6f6f-534c-41f5-9e0c-f443b4e45215/_apis/build/status/1"
          }
      },
      "quality": 1,
      "authoredBy": {
          "displayName": "Jonas Bernardi",
          "url": "https://spsprodsbr2.vssps.visualstudio.com/A011d9297-3e6a-44cc-99c7-958d7690e3f8/_apis/Identities/a1ecb4d4-85d0-4319-b776-1daa689b2b0c",
          "_links": {
              "avatar": {
                  "href": "https://dev.azure.com/jonasbbernardi/_apis/GraphProfile/MemberAvatars/msa.ZThjNTAyMjEtYTI3Ny03N2E2LWE2ODItMWU2Y2QzNjM5NTBm"
              }
          },
          "id": "a1ecb4d4-85d0-4319-b776-1daa689b2b0c",
          "uniqueName": "jonasbbernardi@gmail.com",
          "imageUrl": "https://dev.azure.com/jonasbbernardi/_apis/GraphProfile/MemberAvatars/msa.ZThjNTAyMjEtYTI3Ny03N2E2LWE2ODItMWU2Y2QzNjM5NTBm",
          "descriptor": "msa.ZThjNTAyMjEtYTI3Ny03N2E2LWE2ODItMWU2Y2QzNjM5NTBm"
      },
      "drafts": [],
      "queue": {
          "_links": {
              "self": {
                  "href": "https://dev.azure.com/jonasbbernardi/_apis/build/Queues/9"
              }
          },
          "id": 9,
          "name": "Azure Pipelines",
          "url": "https://dev.azure.com/jonasbbernardi/_apis/build/Queues/9",
          "pool": {
              "id": 9,
              "name": "Azure Pipelines",
              "isHosted": true
          }
      },
      "id": 1,
      "name": "ExtensionTest",
      "url": "https://dev.azure.com/jonasbbernardi/d11e6f6f-534c-41f5-9e0c-f443b4e45215/_apis/build/Definitions/1?revision=1",
      "uri": "vstfs:///Build/Definition/1",
      "path": "\\",
      "type": 2,
      "queueStatus": 0,
      "revision": 1,
      "createdDate": "2024-12-09T00:49:25.737Z",
      "project": {
          "id": "d11e6f6f-534c-41f5-9e0c-f443b4e45215",
          "name": "ExtensionTest",
          "url": "https://dev.azure.com/jonasbbernardi/_apis/projects/d11e6f6f-534c-41f5-9e0c-f443b4e45215",
          "state": 1,
          "revision": 11,
          "visibility": 0,
          "lastUpdateTime": "2024-12-08T16:31:46.170Z"
      },
      "latestBuild": {
          "_links": {
              "self": {
                  "href": "https://dev.azure.com/jonasbbernardi/d11e6f6f-534c-41f5-9e0c-f443b4e45215/_apis/build/Builds/3"
              },
              "web": {
                  "href": "https://dev.azure.com/jonasbbernardi/d11e6f6f-534c-41f5-9e0c-f443b4e45215/_build/results?buildId=3"
              },
              "sourceVersionDisplayUri": {
                  "href": "https://dev.azure.com/jonasbbernardi/d11e6f6f-534c-41f5-9e0c-f443b4e45215/_apis/build/builds/3/sources"
              },
              "timeline": {
                  "href": "https://dev.azure.com/jonasbbernardi/d11e6f6f-534c-41f5-9e0c-f443b4e45215/_apis/build/builds/3/Timeline"
              },
              "badge": {
                  "href": "https://dev.azure.com/jonasbbernardi/d11e6f6f-534c-41f5-9e0c-f443b4e45215/_apis/build/status/1"
              }
          },
          "properties": {},
          "tags": [],
          "validationResults": [],
          "plans": [
              {
                  "planId": "2fce1740-8e38-4f1c-b8bc-ca0f68b6d429"
              }
          ],
          "triggerInfo": {
              "ci.sourceBranch": "refs/heads/main",
              "ci.sourceSha": "83526f79d5441c9bb1c1bdbfbfe63d3b9e7a2cff",
              "ci.message": "feat: References",
              "ci.triggerRepository": "42010f88-2c8f-42dc-a4e6-a5c9988240fb"
          },
          "id": 3,
          "buildNumber": "20241209.3",
          "status": 2,
          "result": 8,
          "queueTime": "2024-12-09T12:37:03.455Z",
          "startTime": "2024-12-09T12:37:06.024Z",
          "finishTime": "2024-12-09T12:37:06.024Z",
          "url": "https://dev.azure.com/jonasbbernardi/d11e6f6f-534c-41f5-9e0c-f443b4e45215/_apis/build/Builds/3",
          "definition": {
              "drafts": [],
              "id": 1,
              "name": "ExtensionTest",
              "url": "https://dev.azure.com/jonasbbernardi/d11e6f6f-534c-41f5-9e0c-f443b4e45215/_apis/build/Definitions/1?revision=1",
              "uri": "vstfs:///Build/Definition/1",
              "path": "\\",
              "type": 2,
              "queueStatus": 0,
              "revision": 1,
              "project": {
                  "id": "d11e6f6f-534c-41f5-9e0c-f443b4e45215",
                  "name": "ExtensionTest",
                  "url": "https://dev.azure.com/jonasbbernardi/_apis/projects/d11e6f6f-534c-41f5-9e0c-f443b4e45215",
                  "state": 1,
                  "revision": 11,
                  "visibility": 0,
                  "lastUpdateTime": "2024-12-08T16:31:46.170Z"
              }
          },
          "buildNumberRevision": 3,
          "project": {
              "id": "d11e6f6f-534c-41f5-9e0c-f443b4e45215",
              "name": "ExtensionTest",
              "url": "https://dev.azure.com/jonasbbernardi/_apis/projects/d11e6f6f-534c-41f5-9e0c-f443b4e45215",
              "state": 1,
              "revision": 11,
              "visibility": 0,
              "lastUpdateTime": "2024-12-08T16:31:46.170Z"
          },
          "uri": "vstfs:///Build/Build/3",
          "sourceBranch": "refs/heads/main",
          "sourceVersion": "83526f79d5441c9bb1c1bdbfbfe63d3b9e7a2cff",
          "queue": {
              "id": 9,
              "name": "Azure Pipelines",
              "pool": {
                  "id": 9,
                  "name": "Azure Pipelines",
                  "isHosted": true
              }
          },
          "priority": 3,
          "reason": 2,
          "requestedFor": {
              "displayName": "Jonas Bernardi",
              "url": "https://spsprodsbr2.vssps.visualstudio.com/A011d9297-3e6a-44cc-99c7-958d7690e3f8/_apis/Identities/a1ecb4d4-85d0-4319-b776-1daa689b2b0c",
              "_links": {
                  "avatar": {
                      "href": "https://dev.azure.com/jonasbbernardi/_apis/GraphProfile/MemberAvatars/msa.ZThjNTAyMjEtYTI3Ny03N2E2LWE2ODItMWU2Y2QzNjM5NTBm"
                  }
              },
              "id": "a1ecb4d4-85d0-4319-b776-1daa689b2b0c",
              "uniqueName": "jonasbbernardi@gmail.com",
              "imageUrl": "https://dev.azure.com/jonasbbernardi/_apis/GraphProfile/MemberAvatars/msa.ZThjNTAyMjEtYTI3Ny03N2E2LWE2ODItMWU2Y2QzNjM5NTBm",
              "descriptor": "msa.ZThjNTAyMjEtYTI3Ny03N2E2LWE2ODItMWU2Y2QzNjM5NTBm"
          },
          "requestedBy": {
              "displayName": "Microsoft.VisualStudio.Services.TFS",
              "url": "https://spsprodsbr2.vssps.visualstudio.com/A011d9297-3e6a-44cc-99c7-958d7690e3f8/_apis/Identities/00000002-0000-8888-8000-000000000000",
              "_links": {
                  "avatar": {
                      "href": "https://dev.azure.com/jonasbbernardi/_apis/GraphProfile/MemberAvatars/s2s.MDAwMDAwMDItMDAwMC04ODg4LTgwMDAtMDAwMDAwMDAwMDAwQDJjODk1OTA4LTA0ZTAtNDk1Mi04OWZkLTU0YjAwNDZkNjI4OA"
                  }
              },
              "id": "00000002-0000-8888-8000-000000000000",
              "uniqueName": "00000002-0000-8888-8000-000000000000@2c895908-04e0-4952-89fd-54b0046d6288",
              "imageUrl": "https://dev.azure.com/jonasbbernardi/_apis/GraphProfile/MemberAvatars/s2s.MDAwMDAwMDItMDAwMC04ODg4LTgwMDAtMDAwMDAwMDAwMDAwQDJjODk1OTA4LTA0ZTAtNDk1Mi04OWZkLTU0YjAwNDZkNjI4OA",
              "descriptor": "s2s.MDAwMDAwMDItMDAwMC04ODg4LTgwMDAtMDAwMDAwMDAwMDAwQDJjODk1OTA4LTA0ZTAtNDk1Mi04OWZkLTU0YjAwNDZkNjI4OA"
          },
          "lastChangedDate": "2024-12-09T12:37:06.450Z",
          "lastChangedBy": {
              "displayName": "Microsoft.VisualStudio.Services.TFS",
              "url": "https://spsprodsbr2.vssps.visualstudio.com/A011d9297-3e6a-44cc-99c7-958d7690e3f8/_apis/Identities/00000002-0000-8888-8000-000000000000",
              "_links": {
                  "avatar": {
                      "href": "https://dev.azure.com/jonasbbernardi/_apis/GraphProfile/MemberAvatars/s2s.MDAwMDAwMDItMDAwMC04ODg4LTgwMDAtMDAwMDAwMDAwMDAwQDJjODk1OTA4LTA0ZTAtNDk1Mi04OWZkLTU0YjAwNDZkNjI4OA"
                  }
              },
              "id": "00000002-0000-8888-8000-000000000000",
              "uniqueName": "00000002-0000-8888-8000-000000000000@2c895908-04e0-4952-89fd-54b0046d6288",
              "imageUrl": "https://dev.azure.com/jonasbbernardi/_apis/GraphProfile/MemberAvatars/s2s.MDAwMDAwMDItMDAwMC04ODg4LTgwMDAtMDAwMDAwMDAwMDAwQDJjODk1OTA4LTA0ZTAtNDk1Mi04OWZkLTU0YjAwNDZkNjI4OA",
              "descriptor": "s2s.MDAwMDAwMDItMDAwMC04ODg4LTgwMDAtMDAwMDAwMDAwMDAwQDJjODk1OTA4LTA0ZTAtNDk1Mi04OWZkLTU0YjAwNDZkNjI4OA"
          },
          "orchestrationPlan": {
              "planId": "2fce1740-8e38-4f1c-b8bc-ca0f68b6d429"
          },
          "logs": {
              "id": 0,
              "type": "Container",
              "url": "https://dev.azure.com/jonasbbernardi/d11e6f6f-534c-41f5-9e0c-f443b4e45215/_apis/build/builds/3/logs"
          },
          "repository": {
              "id": "42010f88-2c8f-42dc-a4e6-a5c9988240fb",
              "type": "TfsGit",
              "name": "ExtensionTest",
              "url": "https://dev.azure.com/jonasbbernardi/ExtensionTest/_git/ExtensionTest",
              "clean": null,
              "checkoutSubmodules": false
          },
          "retainedByRelease": false,
          "triggeredByBuild": null,
          "appendCommitMessageToRunName": true
      }
  }
] as PagedList<unknown>;

const folders = [
  {
      "path": "\\",
      "createdOn": "2024-11-24T22:39:17.550Z",
      "project": {
          "id": "d11e6f6f-534c-41f5-9e0c-f443b4e45215",
          "name": "ExtensionTest",
          "url": "https://dev.azure.com/jonasbbernardi/_apis/projects/d11e6f6f-534c-41f5-9e0c-f443b4e45215",
          "state": 1,
          "revision": 11,
          "visibility": 0,
          "lastUpdateTime": "2024-12-08T16:31:46.170Z"
      }
  },
  {
      "path": "\\Parent",
      "createdOn": "2024-12-15T14:21:10.057Z",
      "createdBy": {
          "displayName": "Jonas Bernardi",
          "url": "https://spsprodsbr2.vssps.visualstudio.com/A011d9297-3e6a-44cc-99c7-958d7690e3f8/_apis/Identities/a1ecb4d4-85d0-4319-b776-1daa689b2b0c",
          "_links": {
              "avatar": {
                  "href": "https://dev.azure.com/jonasbbernardi/_apis/GraphProfile/MemberAvatars/msa.ZThjNTAyMjEtYTI3Ny03N2E2LWE2ODItMWU2Y2QzNjM5NTBm"
              }
          },
          "id": "a1ecb4d4-85d0-4319-b776-1daa689b2b0c",
          "uniqueName": "jonasbbernardi@gmail.com",
          "imageUrl": "https://dev.azure.com/jonasbbernardi/_apis/GraphProfile/MemberAvatars/msa.ZThjNTAyMjEtYTI3Ny03N2E2LWE2ODItMWU2Y2QzNjM5NTBm",
          "descriptor": "msa.ZThjNTAyMjEtYTI3Ny03N2E2LWE2ODItMWU2Y2QzNjM5NTBm"
      },
      "project": {
          "id": "d11e6f6f-534c-41f5-9e0c-f443b4e45215",
          "name": "ExtensionTest",
          "url": "https://dev.azure.com/jonasbbernardi/_apis/projects/d11e6f6f-534c-41f5-9e0c-f443b4e45215",
          "state": 1,
          "revision": 11,
          "visibility": 0,
          "lastUpdateTime": "2024-12-08T16:31:46.170Z"
      }
  },
  {
      "path": "\\Parent\\Child",
      "createdOn": "2024-12-15T14:21:17.730Z",
      "createdBy": {
          "displayName": "Jonas Bernardi",
          "url": "https://spsprodsbr2.vssps.visualstudio.com/A011d9297-3e6a-44cc-99c7-958d7690e3f8/_apis/Identities/a1ecb4d4-85d0-4319-b776-1daa689b2b0c",
          "_links": {
              "avatar": {
                  "href": "https://dev.azure.com/jonasbbernardi/_apis/GraphProfile/MemberAvatars/msa.ZThjNTAyMjEtYTI3Ny03N2E2LWE2ODItMWU2Y2QzNjM5NTBm"
              }
          },
          "id": "a1ecb4d4-85d0-4319-b776-1daa689b2b0c",
          "uniqueName": "jonasbbernardi@gmail.com",
          "imageUrl": "https://dev.azure.com/jonasbbernardi/_apis/GraphProfile/MemberAvatars/msa.ZThjNTAyMjEtYTI3Ny03N2E2LWE2ODItMWU2Y2QzNjM5NTBm",
          "descriptor": "msa.ZThjNTAyMjEtYTI3Ny03N2E2LWE2ODItMWU2Y2QzNjM5NTBm"
      },
      "project": {
          "id": "d11e6f6f-534c-41f5-9e0c-f443b4e45215",
          "name": "ExtensionTest",
          "url": "https://dev.azure.com/jonasbbernardi/_apis/projects/d11e6f6f-534c-41f5-9e0c-f443b4e45215",
          "state": 1,
          "revision": 11,
          "visibility": 0,
          "lastUpdateTime": "2024-12-08T16:31:46.170Z"
      }
  },
  {
      "path": "\\Test",
      "createdOn": "2024-12-15T14:16:35.427Z",
      "createdBy": {
          "displayName": "Jonas Bernardi",
          "url": "https://spsprodsbr2.vssps.visualstudio.com/A011d9297-3e6a-44cc-99c7-958d7690e3f8/_apis/Identities/a1ecb4d4-85d0-4319-b776-1daa689b2b0c",
          "_links": {
              "avatar": {
                  "href": "https://dev.azure.com/jonasbbernardi/_apis/GraphProfile/MemberAvatars/msa.ZThjNTAyMjEtYTI3Ny03N2E2LWE2ODItMWU2Y2QzNjM5NTBm"
              }
          },
          "id": "a1ecb4d4-85d0-4319-b776-1daa689b2b0c",
          "uniqueName": "jonasbbernardi@gmail.com",
          "imageUrl": "https://dev.azure.com/jonasbbernardi/_apis/GraphProfile/MemberAvatars/msa.ZThjNTAyMjEtYTI3Ny03N2E2LWE2ODItMWU2Y2QzNjM5NTBm",
          "descriptor": "msa.ZThjNTAyMjEtYTI3Ny03N2E2LWE2ODItMWU2Y2QzNjM5NTBm"
      },
      "project": {
          "id": "d11e6f6f-534c-41f5-9e0c-f443b4e45215",
          "name": "ExtensionTest",
          "url": "https://dev.azure.com/jonasbbernardi/_apis/projects/d11e6f6f-534c-41f5-9e0c-f443b4e45215",
          "state": 1,
          "revision": 11,
          "visibility": 0,
          "lastUpdateTime": "2024-12-08T16:31:46.170Z"
      }
  }
] as PagedList<object>;

export const listBuilds = (path: string = '\\') => builds;
export const listFolders = (path: string = '\\') => folders
    .filter((folder: Folder) => {
      if(folder.path == path) return false;
      return folder.path.split(path).length == 2;
    }).map((f:Folder) => {
      return {
        ...f,
        name: f.path.replace('\\','')
      }
    });