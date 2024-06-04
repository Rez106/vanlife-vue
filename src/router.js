import { createWebHistory, createRouter } from "vue-router";

import DefaultVue from "./layouts/DefaultVue.vue";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Host from "./pages/Host.vue";
import Vans from "./pages/Vans.vue";
import VanDetail from "./pages/VanDetail.vue";
import NotFound from "./pages/NotFound.vue";
import Dashboard from "./components/host/Dashboard.vue";
import ListedVans from "./components/host/ListedVans.vue";
import Reviews from "./components/host/Reviews.vue";
import Income from "./components/host/Income.vue";
import HostVanDetail from "./components/host/HostVanDetail.vue";
import HostVanPricing from "./components/host/HostVanPricing.vue";
import HostVanPhotos from "./components/host/HostVanPhotos.vue";
import Login from "./pages/Login.vue";
import useIsLoggedIn from "./composables/useIsLoggedIn";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: DefaultVue,
      children: [
        { path: "", name: "Home", component: Home },
        { path: "about", name: "About", component: About },
        {
          path: "host",
          name: "Host",
          component: Host,
          redirect: () => {
            return {
              path: "dashboard",
              name: "HostDashboard",
              component: Dashboard,
            };
          },
          beforeEnter: (to, from, next) => {
            const isLoggedIn = useIsLoggedIn();
            if (isLoggedIn) {
              next();
            } else {
              next({ path: "/login", query: { redirectedFrom: "host" } });
            }
          },
          children: [
            { path: "dashboard", name: "HostDashboard", component: Dashboard },
            {
              path: "vans",
              name: "HostVans",
              component: ListedVans,
            },
            {
              path: "vans/:id",
              name: "HostVanDetail",
              component: HostVanDetail,
              children: [
                {
                  path: "pricing",
                  name: "HostVanPricing",
                  component: HostVanPricing,
                },
                {
                  path: "photos",
                  name: "HostVanPhotos",
                  component: HostVanPhotos,
                },
              ],
            },
            { path: "reviews", name: "HostReviews", component: Reviews },
            { path: "income", name: "HostIncome", component: Income },
          ],
        },
        {
          path: "vans",
          name: "Vans",
          component: Vans,
        },
        {
          path: "/vans/:id",
          name: "VanDetail",
          component: VanDetail,
        },
        { path: "login", name: "Login", component: Login },
        { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
      ],
    },
  ],
});

export default router;
