import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Dashboard from '../pages/Dashboard/index';

// import Repository from '../pages/Repository/index';

const Routes: React.FC = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/dashboard" exact component={Dashboard} />

        {/* When you have a parem taht includes "/", for to be
      understended as part of tes, we can use "+" in the final of string */}
      </Switch>
    </BrowserRouter>
  </>
);

export default Routes;
