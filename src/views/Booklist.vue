<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <Quickbook msg="this book component"/> -->
    <BookCard v-for="book in books" :key="book.id" :book="book"/>
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
      books: []
    }
  },
  created(){
    axios
    .get('https://s3.amazonaws.com/api-fun/books.json')
    .then(response => {
      this.books = response.data.data.books;
       console.log('yo book ' + response.data.data.books)
       // console.log('yo book ' + JSON.stringify(response.data))
    })
    .catch(error => {
      console.log('yo son, Error ' + error.response.data)
    })

  },
};
</script>
