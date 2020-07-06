import Vue from 'vue'
import VueRouter from "vue-router";

const originalPush = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
    return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

import Msite from "../pages/Msite/Msite"
import Search from "../pages/Search/Search"
import Order from "../pages/Order/Order"
import Profile from "../pages/Profile/Profile"
import Login from "../pages/Login/Login";
import BScrollList from '../pages/BScrollList'
import MyRegin from "../pages/MyRegin";

export default new VueRouter({
    routes: [
        {
            path: '/myRegin',
            component: MyRegin,
            meta: {
                showFooter: true,
            }
        },
        {
            path: '/msite',
            component: Msite,
            meta: {
                showFooter: true,
            }
        },
        {
            path: '/search',
            component: Search,
            meta: {
                showFooter: true,
            }
        },
        {
            path: '/order',
            component: Order,
            meta: {
                showFooter: true,
            }
        },
        {
            path: '/profile',
            component: Profile,
            meta: {
                showFooter: true,
            }
        },
        {
            path: '/bscroll',
            // component: resolve => require(['@/pages/BScrollList.vue'], resolve)
            component: BScrollList
        },
        {
            path: '*',
            redirect: '/msite'
        },
        {
            path: '/login',
            component: Login
        }
    ]
})
