export default [
    {
      /* 代办事项 */ path: "/dai",
      name: "dai",
      component: () => import("./dai.vue"),
    },
  
    {
      /* 已办事项 */ path: "/yi",
      name: "yi",
      component: () => import("./yi.vue"),
    },
    {
      /* 我发起的 */ path: "/wo",
      name: "wo",
      component: () => import("./wo.vue"),
    },
  ];
  