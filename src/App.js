import Menu from './components/Menu/Menu';
import Welcome from './components/Welcome/Welcome';

import { Switch, Route, Redirect } from 'react-router-dom';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/blog" component={Blog} />

        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
