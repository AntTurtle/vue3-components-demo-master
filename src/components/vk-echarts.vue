<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
const chartRef = ref<HTMLElement | null>(null)
//不记得 了，只知道需求是 折线图 和散点图，圆形和方形点，并调节点大小
//最好折线图和散点图分开封装？
</script>

<template>
    <div ref="chartRef"></div>
</template>

<style lang="css" scoped>

</style>