<script>


import { Swiper, SwiperSlide } from 'swiper/vue';
import { useSwiper } from 'swiper/vue';
import 'swiper/css';
import { Navigation  } from 'swiper/modules';
import axios from 'axios';

export default{
    computed:{
        formatedKota() {
            return (kota) => {
                var slicing = kota.replace("KABUPATEN ", "");
                var lower = slicing.charAt(0).toUpperCase() + slicing.slice(1).toLowerCase();
                return lower
            }
        }
    },
    components:{
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            dataKota: '',
            data: [
                'https://firebasestorage.googleapis.com/v0/b/pariwisata-1a79c.appspot.com/o/kuliner%2FIMG20230527120315%201.png?alt=media&token=9284ff1e-0f28-4d60-9816-d7e3aba01abb',
                'https://firebasestorage.googleapis.com/v0/b/pariwisata-1a79c.appspot.com/o/kuliner%2F2023-07-27%201.png?alt=media&token=34502915-1c9d-4b3e-929f-a34ba7279841',
                'https://firebasestorage.googleapis.com/v0/b/pariwisata-1a79c.appspot.com/o/kuliner%2FTengkleng-Pak-Manto-via%201.png?alt=media&token=85f6d737-d8b4-459f-9a79-6f2cd781e933',
                'https://firebasestorage.googleapis.com/v0/b/pariwisata-1a79c.appspot.com/o/kuliner%2F2022-05-15%2C%20Nasi%20Liwet%20Bu%20Wongso%20Lemu%2C%20Solo%20(DSC_3674)%201.png?alt=media&token=9926edac-5e04-440f-9af0-d24c939f7be6'
            ]
        }
    },
    mounted(){
        this.getKota()
    },
    methods:{
        getKota() {
            axios.get('https://pariwisata-1a79c-default-rtdb.firebaseio.com/kota.json')
                .then(ress => {
                    this.dataKota = ress.data.slice(0,6)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}

</script>

<template>
    <main>
        <section class="px-20 py-40  max-lg:px-10">
            <p class="font-bold text-3xl text-center max-sm:text-xl">
                Bingung Mau Kulineran Tapi <br/> Tidak Tahu Tempatnya?
            </p>
            <div class="flex gap-10 mt-20 max-sm:flex-col">
                <div class="p-10 h-[20rem] w-1/2 bg-primary_grey rounded-3xl flex justify-center items-end bg-center bg-cover bg-no-repeat max-sm:w-auto"  style="background-image: url('https://firebasestorage.googleapis.com/v0/b/pariwisata-1a79c.appspot.com/o/inpirasi%2Fpantai-watu-bale-kebumen-jawa-tengah.jpg?alt=media&token=a857241b-fa91-49b2-bf2f-46edbf1ae66d');">
                    <p class="font-bold text-xl text-white">Pantai Watu Bale</p>
                </div>
                <div class="w-1/2 max-sm:w-auto">
                    <p class="font-bold text-xl">
                        Destinasi Kuliner Akhir Pekan, yang Ada di Semarang
                    </p>
                    <p class="mt-5">Kota Semarang merupakan pilihan destinasi wisata yang menarik. Selain bisa menjelajahi banyak peninggalan kuno Belanda, berburu kuliner khas Semarang pun menarik dilakukan mengingat kota ini termasuk surganya kuliner lezat!
Banyak makanan khas Kota Semarang yang wajib dicoba jika Anda berencana berkunjung ke sana, dari yang manis sampai gurih. Bisa dijadikan oleh-oleh untuk orang tercinta, loh!</p>
                    <div class="bg-primary_greeen px-12 py-3 rounded-3xl mt-5 text-white w-max cursor-pointer">
                        <p>Selengkapnya</p>
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
        <section class="px-20 py-24  max-lg:px-10">
            <div class="flex gap-24  max-lg:flex-col">
                <div class="w-1/2  max-lg:w-auto">
                    <p class="font-bold text-2xl">Rekomendasi Kuliner Solo Terenak dan Legendaris!</p>
                    <p class="mt-10">Kuliner legendaris Solo enggak melulu sate, masih banyak makanan khas yang mungkin belum pernah kamu cicipi. Mulai dari timlo, leker gajahan, hingga soto segeer merupakan sederet kuliner Solo yang wajib kamu coba.</p>
                    <div class="flex flex-wrap gap-8 mt-10  max-lg:gap-5  max-lg:justify-center ">
                        <div class="bg-primary_grey rounded-3xl h-[10rem] w-[18rem] bg-center bg-cover bg-no-repeat" v-for="(item, index) in data" :key="index" :style="{backgroundImage: 'url('+ item +')'}"></div>
                    </div>
                </div>
                <div class="w-1/2 h-auto bg-primary_grey rounded-3xl  max-lg:h-[20rem] max-lg:w-auto bg-center bg-cover bg-no-repeat" style="background-image: url('https://firebasestorage.googleapis.com/v0/b/pariwisata-1a79c.appspot.com/o/kuliner%2F2022-12-21%201.png?alt=media&token=3cefbb79-b5e6-44af-bc75-1050b17ed6d7');">

                </div>
            </div>
        </section>
        <section class="px-20 py-16 max-lg:px-10">
            <p class="font-bold text-2xl">Rekomendasi Kota</p>
            <div class="mt-10">
                <swiper 
                        ref="swiperRef"
                        :breakpoints="{
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
                        }"
                        :loop="true">
                    <swiper-slide v-for="(item, index) in dataKota" :key="index" class="p-5">
                        <div class=" p-10 flex justify-center items-end bg-primary_grey h-[25rem] rounded-3xl bg-center bg-cover bg-no-repeat cursor-pointer" :style="{backgroundImage: 'url('+ item.image + ')'}">
                            <p class="text-xl text-white font-semibold">{{ formatedKota(item.name) }}</p>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </section>
    </main>
</template>