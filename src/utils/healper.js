
import toast from 'react-hot-toast';

export function setItem(key,val){
 localStorage.setItem(key,val)
}

export function getItem(key){
   return localStorage.getItem(key)
   }


export function ToastMessage(type,messageStr){
    if(type=='error'){
        toast.error(messageStr)
    }else{
        toast.success(messageStr)
    }
  };



  export function deleteItem(key){
    return localStorage.removeItem(key)
    }