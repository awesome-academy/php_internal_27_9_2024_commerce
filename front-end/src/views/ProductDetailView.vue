<script>
import { defineComponent, reactive } from 'vue';
import ProductItem from '../components/product/ProductItem.vue'; 
import { useRoute } from 'vue-router';
import { productsMockup, productsRelatedMockup } from '@/constants/products';
import { useI18n } from 'vue-i18n';

export default defineComponent ({
name: 'ProductList',
components:{
  ProductItem
},
setup() {
const { t } = useI18n()

  const productListRelated= reactive(productsRelatedMockup);
  const route = useRoute();
  const productId = route.params.id;

  const currentProduct = productsMockup.find((product) => product.id == productId)

  const selectedProduct = reactive({
    quantity: 1
  });

  const increaseQuantity = () => {
    selectedProduct.quantity++;
  };

  const decreaseQuantity = () => {
    if (selectedProduct.quantity > 1) {
      selectedProduct.quantity--;
    }
  };

  const addToCart = () => {
    console.log({productId: currentProduct.id, Quantity: selectedProduct.quantity});
    // add cart
  };

  return {
    t,
    productListRelated,
    productId,
    currentProduct,
    selectedProduct,
    increaseQuantity,
    decreaseQuantity,
    addToCart
  }
}
})
</script>

<template>
<div class="mx-auto w-[880px] mt-10">
    <div class="flex justify-center gap-16">
        <div class="w-[50%]">
            <img 
                :src="currentProduct.image" 
                :alt="currentProduct.name"
                class="w-full object-cover"
            >
        </div>

        <div class="w-[50%] flex flex-col justify-center space-y-6">
            <h3 class="text-3xl text-[#4c5b29] font-semibold">
                {{ currentProduct.name }}
            </h3>
            <span class="text-xl text-[#4c5b29] font-bold">
                {{ currentProduct.price }} Đ
            </span>
            <p class="text-lg text-[#4c5b29] font-light">
                {{ currentProduct.description }}
            </p>

            <div class="flex items-center space-x-4">
                <button 
                    @click="decreaseQuantity" 
                    class="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md"
                    :disabled="selectedProduct.quantity <= 1"
                >
                    -
                </button>
                <input 
                    type="number" 
                    v-model.number="selectedProduct.quantity" 
                    min="1" 
                    class="w-16 text-center border border-gray-300 rounded-md text-[#4c5b29]"
                />
                <button 
                    @click="increaseQuantity" 
                    class="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md"
                >
                    +
                </button>
            </div>

            <button 
                @click="addToCart" 
                class="text-white text-lg py-3 px-6 rounded-lg bg-[#778e40] hover:bg-[#4c5b29]"
            >
                {{ t('product_detail.add_cart') }}
            </button>
        </div>
    </div>

    <div class="flex justify-between flex-wrap gap-8 my-10">
        <div 
            v-for="(product,index) in productListRelated" 
            :key="index" 
            class="col-6 col-sm-4"
            >
            <ProductItem :product="product" />
        </div>
    </div>
</div>
</template>
