<script>
import axios from "axios";
import { store } from "./store";
// import vue file
import AppHeader from './components/AppHeader.vue';
import AppSelect from './components/AppSelect.vue';
import AppCharacters from './components/AppCharacters.vue';
export default {
  components: {
    AppHeader,
    AppSelect,
    AppCharacters
  },
  data() {
    return {
      store
    }
  },
  created() {
    axios.get("https://www.breakingbadapi.com/api/characters")
      .then((resp) => {
        this.store.characters = resp.data;
        //PROXY
        console.log(this.store.characters)
      })
  }
}
</script>

<template>
  <div class="container">
    <!-- Header + Input -->
    <AppHeader />
    <!-- Main -->
    <main class="wrapper">
      <AppSelect />
      <AppCharacters />
    </main>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>