import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as components from './components';

function App() {
  return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={components.Main} />
            <Route exact path="/H0zzae" component={components.H0zzae} />
            <Route exact path="/H0zzae/Header" component={components.H0zzaeHeader} />
          </Switch>
        </BrowserRouter>
      </>
  );
}

export default App;
