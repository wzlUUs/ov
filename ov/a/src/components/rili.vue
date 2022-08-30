<template>
  <div></div>
</template>

<script>
export default {
  data () {
    return {
getYearMonthDay =  (date) => {
 let year = date.getFullYear();
 let month = date.getMonth();
 let day = date.getDate();
 return {year, month, day};
}
    }
  },
  methods: {

/* 我创建一个公共js里面放一些公共的方法方便在组件中调用；公共的js我就叫utils.js；
getYearMonthDay 就是utils里面的一个公共方法，是为了方便获取年月日； */


computed: {
    visibleCalendar: function () {
        let calendatArr = [];
       /*  先得到当前的年，月，日 */
        let {year, month, day} = utils.getNewDate(utils.getDate(this.time.year, this.time.month, 1));

        /* 获取当月的第一天 得到2019-5-1 */
        let currentFirstDay = utils.getDate(year, month, 1);

       /*  获取第一天是星期几 得到 3 */
        let weekDay = currentFirstDay.getDay();

/*         用当月的第一天减去 周几前面几天 这样就能得到上个月开始的天数 
        （当前月1号是周三，那么周一就是上个月的最后两天） */
        let startTime = currentFirstDay - (weekDay - 1) * 24 * 60 * 60 * 1000;

      /*   然后得到所有的日期 */
        for (let i = 0; i < 42; i++) {
          calendatArr.push({
            date: new Date(startTime + i * 24 * 60 * 60 * 1000),
            year: year,
            month: month + 1,
            day: new Date(startTime + i * 24 * 60 * 60 * 1000).getDate()
          })
        };
        return calendatArr
    }
}

  },
  created () {

  },
  mounted () {

  },
  components: {

  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang="scss" scoped></style>
