import { reactive } from "vue";

export const store = reactive({
    characters: [],
    apiURL: "https://www.breakingbadapi.com/api/characters",
    loading: true,
});
