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
import ToDoCatalogForm from "./components/ToDoCatalogForm";
import ToDoCatelog from "./components/ToDoCatelog";
// import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import ToDoApp from "./components/ToDoApp"; 
// import TodoApp from "./components/ToDoAppp";
// Bring in your custom components.. Notice how some components are
// organized within `pages` and other components are organized within
// `components`.  It is up to you to determine what organization makes 
// sense.
import Books from "./pages/Books";
import Courses from "./pages/Courses";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import "./General.css";



const App = () =>
  <Router>
    <div>
      <Nav/>

      <div className="title-div">
        <h1>React Todo List √</h1>
      </div>

{/*<ToDoCatalogForm onFormSubmit = {this.AddCatalog} /> */}

{/*/} <ToDoCatalog /> */}
    <ToDoApp />


     
      
     
    </div>
  </Router>;

export default App;
