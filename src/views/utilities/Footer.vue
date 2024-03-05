<script>


</script>

<template>
    <footer class=" bg-primary_greeen text-[#C2C2C2] w-full p-20 max-sm:p-10" >
        <div class="flex justify-between max-sm:flex-col max-sm:gap-10">
            <div class="w-1/3 max-sm:w-auto">
                <img src="@/assets/logo.png" alt="">
                <p class=" my-5">Jl. Imam Bonjol No.207, Pendrikan Kidul, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50131</p>
                <div class="flex text-2xl gap-4">
                    <font-awesome-icon :icon="['fab', 'x-twitter']" />
                    <font-awesome-icon :icon="['fab', 'facebook']" />
                    <font-awesome-icon :icon="['fab', 'whatsapp']" />
                    <font-awesome-icon :icon="['fab', 'square-instagram']" />
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <p class="font-bold text-2xl">Menu</p>
                <p>Beranda</p>
                <p>Destinasi</p>
                <p>Inspirasi</p>
                <p>Sejarah</p>
                <p>Bahasa</p>
            </div>
            <div class="flex flex-col gap-2">
                <p class="font-bold text-2xl">Artikel</p>
                <p>Pantai</p>
                <p>Gunung</p>
                <p>Kuliner</p>
                <p>Curug</p>
                <p>Cagar Alam</p>
            </div>
            <div class="w-1/4 flex flex-col gap-2">
                <p class="font-bold text-2xl">Kontak Kami</p>
                <p>+62 0899 5556 3333</p>
                <p>wisatajateng@gmail.com</p>
            </div>
        </div>
    </footer>
</template>