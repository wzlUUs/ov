<template>
  <div id="oa" :style="{ backgroundImage: 'url(' + im + ')' }">
    <div id="yi">
      <p class="hao"><input type="text" placeholder="账号" class="ins" /></p>
      <p class="hao"><input type="text" placeholder="密码" class="ins" /></p>
       <router-link class="wang"  to="wang.vue">忘记密码</router-link>
       <span class="wang"  to="wang.vue">忘记密码</span>
      <p>
        <span> <input type="text" placeholder="验证码" /> </span>
        <input type="text" />
      </p>

      <button class="lu" @click="lu">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      im: "jing4.jpg",
    };
  },
  methods: {
    lu() {
      this.$router.push('/about')
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
#oa {
  /* 整个 页面 */
  width: 100vw;
  height: 100vh;
  background-size: 100% 100%;
  display: flex;
}
#yi {
  /* 包裹的 盒子 */
  height:30.9375rem ;
  width: 28.9375rem;
  background-color: beige;
   border-radius: 15%;
   margin: auto;  // 居中
/*    margin-left: 24.3125rem;
   margin-top: 6.5625rem; */
}
/* 输入框 */
.ins {
  width: 24.3125rem;
  height: 2.875rem;
  border-radius: .875rem;
}
/* 登录 按钮 */
.lu {
  margin-top: 1.875rem;
  border-radius: 0.875rem;
  width: 20.75rem;
  height: 3.25rem;
}
.wang {
  width: 5.0625rem;
  height: 1.875rem;
  font-size: 0.75rem;
  margin-left: 22.5625rem;
}
.hao{
  margin-top: 1.5625rem;
}
</style>
