import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';
import HomeEtudiant from './Pages/HomeEtudiant';
import Stage from './Pages/Stage';
import Job from './Pages/Job';
import StageList from './Pages/StageList';
import JobList from './Pages/JobList';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApplyJob from './Pages/AplyJob';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Container className="text-center">
          <Row>
            <Col>
              <h1 className="mt-5">Job Tracking App</h1>
              <p className="mt-3">Welcome to our application</p>
              <Link to="/login">
                <Button variant="primary" className="mt-3">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="secondary" className="mt-3 ml-3">
                  Register
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      ),
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/stage',
      element: <Stage />,
    },
    {
      path: '/job',
      element: <Job />,
    },
    {
      path: '/stagelist',
      element: <StageList />,
    },
    {
      path: '/joblist',
      element: <JobList />,
    },
    {
      path: '/homeetudiant',
      element: <HomeEtudiant />,
    },

    {
      path: '/aplyjob',
      element: <ApplyJob></ApplyJob>


    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
