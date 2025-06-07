<script setup lang="ts">
definereProps({
    direction: {
        type: String,
        default: 'row',
        validator: (val: any) => {
            return ['row', 'column'].includes(val)
        }
    },
    gap: {
        type: String,
        default: '0'
    },
    align: {
        type: String,
        default: 'center'
    },
    justify: {
        type: String,
        default: 'center',
        validator: (val: any) => {
            return ['center', 'start', 'end', 'space-around', 'space-between', 'space-evenly'].includes(val)
        }
    }
})
const containerStyle = computed({

})
</script>

<template>
    <div :class="['custom-container', direction]" :style="containerStyle">
        <slot></slot>
    </div>
</template>

<style lang="css" scoped></style>