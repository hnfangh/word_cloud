import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import WordCloud from '@/components/WordCloud'
import UserList from '@/components/UserList'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WordCloud',
      component: WordCloud
    },{
      path: '/userlist',
      name: 'UserList',
      component: UserList
    }
  ]
})

