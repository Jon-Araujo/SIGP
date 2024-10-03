<template>
  <header>
    <NavBar pag="Página de Autenticação" />
  </header>
  <main>
    <section>
      <h3>Realize o Acesso Abaixo:</h3>
      <Label>Login:<input type="text" /></Label>
      <Label>Senha:<input type="text" /></Label>
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
  width: 35vw;
  margin: 15% auto;
}
</style>
