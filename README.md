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

Nous n'avons pas besoin d'un fichier .css global. Nous allons supprimer le fichier `App.css` et nous ne l'importons pas.
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

Nous avons besoin des components à inclure : `<Todos />`, `<Todo />` et `<AddToDoForm />`

Nous allons placer tous les components dans un nouveau dossier `components`.

```bash
mkdir src/components
```

Voici la structure que nous allons créer :

```bash
src
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
// src/components/Todos.js
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
// src/components/Todo.js
import React from "react"

const Todo = () => {
  return null
}

export default Todo
```

```javascript
// src/components/AddTodoForm.js
import React from "react"

const AddTodoForm = () => {
  return null
}

export default AddTodoForm
```

et notre `App.js`

```javascript
// src/App.js
import React from "react"
import Todos from "./components/Todos"

function App() {
  return (
    <div className="container my-4">
      <h1 className="text-center">ToDos App</h1>
      <Todos />
    </div>
  )
}

export default App
```

## Todos.js

- Avec `import React, { useState } from "react"` nous importons `useState` directement donc nous n'avons plus besoin d'utiliser `React.useState`.
- `uuid` est un _named import_, et nous allons utiliser `uuid` au lieu de `uuidv4`

```javascript
// src/components/Todos.js
import React, { useState } from "react"
import Todo from "./Todo"
import AddTodoForm from "./AddTodoForm"
import { uuid } from "uuidv4"

const Todos = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([...todos, { text: todo, isCompleted: false, id: uuid() }])
  }
  const toggleCompleteTodo = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          item.isCompleted = !item.isCompleted
        }
        return item
      })
    )
  }
  const deleteTodo = (todo) => {
    setTodos(
      todos.filter((item) => {
        return item.id !== todo.id
      })
    )
  }
  const completedCount = todos.filter((el) => el.isCompleted).length
  return (
    <>
      <h2 className="text-center">
        Ma liste de tâches ({completedCount} / {todos.length})
      </h2>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            handleCompleteClick={toggleCompleteTodo}
            handleDeleteClick={deleteTodo}
          />
        )
      })}
      <AddTodoForm handler={addTodo} />
    </>
  )
}

export default Todos
```

## Todo

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
