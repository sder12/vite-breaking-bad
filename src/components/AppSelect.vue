<script>
import { store } from "../store";
export default {
    name: "AppSelector",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="select">
        <select name="series-tv" id="series-tv" v-model="store.selectOption" @change="$emit('changeCategory')">
            <option selected value="">Select category</option>
            <option value="Breaking Bad">Breaking Bad</option>
            <option value="Better Call Saul">Better Call Soul</option>
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