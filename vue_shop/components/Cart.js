export default{
    props:['count', 'cartProducts'],
    template: `<div>
     <img src="images/cart.jpg" width="40px" />  
     <span>{{count}}</span>
     <ul>
     <li v-for="cartProduct in cartProducts">{{cartProduct.description}}</li>
     </ul>
     </div>`,
  }
  