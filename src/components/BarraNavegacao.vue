<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-bytebank">
      <a class="navbar-brand" href="#">ByteBank</a>
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
      <BarraNevagacaoLogado v-if="usuarioLogado" />
      <BarraNevagacaoDeslogado v-else />
    </nav>
  </div>
</template>

<script>
import BarraNevagacaoDeslogado from "@/components/BarraNavegacaoDeslogado";
import BarraNevagacaoLogado from "@/components/BarraNavegacaoLogado";
export default {
  components: {
    BarraNevagacaoLogado,
    BarraNevagacaoDeslogado,
  },
  methods: {},
  computed: {
    usuarioLogado() {
      console.log(this.$store.state.token)
      return Boolean(this.$store.state.token);
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
