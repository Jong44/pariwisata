<script>
import axios from 'axios'
export default {
    props: ['id'],
    data() {
        return {
            image : "https://firebasestorage.googleapis.com/v0/b/pariwisata-1a79c.appspot.com/o/article%2Feugenia-clara-_QTeGT478_8-unsplash.jpg?alt=media&token=b903d953-c78c-4d32-a502-ed45658dfb30",
            html: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>",
            data: ''
        }
    },
    created(){
        this.getArticle()
    },
    methods:{
        getArticle(){
            axios.get('https://pariwisata-1a79c-default-rtdb.firebaseio.com/artikel.json')
            .then(ress=>{
                this.data = ress.data.filter(item => item.id == this.id);
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
}
</script>


<template>
    <main>
        <div class="px-20 py-40">
            <div class="flex items-center gap-5 cursor-pointer w-max" @click="this.$router.go(-1);">
                <i class="iconsax text-4xl" icon-name="arrow-left" ></i>
                <p>Kembali</p>
            </div>
            <div class="mt-20">
                <div class="rounded-3xl h-[30rem] bg-center bg-cover" :style="{backgroundImage: 'url(' + data[0].image + ')'}"></div>
                <div class="bg-primary_grey py-2 px-5 rounded-xl w-max my-10">
                    Wisata
                </div>
                <p class="text-3xl font-bold mb-5">{{ data[0].title }}</p>
                <div class=" flex flex-col gap-5" v-html="data[0].deskripsi"></div>
            </div>
        </div>
    </main>
</template>