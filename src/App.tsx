import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import Authorize from './components/Authorize';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login'>
          <LoginPage/>
        </Route>
        <Route path='/dashboard'>
          <Authorize>
            <HomePage/>
          </Authorize>
        </Route>
        <Route path={['/', '/home']}>
          <HomePage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
