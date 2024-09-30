<script>
import { defineComponent, reactive } from 'vue';
import ProductItem from '../components/product/ProductItem.vue'; 

export default defineComponent ({
name: 'ProductList',
components:{
  ProductItem
},
setup() {
  const productsList= reactive([
      {
          id: 1,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOoRcTP_2RnOlWOysKxCf6lk_HBlDxv9nHig&s",
          name: 'Coconut Mung Bean',
          description: 'Cafe sieu ngon Cafe sieu ngon Cafe sieu ngon Cafe sieu ngon Cafe sieu ngon',
          price: 65000,
      },  
      {
          id: 2,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOoRcTP_2RnOlWOysKxCf6lk_HBlDxv9nHig&s",
          name: 'Egg Coffee 1',
          description: 'Cafe trứng béo ngậy, ngọt ngào, hấp dẫn mọi thực khách.',
          price: 60000,
      },
      {
          id: 3,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOoRcTP_2RnOlWOysKxCf6lk_HBlDxv9nHig&s",
          name: 'Egg Coffee 2',
          description: 'Cafe trứng béo ngậy, ngọt ngào, hấp dẫn mọi thực khách.',
          price: 70000,
      },
      {
          id: 4,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOoRcTP_2RnOlWOysKxCf6lk_HBlDxv9nHig&s",
          name: 'Fruit Smoothie',
          description: 'Sinh tố trái cây tươi mát, bổ dưỡng cho sức khỏe.',
          price: 60000,
      },
      {
          id: 5,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOoRcTP_2RnOlWOysKxCf6lk_HBlDxv9nHig&s",
          name: 'Matcha Latte',
          description: 'Trà xanh matcha hòa quyện với sữa, tạo nên hương vị độc đáo.',
          price: 80000,
      },
      {
          id: 6,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOoRcTP_2RnOlWOysKxCf6lk_HBlDxv9nHig&s",
          name: 'Honey Lemon Tea',
          description: 'Trà chanh mật ong thơm ngon, giúp giải khát hiệu quả.',
          price: 45000,
      },
      {
          id: 7,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOoRcTP_2RnOlWOysKxCf6lk_HBlDxv9nHig&s",
          name: 'Taro Milk Tea',
          description: 'Trà sữa khoai môn béo ngậy, mang đến trải nghiệm mới lạ.',
          price: 75000,
      },
      {
          id: 8,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOoRcTP_2RnOlWOysKxCf6lk_HBlDxv9nHig&s",
          name: 'Choco Mint Latte',
          description: 'Cafe socola kết hợp với hương bạc hà, cho cảm giác sảng khoái.',
          price: 70000,
      },
      {
          id: 9,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOoRcTP_2RnOlWOysKxCf6lk_HBlDxv9nHig&s",
          name: 'Caramel Macchiato',
          description: 'Cafe với hương vị caramel ngọt ngào, thích hợp cho những ai yêu thích sự ngọt ngào.',
          price: 85000,
      },
      {
          id: 10,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOoRcTP_2RnOlWOysKxCf6lk_HBlDxv9nHig&s",
          name: 'Peach Iced Tea',
          description: 'Trà đào lạnh thơm mát, mang đến cảm giác dễ chịu trong những ngày hè.',
          price: 55000,
      }
  ]);

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
      <ProductItem  :product="product" />
    </div>
  </div>
</template>
