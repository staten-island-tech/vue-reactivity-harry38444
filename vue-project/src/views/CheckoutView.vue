<template>
  <div class="checkout-container">
    <h2>Shopping Cart</h2>
    <div v-if="cart.length === 0" class="empty-cart-message">Your cart is empty. 😟</div>
    <div v-else>
      <div v-for="(ingredient, index) in cart" :key="index" class="cart-item">
        <div class="item-info">
          <img :src="ingredient.img" :alt="ingredient.name" class="item-image" />
          <div class="item-details">
            <div class="item-name">{{ ingredient.name }}</div>
            <div class="item-price">{{ ingredient.price }}$ x {{ ingredient.quantity }}</div>
          </div>
        </div>
        <button class="remove-button" @click="removeFromCart(index)">Remove 1</button>
      </div>
      <div class="total-price">Total Price: {{ calculateTotalPrice() }}$</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import cartStore from "@/stores/cartStore.js";

const { cart, removeFromCart, calculateTotalPrice } = cartStore;
</script>

<style scoped>
.checkout-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color:beige;
  border: 1px solid black;
  border-radius: 8px; 
}

.empty-cart-message {
  font-size: 1.2rem;
  text-align: center;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.item-info {
  display: flex;
  align-items: center;
}

.item-image {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  margin-right: 20px;
}

.item-details {
  flex-grow: 1;
}

.item-name {
  font-size: 1.2rem;
  font-weight: bold;
}

.item-price {
  font-size: 1rem;
  color: #777;
}

.remove-button {
  padding: 8px 16px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.remove-button:hover {
  background-color: #c82333;
}

.total-price {
  margin-top: 20px;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
