<template>
    <v-main>
        <div>
        <div class="blog-component">
                <v-container class="py-0 ma-0" style="max-width:none">
                    <v-row justify="center">
                        <v-col cols="12" sm="12" class="px-0">
                            <v-card class="overflow-hidden rounded-0 mb-15" elevation="5">
                            <div class="position-relative">
                                <v-img
                                    src="https://www.greenscene.co.id/wp-content/uploads/2024/03/New-Project-2024-03-23T084209.092-696x497.jpg"
                                    alt="blog"
                                    max-height="500"
                                    class="blog-img"
                                >
                                    <template v-slot:placeholder>
                                        <v-row
                                            class="fill-height ma-0"
                                            align="center"
                                            justify="center"
                                        >
                                            <v-progress-circular
                                            indeterminate
                                            color="grey lighten-5"
                                            ></v-progress-circular>
                                        </v-row>
                                    </template>
                                </v-img>
                                <v-overlay absolute class="overlay-container d-flex flex-column justify-end align-start">
                                    <div class="mx-10 mb-10">
                                    <div class="mb-5">
                                        <a href="#">
                                        <v-chip class="ma-2" color="accent" label text-color="white">
                                            <v-icon left> mdi-label </v-icon>
                                            Multiplayer
                                        </v-chip>
                                        </a>
                                    </div>
                                    <div class="mb-5">
                                        <h1 class="white--text d-none d-md-block">GTA 6 Terancam Delay ke 2026?</h1>
                                        <h2 class="white--text d-block d-md-none">GTA 6 Terancam Delay ke 2026?</h2>
                                    </div>
                                    <div class="white--text">
                                        <span><v-icon small class="mb-2"> mdi-account-circle </v-icon></span>
                                        <span>Farid Aleksander</span>
                                        <span>|</span>
                                        <span>6 September 2023</span>
                                    </div>
                                    </div>
                                </v-overlay>
                            </div>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
                <v-container>
                    <v-row style="font-family: Arial, Helvetica, sans-serif">
                        <v-col cols="12" md="8">
                            <div id="article-main">
                                <div class="pb-5">
                                    <p class="my-5 text-justify">
                                        Mattis enim ut tellus elementum sagittis vitae et. Enim ut tellus elementum sagittis vitae et leo duis ut. Quis vel eros donec. Faucibus nisl tincidunt eget nullam. Quis commodo odio aenean sed adipiscing diam doneg.
                                            {{ title }}
                                    </p>
                                </div>
                                <div>
                                    <p class="text-justify black--text">
                                        Muncul rumor yang menyebutkan jika perilisan Grand Theft Auto VI alias GTA 6 tidak akan terjadi pada 2025 dan terancam delay ke tahun 2026. Pada Desember 2023 kemarin pihak pengembang Rockstar akhirnya resmi mengumumkan proyek game GTA 6. Rumor mengenai kemunculan sekuel dari GTA V ini sudah muncul sejak lama sekali. Dan para fans nampak tidak menyerah dan masih terus menantikan kemunculan gamenya hingga pemumuman resmi Desember kemarin.
                                        <br>
                                        <br>
                                        Melalui pengumuman tersebut Rockstar memberikan banyak informasi mengenai karakter baru yang akan ditampilkan, alur cerita, dan sebagainya. Dalam trailer pengumuman gamenya, pihak Rockstar mengumumkan jika game GTA 6 dijadwalkan rilis pada 2025 mendatang. Namun, kabar terbaru menyebutkan jika ada kemungkinan pihak Rockstar akan melakukan delay terhadap perilisan GTA 6 menjadi tahun 2026. Masalah internal di pihak Rockstar jadi penyebab dari kemungkinan tersebut.
                                        <br>
                                        <br>
                                        Menurut laporan dari Kotaku, proses produksi untuk game GTA 6 saat ini dalam kondisi “tertinggal.” Karena perkembangan gamenya yang kurang maksimal tersebut membuat para petinggi dari Rockstar khawatir jika GTA 6 tidak akan rilis sesuai jadwal. Dalam laporan ini juga dijelaskan jika permasalahan internal di perusahaan Rockstar menjadi penyebab kemungkinan delay GTA 6 jadi 2026. Dilansir dari situs Bloomberg, pada Februari kemarin pihak Rockstar sudah memberikan mandat bagi para pegawainya untuk kembali bekerja secara penuh di kantor.
                                        <br>
                                        <br>
                                        Sebelumnya, Rockstar menghadirkan kebijakan bagi para pekerjanya untuk bekerja di kantor selama tiga hari dan dua hari di rumah. Namun, setelah melihat perkembangan game yang berjalan lambat, banyaknya data rahasia yang bocor, serta permasalahan lainnya, membuat para petinggi Rockstar memutuskan untuk meminta para karyawan kembali bekerja di kantor secara penuh. Meskipun begitu, para pekerja Rockstar sendiri nampaknya menolak hal tersebut.
                                        <br>
                                    </p>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-container>
                                    <div justify="left">
                                        <div class="text-left mt-0 mb-10">
                                            <h2 class="font-weight-medium">Berita Terbaru</h2>
                                            <v-divider style="border-width: 2px"></v-divider>
                                        </div>
                                    </div>
                                <div class="mt-5 scrollable-container">
                                    <div class="scrollable-content">
                                        <v-row v-for="n in 3" :key="n" class="mt-13 px-5" justify="center" style="max-width: min-content;display: contents; flex-wrap: wrap;">
                                            <v-card elevation="1" class="blog-card overflow-hidden mb-5" style="flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
                                            <div class="position-relative mb-5">
                                                <a href="#">
                                                <v-img
                                                    :src="require('@/assets/images/blog/img1.jpg')"
                                                    alt="blog"
                                                    class="blog-img"
                                                />
                                                </a>
                                                <div class="date-badge bg-info-grediant">
                                                Lorem
                                                </div>
                                            </div>
                                            <div class="px-5 pb-5">
                                                <a
                                                href="#"
                                                class="
                                                    blog-title
                                                    text-decoration-none
                                                "
                                                style="
                                                    overflow: hidden;
                                                    display: -webkit-box;
                                                    line-clamp:4;
                                                    -webkit-line-clamp: 4;
                                                    -webkit-box-orient: vertical;
                                                "
                                                >
                                                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deserunt rerum rem.</h3></a
                                                >
                                                <p class="my-5 text-justify d-none d-lg-block font-14">
                                                    Sebuah deskripsi singkat tentang game yang akan datang. Sebuah deskripsi singkat tentang game yang akan datang. <a
                                                        href="#"
                                                        class="
                                                        text-themecolor
                                                        linking
                                                        text-decoration-none
                                                        d-flex
                                                        align-center
                                                        "
                                                    >
                                                        Baca Selengkapnya <i class="mdi mdi-arrow-right"></i>
                                                    </a>
                                                    </p>
                                            </div>
                                            <v-card-actions class="font-14 px-5 py-5 mt-15">
                                                <div class="grey--text pb-5"
                                                style="
                                                    position: absolute;
                                                    bottom: 0;
                                                "
                                                >
                                                <span><v-icon small class="mb-1"> mdi-account-circle </v-icon></span>
                                                <span>Farid Aleksander</span>
                                                <span>|</span>
                                                <span>6 September 2023</span>
                                                </div>
                                            </v-card-actions>
                                            </v-card>
                                        </v-row>
                                    </div>
                                </div>
                                <!----------------------------------------------->
                            </v-container>
                        </v-col>
                    </v-row>  
                    <!-- -----------------------------------------------
                        Start Blog Text
                    ----------------------------------------------- -->

                    <!----------------------------------------------->
                    <v-row justify="center">
                    <v-col cols="12" sm="10" md="9" lg="7">
                        <div class="text-center">
                        <h2 class="section-title font-weight-medium">Tags</h2>
                        </div>
                    </v-col>
                    </v-row>
                    <div class="mt-13">
                        <div class="text-center">
                            <v-chip v-for="n in 10" :key="n" class="ma-2" color="accent">#Lorem</v-chip>
                        </div>
                    </div>
            </v-container>
        </div>
        </div>
    </v-main>
  </template>

  <style>
    .scrollable-content {
        height: 100%;
        overflow-y: scroll;
        box-sizing: content-box;
        flex: 1;
    }
    .scrollable-content::-webkit-scrollbar {
        width: 4px;
        position: absolute;
    }
    .scrollable-content::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 10px;
    }

    .scrollable-content::-webkit-scrollbar-track {
        background: transparent;
    }

    .scrollable-container {
        position: relative;
        overflow: hidden;
        height: 100%;
    }

    .scrollable-container::before,
    .scrollable-container::after {
        display: block;
        content: '';
        position: absolute;
        height: 20px; /* Adjust for fade intensity */
        width: 100%;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));
        z-index: 1;
    }

    .scrollable-container::before {
        top: 0;
    }

    .scrollable-container::after {
        bottom: 0;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));
    }

    @media only screen and (max-width: 767px) {
        .scrollable-content {
            max-height: 1000px;
        }
    }
  </style>

<script>
export default {
    data() {
        return {
        title: this.$route.params.slug // set slug as the title
        };
    },
    head() {
        return {
            title: this.$route.params.slug,
            meta: [
                {
                hid: "description",
                name: "MainGame Blog",
                content: "Web berita game Indonesia terupdate",
                },
            ],
        };
    },
    watch: {
        '$route.params.slug': function(newSlug) {
        this.title = newSlug // Update title if the slug changes
        }
    },
    mounted() {
        // Function to adjust the max-height of scrollable-content dynamically
        const adjustMaxHeight = () => {
            const articleContent = this.$el.querySelector('div#article-main');
            const scrollableContent = this.$el.querySelector('.scrollable-container');

            console.log(articleContent.offsetHeight);
            console.log(scrollableContent.offsetHeight);
            if (scrollableContent.offsetHeight+60 > articleContent.offsetHeight) {
                const newHeght = articleContent.offsetHeight - 60;
                scrollableContent.style.height = `${newHeght}px`;
                console.log(scrollableContent.offsetHeight);
            }
        };

        // Function to handle resize event only for desktop
        const handleResize = () => {
            adjustMaxHeight();
        };

        // Call the function on mount and on resize if on desktop
        handleResize();
        window.addEventListener("resize", handleResize);
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.handleResize);
    }
};
</script>
