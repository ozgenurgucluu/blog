import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://blogapi.monorepo.co",
});

export default axios;
