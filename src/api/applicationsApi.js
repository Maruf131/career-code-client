export const myApplicationPromise = email =>{
    return fetch(`http://localhost:5001/applications?email=${email}`,{
        credentials: 'include'
    }).then(res => res.json())
}