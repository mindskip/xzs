import { post } from '@/utils/request'

export default {
  index: () => post('/api/teacher/dashboard/index')
}
