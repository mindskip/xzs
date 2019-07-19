import Cookies from 'js-cookie'
import userApi from '@/api/user'
// initial state
const state = {
  userName: Cookies.get('userName'),
  userInfo: Cookies.get('userInfo')
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
    Cookies.set('userName', userName, { expires: 30 })
  },
  setUserInfo: (state, userInfo) => {
    state.userInfo = userInfo
    Cookies.set('userInfo', userInfo, { expires: 30 })
  },
  clearLogin (state) {
    Cookies.remove('userName')
    Cookies.remove('userInfo')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
