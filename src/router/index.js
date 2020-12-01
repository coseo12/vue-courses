import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
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

export default router;
