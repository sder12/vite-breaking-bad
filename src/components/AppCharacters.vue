<script>
import CharacterCard from './CharacterCard.vue';
export default {
    name: "AppCharacters",
    components: {
        CharacterCard,
    }
}
</script>

<template>
    <div class="characters-wrapper">
        <section class="characters-found">
            <span> Found 62 characters </span>
        </section>
        <section class="characters-list">
            <!-- insert Card -->
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
            <CharacterCard />
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
        padding: 2em 1em;
        @include flex(row, space-around, center);
        gap: 1em;
        //DEBUG
        // height: 300px;
    }
}
</style>