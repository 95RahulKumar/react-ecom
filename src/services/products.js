import { getItem } from "../utils/healper";

export async function products(option) {
    const data = await fetch(`http://localhost:3000/api/products?keyword=${option}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
        },
    });
    const res = await data.json()
    console.log(res)
   if (res.success==false) throw new Error(res.message);
  
   return res;
}
  

export async function productById(id) {
    const data = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
        },
    });
    const res = await data.json()
    console.log(res)
   if (res.success==false) throw new Error(res.message);
  
   return res;
}

export async function createOrder({name,price,description,category,stock,file, }){
    const token = getItem('token')
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('stock', stock);
    if (file) {
        formData.append('image', file);
    }
    const data = await fetch('http://localhost:3000/api/products/new',{
        method:'POST',
        headers:{
        
             'Authorization': `Bearer ${token}`
        },
        body:formData,
    })
    const res = await data.json()
    if (res.success==false) throw new Error(res.message);
    return res; 
}