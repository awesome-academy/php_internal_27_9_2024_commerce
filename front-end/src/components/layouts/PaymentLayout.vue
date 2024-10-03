<script setup lang="ts">
    import {  RouterView } from 'vue-router'
    import HeaderSection from '../header/HeaderSection.vue'
    import FooterSection from '../footer/FooterSection.vue'
</script>

<template>
    <div class="flex flex-col min-h-screen">
        <HeaderSection />
        <div class="flex flex-grow justify-center">
            <main>
                <RouterView />
            </main>
        </div>
        <FooterSection />
    </div>
</template>
