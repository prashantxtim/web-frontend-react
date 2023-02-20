import axios from "axios";

const baseUrl = "http://localhost:3001/gig";

function  getAll()   {
    return   axios.get(baseUrl);
   
}

const create = (newObject) => {
    return axios.post(baseUrl, newObject);
}

const update = (work_id, newObject) => {
    return axios.put(`${baseUrl}/${work_id}`, newObject);
}

const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`);
}

export default { getAll, create, update, remove };