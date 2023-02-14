import React from 'react'
import Menu from '../../components/menu/Menu'
import { Outlet } from 'react-router-dom'

export default function Public() {
  return (
    <>
        <Menu/>
        <Outlet/>
    </>
  )
}
