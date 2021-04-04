<template>
  <footer>
    <!-- <a :href="require('@/assets/download/privacy_policy.html')"  download="test.html">>개인정보 처리 방침</a> -->
    <!-- {{ insta }} -->
  </footer>
</template>

<script>
import client from '@/api';

export default {
  name: 'Contact',
  data: () => ({
  }),
  computed: {
    privacyPolicyDownladURL() {
      return `@/assets/html/privacy_policy.html`;
    }
  },
  mounted() {
    // this.test();
    this.axios();
  },
  methods: {
    async axios() {
      const accessToken = '959306d5cec1947c189174c019249b8a';
      // const url = 'https://www.instagram.com/yeranii_i/';
      const userId = 'yeraniii_i';
      const query = `https://graph.instagram.com/${userId}?access_token=${accessToken}`;
      const res = await client.get(query);

      // IGQVJYZA2pkZAHVxcUZAsTU4xcDZARX2pjaU1JLXZAYb3dxdHNDVW9Mc0g5S1NmVXRwV0ctbjB6ZAVNsS2x0SHdTYXBsSzM3XzQtWnJRQUNCN3NpenRmeDJFYkJndi16ZAURYVzI4bW1Hc1ZA4ZATEtdjNQc240UwZDZD
      console.log('???', res);
    },
    test() {
      const url = window.URL.createObjectURL(new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"}));
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.setAttribute('download', 'test');
      document.body.appendChild(anchor);
      anchor.click();
    },
  },
}
</script>

<style>

</style>