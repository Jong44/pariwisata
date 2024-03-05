<script>
import { defineComponent, ref } from 'vue';
import Hero from './hero.vue'
import CardDestination from '@/components/cardDestination.vue'
import CardArticle from '@/components/cardArticle.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { useSwiper } from 'swiper/vue';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import axios from 'axios';


export default {
    data() {
        return {
            data: '',
            article: '',
            datas:[
                {
                    "title": 'Warisan Budaya',
                    "description" : "Warisan budaya adalah benda atau atribut tak berbenda yang merupakan jati diri suatu masyarakat atau kaum yang diwariskan dari generasi-generasi sebelumnya, yang dilestarikan untuk generasi-generasi yang akan datang. Warisan budaya dikategorikan menjadi dua kelompok, benda dan tak benda."
                },
                {
                    "title": 'Cerita Rakyat',
                    "description" : "Warisan budaya adalah benda atau atribut tak berbenda yang merupakan jati diri suatu masyarakat atau kaum yang diwariskan dari generasi-generasi sebelumnya, yang dilestarikan untuk generasi-generasi yang akan datang. Warisan budaya dikategorikan menjadi dua kelompok, benda dan tak benda."
                },
                {
                    "title": 'UMKM',
                    "description" : "Warisan budaya adalah benda atau atribut tak berbenda yang merupakan jati diri suatu masyarakat atau kaum yang diwariskan dari generasi-generasi sebelumnya, yang dilestarikan untuk generasi-generasi yang akan datang. Warisan budaya dikategorikan menjadi dua kelompok, benda dan tak benda."
                },
                {
                    "title": 'Kuliner',
                    "description" : "Warisan budaya adalah benda atau atribut tak berbenda yang merupakan jati diri suatu masyarakat atau kaum yang diwariskan dari generasi-generasi sebelumnya, yang dilestarikan untuk generasi-generasi yang akan datang. Warisan budaya dikategorikan menjadi dua kelompok, benda dan tak benda."
                },
                {
                    "title": 'Bahasa',
                    "description" : "Warisan budaya adalah benda atau atribut tak berbenda yang merupakan jati diri suatu masyarakat atau kaum yang diwariskan dari generasi-generasi sebelumnya, yang dilestarikan untuk generasi-generasi yang akan datang. Warisan budaya dikategorikan menjadi dua kelompok, benda dan tak benda."
                },
            ]
        }
    },
    components: {
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
    methods: {
        Navigation() {
            return Navigation
        },
        getDestinasi(){
            axios.get('https://pariwisata-1a79c-default-rtdb.firebaseio.com/destinasi.json')
            .then(ress=>{
                this.data = ress.data
            })
            .catch(err=>{
                console.log(err)
            })
        },
        getSejarah(){
            axios.get('https://pariwisata-1a79c-default-rtdb.firebaseio.com/artikelsejarah.json')
            .then(ress=>{
                this.article = ress.data.slice(0, 3)
            })
            .catch(err=>{
                console.log(err)
            })
        }
    },
    mounted(){
        this.getDestinasi()
        this.getSejarah()
    }

}
</script>

<template>
    <main>
        <Hero />
        <section class="py-20">
            <div class="flex flex-col justify-center items-center gap-3">
                <p class="font-bold text-[32px] max-sm:text-2xl">Nikmati Liburan Anda</p>
                <p class=" w-[25rem] text-center max-sm:text-xs">Jangan hanya menjelajahi wisata, namun juga jelajahi
                    budaya yang ada di Jawa Tengah</p>
            </div>
            <div class="flex justify-center items-center w-full mt-12 max-sm:flex-col max-sm:gap-10">
                <div class="h-[22px] w-40 bg-primary_greeen max-sm:hidden"></div>
                <div class=" px-10 py-9 flex items-center gap-2 shadow_custom ">
                    <i class="iconsax text-2xl text-primary_yellow" icon-name="location"></i>
                    <p>Kuliner</p>
                </div>
                <div class="h-[22px] w-[18.7rem] bg-primary_greeen max-sm:hidden"></div>
                <div class=" px-10 py-9 flex items-center gap-2 shadow_custom">
                    <i class="iconsax text-2xl text-primary_yellow" icon-name="location"></i>
                    <p>Bahasa</p>
                </div>
                <div class="h-[22px] w-[18.7rem] bg-primary_greeen max-sm:hidden"></div>
                <div class=" px-10 py-9 flex items-center gap-2 shadow_custom ">
                    <i class="iconsax text-2xl text-primary_yellow" icon-name="car"></i>
                    <p>Warisan Budaya</p>
                </div>
                <div class="h-[22px] w-40 bg-primary_greeen max-sm:hidden"></div>
            </div>
        </section>
        <section class="px-20 py-20 max-sm:px-10  max-lg:px-10">
            <div class="flex justify-between items-center max-sm:block">
                <div class="text-lg ">
                    <p class="text-2xl font-bold text-primary_greeen">Top Destinations</p>
                    <p>Top Selling</p>
                </div>
                <div class="flex gap-3 max-sm:mt-5">
                    <div class=" bg-primary_greeen font-bold px-3 py-1 rounded-full" @click="swiperPrevSlide">
                        <i class="iconsax text-xl text-white" icon-name="arrow-left"></i>
                    </div>
                    <div class=" bg-primary_greeen font-bold px-3 py-1 rounded-full" @click="swiperNextSlide">
                        <i class="iconsax text-xl text-white" icon-name="arrow-right"></i>
                    </div>
                </div>
            </div>
            <div class="mt-10">
                <swiper ref="swiperRef" :breakpoints="{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        800: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        900: { slidesPerView: 4, }
                    }" :loop="true" :modules="[Navigation]" @swiper="onSwiper">
                    <swiper-slide v-for="(item, index) in data" :key="index" class="p-5">
                        <CardDestination :title="item.title" :image="item.image" :province="item.province"
                            :city="item.city" :price="item.price" />
                    </swiper-slide>
                </swiper>
            </div>
            <div class="flex items-end gap-24 mt-32 max-sm:block  max-lg:gap-10" >
                <div class="w-1/2 h-[25rem] bg-primary_greeen rounded-3xl max-sm:w-auto max-sm:h-[15rem]">
                    <img src="@/assets/bg_card.png" alt="" class="w-full h-full object-fill object-center ">
                </div>
                <div class="w-1/2 max-sm:w-auto max-sm:mt-10">
                    <p class="font-semibold text-2xl mb-5">Inspirasi Perjalanan Anda Melihat Pesona Keindahan Alam di
                        Jawa Tengah</p>
                    <p class="mb-10">Jawa Tengah memiliki keberagaman wisata alam, budaya, hingga kuliner yang menggoda.
                        Ramah tamah warga lokal yang membuat wisatawan nyaman dan merasa di kampung halaman juga semakin
                        indah ketika unsur adat istiadat tradisional yang masih autentik dikenalkan. Selain itu,
                        kekayaan flora serta fauna langka nan memesona pun tak kalah seru untuk menambah daftar
                        pengalaman terbaik yang bisa dirasakan saat menjelajahi Indonesia. Semua keindahan ini cuma bisa
                        ditemukan</p>
                </div>
            </div>
        </section>
        <section class="px-20 py-16 gradient max-sm:px-10  max-lg:px-10">
            <p class="font-bold text-4xl text-center max-sm:text-xl">Solusi Cepat untuk Pemesanan <br /> Perjalanan</p>
            <div class="flex gap-44 mt-20 max-sm:block  max-lg:gap-10">
                <div class="w-1/2 max-sm:w-auto">
                    <p class="font-semibold text-2xl max-sm:text-lg">Pesona Peninggalan Sejarah, Candi Borobuder Jadi Wisata yang Sering di Kunjungi</p>
                    <p class="text-[#d9d9d9] text-xl mt-5 max-sm:text-base">Borobudur merupakan mahakarya seni rupa Buddha Indonesia, sebagai contoh puncak pencapaian keselarasan teknik arsitektur dan estetika seni rupa Buddha di Jawa.. Bangunan ini diilhami gagasan dharma dari India, antara lain stupa, dan mandala, tetapi dipercaya juga merupakan kelanjutan unsur lokal; struktur megalitik punden berundak atau piramida bertingkat yang ditemukan dari periode prasejarah Indonesia. Sebagai perpaduan antara pemujaan leluhur asli Indonesia dan perjuangan mencapai Nirwana dalam ajaran Buddha</p>
                    <div class="flex items-center gap-2 mt-5 font-bold text-primary_yellow">
                        <p>Read More</p>
                        <i class="iconsax text-xl " icon-name="arrow-right"></i>
                    </div>
                </div>
                <div class="w-1/2 h-[25rem] bg-primary_greeen rounded-3xl max-sm:hidden">
                    <img src="@/assets/bg_card2.png" alt=""
                        class="w-full h-full object-cover rounded-3xl object-center ">
                </div>
            </div>
        </section>
        <section class="px-20 py-16 max-sm:px-10  max-lg:px-10">
            <p class="font-bold text-3xl">Go-Explore</p>
            <div class="flex">
                <swiper ref="swiperRef2" :slidesPerView="1" :loop="true" :modules="[Navigation]" @swiper="onSwiper">
                        <swiper-slide v-for="(item, index) in datas" :key="index" class="my-10">
                            <div class="flex gap-20">
                                <img class="w-[20rem] rounded-3xl" src="https://firebasestorage.googleapis.com/v0/b/pariwisata-1a79c.appspot.com/o/sejarah%2FIMG-20200826-WA0015.jpg?alt=media&token=84dde982-cb0b-40b2-9850-d934dd53586a" alt="">
                                <div class="my-20">
                                    <p class="font-bold text-xl mb-5">{{ item.title }}</p>
                                    <p class="">{{ item.description }}</p>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
            </div>
            <div class="flex gap-3 mt-2 max-sm:mt-5">
                    <div class=" bg-primary_greeen font-bold px-3 py-1 rounded-full" @click="swiperPrevSlide">
                        <i class="iconsax text-xl text-white" icon-name="arrow-left"></i>
                    </div>
                    <div class=" bg-primary_greeen font-bold px-3 py-1 rounded-full" @click="swiperNextSlide">
                        <i class="iconsax text-xl text-white" icon-name="arrow-right"></i>
                    </div>
                </div>
            <p class="font-bold text-3xl w-[35rem] mt-20 max-sm:w-auto max-sm:text-xl">
                Pilihan Artikel Budaya dan Sejarah Untuk Anda Baca
            </p>
            <div class="flex flex-wrap justify-between mt-10 max-sm:mt-5  max-lg:justify-start gap-5">
                <div class="" v-for="(item, index) in article" :key="index">
                    <CardArticle :title="item.title" :image="item.image" :description="item.deskripsi" @click="this.$router.push(`/artikel/${item.id}`)" />
                </div>
            </div>
        </section>
    </main>
</template>