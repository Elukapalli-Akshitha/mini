import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm/index'
import Home from './components/Home/index'
import ProtectedRoute from './components/ProtectedRoute/index'
import Assessment from './components/Assessment/index'
import NotFound from './components/NotFound/index'
import './App.css'

// write your code here
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/assessment" component={Assessment} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
