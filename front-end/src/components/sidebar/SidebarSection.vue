<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
    components: {},
    setup() {
        const { t } = useI18n()

        return {
            t
        }
    }
})
</script>

<template>
    <div class=" border-r-[1px] border-solid border-[#6e6e6e]">
        <ul class="product-categories mr-14 min-w-[120px]">
            <li class="mb-4">
                <router-link to="/products" class="font-bold mb-4">
                    {{ t('sidebar.menu') }}
                </router-link>
            </li>
            <li>
                <router-link to="/example" class="font-bold mb-4">
                    {{ t('sidebar.groceries') }}
                </router-link>
            </li>
        </ul>
    </div>
</template>
