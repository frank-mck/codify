import http from '../http';

class TaskDataService {
  async getAll() {
    const response = await http.get('');
    return response;
  }

  createTask(data: object) {
    return http.post('/new', data);
  }

  deleteTask(id: string | undefined) {
    return http.delete(`/${id}`)
  }

  getById(id :string) {
    return http.get(`/${id}`)
  }
}

const taskDataService = new TaskDataService()

export default taskDataService; 