<template>
  <div class="container" @submit.prevent="login">
    <h1>Login</h1>
    <form>
      <div class="form-group">
        <label for="email">E-mail:</label>
        <input v-model="form.email" type="email" class="form-control" />
      </div>
      <div class="form-group">
        <label for="Senha">Senha</label>
        <input v-model="form.senha" type="password" class="form-control" />
      </div>

      <button type="submit" class="btn btn-primary btn-block">Entrar</button>
      <router-link :to="{ name: 'novo.usuario' }">Cadastre-se</router-link>
    </form>
  </div>
</template>

<script>

export default {
  data: () => ({
    form: {
      email: "",
      senha: "",
    },
  }),
  methods: {
    login() {
      this.$http
        .post("/auth/login", this.form)
        .subscribe(
          (response) => {
              console.log(response)
              let {data:{access_token:token,user}} = response
              this.$store.commit("DEFINIR_USUARIO_LOGADO",{token,user})
              localStorage.setItem("token",token);
              this.$router.push({name:'gerentes'})
          },
          (err) => {
              console.log(err)
          }
        );
    },
  },
};
</script>

<style></style>
