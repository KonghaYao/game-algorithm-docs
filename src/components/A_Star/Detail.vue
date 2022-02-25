<template>
    <div class="flex flex-col">
        <span v-for="{ name, value } in template" class="row">
            <span>{{ name }}</span>
            <span>{{ value }}</span>
        </span>
        <span>点击地图上两点开始寻路</span>
    </div>
</template>
<style scoped>
.row {
    @apply flex flex-row justify-between;
}
</style>
<script lang="ts" setup>
import { computed, reactive, ref } from 'vue';
import { useStore } from './store';

const store = useStore()

const template = reactive<{
    name: string,
    value: any
}[]>([])

template.push({
    name: "宽",
    value: computed(() => store.height)
}, {
    name: "高",
    value: computed(() => store.width)
}, {
    name: "种子",
    value: computed(() => store.seed)
})
</script>