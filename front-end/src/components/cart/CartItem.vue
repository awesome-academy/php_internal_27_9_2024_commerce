<script lang="ts">
import {  defineComponent } from 'vue';
import { useI18n } from 'vue-i18n'

export default defineComponent({
    props: {
            item: {
                type: Object,
                required: true,
            },
            index: {
                type: Number,
                required: true,
            },
            isOrderDetailView: {
                type: Boolean,
                default: false,
            },
        },
    setup(props) {
        const { t } = useI18n()

        const removeCartItem = () => {
            console.log(`remove ${props.item.id}`)
        }
        return {
            t,
            removeCartItem
        }
    }
})

</script>

<template>
    <td class="py-2 px-4 text-center">
        {{ index + 1 }}
    </td>
    <td class="py-2 px-4">
        <h2 class="text-lg font-semibold">{{ item.name }}</h2>
    </td>
    <td class="py-2 px-4 flex justify-center items-center">
        <img :src="item.image" alt="Product Image" class="w-16 h-16 object-cover" />
    </td>
    <td class="py-2 px-4 text-center">
        <p class="text-gray-600">{{ item.quantity }}</p>
    </td>
    <td class="py-2 px-4 text-center">
        <p class="text-gray-600">{{ item.topping }}</p>
    </td>
    <td class="py-2 px-4 text-center">
        <span class="text-lg font-bold">{{ item.price }} Đ</span>
    </td>
    <td v-if="!isOrderDetailView" class="py-2 px-4 text-center">
        <button @click="removeCartItem" class="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded">
            {{ t('cart.remove') }}
        </button>
    </td>
</template>
