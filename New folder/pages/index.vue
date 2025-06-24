<template>
  <v-main>
    <Blog />
  </v-main>
</template>

<script>
export default {
  components: {
    Blog: () => import("@/components/maingame/blog/BlogComponent"),
  },
  data() {
    return {};
  },
  head() {
    return {
      title: "BLOG",
      meta: [
        {
          hid: "description",
          name: "MainGame Blog",
          content: "Web berita game Indonesia terupdate",
        },
      ],
    };
  },
};
</script>
