<script>
import CardArticleLarge from '@/components/cardArticleLarge.vue';
import ListArticleByCategory from '@/components/listArticleByCategory.vue';

export default{
    components: {
        CardArticleLarge,
        ListArticleByCategory,
    },
    data() {
        return {
            indexCatergory: 0,
            searchTerm: ''
        }
    },
}

</script>

<template>
    <main>
        <div class="px-20 py-44 flex gap-20  max-lg:px-10  max-lg:flex-col">
            <div class="w-2/3  max-lg:w-auto">
                <div class="bg-primary_grey flex justify-between gap-10 p-1 rounded-full max-sm:gap-0">
                    <input type="text" v-model="searchTerm" placeholder="Destinasi"
                        class="text-primary_greeen ml-7">
                    <div class="bg-primary_greeen px-10 py-4 max-sm:p-3 text-sm text-white rounded-full" @click="this.$router.push(`/destinasi/detail/${searchTerm}`)">
                        <p>Search</p>
                    </div>
                </div>
                <div class="mt-10">
                    <CardArticleLarge sizeText="30" title="Keindahan Pesona Jawa Tengah Yang Wajib di Kunjungi"
                        image="https://firebasestorage.googleapis.com/v0/b/pariwisata-1a79c.appspot.com/o/article%2Feugenia-clara-_QTeGT478_8-unsplash.jpg?alt=media&token=b903d953-c78c-4d32-a502-ed45658dfb30" />
                </div>
                <div class="mt-20">
                    <p class="text-3xl font-bold">Kota di Jawa Tengah</p>
                    <div class="grid grid-cols-2 gap-12 mt-10 max-sm:grid-cols-1  max-lg:gap-5">
                        <div class=" p-10 bg-primary_grey h-[25rem] rounded-3xl flex justify-center items-end"
                            v-for="(item, index) in 8" :key="index">
                            <p class="text-xl">Cerita Rakyat</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-[40%]  max-lg:w-auto">
                <div class="mt-24">
                    <p class="font-bold text-2xl">Categories</p>
                    <div class="mt-5 flex flex-col gap-3 text-xl">
                        <div class="flex justify-between" v-for="index in 6">
                            <p>Pantai</p>
                            <p>(10)</p>
                        </div>
                    </div>
                    <div class="bg-primary_grey rounded-full mt-10">
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
                    <p class="mt-10 font-bold text-2xl">Top Artikel</p>
                    <CardArticleLarge sizeText="20" title="Keindahan Pesona Jawa Tengah Yang Wajib di Kunjungi"
                        image="https://firebasestorage.googleapis.com/v0/b/pariwisata-1a79c.appspot.com/o/article%2Feugenia-clara-_QTeGT478_8-unsplash.jpg?alt=media&token=b903d953-c78c-4d32-a502-ed45658dfb30" />

                </div>
            </div>
        </div>
    </main>
</template>