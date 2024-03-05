<script>
import axios from 'axios'
export default {

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
                <div class="rounded-3xl h-[30rem] bg-center bg-cover"
                    style="background-image: url('https://firebasestorage.googleapis.com/v0/b/pariwisata-1a79c.appspot.com/o/sejarah%2Felang-wardhana-vOiqlMeIJNY-unsplash.jpg?alt=media&token=4e952399-fe8b-494c-b8ff-1bd86d124a6a');">
                </div>
                <div class="bg-primary_grey py-2 px-5 rounded-xl w-max my-10">
                    Sejarah
                </div>
                <p class="text-3xl font-bold mb-5">Bahasa Jawa</p>
                <div class=" flex flex-col gap-5 text-justify">
                    <p>Bahasa Jawa adalah bahasa yang tanah asalnya berada di Pulau Jawa. Di Pulau Jawa, bahasa ini
                        dituturkan
                        oleh masyarakat Jawa yang di antaranya tinggal di Provinsi Jawa Tengah, Daerah Istimewa
                        Yogyakarta (DIY),
                        Jawa Timur, Jawa Barat, dan Banten. Selain dituturkan di Pulau Jawa, bahasa ini juga memiliki
                        sebaran
                        di beberapa wilayah Indonesia lainnya, seperti Lampung, Aceh, Riau, Kepulauan Riau (Kepri),
                        Bengkulu, Jambi, Bali,
                        NTB, Kalimantan Timur, Sumatra Utara, Kalimantan Selatan, dan Sulawesi Tenggara. Bahkan bahasa
                        Jawa juga dituturkan di luar Indonesia.
                        Bahasa Jawa yang dituturkan di Provinsi Jawa Tengah terdiri atas lima dialek, yaitu
                        <ul>
                            <li>(1) dialek Solo-Yogya,</li>
                        <li>(2) dialek Pekalongan,</li>
                        <li>(3) dialek Wonosobo</li>
                        <li>(4) dialek Banyumas, dan</li>
                        <li>(5) dialek Tegal.</li>
                        </ul>
                        Persentase perbedaan kelima dialek tersebut sekitar 60%.
                        Dialek Solo-Yogya menyebar di seluruh DIY dan sebagian besar wilayah Provinsi Jawa Tengah bagian
                        timur yang meliputi empat eks-Karesidenan, yaitu Karesidenan Surakarta, Karesidenan Semarang,
                        Karesidenan Kedu, dan Karesidenan Pati.
                        Dialek Pekalongan dituturkan di Kabupaten Batang, Kabupaten Pekalongan, Kota Pekalongan, dan
                        Kabupaten Pemalang.
                        Dialek Wonosobo dituturkan di Kabupaten Wonosobo, di Kelurahan Wadaslintang, Kecamatan
                        Wadaslintang;Desa Candirejo,
                        Kecamatan Mojotengah; Desa Balekambang, Kecamatan Selomerto; Desa Rejosari, Kecamatan Kalikajar;
                        Desa Jlamprang, Kecamatan Leksono;
                        Desa Rogojati, Kecamatan Sukoharjo; Desa Beran, Kecamatan Kepil; dan Desa Karangsambung,
                        Kecamatan Kalibawang.Dialek Tegal dituturkan
                        masyarakat di Kabupaten Tegal, Kota Tegal, dan Kabupaten Brebes. Dialek Banyumas dituturkan
                        masyarakat di Kabupaten Cilacap, Kabupaten Banyumas,
                        Kabupaten Kebumen, Kabupaten Banjarnegara, dan Kabupaten Purbalingga.
                        Berdasarkan hasil penghitungan dialektometri, isolek Jawa yang dituturkan di Solo dan Yogya
                        dibandingkan dengan bahasa Jawa yang terdapat di wilayah
                        lainnya di Indonesia memiliki perbedaan dialek dan subdialek. Bahasa Jawa di Solo dan Yogya
                        memiliki perbedaan dialek dengan Bahasa Jawa
                        di Provinsi Riau (Kabupaten Indragirihulu), Provinsi Aceh, Provinsi Kalimantan Selatan, Lampung,
                        Provinsi Jambi, Provinsi Bali (Kabupaten Buleleng), Provinsi Bengkulu (Kabupaten Rejang Lebong),
                        Provinsi Sumatra Utara, Provinsi NTB, dan
                        Provinsi Sulawesi Utara dengan persentase perbedaan berkisar 51% 80%, sedangkan perbedaan
                        perbedaan subdialek dengan Provinsi Sumatra Selatan dan Provinsi Kalimantan Timur berkisar 31%
                        50%.</p>
                </div>
            </div>
        </div>
    </main>
</template>