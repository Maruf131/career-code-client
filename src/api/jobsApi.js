export const jobCreatedByPromise = email =>{
    return fetch(`http://localhost:5001/jobs?email=${email}`).then(res => res.json());
}