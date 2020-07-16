import { post } from '@/utils/request'

export default {
  pageList: query => post('/api/student/question/answer/page', query),
  select: id => post('/api/student/question/answer/select/' + id)
}
