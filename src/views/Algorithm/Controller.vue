<template>
    <div v-show="store.Controller.show" class="bg-blue-50 p-4 h-full border-l-2 select-none">
        <div
            class="my-2 text-lg text-right border-b-2 bg-purple-500 text-white rounded-md px-2 hover:bg-purple-400"
        >数据编辑器</div>
        <div class="h-full p-4 text-left bg-purple-100 rounded-md">
            <FormCreate :rule="rule" v-model:api="fApi" :option="options"></FormCreate>
        </div>
    </div>
</template>

<style scoped>
.el-form-item__label {
    text-align: left;
}
</style>

<script lang="ts" setup>
import formCreate, { Options } from '@form-create/element-ui'
import { reactive, ref, computed } from 'vue'
import { hub, useAlgorithmStore } from './store'
const FormCreate = formCreate.$form();
const fApi = reactive({})
const options = ref({
    onSubmit(formData: { height: number, width: number, seed?: string }) {
        console.log(formData);
        if (formData.seed === '') formData.seed = undefined
        hub.emit('Controller-Change', formData)
    },
    form: {
        labelWidth: 'auto',
        labelPosition: 'left',
    },
    row: {
        type: "flex",
        align: "middle",
        justify: "space-between",
    }
}) as Options

const store = useAlgorithmStore()
/** 深层对象需要进行computed */
const rule = computed(() => store.Controller.templateRules)

</script>