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
        <div class="flex gap-5 items-center text-lg">
            <p>Beranda</p>
            <Circle/>
            <p>Destinasi</p>
            <Circle/>
            <p>Inspirasi</p>
            <Circle/>
            <p>Sejarah</p>
        </div>
        <div class="flex items-center gap-4">
            <p>ID</p>
            <i class="iconsax" icon-name="globe"></i>
        </div>
    </nav>
</template>