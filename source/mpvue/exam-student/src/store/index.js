import Vue from 'vue'
import Vuex from 'vuex'
import dataStore from './modules/dataStore'
import locationStore from './modules/locationStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    dataStore,
    locationStore
  }
})
