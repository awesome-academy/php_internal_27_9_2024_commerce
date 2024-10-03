<script>
import { defineComponent, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import { cartListMockup } from '@/constants/products';
import CartView from './CartView.vue';

export default defineComponent({
    name: "OrderDetail",
    components: {
        CartView
    },
    setup() {
        const { t } = useI18n()

        const listCart = reactive(cartListMockup);
        
        const totalPrice = listCart.reduce((total, item) => total + (item.price * item.quantity), 0)
        
        const methodsPayment = [
            'cod'
        ]

        return {
            t,
            listCart,
            totalPrice,
            methodsPayment
        }
    }
})
</script>

<template>
    <CartView 
        :isOrderDetailView=true 
        :titleOrderDetailView="'order_list.order_detail'"
    />
</template>
