<script>
export default {
    name: "AppCharacters",
}
</script>

<template>
    <div class="characters-wrapper">
        <section class="characters-found">
            <span> Found 62 characters </span>
        </section>
        <section class="characters-list">
            <div class="characters-card">
                <!-- insert Card -->
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.characters-wrapper {
    background-color: white;
    padding: 1em 1em;

    .characters-found {
        background-color: $bg-color;
        padding: 1em 1em;
    }

    .characters-list {
        @include flex(row, space-around, center);
        margin-top: 1em;
        padding: 1em 1em;
        //DEBUG
        height: 300px;
        border: 1px solid red;
    }
}

.characters-card {
    background-color: $bg-color;
}
</style>