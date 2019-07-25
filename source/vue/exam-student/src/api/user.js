import { post } from '@/utils/request'

export default {
  createUser: query => post('/api/student/user/edit', query),
  getCurrentUser: () => post('/api/student/user/current'),
  getUserEvent: () => post('/api/student/user/log'),
  update: query => post('/api/student/user/update', query)
}
