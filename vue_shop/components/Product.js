export default {
    props:['description', 'image', 'id'],
    template: `<div>
   <button class="add-to-cart" @click="$emit('add-to-cart', id)">Add To Cart</button>
   <div class="description">Item Description: {{description}}</div>
    <div class="image"><img :src="image"/></div>
    <router-link :to="'/product/'+id">Show Details</router-link>
    </div>`
   
}