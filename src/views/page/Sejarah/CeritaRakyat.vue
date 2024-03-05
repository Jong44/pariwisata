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
        <div class="relative h-[25rem] bg-primary_grey mt-28 flex flex-col justify-center items-center text-center text-white bg-center bg-no-repeat bg-cover" style="background-image: url('https://firebasestorage.googleapis.com/v0/b/pariwisata-1a79c.appspot.com/o/inpirasi%2F60e62e9f-1941-4726-96a1-befa6c8fb547-1642664913585-fbf10d9d60a8d1a82b4de3edc5b6ee95.webp?alt=media&token=ebea5c43-fc3e-4dca-8891-36d839c14bdb');">
                <div class="absolute inset-0 bg-black opacity-[0.3]"></div>
                <div class="absolute">
                    <p class="text-6xl max-sm:text-3xl">Jaka Tarub dan 7 Bidadari</p>
                    <p class="mt-5 text-base max-sm:text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facere
                        repellendus dolorem. <br class="max-sm:hidden" /> Eius voluptatem placeat expedita quibusdam, </p>
                    <div class="px-10 py-5 bg-primary_yellow rounded-3xl w-max m-auto mt-10">
                        <p>Baca Selengkapnya</p>
                    </div>
                </div>
            </div>
        <section class="px-20 py-20  max-lg:px-10">
            <p class="font-bold text-3xl text-center max-sm:text-xl">
                Baca Cerita Rakyat Untuk Healing dan Refreshing
            </p>
            <div class="flex gap-10 mt-20 max-sm:flex-col">
                <div class="p-10 h-[20rem] w-1/2 bg-primary_grey rounded-3xl flex justify-center items-end bg-center bg-cover bg-no-repeat max-sm:w-auto"  style="background-image: url('https://firebasestorage.googleapis.com/v0/b/pariwisata-1a79c.appspot.com/o/inpirasi%2Fpantai-watu-bale-kebumen-jawa-tengah.jpg?alt=media&token=a857241b-fa91-49b2-bf2f-46edbf1ae66d');">
                    <p class="font-bold text-xl text-white">Pantai Watu Bale</p>
                </div>
                <div class="w-1/2 max-sm:w-auto">
                    <p class="font-bold text-xl">
                        Asal Usul Baturaden
                    </p>
                    <p class="mt-5">Liburan yang baik itu dimulai dari saat Anda merencanakannya. Jadi, untuk menikmati pesona Jawa Tengah, hal terbaik yang bisa Anda lakukan yaitu mempersiapkan diri untuk situasi baik atau kurang baik selama liburan. Meskipun Anda merasa aman dan sehat untuk menjelajahi keindahan tempat wisata di Indonesia, tidak ada salahnya untuk mengetahui beberapa info & tips ketika Anda mengunjungi tempat-tempat tertentu. Di sini, kami memiliki banyak informasi berguna yang dapat Anda gunakan. Ayo cek sekarang juga!</p>
                </div>
            </div>
        </section>
        <section class="px-20 py-16 gradient max-sm:px-10  max-lg:px-10">
            <p class="font-bold text-4xl text-center max-sm:text-xl">Aji Saka dan Asal Mula Huruf Jawa</p>
            <div class="flex gap-44 mt-20 max-sm:block  max-lg:gap-10">
                <div class="w-1/2 max-sm:w-auto">
                    <p class="font-semibold text-2xl max-sm:text-lg">Lorem ipsum dolor sit amet consectetur. Mauris aliquet tellus ut
                        amet neque dignissim. </p>
                    <p class="text-[#d9d9d9] text-xl mt-2 max-sm:text-base">Lorem ipsum dolor sit amet consectetur. Non nulla suspendisse
                        blandit rutrum dui sed morbi quam vestibulum. Leo purus morbi elementum nisi diam cursus sit
                        nibh. Turpis sed quis eget molestie. Semper quis at leo nisl orci id habitasse ultrices. Nibh
                        mauris lectus proin tincidunt amet massa eleifend ac laoreet. </p>
                    <div class="flex items-center gap-2 mt-5 font-bold text-primary_yellow">
                        <p>Baca Selengkapnya</p>
                        <i class="iconsax text-xl " icon-name="arrow-right"></i>
                    </div>
                    <div class="flex gap-12 mt-20">
                        <div class="font-bold text-white">
                            <p class="text-5xl max-sm:text-xl">100+</p>
                            <p class="text-xl max-sm:text-base">Artikel</p>
                        </div>
                        <div class="font-bold text-white">
                            <p class="text-5xl max-sm:text-xl">50+</p>
                            <p class="text-xl max-sm:text-base">User</p>
                        </div>
                        <div class="font-bold text-white">
                            <p class="text-5xl max-sm:text-xl">20+</p>
                            <p class="text-xl max-sm:text-base">Destinasi</p>
                        </div>
                    </div>
                </div>
                <div class="w-1/2 h-[25rem] bg-primary_greeen rounded-3xl max-sm:hidden">
                    <img src="@/assets/bg_card2.png" alt=""
                        class="w-full h-full object-cover rounded-3xl object-center ">
                </div>
            </div>
        </section>
    </main>
</template>