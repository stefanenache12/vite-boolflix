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
                loadingLogo: true,
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
                    })   
            },
            getTopRatedMovies(){
                axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=5e1982f0fc678db083147fd271708018&language=en')
                     .then(response => {
                        this.store.topMovies = response.data.results;
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
                    })   
            },
            performSearch() {
                this.getMoviesResults();
                this.getSeriesResults();
                store.searchPerformed = true;
            },
            hideLoadingLogo() {
                this.loadingLogo = false;
            },
        },
        created() {
            this.getMoviesResults();
            this.getSeriesResults();
            this.getTopRatedMovies();
            setTimeout(this.hideLoadingLogo, 3000);
        }
    };
</script>

<template class="app">
    <div v-if="loadingLogo" class="loading-screen">
        <h1>BOOFLIX</h1>
    </div>
    <div v-else>
        <HeaderComponent  @search="performSearch()" class="text-center p-3 sticky-top"/>
        <MainComponent class="text-center pb-5"/>
    </div>
</template>

<style lang="scss">
    @use "assets/scss/main";
    .loading-screen {
        text-align: center;
        h1 {
            color: #db0000;
            font-size: 10rem;
            margin-top: 150px;
        }
        h1:hover {
            scale: 1.2;
        }
    }
</style>
