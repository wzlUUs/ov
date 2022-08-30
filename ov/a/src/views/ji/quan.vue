<template>
  <div>
    <p>权限管理</p>
    <p>
      权限名称 <input type="text" placeholder="请输入姓名" />
      <button>查询</button>
      <button>重置</button>
      <button>新增权限</button>
    </p>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index"  label="ID" width="50"> </el-table-column>

      <el-table-column prop="name" label="权限名称" width="120">
      </el-table-column>
      <el-table-column prop="province" label="备注" width="120">
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
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped></style>
