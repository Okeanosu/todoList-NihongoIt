import logo from './logo.svg';
import './App.scss';
import Home from './example/Home'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Nav from './Navbar/NavBar';
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';
import Todolist from './Todolist/Todolist'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          
          
          <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/todos">
                <Todolist/>
            </Route>
            
          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
