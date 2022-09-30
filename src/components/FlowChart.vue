<script lang="ts">
import { ref } from 'vue'
import LogicFlow from '@logicflow/core'
import '@logicflow/core/dist/style/index.css'
import '@logicflow/extension/lib/style/index.css'
import { S12Plugin } from './s12-plugin/index'
import { groupData } from './data'

export default {
  setup() {
    const count = ref(0)
    const currentNode = ref(null)
    return {
      count,
      currentNode
    }
  },
  mounted() {
    const lf = new LogicFlow({
      container: this.$refs.container,
      width: 1200,
      height: 700,
      grid: false,
      adjustNodePosition: false,
      textEdit: false,
      stopZoomGraph: true,
      stopScrollGraph: true,
      stopMoveGraph: true,
      keyboard: {
        enabled: true
      },
      edgeType: 'better-line',
      plugins: [
        S12Plugin
      ]
    })
    lf.setTheme({
      polyline: {
        stroke: 'rgb(130, 179, 102)',
        strokeWidth: 1,
      },
      arrow: {
        offset: 4, // 箭头垂线长度
        verticalLength: 2, // 箭头底线长度
      }
    })
    lf.on('custom-event:clone-team', (e) => {
      const data = e.getData()
      lf.dnd.startDrag({
        type: 'team-node',
        text: data.text.value,
        properties: data.properties
      })
    })
    lf.render(
      groupData
    )
    lf.graphModel.transformModel.zoom(0.9)
    this.lf = lf
  },
  methods: {
    getData () {
      console.log(JSON.stringify(this.lf.getGraphData()))
    }
  },
  components: {
  }
}
</script>

<template>
  <div class="flow-chart">
    <div ref="container" class="container"></div>
    <!-- <button @click="getData">获取数据</button> -->
  </div>
</template>

<style scoped>
.flow-chart {
  position: relative;
  width: 1200px;
  margin: 0 auto;
  height: 100%;
}
.flow-chart :deep(.lf-graph) {
  background: rgb(247, 247, 247);
}
.flow-chart :deep(.lf-red-node), .flow-chart :deep(.lf-element-text) {
  cursor: move;
}
.flow-chart :deep(svg) {
  display: block;
}
.flow-chart-palette {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
.setting-panel {
  position: absolute;
  top: 0;
  right: 0;
}
.flow-chart :deep(.lf-element-text) {
  pointer-events: none;
}
</style>
