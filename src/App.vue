<template>
  <div id="app">
    <BarraNevagacao/>
    <router-view />
  </div>
</template>

<script>
import BarraNevagacao  from '@/components/BarraNavegacao'
export default {
  components:{
      BarraNevagacao
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push({name:'login'})
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
