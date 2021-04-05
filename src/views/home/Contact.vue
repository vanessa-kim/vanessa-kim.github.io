<template>
  <footer>
    <!-- <a :href="require('@/assets/download/privacy_policy.html')"  download="test.html">개인정보 처리 방침</a> -->
  </footer>
</template>

<script>

export default {
  name: 'Contact',
  data: () => ({
  }),
  methods: {
    test() {
      // download test code
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