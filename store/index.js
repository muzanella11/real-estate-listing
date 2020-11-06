import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export default () => {
  return new Vuex.Store({
    state,
    actions,
    getters,
    mutations
  })
}
