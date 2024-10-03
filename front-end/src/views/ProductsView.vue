<script>
import { defineComponent, reactive } from 'vue';
import ProductItem from '../components/product/ProductItem.vue'; 
import { productsMockup } from '@/constants/products';

export default defineComponent ({
name: 'ProductList',
components:{
  ProductItem
},
setup() {
  const productsList= reactive(productsMockup);

  return {
      productsList,
  }
}
})
</script>

<template>
  <div class="flex justify-start flex-wrap gap-4">
    <div 
      v-for="(product,index) in productsList" 
      :key="index" 
      class="col-6 col-sm-4"
    >
      <ProductItem :product="product" />
    </div>
  </div>
</template>
