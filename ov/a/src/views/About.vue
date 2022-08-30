<template>
  <div>
    <el-container><!--   class="el-menu-vertical-demo" -->
      <el-aside width="230px">
        <el-menu
          default-active="1-4-1"

          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          router
        >
          <el-menu-item index="shou">
            <i class="el-icon-setting"></i>
            <span slot="title">首页</span>
          </el-menu-item>

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">基础配置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="yong">用户管理</el-menu-item>
              <el-menu-item index="jue">角色管理</el-menu-item>
              <el-menu-item index="quan">权限管理</el-menu-item>
              <el-menu-item index="dan">菜单管理</el-menu-item>
              <el-menu-item index="zhi">职级管理</el-menu-item>
              <el-menu-item index="gang">岗位管理</el-menu-item>
              <el-menu-item index="cao">操作日志</el-menu-item>
              <el-menu-item index="deng">登录日志</el-menu-item>
              <el-menu-item index="zi">字典管理</el-menu-item>
              <el-menu-item index="bu">部门管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>配置工作流</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="liu">配置审批流程</el-menu-item>
              <el-menu-item index="lei">配置审批类型</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>材料管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="liao">材料管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>企业通讯</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="you">邮件处理</el-menu-item>
              <el-menu-item index="gong">工资条录入</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="he">
            <i class="el-icon-setting"></i>
            <span slot="title">合同管理</span>
          </el-menu-item>

          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>oa审批</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="dai">待办事项</el-menu-item>
              <el-menu-item index="yi">已办事项</el-menu-item>
              <el-menu-item index="wo">我发起的</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
          </el-radio-group>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>

</style>
