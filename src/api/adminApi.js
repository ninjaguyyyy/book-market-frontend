import axiosClient from "./axiosClient";

const adminApi = {
    get: (params) => {
        const url = "admin/user-list";
        return axiosClient.get(url, { params });
    },
    changeStatus:(body)=>{
        const url="admin/ban"
        return axiosClient.post(url,body)
    }
};

export default adminApi;