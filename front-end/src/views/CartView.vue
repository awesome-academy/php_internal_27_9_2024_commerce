<script>
import { defineComponent, reactive } from 'vue';
import CartItem from '../components/cart/CartItem.vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    name:"TableCartSection",
    components:{
        CartItem
    },
    setup() {
        const { t } = useI18n()

        const listCart = reactive([
            {
                id: 1,
                name: 'Coconut Mung Bean',
                description: 'Delicious coconut mung bean dessert.',
                price: 65000,
                quantity:1,
                topping:'',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOoRcTP_2RnOlWOysKxCf6lk_HBlDxv9nHig&s', // Thay bằng URL hình ảnh thực tế
            },
            {
                id: 2,
                name: 'Vietnamese Iced Coffee',
                description: 'Traditional Vietnamese iced coffee.',
                price: 50000,
                quantity:2,
                topping:'',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOoRcTP_2RnOlWOysKxCf6lk_HBlDxv9nHig&s',
            },
            {
                id: 3,
                name: 'Banh Mi',
                description: 'Delicious Vietnamese sandwich.',
                price: 40000,
                quantity:1,
                topping:'',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOoRcTP_2RnOlWOysKxCf6lk_HBlDxv9nHig&s',
            },
        ]);
        
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
    <div class="max-w-4xl mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">
            {{ t('cart.title') }}
        </h1>

        <table class="min-w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
            <thead class="bg-gray-200">
                <tr class="text-left">
                    <th class="py-3 px-4 text-gray-600 font-semibold text-center">#</th>
                    <th class="py-3 px-4 text-gray-600 font-semibold text-center">{{ t('cart.product') }}</th>
                    <th class="py-3 px-4 text-gray-600 font-semibold text-center">{{ t('cart.image') }}</th>
                    <th class="py-3 px-4 text-gray-600 font-semibold text-center">{{ t('cart.quantity') }}</th>
                    <th class="py-3 px-4 text-gray-600 font-semibold text-center">{{ t('cart.topping') }}</th>
                    <th class="py-3 px-4 text-gray-600 font-semibold text-center">{{ t('cart.price') }}</th>
                    <th class="py-3 px-4 text-gray-600 font-semibold text-center">{{ t('cart.action') }}</th>
                </tr>
            </thead>
            <tbody>
                <tr 
                    v-for="(item, index) in listCart" 
                    :key="item.id"
                    class="border-b hover:bg-gray-100"
                >
                    <CartItem :item="item" :index="index" />
                </tr>
            </tbody>
        </table>

        <div class="mt-6 flex justify-end items-center gap-4">
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
            <h2 class="text-lg font-semibold">{{ t('cart.total') }} {{ totalPrice }} Đ</h2>
        </div>

        <div class="flex justify-end mt-4">
            <button 
                class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
            >
                {{ t('cart.checkout') }}
            </button>
        </div>
    </div>
</template>
