<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-white pt-0">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="../assets/logo.png" alt="Logo" width="250" height="75" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
a.active {
  border-bottom: solid;
  border-bottom-color: #FF5C58;
  font-weight: bold;
}
</style>
