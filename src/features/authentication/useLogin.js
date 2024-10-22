// login related custom hook using rect tan-stack quary

import { useMutation, useQuery} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../services/auth";
import { getItem, setItem, ToastMessage } from "../../utils/healper";
import toast from 'react-hot-toast';
export function useLogin() {
  const navigate = useNavigate();

  const {mutate,isLoading} = useMutation({
    mutationFn: userLogin,
    onSuccess: (user) => {
      localStorage.setItem('token', user.token); // Adjust as needed
      navigate('/dashboard', { replace: true });
      toast.success('Logged In Successfully');
    },
    onError: (error) => {
      console.error('ERROR', error);
      toast.error('Provided email or password are incorrect');
    },
  });
  return { login: mutate, isLoading };
}

export function useAddress(){
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchProfile,
  })
console.log(isLoading, isError, data, error)
  return { isLoading, isError, data, error}
}

 async function fetchProfile(){
  const token = getItem('token')
    const data =  await fetch('http://localhost:3000/api/me',{
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
       'Authorization': `Bearer ${token}`
      }
    })

    const res = await data.json();
    if(res.success == false) throw new Error(res.message);
    return res;
}