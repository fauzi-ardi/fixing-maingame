export const state = () => ({
  posts: null,
  count: 0,
  categories: null,
  tags: null,
});

//here

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },
  increment(state) {
    state.count++;
  },
  StateCategories(state, categories) {
    state.categories = categories;
  },
  StateTags(state, tags) {
    state.tags = tags;
  },
};

export const actions = {
  async CreatePost({ dispatch }, post) {
      await axios.post("post", post);
      return await dispatch("GetPosts");
  },

  async GetPosts({ commit }, { limit = 10, commitToState = true }) {
    let response = await this.$axios.$get(`articles?limit=${limit}`);
    if (commitToState) {
      commit("setPosts", response.data);
    } else {
      return response.data;
    }
  },

  async GetCategories({ commit }, { commitToState = true }) {
    let response = await this.$axios.$get("categories/all");
    if (commitToState) {
      commit("setCategories", response.data);
    } else {
      return response.data;
    }
  },

  async GetTags({ commit }, { commitToState = true }) {
    let response = await this.$axios.$get("tags");
    if (commitToState) {
      commit("setTags", response.data);
    } else {
      return response.data;
    }
  }
};

export const getters = {
  StatePosts: (state) => state.posts,
  StateCount: (state) => state.count,
  StateCategories: (state) => state.categories,
  StateTags: (state) => state.tags,
};


