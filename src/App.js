import { Route } from 'react-router-dom'
import { Login } from './component/login/Login'
import { SignUp } from './component/signup/SignUp'
import { Home } from './component/home/Home';
import './app.css'

export function App() {
  return (
    <>
      <Route exact path='/' component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </>
  )
}