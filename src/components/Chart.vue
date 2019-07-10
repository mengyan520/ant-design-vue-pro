<template>
  <div ref="chartDom"></div>
</template>

<script>
import echarts from "echarts";
import { addListener, removeListener } from "resize-detector";
import debounce from "lodash/debounce";
export default {
  props: {
    option: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    // option(val) {
    //     this.myChart.setOption(val);
    // }
    option: {
      handler(val) {
        this.myChart.setOption(val);
      },
      deep: true
    }
  },
  created() {
    // resize方法性能优化
    this.resize = debounce(this.resize, 300);
  },
  mounted() {
    this.renderChart();
    addListener(this.$refs.chartDom, this.resize);
  },
  methods: {
    resize() {
      console.log("resize");
      this.myChart.resize();
    },
    renderChart() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(this.$refs.chartDom);
      //绘制图表
      this.myChart.setOption(this.option);
    }
  },
  beforeDestroy() {
    removeListener(this.$refs.chartDom, this.resize); //移除监听
    //释放图表对象
    this.myChart.dispose();
    this.myChart = null;
  }
};
</script>
