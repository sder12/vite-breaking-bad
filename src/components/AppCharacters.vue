<script>
import { store } from "../store";
import CharacterCard from './CharacterCard.vue';
import AppLoader from "./AppLoader.vue";
export default {
    name: "AppCharacters",
    components: {
        CharacterCard,
        AppLoader
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>

    <div class="characters-wrapper">
        <AppLoader v-if="store.loading" />
        <div v-else>
            <section class="characters-found">
                <span> Found 62 characters </span>
            </section>
            <section class="characters-list">
                <!-- insert Card -->
                <CharacterCard v-for="character in store.characters" :key="character.char_id" :character="character" />
            </section>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.characters-wrapper {
    background-color: $bg-color-wrapper;
    padding: 1em 1em;

    .characters-found {
        background-color: $bg-color;
        padding: 1em 1em;
    }

    .characters-list {
        padding: 2em 0;
        @include flex(row, space-around, flex-start);
        flex-wrap: wrap;
        gap: 20px;


        //DEBUG
        // height: 300px;
    }
}
</style>