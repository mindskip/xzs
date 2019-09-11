import { post } from '@/utils/request'

export default {
  pageList: query => post('/api/teacher/question/page', query),
  edit: query => post('/api/teacher/question/edit', query),
  select: id => post('/api/teacher/question/select/' + id),
  deleteQuestion: id => post('/api/teacher/question/delete/' + id)
}
