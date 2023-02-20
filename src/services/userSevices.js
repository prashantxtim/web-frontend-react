import axios  from "axios";

const baseUrl = "http://localhost:3001";

const login = (email, password) => {
    return  axios.post(`${baseUrl}/login/`, { email, password });
    
    }

    const register = (credential) => {
        return  axios.post(`${baseUrl}/register/`, credential);
    }

const getoneuser = (id) => {
    return  axios.get(`${baseUrl}/user/${id}`);
}

const updateuser = (id, credential) => {
    return  axios.put(`${baseUrl}/user/${id}`, credential);
}
const getalluser = () => {
    return  axios.get(`${baseUrl}/user`);
}

const deleteuser = (id) => {
    return  axios.delete(`${baseUrl}/user/${id}`);
}



export default { login, register,getoneuser,updateuser,getalluser ,deleteuser};