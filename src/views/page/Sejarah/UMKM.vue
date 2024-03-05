<script>
import CardTour from '@/components/cardTour.vue'
import ListArticleByCategory from '@/components/listArticleByCategory.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useSwiper } from 'swiper/vue';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { defineComponent, ref } from 'vue';


export default {
    components: {
        CardTour,
        ListArticleByCategory,
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
    },
    data() {
        return {
            indexCatergory: 0,
            activeIndex: 0,
            imageData: [
                'https://firebasestorage.googleapis.com/v0/b/pariwisata-1a79c.appspot.com/o/inpirasi%2Fawan-aR_sT7qaQKM-unsplash.jpg?alt=media&token=b5a69389-39e1-4f19-8b83-4aeb1a7b3db6',
                'https://firebasestorage.googleapis.com/v0/b/pariwisata-1a79c.appspot.com/o/inpirasi%2Falea-film-2lZlBv-TQI4-unsplash.jpg?alt=media&token=05ee63bf-8120-4f7c-b9e7-75689d9be631',
                'https://firebasestorage.googleapis.com/v0/b/pariwisata-1a79c.appspot.com/o/inpirasi%2Fyulia-agnis-JXUJ88V8el8-unsplash.jpg?alt=media&token=e7a3f587-cd2c-4fa3-8b74-90a793a90a29',
                'https://firebasestorage.googleapis.com/v0/b/pariwisata-1a79c.appspot.com/o/inpirasi%2Ftriadi-yusuf-qjVjjynm0C4-unsplash.jpg?alt=media&token=65d8a219-e640-4f87-a3be-1a72e81d47bc'
            ],
            titleData: [
                'Kawah Sikidang',
                'Candi Borobudur',
                'Brown Canyon',
                'Lawang Sewu'
            ]
        }
    },
}
</script>

<template>
    <main>
        <section class="py-44">
            <p class="font-bold text-3xl text-center max-sm:text-xl max-sm:px-3">
                Tentukan Rencana Perjalanan Kamu Untuk <br class="max-sm:hidden"/>Healing dan Refreshing
            </p>
            <div class="relative h-[25rem] bg-primary_grey mt-12 flex flex-col justify-center items-center text-center text-white bg-center bg-no-repeat bg-cover" style="background-image: url('https://firebasestorage.googleapis.com/v0/b/pariwisata-1a79c.appspot.com/o/inpirasi%2F60e62e9f-1941-4726-96a1-befa6c8fb547-1642664913585-fbf10d9d60a8d1a82b4de3edc5b6ee95.webp?alt=media&token=ebea5c43-fc3e-4dca-8891-36d839c14bdb');">
                <div class="absolute inset-0 bg-black opacity-[0.3]"></div>
                <div class="absolute">
                    <p class="text-6xl max-sm:text-3xl">Selamat Datang di <span class="font-bold">UMKM</span></p>
                    <p class="mt-5 text-base max-sm:text-xs">Rekomendasi usaha ekonomi produktif yang dijual warga lokal, bisa dibuat untuk oleh-oleh khas. <br/> Bukan hanya makanan saja, namun juga karya - karya yang sudah dikembangkan warga lokal</p>
                </div>
            </div>
            <div class="px-20 py-10 flex gap-32 max-lg:px-10 max-lg:flex-col">
                <div class="w-2/3 max-lg:w-auto">
                    <p class="text-2xl font-bold">Rekomendasi UMKM</p>
                    <div class="mt-10">
                        <CardTour sizeText="30" title="Rekomendasi UMKM yang Ada di Semarang"
                        description="Kekayaan kuliner makanan dan minuman khas dari Provinsi Jawa Tengah tak terhitung bilangan. Setiap kabupaten/kota memiliki produk yang mengangkat cita rasa lokal."
                            image="https://firebasestorage.googleapis.com/v0/b/pariwisata-1a79c.appspot.com/o/inpirasi%2Fkarimunjawa_169.jpeg?alt=media&token=699dd0c0-a118-4a04-9a8c-cbb43a42b932" />
                    </div>
                </div>
                <div class="w-[40%] max-lg:w-auto">
                    <div class="">
                        <div class="bg-primary_grey rounded-full">
                            <div class="flex text-gray-500">
                                <div class="w-1/3 h-[3rem] flex justify-center items-center rounded-full"
                                    :class="indexCatergory == 0 ? 'bg-primary_greeen text-white' : ''"
                                    @click="indexCatergory = 0">
                                    <p>Populer</p>
                                </div>
                                <div class="w-1/3 h-[3rem] flex justify-center items-center rounded-full"
                                    :class="indexCatergory == 1 ? 'bg-primary_greeen text-white' : ''"
                                    @click="indexCatergory = 1">
                                    <p>Terbaru</p>
                                </div>
                                <div class="w-1/3 h-[3rem] flex justify-center items-center rounded-full"
                                    :class="indexCatergory == 2 ? 'bg-primary_greeen text-white' : ''"
                                    @click="indexCatergory = 2">
                                    <p>Rekomendasi</p>
                                </div>
                            </div>
                        </div>
                        <ListArticleByCategory />
                    </div>
                </div>
            </div>
        </section>
        <section class="px-20 py-10 flex max-lg:flex-col max-lg:px-10">
            <div class="w-[40%] max-lg:w-auto">
                <p class="font-bold text-3xl">Cara Memesan <br />produk UMKM</p>
                <div class="mt-10 flex flex-col gap-10">
                    <div class="flex gap-7 max-lg:gap-5">
                        <div class="w-[5rem] h-[5rem] bg-primary_greeen rounded-xl max-lg:w-[12rem] flex justify-center items-center text-[#dddddd]">
                            <i class="iconsax text-3xl" icon-name="calendar-add"></i>
                        </div>
                        <div class="flex flex-col">
                            <p class="font-bold">Hubungi Penjual</p>
                            <p class="max-lg:text-xs">Hubungi penjual dan beli produk UMKM </p>
                        </div>
                    </div>
                    <div class="flex gap-7 max-lg:gap-5">
                        <div class="w-[5rem] h-[5rem] bg-primary_greeen rounded-xl max-lg:w-[12rem] flex justify-center items-center text-[#dddddd]">
                            <i class="iconsax text-3xl" icon-name="calendar-add"></i>
                        </div>
                        <div class="flex flex-col">
                            <p class="font-bold">Toko Online</p>
                            <p class="max-lg:text-xs">Hubungi penjual dan beli produk UMKM </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-[60%] h-auto max-lg:w-auto max-lg:mt-10">
                <div class="flex flex-col gap-10 justify-end items-end w-full h-full"> 
                    <div class="w-[30rem] h-[8rem] bg-primary_greeen rounded-s-3xl">
                        <div class="flex">
                            <div class="rounded-s-3xl w-[15rem] h-[8rem] bg-primary_grey bg-center bg-cover bg-no-repeat" style="background-image: url('https://firebasestorage.googleapis.com/v0/b/pariwisata-1a79c.appspot.com/o/tourtrip%2Fhamzah-hanafi-ZEahg4W-SNU-unsplash.jpg?alt=media&token=8de18974-7b16-4695-91dc-599d12d32e8c');">
                            </div>
                            <div class="text-white p-5 text-sm mr-5">
                                <p class="font-bold">Trip to :</p>
                                <p class="font-bold">Kawah Sikidang</p>
                                <p class="mt-2">14 - 16 Januari 2023</p>
                            </div>
                            <div class="bg-primary_yellow w-[1rem] h-[8rem]">

                            </div>
                        </div>
                    </div>
                    <div class="w-[35rem] h-[8rem] bg-primary_greeen rounded-s-3xl">
                        <div class="flex">
                            <div class="rounded-s-3xl w-[20rem] h-[8rem] bg-primary_grey bg-center bg-cover bg-no-repeat" style="background-image: url('https://firebasestorage.googleapis.com/v0/b/pariwisata-1a79c.appspot.com/o/tourtrip%2Fandri-hermawan-OFyRqzBh_a8-unsplash.jpg?alt=media&token=e13d5484-8cf2-425e-bd1d-fa720e6a77a9');">
                            </div>
                            <div class="text-white p-5 text-sm mr-5">
                                <p class="font-bold">Trip to :</p>
                                <p class="font-bold">Sindoro</p>
                                <p class="mt-2">14 - 16 Januari 2023</p>
                            </div>
                            <div class="bg-primary_yellow w-[1rem] h-[8rem]">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="relative h-[30rem] text-white bg-primary_grey bg-center bg-cover bg-no-repeat" style="background-image: url('https://firebasestorage.googleapis.com/v0/b/pariwisata-1a79c.appspot.com/o/sejarah%2FIMG-20200826-WA0015.jpg?alt=media&token=84dde982-cb0b-40b2-9850-d934dd53586a');">
            <div class="absolute inset-0 bg-black opacity-[0.2]"></div>
            <div class="absolute inset-0  flex flex-col justify-center items-center">
                <p class="font-bold text-4xl">Wingko Babat Cap Kereta Api</p>
                <p class="mt-5 w-[30rem] text-center mb-10 max-sm:w-auto">Makanan tradisional ini memiliki tekstur kenyal dengan rasa gurih dari kelapa parut</p>
            </div>
        </section>
        <section class="px-20 py-20 max-lg:px-10">
            <p class="text-center font-bold text-3xl max-lg:text-xl">
                Rekomendasi Wisata Populer <br /> di Jawa Tengah Terkini
            </p>
            <div class="mt-10">
                <swiper ref="swiperRef" :breakpoints="{ 
                    320: {
                            slidesPerView: 1,
                            spaceBetween: 0,
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
                        900: { slidesPerView: 3, }
                 }"
                    :loop="true" :modules="[Navigation]" @swiper="onSwiper" centeredSlides  >
                    <swiper-slide v-for="(item, index) in 4" :key="index" class="p-5">
                        <div class="flex justify-center items-end p-10  shadow_custom bg-primary_grey h-[30rem] w-[26rem] max-lg:w-[16rem] rounded-3xl bg-center bg-cover bg-no-repeat" :style="{backgroundImage: 'url('+ imageData[index] +' )'}">
                            <p class="text-white text-xl font-semibold">{{ titleData[index] }}</p>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
            <div class="flex justify-center gap-5 my-5">
                    <div class=" bg-primary_greeen font-bold px-3 py-1 rounded-full" @click="swiperPrevSlide">
                        <i class="iconsax text-xl text-white" icon-name="arrow-left"></i>
                    </div>
                    <div class=" bg-primary_greeen font-bold px-3 py-1 rounded-full" @click="swiperNextSlide">
                        <i class="iconsax text-xl text-white" icon-name="arrow-right"></i>
                    </div>
                </div>
        </section>
    </main>
</template>

<style scoped>
.swiper-slide{
    transition: all .3s ease;
    padding: 5rem  0;
}

.swiper-slide-active {
    transform: scale(1.25);
    z-index: 2;
  }

  @media only screen and (max-width: 600px) {
    .swiper-slide{
        margin-right: 17px;
    }

    .swiper-slide-active {
    transform: scale(1.1);
    z-index: 2;
  }
}
</style>