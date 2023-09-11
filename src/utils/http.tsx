import axios from "axios";

class Http {
  instance(url: string) {
    return axios.create({
      baseURL: `${process.env.REACT_APP_SERVER}${url}`,
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    });
  }
}

const http = new Http();

export default http;
