<script>
import {defineComponent, ref} from 'vue';
import Hero from './hero.vue'
import CardDestination from '@/components/cardDestination.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useSwiper } from 'swiper/vue';
import 'swiper/css';
import { Navigation  } from 'swiper/modules';

import data from '@/assets/data.json'


export default {
    data() {
        return {
            data: data
        }
    },
    components:{
        Hero,
        CardDestination,
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
        <section class="px-20 py-12">
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
                    <swiper-slide v-for="(item, index) in data" :key="index">
                        <CardDestination :title="item.title" :image="item.image" :province="item.province" :city="item.city" :price="item.price"/>
                    </swiper-slide>
                </swiper>
            </div>
        </section>
        <section>
           
        </section>
    </main>
</template>