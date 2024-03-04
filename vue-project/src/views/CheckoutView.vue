<script setup>
import { ref } from "vue";

const cart = ref([
]);

function removeFromCart(index) {
  cart.value[index].quantity--;
  if (cart.value[index].quantity === 0) {
    cart.value.splice(index, 1);
  }
}

function calculateTotalPrice() {
  return cart.value.reduce((total, item) => total + item.price * item.quantity, 0);
}
</script>

<template>
  <div class="cart">
    <h2>Shopping Cart</h2>
    <div v-if="cart.length === 0">Your cart is empty. 😟😞☹ invis cart?? </div>
    <div v-else>
      <div v-for="(ingredient, index) in cart" :key="index">
    <img :src="ingredient.img" :alt="ingredient.name" width="500" height="500">
    <div>{{ ingredient.name }} - {{ ingredient.price }}$ x {{ ingredient.quantity }}</div>
    <button @click="removeFromCart(index)">Remove</button>
</div>
      <div>Total Price: {{ calculateTotalPrice() }}$</div>
    </div>
  </div>
</template>