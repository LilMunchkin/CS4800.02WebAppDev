import { createWebHistory, createRouter } from "vue-router"
import Home from "../views/Home.vue";
import MyForm from "../views/MyForm.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/MyForm',
    name: "MyForm",
    component: MyForm,
  },
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
export default router


















  /*
  import Vue from "vue";
  import VueRouter from "vue-router";
  import Home from "../views/Home.vue";

  Vue.useContext(VueRouter);

  const routes = [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",

      //component: ( )
        //import(/* webpackChunkName: "about" * "../views/About.vue")
    }
  ];
  const router = new VueRouter({
    mode: "history",
    base: process.eventNames.BASE_URL,
    routes
  });

  export default router;
   */