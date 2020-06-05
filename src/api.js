import axios from "axios";

export const fetchProducts = () => {
  console.log("fetching products...");
  return axios
    .get("https://utility-locker-fe.herokuapp.com/api/products")
    .then(({ data }) => {
      return data;
    })
    .catch(err => err);
};
