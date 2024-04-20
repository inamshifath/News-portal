import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home/Home';
import National from './components/National/National';
import InterNational from './components/InterNational/InterNational';
import Politics from './components/Politics/Politics';
import Spotrs from './components/Sports/Spotrs';
import Country from './components/Country/Country';
import EnterTainment from './components/EnterTainment/EnterTainment';
import Business from './components/Business/Business';
import Contex from './Provider/Contex';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('record.json') 
      },
      {
        path:"/National",
        element: <National></National>
      },
      {
        path:"/InterNational",
        element:<InterNational></InterNational>
      },
      {
        path:"/Politics",
        element:<Politics></Politics>
      },
      {
        path:"/Sports",
        element:<Spotrs></Spotrs>
      },
      {
        path:"/Country",
        element:<Country></Country>
      },
      {
        path:"/Entertainment",
        element:<EnterTainment></EnterTainment>
      },
      {
        path:"/Business",
        element:<Business></Business>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contex><RouterProvider router={router} /></Contex>
  </React.StrictMode>,
)
