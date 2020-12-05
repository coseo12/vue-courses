import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: (to, from, next) => {
      // 지역가드
      console.log("local: ", to, from);

      next();
    }
  },
  {
    path: "/courses_1",
    name: "Courses_1",
    component: () => import("../views/Increment.vue")
  },
  {
    path: "/courses_2",
    name: "Courses_2",
    component: () => import("../views/IncrementC.vue")
  },
  {
    path: "/courses_3",
    name: "Courses_3",
    component: () => import("../views/Todo.vue")
  },
  {
    path: "/courses_4",
    name: "Courses_4",
    component: () => import("../views/TodoStore.vue")
  },
  {
    path: "/courses_5",
    name: "Courses_5",
    component: () => import("../views/Axios.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  // 전역가드
  console.log("global: ", to, from);

  next();
});

export default router;
