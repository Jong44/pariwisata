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
        }
    }
}
</script>

<template>
    <div class="article w-[25rem] shadow_custom rounded-xl m-1 bg-[#e7e7e7] max-sm:w-full max-sm:mt-10 max-lg:w-[20rem] cursor-pointer">
        <div class="h-[15rem] rounded-t-xl bg-center bg-cover bg-no-repeat" :style="{backgroundImage : 'url(' + image +')'}"></div>
        <div class="p-5 h-[8rem] flex flex-col justify-between">
           <div class="">
                <p class="font-bold text-base">{{ title }}</p>
                <p class="text-sm text-more">
                    {{ description }}
                </p>
           </div>
            <p class="text-base font-bold mt-2 read_more">
                Read More
            </p>
        </div>
    </div>
</template>