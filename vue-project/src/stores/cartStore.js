import { reactive, readonly } from "vue";

const state = reactive({
  cart: [],
});

const addToCart = (ingredient) => {
  const existingItemIndex = state.cart.findIndex((item) => item.name === ingredient.name);
  if (existingItemIndex !== -1) {
    state.cart[existingItemIndex].quantity++;
  } else {
    state.cart.push({ ...ingredient, quantity: 1 });
  }
};

const removeFromCart = (index) => {
  state.cart[index].quantity--;
  if (state.cart[index].quantity === 0) {
    state.cart.splice(index, 1);
  }
};

const calculateTotalPrice = () => {
  return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

export default {
  cart: readonly(state.cart),
  addToCart,
  removeFromCart,
  calculateTotalPrice,
};
