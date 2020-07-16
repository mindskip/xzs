import { post } from '@/utils/request'

export default {
  pageList: query => post('/api/admin/task/page', query),
  edit: query => post('/api/admin/task/edit', query),
  select: id => post('/api/admin/task/select/' + id),
  deleteTask: id => post('/api/admin/task/delete/' + id)
}
