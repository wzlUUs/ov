import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import liao from "../views/liao/liao";
import duo from "../views/ji/duo";
import oa from "../views/oa/oa";
import pei from "../views/pei/pei";
import qi from "../views/qi/qi";
import yi from "../views/yi/yi";

/*  */
import ejects from "../views/ejects/ejects";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children:[
       ...ejects
    ]
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
/*     children: [...yi  , ...ji  , ...oa ,... pei ,... qi ], */
    children: [...liao, ...duo, ...oa, ...pei, ...qi, ...yi],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
