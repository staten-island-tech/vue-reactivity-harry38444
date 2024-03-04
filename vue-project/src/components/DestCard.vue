<template>
  <div>
    <h2>{{ ingredient.name }}</h2>
    <img :src="ingredient.img" alt="" />
    <button @click="addToCart(ingredient)">Add to Cart</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  ingredient: Object,
});

const emit = defineEmits();

function addToCart(ingredient) {
  emit('addToCart', ingredient);
}
</script>