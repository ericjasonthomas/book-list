<template>
  <div class="page">
    <!-- <Quickbook msg="this book component"/> -->
    <div id="author-info">
      <div>Author: <span>{{ authorInfo.author }}</span></div>
      <div>Author's birthday: <span>{{ authorInfo.birthday }}</span></div>
      <div>Author's birth place: <span>{{ authorInfo.birthPlace }}</span></div>
    </div>
    <div id="sort-btns">
      <button>Sort by Title ASC DESC <span class="arrow-icon"></span></button>
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
import axios from 'axios';

export default {
  name: 'Booklist',
  components: {
    BookCard,
  },
  data() {
    return {
      authorInfo: [],
      books: [],
      currentSort: 'name',
      currentSortDir: 'asc',
    };
  },
  computed: {

  },
  methods: {

  },
  created() {
    axios
      .get('https://s3.amazonaws.com/api-fun/books.json')
      .then((response) => {
        this.authorInfo = response.data.data;
        this.books = response.data.data.books;
      })
      .catch((error) => {
        this.error = error.response.data;
      });
  },
};
</script>
