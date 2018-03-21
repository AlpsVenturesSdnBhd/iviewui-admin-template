import Vue from 'vue'
import Vuex from 'vuex'
import DataTableStore from './DataTableStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    dataTableStore: DataTableStore
  }
})
