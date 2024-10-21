import {
    HiOutlineBanknotes,
    HiOutlineBriefcase,
    HiOutlineCalendarDays,
    HiOutlineChartBar,
  } from "react-icons/hi2";
  import Stat from "./Stat";
import styled from "styled-components";
  
  function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
    // 1.
    const numBookings = 5000
  
    // 2.
    const sales = 10000
  
    // 3.
    const checkins = 3000;
  
    // 4.
    const occupation = 60;
    // num checked in nights / all available nights (num days * num cabins)
   const StyledStates = styled.div`
    width: 100%; /* or a specific width */
    display: grid;
    grid-template-columns:repeat(auto-fill, minmax(250px, 1fr));
    gap: 10px;
   `
    return (
      <>
 <StyledStates>

        <Stat
          title="Bookings"
          color="blue"
          icon={<HiOutlineBriefcase />}
          value={numBookings}
        />
        <Stat
          title="Sales"
          color="green"
          icon={<HiOutlineBanknotes />}
          value={sales}
        />
        <Stat
          title="Check ins"
          color="indigo"
          icon={<HiOutlineCalendarDays />}
          value={checkins}
        />
        <Stat
          title="Occupancy rate"
          color="yellow"
          icon={<HiOutlineChartBar />}
          value={Math.round(occupation) + "%"}
        />
            
 </StyledStates>
      </>
    );
  }
  
  export default Stats;
  