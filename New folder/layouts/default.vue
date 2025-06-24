<template>
  <v-app light>
    <!--v-if="$route.name!=='login'"-->
    <HeaderC />
    <v-main>
      <nuxt />
    </v-main>
    <FooterC />
  </v-app>
</template>

<script>
export default {
  head() {
    return {
      title: "NuxtJs UI kit | Free UI kit built with Vuetify",
      meta: [
        {
          hid: "description",
          name: "NuxtJs UI kit",
          content: "NuxtJs UI kit is the best way"
        }
      ]
    };
  },
  components: {
    HeaderC: () => import("@/components/maingame/header/HeaderComponent"),
    FooterC: () => import("@/components/maingame/footer/FooterComponent"),
  },
  methods: {}
};
</script>

<style></style>
