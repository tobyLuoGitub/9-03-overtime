import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Detail from '@/components/Detail'
import Overtime from '@/components/Overtime'
import Vacation from '@/components/Vacation'


Vue.use(Router)

let router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/overtime',
      name: 'overtime',
      component: Overtime
    },
    {
      path: '/vacation',
      name: 'vacation',
      component: Vacation
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})

//  全局路由守卫
router.beforeEach((to,from,next) => {
  //console.log(to,from,next)

  //  从本地取出用户登录密钥
  let token = localStorage.getItem('token')

  if ( token ) { // 登录成功 跳转默认页
    if( to.path == '/login') { // 已登录，禁止跳转login页
      //next(to.path)
      next(from.path)
    }else{ // 其它路径 next()放行
      next()
    }
  }else{   // 登录失败（未登录）  跳转至登录页 
    if ( to.path == '/login' ) { // 去登录页 next()放行
      next()
    }else{ // 其它路径， 强制去 login 页
      next('/login')
    }
    //next(from.path)
  }

})

export default router
