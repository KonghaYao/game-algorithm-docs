<template>
    <div class="h-full p-2">
        <div class="bg-gray-100 flex h-full flex-col p-4 items-center">
            <el-menu :collapse="isCollapse" router>
                <el-menu-item :index="'/Algorithm/' + name" v-for="name in names" :key="name">
                    <template #title>{{ name }}</template>
                </el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { algorithmList } from '../../router/algorithmList';
const names = algorithmList.map(i => i.name);
const isCollapse = ref(false)

</script>