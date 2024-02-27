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
  <section class="gradient relative top-0 w-full bg-red-600 px-20 py-44">
    <div class="w-[46rem]">
      <p class="font-bold text-2xl">Welcome to</p>
      <h1 class="font-extrabold text-[96px]">LOREM IPSUM</h1>
      <p class="text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil non
        dolorum, tempore corrupti voluptates illum error
      </p>
    </div>
    <div class="px-5 py-2 bg-primary_yellow w-max rounded-full mt-10 cursor-pointer">
      <p>Pesan Sekarang</p>
    </div>
    <div
      class="radius-custom border-custom bg-primary_greeen w-[60rem] h-[10rem] position absolute right-0 bottom-[-2rem]">
      <div class="flex">
        <div class="radius-customs w-1/3 h-[9.4rem] bg-center bg-cover"
          :style="{ backgroundImage: 'url(' + image + ')' }"></div>
        <div class="w-2/3 h-[10rem] bg-primary_greeen p-5">
          <p class="font-bold text-2xl">Candi Prambanan</p>
          <p class="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            earum necessitatibus! Illum harum impedit cumque consequatur
          </p>
          <div class="flex items-center gap-2 mt-5 font-bold text-primary_yellow">
            <p>Read More</p>
            <i class="iconsax text-xl" icon-name="arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
