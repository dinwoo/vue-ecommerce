import Vue from "vue";
import Router from "vue-router";

// import HelloWorld from "@/components/HelloWorld";
import Login from "@/components/pages/Login";
import Dashboard from "@/components/Dashboard";
import Products from "@/components/pages/Products";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: "Login",
      path: "/login",
      component: Login
    },
    {
      name: "dashboard",
      path: "/admin",
      component: Dashboard,
      children: [
        {
          name: "Products",
          path: "products",
          component: Products,
          meta: { requiresAuth: true }
        }
      ]
    }
  ]
});
