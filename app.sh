#!/bin/bash

GREEN_COLOR='\033[0;32m'
NO_COLOR='\033[0m' # No Color
ABSOLUTE_PATH="$PWD"
# generate-react-ts-code-base
# PACKAGE_NAME="@abcd"
PACKAGE_NAME="generate-react-ts-code-base"
BASE_PACKAGE_PATH="$ABSOLUTE_PATH/node_modules/$PACKAGE_NAME"
TARGET_PATH="$ABSOLUTE_PATH"

# echo "ABSOLUTE_PATH=$ABSOLUTE_PATH"
# echo "BASE_PACKAGE_PATH=$BASE_PACKAGE_PATH"
# echo "TARGET_PATH=$TARGET_PATH"


# install necessary package
echo -e "${GREEN_COLOR}Installing necessary package ...${NO_COLOR}"
npm i -g husky
npm i -s axios @reduxjs/toolkit uuid redux react-redux redux-persist redux-persist/lib/storage react-router-dom lodash
npm i --save-dev env-cmd @types/uuid @types/lodash @types/react-router-dom lint-staged node-sass prettier pretty-quick

if [ -f "$TARGET_PATH/package.json" ]; then
  (npm run prepare)
fi


# copy all necessaries folders to build
# if [ -f $BASE_PACKAGE_PATH ]; then
  echo -e "${GREEN_COLOR}Generate files & folers ...${NO_COLOR}"

  cp -R "$BASE_PACKAGE_PATH/.vscode" $TARGET_PATH
  cp -R "$BASE_PACKAGE_PATH/.husky" $TARGET_PATH
  cp -R "$BASE_PACKAGE_PATH/env" "$TARGET_PATH/public"
  cp -R "$BASE_PACKAGE_PATH/src" "$TARGET_PATH"
  cp "$BASE_PACKAGE_PATH/.editorconfig" "$TARGET_PATH"
  cp "$BASE_PACKAGE_PATH/.env.development" "$TARGET_PATH"
  cp "$BASE_PACKAGE_PATH/.env.production" "$TARGET_PATH"
  cp "$BASE_PACKAGE_PATH/.env.testing" "$TARGET_PATH"
  cp "$BASE_PACKAGE_PATH/.env.uat" "$TARGET_PATH"
  cp "$BASE_PACKAGE_PATH/.prettierignore" "$TARGET_PATH"
  cp "$BASE_PACKAGE_PATH/.prettierrc" "$TARGET_PATH"
# fi

echo -e "${GREEN_COLOR}❤️❤️❤️ DONE ❤️❤️❤️${NO_COLOR}"
echo -e "${GREEN_COLOR}Pls rate 1 star to https://github.com/trunghongoc/reactjs-ts-generate-base if it useful for you${NO_COLOR}"
