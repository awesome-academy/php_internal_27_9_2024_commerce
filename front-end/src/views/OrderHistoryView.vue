<script>
import OrderItem from '@/components/order/OrderItem.vue';
import { orderListMockup } from '@/constants/products';
import { defineComponent, reactive } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'OrderHistory',
  components:{
    OrderItem
  },
  setup() {
    const { t } = useI18n();

    const orders = reactive(orderListMockup);

    return { 
        t,
        orders,
    };
  }
});
</script>

<template>
  <div class="p-6 mb-10 mt-2">
    <h2 class="text-2xl font-bold mb-8">
        {{ t('order_list.title') }}
    </h2>
    <div>
      <table class="min-w-[1024px]">
        <thead>
          <tr class="bg-gray-100">
            <th class="px-4 py-2 font-bold">
                #
            </th>
            <th class="px-4 py-2 font-bold">
                {{ t('order_list.order_code') }}
            </th>
            <th class="px-4 py-2 font-bold">
                {{ t('order_list.order_time') }}
            </th>
            <th class="px-4 py-2 font-bold">
                {{ t('order_list.customer') }}
            </th>
            <th class="px-4 py-2 font-bold">
                {{ t('order_list.total_amount') }}
            </th>
            <th class="px-4 py-2 font-bold">
                {{ t('order_list.order_status') }}
            </th>
            <th class="px-4 py-2 font-bold">
                {{ t('order_list.action') }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="(order, index) in orders" 
            :key="order.id" 
            class="border-b text-center"
          >
            <OrderItem :order="order" :index="index" />
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
