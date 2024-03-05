<script>
import DetailSection from "./Section/DetailSection.vue"
import RencanaSection from "./Section/RencanaSection.vue"
import HargaSection from "./Section/HargaSection.vue"
export default {
    components:{
        DetailSection,
        RencanaSection,
        HargaSection
    },
    data() {
        return {
            indexTab: 0
        }
    },
}
</script>

<template>
    <main>
        <section>
            <div class="px-20 pt-48 pb-20">
                <div class="flex justify-between items-center">
                    <div class="flex items-center gap-5 cursor-pointer w-max" @click="this.$router.go(-1);">
                        <i class="iconsax text-4xl" icon-name="arrow-left"></i>
                        <p>Kembali</p>
                    </div>
                    <p class="font-bold text-3xl">
                        Open Trip Wisata Liburan Karimun Jawa
                    </p>
                    <div class=""></div>
                </div>
            </div>
        </section>
        <section class="py-[20rem] bg-primary_grey bg-center bg-cover bg-no-repeat"
            style="background-image: url('https://firebasestorage.googleapis.com/v0/b/pariwisata-1a79c.appspot.com/o/inpirasi%2Fpulau-indah-1024x679.jpg?alt=media&token=15b5b63f-2335-44ba-893f-6f3d43e7b0e7')">

        </section>
        <section class="px-20 py-20">
            <div class="flex justify-between">
                <div class="h-[6rem] w-[20rem] flex justify-center items-center rounded-3xl text-xl cursor-pointer"
                    :class="indexTab == 0 ? 'bg-primary_greeen text-white' : 'bg-[#F0F0F0] text-black'"
                    @click="indexTab = 0">
                    <p>Detail</p>
                </div>
                <div class="h-[6rem] w-[20rem] flex justify-center items-center rounded-3xl text-xl cursor-pointer"
                    :class="indexTab == 1 ? 'bg-primary_greeen text-white' : 'bg-[#F0F0F0] text-black'"
                    @click="indexTab = 1">
                    <p>Rencana Perjalanan</p>
                </div>
                <div class="h-[6rem] w-[20rem] flex justify-center items-center rounded-3xl text-xl cursor-pointer"
                    :class="indexTab == 2 ? 'bg-primary_greeen text-white' : 'bg-[#F0F0F0] text-black'"
                    @click="indexTab = 2">
                    <p>Rincian Harga</p>
                </div>
                <div class="h-[6rem] w-[20rem] flex justify-center items-center rounded-3xl text-xl cursor-pointer"
                    :class="indexTab == 3 ? 'bg-primary_greeen text-white' : 'bg-[#F0F0F0] text-black'"
                    @click="indexTab = 3">
                    <p>Photo</p>
                </div>
            </div>
        </section>
        <DetailSection v-show="indexTab == 0"/>
        <RencanaSection v-show="indexTab == 1"/>
        <HargaSection v-show="indexTab == 2"/>
        
    </main>
</template>

<style scoped>
    tr:nth-child(even) {
        background-color: #dddddd;
    }
</style>