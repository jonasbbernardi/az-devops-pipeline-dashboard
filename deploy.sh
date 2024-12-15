rm -rf dist/*

npm version patch --no-git-tag-version

npm run build

npx tfx-cli extension publish \
  --publisher JonasBBernardi \
  --manifest-js './extension.config.js' \
  --token $AZDO_PERSONAL_ACCESS_TOKEN \
  --no-wait-validation

PUBLISHED_AT=$(date '+%T.%3N')
echo "Published at: $PUBLISHED_AT"

# Verify status
VERSION=$(node -e "let a=require('./package.json').version;console.log(a)");
tfx extension isvalid \
  --publisher JonasBBernardi \
  --extension-id az-devops-pipeline-dashboard \
  --version $VERSION \
  --service-url https://marketplace.visualstudio.com/ \
  --token $AZDO_PERSONAL_ACCESS_TOKEN

rm JonasBBernardi.az-devops-pipeline-dashboard-*.vsix

# Create to deploy manual
# npx tfx-cli extension create --manifest-js './extension.config.js'
