<template>
  <div>
    Art
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
        const url = 'https://graph.instagram.com';
        const id = '506331047168263';
        const fieldsParams = 'id';
        const access_token = 'de42f963756c8ac738a5cd79933014c5';
        const query = `${url}/${id}?fields=${fieldsParams}&access_token=${access_token}`;
        const res = await client.get(query);

        console.log('res',res);

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