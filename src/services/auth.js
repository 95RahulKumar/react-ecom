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
  

export async function userRegister({ name,email,password,gender,file,
    address,city,state,country,pincode,phoneNumber,role
}){
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('gender', gender);
        formData.append('avatar', file);
        formData.append('address', address);
        formData.append('city', city);
        formData.append('state', state);
        formData.append('country', country);
        formData.append('pincode', pincode);
        formData.append('phoneNumber', phoneNumber);
        formData.append('role', role);
    const data = await fetch('http://localhost:3000/api/register',{
        method:'POST',
        body:formData
    })

    const res = await data.json();
    if (res.success==false) throw new Error(res.message);
    return res;
}
  
  