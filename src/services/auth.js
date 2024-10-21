export async function userLogin({ email, password }) {
    const data = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
        },
        body: JSON.stringify({ email, password }),
    });
    const res = await data.json()
    console.log(res)
   if (res.success==false) throw new Error(res.message);
  
   return res;
}
  
  
  