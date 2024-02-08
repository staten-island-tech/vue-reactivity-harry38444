<template>
  <div>
    <h2>{{ Destination.name }}</h2>
    <img :src="Destination.img" alt="" />
    <h3>{{ clicked }}</h3>
    <button @click="increment">Click Me</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  Destination: Object,
});

//clicker logic
let clicked = ref(0);
function increment() {
  clicked.value++;
}
</script>

<style scoped>
img {
  width: 250px;
  height: 300px;
  object-fit: cover;
}
</style>