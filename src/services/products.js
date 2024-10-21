export async function products() {
    const data = await fetch('http://localhost:3000/api/products', {
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