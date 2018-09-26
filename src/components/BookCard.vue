<template>
  <div class="BookCard">
    <!-- <h1>{{ msg }}</h1> -->
      <p>{{ book.title }}</p>
      <img v-bind:src="book.imageUrl"/>
      <!-- <img src={{ book.imageUrl }}/> -->
      <!-- <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>. -->
  </div>
</template>

<script>
export default {
  name: 'BookCard',
  props: {
   // msg: String,
   book: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
