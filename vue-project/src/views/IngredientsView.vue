<template>
  <div class="ingredient-container">
    <DestCard v-for="(ingredient, index) in ingredients" :key="index" :ingredient="ingredient" />
  </div>
</template>


<script setup>
import DestCard from '../components/DestCard.vue';
import cartStore from '@/stores/cartStore.js';

const { addToCart } = cartStore;

const ingredients = [
  {
    name: "Cucumbers",
    price: 1.25,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1SWJFkhIv4METvfeqrBZCBPWOq3XGX7YB9A&usqp=CAU",
  },
  {
    name: "Peppers",
    price: 1.15,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi1Jh9NbWWTTCyKXPdcomPWYs-sRk-DWCOyQ&usqp=CAU",
  },
  {
    name: "Tomatoes",
    price: 1.10,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOwsuSTL4lHWWWtjuJe9dglJBXhdWXOTs3EA&usqp=CAU",
  },
  {
    name: "Lettuce",
    price: 1.20,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnLGMKyA9fQFU5TTuQK9HjEeQmZMBR0wRitA&usqp=CAU",
  },
  {
    name: "Spinnach",
    price: 1.50,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcWIIcQ-uZWbbtkjFQN4EzJvO3FTbt6TrvOw&usqp=CAU",
  },
  {
    name: "Avocado",
    price: 2.50,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXZ98VkGlLbMr3z3tquOEXyX3505iZ6cFsg&usqp=CAU",
  },
  {
    name: "Ranch",
    price: 1.75,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz5vZQgZBsh0AOwII_wl84XxrHv7TuqlJ-2A&usqp=CAU",
  },
  {
    name: "Balsamic Vinaigrette",
    price: 1.75, 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UZ6pxsmvd-IRLCJ6Q2H8C60IpLi9li4O2Q&usqp=CAU",
  }
];

</script>
<style scoped>
.ingredient-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  background-color:beige;
  border: 1px solid black;
  border-radius: 8px; 
}

</style>