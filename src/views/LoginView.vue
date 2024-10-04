<template>
  <header>
    <NavBar pag="Página de Autenticação" />
  </header>
  <main>
    <section>
      <h3>Realize o Acesso Abaixo:</h3>
      <article>
        <Label
          ><span class="material-symbols-outlined">person</span
          ><input type="text" placeholder="User"
        /></Label>
        <Label
          ><span class="material-symbols-outlined"> password </span
          ><input type="text" placeholder="Senha"
        /></Label>
      </article>
      <button>Login</button>
      <button>Esqueceu sua senha?</button>
    </section>
  </main>
</template>

<script>
import { defineComponent } from 'vue'
import NavBar from '@/components/NavBar.vue'
export default defineComponent({
  name: 'LoginView',
  components: {
    NavBar
  }
})
</script>

<style scoped>
section {
  border: 1px solid #000000;
  border-radius: 8%;
  width: 35vw;
  margin: 8% auto 0;
  height: 50vh;
  /* padding: 10rem 2rem 10rem 2rem; */
}
h3 {
  text-align: center;
  margin: 3rem 0;
  font-size: 1.5rem;
}
article {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
}
label {
  width: 100%;
  margin-bottom: 1rem;
}
span {
  margin: 0 1rem;
  vertical-align: middle;
}
input {
  width: 75%;
  vertical-align: middle;
  border: none;
  border-bottom: 1px solid #000000;
  background-color: #eeeeee;
}
</style>
