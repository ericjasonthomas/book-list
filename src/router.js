import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
<<<<<<< HEAD
    {
    //   path: '/',
    //   name: 'home',
    //   component: () =>
    //      import('./views/Home.vue'),
    // },
    // {
      path: '/',
      name: 'booklist',
=======
  //   {
  //   path: '/',
  //   name: 'home',
  //   component: Home,
  // },
    {
      path: '/',
      name: 'books',
>>>>>>> 9c7ac4db2f5f8b9d3252d70eead37e246f727e90
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import('./views/Booklist.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import('./views/About.vue'),
    },
  ],
});
