/**
 * Description:
 * This is your main entry point to the React App (front-end app)
 *
 * Remember that for most purposes, it the App.js file and the components
 * that it brings in is what you'd need to focus on when developing your application.
 * Also, remember that the `utils` directory contains the Axios setup to make HTTP
 * requests.
 */

// Bring in the React objects
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Bring in your custom components.. Notice how some components are
// organized within `pages` and other components are organized within
// `components`.  It is up to you to determine what organization makes 
// sense.
import Books from "./pages/Books";
import Courses from "./pages/Courses";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <div className="testing-div">
        <h1>This is the header.</h1>
      </div>
      <div className="testing-div">
        <h1>This is the content.</h1>
      </div>
      <div className="testing-div">
        <h1>This is the footer.</h1>
      </div>
      <Nav />
      
      {
        // This is where React Router will match the path.  If a path is
        // matched, the associated component will be rendered.
        // For example, if "/books" is matched, the Books component will
        // be rendered.
      }
      <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/games" component={Books} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/books/:id" component={Detail} />
        {
          // If no match, render the NoMatch component
        }
        <Route component={NoMatch} />
      </Switch>

    </div>
  </Router>;

export default App;
