<template>
  <div id="app">
    <header>
      <div id="branding">
        <h1>Books</h1>
      </div>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/books">Books</router-link>
      </div>
      <router-view/>
    </header>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  border:1px solid #ccc;
  margin: 0 auto;
  padding: 0;
}
#branding {
  padding:12px;
}
#nav {
  padding: 20px;
  background:#eee;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
