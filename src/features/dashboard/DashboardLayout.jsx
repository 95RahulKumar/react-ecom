import React from 'react'
import Stats from '../../components/Stats';
import RecentActivity from '../../components/RecentActivity';
import { useProducts } from '../../services/user';

const DashboardLayout = () => {
  const bookings = 10;
  const confirmedStays = 30
  const numDays = 30
  const cabins =  ['10','20','30']
  const {isLoading, isError, data} = useProducts()
  
  const productData = [];
  const items = data?.analiticsData?.product_name
  const stock = data?.analiticsData?.stock;

  items?.forEach((element,index) => {
    let obj = {
      name:element,
      stock:stock[index]
     }
     productData.push(obj)
  });


  return (
    <>
     <Stats 
    bookings={bookings}
    confirmedStays={confirmedStays}
    numDays={numDays}
    cabinCount={cabins.length}
   />
   <RecentActivity productData={productData}></RecentActivity>
    </>
  )
}

export default DashboardLayout