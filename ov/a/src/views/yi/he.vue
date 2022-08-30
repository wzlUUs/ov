<template>
  <div>
    <p class="qyi">
      姓名 : 
      <el-input class="yi" placeholder="请输入姓名" v-model="input" />

      账号 : <el-input class="yi" placeholder="请输入账号" v-model="input" />

      手机号 :
      <el-input class="yi" placeholder="手机号" v-model="input" />
    </p>
    <p>
      <el-button class="an">查询</el-button><span>代办事项</span>
      <el-button class="an">重置</el-button> 
      <el-button class="an">下载工资条模板</el-button> 
      <el-button class="an">上传</el-button> 
      <el-button class="an">新增工资条</el-button> 
    </p>
    <!-- 表单 -->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed type="index" width="50" label="ID">
      </el-table-column>
      <el-table-column prop="date" label="姓名" width="80"> </el-table-column>
      <el-table-column prop="name" label="出勤" width="120">
      </el-table-column>
      <el-table-column prop="province" label="旷工" width="120">
      </el-table-column>
      <el-table-column prop="city" label="请假" width="100">
      </el-table-column>
      <el-table-column prop="address" label="基本工资" width="80">
      </el-table-column>
      <el-table-column prop="zip" label="岗位工资" width="120">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button size="mini" @click="guo(scope.$index, scope.row)">
            修改
          </el-button>
          <el-button size="mini" @click="hui(scope.$index, scope.row)">
            删除
          </el-button>
      
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="tableData.length"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      tableData: "",
    };
  },
  methods: {
    guo() {
      /* 通过 */
    },
    hui() {
      /* 驳回 */
    },
    xiang() {
      /* 详情 */
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
span {
  background-color: antiquewhite;
}
.yi {
  width: 200px;
  height: 30px;
}
/* 按钮 */
.an {
  width: 80px;
  height: 30px;
  margin-top: 21px;
}
</style>
