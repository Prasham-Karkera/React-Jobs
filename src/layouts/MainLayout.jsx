import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../componets/Navbar'

const MainLayout = () => {
  return (
    <>
        <Navbar title='React Jobs'/>
        <Outlet />
    </>
  )
}

export default MainLayout