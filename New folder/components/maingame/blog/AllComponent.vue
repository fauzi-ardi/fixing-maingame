<template>
  <div>
    <div class="blog-component">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">Berita Terbaru</h2>
            </div>
          </v-col>
        </v-row>
        <div class="mt-13">
          <v-row v-for="n in 3" :key="n" style="max-width: min-content;display: contents;">
            <v-card elevation="1" class="blog-card overflow-hidden mb-15" outlined>
              <v-row>
                <v-col cols="4" class="pb-0 pr-0">
                  <div class="position-relative">
                    <a href="#">
                      <v-img
                        :src="require('@/assets/images/blog/img1.jpg')"
                        alt="blog"
                        height="100%"
                        max-height="240"
                        :aspect-ratio="0.45"
                      />
                    </a>
                    <div class="date-badge bg-info-grediant">
                      FPS
                    </div>
                  </div>
                </v-col>
                <v-col class="pt-15">
                  <div class="px-0 pr-5 py-lg-5 pb-15">
                    <a
                      href="#"
                      class="
                        blog-title
                        text-decoration-none
                      "
                      style="
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                      "
                      >
                      <h3>Learn from small things to create something bigger.</h3></a
                    >
                    <p class="mt-5 mb-5 text-justify"
                    style="
                      overflow: hidden;
                      display: -webkit-box;
                      -webkit-line-clamp: 3;
                      -webkit-box-orient: vertical;
                    "
                    >
                      Sebuah deskripsi singkat tentang game yang akan datang. Sebuah deskripsi singkat tentang game yang akan datang.
                    </p>
                    <a
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
                  </div>
                  <v-card-actions class="font-14 px-0 py-5 mt-5">
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
                </v-col>
              </v-row>
            </v-card>
          </v-row>
        </div>
        <!----------------------------------------------->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">List Kategori</h2>
            </div>
          </v-col>
        </v-row>
        <div class="mt-13">
          <v-list>
            <v-list-item v-for="(category, index) in categories" :key="index">
              <v-list-item-content>
                <v-list-item-title><v-icon small>mdi-label </v-icon> {{ category.name }}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-chip>{{ category.postsCount }}</v-chip>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </div>
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
</template>
<script>
export default {
  name: "BlogComponent",
  data() {
    return {
      categories: [
        { name: 'Technology', postsCount: 27 },
        { name: 'Design', postsCount: 14 },
        { name: 'Culture', postsCount: 19 },
        { name: 'Business', postsCount: 22 },
        { name: 'Politics', postsCount: 10 },
      ],
    };
  },
  methods: {},
};
</script>
