import http from '../utils/http';

class TaskDataService {
  url: string = '/tasks'

  async getAll() {
    return await http.instance(this.url).get('')
  }

  async createTask(data: { task: string }) {
    return await http.instance(this.url).post('/new', data);
  }

  async deleteTask(id: string) {
    await http.instance(this.url).delete(`/delete/${id}`)
  }

  async updateTask(id: string, data: { task: string }) {
    const response = await http.instance(this.url).put(`/edit/${id}`, data);
    return response;
  }

  async completeTask(id :string, complete: boolean) {
    return await http.instance(this.url).put(`/done/${id}`, {complete: complete})
  }
}

const taskDataService = new TaskDataService()

export default taskDataService; 