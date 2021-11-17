import axios from 'axios';

class Http {
  instance(url: string) {
    return axios.create({ 
      baseURL: `https://codify-tasks-server2.herokuapp.com/api/v1${url}`,
      headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('authToken')}`
      },
    });
  } 
}

const http = new Http();

export default http;