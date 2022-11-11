<script>
export default {
    name: "AppSelector",
}
</script>

<template>
    <div class="select">
        <select name="series-tv" id="series-tv">
            <option value="">Select category</option>
            <option value="breaking-bad">Breaking Bad</option>
            <option value="better-call-soul">Better Call Soul</option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
.select {
    padding: 0em 1em 1em;

    #series-tv {
        padding: .5em 2em;
        border-radius: 5px;
        font-size: 1em;
    }
}
</style>