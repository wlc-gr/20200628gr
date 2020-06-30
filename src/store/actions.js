import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS} from './mutation-typs'

import {reqCategorys, reqPosition, reqShops} from '../api'

export default {
    async receive_address({commit, state}) {
        let geohash = state.latitude + ',' + state.longitude
        let result = await reqPosition(geohash)
        if (result.code == 0) {
            let address = result.data
            commit(RECEIVE_ADDRESS, address)
        }
    },

    async receive_categorys({commit, state}) {
        let result = await reqCategorys()
        if (result.code == 0) {
            let categorys = result.data
            commit(RECEIVE_CATEGORYS, {categorys})
        }
    },

    async receive_shops({commit, state}) {
        let {latitude, longitude} = state
        let result = await reqShops(latitude, longitude)
        if (result.code == 0) {
            let shops = result.data
            commit(RECEIVE_SHOPS, {shops})
        }
    },
}
