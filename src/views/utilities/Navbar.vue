<script>
import Logo from '@/components/logo.vue'
import Circle from '@/components/circle.vue'
export default {
    components:{
        Logo,
        Circle
    }
}
</script>

<template>
    <nav class="absolute top-0 right-0 left-0 z-10 flex justify-between items-end py-10 px-20 text-white">
        <Logo/>
        <div class="flex gap-8 items-center text-lg">
            <router-link to="/">Beranda</router-link>
            <Circle/>
            <router-link to="/destinasi">Destinasi</router-link>
            <Circle/>
            <router-link to="/a">Inspirasi</router-link>
            <Circle/>
            <router-link to="/b">Sejarah</router-link>
        </div>
        <div class="flex items-center gap-4">
            <p>ID</p>
            <i class="iconsax" icon-name="globe"></i>
        </div>
        <p>|</p>
        <i class="iconsax" icon-name="search-normal-2"></i>
    </nav>
</template>