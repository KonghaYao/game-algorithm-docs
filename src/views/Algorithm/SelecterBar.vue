<template>
    <div class="h-full p-2">
        <div class="bg-gray-100 flex h-full flex-col p-4 text-left">
            <div class="text-lg border-b-2">算法列表</div>
            <router-link
                class="w-48 mt-2 rounded-sm transition-colors duration-500"
                active-class="bg-blue-100"
                :to="{ name: Route.name }"
                v-for="Route in routes"
                :key="Route.name"
            >
                <div class="flex items-center">
                    <el-icon class="mx-2">
                        <caret-right />
                    </el-icon>
                    <span>{{ Route.meta.name }}</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { CaretRight } from '@element-plus/icons-vue';
import { ref } from 'vue';
import { algorithmList } from '../../router/algorithmList';
const routes = algorithmList

</script>