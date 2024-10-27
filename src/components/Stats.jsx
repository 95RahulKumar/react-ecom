import {
    HiOutlineBanknotes,
    HiOutlineBriefcase,
    HiOutlineCalendarDays,
    HiOutlineChartBar,
  } from "react-icons/hi2";
  import Stat from "./Stat";
import styled from "styled-components";
import { useOrders, useProducts, useUsers } from "../services/user";
import Loader from "./Loader";
  
  function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
    const {isLoading, isError, data, error} = useUsers();
    const {isLoading:orderLoading, isError:OrderError, data:orders} = useOrders();
    const {isLoading:productLoading, isError:productError, data:products} =useProducts()
    console.log(orders?.orders)
    const users = []
    const ordersPloatData = [];
    const productPloatData = [];
    data?.users?.forEach(element => {
     let obj = {
      x:element?.createdAt,
      y:element?.gender
     }
     users.push(obj)
    });
     
    const items = products?.analiticsData?.product_name
    const stock = products?.analiticsData?.stock;

    items?.forEach((element,index) => {
      let obj = {
        x:element,
        y:stock[index]
       }
       productPloatData.push(obj)
    });

    if(isLoading || orderLoading || productLoading){
    return <Loader content={'Loading....'}/>
    }
    orders?.orders?.forEach(element => {
      let obj = {
       x:element?.paidAt,
       y:element?.totalPrice
      }
      ordersPloatData.push(obj)
     });
    // 1.
    const numOfUsers = data?.users?.length
  
    // 2.
    const orderlength = orders?.orders?.length
  
    // 3.
    const itemsLength = productPloatData?.length;
  
    // 4.
    const occupation = 60;
    // num checked in nights / all available nights (num days * num cabins)
   const StyledStates = styled.div`
    width: 100%; /* or a specific width */
    display: grid;
    grid-template-columns:repeat(auto-fill, minmax(300px, 1fr));
    gap: 10px;
   `
    return (
      <>
 <StyledStates>

        <Stat
          title="Total Users"
          color="blue"
          total = {numOfUsers}
          icon={<HiOutlineBriefcase />}
          value={users}
        />
        <Stat
          title="Total Orders"
          color="red"
          total={orderlength}
          icon={<HiOutlineBanknotes />}
          value={ordersPloatData}
        />
        <Stat
          title="Total Products"
          color="green"
          icon={<HiOutlineCalendarDays />}
          total={itemsLength}
          value={productPloatData}
        />
            
 </StyledStates>
      </>
    );
  }
  
  export default Stats;
  