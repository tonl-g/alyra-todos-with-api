import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import TodosApp from "./pages/TodosApp"
import Forms from "./pages/Forms"


function App() {
  return (
  <Router>
    <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">TodosApp</Link>
            </li>
            <li>
              <Link to="/users">Forms</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/">
            <Home />
          </Route>
          <Route path="/todosapp">
            <TodosApp />
          </Route>
          <Route path="/forms">
            <Forms />
          </Route>\
        </Switch>
        </div>
  </Router>
  )
}

function Home() {
  return <h2>Home</h2>;
}

export default App

