<template>
<div class="product">
 <el-button type="success" round class="add-to-cart" @click="$emit('add-to-cart', id)">Add To Cart</el-button>
 <div class="description">Item Description: {{description}}</div>
 <div class="image"><img :src="require('../assets/'+image)"/></div>
  <el-button class="elBtn" type="success"  circle>
 <router-link class="rlink" :to="'/product/'+id">Show</router-link>
 </el-button>
 </div>
</template>

<script>
export default {
 props:['description', 'image', 'id'],   
}
</script>

<style scoped>
  .product{
  border: 2px solid black;
  height: 450px;
  /*float: left;
  width: 255px;
  margin: 10px;
  padding: 20px; */
}
.elBtn{
  margin-top: 15px;
}
.rlink{
  text-decoration: none;
  color:black;
}
</style> 