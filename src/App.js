import logo from './logo.svg';
import './App.css';

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';


function App() {
  const router = createBrowserRouter([
    {
    path : '/',
    element: <div>HomePage</div>
    },
    {

      path : '/login',
    element: <Login></Login>

    },

{
  path : '/register',
  element: <Register></Register>
},

{
  path : '/home',
  element: <Home></Home>
}


  ])
  return (
   <>
   
   <RouterProvider router={router} />
   
   
   </>
  );
}

export default App;
