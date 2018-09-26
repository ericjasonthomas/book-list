<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <Quickbook msg="this book component"/> -->
    <div id="author-info">
      <p>{{ authorInfo.author }}</p>
      <p>{{ authorInfo.birthday }}</p>
      <p>{{ authorInfo.birthPlace }}</p>
    </div>
    <div class="book-list">
      <BookCard v-for="book in books" :key="book.id" :book="book"/>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import BookCard from '@/components/BookCard.vue';
import axios from 'axios'
export default {
  name: 'Booklist',
  components: {
    BookCard,
  },
  data(){
    return {
      authorInfo:[],
      books: [],
    }
  },
  created(){
    axios
    .get('https://s3.amazonaws.com/api-fun/books.json')
    .then(response => {
      this.authorInfo = response.data.data;
      this.books = response.data.data.books;
    })
    .catch(error => {
      console.log('Error ' + error.response.data)
    });
  },
};
</script>
