import { post, postWithLoadTip } from '@/utils/request'

export default {
  login: query => postWithLoadTip(`/api/user/login`, query),
  logout: query => post(`/api/user/logout`, query)
}
