<script>
import CardArticleLarge from '@/components/cardArticleLarge.vue';
import ListArticleByCategory from '@/components/listArticleByCategory.vue';
import Search from '@/components/search.vue';

import DataKota from '@/assets/data_kota.json'

export default {
    components: {
        CardArticleLarge,
        ListArticleByCategory,
        Search
    },
    created() {
        this.totalItems = this.dataKota.length
    },
    computed: {
        totalPages() {
            return Math.ceil(this.totalItems / this.perPage);
        },
        displayedData() {
            const startIndex = (this.currentPage - 1) * this.perPage;
            const endIndex = startIndex + this.perPage;
            return this.dataKota.slice(startIndex, endIndex);
        },
        formatedKota() {
            return (kota) => {
                var slicing = kota.replace("KABUPATEN ", "");
                var lower = slicing.charAt(0).toUpperCase() + slicing.slice(1).toLowerCase();
                return lower
            }
        }
    },
    data() {
        return {
            dataKota: DataKota,
            indexCatergory: 0,
            currentPage: 1,
            perPage: 8,
            totalItems: 0,
            searchTerm: ''
        }
    },
    methods: {
        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        setCurrentPage(pageNumber) {
            this.currentPage = pageNumber;
        },
        onChangeModel() {
            console.log(this.searchTerm)
        }
    },

}
</script>


<template>
    <main>
        <div class="px-20 py-44 flex gap-20">
            <div class="w-2/3">
                <div class="bg-primary_grey flex justify-between gap-10 p-1 rounded-full">
                    <input type="text" v-model="searchTerm" placeholder="Destinasi"
                        class="text-primary_greeen ml-7">
                    <div class="bg-primary_greeen px-10 py-4 text-sm text-white rounded-full" @click="this.$router.push(`/destinasi/detail/${searchTerm}`)">
                        <p>Search</p>
                    </div>
                </div>
                <div class="mt-10">
                    <CardArticleLarge sizeText="30" title="Keindahan Pesona Jawa Tengah Yang Wajib di Kunjungi"
                        image="https://firebasestorage.googleapis.com/v0/b/pariwisata-1a79c.appspot.com/o/article%2Feugenia-clara-_QTeGT478_8-unsplash.jpg?alt=media&token=b903d953-c78c-4d32-a502-ed45658dfb30" />
                </div>
                <div class="mt-20">
                    <p class="text-3xl font-bold">Kota di Jawa Tengah</p>
                    <div class="grid grid-cols-2 gap-12 mt-10 ">
                        <div class=" p-10 bg-primary_grey h-[25rem] rounded-3xl flex justify-center items-end"
                            v-for="(item, index) in displayedData" :key="index">
                            <p class="text-xl">{{ formatedKota(item.name) }}</p>
                        </div>
                    </div>
                </div>
                <div class="mt-10">
                    <div class=" border border-primary_grey w-[18rem] h-[2rem] rounded-full">
                        <div class="flex justify-between">
                            <div class="w-[3rem] h-[2rem] border-r flex justify-center items-center cursor-pointer"
                                @click="previousPage" :disabled="currentPage === 1">
                                <i class="iconsax" icon-name="chevron-left"></i>
                            </div>
                            <div v-for="pageNumber in totalPages" :key="pageNumber"
                                class="w-[3rem] h-[2rem] border-r flex justify-center items-center cursor-pointer"
                                @click="setCurrentPage(pageNumber)">
                                <p :class="{ 'text-primary_greeen font-bold': currentPage === pageNumber }">{{
                        pageNumber }}</p>
                            </div>
                            <div class="w-[3rem] h-[2rem] flex justify-center items-center cursor-pointer"
                                @click="nextPage" :disabled="currentPage === totalPages">
                                <i class="iconsax" icon-name="chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-[40%]">
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
</template>../../../components/listArticleByCategory.vue