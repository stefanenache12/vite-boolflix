import { reactive } from 'vue'

export const store = reactive({
    searchText: "", 
    movies:[],
    series:[],
    topMovies:[],
    searchPerformed: false,
});