<template>
    <div class="h-full p-2">
        <div class="h-full bg-gray-100 flex flex-col p-4">
            <el-button
                type="primary"
                round
                v-for="name in names"
                :key="name"
                class="font-bold"
                @click="jumpTo(name)"
            >{{ name }}</el-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import router from '../../router';
import { algorithmList } from '../../router/algorithmList';
const names = algorithmList.map(i => i.name);
const jumpTo = (name: string) => {
    router.push({ name })
}
</script>