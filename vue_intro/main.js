Vue.component('todo-item', {
 props:['item'],
 template: '<li>{{item.text}}</li>',
})

//root
var app = new Vue({
  el:"#app",
  data:{
  groceryList:[
   {id: 1, text:'Playing'},
   {id: 2, text: 'With'},
   {id: 3, text: 'Vue'},
  ],    
  todos: [
      {text:'Learn javascript'},
      {text: 'Learn Vue.js'},
      {text: 'Build something awesome'},     
],
   n: 0,   
   buttonText: 'Welcome Everyone',
   message: 'Hello World!',
   selected: 'A',
   options:[
       {text:'One', value:'A'},
       {text:'Two', value:'B'},
       {text:'Three', value:'C'},
   ],
   items: [
    'Buy Milk', 
    'Do HomeWork',
    'Slepp Well to code better'
   ],
   isActive: true,
   error: null,
   firstName:'',
   lastName: '',
   fullName: ''
} ,

methods: {
  clickMe(){
   this.buttonText = 'Yellaalalala';
   },
//   reverseMessage (){
//    this.message = this.message.split('').reverse().join('');
//   }
},

computed:{
 reverseMessage(){
  return this.message.split('').reverse().join();  
    },
  itemsCount(){
    return this.items.length;
    },
  classObject(){
    return {
        active: this.isActive && !this.error, 
        'text-danger': this.error && this.error.type === 'fatal',
    }
  },  

},

watch: {
 firstName(val, oldVal){
  this.fullName = val + ' ' + this.lastName ;  
 },

 lastName(val, oldVal){
   this.fullName == this.firstName + ' ' + val;
  }
 },
})