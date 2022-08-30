export default [
    {  /* 字典管理 */
      path: "/zi",
      name: "zi",
      component: () => import("./zi.vue"),
    },
    {  /* 职位级别管理 */
      path: "/zhi",
      name: "zhi",
      component: () => import("./zhi.vue"),
    },
    {  /* 用户管理 */
      path: "/yong",
      name: "yong",
      component: () => import("./yong.vue"),
    },
    {  /* 权限管理 */
      path: "/quan",
      name: "quan",
      component: () => import("./quan.vue"),
    },
    {  /* 角色管理 */
      path: "/jue",
      name: "jue",
      component: () => import("./jue.vue"),
    },
    {  /* 岗位管理 */
      path: "/gang",
      name: "gang",
      component: () => import("./gang.vue"),
    },
    {  /* 登录日志 */
      path: "/deng",
      name: "deng",
      component: () => import("./deng.vue"),
    },
    {  /* 操作日志 */
      path: "/cao",
      name: "cao",
      component: () => import("./cao.vue"),
    },
    {  /* 菜单管理 */
      path: "/dan",
      name: "dan",
      component: () => import("./dan.vue"),
    },
    {  /* 部门管理 */
      path: "/bu",
      name: "bu",
      component: () => import("./bu.vue"),
    },
  ];
  