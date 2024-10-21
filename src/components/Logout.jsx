import React from 'react'
import ButtonIcon from './ButtonIcon'
import { HiArrowRightOnRectangle } from 'react-icons/hi2'
import { replace, useNavigate } from 'react-router-dom'
import { deleteItem } from '../utils/healper'
import toast from 'react-hot-toast'

const Logout = () => {
    const navigate = useNavigate()
   const  HandleLogout=()=>{
    deleteItem('token')
    navigate("/login",{replace:true})
    toast.success('Successfully Logged Out');
   }
  return (
<ButtonIcon onClick={() =>HandleLogout()}>
<HiArrowRightOnRectangle />
</ButtonIcon>

  )
}

export default Logout