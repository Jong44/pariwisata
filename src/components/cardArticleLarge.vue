<script>
export default {
    props:{
        title:{
            type: String,
            required: true
        },
        image:{
            type: String,
            required:true
        },
        sizeText:{
            type: Number,
            required: true
        }
    }
}
</script>


<template>
    <div class="bg-[#F5F5F5] w-full rounded-2xl">
        <div class="h-[18rem] p-2">
            <div class="h-full bg-cover bg-center rounded-xl" :style="{ backgroundImage: 'url(' + image + ')' }">
            <!-- HEHHEHEHHEHEHE -->
            </div>
        </div>
        <div class="p-7">
            <div class="bg-primary_grey py-2 px-5 rounded-xl w-max mb-5">
                Wisata
            </div>
            <p class="font-bold" :style="{fontSize: `${sizeText}px`}">{{ title }}</p>
        </div>
    </div>
</template>