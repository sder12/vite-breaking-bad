<script>
// import vue file
import AppHeader from './components/AppHeader.vue';
import AppSelect from './components/AppSelect.vue';
import AppCharacters from './components/AppCharacters.vue';
export default {
  components: {
    AppHeader,
    AppSelect,
    AppCharacters
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