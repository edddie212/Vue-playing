<template>
<div class="home">
    <cart :count="cartCount"
  :cart-products="cartProducts">
  </cart>
  <el-button type="warning" @click="getData()">Get Data</el-button>
  <br><br>
  <el-row :gutter="10" >
  <el-col :span="11"  v-for="product in products"
  :key="product.id" >
  <product class="product" 
  :description="product.description"
  :id="product.id" 
  :image="product.image"
  @add-to-cart="addToCart"
  >
  </product>
  </el-col>
   </el-row>
    </div>
    </template>

<script>
import Cart from '@/components/Cart.vue';
import Product from '@/components/Product.vue';
import {URL} from '@/services/config.js';
export default {
  name:"home",
  components:{
    Cart,Product
  },
    methods: {
      getData(){
      this.products = this.$http.get(URL).then((res)=>{
       this.products = res.data;
              })
      },
      addToCart(id){
     this.cartCount++;
     const product =  this.products.find(product => product.id === id);
     this.cartProducts.push(product);
    },
   },
    data() {
      return {
      products: [],
      cartProducts: [],
      cartCount: 0
     };
    },
    mounted() {
     this.getData()
  
    },  
};
</script>
