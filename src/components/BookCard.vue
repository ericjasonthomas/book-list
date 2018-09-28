<template>
  <div class="book-card">
    <a v-bind:href="book.purchaseLink">
      <div class="book-img">
        <img :src="book.imageUrl" :alt="bookImgAlt"/>
      </div>
      <div class="book-info">
        <h3>{{ book.title }}</h3>
        <p>Publish in {{ book.PublishDate }}</p>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  name: 'BookCard',
  props: {
    book: Object,
  },
  computed: {
    bookImgAlt() {
      return `${this.book.title} cover`;
    },
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.book-card {
  border: 1px solid #ccc;
  margin:0 auto;
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  a {
    text-decoration: none;
    width:100%;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
}
h3 {
  margin: 40px 0 0;
  color: #000;
}
.book-img {
  width: 218px;
}
.book-info{
  border:1px solid #ccc;
  flex-basis: auto;
  text-align: left;
}
a {
//  color: #42b983;
}
.book-card a:hover{
//  background:#ccc;
}
</style>
