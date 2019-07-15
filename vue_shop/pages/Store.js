import Cart from '../components/Cart.js'
import Product from '../components/Product.js'
import products from '../data/products.js'

export default {
  components:{
    Cart,Product
  },
  template: `<div>
    <cart :count="cartCount"
  :cart-products="cartProducts">
  </cart>
  <br>
  <product class="product" 
  v-for="product in products" 
  :description="product.description"
  :key="product.id"
  :id="product.id" 
  :image="product.image"
  @add-to-cart="addToCart"
  >
  </product>
    </div>`,
    methods: {
      addToCart(id){
     this.cartCount++;
     const product =  this.products.find(product => product.id === id);
     this.cartProducts.push(product);
    },
   },
    data() {
      return {
      products,
      cartProducts: [
   
      ],
      cartCount: 0
     }
    }
  

  
}