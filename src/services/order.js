import { getItem } from "../utils/healper"

export async function getOrder(){
    const token = getItem('token')
    const data = await fetch('http://localhost:3000/api/myorders',{
        method:'GET',
        headers:{
             'Content-Type': 'application/json',
             'Authorization': `Bearer ${token}`
        }
    })
    const res = await data.json()
    if (res.success==false) throw new Error(res.message);
    return res; 
}

export async function userOrder({shipingInfo,orderItems,paymentInfo,taxPrice,shipingPrice,totalPrice }){
    const token = getItem('token')
    const data = await fetch('http://localhost:3000/api/order/new',{
        method:'POST',
        headers:{
             'Content-Type': 'application/json',
             'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({shipingInfo,orderItems,paymentInfo,taxPrice,shipingPrice,totalPrice }),
    })
    const res = await data.json()
    if (res.success==false) throw new Error(res.message);
    return res; 
}