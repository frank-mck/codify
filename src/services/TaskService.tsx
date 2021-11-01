import http from './http';

class TaskDataService {
  async getAll() {
    const response = await http.get('');
    return response;
  }

  async createTask(data: { task: string }) {
    await http.post('/new', data);
  }

  async deleteTask(id: string) {
    await http.delete(`/${id}`)
  }

  async updateTask(id: string, data: { task: string }) {
    const response = await http.put(`/edit/${id}`, data);
    return response;
  }

  async getById(id :string) {
    await http.get(`/${id}`)
  }
}

const taskDataService = new TaskDataService()

export default taskDataService; 