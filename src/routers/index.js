import Vue from 'vue'
import Router from 'vue-router'
import cinemaRouter from './cinema/cinema'
import mineRouter from './mine/mine'
import movieRouter from './movie/movie'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    cinemaRouter,
    mineRouter,
    movieRouter,
    {
      path: '/',
      redirect: '/movie'
    }
  ]
})
