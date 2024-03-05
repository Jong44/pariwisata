<script>
    export default{
        props:{
            title:{
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            province:{
                type: String,
                required: true,
            },
            city:{
                type: String,
                required: true
            },
            price:{
                type: Number,
                required: true
            }
        },
        data() {
            return {
                
            }
        },
    }
</script>

<template>
    <div class="slide w-[18rem] h-[20rem] shadow_custom rounded-xl m-1 max-sm:w-[15rem] cursor-pointer">
        <div class="h-[12rem] rounded-t-xl bg-center bg-cover bg-no-repeat" :style="{backgroundImage : 'url(' + image +')'}"></div>
        <div class="p-5 h-[8rem] flex flex-col justify-between">
           <div class="">
                <p class="font-bold text-base">{{ title }}</p>
                <p class=" text-gray-400 text-xs">
                    {{ province }}, {{ city }}
                </p>
           </div>
            <p class="text-base">
                <span class="text-primary_yellow font-bold">Rp</span>
                <span class="font-bold">{{ price }}</span>
                <span class="text-gray-400 text-xs">/Day</span>
            </p>
        </div>
    </div>
</template>