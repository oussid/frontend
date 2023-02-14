import React from 'react'
import Menu from '../../components/menu/Menu'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/Footer'

export default function Public() {
  return (
    <>
        <Menu/>
        <Outlet/>
        <Footer/>
    </>
  )
}
