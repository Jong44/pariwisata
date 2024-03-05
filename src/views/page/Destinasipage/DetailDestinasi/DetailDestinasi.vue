<script>

import CardDestinationMaps from '@/components/cardDestinationMaps.vue'
import search from '@/components/search.vue'

export default {
    props: ['query'],
    components: {
        CardDestinationMaps
    },
    data() {
        return {
            center: { lat: -7.223749115516702, lng: 109.97925567533836 },
            searchQuery: '',
            listPlace: []
        }
    },
    mounted(){
        this.searchQuery = this.query
        this.search()
    },
    methods: {
        async search() {
            var request = {
                textQuery: 'wisata' + this.searchQuery + ' in Jawa Tengah',
                fields: ["displayName", "location", "userRatingCount", "regularOpeningHours", "businessStatus", "photos", "reviews", "rating", "formattedAddress"],
            }
            const { places } = await google.maps.places.Place.searchByText(request);
            if (places.length) {
                this.listPlace = places
            }
        },
    }
}
</script>



<template>
    <main>
        <div class="px-20 py-40">
            <div class="flex items-center gap-5 cursor-pointer w-max" @click="this.$router.go(-1);">
                <i class="iconsax text-4xl" icon-name="arrow-left"></i>
                <p>Kembali</p>
            </div>
            <div class="mt-20">
                <div class="w-[30rem] mb-10">
                    <div class="bg-primary_grey flex justify-between gap-10 p-1 rounded-full">
                        <input type="text"  v-model="searchQuery" placeholder="Destinasi" class="text-primary_greeen ml-7">
                        <div class="bg-primary_greeen px-10 py-4 text-sm text-white rounded-full" @click="search">
                            <p>Search</p>
                        </div>
                    </div>
                </div>
                <div class="rounded-3xl w-full h-[30rem]">
                    <GMapMap :center="center" :zoom="11" style="width: 100%; height: 30rem; border-radius: 2rem;">
                        <GMapMarker v-for="(m, index) in listPlace" :key="index" :clickable="true"
                            :position="m.location" @click="center = m.location"></GMapMarker>
                    </GMapMap>
                </div>
                <div class="mt-16 px-24">
                    <div class="flex flex-col gap-10">
                        <div class="" v-for="(item, index) in listPlace" :key="index">
                            <CardDestinationMaps :item="item" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>