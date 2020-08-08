import axiosClient from "./axiosClient";

const cartApi = {
    add: (cartItem) => {
        const url = "users/add-to-cart";
        return axiosClient.post(url, cartItem);
    },
};

export default cartApi;
