import { post } from '@/utils/request'

export default {
  list: query => post('/api/admin/industry/list'),
  pageList: query => post('/api/admin/industry/page', query),
  edit: query => post('/api/admin/industry/edit', query),
  select: id => post('/api/admin/industry/select/' + id),
  deleteSubject: id => post('/api/admin/industry/delete/' + id)
}
