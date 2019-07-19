import { post } from '@/utils/request'

export default {
  getUserPageList: query => post('/api/admin/user/page/list', query),
  createUser: query => post('/api/admin/user/edit', query),
  selectUser: id => post('/api/admin/user/select/' + id),
  getCurrentUser: () => post('/api/admin/user/current'),
  updateUser: query => post('/api/admin/user/update', query)
}
