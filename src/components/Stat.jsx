import { Area, Line } from "@ant-design/plots";
import styled from "styled-components";

const StyledStat = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 1.6rem;
  display: flex;
justify-content:space-around;
align-items: center;
  column-gap: 1.6rem;
  row-gap: 0.4rem;
`;

const Icon = styled.div`
  grid-row: 1 / -1;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Make these dynamic, based on the received prop */
  background-color: var(--color-${(props) => props.color}-100);

  & svg {
    width: 3.2rem;
    height: 3.2rem;
    color: var(--color-${(props) => props.color}-700);
  }
`;

const Title = styled.h5`
  align-self: end;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-500);
`;

const DataStyled = styled.div`
  width: max-content;
`
const Value = styled.p`
  font-size: 2.4rem;
  line-height: 1;
  font-weight: 700;
  text-align: center;
  margin-top: 0.3rem;
`;
function Stat({ icon, title, value, color,total}) {

  const config = {
    data:value,
    xField:'x',
    yField:'y',
    appendPadding: [1, 0, 0, 0],
    padding: 0,
    syncViewPadding: true,
    autofit: true,
    animation:false,
    tooltip: false,
    smooth: true,
    xAxis:false,
    line:{
      color:color
    },
    areaStyle: () => {
      return {
        fill: color
      };
    },
    yAxis: {
      tickCount: 12,
      label: {
        style: {
          stroke: 'transparent' 
        }
      },
      grid: {
        line: {
          style: {
            stroke: 'transparent', 
          },
        },
      },
     
    },
  };
  return (
    <StyledStat>
      <DataStyled>
      <Title>{title}</Title>
      <Value>{total}</Value>
      </DataStyled>
      <Area {...config} style={{width:'180px',height:'50px'}} />
    </StyledStat>
  );
}

export default Stat;
