<template>
    <FormCreate :rule="rule" v-model:api="fApi" :option="options"></FormCreate>
</template>

<script lang="ts" setup>
import formCreate, { Rule, Options } from '@form-create/element-ui'
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
    resetBtn: true
}) as Options

const store = useAlgorithmStore()
/** 深层对象需要进行computed */
const rule = computed(() => store.Controller.templateRules)

</script>