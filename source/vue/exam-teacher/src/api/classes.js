import { post } from '@/utils/request'

export default {
  pageList: query => post('/api/teacher/classes/page', query),
  edit: query => post('/api/teacher/classes/edit', query)
}
