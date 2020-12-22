import React from "react";
import logo from './logo.svg';
import './App.css';
import { Card, Col, Row } from 'antd';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import {BandA} from "./Pages/BillandHelen"
import {Brian} from "./Pages/Brian"
import { Homepage } from "./Pages/Homepage";

export default function App() {
  return (
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/my-app">
              <Home />
            </Route>
            <Route exact path="/my-app/first">
              <First />
            </Route>
            <Route exact path="/my-app/brian">
              <BrianPage />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

function First() {
  return <BandA />;
}

function Home() {
  return <Homepage />;
}

function BrianPage() {
  return <Brian />;
}

function ReactDefault() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}
