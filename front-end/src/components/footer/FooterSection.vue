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
    <footer>
        <div class="bg-[#4c5b29] px-20 py-8 ">
            <div class="row">
                <div class="">
                    <span class="text-white text-[12px]">
                        {{ t('footer.name_company') }} 
                        <br>{{ t('footer.business_registration_number') }}  0106696845 
                        {{ t('footer.issued_by') }} Sở Kế hoạch và Đầu tư TP. Hà Nội 
                        {{ t('footer.on') }} 21/11/2014
                        <br>{{ t('footer.address') }} Số 101 Hoàng Cầu, phường Ô Chợ Dừa, quận Đống Đa, Hà Nội - 
                        {{ t('footer.phone_number') }}
                        <!-- --> 
                        <a href="tel:02437339966" rel="nofollow">+84 243 733 9966</a> 
                        <!-- -->- {{ t('footer.email') }}<!-- --> 
                         <a href="mailto:info@congcaphe.com" rel="nofollow">info@congcaphe.com</a>
                        <br>©2017 - <!-- -->2024<!-- --> <!-- --> <!-- -->
                        <span class="txtCafeCong">Cong CaPhe</span>.Ltd<!-- --> All rights reserved
                    </span>
                </div>
            </div>
        </div>
    </footer>
</template>
