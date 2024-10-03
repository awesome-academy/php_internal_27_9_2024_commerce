import { createRouter, createWebHistory } from 'vue-router'
import ExampleView from '../views/ExampleView.vue'
import ProductsView from '../views/ProductsView.vue'
import MainLayout from '../components/layouts/MainLayout.vue'
import PaymentLayout from '../components/layouts/PaymentLayout.vue'
import CartView from '@/views/CartView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
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
            path: '/payment/',
            name: 'payment',
            component: PaymentLayout,
            children: [
                {
                    path: 'cart',
                    name: 'CartView',
                    component: CartView
                },
            ]
        },
    ]
})

export default router
