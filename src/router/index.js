import Vue from 'vue'
import Router from 'vue-router'
import side from '../miancompoent/side'
import test from '../miancompoent/test'
import home from '../miancompoent/home'
import '../minixs/routermins'

Vue.use(Router)
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

const routes = [
    {
        path:'/',
        component: home

    },{
        path:'/side',
        component: side 
    },
    {
        path:'/test',
        component: test
    },
    {
        path:'/home',
        component: home
    }
]

export default new Router({
    mode: 'hash', 
    routes,
})