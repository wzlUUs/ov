<template>
  <div>
    <p>配置审批流程</p>
    <p><button>添加审批流程</button></p>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" width="50" label="ID"> </el-table-column>
      <el-table-column fixed prop="date" label="流程名称" width="150">
      </el-table-column>
      <el-table-column prop="name" label="状态" width="120"> </el-table-column>
      <el-table-column prop="province" label="最后修改人" width="120">
      </el-table-column>
      <el-table-column prop="city" label="最后修改日期" width="120">
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <div class="block">
      <span class="demonstration">完整功能</span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage4: 1,
      tableData: "",
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
