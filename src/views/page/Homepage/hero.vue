<script>
export default {
  data() {
    return {
      image:
        "https://firebasestorage.googleapis.com/v0/b/pariwisata-1a79c.appspot.com/o/article%2Feugenia-clara-_QTeGT478_8-unsplash.jpg?alt=media&token=b903d953-c78c-4d32-a502-ed45658dfb30",
    };
  },
};
</script>

<template>
  <section class="gradient relative top-0 w-full bg-red-600 px-20 py-44 max-sm:px-10  max-lg:px-10">
    <div class="w-[46rem] max-sm:w-auto">
      <p class="font-bold text-2xl max-sm:text-lg">Selamat Datang di</p>
      <h1 class="font-extrabold text-[94px] max-sm:text-[50px]">Jelajah Jateng</h1>
      <p class="text-xl max-sm:text-sm">
        Jelajahi Jateng merupakan website perjalanan wisata di Jawa Tengah dimana kami akan merekomendasikan seluruh
        wisata yang berada dijawa tengah yang. Dan tidak usah bingung lagi untuk mencari tempat liburan maupun rekreasi
      </p>
    </div>
    <div class="px-5 py-2 bg-primary_yellow w-max rounded-full mt-10 cursor-pointer">
      <p>Baca Selengkapnya</p>
    </div>
    <div
      class="radius-custom border-custom bg-primary_greeen w-[60rem] h-[10rem] position absolute right-0 bottom-[-2rem] max-sm:w-[22rem]  max-lg:w-[40rem] z-10">
      <div class="flex">
        <div class="radius-customs w-1/3 h-[9.4rem] bg-center bg-cover"
          :style="{ backgroundImage: 'url(' + image + ')' }"></div>
        <div class="w-2/3 h-[10rem] bg-primary_greeen p-5">
          <p class="font-bold text-2xl max-sm:text-base">Candi Prambanan</p>
          <p class="text-sm max-sm:text-xs">
            Prambanan adalah candi Hindu terbesar dan termegah yang pernah dibangun di Jawa kuno,
          </p>
          <div class="flex items-center gap-2 mt-5 font-bold text-primary_yellow max-sm:mt-3">
            <p>Read More</p>
            <i class="iconsax text-xl" icon-name="arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute right-0 bottom-0 w-[30rem] h-[32rem] gradien_2 rounded-s-3xl max-lg:hidden" >
      
    </div>
    <div class="absolute right-0 bottom-0 rounded-s-3xl max-lg:hidden" >
      <img src="@/assets/candi2.png" class="w-[20rem]" alt="">
    </div>
    <div class="absolute right-0 bottom-0 z-0 max-lg:hidden">
      <img src="@/assets/candi.png" class="w-[30rem]" alt="">
    </div>
  </section>
</template>
