<script>
import Logo from '@/components/logo.vue'
import Circle from '@/components/circle.vue'
export default {
    components:{
        Logo,
        Circle
    },
    data() {
        return {
            showInspirasi: false,
            showTourTrip: false,
        }
    },
}
</script>

<template>
    <nav class="absolute gradient top-0 right-0 left-0 z-10 flex justify-between items-end py-10 px-20 text-white">
        <Logo/>
        <div class="flex gap-8 items-center text-lg">
            <router-link to="/">Beranda</router-link>
            <Circle/>
            <router-link to="/destinasi">Destinasi</router-link>
            <Circle/>
            <div class="relative">
                <router-link to="/inspirasi" class="">
                    Inspirasi
                </router-link>
                <div class="absolute w-full h-full z-10 inset-0 cursor-pointer" @click="showInspirasi = !showInspirasi"></div>
            </div>
            <Circle/>
            <router-link to="/inspirasi">Sejarah</router-link>
        </div>
        <div class="flex items-center gap-4">
            <p>ID</p>
            <i class="iconsax" icon-name="globe"></i>
        </div>
        <p>|</p>
        <i class="iconsax" icon-name="search-normal-2" @click="this.$router.push('/destinasi/detail/wisata')"></i>

        <div v-show="showInspirasi" class="bg-primary_greeen absolute right-[35rem] top-[6rem] w-[10rem]">
            <div class="text-sm cursor-pointer" @click="this.$router.push('/inspirasi/ideliburan'), showInspirasi = false">
                <p class="m-2">Ide Liburan</p>
                <hr class=" bg-white"/>
            </div>
            <div class="text-sm mt-3 cursor-pointer" @click="this.$router.push('/inspirasi/tourtrip'), showInspirasi = false">
                <p class="m-2">Tour dan Trip</p>
                <hr class=" bg-white"/>
            </div>
        </div>
    </nav>
</template>