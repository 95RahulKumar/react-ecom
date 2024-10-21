import React from 'react'
import Stats from '../../components/Stats';

const DashboardLayout = () => {
  const bookings = 10;
  const confirmedStays = 30
  const numDays = 30
  const cabins =  ['10','20','30']
  return (
    <Stats 
    bookings={bookings}
    confirmedStays={confirmedStays}
    numDays={numDays}
    cabinCount={cabins.length}
   />
  )
}

export default DashboardLayout