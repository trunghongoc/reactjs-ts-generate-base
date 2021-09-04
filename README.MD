# Generating basic reactjs source code

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

## Install this package

```bash
npm i --save-dev generate-react-ts-code-base
```

## create common folder

cd to root project then
run

```bash
bash ./node_modules/generate-react-ts-code-base/main.sh
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
<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <App />
  </PersistGate>
</Provider>
// ...
```

## Edit src/App.tsx to apply router

```tsx
import { BrowserRouter as Router } from 'react-router-dom'
import { Layout } from 'layouts/index'

// ...
return (
  <Router>
    <Layout />
  </Router>
)
// ...
```
