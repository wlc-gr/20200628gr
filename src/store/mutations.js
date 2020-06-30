import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS} from './mutation-typs'

export default {
    [RECEIVE_ADDRESS](state, obj) {
        state.address = obj
    },
    [RECEIVE_CATEGORYS](state, {categorys}) {
        state.categorys = categorys
    },
    [RECEIVE_SHOPS](state, {shops}) {
        state.shops = shops
    }
}
