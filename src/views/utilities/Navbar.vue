<script>
import Logo from '@/components/logo.vue'
import Circle from '@/components/circle.vue'
export default {
    components: {
        Logo,
        Circle
    },
    data() {
        return {
            showInspirasi: false,
            showTourTrip: false,
            showMobileMenu: false
        }
    },
}
</script>

<template>
    <nav class="absolute gradient top-0 right-0 left-0 z-10  py-10 px-20 text-white max-sm:px-10 max-lg:px-10">
        <div class="flex justify-between items-center">
            <img src="@/assets/logo.png" alt="">
            <div class="flex gap-8 items-center text-lg max-sm:hidden max-lg:gap-2">
                <router-link to="/">Beranda</router-link>
                <Circle />
                <router-link to="/destinasi">Destinasi</router-link>
                <Circle />
                <div class="relative">
                    <router-link to="/inspirasi" class="">
                        Inspirasi
                    </router-link>
                    <div class="absolute w-full h-full z-10 inset-0 cursor-pointer"
                        @click="showInspirasi = !showInspirasi"></div>
                </div>
                <Circle />
                <div class="relative">
                    <router-link to="/sejarah" class="">
                        Sejarah
                    </router-link>
                    <div class="absolute w-full h-full z-10 inset-0 cursor-pointer"
                        @click="showTourTrip = !showTourTrip"></div>
                </div>
            </div>
            <div class="flex items-center gap-4 max-sm:hidden max-lg:gap-1">
                <p>ID</p>
                <i class="iconsax" icon-name="globe"></i>
            </div>
            <p class="max-sm:hidden">|</p>
            <i class="iconsax max-sm:hidden" icon-name="search-normal-2"
                @click="this.$router.push('/destinasi/detail/wisata')"></i>
            <i class="iconsax hidden max-sm:block text-2xl" icon-name="hamburger-menu" @click="showMobileMenu = !showMobileMenu"></i>
        </div>
        <div class="flex flex-col gap-3 mt-3" v-show="showMobileMenu">
            <router-link to="/">Beranda</router-link>
            <hr class=" bg-white" />
            <router-link to="/destinasi">Destinasi</router-link>
            <hr class=" bg-white" />
            <router-link to="/inspirasi/ideliburan">Inspirasi | Ide Liburan</router-link>
            <hr class=" bg-white" />
            <router-link to="/inspirasi/tourtrip">Inspirasi | Tour dan Trip</router-link>
            <hr class=" bg-white" />
            <router-link to="/sejarah/warisanbudaya">Sejarah | Warisan Budaya</router-link>
            <hr class=" bg-white" />
            <router-link to="/sejarah/ceritarakyat">Sejarah | Cerita Rakyat</router-link>
            <hr class=" bg-white" />
            <router-link to="/sejarah/kuliner">Sejarah | Kuliner</router-link>
            <hr class=" bg-white" />
            <router-link to="/sejarah/bahasa">Sejarah | Bahasa</router-link>
            <hr class=" bg-white" />
            <router-link to="/sejarah/umkm">Sejarah | UMKM</router-link>
            <hr class=" bg-white" />
        </div>

        <div v-show="showInspirasi"
            class="bg-primary_greeen absolute right-[42rem] top-[6rem] w-[10rem] max-sm:hidden  max-lg:right-[14rem]">
            <div class="text-sm cursor-pointer"
                @click="this.$router.push('/inspirasi/ideliburan'), showInspirasi = false">
                <p class="m-2">Ide Liburan</p>
                <hr class=" bg-white" />
            </div>
            <div class="text-sm mt-3 cursor-pointer"
                @click="this.$router.push('/inspirasi/tourtrip'), showInspirasi = false">
                <p class="m-2">Tour dan Trip</p>
                <hr class=" bg-white" />
            </div>
        </div>
        <div v-show="showTourTrip"
            class="bg-primary_greeen absolute right-[32rem] top-[6rem] w-[10rem] max-sm:hidden  max-lg:right-[6rem]">
            <div class="text-sm cursor-pointer"
                @click="this.$router.push('/sejarah/warisanbudaya'), showTourTrip = false">
                <p class="m-2">Warisan Budaya</p>
                <hr class=" bg-white" />
            </div>
            <div class="text-sm mt-3 cursor-pointer"
                @click="this.$router.push('/sejarah/ceritarakyat'), showTourTrip = false">
                <p class="m-2">Cerita Rakyat</p>
                <hr class=" bg-white" />
            </div>
            <div class="text-sm mt-3 cursor-pointer"
                @click="this.$router.push('/sejarah/kuliner'), showTourTrip = false">
                <p class="m-2">Kuliner</p>
                <hr class=" bg-white" />
            </div>
            <div class="text-sm mt-3 cursor-pointer"
                @click="this.$router.push('/sejarah/bahasa'), showTourTrip = false">
                <p class="m-2">Bahasa</p>
                <hr class=" bg-white" />
            </div>
            <div class="text-sm mt-3 cursor-pointer"
                @click="this.$router.push('/sejarah/umkm'), showTourTrip = false">
                <p class="m-2">UMKM</p>
                <hr class=" bg-white" />
            </div>
        </div>
    </nav>
</template>