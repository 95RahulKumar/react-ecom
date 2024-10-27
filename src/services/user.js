import { useQuery } from "@tanstack/react-query";
import { getItem } from "../utils/healper";

export async function getUsers(){
    const token = getItem('token')
    const data = await fetch('http://localhost:3000/api/users',{
        method:'GET',
        headers:{
             'Content-Type': 'application/json',
             'Authorization': `Bearer ${token}`
        }
    })
    const res = await data.json()
    if (res.success==false) throw new Error(res.message);
    return res; 
}

export async function getTotalOrder(){
    const token = getItem('token')
    const data = await fetch('http://localhost:3000/api/orders',{
        method:'GET',
        headers:{
             'Content-Type': 'application/json',
             'Authorization': `Bearer ${token}`
        }
    })
    const res = await data.json()
    if (res.success==false) throw new Error(res.message);
    return res; 
}

export async function getTotalProducts(){
    const token = getItem('token')
    const data = await fetch('http://localhost:3000/api/product/analitics',{
        method:'GET',
        headers:{
             'Content-Type': 'application/json',
             'Authorization': `Bearer ${token}`
        }
    })
    const res = await data.json()
    if (res.success==false) throw new Error(res.message);
    return res; 
}

  export function useUsers(){
    const {isLoading,isError, data, error } = useQuery({
        queryKey: ['users'],
        queryFn: getUsers,
      })

      return {isLoading, isError, data, error}
  }


  export function useOrders(){
    const {isLoading,isError, data, error } = useQuery({
        queryKey: ['orders'],
        queryFn: getTotalOrder,
      })

      return {isLoading, isError, data, error}
  }


  export function useProducts(){
    const {isLoading,isError, data, error } = useQuery({
        queryKey: ['products'],
        queryFn: getTotalProducts,
      })

      return {isLoading, isError, data, error}
  }