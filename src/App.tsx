import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login'>
          <HomePage/>
        </Route>
        <Route path='/dashboard'>
          <HomePage/>
        </Route>
        <Route path={['/', '/home']}>
          <HomePage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
