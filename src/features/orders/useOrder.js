import { useMutation, useQuery } from "@tanstack/react-query";
import { getOrder, userOrder } from "../../services/order";
import { message } from "antd";

 export function  useOrder(){
    const {data , isError, isLoading,error } = useQuery({
        queryKey: ['orders'],
        queryFn: getOrder,
      })
      console.log(data , isError, isLoading,error)
      return {data , isError, isLoading,error};
}

export function useMakeOrder() {
  const {mutate,isLoading} = useMutation({
    mutationFn:  userOrder,
    onSuccess:()=>{
      message.success('Order Recieved Successfully')
    }
  });
  return { order: mutate, loading:isLoading };
}
