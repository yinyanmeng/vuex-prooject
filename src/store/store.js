import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	strict:true,
	state:{
		products:[
	        {name:"马云",price:200},
	        {name:"bb",price:140},
	        {name:"cc",price:100},
	        {name:"dd",price:40}
	      ]
	},
	getters:{
		saleProducts:(state) =>{
			var saleProducts = state.products.map(
		      product =>{
		        return {
		          name:"**"+ product.name +"**",
		          price:product.price/2
		        }
		      });
		      return saleProducts;		     
			}		  
	},
	mutations:{		
			reducePrice: (state,payload) => {
				//setTimeout(function(){
					state.products.forEach(product =>{
				      product.price -= payload;
				    })
			    //},3000);
			}
	},
	actions:{
		reducePrice:(context,payload) =>{
			setTimeout(function(){
				context.commit("reducePrice",payload);
			},2000)
		}
	}
})



