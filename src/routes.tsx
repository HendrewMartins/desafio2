import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Carrinho from './pages/Carrinho';
import Cliente from './pages/Cliente'

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/carrinho" component={Carrinho} />
      <Route path="/cliente" component={Cliente} />
    </Switch>
  );
};

export default Routes;
