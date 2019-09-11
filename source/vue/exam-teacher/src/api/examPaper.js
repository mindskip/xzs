import { post } from '@/utils/request'

export default {
  pageList: query => post('/api/teacher/exam/paper/page', query),
  taskExamPage: query => post('/api/teacher/exam/paper/taskExamPage', query),
  edit: query => post('/api/teacher/exam/paper/edit', query),
  select: id => post('/api/teacher/exam/paper/select/' + id),
  deletePaper: id => post('/api/teacher/exam/paper/delete/' + id)
}
