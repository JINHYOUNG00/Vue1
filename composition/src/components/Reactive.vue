<template>
    <div>{{ state.nested.count }}</div>
    <div>{{ state.arr[1] }}</div>
    <button @click="increment">증가</button>
</template>

<script setup>
import { reactive } from 'vue'

const state = reactive({
    nested: { count: 0 },
    arr: ['foo', 'bar']
})

function increment() {
    state.nested.count++;
}

</script>

<style></style>