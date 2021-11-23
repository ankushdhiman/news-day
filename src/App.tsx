import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import LogoutPage from './pages/logout';
import BoardsPage from './pages/boards';
import BoardOverview from './pages/board-overview';
import NewsCreate from './pages/news/create';
import NewsUpdate from './pages/news/update';
import Authorize from './components/Authorize';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/news/:newsId'>
          <Authorize>
            <NewsUpdate/>
          </Authorize>
        </Route>
        <Route path='/board/:boardId/create-news'>
          <Authorize>
            <NewsCreate/>
          </Authorize>
        </Route>
        <Route path='/board/:boardId'>
          <Authorize>
            <BoardOverview/>
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
