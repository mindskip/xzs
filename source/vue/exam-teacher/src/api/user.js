import { post } from '@/utils/request'

export default {
  getUserPageList: query => post('/api/teacher/user/page/list', query),
  getUserEventPageList: query => post('/api/teacher/user/event/page/list', query),
  createUser: query => post('/api/teacher/user/edit', query),
  selectUser: id => post('/api/teacher/user/select/' + id),
  getCurrentUser: () => post('/api/teacher/user/current'),
  updateUser: query => post('/api/teacher/user/update', query),
  changeStatus: id => post('/api/teacher/user/changeStatus/' + id),
  deleteUser: id => post('/api/teacher/user/delete/' + id),
  selectByUserName: query => post('/api/teacher/user/selectByUserName', query)
}
