<script setup lang="ts">
import { ref } from 'vue'
import UserApi from '../api/api';
defineProps<{ msg: string }>()
const count = ref(0)
const test = async () => {
  const result = await UserApi.test("hello");
  count.value++;
  console.log(result.data);
}

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="test()">count is {{ count }}</button>
    
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
