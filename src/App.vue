<script>
    import HeaderComponent from "./components/HeaderComponent.vue";
    import MainComponent from "./components/MainComponent.vue";
    import axios from "axios";
    import { store } from './store.js';

    export default {

        name: "App",
            components: {
                HeaderComponent,
                MainComponent,
            },
        data() {
            return {
                store,
            };
        },
        methods: {
            getMoviesResults(){
                axios.get('https://api.themoviedb.org/3/search/movie?api_key=5e1982f0fc678db083147fd271708018&',{
                    params: {
                        query: this.store.searchText,
                    }
                })
                     .then(response => {
                        this.store.movies = response.data.results;
                        console.log('movies',this.store.movies)
                    })   
            },
            getSeriesResults(){
                axios.get('https://api.themoviedb.org/3/search/tv?api_key=5e1982f0fc678db083147fd271708018&',{
                    params: {
                        query: this.store.searchText,
                    }
                })
                     .then(response => {
                        this.store.series = response.data.results;
                        console.log('SERIE',this.store.series)
                    })   
            },
            performSearch() {
                this.getMoviesResults();
                this.getSeriesResults();
            } 
        },
        created() {
            this.getMoviesResults();
            this.getSeriesResults();
        }
    };
</script>

<template>
    <HeaderComponent  @search="performSearch()" />

    <MainComponent />
</template>

<style lang="scss">
    @use "assets/scss/main";
</style>
