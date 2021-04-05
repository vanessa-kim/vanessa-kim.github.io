<template>
  <div>
    <div class="insta-feed-group" v-if="instaFeed">
      <div v-for="(post, index) in instaFeed" :key="post.id" class="post-box">
        <img :src="post.media_url" :alt="`illust-${index}`" width="100px" height="100px">
        <span>{{ timeFormatter(post.timestamp) }}</span>
        <pre>{{ post.caption }}</pre>
      </div>
    </div>
    <div v-else>
      No data
    </div>
  </div>
</template>

<script>
import client from '@/api/index';
import moment from 'moment';

export default {
  name: 'Art',
  data: () => ({
    instaFeed: null,
  }),
  mounted() {
    this.getInstaFeed();
  },
  methods: {
    timeFormatter(time) {
      return moment(time).format("YYYY-MM-DD HH:mm");
    },
    initFeed() {
      this.instaFeed = [];
    },
    async getInstaFeed() {
      this.initFeed();
      try {
        const url = 'https://graph.instagram.com/me/media';
        const fieldsParams = 'id,media_type,caption,media_url,username,timestamp';
        const access_token = 'IGQVJYQW14VTJQSmZAKZAXdQeG9PNUp5bjBoNW10M3NnbTBEZAWNiMnBiZADNYU01JUl9mbzlPM3paMElKUDFQU0p4VVR5NE40WWY5WnZAxQk5TZAW1fQXFDanEtYWs3TTBtRHNETnBkTDZAkaXVndTBfMVlkRAZDZD';
        const query = `${url}?fields=${fieldsParams}&access_token=${access_token}`;
        const res = await client.get(query);

        this.instaFeed = res.data.data.filter((item, index) => {
          if(index < 12) return item;
        });
      } catch(e) {
        this.initFeed();
        console.error(e);
      }
    },
  },
}
</script>

<style lang="scss">
.insta-feed-group {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  grid-auto-rows: minmax(240px, auto);
}

.post-box {
  img {
    display: block;
    border-radius: 50px;
    overflow: hidden;
    margin: 0 auto 10px;
  }
  span {
    display: block;
    font-size: 12px;
    line-height: 20px;
  }
  pre {
    height: 100px;
    white-space: pre-wrap;
    padding-top: 10px;
  }
}
</style>