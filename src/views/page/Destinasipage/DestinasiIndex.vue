<script>
import CardArticleLarge from '@/components/cardArticleLarge.vue';
import ListArticleByCategory from '@/components/listArticleByCategory.vue';
import Search from '@/components/search.vue';
import axios from 'axios';


export default {
    components: {
        CardArticleLarge,
    },
    created() {
        this.getArtikel()
        this.getKota()
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
            dataKota: '',
            indexCatergory: 0,
            currentPage: 1,
            perPage: 8,
            totalItems: 0,
            searchTerm: '',
            article: '',
            kategori: [
                'Pantai',
                'Gunung',
                'Kuliner',
                'Curug',
                'Cagar Alam',
                'Lainnya',
            ]
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
        },
        getArtikel() {
            axios.get('https://pariwisata-1a79c-default-rtdb.firebaseio.com/artikelwisata.json')
                .then(ress => {
                    this.article = ress.data.slice(0, 5)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        getKota() {
            axios.get('https://pariwisata-1a79c-default-rtdb.firebaseio.com/kota.json')
                .then(ress => {
                    this.dataKota = ress.data
                    this.totalItems = this.dataKota.length
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },

}
</script>


<template>
    <main>
        <div class="px-20 py-44 flex gap-20  max-lg:px-10  max-lg:flex-col">
            <div class="w-2/3  max-lg:w-auto">
                <div class="bg-primary_grey flex justify-between gap-10 p-1 rounded-full max-sm:gap-0">
                    <input type="text" v-model="searchTerm" placeholder="Destinasi" class="text-primary_greeen ml-7">
                    <div class="bg-primary_greeen px-10 py-4 max-sm:p-3 text-sm text-white rounded-full"
                        @click="this.$router.push(`/destinasi/detail/${searchTerm}`)">
                        <p>Search</p>
                    </div>
                </div>
                <div class="mt-10">
                    <CardArticleLarge sizeText="30" :title="article[0].title"
                        :image="article[0].image" @click="this.$router.push(`artikel/${article[0].id}`)"/>
                </div>
                <div class="mt-20">
                    <p class="text-3xl font-bold">Kota di Jawa Tengah</p>
                    <div class="grid grid-cols-2 gap-12 mt-10 max-sm:grid-cols-1  max-lg:gap-5">
                        <div class=" p-10 bg-primary_grey h-[25rem] rounded-3xl flex justify-center items-end bg-center bg-cover bg-no-repeat cursor-pointer" @click="this.$router.push(`/destinasi/detail/${formatedKota(item.name)}`)"  :style="{backgroundImage: 'url('+ item.image + ')'}" 
                            v-for="(item, index) in displayedData" :key="index">
                            <p class="text-xl text-white font-semibold">{{ formatedKota(item.name) }}</p>
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
            <div class="w-[40%]  max-lg:w-auto">
                <div class="mt-24">
                    <p class="font-bold text-2xl">Categories</p>
                    <div class="mt-5 flex flex-col gap-3 text-xl">
                        <div class="flex justify-between" v-for="index in kategori">
                            <p>{{ index }}</p>
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
                    <div class="flex flex-col mt-5 gap-4">
                        <div class="bg-[#F5F5F5] p-[10px] rounded-3xl cursor-pointer" v-for="item in article" @click="this.$router.push(`artikel/${item.id}`)">
                            <div class="flex h-[7rem] gap-3">
                                <div class="w-[28%] h-full rounded-3xl">
                                    <img class="w-full h-full object-cover rounded-3xl"
                                        :src="item.image"
                                        alt="">
                                </div>
                                <div class="w-[72%]">
                                    <p class="font-bold">{{ item.title }}</p>
                                    <div class="bg-primary_grey py-1 px-4 rounded-xl w-max mt-3 text-sm">
                                        Wisata
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="mt-10 font-bold text-2xl">Top Artikel</p>
                    <CardArticleLarge sizeText="20" :title="article[3].title"
                        :image="article[3].image" @click="this.$router.push(`artikel/${article[3].id}`)"/>

                </div>
            </div>
        </div>
    </main>
</template>