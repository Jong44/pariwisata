<script>

export default {
    props: {
        item:{
            type: Object,
            required: true
        }
    },
    methods: {
        getPhotoUrl(photos) {
            if(photos.length > 0){
                var photoId = photos[0].Fg.substring(photos[0].Fg.lastIndexOf("/") + 1);
                var url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoId}&key=AIzaSyBEIDtDEJ7rU8xnMBjNH2_D2D-2lc_bmS8`
                return url
            }else{
                return 'https://via.placeholder.com/400x300?text=No+Image';
            }
           
        },
        getRatingStars(rating) {
            let fullStars = Math.floor(rating);
            let halfStars = Math.ceil(rating - fullStars);
            let emptyStars = 5 - fullStars - halfStars;

            let stars = '';
            for (let i = 0; i < fullStars; i++) {
                stars += '<i class="fas fa-star" style="color: orange;"></i>';
            }
            for (let i = 0; i < halfStars; i++) {
                stars += '<i class="fas fa-star-half-alt" style="color: orange;"></i>';
            }
            for (let i = 0; i < emptyStars; i++) {
                stars += '<i class="far fa-star" style="color: orange;"></i>';
            }
            return stars;
        }
    },
}
</script>


<template>
    <div class="bg-[#E7E7E7] h-[18rem] rounded-3xl p-7 flex gap-32">
        <div class="w-[45%] h-full flex flex-col justify-between">
            <p class="font-bold text-2xl">{{ item.displayName }}</p>
            <div class="flex items-center gap-10">
                <div v-html="getRatingStars(item.rating)" class="flex gap-5 text-[#F4B149]"></div>
                <p>({{ item.userRatingCount }})</p>
            </div>
            <p>Wisata - 2CJH+M9F</p>
            <p>{{ item.formattedAddress }}</p>
            <p v-if="item.regularOpeningHours && item.regularOpeningHours.weekdayDescriptions != null" class="text-sm text-primary_green">Buka {{ item.regularOpeningHours.weekdayDescriptions[0] }}</p>
            <p v-else class="text-sm text-primary_green">Data tidak Tersedia</p>
        </div>
        <div class="w-[55%] bg-primary_grey rounded-3xl bg-center bg-cover"
            :style="{ backgroundImage: 'url(' + getPhotoUrl(item.photos) + ')' }">
        </div>
    </div>
</template>