<script>
import axios from "axios";
import { store } from "./store";
// import vue file
import AppHeader from './components/AppHeader.vue';
import AppSelect from './components/AppSelect.vue';
import AppCharacters from './components/AppCharacters.vue';

//export
export default {
  components: {
    AppHeader,
    AppSelect,
    AppCharacters,

  },
  data() {
    return {
      store
    }
  },
  created() {
    this.showCategory()
  },
  methods: {
    showCategory() {
      this.store.loading = true;

      let urlApi = this.store.apiURL
      if (this.store.selectOption === "Breaking Bad") {
        urlApi += "?category=Breaking+Bad"
      }
      if (this.store.selectOption === "Better Call Saul") {
        urlApi += "?category=Better+Call+Saul"
      }
      axios.get(urlApi)
        .then((resp) => {
          this.store.characters = resp.data;
          this.store.loading = false;
        })
    }
  }
}
</script>

<template>
  <div class="container">
    <!-- Header + Input -->
    <AppHeader />
    <!-- Main -->
    <main class="wrapper">
      <AppSelect @changeCategory="showCategory()" />

      <AppCharacters />
    </main>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>