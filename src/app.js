import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { configure } from 'mobx';
import './app.css';
import Home from './pages/home';
import About from './pages/about';
import Demo from './pages/demo';
import { DemoState } from './parts/demo-state';

configure({
  enforceActions: 'never',
});
function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
        <Route
          path="/demo"
          render={(props) => {
            return (
              <DemoState>
                <Demo {...props} />
              </DemoState>
            );
          }}
        />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

const WrappedApp = withRouter(App);

export default () => {
  // While the blocklet is deploy to a sub path, this will be work properly.
  const basename = window?.blocklet?.prefix || '/';

  return (
    <Router basename={basename}>
      <WrappedApp />
    </Router>
  );
};
