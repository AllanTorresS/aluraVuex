<template>
  <div class="container">
    <h1>Novo usuário</h1>
    <form ref="form" @submit.prevent="salvarUsuario">
      <div class="form-group">
        <label for="nome">Nome:</label>
        <input v-model="form.nome" type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label for="E-mail">E-mail:</label>
        <input v-model="form.email"  type="email" class="form-control" />
      </div>
      <div class="form-group">
        <label for="senha">senha:</label>
        <input v-model="form.senha" type="password" class="form-control" />
      </div>
      <button class="btn btn-primary" type="submit">Salvar</button>
    </form>
  </div>
</template>

<script>

export default {
  data: () => ({
    form: {
      nome: "",
      email: "",
      senha: "",
    },
  }),
  methods: {
    salvarUsuario() {
      this.$http.post("/auth/register",this.form).subscribe(
        (response) => {
            console.log(response)
            this.$router.push({name:'login'})
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
