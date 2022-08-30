export default [
    {  /* 邮件处理 */
      path: "/you",
      name: "you",
      component: () => import("./you.vue"),
    },
  
    {  /* 工资条录入 */
      path: "/gong",
      name: "gong",
      component: () => import("./gong.vue"),
    },
  
  ];
  