<script>
import {defineComponent, ref} from 'vue';
import Hero from './hero.vue'
import CardDestination from '@/components/cardDestination.vue'
import CardArticle from '@/components/cardArticle.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { useSwiper } from 'swiper/vue';
import 'swiper/css';
import { Navigation  } from 'swiper/modules';

import data from '@/assets/data.json';
import dataArticle from '@/assets/data_article.json'


export default {
    data() {
        return {
            data: data,
            article: dataArticle
        }
    },
    components:{
        Hero,
        CardDestination,
        CardArticle,
        Swiper,
        SwiperSlide

    },
    setup() {

        const swiperInstance = ref()

        function onSwiper(swiper) {
            swiperInstance.value = swiper
        }
        const swiperNextSlide = () => {
            swiperInstance.value.slideNext()
        };
        const swiperPrevSlide = () => {
            swiperInstance.value.slidePrev()
        };
        return {
            swiperPrevSlide,
            swiperNextSlide,
            onSwiper,
        };
    },
    methods:{
        Navigation() {
            return Navigation
        }
    },
    
}
</script>

<template>
    <main>
        <Hero/>
        <section class="py-20">
            <div class="flex flex-col justify-center items-center gap-3">
                <p class="font-bold text-[32px]">Lorem Ipsum</p>
                <p class=" w-[25rem] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quam sapien, faucibus nec.</p>
            </div>
            <div class="flex justify-center items-center w-full mt-12">
                <div class="h-[22px] w-40 bg-primary_greeen"></div>
                <div class=" px-10 py-9 flex items-center gap-2 shadow_custom ">
                    <i class="iconsax text-2xl text-primary_yellow" icon-name="location"></i>
                    <p>Choose Location</p>
                </div>
                <div class="h-[22px] w-[18.7rem] bg-primary_greeen"></div>
                <div class=" px-10 py-9 flex items-center gap-2 shadow_custom">
                    <i class="iconsax text-2xl text-primary_yellow" icon-name="location"></i>
                    <p>Pick Up Date</p>
                </div>
                <div class="h-[22px] w-[18.7rem] bg-primary_greeen"></div>
                <div class=" px-10 py-9 flex items-center gap-2 shadow_custom ">
                    <i class="iconsax text-2xl text-primary_yellow" icon-name="car"></i>
                    <p>Book Your Car</p>
                </div>
                <div class="h-[22px] w-40 bg-primary_greeen"></div>
            </div>
        </section>
        <section class="px-20 py-20">
            <div class="flex justify-between items-center">
                <div class="text-lg">
                    <p class="text-2xl font-bold text-primary_greeen">Top Destinations</p>
                    <p>Top Selling</p>
                </div>
                <div class="flex gap-3">
                    <div class=" bg-primary_greeen font-bold px-3 py-1 rounded-full" @click="swiperPrevSlide">
                        <i class="iconsax text-xl text-white" icon-name="arrow-left"></i>
                    </div>
                    <div class=" bg-primary_greeen font-bold px-3 py-1 rounded-full" @click="swiperNextSlide">
                        <i class="iconsax text-xl text-white" icon-name="arrow-right"></i>
                    </div>
                </div>
            </div>
            <div class="mt-10 slider-container overflow-hidden">
                <swiper 
                        ref="swiperRef"
                        :breakpoints="{ 600:{ slidesPerView:2 }, 900:{ slidesPerView:4, } }"
                        :loop="true"
                        :modules="[Navigation]"
                        @swiper="onSwiper">
                    <swiper-slide v-for="(item, index) in data" :key="index" class="p-5">
                        <CardDestination :title="item.title" :image="item.image" :province="item.province" :city="item.city" :price="item.price"/>
                    </swiper-slide>
                </swiper>
            </div>
            <div class="flex items-end gap-24 mt-32">
                <div class="w-1/2 h-[25rem] bg-primary_greeen rounded-3xl">
                    <img src="@/assets/bg_card.png" alt="" class="w-full h-full object-fill object-center ">
                </div>
                <div class="w-1/2">
                    <p class="font-semibold text-2xl mb-5">Inspirasi Perjalanan Anda Melihat Pesona Keindahan Alam di Jawa Tengah</p>
                    <p class="mb-10">Jawa Tengah memiliki keberagaman wisata alam, budaya, hingga kuliner yang menggoda. Ramah tamah warga lokal yang membuat wisatawan nyaman dan merasa di kampung halaman juga semakin indah ketika unsur adat istiadat tradisional yang masih autentik dikenalkan. Selain itu, kekayaan flora serta fauna langka nan memesona pun tak kalah seru untuk menambah daftar pengalaman terbaik yang bisa dirasakan saat menjelajahi Indonesia. Semua keindahan ini cuma bisa ditemukan</p>
                </div>
            </div>
        </section>
        <section class="px-20 py-16 gradient">
           <p class="font-bold text-4xl text-center">Solusi Cepat untuk Pemesanan <br/> Perjalanan</p>
           <div class="flex gap-44 mt-20">
                <div class="w-1/2">
                    <p class="font-semibold text-2xl">Lorem ipsum dolor sit amet consectetur. Mauris aliquet tellus ut amet neque dignissim. </p>
                    <p class="text-[#d9d9d9] text-xl mt-2">Lorem ipsum dolor sit amet consectetur. Non nulla suspendisse blandit rutrum dui sed morbi quam vestibulum. Leo purus morbi elementum nisi diam cursus sit nibh. Turpis sed quis eget molestie. Semper quis at leo nisl orci id habitasse ultrices. Nibh mauris lectus proin tincidunt amet massa eleifend ac laoreet. </p>
                    <div class="flex items-center gap-2 mt-5 font-bold text-primary_yellow">
                        <p>Read More</p>
                        <i class="iconsax text-xl " icon-name="arrow-right"></i>
                    </div>
                    <div class="flex gap-12 mt-20">
                        <div class="font-bold text-white">
                            <p class="text-5xl">100+</p>
                            <p class="text-xl">Artikel</p>
                        </div>
                        <div class="font-bold text-white">
                            <p class="text-5xl">50+</p>
                            <p class="text-xl">User</p>
                        </div>
                        <div class="font-bold text-white">
                            <p class="text-5xl">20+</p>
                            <p class="text-xl">Destinasi</p>
                        </div>
                    </div>
                </div>
                <div class="w-1/2 h-[25rem] bg-primary_greeen rounded-3xl">
                    <img src="@/assets/bg_card2.png" alt="" class="w-full h-full object-cover rounded-3xl object-center ">
                </div>
           </div>
        </section>
        <section class="px-20 py-16 h-[40rem]">
            <p class="font-bold text-3xl w-[35rem]">
                Pilihan Artikel Budaya dan Sejarah Untuk Anda Baca
            </p>
            <div class="flex justify-between mt-10">
                <div class="" v-for="(item, index) in article" :key="index">
                    <CardArticle :title="item.title" :image="item.image" :description="item.description"/>
                </div>
            </div>
        </section>
    </main>
</template>