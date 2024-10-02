<script lang="ts">
import {  defineComponent } from 'vue';

export default defineComponent({
    props: {
            product: {
                type: Object,
                required: true,
            },
        },
})
</script>

<template>
    <div class="itemProducts">
        <a :href="`/products/${product.id}`">
            <span class="itemProducts_label"></span>
            <span class="imgPrd">
                <img :src=product.image 
                    :alt=product.name
                    class="max-w-[250px]"
                    style="background: 
                    url(&quot;https://cong-news.appwifi.com/wp-content/uploads/2023/02/cốt-dừa-đậu-xanh_1.jpg&quot;) 
                    center center / cover no-repeat;">
            </span>
            <h2 class="itemTitle font-bold text-[#4c5b29]">{{ product.name }}</h2>
            <span class="price font-medium text-[#4c5b29]">
                {{product.price}} Đ
            </span>
        </a>
    </div>
  </template>
