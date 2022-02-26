<template>
    <div class="flex flex-col">
        <Detail :template="template"></Detail>
    </div>
</template>

<script lang="ts" setup>
import Detail from '../Common/Detail.vue'
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