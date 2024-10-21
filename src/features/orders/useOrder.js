import { useQuery } from "@tanstack/react-query";
import { getOrder } from "../../services/order";

 export function  useOrder(){
    const {data , isError, isLoading,error } = useQuery({
        queryKey: ['orders'],
        queryFn: getOrder,
      })
      return {data , isError, isLoading,error};
}
