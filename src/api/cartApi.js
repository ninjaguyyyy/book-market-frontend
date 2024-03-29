import axiosClient from './axiosClient';

const cartApi = {
  add: (cartItem) => {
    const url = 'users/add-to-cart';
    return axiosClient.post(url, cartItem);
  },
  get: (userID) => {
    const url = 'users/cart';
    return axiosClient.get(url, userID);
  },
  remove: (productID) => {
    const url = 'users/remove-from-cart';
    return axiosClient.post(url, productID);
  },
  update: (body) => {
    const url = 'users/update-cart';
    return axiosClient.post(url, body);
  },
};

export default cartApi;
