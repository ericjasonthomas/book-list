<template>
  <div id="app">
    <header>
      <div id="branding">
        <div class="container">
          <h1>Books</h1>
        </div>
      </div>
      <div id="nav">
        <div class="container">
          <!-- <router-link to="/">Home</router-link> | -->
          <router-link to="/">Books</router-link> |
          <router-link to="/about">About</router-link>
        </div>
      </div>
    </header>
    <router-view/>
    <footer>
      <div class="container">Books</div>
    </footer>
  </div>
</template>

<style lang="scss">
@import "styles/variables.scss";
@import "styles/global.scss";
@import "styles/linkUnderline.scss";
@import "styles/global.scss";
</style>
