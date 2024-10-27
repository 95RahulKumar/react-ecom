 import { CalendarOutlined } from '@ant-design/icons'
import { Avatar, Card, Col, Flex, List, Row } from 'antd'
import React from 'react'
import { PieChart } from './PieChart'
import { useOrders } from '../services/user'
 
 const RecentActivity = ({productData}) => {
    const {isLoading, isError, data} = useOrders();
    const {totalAmmount} = data ?? 0
    const pendingCount = data?.orders.filter(order => order?.orderStatus === 'Proccessing').length 
    console.log(pendingCount);
    
   return (
    <>
 <Flex style={{gap:'10px',flexWrap:'wrap',marginTop:'25px',justifyContent:'center'}}>
 <Card style={{ width:'max-content'}}>
 <PieChart totalAmmount={totalAmmount} Anotationtext='Total Revenue' fillColor="pink" changeFmt={true}></PieChart>
  </Card>
  <Card style={{width:'max-content'}}>
  <PieChart totalAmmount={pendingCount} Anotationtext='Pending Orders' fillColor="#ffae0062" changeFmt={false}></PieChart>
  </Card>
  <Card style={{width:'max-content'}}>
  <PieChart totalAmmount={!pendingCount} Anotationtext='Delevered Orders' fillColor="#22ff0063" changeFmt={false}></PieChart>
  </Card>
 </Flex>



  <Card style={{marginTop:'25px'}}>
      <Card title={
             <Flex gap="middle" >
                <CalendarOutlined />
                <p>Recent Activity</p>
             </Flex>
        
      } bordered={false} 
      
      >

 <div style={{ maxHeight: '250px', overflowY: 'auto' }}> {/* Set maxHeight to your desired value */}
      <List
        size="small"
        itemLayout="horizontal"
        dataSource={productData}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              title={`Added ${item.name}`}
              description={`Stock: ${item?.stock}`}
            />
          </List.Item>
        )}
      />
    </div>

  </Card>
  
  </Card>
    </>
   )
 }
 
 export default RecentActivity