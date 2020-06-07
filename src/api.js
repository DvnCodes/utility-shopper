import axios from "axios";

export const fetchProducts = (price = "asc", sortby = "name") => {
  return axios
    .get("http://localhost:9090/api/products", {
      params: {
        price,
        sortby,
      },
    })
    .then(({ data }) => {
      return data;
    })
    .catch((err) => err);
};

//"https://utility-locker-fe.herokuapp.com/api/products"
