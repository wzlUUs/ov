<template>
  <div>
    <p>用户管理</p>
    <p>
      <span>姓名: <input type="text" placeholder="请输入姓名" /></span>
      <span>所属部门: <input type="text" placeholder="请输入部门" /></span>
      <span>手机号: <input type="text" placeholder="请输入手机号" /></span>
    </p>
    <p><button>查询</button> <button>重置</button> <button>新增用户</button></p>
    <!-- 表单 -->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed type="index" width="50" label="ID" />
      <el-table-column fixed prop="date" label="用户名称" width="150">
      </el-table-column>
      <el-table-column prop="name" label="账号" width="120"> </el-table-column>
      <el-table-column prop="province" label="手机号" width="120">
      </el-table-column>
      <el-table-column prop="city" label="所属角色" width="120">
      </el-table-column>
      <el-table-column prop="address" label="所属职级" width="300">
      </el-table-column>
      <el-table-column prop="zip" label="所属部门" width="120">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >修改</el-button
          >
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: "",
      currentPage4: 4,
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped></style>
