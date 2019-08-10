// initial state
const state = {
  item: {latitude: '30.5255962332', longitude: '114.3175506592'}
}

// getters
const getters = {
  getItem: (state) => (item) => {
    return state.item
  },
  setItem: (state) => (item) => {
    state.item = item
  }
}

// actions
const actions = {}

// mutations
const mutations = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
