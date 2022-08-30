<template>
  <div>
    <p>首页</p>
    <!-- 上 -->
    <div class="shang">
      <ul class="yi">
        <li>
          <span>[代办事项] 您申请的报销还未批准.请及时查看防止过期 </span>
          <span></span>
        </li>
        <li>
          <span>[代办事项] 小红的请假申请还未审批,请及时查看 </span>
          <span></span>
        </li>
        <li>
          <span>[代办事项] 小明的报销还未批准,请及时查看 </span> <span></span>
        </li>
        <li>待办事项</li>
      </ul>

      <div>
        <el-calendar class="rili"   :range="['2022-08-28', '2019-03-24']"> </el-calendar>
      </div>
    </div>
    <!-- 中 -->
    <div class="zhong"></div>
    <!-- 下 -->
    <div>
      <e-charts class="ech" :option="option" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      option: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      },
    };
  },
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.ech {
  /*   background-color: aqua; */
  height: 400px;
}
.shang {
  display: flex;
  justify-content: space-evenly;
  width: 845px;
  height: 176px;
  background-color: bisque;
  margin-bottom: 20px;
}
.zhong {
  width: 845px;
  height: 176px;
  background-color: bisque;
  margin-bottom: 20px;
}
.xia {
  width: 845px;
  height: 176px;
  background-color: antiquewhite;
  margin-bottom: 20px;
}
.rili{
  width: 300px;
  height: 200px;
}
</style>
