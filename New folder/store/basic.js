// A duration for how long the cache is valid, e.g., 1 hour in milliseconds.
const CACHE_DURATION = 60 * 60 * 1000; 

export const state = () => ({
  posts: null,
  postsTimestamp: null,
  categories: null,
  categoriesTimestamp: null,
  tags: null,
  tagsTimestamp: null,
  count: 0, // Keeping the count property as requested
});

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
    state.postsTimestamp = new Date().getTime(); // Set timestamp on data commit
  },
  setCategories(state, categories) {
    state.categories = categories;
    state.categoriesTimestamp = new Date().getTime(); // Set timestamp on data commit
  },
  setTags(state, tags) {
    state.tags = tags;
    state.tagsTimestamp = new Date().getTime(); // Set timestamp on data commit
  },
  increment(state) {
    state.count++;
  },
  // The original mutations for StateCategories and StateTags are now handled by the above
};

export const actions = {
  async GetPosts({ commit }, { limit = 10, commitToState = true }) {
    // FIXED: Changed 'let' to 'const'
    const response = await this.$axios.$get(`articles?limit=${limit}`);
    if (commitToState) {
      commit("setPosts", response.data);
    } else {
      return response.data;
    }
  },

  async GetCategories({ commit }, { commitToState = true }) {
    // FIXED: Changed 'let' to 'const'
    const response = await this.$axios.$get("categories/all");
    if (commitToState) {
      commit("setCategories", response.data);
    } else {
      return response.data;
    }
  },

  async GetTags({ commit }, { commitToState = true }) {
    // FIXED: Changed 'let' to 'const'
    const response = await this.$axios.$get("tags");
    if (commitToState) {
      commit("setTags", response.data);
    } else {
      return response.data;
    }
  },

  async GetPostBySlug({ commit }, { slug }) {
    try {
      // Makes a GET request to the specific endpoint for the slug.
      const response = await this.$axios.$get(`articles/${slug}`);
      // The API response for a single article is returned directly.
      return response.data;
    } catch (error) {
      console.error(`Error fetching post with slug "${slug}":`, error);
      return null;
    }
  }
};

export const getters = {
  StatePosts: (state) => state.posts,
  StateCategories: (state) => state.categories,
  StateTags: (state) => state.tags,
  StateCount: (state) => state.count,

  // Getter to check if posts cache is expired
  isPostsCacheExpired: (state) => {
    if (!state.postsTimestamp) return true; // If no timestamp, it's "expired"
    const now = new Date().getTime();
    return (now - state.postsTimestamp) > CACHE_DURATION;
  },

  // Getter to check if categories cache is expired
  isCategoriesCacheExpired: (state) => {
    if (!state.categoriesTimestamp) return true;
    const now = new Date().getTime();
    return (now - state.categoriesTimestamp) > CACHE_DURATION;
  },

  // Getter to check if tags cache is expired
  isTagsCacheExpired: (state) => {
    if (!state.tagsTimestamp) return true;
    const now = new Date().getTime();
    return (now - state.tagsTimestamp) > CACHE_DURATION;
  },
};