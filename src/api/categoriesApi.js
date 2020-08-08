import axiosClient from "./axiosClient";

const categoriesApi = {
    get: (params) => {
        const url = "api/categories";
        return axiosClient.get(url, { params });
    },
};

export default categoriesApi;
