import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuthContext } from "../context/AuthContext";
const PrivateRouter = () => {
  const { currentUser } = useAuthContext();
  return (
    currentUser ? (
    <>
 <Outlet/>
 </>
 ) : (<Navigate to = "/login"/>)
  )
}

export default PrivateRouter
