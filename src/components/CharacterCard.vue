<script>
export default {
    name: "CharacterCard",
    props: {
        character: Object,
    }
}
</script>

<template>
    <div class="characters-card">
        <div class="card-img">
            <img :src="character.img">
        </div>
        <div class="card-title">
            <h3>{{ character.name }}</h3>
        </div>
        <div class="card-subtitle">
            <h4>Breaking Bad</h4>
            <h5>{{ character.status }}</h5>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.characters-card {
    background-color: $bg-color;
    width: calc(100% / 5 - 20px);

    .card-img {
        padding: .5em;
    }


    .card-title {
        padding: 1em 0;
        text-align: center;
        text-transform: uppercase;
    }

    .card-subtitle {
        padding: 1em 0;
        line-height: 1.5em;
        color: darken(white, 30%);
        text-align: center;
    }
}
</style>