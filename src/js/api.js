import axios from "axios";

export const api = {
  base: "https://api.spacexdata.com",
  version: "v3",
  data: {}
};

axios.defaults.baseURL = api.base + "/" + api.version;
