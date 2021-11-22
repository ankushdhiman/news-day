import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import LogoutPage from './pages/logout';
import BoardsPage from './pages/boards';
import BoardsOverviewPage from './pages/board-overview';
import Authorize from './components/Authorize';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/board/:boardId'>
          <Authorize>
            <BoardsOverviewPage/>
          </Authorize>
        </Route>
        <Route path='/news/:newsId'>
          <Authorize>
            <BoardsPage/>
          </Authorize>
        </Route>
        <Route path='/boards'>
          <Authorize>
            <BoardsPage/>
          </Authorize>
        </Route>
        <Route path='/login'>
          <LoginPage/>
        </Route>
        <Route path='/logout'>
          <LogoutPage/>
        </Route>
        <Route path={['/', '/home']}>
          <HomePage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
