
import './App.css';
import Header from './component/Header'
import Login from './component/Login'
import SignUp from './component/SignUp'
import {Route} from 'react-router-dom'
// comentario
function App() {
  return (
    <>
    <Header/>
    <Route path="/login" component={Login} />
    <Route path="/signup" render={() => <SignUp titulo='SignUp component 235'/>}/>
    </>
  )
}

export default App;
