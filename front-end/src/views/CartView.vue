<script>
import { defineComponent, reactive } from 'vue';
import CartItem from '../components/cart/CartItem.vue';
import { useI18n } from 'vue-i18n';
import { cartListMockup, ordersListDetailMockup } from '@/constants/products';
import { useRoute } from 'vue-router';

export default defineComponent({
    name:"TableCartSection",
    components:{
        CartItem
    },
    props:{
        isOrderDetailView: {
            type: Boolean,
            default: false,
        },
        titleOrderDetailView: {
            type: String,
            default:'',
        }
    },
    setup() {
        const { t } = useI18n();

        const route = useRoute();
        const orderDetailId = route.params.orderId;

        console.log(orderDetailId,'orderDetailId')

        const listOrdersDetail = reactive(ordersListDetailMockup)
        
        const listItem = listOrdersDetail.find((order) => order.id == orderDetailId)?.data
                        || reactive(cartListMockup) ;
        

        const totalPrice = listItem.reduce((total, item) => total + (item.price * item.quantity), 0)
        

        const methodsPayment = [
            'cod'
        ]

        return {
            t,
            listItem,
            totalPrice,
            methodsPayment
        }
    }
    
})
</script>

<template>
    <div class="p-4">
        <h1 class="text-2xl font-bold mb-4">
            {{ !isOrderDetailView ? t('cart.title') : t(titleOrderDetailView) }}
        </h1>

        <table class="min-w-[1024px] border-collapse bg-white shadow-md rounded-lg overflow-hidden">
            <thead class="bg-gray-200 text-lg">
                <tr class="text-left">
                    <th class="py-3 px-4 text-gray-600 font-semibold text-center">
                        #
                    </th>
                    <th class="py-3 px-4 text-gray-600 font-semibold text-center">
                        {{ t('cart.product') }}
                    </th>
                    <th class="py-3 px-4 text-gray-600 font-semibold text-center">
                        {{ t('cart.image') }}
                    </th>
                    <th class="py-3 px-4 text-gray-600 font-semibold text-center">
                        {{ t('cart.quantity') }}
                    </th>
                    <th class="py-3 px-4 text-gray-600 font-semibold text-center">
                        {{ t('cart.topping') }}
                    </th>
                    <th class="py-3 px-4 text-gray-600 font-semibold text-center">
                        {{ t('cart.price') }}
                    </th>
                    <th v-if="!isOrderDetailView" class="py-3 px-4 text-gray-600 font-semibold text-center">
                        {{ t('cart.action') }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr 
                    v-for="(item, index) in listItem" 
                    :key="item.id"
                    class="border-b hover:bg-gray-100"
                >
                    <CartItem 
                        :item="item" 
                        :index="index" 
                        :isOrderDetailView="isOrderDetailView"
                    />
                </tr>
            </tbody>
        </table>

        <div v-if="!isOrderDetailView" class="mt-6 flex justify-end items-center gap-4">
            <label 
                for="payment-method" 
                class=" text-gray-700 font-semibold"
            >
                {{ t('cart.method_payment') }}
            </label>
            <select 
                id="payment-method" 
                class=" bg-white border border-gray-300 rounded-lg shadow-sm px-4 py-2"
            >
                <option value="" disabled selected>{{ t('cart.choose_method') }}</option>
                <option 
                    v-for="(method, index) in methodsPayment" 
                    :key="index" 
                    :value="method.value"
                >
                    {{ (t(`cart.${method}`)) }}
                </option>
            </select>
        </div>

        <div class="mt-4 flex justify-end">
            <h2 class="text-2xl font-semibold text-green-600">
                {{ t('cart.total') }} {{ totalPrice }} Đ
            </h2>
        </div>

        <div v-if="!isOrderDetailView" class="flex justify-end mt-4">
            <button 
                class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
            >
                {{ t('cart.checkout') }}
            </button>
        </div>
    </div>
</template>
