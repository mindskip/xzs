import { post } from '@/utils/request'

export default {
  list: query => post('/api/teacher/education/subject/list'),
  pageList: query => post('/api/teacher/education/subject/page', query),
  edit: query => post('/api/teacher/education/subject/edit', query),
  select: id => post('/api/teacher/education/subject/select/' + id)
}
