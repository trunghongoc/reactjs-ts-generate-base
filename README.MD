# Generating basic reactjs source code

![router](./img-docs/banner.jpeg 'generate-react-ts-code-base')

- This package was based on `create-react-app` package, it will generate the simple code base that contains:

  - redux toolkits
  - react router
  - dynamic layout
  - dynamic env
  - config axios
  - some useful hooks, helpers function
  - scoped style (SCSS, CSS)
  - ...

- next feature
  - Command
    - generate:
      - router
      - page
      - component
      - thunk
      - saga
      - env
      - ...

# Install this package as global

```
npm i -g generate-react-ts-code-base

// or

yarn global add generate-react-ts-code-base
```

# Or install this package inside an exist reactjs project

```
npm i -s generate-react-ts-code-base

// or

yarn add generate-react-ts-code-base
```

# Usuage

## Create reactjs typescript project from zero (initial new react ts app)

- Step 0: (prerequire)
  - `create-react-app` must installed before
  - this package (`generate-react-ts-code-base`) must installed as global
- Step 1: move to any where you wanna create new react ts app
- Step 2: press this command bellow

```bash
npx generate-react-ts-code-base

// or

npx ahihi

// or

yarn run generate-react-ts-code-base

// or
yarn run ahihi
```

- `ahihi` is an alias of `generate-react-ts-code-base`

For example:

```bash
cd ~/Desktop
npx generate-react-ts-code-base

// or

cd ~/Desktop
npx ahihi
```

## Add the code base and some configs to your exist react typescript app (this package only work in react typescript app)

- Step 1: Move to your root react app
- Step 2: Run this command bellow

```bash
npx generate-react-ts-code-base

// or

npx ahihi
```

For example:

```bash
cd ~/Desktop/my-react-ts-app
npx generate-react-ts-code-base

// or

cd ~/Desktop/my-react-ts-app
npx ahihi
```

# Create scoped scss

- Write your css in a file ends with .scoped.scss (`scss` & `css` are also supported)
- For example: `style.scoped.scss` or `style.scoped.css`, ...

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
