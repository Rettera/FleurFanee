import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Posts from '@/components/Posts'
import NewPost from '@/components/NewPost'
import EditPost from '@/components/EditPost'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Profile from '@/components/Profile'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts/new',
      name: 'NewPost',
      component: NewPost,
 /*     redirect: pseudo => {
        if (pseudo === 'n') {
          return {path: '/login'}
        }
      } */
    },
    {
      path: '/posts/:id',
      name: 'EditPost',
      component: EditPost
    },
    {
      // will match everything
      path: '*',
      name: '404',
      redirect: {name: 'Home'}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
