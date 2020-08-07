import Vue from 'vue'
import VueRouter from 'vue-router'

import WelcomePage from './components/welcome/Welcome.vue'
import Dashboard from './components/dashboard/Dashboard.vue'
import AboutPage from './components/about/About.vue'


Vue.use(VueRouter)

const routes = [
    {path:'/', component:WelcomePage},
    {path:'/Dashboard', component:Dashboard},
    {path:'/About', component:AboutPage}
]

export default new VueRouter({mode:'history', routes})