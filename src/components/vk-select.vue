<script setup lang="ts">
const props = defineProps({
    value: {
        type: [String, Number, Boolean],
        default: ''
    },
    options: {
        type: Array,
        default: () => []
    }
})
const innerValue = ref(props.value);
const emit = defineEmits(['update:value', 'change'])
const handleInput = (value: any) => {
    innerValue.value = value
    emit('update:value', value)
}
const handleChange = (value: any) => {
    emit('change', value)
}
</script>

<template>
    <div>
        <el-select v-bind="$attrs" :value="innerValue" @input="handleInput" @change="handleChange">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>

<style lang="scss" scoped>

</style>