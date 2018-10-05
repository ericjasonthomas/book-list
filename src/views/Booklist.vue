<template>
  <div class="page">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <section id="author-info">
      <h2>Books by <span>{{ authorInfo.author }}</span></h2>
      <p>{{ authorInfo.author }} was born on
         {{ authorInfo.birthday }} in
         {{ authorInfo.birthPlace }}
      </p>
    </section>
    <section id="search-books">
      <input type="text" v-model="search" placeholder="Search Books"/>
      <span class="underline"></span>
    </section>
    <section id="sort-btns">
      <button class="booklist-btn" v-on:click="sortBooks">Alphabetically Order</button>
      <button class="booklist-btn" v-on:click="reverseBooks">Reverse Order
        <i class="arrow down" v-bind:class="{ active: isActive }"></i>
      </button>
    </section>
    <section class="book-list">
        <BookCard class="listcard"
                  v-for="book in filteredBooks"
                  :key="book.id"
                  :book="book"
                  :authorInfo="authorInfo"/>
        <div class="search-no-match" v-show="filteredBooks < 1 ">
          <div class="emoji">🤔</div>
          <div class="msg"> We can't find a book title that matchs your search</div>
        </div>
    </section>
    <!-- <section v-if="dataloading">Loading...</section> -->
  </div>
</template>

<script>
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
      search: '',
      isActive: false,
      dataLoading: false,
    };
  },
  computed: {
    filteredBooks() {
      return this.books.filter(book =>
        book.title.toLowerCase().match(this.search.toLowerCase()));
    },
  },
  methods: {
    sortBooks() {
      this.books.sort((a, b) => a.title.localeCompare(b.title));
    },
    reverseBooks() {
      this.books.reverse();
      this.isActive = !this.isActive;
    },
  },
  created() {
    // move to vuex
    axios
      .get('https://s3.amazonaws.com/api-fun/books.json')
      .then((response) => {
        this.authorInfo = response.data.data;
        this.books = response.data.data.books;
        this.dataLoading = false;
      })
      .catch((error) => {
        this.error = error.response.data;
        // console.log("error");
      })
  },
};
</script>
