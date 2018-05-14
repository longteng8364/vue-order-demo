import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import Login from './components/Login'
import Register from './components/Register'
import About from './components/about/About'

import Contact from './components/about/Contact'
import Address from './components/about/Address'


export const routes = [
    {path: '/', components: {
        default: Home,
        'phone': Contact,
        'address': Address
      }
    },
    {path: '/menu', component: Menu},
    {path: '/admin', component: Admin},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/about', redirect: '/about/contact', component: About, children: [
      {path: '/about/contact', component: Contact},
      {path: '/about/address', component: Address}
    ]},
    {path: '*', redirect: '/'}
  ]