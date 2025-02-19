import { createRouter, createWebHistory } from "vue-router";

import StartPage from "./components/StartPage.vue";
import MoviePage from "./components/MoviePage.vue";
import ForecastList from "./components/ForecastList.vue";


const routes = [
  { path: "/", component: StartPage },
  { path: "/forecast", component: MoviePage },
  { path: "/movies", component: MoviePage, props: (route) => ({ message: route.query.message }) },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;