import Cookies from 'js-cookie'
import userApi from '@/api/user'
// initial state
const state = {
  userName: Cookies.get('teacherUserName'),
  userInfo: Cookies.get('teacherUserInfo')
}

// actions
const actions = {
  initUserInfo ({ commit }) {
    userApi.getCurrentUser().then(re => {
      commit('setUserInfo', re.response)
    })
  }
}

// mutations
const mutations = {
  setUserName (state, userName) {
    state.userName = userName
    Cookies.set('teacherUserName', userName, { expires: 30 })
  },
  setUserInfo: (state, userInfo) => {
    state.userInfo = userInfo
    Cookies.set('teacherUserInfo', userInfo, { expires: 30 })
  },
  clearLogin (state) {
    Cookies.remove('teacherUserName')
    Cookies.remove('teacherUserInfo')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
