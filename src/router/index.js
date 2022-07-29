import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            // 路由的重定向,打开网页就是login
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/home',
            component: Home
        }

    ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
    // to是将要访问的路径
    // from 是从哪个路径跳转而来
    // next 是一个函数， 表示放行
    //   next()  放行   next('/login')  强制跳转

    if(to.path === '/login') return next()
    // 获取token
    const tokenStr = window.sessionStorage.getItem('token')
    if(!tokenStr) {
        return next('/login')
    } else {
        next()
    }
})

export default router