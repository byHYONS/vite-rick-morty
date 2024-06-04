// importo il metodo reactive:
import { reactive } from "vue";

export const store = reactive({
    cards: [],
    meta: {},
    apiURL: 'https://rickandmortyapi.com/api/character',

});
