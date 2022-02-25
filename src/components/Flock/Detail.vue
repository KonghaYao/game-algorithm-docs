<template>
    <div class="flex flex-col w-full">
        <div v-for="{ name, value } in template" class="row">
            <span>{{ name }}</span>
            <span>{{ value }}</span>
        </div>
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
    name: "鸟的数目",
    value: computed(() => store.boidNumber)
}, {
    name: "信息素吸引距离",
    value: computed(() => store.emitterRadius)
})
</script>