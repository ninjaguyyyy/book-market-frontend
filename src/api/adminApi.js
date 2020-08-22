import axiosClient from "./axiosClient";

const adminApi = {
    get: (params) => {
        const url = "admin/user-list";
        return axiosClient.get(url, { params });
    },
    getOrders: (params) => {
        const url = "admin/orders";
        return axiosClient.get(url, { params });
    },
    changeStatus: (idOrder, status) => {
        const url = `admin/orders/${idOrder}/status`;
        return axiosClient.put(url, { status });
    },
};

export default adminApi;
