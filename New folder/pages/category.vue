<template>
  <v-main>
    <Category />
  </v-main>
</template>

<script>
export default {
  components: {
    Category: () => import("@/components/maingame/blog/CategoryComponent"),
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
