<template>
  <div id="app">
    <product-list-one></product-list-one> 
    <product-list-two></product-list-two>  
  </div>
</template>

<script>
import productlistone from './components/productlistone.vue'
import porductlisttwo from './components/porductlisttwo.vue'
export default {
  name: 'App',
  components:{
    'product-list-one':productlistone,
    'product-list-two':porductlisttwo,
  },
  data(){
    return{
      
    }
  }
}
</script>

<style>

</style>
