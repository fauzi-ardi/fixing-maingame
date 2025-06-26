<template>
  <div>
    <div class="blog-component">
      <v-container v-if="mainArticle">
        <v-row justify="center">
          <v-col cols="12" sm="12">
            <v-card class="overflow-hidden mb-15" elevation="5">
              <div class="position-relative">
                <NuxtLink :to="`/article/${mainArticle.slug}`">
                  <v-img
                    :src="mainArticle.cover"
                    :alt="mainArticle.title"
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
                        <NuxtLink :to="`/category/${mainArticle.category.name}`">
                          <v-chip class="ma-2" color="accent" label text-color="white">
                            <v-icon left> mdi-label </v-icon>
                            {{ mainArticle.category.name }}
                          </v-chip>
                        </NuxtLink>
                      </div>
                      <div class="mb-5">
                        <h1 class="white--text d-none d-md-block">{{ mainArticle.title }}</h1>
                        <h2 class="white--text d-block d-md-none">{{ mainArticle.title }}</h2>
                      </div>
                      <div class="white--text">
                        <span><v-icon small class="mb-2"> mdi-account-circle </v-icon></span>
                        <span>{{ mainArticle.author.name }}</span>
                        <span>|</span>
                        <span>{{ formatDate(mainArticle.published_at) }}</span>
                      </div>
                    </div>
                  </v-overlay>
                </NuxtLink>
              </div>
            </v-card>
          </v-col>
        </v-row>  
        <!-- -----------------------------------------------
            Start Blog Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">Direkomendasikan Untukmu</h2>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Blog Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Blog
        ----------------------------------------------- -->
        <v-row class="mt-13 px-5" justify="center" style="display: flex; flex-wrap: wrap;">
          <v-col v-for="post in recommendedPosts" :key="post.id" cols="6" lg="4" class="px-3" style="display: flex;">
            <v-card elevation="1" class="blog-card overflow-hidden mb-5" style="flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
              <div class="position-relative mb-5">
                  <v-img
                    :src="post.cover"
                    :alt="post.title"
                    class="blog-img"
                  />
                <NuxtLink :to="`/category/${post.category.name}`">
                  <div class="date-badge bg-info-grediant">
                    {{ post.category.name }}
                  </div>
                </NuxtLink>
              </div>
              <div class="px-5 pb-5">
                <NuxtLink
                  :to="`/article/${post.slug}`"
                  class="
                    blog-title
                    text-decoration-none
                  "
                  style="
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 4;
                    -webkit-box-orient: vertical;
                  "
                  >
                  <h3>{{ post.title }}</h3></NuxtLink>
                <p class="my-5 text-justify d-none d-lg-block font-14">
                  {{ post.excerpt }}
                  <NuxtLink
                    :to="`/article/${post.slug}`"
                    class="
                      text-themecolor
                      linking
                      text-decoration-none
                      d-flex
                      align-center
                    "
                  >
                    Baca Selengkapnya <i class="mdi mdi-arrow-right"></i>
                  </NuxtLink>
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
                  <span>{{ post.author.name }}</span>
                  <span>|</span>
                  <span>{{ formatDate(post.published_at) }}</span>
                </div>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <!-- -----------------------------------------------
            End Blog
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">Berita Terbaru</h2>
            </div>
          </v-col>
        </v-row>
        <div class="mt-13">
          <v-row v-for="post in latestPosts" :key="post.id" style="max-width: min-content;display: contents;">
            <v-card elevation="1" class="blog-card overflow-hidden mb-15" outlined>
              <v-row>
                <v-col cols="4" class="pb-0 pr-0">
                  <div class="position-relative">
                      <v-img
                        :src="post.cover"
                        :alt="post.title"
                        height="100%"
                        max-height="240"
                        :aspect-ratio="0.45"
                      />
                    <NuxtLink :to="`/category/${post.category.name}`">
                      <div class="date-badge bg-info-grediant">
                        {{ post.category.name }}
                      </div>
                    </NuxtLink>
                  </div>
                </v-col>
                <v-col class="pt-15">
                  <div class="px-0 pr-5 py-lg-5 pb-15">
                    <NuxtLink
                      :to="`/article/${post.slug}`"
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
                      <h3>{{ post.title }}</h3></NuxtLink
                    >
                    <p class="mt-5 mb-5 text-justify"
                    style="
                      overflow: hidden;
                      display: -webkit-box;
                      -webkit-line-clamp: 3;
                      -webkit-box-orient: vertical;
                    "
                    >
                      {{ post.excerpt }}
                    </p>
                    <NuxtLink
                      :to="`/article/${post.slug}`"
                      class="
                        text-themecolor
                        linking
                        text-decoration-none
                        d-flex
                        align-center
                      "
                    >
                      Baca Selengkapnya <i class="mdi mdi-arrow-right"></i>
                    </NuxtLink>
                  </div>
                  <v-card-actions class="font-14 px-0 py-5 mt-5">
                      <div class="grey--text pb-5"
                      style="
                        position: absolute;
                        bottom: 0;
                      "
                      >
                        <span><v-icon small class="mb-1"> mdi-account-circle </v-icon></span>
                        <span>{{ post.author.name }}</span>
                        <span>|</span>
                        <span>{{ formatDate(post.published_at) }}</span>
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
            <v-list-item v-for="cat in categories" :key="cat.id">
              <v-list-item-content>
                <v-list-item-title><v-icon small>mdi-label </v-icon> {{ cat.name }}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-chip :to="`/category/${cat.name}`">{{ cat.article_count }}</v-chip>
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
            <v-chip :to="`/tag/${tag.name}`" v-for="tag in tags" :key="tag.id" class="ma-2" color="accent">
              #{{ tag.name }}
            </v-chip>
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
      mainArticle: null,
      recommendedPosts: [],
      latestPosts: [],
      categories: [],
      tags: [],
    };
  },
  async fetch() {
    // This fetch hook implements the exact "session" and caching logic you described.
    
    // --- Handle Posts ---
    if (this.$store.getters['basic/isPostsCacheExpired']) {
      // If cache is expired or empty, fetch new data
      await this.$store.dispatch('basic/GetPosts', { limit: 20, commitToState: true });
    }
    const posts = this.$store.getters['basic/StatePosts'];
    if (posts && posts.data.length > 0) {
      this.mainArticle = posts.data[0];
      this.recommendedPosts = posts.data.slice(1, 7);
      this.latestPosts = posts.data;

      console.log({
        mainArticle: this.mainArticle,
        recommendedPosts: this.recommendedPosts,
        latestPosts: this.latestPosts,
      });
    }

    // --- Handle Categories ---
    if (this.$store.getters['basic/isCategoriesCacheExpired']) {
      await this.$store.dispatch('basic/GetCategories', { commitToState: true });
    }
    this.categories = this.$store.getters['basic/StateCategories'];

    // --- Handle Tags ---
    if (this.$store.getters['basic/isTagsCacheExpired']) {
      await this.$store.dispatch('basic/GetTags', { commitToState: true });
    }
    this.tags = this.$store.getters['basic/StateTags'];
  },
  // This ensures the logic runs on the server during `npm run generate`
  fetchOnServer: true,
  methods: {
    formatDate(dateString) {
      if (!dateString) return '';
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('id-ID', options);
    },
  },
};
</script>