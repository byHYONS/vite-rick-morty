// importo il metodo reactive:
import { reactive } from "vue";

export const store = reactive({
    option: '',
    cards: [],
    meta: {},
    apiInfo: {
        url: 'https://rickandmortyapi.com/api/character/',
        endpoints: {
            status: '',
        }
    }

});
