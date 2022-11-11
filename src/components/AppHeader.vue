<script>
export default {
    name: "AppHeader",
}
</script>

<template>
    <header class="header">
        <div class="header_logo">
            <img src="../assets/logo.png" alt="Logo Breaking Bad">
        </div>
        <div class="header__title">
            <h1>Breaking Bad Api</h1>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;

.header {
    @include flex(row, flex-start, center);
    padding: 2em 0 1em;

    &_logo {
        width: 10%;

        img {
            width: 80%;
        }
    }

    h1 {
        letter-spacing: .1em;
        text-transform: uppercase;
    }

}
</style>