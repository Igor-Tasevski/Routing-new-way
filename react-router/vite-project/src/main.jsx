import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
//import App from './App.jsx'
import Index from './Routes/Index';
import Layout from './Routes/Layout';
import AboutPage from './Routes/AboutPage';
import ProductByID from './Routes/ProductByID';
import Contact_Page from './Routes/Contact_Page';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {

        path: "/",
        element: <Index />
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/product/:id",
        element: <ProductByID />
      }


    ]
  },
  {
    path: "/contact",
    element: <Contact_Page />
  },

//if we don't want header and footer to be present on some page we can make as above example :contact 

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />

  </StrictMode>,
)
