// importo il metodo reactive:
import { reactive } from "vue";

export const store = reactive({
    loading: true,
    selectedStatus: 'all',
    search: '',
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
