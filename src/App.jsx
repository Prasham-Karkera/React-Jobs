import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage';
import React from 'react'
import MainLayout from './layouts/MainLayout';

const Router = createBrowserRouter(
  createRoutesFromElements(
  <Route index element={<MainLayout />}>
  <Route index element={<HomePage/>}/>
  </Route>
)
);


const App = () => {
  return (
    
    <RouterProvider index router={Router} />
  )
};

export default App