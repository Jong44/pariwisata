<script>


import { Swiper, SwiperSlide } from 'swiper/vue';
import { useSwiper } from 'swiper/vue';
import 'swiper/css';
import { Navigation  } from 'swiper/modules';
export default{
    components:{
        Swiper,
        SwiperSlide
    }
}

</script>

<template>
    <main>
        <section class="px-20 py-40">
            <p class="font-bold text-3xl text-center">
                Tentukan Ide Hiburan Kamu Untuk <br/>Healing dan Refreshing
            </p>
            <div class="flex gap-10 mt-20">
                <div class="p-10 h-[20rem] w-1/2 bg-primary_grey rounded-3xl flex justify-center items-end">
                    <p class="font-bold text-xl">Pantai Watu Bale</p>
                </div>
                <div class="w-1/2">
                    <p class="font-bold text-xl">
                        Beragam ide liburan penuh keseruan ini menanti #DiJatengAja
                    </p>
                    <p class="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, praesentium totam. Odio, totam ab aliquid, magnam tenetur dolorem velit enim rerum ipsa pariatur quidem et voluptatem temporibus voluptates hic consequuntur?</p>
                </div>
            </div>
        </section>
        <section class="h-[25rem] bg-primary_grey flex flex-col justify-center items-center">
            <p class="font-bold text-4xl">Gunung Sindoro</p>
            <p class="mt-5 w-[30rem] text-center">Lokasi Embung Kledung berada di Kledung, Kec. Kledung, Kabupaten Temanggung, Jawa Tengah</p>
        </section>
        <section class="px-20 py-24">
            <div class="flex gap-24">
                <div class="w-1/2">
                    <p class="font-bold text-2xl">Rekomendasi Kota untuk Lewatkan Malam Pergantian Tahun</p>
                    <p class="mt-10">Pergantian tahun biasanya jadi momen spesial. Apalagi kalau kamu merayakan tahun baru di beberapa kota ini, karena sudah disiapkan banyak acara seru juga, Sob. Berikut kota yang siap membuat momen pergantian tahun kamu berkesan,</p>
                    <div class="flex flex-wrap gap-8 mt-10">
                        <div class="bg-primary_grey rounded-3xl h-[10rem] w-[18rem]" v-for="(item, index) in 4" :key="index"></div>
                    </div>
                </div>
                <div class="w-1/2 h-auto bg-primary_grey rounded-3xl">

                </div>
            </div>
        </section>
        <section class="px-20 py-16">
            <p class="font-bold text-2xl">Rekomendasi Kota</p>
            <div class="mt-10">
                <swiper 
                        ref="swiperRef"
                        :breakpoints="{ 600:{ slidesPerView:2 }, 900:{ slidesPerView:4, } }"
                        :loop="true">
                    <swiper-slide v-for="(item, index) in 10" :key="index" class="p-5">
                        <div class=" p-10 flex justify-center items-end bg-primary_grey h-[25rem] rounded-3xl" :key="index">
                            <p class="text-xl">Semarang</p>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </section>
    </main>
</template>