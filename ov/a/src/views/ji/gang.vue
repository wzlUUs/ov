<template>
  <div>
    <p>岗位管理</p>
    <p>岗位名称: <input type="text" placeholder="请输入姓名" /></p>
    <p><button>查询</button> <button>重置</button> <button>新增菜单</button></p>
    <!-- 表单 -->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed type="index" width="50" label="ID" />
      <el-table-column fixed prop="date" label="职位名称" width="150">
      </el-table-column>

      <el-table-column prop="address" label="备注" width="300">
      </el-table-column>

      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="bian(scope.row)" type="text" size="small"
            >编辑</el-button
          >
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
   <!-- 介绍 -->
   <div>
     <ul>
      <li>带商量</li>
      <li>id 是否需要商量一下</li>
     </ul>
   </div>

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
