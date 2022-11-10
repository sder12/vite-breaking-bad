<script>
export default {
    name: "AppHeader",
}
</script>

<template>
    <header class="header">
        <div class="header_logo">
            <img src="https://i.pinimg.com/originals/e4/64/7a/e4647ae03886b3acd7c203dd532d6f2b.png"
                alt="Logo Breaking Bad">
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
    gap: 1em;
    padding: 2em 0 1em;

    &_logo {
        height: 40px;
        width: 40px;
    }

    h1 {
        letter-spacing: .1em;
        text-transform: uppercase;
    }

}
</style>