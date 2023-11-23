import React from 'react'
import { Header } from '../headers'
import { Footers } from '../footers'
import { Outlet } from 'react-router-dom'

export const PublicLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footers/>
    </>
  )
}
