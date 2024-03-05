<template>
    <main>
        <section>
            <div class="px-20 pt-40 pb-10">
                <div class="flex justify-between items-center">
                    <div class="flex items-center gap-5 cursor-pointer w-max" @click="this.$router.go(-1);">
                        <i class="iconsax text-4xl" icon-name="arrow-left"></i>
                        <p>Kembali</p>
                    </div>
                    <p class="font-bold text-2xl">
                        Open Trip Wisata Liburan Karimun Jawa
                    </p>
                    <div class=""></div>
                </div>
            </div>
        </section>
        <section class="py-[15rem] bg-primary_grey">

        </section>
        <section class="px-20 py-20">
            <div class="flex justify-between">
                <div class="bg-primary_greeen h-[6rem] w-[20rem] flex justify-center items-center text-white rounded-3xl text-xl">
                    <p>Detail</p>
                </div>
                <div class="bg-primary_greeen h-[6rem] w-[20rem] flex justify-center items-center text-white rounded-3xl text-xl">
                    <p>Rencana Perjalanan</p>
                </div>
                <div class="bg-primary_greeen h-[6rem] w-[20rem] flex justify-center items-center text-white rounded-3xl text-xl">
                    <p>Rincian Harga</p>
                </div>
                <div class="bg-primary_greeen h-[6rem] w-[20rem] flex justify-center items-center text-white rounded-3xl text-xl">
                    <p>Photo</p>
                </div>
            </div>
        </section>
    </main>
</template>