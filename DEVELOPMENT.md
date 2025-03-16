
# Introduction

Dashboard for Azure DevOps Pipelines.

# Setup

```bash
# First time setup for any DevOps extension project
npm i azure-devops-extension-api azure-devops-extension-sdk azure-devops-ui
npm i file-loader mini-css-extract-plugin
npm i react@16 react-dom@16
npm i --save-dev @types/react @types/react-dom
npm i --save-dev css-loader html-webpack-plugin style-loader ts-loader typescript
npm i --save-dev webpack webpack-cli webpack-dev-server
```

# Run

```bash
# Install dependencies
npm install
# Webpack build files
npm run build
# Start webpack server
npm run start
```

# Cache

To clear npm cache after install, run:

```bash
rm -rf node_modules
rm package-lock.json
npm cache clean --force
```

# References

Github:
<https://github.com/jonasbbernardi/az-devops-pipeline-dashboard>

Extension manifest:
<https://learn.microsoft.com/en-us/azure/devops/extend/develop/manifest>

Fabric Icons:
<https://uifabricicons.azurewebsites.net/>

Javascript api documentation:
<https://learn.microsoft.com/en-us/javascript/api/azure-devops-extension-api>

Azure devops ui guide:
<https://developer.microsoft.com/en-us/azure-devops/>

Icon draw:
<https://canva.com>