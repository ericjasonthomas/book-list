<template>
  <div class="book-card">
    <a v-bind:href="book.purchaseLink">
      <div class="book-img">
        <img :src="book.imageUrl" :alt="bookImgAlt"/>
      </div>
      <div class="book-info">
        <h3>{{ book.title }}</h3>
        <span class="author-name">By: {{ authorInfo.author }}</span>
        <p>Publish in {{ book.PublishDate }}</p>
      </div>
    </a>
    <span class="underline"></span>
  </div>
</template>
<script>
export default {
  name: 'BookCard',
  props: {
    book: Object,
    authorInfo: Object,
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
@import "../styles/variables.scss";
@import "../styles/linkUnderline.scss";
.book-card {
  //margin:0 auto;
  margin: 0 0 10px 0;
  a {
    color: #999;
    text-decoration: none;
    width:100%;
    display:flex;
    @media only screen and (max-width: 420px) {
      flex-wrap:nowrap;
      flex-direction:column;
    }
    :hover{
      color: $color-med-blue;
      h3 {
        color: $color-med-blue;
      }
    }
    &:hover+.underline {
      transform: scale(1);
    }
  }
  .author-name {
    font-size: .8rem;
  }
}
.book-img {
  width: 218px;
  @media only screen and (max-width: 420px) {
    width:100%;
    text-align: center;
  }
}
.book-info{
  flex-grow: 1;
  flex-basis: auto;
  @media only screen and (max-width: 420px) {
    width:100%;
    text-align: center;
  }
  justify-content: space-around;
  text-align: left;
  h3 {
    color: black;
    font-size: 1.5rem;
    margin: 10px 0 8px 0;
  }

}
</style>
