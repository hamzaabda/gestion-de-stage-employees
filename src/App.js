
import './App.css';

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Stage from './Pages/Stage';
import Job from './Pages/Job';
import { Link } from 'react-router-dom';


function App() {
  const router = createBrowserRouter([
    {
    path : '/',
    element:     <div className='info'>
    <h1>
      job <span>tracking</span> app
    </h1>
    <p>
      I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
      bottle single-origin coffee chia. Aesthetic post-ironic venmo,
      quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
      narwhal.
    </p>
    <Link to='/login' className='btn btn-hero'>
      Login/Register
    </Link>
  </div>
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
},
{

  path : '/stage',
  element: <Stage></Stage>

},

{

  path : '/job',
  element: <Job></Job>

},




  ])
  return (
   <>
   
   <RouterProvider router={router} />
   
   
   </>
  );
}

export default App;
