#!/bin/bash


# create build folder
# chmod -R 777 ./
# mkdir -p .//public
# mkdir -p .//.husky
# mkdir -p .//public/env
# mkdir -p .//public/src

# install necessary package
(npm i -s axios @reduxjs/toolkit uuid redux react-redux redux-persist redux-persist/lib/storage react-router-dom lodash)
(npm i --save-dev env-cmd husky @types/uuid @types/lodash @types/react-router-dom lint-staged node-sass prettier pretty-quick)

if [ -f ".//package.json" ]; then
  (npm run prepare)
fi


# copy all necessar folders to build
(cd ./node_modules/generate-react-ts-code-base && cp -R ./.vscode ./../../)
(cd ./node_modules/generate-react-ts-code-base && ccp -R ./.husky ./../../)
(cd ./node_modules/generate-react-ts-code-base && ccp -R ./env ./../../public
(cd ./node_modules/generate-react-ts-code-base && ccp -R ./src ./../../)
(cd ./node_modules/generate-react-ts-code-base && ccp ./.editorconfig ./../../)
(cd ./node_modules/generate-react-ts-code-base && ccp ./.env.development ./../../)
(cd ./node_modules/generate-react-ts-code-base && ccp ./.env.production ./../../)
(cd ./node_modules/generate-react-ts-code-base && ccp ./.env.testing ./../../)
(cd ./node_modules/generate-react-ts-code-base && ccp ./.env.uat ./../../)
(cd ./node_modules/generate-react-ts-code-base && ccp ./.prettierignore ./../../)
(cd ./node_modules/generate-react-ts-code-base && ccp ./.prettierrc ./../../)



