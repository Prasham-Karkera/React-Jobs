import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage';
import React from 'react'
import MainLayout from './layouts/MainLayout';
import JobPages from './pages/JobPages';
import AddJobPage from './pages/AddJobPage';
import PageNotFound from './pages/PageNotFound';
import JobPage from './pages/JobPage';


const Router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
  <Route index element={<HomePage/>}/>
  <Route path='*' element={<PageNotFound/>}/>
  <Route path='/job/:id' element={<JobPage/>}/>
  <Route path='/jobs' element={<JobPages/>}/>
  <Route path='/add-job' element={<AddJobPage/>}/>
  
  </Route>
)
);


const App = () => {
  return (
    
    <RouterProvider index router={Router} />
  )
};

export default App