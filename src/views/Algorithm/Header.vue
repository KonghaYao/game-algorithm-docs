<template>
    <div class="w-full h-12 bg-purple-600 items-center flex">
        <div class="text-lg text-white px-4 select-none pointer-events-none">江夏尧游戏算法库</div>
        <div class="flex-grow"></div>

        <el-button type="primary" icon="el-icon-edit" circle @click="toggleShow"></el-button>
    </div>
</template>

<script lang="ts" setup>

import { useAlgorithmStore } from './store'
const store = useAlgorithmStore()
const toggleShow = () => store.toggleShow('Controller')
</script>
