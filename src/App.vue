<script>
import AppHeader from './components/AppHeader.vue';
export default {
  components: {
    AppHeader
  }
}
</script>

<template>
  <div class="container">
    <!-- Header + Input -->
    <AppHeader />
    <!-- Main -->
    <main class="wrapper">
      <section>
        <h4>Select Category</h4>
      </section>
      <section>
        <h3>Found 62 cards</h3>
      </section>
    </main>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>