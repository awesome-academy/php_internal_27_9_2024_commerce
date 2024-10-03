<script>
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'OrderItem',
  props: {
    order: {
        type: Object,
        Required: true,
    },
    index: {
        type: Number,
        Required: true,
    }
  },
  setup() {
    const { t } = useI18n();
    const router = useRouter();

    const showDetailOrderItem = (order) => {
        router.push({ name: 'OrderDetail', params: { orderId: order.id } });
    };

    return { 
        t,
        showDetailOrderItem,
    };
  }
});
</script>

<template>
    <td class="px-4 py-2">{{ index + 1 }}</td>
    <td class="px-4 py-2">{{ order.order_code }}</td>
    <td class="px-4 py-2">{{ order.date }}</td>
    <td class="px-4 py-2">{{ order.customer }}</td>
    <td class="px-4 py-2">{{ order.total_amount }}</td>
    <td class="px-4 py-2 font-bold">
        <span 
            :class="order.status === 'done' ? 'text-[#8ca25a]' : 'text-[#f47171]'" 
            class="font-bold"
        >
        {{ order.status === 'done' ? 
            `${t('order_list.done')}` : `${t('order_list.in_progress')}` }}
        </span>
    </td>
    <td class="px-4 py-2">
        <button 
            @click="showDetailOrderItem(order)" 
            class="text-white px-4 py-2 rounded bg-[#778e40] hover:bg-[#4c5b29]"
        >
        {{ t('order_list.show_detail') }}
        </button>
    </td>
</template> 
