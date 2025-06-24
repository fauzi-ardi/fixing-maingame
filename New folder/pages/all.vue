<template>
  <v-main>
    <All />
  </v-main>
</template>

<script>
export default {
  components: {
    All: () => import("@/components/maingame/blog/AllComponent"),
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
