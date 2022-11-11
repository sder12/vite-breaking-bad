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
    this.store.loading = true;
    axios.get(this.store.apiURL)
      .then((resp) => {
        this.store.characters = resp.data;
        //PROXY
        console.log(this.store.characters);
        this.store.loading = false;
      })
  },
  methods: {
    selectCategory() {
      console.log(this.store.selectOption)
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
      <AppSelect @changeCategory="selectCategory()" />

      <AppCharacters />
    </main>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>