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

      //CONCATENAZIONE, AGGIUNGO ?category=...
      // if (this.store.selectOption === "Breaking Bad") {
      //   urlApi += "?category=Breaking+Bad"
      // }
      // if (this.store.selectOption === "Better Call Saul") {
      //   urlApi += "?category=Better+Call+Saul"
      // }
      let params = {};

      if (this.store.selectOption === "BreakingBad") {
        params.category = "Breaking Bad";
      }
      if (this.store.selectOption === "BetterCallSaul") {
        params.category = "Better Call Saul";
      }
      // console.log(params, "params")
      axios.get(urlApi, { params: params })
        .then((resp) => {
          this.store.characters = resp.data;
          this.store.loading = false;
        })
        .catch(error => {
          console.log(error)
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