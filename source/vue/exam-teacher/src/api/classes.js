import { post } from '@/utils/request'

export default {
  pageList: query => post('/api/teacher/classes/page', query),
  selectClasses: id => post('/api/teacher/classes/select/' + id),
  edit: query => post('/api/teacher/classes/edit', query),
  deleteClasses: id => post('/api/teacher/classes/select/' + id)
}
