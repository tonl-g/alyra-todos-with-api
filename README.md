# Todos App - premiers pas avec create-react-app

## Step -1 - installation de yarn

```bash
npm install -g yarn
```

## Step 0

```bash
npx create-react-app todos-app
cd todos-app
```

## Step 1 - src/index.js

`index.js` et le fichier de départ de notre application. Nous allons supprimer le contenu du fichier `src/index.css` et inclure bootstrap5 à la place

Nous allons s'abord installer bootstrap5 dans notre projet

```bash
yarn add bootstrap@next
```

Suite à l'installation, nous allons trouver le dossier `bootstrap` dans `node_modules`. Nous allons importer le fichier `node_modules/bootstrap/dist/css/bootstrap.css`.

```javascript
// src/index.js

import React from "react"
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.css"
import App from "./App"
// ... rien ne change ensuite
```

## Step 2 public/index.html

Le fichier HTML qui contient l'élément `<div id="root"></div>` de notre application se trouve dans le répértoire `public`.

C'est dans le fichier `public/index.html` où nous devons modifier l'attribut lang, title et des attributs meta.

## Step 3 - App.js et App.css

Nous n'avons pas besoin d'un fichier .css global. Nous allons supprimer le contenu du fichier `App.css` et nous ne l'importons pas.
À la fin de cette étape notre app devrait afficher le titre ToDosApp

```javascript
/* src/App.js */
import React from "react"

function App() {
  return (
    <div className="container my-4">
      <h1 className="text-center">ToDos App</h1>
    </div>
  )
}

export default App
```

## Step 4 components folder

Nous avons besoin des components à inclure dans `App`: `<Todos />`, `<Todo />` et `<AddToDoForm />`

Nous allons placer tous les components dans un nouveau dossier `components`. Voici la structure que nous allons créer :

```bash
src
├── App.css
├── App.js
├── App.test.js
├── components
│   ├── AddTodoForm.js
│   ├── Todo.js
│   └── Todos.js
├── index.css
├── index.js
├── serviceWorker.js
└── setupTests.js
```

## Step 5 Nos components et leurs dépendences

`Todos` utilise :  
 `Todo`  
 `AddTodoForm`  
ainsi que la bibliothèque externe uuid, que nous devons installer

```bash
yarn add uuidv4
```

```javascript
// Todos.js
import React, { useState } from "react"
import Todo from "./Todo"
import AddTodoForm from "./AddTodoForm"
import { uuid } from "uuidv4"

const Todos = () => {
  return null
}

export default Todos
```

```javascript
// Todo.js
import React from "react"

const Todo = () => {
  return null
}

export default Todo
```

```javascript
// AddTodoForm.js
import React from "react"

const AddTodoForm = () => {
  return null
}

export default AddTodoForm
```

## Step 6 Décomposer Weather en plus de composants

Voici la structure des fichiers (c'est juste une possibilité)

```bash
src
├── App.css
├── App.js
├── components
│   ├── CityForm
│   │   └── index.js
│   └── Weather
│       ├── Description.js
│       ├── Humidity.js
│       ├── Icon.js
│       ├── Temperature.js
│       ├── humidity.css
│       └── index.js
├── index.css
├── index.js
├── logo.svg
├── serviceWorker.js
└── setupTests.js
```

Notre compenent `Weather` devient

```javascript
// src/components/Weather/index.js

import React, { useState, useEffect } from "react"
import Icon from "./Icon"
import Description from "./Description"
import Temperature from "./Temperature"
import Humidity from "./Humidity"

const Weather = ({ city }) => {
  // comme avant
  return (
    <>
      {!!location && (
        <section className="text-center">
          <Icon iconID={iconID} />
          <h2 className="mb-4">Conditions météo à {location}</h2>
          <Description description={description} />
          <Temperature mainTemp={mainTemp} feelsLike={feelsLike} />
          <Humidity humidity={humidity} />
        </section>
      )}
    </>
  )
}

export default Weather
```

Dans nos directives d'import, mous n'avons pas besoin de spécifier l'extenstion `.js`, par exemple `./Descrition.js` peut être remplacer par `./Descrition`

Regardons par exemple `Humidity`

```javascript
// src/components/Weather/Humidity.js
import React from "react"
import "./humidity.css"

const Humidity = ({ humidity }) => {
  return (
    <>
      <p>
        <b>humidité</b> {humidity}%
      </p>
      <div
        className="humidity"
        style={{ backgroundSize: `${humidity}% auto` }}
      />
    </>
  )
}

export default Humidity
```

Le fichier `src/components/Weather/humidity.css` contient les style pour le selecteur `.humidity`.

Il reste alors à ajouter `Temperature`, `Icon` et `Description` 🙂

## Step 7 Importer Weather dans App

```javascript
/* src/App.js */
import React, { useState } from "react"
import Weather from "./components/Weather"

function App() {
  const [city, setCity] = useState("Paris")
  return (
    <div className="container my-4">
      <h1 className="display-3 text-center mb-4">Météo Actuelle</h1>
      <Weather city={city} />
    </div>
  )
}

export default App
```

**Attention** Ici, nous mettons `import Weather from "./components/Weather"`. Si `./components/Weather.js` n'est pas trouvé, `./components/Weather/index.js` va être cherché.

## Step 8 CityForm Component

```javascript
// src/components/CityForm/index.js
import React from "react"

const CityForm = ({ handler }) => {
  const submitHandler = (e) => {
    e.preventDefault()
    handler(e.target.elements.city.value)
    e.target.reset()
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="input-group mb-2">
        <label className="input-group-text" htmlFor="city">
          Choisissez une ville
        </label>
        <input className="form-control" id="city" required />
      </div>
    </form>
  )
}

export default CityForm
```

et nous allons l'importer dans `App.js` comme ceci :

```javascript
/* src/App.js */
import React, { useState } from "react"
import CityForm from "./components/CityForm"
import Weather from "./components/Weather"

function App() {
  const [city, setCity] = useState("Paris")
  return (
    <div className="container my-4">
      <h1 className="display-3 text-center mb-4">Météo Actuelle</h1>
      <CityForm handler={setCity} />
      <Weather city={city} />
    </div>
  )
}

export default App
```

## Step 9 useWeather hook

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
