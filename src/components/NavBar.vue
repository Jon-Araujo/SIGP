<template>
  <nav>
    <img src="../assets/eb-logo.png" alt="Logo do EB." />
    <h1>{{ pag }}</h1>
    <img src="../assets/logo-blog.png" alt="Logo do Btl." />
  </nav>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'NavBar',
  props: {
    pag: String
  }
})
</script>

<style scoped>
nav {
  width: 100%;
  background-color: #393e46;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
h1 {
  font-size: 2rem;
  color: #00adb5;
}
img {
  height: 100%;
  padding: 0 5%;
}
</style>
