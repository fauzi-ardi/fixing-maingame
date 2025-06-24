<template>
    <div>
      <b-card to="detail">
        <b-img
            aspect-ratio="16/9"
            fluid
            src="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg"
        >
          <b-card-text class="fill-height d-flex align-end">
            <b-row class="flex-column">
              <b-col>
                <b-button variant="primary" to="category">{{ posts1.data && posts1.data.length > 0 ? posts1.data[0].category.name.toUpperCase() : 'UNDEFINED' }}</b-button>
              </b-col>
              <b-col cols="12" lg="8" md="10" xl="7">
                <h2 class="text-h3 py-3" style="line-height: 1.2">
                  {{ posts1.data && posts1.data.length > 0 ? posts1.data[0].title : 'UNDEFINED' }}
                </h2>
              </b-col>
              <b-col class="d-flex align-center">
                <!-- BootstrapVue doesn't have a direct equivalent to v-avatar, but you can use a combination of other components to achieve a similar effect -->
                <div class="text-h6 pl-2">
                  {{ posts1.data && posts1.data.length > 0 ? posts1.data[0].author.name : 'UNDEFINED' }} · {{ posts1.data && posts1.data.length > 0 ? formatDate(posts1.data[0].published_at) : 'UNDEFINED' }}
                </div>
              </b-col>
            </b-row>
          </b-card-text>
        </b-img>
      </b-card>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      posts1: {},
      posts2: {},
      posts3: {},
    };
  },
  async created() {
    try {
      const posts = await this.$store.dispatch('basic/GetPosts', { limit: 6, commitToState: false });
      this.posts1 = posts.data;
      const posts2 = await this.$store.dispatch('basic/GetPosts', { limit: 3, commitToState: false });
      this.posts2 = posts2.data;
      const posts3 = await this.$store.dispatch('basic/GetPosts', { limit: 10, commitToState: false });
      this.posts3 = posts3.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  },
  computed: {
    ...mapGetters({Posts: "StatePosts"}),
  },
  mounted() {
    this.increment();
  },
  methods: {
    ...mapActions(["GetPosts"]),
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.basic.count)
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('id-ID', options);
    }
  }
};
</script>
