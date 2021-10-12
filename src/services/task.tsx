import http from '../http';

class TaskDataService {
  async getAll() {
    const response = await http.get('');
    return response;
  }

  createTask(data: any) {
    return http.post('/new', data);
  }

  async deleteTask(id: string) {
    const res = await http.delete(`/${id}`)
    return res.data.json()
  }

  getById(id :string) {
    return http.get(`/${id}`)
  }
}

const taskDataService = new TaskDataService()

export default taskDataService; 