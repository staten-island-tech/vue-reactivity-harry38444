
<template>
  <div class="Checkout">
    <h1>This is the checkout</h1>
  </div>
</template>
<script>import { reactive } from "vue";
export const Price = reactive({
  count: 0,
});
</script>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>