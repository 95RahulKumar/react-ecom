import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../features/authentication/useLogin'
import { getItem } from '../utils/healper'


const ProtectedRoute = ({children}) => {
   const { isLoading} =  useLogin()
   const token = getItem('token')
     const navigate = useNavigate()
     useEffect(
      function () {
        if (!token && !isLoading) navigate("/login");
      },
      [token, isLoading, navigate]
    );
  
  
    // 4. If there IS a user, render the app
    if (token) return children;
}

export default ProtectedRoute