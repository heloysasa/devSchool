import {BrowserRouter, Switch, Route} from 'react-router-dom'


import ConteuAlu from "./pages/index";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={ConteuAlu} />
      </Switch>
    </BrowserRouter>
  );
}
