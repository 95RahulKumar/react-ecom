import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createOrder, productById, products } from "../../services/products";
import toast from "react-hot-toast";

export function useFetchProducts(){
    const {data , isError, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: products,
      })
    return {data , isError, isLoading}
}

export function useFetchProductById(id){
  const {data , isError, isLoading,error } = useQuery({
      queryKey: ['products'],
      queryFn:()=> productById(id),
    })
  return {data , isError, isLoading,error};
}

export function useCreateProduct(){
  const queryClient = useQueryClient()
  const {mutate,isLoading} = useMutation({
    mutationFn:createOrder,
    onSuccess:()=>{
      queryClient.invalidateQueries({ queryKey: ['products'] })
      toast.success('Product created Successfully');
    },
    onError: (error) => {
      console.error('ERROR', error);
      toast.error(error['message']);
    },
  })
  return { creteProduct: mutate, isLoading };
}