import { post } from '@/utils/request'

export default {
  index: () => post('/api/admin/dashboard/index')
}
