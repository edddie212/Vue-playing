<template>
<div class="cart">
  <img src="../assets/cart.jpg" width="40px" />  
  <span>{{count}}</span>
  <ul>
  <li v-for="cartProduct in cartProducts"
  :key="cartProduct.id">{{cartProduct.description}}</li>
  </ul>
  </div>
</template>

<script>
export default {
props:['count', 'cartProducts'],   
}
</script>