import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DataTable from '@/components/DataTable'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import '../styles/my-theme.less'
import locale from 'iview/dist/locale/en-US'

Vue.use(Router)
Vue.use(iView, { locale })

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: HelloWorld
    },
    {
      path: '/datatable',
      name: 'datatable',
      component: DataTable
    }
  ]
})
