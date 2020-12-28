import { post } from '@/utils/request'

export default {
  list: query => post('/api/admin/skill/list'),
  pageList: query => post('/api/admin/admin/skill/page', query),
  edit: query => post('/api/admin/skill/edit', query),
  select: id => post('/api/admin/skill/select/' + id),
  deleteSubject: id => post('/api/admin/skill/delete/' + id)
}
