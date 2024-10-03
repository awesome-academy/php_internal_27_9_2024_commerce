<script setup lang="ts">
    import {  RouterView } from 'vue-router'
    import HeaderSection from '../header/HeaderSection.vue'
    import FooterSection from '../footer/FooterSection.vue'
</script>

<template>
    <div>
        <HeaderSection />
        <div class="flex justify-center">
            <main>
                <RouterView />
            </main>
        </div>
        <FooterSection />
    </div>
</template>
