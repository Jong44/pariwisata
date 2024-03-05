<script>
export default {
    props: {
        value: String // Menentukan tipe data input
    },
    data() {
        return {
            searchTerm: this.value
        }
    },
    methods:{
        updateSearchTerm(event) {
            this.searchTerm = event.target.value; // Memperbarui searchTerm saat input berubah
        },
        search(){
            this.$emit('search', this.searchTerm); // Memancarkan event 'search' dengan nilai searchTerm
        }
    }
}
</script>

<template>
   
</template>