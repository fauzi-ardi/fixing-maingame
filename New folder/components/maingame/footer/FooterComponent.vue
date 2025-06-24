<template>
    <!-- -----------------------------------------------
          Start Footer
    ----------------------------------------------- -->
    <v-footer class="footer">
      <v-container>
        <v-row class="py-0 py-md-15 text-justify">
          <!-- -----------------------------------------------
          First Column
        ----------------------------------------------- -->
          <v-col cols="12" sm="12" md="12" lg="3" class="px-xs-0">
            <h3>MAIN GAME - Blog</h3>
            <p class="mt-10">Memberikan kumpulan berita, pengetahuan, dan informasi terbaru seputar game lokal maupun internasional.</p>
          </v-col>
          <!-- -----------------------------------------------
          Second Column
        ----------------------------------------------- -->
          <v-col cols="12" sm="12" md="12" lg="3" class="px-xs-0">
            <h4 class="font-weight-regular font-18">Blog</h4>
            <div class="mt-10 mb-0">
                <div class="d-flex align-center">
                  <v-icon small class="mr-2">mdi-chevron-right</v-icon>
                  <a href="/" class="dark-link">Home</a>
                </div>
                <div class="d-flex align-center">
                  <v-icon small class="mr-2">mdi-chevron-right</v-icon>
                  <a href="/" class="dark-link">Blog</a>
                </div>
            </div>
          </v-col>
          <!-- -----------------------------------------------
          Third Column
        ----------------------------------------------- -->
          <v-col cols="12" sm="12" md="12" lg="3" class="px-xs-0">
            <h4 class="font-weight-regular font-18">Main Game</h4>
            <div class="mt-10 mb-0">
                <div class="d-flex align-center">
                  <v-icon small class="mr-2">mdi-chevron-right</v-icon>
                  <a href="/" class="dark-link">Blog</a>
                </div>
                <div class="d-flex align-center">
                  <v-icon small class="mr-2">mdi-chevron-right</v-icon>
                  <a href="/" class="dark-link">Forum</a>
                </div>
                <div class="d-flex align-center">
                  <v-icon small class="mr-2">mdi-chevron-right</v-icon>
                  <a href="/" class="dark-link">Store</a>
                </div>
            </div>
          </v-col>
          <!-- -----------------------------------------------
          Fourth Column
        ----------------------------------------------- -->
          <v-col cols="12" sm="12" md="12" lg="3" class="px-xs-0">
            <h4 class="font-weight-regular font-18">Social</h4>
  
            <div class="social-icons mt-10">
              <a href="#">
                <i class="mdi mdi-facebook"></i>
              </a>
              <a href="#">
                <i class="mdi mdi-twitter"></i>
              </a>
              <a href="#">
                <i class="mdi mdi-google-plus"></i>
              </a>
              <a href="#">
                <i class="mdi mdi-youtube"></i>
              </a>
              <a href="#">
                <i class="mdi mdi-instagram"></i>
              </a>
            </div>
          </v-col>
        </v-row>
        <div class="footer-bottom-bar font-14">
          <div class="d-block d-md-flex align-center">
            <p>
              Copyright © <a href="/" class="link">Main Game</a> 2024. All rights reserved.
              
            </p>
            <div class="ml-auto">
              <div class="d-flex align-center">
                <a href="/" class="link px-4">Terms of Use</a>
                <a href="/" class="link px-4">Legal Disclaimer</a>
                <a href="/" class="link px-4">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </v-container>
    </v-footer>
    <!-- -----------------------------------------------
          End Footer
    ----------------------------------------------- -->
  </template>
  
  <script>
  export default {
    name: "FooterComponent",
    data() {
      return {
        data: [],
      };
    },
    components: {},
  };
  </script>
   