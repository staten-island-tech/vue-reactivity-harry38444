<template>
  <div class="dest-card">
    <div class="image-container">
      <img :src="ingredient.img" :alt="ingredient.name" class="ingredient-image" />
    </div>
    <div class="info-container">
      <h2 class="ingredient-name">{{ ingredient.name }}</h2>
      <div class="ingredient-price">$ {{ ingredient.price.toFixed(2) }}</div>
      <button class="add-to-cart-button" @click="addToCart(ingredient)">Add to Cart</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import cartStore from '@/stores/cartStore.js';

const props = defineProps({
  ingredient: Object,
});

const { addToCart } = cartStore;

const emit = defineEmits();
</script>

<style scoped>
.dest-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px;
  margin: 8px;
  background-color: #fff;
  width: 300px; 
}

.image-container {
  margin-bottom: 8px;
  
}

.ingredient-image {
  width: 17vw;
  height: 20vh;
  border-radius: 8px;
}

.info-container {
  display: flex;
  flex-direction: column;
}

.ingredient-name {
  font-size: 1.2rem;
  margin-bottom: 8px;
}

.ingredient-price {
  font-size: 1rem;
  margin-bottom: 8px;
}

.add-to-cart-button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-to-cart-button:hover {
  background-color: #0056b3;
}
</style>
