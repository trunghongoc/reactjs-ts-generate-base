# Generating basic reactjs source code

- This package will generate the simple code base that contains:
  - redux toolkits
  - react router dom
  - dynamic layout
  - dynamic env
  - config axios
  - some useful hooks, helpers function
  - ...

## Create react ts app

```ts
npx create-react-app my-app --template typescript

// or

yarn create react-app my-app --template typescript
```

then add this code lines bellow into your `package.json` file

```
"scripts": {
  "start": "react-scripts start",
  "start:dev": "env-cmd -f .env.development npm start",
  "start:testing": "env-cmd -f .env.testing npm start",
  "start:prod": "env-cmd -f .env.production npm start",
  "build": "react-scripts build",
  "build:dev": "env-cmd -f .env.development npm run build",
  "build:testing": "env-cmd -f .env.testing npm run build",
  "build:prod": "env-cmd -f .env.production npm run build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "lint:ts": "tslint 'src/**/*.{ts,tsx,js}'",
  "prepare": "husky install"
}
```

## Config tslint

Add these option to `./tsconfig.json`

```
{
  "compilerOptions": {
    // ...
    "baseUrl": "./src",
    // ...
  }
}
```

## Install this package

```bash
npm i --save-dev generate-react-ts-code-base
```

## create common folder

cd to root project then
run

```bash
bash ./node_modules/generate-react-ts-code-base/app.sh
```

## Edit src/index.js to appy redux-persist

```tsx
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import store from './redux/store'
import { Provider } from 'react-redux'

import App from './App'

const persistor: any = persistStore(store)

// ...
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
// ...
```

## Edit src/App.tsx to apply router

```tsx
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Layout } from 'layouts/index'
import { BackgroundTasks } from 'components/BackgroundTasks'

function App() {
  return (
    <Router>
      <Link to="/">Go Home</Link> / <Link to="/login">Go to Login</Link> /
      <Link to="/about">Go to About</Link>
      <BackgroundTasks />
      <Layout />
      <div
        style={{
          padding: 10,
          boxSizing: 'border-box',
          border: '1px solid #ccc'
        }}
      >
        Inspect element to see layout per page was changed
      </div>
    </Router>
  )
}

export default App
```

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
