export default {
    path: '/movie',
    component: () => import('../../views/movie/Movie.vue'),
    children: [
        {
            path: 'city',
            component: () => import('../../components/city/City.vue')
        },
        {
            path: 'comingSoon',
            component: () => import('../../components/comingSoon/ComingSoon.vue')
        },
        {
            path: 'nowPlaying',
            component: () => import('../../components/nowPlaying/NowPlaying.vue')
        },
        {
            path: 'search',
            component: () => import('../../components/search/Search.vue')
        },
        {
            path: '/',
            redirect: "city"
        }
    ]
}