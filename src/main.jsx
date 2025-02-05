import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';

//import any css here

// Bringing in the pages the router will use to conditionally show the appropriate views
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import AboutPage from './pages/AboutMe';
import PortfolioPage from './pages/Portfolio';
import ContactPage from './pages/Contact';
import ResumePage from './pages/Resume';

import './index.css';

const router = createBrowserRouter([
{
  path: '/',
  element: <App />,
  errorElement: <ErrorPage />,
  children: [
    {
      index: true,
      element: <HomePage/>,
    },
    {
      path: '/about',
      element: <AboutPage/>,
    },
    {
        path: '/portfolio',
        element: <PortfolioPage/>,
      },
      {
        path: '/contact',
        element: <ContactPage/>,
      },
      {
        path: '/resume',
        element: <ResumePage/>,
      },
  ],
},
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
