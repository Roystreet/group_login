import { Route } from 'react-router-dom'
import { Login } from './component/login/Login'
import { SignUp } from './component/singup/SignUp'
import { Home } from './component/home/Home';
// comentario
export function App() {
  return (
    <>
      <Route exact path='/' component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" render={() => <SignUp titulo='SignUp component 235' />} />
    </>
  )
}