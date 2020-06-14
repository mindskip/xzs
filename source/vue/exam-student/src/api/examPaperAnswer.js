import { post } from '@/utils/request'

export default {
  pageList: query => post('/api/student/exampaper/answer/pageList', query),
  answerSubmit: form => post('/api/student/exampaper/answer/answerSubmit', form),
  read: id => post('/api/student/exampaper/answer/read/' + id),
  edit: form => post('/api/student/exampaper/answer/edit', form)
}
