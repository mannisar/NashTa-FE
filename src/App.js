import { React, BrowserRouter as Router, Route, Provider } from './libraries';
import { appRoutes } from './routes';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        {appRoutes.map(route => <Route key={route.name} {...route} />)}
      </Router>
    </Provider>
  )
}

export default App;