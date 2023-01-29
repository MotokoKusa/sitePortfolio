import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "@/views/MainPage.vue";
import AboutPage from "@/views/AboutPage.vue";
import ResumePage from "@/views/ResumePage.vue";
import notFoundPage from "@/views/notFoundPage.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainPage,
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
  {
    path: "/experience",
    name: "experience",
    component: ResumePage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: notFoundPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
