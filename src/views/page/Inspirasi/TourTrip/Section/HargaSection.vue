<template>
    <section class="px-20 my-20 text-justify">
            <table class="w-full">
                <tr class="bg-primary_greeen text-white text-center h-16">
                    <th>Pilihan Penginapan</th>
                    <th>Jadwal Trip</th>
                    <th>Kapal</th>
                    <th>Harga Per Orang</th>
                </tr>
                <tr class="text-center h-16" v-for="(item, index) in 10" :key="index">
                    <td>Homestay Fan</td>
                    <td>Jumat-Minggu</td>
                    <td>Express Bahari</td>
                    <td>Rp 1.000.000/orang</td>
                </tr>
            </table>
        </section>
</template>