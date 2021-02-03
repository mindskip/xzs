import { post } from '@/utils/request'

export default {
  page: query => post('/api/admin/examPaperAnswer/page', query)
}
