import React from 'react'
import ButtonIcon from './ButtonIcon'
import { replace, useNavigate } from 'react-router-dom'
import { deleteItem } from '../utils/healper'
import toast from 'react-hot-toast'
import { LogoutOutlined } from '@ant-design/icons'

const Logout = () => {
    const navigate = useNavigate()
   const  HandleLogout=()=>{
    deleteItem('token')
    navigate("/login",{replace:true})
    toast.success('Successfully Logged Out');
   }
  return (
<ButtonIcon onClick={() =>HandleLogout()}>
<LogoutOutlined />
</ButtonIcon>

  )
}

export default Logout