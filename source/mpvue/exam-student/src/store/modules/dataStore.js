// initial state
const state = {
  aquaticProduct: [
    {name: '虎鲸', src: '/static/images/fish/1.jpg', url: '/pages/location/main', latitude: '38.7428374456', longitude: '117.3854827881'},
    {name: '鳕鱼', src: '/static/images/fish/2.jpg', url: '/pages/location/main', latitude: '38.6324273160', longitude: '117.4417877197'},
    {name: '海豚', src: '/static/images/fish/3.jpg', url: '/pages/location/main', latitude: '38.9339090588', longitude: '117.5351715088'},
    {name: '鲨鱼', src: '/static/images/fish/4.jpg', url: '/pages/location/main', latitude: '39.0131817960', longitude: '117.5539684296'},
    {name: '鲸', src: '/static/images/fish/5.jpg', url: '/pages/location/main', latitude: '30.0215435097', longitude: '113.5189819336'},
    {name: '鱿鱼', src: '/static/images/fish/6.jpg', url: '/pages/location/main', latitude: '29.9870551626', longitude: '113.6123657227'},
    {name: '金枪鱼', src: '/static/images/fish/7.jpg', url: '/pages/location/main', latitude: '30.1605642795', longitude: '113.8118362427'},
    {name: '淡水长臂大虾', src: '/static/images/shrimp/1.jpg', url: '/pages/location/main', latitude: '30.2996857383', longitude: '114.1685485840'},
    {name: '褐虾', src: '/static/images/shrimp/2.jpg', url: '/pages/location/main', latitude: '30.1552209427', longitude: '116.6075134277'},
    {name: '北极虾', src: '/static/images/shrimp/3.jpeg', url: '/pages/location/main', latitude: '29.5376192060', longitude: '121.5760803223'},
    {name: '白对虾', src: '/static/images/shrimp/4.jpg', url: '/pages/location/main', latitude: '29.2799607064', longitude: '121.7367553711'},
    {name: '斑节对虾', src: '/static/images/shrimp/5.jpg', url: '/pages/location/main', latitude: '29.3339989293', longitude: '121.8809509277'},
    {name: '日本对虾', src: '/static/images/shrimp/6.jpg', url: '/pages/location/main', latitude: '29.0516679016', longitude: '121.5395164490'},
    {name: '正樱虾', src: '/static/images/shrimp/7.jpg', url: '/pages/location/main', latitude: '28.8345988395', longitude: '121.2794494629'},
    {name: '汉森萤虾', src: '/static/images/shrimp/8.jpeg', url: '/pages/location/main', latitude: '28.2472352879', longitude: '120.9692573547'},
    {name: '皮皮虾', src: '/static/images/shrimp/9.jpg', url: '/pages/location/main', latitude: '30.5990965153', longitude: '121.1446094513'},
    {name: '龙虾', src: '/static/images/shrimp/10.jpg', url: '/pages/location/main', latitude: '30.4573674946', longitude: '120.9436368942'}
  ]
}

// getters
const getters = {
  search: (state) => (key) => {
    if (key == null) {
      return state.aquaticProduct
    }
    return state.aquaticProduct.filter(ap => ap.name.indexOf(key) !== -1)
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
