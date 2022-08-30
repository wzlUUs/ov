<template>
  <div>
    <p>菜单管理</p>
    <p>
      权限名称 <input type="text" placeholder="请输入姓名" />
      <button>查询</button>
      <button>重置</button>
      <button>新增权限</button>
    </p>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="date" label="菜单名称" width="150">
      </el-table-column>
      <el-table-column prop="name" label="菜单路径" width="120">
      </el-table-column>
      <el-table-column prop="province" label="排序" width="120">
      </el-table-column>
      <el-table-column prop="city" label="菜单图标" width="120">
      </el-table-column>
      <el-table-column prop="address" label="菜单类型" width="300">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >编辑</el-button
          >
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 简述 -->
    <div>
      <ul>
        <li>说明: 目录表示一级菜单</li>
        <li>菜单表示子菜单</li>
        <li>后端的返回数据应有level层级区分</li>
      </ul>
      <ul>
        <li>待商量</li>
        <li>id是否需要,商量一下啊,自我理解,id并不需要,因为</li>
        <li>数据的动态添加和删除,id是可以改变的,应该以</li>
        <li>path作为表示</li>
      </ul>
    </div>
    <!--  分页  -->
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
