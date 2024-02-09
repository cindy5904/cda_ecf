import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Register from '../views/RegisterView.vue';
import Login from '../views/LoginView.vue';
import Project from '../views/ProjectView.vue';
import HomeProject from '../views/HomeProjectView.vue';
import AllProject from '../views/AllProjectView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/project',
      name: 'project',
      component: Project
    },
    {
      path: '/homeproject',
      name: 'homeproject',
      component: HomeProject
    },
    {
      path: '/allproject',
      name: 'allproject',
      component: AllProject
    }
    
  ]
})

export default router
