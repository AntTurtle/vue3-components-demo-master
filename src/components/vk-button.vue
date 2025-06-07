<script setup lang="ts">
defineOptions({
    name: 'vkButton',
})
defineProps({
    type: {
        type: String,
        default: 'primary'
    },
    size: {
        type: String,
        default: 'default'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    autofocus: {
        type: Boolean,
        default: false
    },
    nativeType: {
        type: String,
        default: 'button'
    },
})



</script>

<template>
    <el-button v-bind="$attrs" :type="type" :size="size" :disabled="disabled" :autofocus="autofocus" :native-type="nativeType">
        <slot></slot>
    </el-button>
</template>

<style lang="css" scoped>

.el-button--red {
     background-color: red;
     color: white;
}
</style>