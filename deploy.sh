rm -rf dist/*

npm run build

npm version patch --no-git-tag-version

VERSION=$(node -e "let a=require('./package.json').version;console.log(a)")
SCRIPT_FILE="deploy.js"
touch $SCRIPT_FILE
echo "var fs=require('fs')"                         > $SCRIPT_FILE
echo "const vssExt=require('./vss-extension.json')" >> $SCRIPT_FILE
echo "vssExt.version='$VERSION'"                    >> $SCRIPT_FILE
echo "const vssExtStr=JSON.stringify(vssExt)"       >> $SCRIPT_FILE
echo "fs.writeFile('vss-extension.json',vssExtStr,'utf-8',()=>{})" >> $SCRIPT_FILE
node $SCRIPT_FILE
rm $SCRIPT_FILE

rm JonasBBernardi.az-devops-pipeline-dashboard-*.vsix

npx tfx-cli extension create
