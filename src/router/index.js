import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login";
import GlobalStore from "@/globalStorage/GlobalStore";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "home",
    component: Home,
  },
  {
    path: "/gerentes",
    name: "gerentes",
    component: () =>
      import(/* webpackChunkName: "gerenciar" */ "../views/Gerentes.vue"),
  },
  {
    path: "/cadastre-se",
    name: "novo.usuario",
    component: () =>
      import(/* webpackChunkName: "novo-usuario" */ "../views/NovoUsuario"),
    meta: {
      public: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      public: true,
    },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(!to.meta.public);
  if (!to.meta.public && !GlobalStore.state.token) {
    return next({ path: "login" });
  }
  next();
});

export default router;
