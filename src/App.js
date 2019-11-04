import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as components from './components';

function App() {
  return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={components.Main} />
            <Route exact path="/login" component={components.Login} />
          </Switch>
        </BrowserRouter>
      </>
  );
}

export default App;
