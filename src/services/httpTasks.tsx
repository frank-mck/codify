import axios from 'axios';

export default axios.create({ 
  baseURL: "http://localhost:3002/api/v1/tasks",
  headers: {
	"Content-type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("authToken")}`
  },
});