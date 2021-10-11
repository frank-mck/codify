import http from '../http';

class TaskDataService {
  async getAll() {
    const response = await http.get('');
    return response;
  }

  createTask(data: object) {
    return http.post('/new', data);
  }
}

const taskDataService = new TaskDataService()

export default taskDataService; 