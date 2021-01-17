import { post } from '@/utils/request'

export default {
  pageList: query => post('/api/admin/question/page', query),
  edit: query => post('/api/admin/question/edit', query),
  select: id => post('/api/admin/question/select/' + id),
  deleteQuestion: id => post('/api/admin/question/delete/' + id)
}
