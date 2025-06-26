<template>
  <div>
    <div class="blog-component">
      <v-container v-if="categories.length > 0 && posts.length > 0">
        <div v-for="category in categories" :key="category.id" class="mt-15">
          <v-row justify="center">
            <v-col cols="12" sm="10" md="9" lg="7">
              <div class="text-center">
                <h2 class="section-title font-weight-medium">Kategori {{ category.name }}</h2>
              </div>
            </v-col>
          </v-row>
          <div class="mt-13">
            <v-row v-for="post in getPostsForCategory(category)" :key="post.id" style="max-width: min-content;display: contents;">
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
                        <NuxtLink :to="`/category/${category.name}`">
                          <div class="date-badge bg-info-grediant">
                            {{ category.name }}
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
                        <h3>{{ post.title }}</h3></NuxtLink>
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
                <v-chip>{{ cat.article_count }}</v-chip>
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
            <v-chip :to="`/tag/${tag.name}`"  v-for="tag in tags" :key="tag.id" class="ma-2" color="accent">#{{ tag.name }}</v-chip>
          </div>
        </div>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "CategoryComponent",
  data() {
    return {
      // These arrays will be populated by our API call.
      posts: [],
      categories: [],
      tags: [],
    };
  },
  async fetch() {
    // --- Step 1: Fetch ALL posts ---
    // We get all posts first, so we have the data to filter for each category.
    // The caching logic prevents unnecessary API calls.
    if (this.$store.getters['basic/isPostsCacheExpired']) {
      await this.$store.dispatch('basic/GetPosts', { limit: 100, commitToState: true });
    }
    const allPosts = this.$store.getters['basic/StatePosts'];
    if (allPosts && allPosts.data) {
      this.posts = allPosts.data;
    }

    // --- Step 2: Fetch ALL categories ---
    // We get all categories to create the main loop and the list at the bottom.
    if (this.$store.getters['basic/isCategoriesCacheExpired']) {
      await this.$store.dispatch('basic/GetCategories', { commitToState: true });
    }
    this.categories = this.$store.getters['basic/StateCategories'];

    // --- Step 3: Fetch ALL tags ---
    // We get all tags for the tag list at the bottom.
    if (this.$store.getters['basic/isTagsCacheExpired']) {
      await this.$store.dispatch('basic/GetTags', { commitToState: true });
    }
    this.tags = this.$store.getters['basic/StateTags'];
  },
  // This is critical for SSG, ensuring the data is fetched during the build process.
  fetchOnServer: true,
  methods: {
    // --- Step 4: Define Methods used in the Template ---

    // This method is called inside the v-for loop for each category.
    // It filters the main 'posts' array and returns only the posts
    // that belong to the specified category.
    getPostsForCategory(category) {
      if (!this.posts || !category) return [];
      return this.posts.filter(post => post.category.id === category.id);
    },

    // This utility method formats the date string for display.
    formatDate(dateString) {
      if (!dateString) return '';
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('id-ID', options);
    },
  },
};
</script>