<template>
  <header>
    <NavBar pag="Página Inicial" />
  </header>
  <main>
    <section>
      <article v-for="(item, index) in sectionsList.names" :key="index">
        <router-link
          :to="'/LoginView'"
          class="link"
          @click="salveRoute(sectionsList.routers[index])"
        >
          <CardSections :secao="item" :image="sectionsList.images[index]" />
        </router-link>
      </article>
    </section>
  </main>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import CardSections from '@/components/CardSections.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HomeView',
  components: {
    NavBar,
    CardSections
  },
  data() {
    return {
      sectionsList: {
        names: ['Aprovisionamento', 'Almoxarifado', 'SALC', 'Tesouraria', 'Fisc. Adm.'],
        images: ['aprov.jpeg', 'almox.jpeg', 'salc.jpg', 'tesouraria.jpg', 'fisc-adm.jpg'],
        routers: ['/set-aprov', '/almox', '/salc', '/tesouraria', '/fisc-adm']
      }
    }
  },
  methods: {
    salveRoute(route) {
      localStorage.setItem('route', route)
    }
  }
})
</script>

<style scoped>
section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
article {
  margin: 3% 0 0 0;
}
article:hover {
  transform: scale(1.05);
}
.link {
  text-decoration: none;
}
</style>
