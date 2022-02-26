<template>
    <div class="w-full h-12 bg-purple-600 items-center flex">
        <div class="text-xl text-white px-4 select-none pointer-events-none">江夏尧游戏算法库</div>
        <div class="flex-grow"></div>

        <el-button type="primary" class="mx-2" :icon="Edit" @click="toggleShow">
            <template #default>
                <span class="transition-all">数据编辑器</span>
            </template>
        </el-button>
        <el-button
            type="danger"
            class="mx-2"
            :icon="Link"
            @click="jumpTo('https://gitee.com/dongzhongzhidong/game-algorithm')"
        >
            <template #default>
                <span>Gitee 仓库</span>
            </template>
        </el-button>
        <el-button
            type="warning"
            class="mx-2"
            :icon="Top"
            @click="jumpTo('https://www.npmjs.com/package/game-algorithm')"
        >
            <template #default>
                <span>NPM 仓库</span>
            </template>
        </el-button>
    </div>
</template>

<script lang="ts" setup>
import { ElButton } from 'element-plus';
import { Edit, Link, Top } from '@element-plus/icons-vue';
import { ref } from 'vue';
import { useAlgorithmStore } from './store'
const store = useAlgorithmStore()
const toggleShow = () => store.toggleShow('Controller')
const jumpTo = (url: string) => {
    window.open(url)
}
</script>
