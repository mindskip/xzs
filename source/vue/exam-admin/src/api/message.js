import { post } from '@/utils/request'

export default {
  pageList: query => post('/api/admin/message/page', query)
}
