import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Jobs from './Compo/Jobs';
import Signin from './Compo/Signin';
import Assessmate from './Compo/Assessmate';
import Jobpost from './Compo/Jobpost';
import Login from './Compo/Login';
import Contact from './Compo/Contact';
import About from './Compo/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Jobs',
    element: <Jobs />,
  },
  {
    path: '/Signin',
    element: <Signin />,
  },
  {
    path: '/Assessmate',
    element: <Assessmate />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/jobpost',
    element: <Jobpost />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      {/* Link to /Jobs/Assess */}
      <Link to="/Jobs/Assess">Go to Assess</Link>
      {/* <Link to="/Login/Jobpost">Jobpost</Link> */}
    </RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
