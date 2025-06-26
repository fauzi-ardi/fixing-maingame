<template>
    <v-main>
        <div>
            <div v-if="article" class="blog-component">
                    <v-container class="py-0 ma-0" style="max-width:none">
                        <v-row justify="center">
                            <v-col cols="12" sm="12" class="px-0">
                                <v-card class="overflow-hidden rounded-0 mb-15" elevation="5">
                                <div class="position-relative">
                                    <v-img
                                        :src="article.cover"
                                        :alt="article.title"
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
                                            <v-chip :to="`/category/${article.category.name}`" class="ma-2" color="accent" label text-color="white">
                                                <v-icon left> mdi-label </v-icon>
                                                {{ article.category.name }}
                                            </v-chip>
                                            </a>
                                        </div>
                                        <div class="mb-5">
                                            <h1 class="white--text d-none d-md-block">{{ article.title }}</h1>
                                            <h2 class="white--text d-block d-md-none">{{ article.title }}</h2>
                                        </div>
                                        <div class="white--text">
                                            <span><v-icon small class="mb-2"> mdi-account-circle </v-icon></span>
                                            <span>{{ article.author.name }}</span>
                                            <span>|</span>
                                            <span>{{ formatDate(article.published_at) }}</span>
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
                                            {{ article.excerpt }}
                                        </p>
                                    </div>
                                    <div>
                                        <p class="text-justify black--text" v-html="article.content">
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
                                            <v-row v-for="latestPost in latestPosts" :key="latestPost.id" class="mt-13 px-5" justify="center" style="max-width: min-content;display: contents; flex-wrap: wrap;">
                                                <v-card elevation="1" class="blog-card overflow-hidden mb-5" style="flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
                                                <div class="position-relative mb-5">
                                                    <v-img
                                                        :src="latestPost.cover"
                                                        :alt="latestPost.title"
                                                        class="blog-img"
                                                    />
                                                    <NuxtLink :to="`/category/${latestPost.category.name}`">
                                                        <div class="date-badge bg-info-grediant">
                                                            {{ latestPost.category.name }}
                                                        </div>
                                                    </NuxtLink>
                                                </div>
                                                <div class="px-5 pb-5">
                                                    <NuxtLink
                                                    :to="`/article/${latestPost.slug}`"
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
                                                        <h3>{{ latestPost.title }}</h3>
                                                    </NuxtLink>
                                                    <p class="my-5 text-justify d-none d-lg-block font-14">
                                                        {{ latestPost.excerpt }}
                                                        <NuxtLink
                                                            :to="`/article/${latestPost.slug}`"
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
                                                    <span>{{ latestPost.author.name }}</span>
                                                    <span>|</span>
                                                    <span>{{ formatDate(latestPost.published_at) }}</span>
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
                                <v-chip v-for="tag in article.tags" :key="tag.id" :to="`/article/tag/${tag.name}`" class="ma-2" color="accent">#{{ tag.name }}</v-chip>
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
  name: "ArticlePage",
  key(route) {
    return route.params.slug;
  },
  data() {
    return {
      article: null,
      latestPosts: [],
    };
  },
  watch: {
    // We replace the old 'article' watcher with this much better one.
    // This watches the overall status of the fetch() hook.
    '$fetchState.pending'(isPending) {
      // We want to run our logic when fetching is FINISHED (isPending is false).
      if (isPending === false) {
        // Use nextTick to ensure the DOM has updated with ALL the new data
        // (both the main article and the latest posts sidebar).
        this.$nextTick(() => {
          this.adjustMaxHeight();
        });
      }
    }
  },
  head() {
    if (!this.article) {
      return { title: 'blog - maingame.my.id' };
    }
    return {
      title: this.article.title,
      meta: [
        { hid: 'description', name: 'description', content: this.article.excerpt },
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        { hid: 'og:description', property: 'og:description', content: this.article.excerpt },
        { hid: 'og:image', property: 'og:image', content: this.article.cover },
      ],
    };
  },
  async fetch() {
    const slug = this.$route.params.slug;
    const [fetchedArticle, postsState] = await Promise.all([
        this.$store.dispatch('basic/GetPostBySlug', { slug }),
        this.$store.getters['basic/isPostsCacheExpired'] 
            ? this.$store.dispatch('basic/GetPosts', { limit: 5, commitToState: true }) 
            : Promise.resolve(this.$store.getters['basic/StatePosts'])
    ]);

    if (fetchedArticle) {
      this.article = fetchedArticle;
    } else {
      console.error('Article not found for slug:', slug);
    }
    
    const allPosts = postsState || this.$store.getters['basic/StatePosts'];
    if (allPosts && allPosts.data) {
        this.latestPosts = allPosts.data.filter(p => p.slug !== slug).slice(0, 4);
    }
  },
  fetchOnServer: true,
  methods: {
    formatDate(dateString) {
      if (!dateString) return '';
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('id-ID', options);
    },
    adjustMaxHeight() {
      const articleContent = this.$el.querySelector('div#article-main');
      const scrollableContainer = this.$el.querySelector('.scrollable-container');
      if (articleContent && scrollableContainer) {
          if (scrollableContainer.offsetHeight + 60 > articleContent.offsetHeight) {
              const newHeight = articleContent.offsetHeight - 60;
              scrollableContainer.style.height = `${newHeight}px`;
          }
      }
    },
    // We create a separate handler for the resize event listener.
    handleResize() {
        this.adjustMaxHeight();
    }
  },
  // Your mounted and beforeDestroy hooks are preserved exactly as you wrote them.
  mounted() {
    // The mounted hook is now only responsible for the browser's resize event.
    // The initial height calculation is handled by the 'watch'er.
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    if (this.handleResize) {
      window.removeEventListener("resize", this.handleResize);
    }
  }
};
</script>
