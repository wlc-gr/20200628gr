import Vue from 'vue'
import Vuex, {ActionTree, GetterTree, MutationTree} from 'vuex'

Vue.use(Vuex)

import actions from './actions'
import getters from './getters'
import state from './state'
import mutations from './mutations'

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
});
