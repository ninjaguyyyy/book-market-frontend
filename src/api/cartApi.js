import axiosClient from "./axiosClient";

const cartApi = {
    add: (cartItem) => {
        const url = "users/add-to-cart";
        return axiosClient.post(url, cartItem);
    },
    get: (userID)=>{
        const url="users/cart"
        return axiosClient.get(url,userID)
    }
};

export default cartApi;
