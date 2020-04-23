import axios from 'axios';
const endpoint = 'http://localhost:4000'
axios.defaults.withCredentials = true;


const login = (user) => {
    return axios.post(endpoint+'/api/v1/login',user);
}
const signup = (user) => {
    return axios.post(endpoint+'api/v1/register',user);
}
const verify = () => {
    return axios.get(endpoint+'/api/v1/verify');
}
const logout = () => {
    return axios.delete(endpoint+'/api/v1/logout');
}
const show = (id) => {
    return axios.get(endpoint+'/api/v1/users'+id);
}
const update = (user) => {
    let request = axios.put(endpoint+'/api/v1/users'+user._id, user);
    return request;
}

const postIndex = () => {
    let request = axios.get(endpoint+'/api/v1/posts/');
    return request;
}
const postCreate = (post) => {
    return axios.post(endpoint+'/api/v1/posts',post);
}
const postUpdate = (_id, post) => {
    return axios.put(endpoint+'/api/v1/posts'+_id,post);
}
const postDelete = (post) => {
    return axios.delete(endpoint+'/api/v1/posts/'+post._id);
}
const itemIndex = () => {
    return axios.get(endpoint+'/api/v1/items');
}

export default {
    login,
    signup,
    logout,
    verify,
    show,
    update,
    postIndex,
    postCreate,
    postUpdate,
    postDelete,
    itemIndex
}






// const getUser = (userId) => {
//     return fetch(`${endpoint}/${userId}`, {
//         credentials: 'include',
//         method: 'GET'
//     })
//     .then(res => res.json())
//     .catch(err => console.log(err))
// }

// const updateUser = (userId, updatedUser) => {
//     return fetch(`${endpoint}/${userId}`, {
//         credentials: 'include',
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//           },
//         body: JSON.stringify(updatedUser)
//     })
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
// }

// export default {
//     getUser,
//     updateUser
// }