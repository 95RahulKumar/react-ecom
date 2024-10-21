import { useQuery } from "@tanstack/react-query";
import { productById, products } from "../../services/products";

export function useFetchProducts(){
    const {data , isError, isLoading } = useQuery({
        queryKey: ['todos'],
        queryFn: products,
      })
    return {data , isError, isLoading}
}

export function useFetchProductById(id){
  const {data , isError, isLoading,error } = useQuery({
      queryKey: ['todos'],
      queryFn:()=> productById(id),
    })
  return {data , isError, isLoading,error};
}