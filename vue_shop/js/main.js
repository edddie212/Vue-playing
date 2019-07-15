import Store from '../pages/Store.js'
import About from '../pages/About.js'
import ProductDetails from '../pages/ProductDetails.js'
import NotFound from '../pages/NotFound.js'
    
  // const NotAvailable = Vue.component('not-available', {
  //   template: `<div>
  //  The Product  is not found!!!
  //   </div>`
   
  //  })
  
  const router = new VueRouter({
    routes: [
      {'path': '/', component: Store},
      {'path': '/about', component: About},
      {'path': '/product/:id', component: ProductDetails, props:true},
      {'path': '*', component: NotFound},
    ]
  })
  
  new Vue({
    el:"#app",router,
    template: `<div>
    <div class="menu">
    <router-link to="/">Home | </router-link>   
    <router-link to="/about">About</router-link>   
     </div>
    <router-view></router-view>
    </div>
    ` 
  })
  
  
  
  