<template>
  <div>
    <!-- -----------------------------------------------
          Start Header
    ----------------------------------------------- -->
    <v-app-bar
      class="white app-header navbar-light header1"
      dense
      elevate-on-scroll
      fixed
      style="z-index:998;"
    >
      <v-container class="py-0 fill-height px-0">
        <v-app-bar-nav-icon class="d-block d-md-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-spacer class="d-block d-md-none"></v-spacer>
        <div class="logo">
          <NLink to="/" class="text-decoration-none">
            <h2 class="font-weight-black">
              <span class="pr-2"> <v-icon x-large class="black--text mb-2">mdi-controller</v-icon></span>
              <span class="black--text">Main</span>
              <span style="color: #2178ff">Game</span>
            </h2>
          </NLink>
        </div>
        <v-spacer></v-spacer>
        <!-- Desktop view Navigation -->
        <div
          class="navigation d-md-block d-none"
        >
        <ul class="navbar-nav">
          <li class="nav-item" v-for="(item, index) in items" :key="index">
            <n-link class="nav-link" nuxt :to="item.link">{{ item.text }}</n-link>
          </li>
        </ul>
        </div>
        <!-- login-regiter -->
        <v-btn
          class="d-none d-md-flex btn-custom-nm ml-5"
          nuxt
          outlined
          color="primary"
          to="/"
          elevation="0"
        >
          Lainnya
        </v-btn>
      </v-container>
    </v-app-bar>
    <div class="d-block headspace">
    </div>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      style="z-index:999;position: fixed !important;"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="model"
          mandatory
          color="indigo"
        >
          <NuxtLink
            v-for="(item, i) in items"
            :key="i"
            :to="item.link"
            style="text-decoration: none"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </NuxtLink>
          <v-btn
              class="btn-custom-nm my-5"
              nuxt
              outlined
              color="primary"
              to="/"
              elevation="0"
              block
            >
              Lainnya
          </v-btn>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!-- -----------------------------------------------
          End Header
    ----------------------------------------------- -->
  </div>
</template>

<style>
    @media only screen and (max-width: 767px) {
      .logo {
        margin-right: 48px;
      }
    }
</style>

<script>
export default {
  name: "HeaderComponent",

  data: () => ({
      drawer: false,
      group: null,
      isFixed: false,
      items: [
        {
          icon: 'mdi-home',
          text: 'Beranda',
          link: '/'
        },
        {
          icon: 'mdi-newspaper',
          text: 'Semua Berita',
          link: '/all'
        },
        {
          icon: 'mdi-widgets',
          text: 'Kategori',
          link: '/category'
        },
      ],
      model: 0
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
    mounted() {
    this.handleScroll();
  },
  beforeDestroy() {
    this.handleScroll();
  },
  methods: {
    handleScroll(e) {
      const header = document.querySelector('.header1');
      document.querySelector('.headspace').style.height = header.clientHeight + 'px';
    },
  },
};
</script>
