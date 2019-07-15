import products from '../data/products.js'

export default {
    props:['id'],
    data(){
      return {products}
    },
   //  mounted() {
   //   this.product =  this.products.find(product => product.id === +this.id)
   //  },
   computed: {
     product(){
       if(this.products.length === 0){
         return {
          id: null,
          description: '',
          longDescription: '',
         }
       }
       return this.products.find(product =>
       product.id === +this.id)
     }
   },
    template: `<div>
    <div v-if="product">{{product.longDescription}}</div>
    <div v-else>This Product is not found</div>
   
    </div>`,
   
   }