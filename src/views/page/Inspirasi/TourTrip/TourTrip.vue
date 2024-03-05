<script>
import CardTour from '@/components/cardTour.vue'
import ListArticleByCategory from '@/components/listArticleByCategory.vue';

export default {
    components: {
        CardTour,
        ListArticleByCategory
    },
    data() {
        return {
            indexCatergory: 0
        }
    },
}
</script>

<template>
    <main>
        <section class="py-44">
            <p class="font-bold text-3xl text-center">
                Tentukan Rencana Perjalanan Kamu Untuk <br />Healing dan Refreshing
            </p>
            <div class="h-[25rem] bg-primary_grey mt-12 flex flex-col justify-center items-center text-center">
                <p class="text-6xl">Selamat Datang di <span class="font-bold">Merapi Trip</span></p>
                <p class="mt-5 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facere
                    repellendus dolorem. <br /> Eius voluptatem placeat expedita quibusdam, </p>
            </div>
            <div class="px-20 py-10 flex gap-32">
                <div class="w-2/3">
                    <p class="text-2xl font-bold">Tour dan Travel</p>
                    <div class="mt-10">
                        <CardTour sizeText="30" title="Keindahan Pesona Jawa Tengah Yang Wajib di Kunjungi"
                            image="https://firebasestorage.googleapis.com/v0/b/pariwisata-1a79c.appspot.com/o/article%2Feugenia-clara-_QTeGT478_8-unsplash.jpg?alt=media&token=b903d953-c78c-4d32-a502-ed45658dfb30" />
                    </div>
                </div>
                <div class="w-[40%]">
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
        <section class="px-20 py-10 flex">
            <div class="w-1/3">
                <p class="font-bold text-3xl">Pesan Trip Kamu Hanya dengan 3 Cara</p>
                
            </div>
        </section>
    </main>
</template>