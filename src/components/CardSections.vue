<template>
  <div>
    <p>{{ secao }}</p>
    <img :src="`/images/sections/${image}`" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CardSections',
  props: {
    secao: String,
    image: String
  }
})
</script>

<style scoped>
div {
  width: 30vw;
  height: 35vh;
  border-radius: 8%;
}
p {
  text-align: center;
  font-size: 1.35rem;
  background-color: #00adb5;
  line-height: 1.8rem;
  color: #eeeeee;
}
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 0 0 8% 8%;
}
</style>
