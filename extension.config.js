module.exports = (env) => {
  const manifest = {
    manifestVersion: 1,
    id: "az-devops-pipeline-dashboard",
    version: require('./package.json').version,
    name: "Pipeline Dashboard for Azure Devops (for yml users)",
    publisher: "JonasBBernardi",
    galleryFlags: [
      "Public",
      "Preview"
    ],
    categories: [
      "Azure Pipelines"
    ],
    targets: [
      {
        id: "Microsoft.VisualStudio.Services"
      }
    ],
    demands: [
      "api-version/3.0"
    ],
    icons: {
      "default": "assets/icon.png"
    },
    iconName: "ProductionFloorManagement",
    files: [
      {
        path: "dist/index.html",
        addressable: true,
        contentType: "text/html"
      },
      {
        path: "dist/index.js",
        addressable: true,
        contentType: "text/javascript"
      },
      {
        path: "dist/main.css",
        addressable: true,
        contentType: "text/css"
      },
      {
        path: "dist/fonts/AzDevMDL2.woff",
        addressable: true,
        contentType: "font/woff"
      },
      {
        path: "dist/fonts/fluent-filled-v1.1.201.woff2",
        addressable: true,
        contentType: "font/woff2"
      },
      {
        path: "dist/fonts/fluent-regular-v1.1.201.woff2",
        addressable: true,
        contentType: "font/woff2"
      }
    ],
    repository: {
      type: "git",
      uri: "https://github.com/jonasbbernardi/az-devops-pipeline-dashboard"
    },
    content: {
      details: {
        path: "README.md"
      },
      license: {
        path: "LICENSE"
      }
    },
    contributions: [
      {
        id: "JonasB.AzDevOpsPipelineDashboard",
        type: "ms.vss-web.hub",
        description: "Add link to a dashboard to manage pipelines as releases menu do.",
        targets: [
          "ms.vss-build-web.build-release-hub-group"
        ],
        properties: {
          name: "Pipelines Dashboard",
          order: 90,
          uri: "dist/index.html"
        }
      }
    ],
    scopes: [
      "vso.build",
      "vso.build_execute",
      "vso.code",
      "vso.code_status",
      "vso.graph",
      "vso.hooks",
      "vso.packaging",
      "vso.pipelineresources_use",
      "vso.project",
      "vso.serviceendpoint"
    ],
    tags: [
      "pipeline",
      "pipelines",
      "dashboard",
      "release",
      "ci/cd",
      "ci",
      "cd",
      "view",
      "visualize",
      "run",
      "runs"
    ]
  }
  return manifest;
}