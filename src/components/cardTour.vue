<script>
export default {
    props:{
        title:{
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        sizeText:{
            type: Number,
            required: true
        }
    }
}
</script>

<template>
     <div class="bg-[#F5F5F5] w-full rounded-2xl cursor-pointer">
        <div class="h-[18rem] p-2">
            <div class="h-full bg-cover bg-center rounded-xl" :style="{ backgroundImage: 'url(' + image + ')' }">
            <!-- HEHHEHEHHEHEHE -->
            </div>
        </div>
        <div class="p-7">
            <p class="font-bold " :style="{fontSize: `${sizeText}px`}">{{ title }}</p>
            <p class="text-more my-3">{{ description }}</p>
            <div class="bg-primary_greeen py-3 px-10 text-white w-max rounded-2xl cursor-pointer">
                <p>View</p>
            </div>
        </div>
    </div>
</template>