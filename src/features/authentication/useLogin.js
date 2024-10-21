// login related custom hook using rect tan-stack quary

import { useMutation} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../services/auth";
import { setItem, ToastMessage } from "../../utils/healper";
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


