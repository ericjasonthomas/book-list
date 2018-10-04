<template>
  <div class="book-card">
    <a v-bind:href="book.purchaseLink">
      <div class="book-img">
        <img :src="book.imageUrl" :alt="bookImgAlt"/>
      </div>
      <div class="book-info">
        <div class="book-title>">
          <h3>{{ book.title }}</h3>
        </div>
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
  //border: 1px solid #ccc;
  margin:10px auto;
  width:100%;
  display:flex;
  flex-direction: row;
  //  flex-wrap: nowrap;
//  flex-wrap: wrap;
  word-wrap:break-word;
  justify-content: flex-start;
  @media only screen and (max-width: 1280px) {
    width:24%;
  }
  @media only screen and (max-width: 768px) {
    width:48%;
  }
  @media only screen and (max-width: 400px) {
    width:100%;
  }
  a {
    text-decoration: none;
  //  width:100%;
  //  display:flex;
    flex-direction: row;
    flex-wrap: wrap;

  }
}
h3 {
  font-size: 1.5rem;
  min-width: 200px;
  text-align: left;
  padding: .2rem;
  // margin: 40px 0 0;
  // color: #999;
  // word-wrap:break-word;
  // flex-basis:auto;
  // display: inline-block;
  // overflow-wrap: break-word;
  // min-width: 100px;
}
.book-img {
  width: 218px;
}
.book-info{
  border:1px solid #ccc;
//  flex-basis: auto;
  text-align: left;
//  flex:flex-grow;
//  display: inline-block;
}
// a {
// //  color: #42b983;
// }
// .book-card {
// //  border-bottom:1px solid #ccc;
// //  display:block;
// }
.book-card a {
  // background:#eee;
  width:100%;
  position: relative;
  color: #000;
  text-decoration: none;
  padding-bottom: 0.2rem;
  :hover {
    color: #000;
    h3 {
      color:#000;
    }
  }
}
.book-card a:after {
  content: "";
  display:block;
  position: absolute;
  width: 100%;
  height: 4px;
  bottom: 0;
  left: 0;
  background-color: #000;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}
.book-card a:hover:after {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
</style>
