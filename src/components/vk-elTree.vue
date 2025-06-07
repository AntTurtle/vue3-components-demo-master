<script setup lang="ts">

const props = defineProps({
  props: {
    type: Object,
    default: () => ({})
  },
  data: {
    type: Array,
    default: () => []
  },
  nodeKey: {
      
  }
})
</script>

<template>
   <el-tree
    :props="props"
    :data="data"
    :node-key="nodeKey"
    :default-expanded-keys="defaultExpandedKeys"
    :check-strictly="checkStrictly"
    @check="check"
    @node-click="nodeClick"
  />
</template>

<style lang="css" scoped>

</style>