<script setup lang="ts">
    import {  RouterView } from 'vue-router'
    import HeaderSection from '../header/HeaderSection.vue'
    import Sidebar from '../sidebar/SidebarSection.vue'
    import FooterSection from '../footer/FooterSection.vue'
</script>

<template>
    <div class="flex flex-col min-h-screen">
        <HeaderSection />
        <div class="flex flex-grow justify-center min-w-[1028px] min-h-screen">
            <div class="flex justify-center gap-10 mt-6 px-2 py-6 w-[80%]">
                <Sidebar />
                <main>
                    <RouterView />
                </main>
            </div>
        </div>
        <FooterSection />
    </div>
</template>
