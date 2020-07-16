import { postWithLoadTip } from '@/utils/request'

export default {
  register: query => postWithLoadTip(`/api/student/user/register`, query)
}
