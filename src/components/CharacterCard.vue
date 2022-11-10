<script>
export default {
    name: "CharacterCard",
}
</script>

<template>
    <div class="characters-card">
        <div class="card-img">
            <img src="https://i.pinimg.com/474x/c4/ac/53/c4ac530ffc80b8f0ac19a526ec49bd18.jpg" alt="char">
        </div>
        <div class="card-title">
            <h3>walter white</h3>
        </div>
        <div class="card-subtitle">
            <h4>Breaking Bad</h4>
            <h5>Presumed dead</h5>
        </div>

    </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.characters-card {
    padding: .5em .5em;
    background-color: $bg-color;
    width: calc(100% / 5);

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