import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index.vue'
import pageQuiButton from '@/pages/pageQuiButton.vue'
import pageQuiList from '@/pages/pageQuiList.vue'
import pageQuiNav from '@/pages/pageQuiNav.vue'

// 引入子路由
import Blog from '@/pages/page.vue'
// 引入子路由页面
import page1 from '@/pages/page1.vue'
import page2 from '@/pages/page2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/btn',
      name: 'pageQuiButton',
      component: pageQuiButton
    },
    {
      path: '/list',
      name: 'pageQuiList',
      component: pageQuiList
    },
    {
      path: '/nav',
      name: 'pageQuiNav',
      component: pageQuiNav
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
      children: [
        {
          path: '/',
          component: page1
        },
        {
          path: 'info',
          component: page2
        }
      ]
    }
  ]
})
