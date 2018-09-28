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
          <router-link to="/">Books</router-link> |
          <router-link to="/about">About</router-link>
        </div>
      </div>
      <router-view/>
    </header>
  </div>
</template>

<style lang="scss">
@import "styles/global.scss";

</style>
