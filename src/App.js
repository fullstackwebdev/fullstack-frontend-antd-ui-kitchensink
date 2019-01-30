import React, { Component } from 'react';
import AntUILive from './containers/AntUILive';
import Login from './containers/Login';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";



class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
         {/* <Route exact path="/" component={Layout4} /> */}
         <Route exact path="/" component={Login} />
         <Route path="/app" component={AntUILive} />
         </Switch>
      </Router>
    );
  }
}

export default App;

/*
$ yarn add react-app-rewired customize-cra

// package.json 
"scripts": {
  -   "start": "react-scripts start",
  +   "start": "react-app-rewired start",
  -   "build": "react-scripts build",
  +   "build": "react-app-rewired build",
  -   "test": "react-scripts test",
  +   "test": "react-app-rewired test",
  }

  config-overrides.js
  module.exports = function override(config, env) {
    // do stuff with the webpack config...
    return config;
  };

+ const { override, fixBabelImports } = require('customize-cra');

- module.exports = function override(config, env) {
-   // do stuff with the webpack config...
-   return config;
- };
+ module.exports = override(
+   fixBabelImports('import', {
+     libraryName: 'antd',
+     libraryDirectory: 'es',
+     style: 'css',
+   }),
+ );

*/