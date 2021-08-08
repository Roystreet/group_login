
import './App.css';
import Login from './component/Login'
import SignUp from './component/SignUp'
import { Route } from 'react-router-dom'
import { Home } from './component/home/Home';
// comentario
function App() {
  return (
    <>
      <Route exact path='/' component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" render={() => <SignUp titulo='SignUp component 235' />} />
    </>
  )
}

export default App;
