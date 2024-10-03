import { createRouter, createWebHistory } from 'vue-router'
import ExampleView from '../views/ExampleView.vue'
import ProductsView from '../views/ProductsView.vue'
import MainLayout from '../components/layouts/MainLayout.vue'
import PaymentLayout from '../components/layouts/PaymentLayout.vue'
import CartView from '@/views/CartView.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'
import OrderHistoryView from '@/views/OrderHistoryView.vue'
import OrderDetailView from '@/views/OrderDetailView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/shop',
            name: 'home',
            component: MainLayout,
            children: [
                {
                    path: 'example',
                    name: 'example',
                    component: ExampleView
                },
                {
                    path: 'products',
                    name: 'productList',
                    component: ProductsView
                },
            ]
        },
        {
            path: '/',
            name: 'payment',
            component: PaymentLayout,
            children: [
                {
                    path: 'payment/cart',
                    name: 'CartView',
                    component: CartView
                },
                {
                    path: 'products/:id',
                    name: 'ProductDetailView',
                    component: ProductDetailView
                },
                {
                    path: 'orders',
                    name: 'OrderHistory',
                    component: OrderHistoryView
                },
                {
                    path: '/orders/:orderId',
                    name: 'OrderDetail',
                    component: OrderDetailView,
                },
            ]
        },
    ]
})

export default router
