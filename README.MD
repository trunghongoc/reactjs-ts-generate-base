# Generating basic reactjs source code

- This package was based on create-react-app package, it will generate the simple code base that contains:
  - redux toolkits
  - react router
  - dynamic layout
  - dynamic env
  - config axios
  - some useful hooks, helpers function
  - ...

# Install this package as global

```
npm i -g generate-react-ts-code-base

// or

yarn global add generate-react-ts-code-base
```

# Install this package inside an exist reactjs project

```
npm i -s generate-react-ts-code-base

// or

yarn add generate-react-ts-code-base
```

# Usuage

1. Create reactjs type script from nothing

```bash
npx generate-react-ts-code-base [option]

// or

yarn run generate-react-ts-code-base [option]
```

For example:

```bash
npx generate-react-ts-code-base --name=my-react-app
```

2. Add the code base to an exist react app

- Move to your root react app
- Run this command bellow

```bash
npx generate-react-ts-code-base [option]
```

For example:

```bash
npx generate-react-ts-code-base --name=my-react-app --is-exist-app
```

# Options

[--name=<project name>] [--is-exist-app]

- `--name`: Name of the project you want to create
- `--is-exist-app`: don't create new app, just add some files or lines to your source code

# Change/Update env

- Change localhost to your domain at `./public/env`
  ![env folder](./img-docs/public__env.png 'Change localhost to your domain')
- Use command to run a specific env
  ![env folder](./img-docs/package.json_change-env.png 'Use command to run a specific env')

# Model & API

- Write API request or all your models in `services` folder
  ![services](./img-docs/services_user.png 'Write API request or all your models in services folder')

# src/router

- Config router (`./src/router`)
  ![router](./img-docs/router-config.png './src/router')

# src/layouts

- Currently we have 3 layout demo at `./src/layouts`

# src/pages

- Define page component
