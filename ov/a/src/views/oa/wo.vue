<template>
  <div>
    <p class="qyi">
      审批类型 :
     <el-select v-model="value" placeholder="请假">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

      申请人 : <el-input class="yi" placeholder="请输入账号" v-model="input" />

      审批状态 :
      <el-input class="yi" placeholder="请输入内容" v-model="input" />
    </p>
    <p>
      <el-button class="an">查询</el-button> <span>我发起的</span>
      <el-button class="an">重置</el-button>
      <el-button class="an">新增申请</el-button>
    </p>
    <!-- 表单 -->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed type="index" width="50" label="ID">
      </el-table-column>
      <el-table-column prop="date" label="申请人" width="80"> </el-table-column>
      <el-table-column prop="name" label="审批类型" width="120">
      </el-table-column>
      <el-table-column prop="province" label="申请时间" width="120">
      </el-table-column>
      <el-table-column prop="city" label="当前审批人" width="100">
      </el-table-column>
      <el-table-column prop="address" label="审批状态" width="80">
      </el-table-column>
      <el-table-column prop="zip" label="所属部门" width="120">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button size="mini" @click="xiang(scope.$index, scope.row)">
            详情
          </el-button>
          <el-button size="mini" @click="guo(scope.$index, scope.row)">
            撤回
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
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value:"",
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
