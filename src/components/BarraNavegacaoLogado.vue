<template>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/gerentes" class="nav-link">
              Gerentes
            </router-link>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" @click.prevent="logout">
              Logout
            </a>
          </li>
        </ul>
      </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit("DESLOGAR")
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style>
.navbar {
  background: #27ae60;
}
.navbar-bytebank a {
  color: #fff;
}
.navbar-bytebank a:hover {
  color: #000;
}
</style>
